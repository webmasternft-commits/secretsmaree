// Configuration - Remplacer par l'URL de votre Google Apps Script déployé
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwi_sPdY_yhGqT5GRt59TB7qbQVcOZ7XzFH2TJPNZifS1lv_K221Uc1lq1-DQw_lJRI/exec';

export interface ContactFormData {
  type: 'contact';
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
}

export interface ReservationFormData {
  type: 'reservation';
  name: string;
  email: string;
  phone: string;
  date: string;
  guests: string;
  message: string;
  submittedAt: string;
}

export type FormData = ContactFormData | ReservationFormData;

export async function submitForm(data: FormData): Promise<{ success: boolean; message: string }> {
  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        submittedAt: new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' }),
      }),
    });

    // Avec mode 'no-cors', on ne peut pas lire la réponse
    // On considère que c'est un succès si pas d'erreur
    return { success: true, message: 'Formulaire envoyé avec succès' };
  } catch (error) {
    console.error('Erreur lors de l\'envoi du formulaire:', error);
    return { success: false, message: 'Erreur lors de l\'envoi. Veuillez réessayer.' };
  }
}
