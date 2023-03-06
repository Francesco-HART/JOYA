import { MailDTO } from '../dto/mail.dto';

const mailAlertSolFertillity = ({
  email,
  solFertillity,
  name,
}: {
  email: string;
  solFertillity: number;
  name: string;
}): MailDTO => {
  return {
    to: email,
    subject: `Alerte votre plante ${name}`,
    html: `
            <div>
              <h4>Votre plante ${name} à une fertillité de ${solFertillity}%</h4>
               
                <p>Nous vous invitons à faire attention et prendre le temps d'entretenir votre plante</p>
                <p>https://lejeunedeveloppeur.fr/</p>
                <p>Respectueusement l'équipe JOYA</p>
                <p>Ceci est un mail envoyé automatiquement, merci de ne pas y répondre."</p>
              </div>`,
  };
};

export default mailAlertSolFertillity;
