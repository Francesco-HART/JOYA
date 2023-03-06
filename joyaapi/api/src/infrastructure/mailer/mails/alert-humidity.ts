import { MailDTO } from '../dto/mail.dto';

const mailAlertHumidity = ({
  email,
  humidity,
  name,
}: {
  email: string;
  humidity: number;
  name: string;
}): MailDTO => {
  return {
    to: email,
    subject: `Alerte votre plante ${name}`,
    html: `
            <div>
              <h4>Votre plante ${name} à un niveau d'humidité de ${humidity}%</h4>
               
                <p>Nous vous invitons à faire attention et prendre le temps d'entretenir votre plante</p>
                <p>https://lejeunedeveloppeur.fr/</p>
                <p>Respectueusement l'équipe JOYA</p>
                <p>Ceci est un mail envoyé automatiquement, merci de ne pas y répondre."</p>
              </div>`,
  };
};

export default mailAlertHumidity;
