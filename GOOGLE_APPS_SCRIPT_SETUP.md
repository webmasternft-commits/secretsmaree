# Configuration Google Apps Script

Ce guide explique comment configurer l'envoi automatique des formulaires vers Google Sheets et par email.

## Etape 1 : Ouvrir Google Apps Script

1. Ouvrez votre Google Sheet : https://docs.google.com/spreadsheets/d/1GpwveTzEpu0bMEqdCuMDK4XXBThqaK6JvhnPcy3XU9o/edit
2. Cliquez sur **Extensions** > **Apps Script**

## Etape 2 : Copier le code

Supprimez tout le code existant et collez ce script :

```javascript
// Configuration
const EMAIL_DESTINATAIRE = 'max@secretsmaree.com';
const NOM_ENTREPRISE = 'Les Secrets de la Marée';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // Ajouter au Google Sheet
    addToSheet(data);

    // Envoyer email de notification
    sendEmailNotification(data);

    return ContentService.createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    console.error('Erreur:', error);
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput('Le script fonctionne correctement.');
}

function addToSheet(data) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet;

  if (data.type === 'reservation') {
    sheet = ss.getSheetByName('Reservations') || createSheet(ss, 'Reservations', [
      'Date soumission', 'Nom', 'Email', 'Telephone', 'Date souhaitee', 'Nb personnes', 'Message', 'Statut'
    ]);

    sheet.appendRow([
      data.submittedAt || new Date().toLocaleString('fr-FR'),
      data.name,
      data.email,
      data.phone,
      data.date,
      data.guests,
      data.message,
      'Nouveau'
    ]);
  } else {
    sheet = ss.getSheetByName('Contacts') || createSheet(ss, 'Contacts', [
      'Date soumission', 'Nom', 'Email', 'Sujet', 'Message', 'Statut'
    ]);

    sheet.appendRow([
      data.submittedAt || new Date().toLocaleString('fr-FR'),
      data.name,
      data.email,
      data.subject,
      data.message,
      'Nouveau'
    ]);
  }
}

function createSheet(ss, name, headers) {
  const sheet = ss.insertSheet(name);
  sheet.appendRow(headers);
  sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold').setBackground('#0284c7').setFontColor('white');
  sheet.setFrozenRows(1);
  return sheet;
}

function sendEmailNotification(data) {
  let subject, body;

  if (data.type === 'reservation') {
    subject = `🦪 Nouvelle demande de réservation - ${data.name}`;
    body = `
Nouvelle demande de réservation sur ${NOM_ENTREPRISE}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 INFORMATIONS CLIENT
   Nom : ${data.name}
   Email : ${data.email}
   Téléphone : ${data.phone}

📅 RESERVATION
   Date souhaitée : ${data.date || 'Non précisée'}
   Nombre de personnes : ${data.guests}

💬 MESSAGE
${data.message || 'Aucun message'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Voir toutes les réservations :
https://docs.google.com/spreadsheets/d/1GpwveTzEpu0bMEqdCuMDK4XXBThqaK6JvhnPcy3XU9o/edit

Reçu le : ${data.submittedAt || new Date().toLocaleString('fr-FR')}
    `;
  } else {
    subject = `📧 Nouveau message de contact - ${data.name}`;
    body = `
Nouveau message de contact sur ${NOM_ENTREPRISE}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 INFORMATIONS
   Nom : ${data.name}
   Email : ${data.email}
   Sujet : ${data.subject || 'Non précisé'}

💬 MESSAGE
${data.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Voir tous les contacts :
https://docs.google.com/spreadsheets/d/1GpwveTzEpu0bMEqdCuMDK4XXBThqaK6JvhnPcy3XU9o/edit

Reçu le : ${data.submittedAt || new Date().toLocaleString('fr-FR')}
    `;
  }

  MailApp.sendEmail({
    to: EMAIL_DESTINATAIRE,
    subject: subject,
    body: body,
    replyTo: data.email
  });
}

// Fonction de test
function testScript() {
  const testData = {
    type: 'reservation',
    name: 'Test Client',
    email: 'test@example.com',
    phone: '0612345678',
    date: 'Samedi 5 Avril 2026',
    guests: '4',
    message: 'Ceci est un test',
    submittedAt: new Date().toLocaleString('fr-FR')
  };

  addToSheet(testData);
  console.log('Test réussi ! Vérifiez votre Google Sheet.');
}
```

## Etape 3 : Sauvegarder et deployer

1. Cliquez sur **Fichier** > **Enregistrer** (ou Ctrl+S)
2. Nommez le projet : `SecretsMaree-Formulaires`
3. Cliquez sur **Déployer** > **Nouveau déploiement**
4. Cliquez sur l'engrenage et sélectionnez **Application Web**
5. Configurez :
   - **Description** : Formulaires Les Secrets de la Marée
   - **Exécuter en tant que** : Moi
   - **Qui peut accéder** : Tout le monde
6. Cliquez sur **Déployer**
7. **IMPORTANT** : Autorisez les permissions demandées (Google Sheets et Gmail)
8. Copiez l'URL du déploiement (elle ressemble à : `https://script.google.com/macros/s/AKfycb.../exec`)

## Etape 4 : Configurer le site

1. Ouvrez le fichier `src/services/formService.ts`
2. Remplacez `VOTRE_SCRIPT_ID` par l'URL copiée :

```typescript
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycb.../exec';
```

## Etape 5 : Tester

1. Dans Google Apps Script, cliquez sur **testScript** dans le menu déroulant des fonctions
2. Cliquez sur **Exécuter**
3. Vérifiez que les données apparaissent dans votre Google Sheet

## Structure du Google Sheet

Le script créera automatiquement 2 onglets :

### Onglet "Reservations"
| Date soumission | Nom | Email | Telephone | Date souhaitee | Nb personnes | Message | Statut |

### Onglet "Contacts"
| Date soumission | Nom | Email | Sujet | Message | Statut |

## Depannage

### Les emails n'arrivent pas
- Vérifiez vos spams
- Vérifiez que l'adresse email dans `EMAIL_DESTINATAIRE` est correcte
- Google limite à 100 emails/jour pour les comptes gratuits

### Les données n'apparaissent pas dans le Sheet
- Vérifiez que vous avez bien autorisé les permissions
- Testez avec la fonction `testScript`
- Vérifiez les logs : **Affichage** > **Journaux d'exécution**

### Erreur CORS
- Assurez-vous que "Qui peut accéder" est sur "Tout le monde"
- Redéployez l'application après chaque modification du code
