import { MailDTO } from '../dto/mail.dto';

const mailAlertTemperature = ({
  email,
  temperature,
  name,
}: {
  email: string;
  temperature: number;
  name: string;
}): MailDTO => {
  return {
    to: email,
    subject: `Alerte votre plante ${name}`,
    html: `
            <div>
              <h4>Votre plante ${name} à une temperature de ${temperature}%</h4>
               
                <p>Nous vous invitons à faire attention et prendre le temps d'entretenir votre plante</p>
                <p>https://lejeunedeveloppeur.fr/</p>
                <p>Respectueusement l'équipe JOYA</p>
                <p>Ceci est un mail envoyé automatiquement, merci de ne pas y répondre."</p>
              </div>`,
  };
};

export default mailAlertTemperature;
