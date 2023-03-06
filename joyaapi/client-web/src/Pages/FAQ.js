import React, { useEffect, useState } from "react";
import { Collapse } from "reactstrap";
import Menu from "../components/Navbar";

const FAQ = () => {
  useEffect(() => {
    let timer = setTimeout(function () {
      document.querySelector(".loader-wrapper").style = "display: none";
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const [collapse, setCollapse] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const toggleMenu = (id) => {
    if (collapse === id) {
      setIsOpen(false);
      setCollapse(null);
    } else {
      setIsOpen(true);
      setCollapse(id);
    }
  };
  return (
    <div>
      {/* Navbar Component*/}
      {/* <Menu /> */}

      {/*blog Section start*/}
      <div className="page-margin">
        {/*breadcrumb start*/}
        <div className="breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-text-center d-align-center">
                <h2 className="title">
                  <span>FAQ</span>
                </h2>
              </div>
              <div className="col-md-6 col-sm-6 col-text-center">
                <nav aria-label="breadcrumb" className="blog-bradcrumb ">
                  <ol className="breadcrumb bg-transparent mb-0">
                    <li className="breadcrumb-item">
                      <a href={`${process.env.PUBLIC_URL}/`}>Accueil</a>
                    </li>
                    <li className="breadcrumb-item active">
                      <a
                        href="javascript"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        FAQ
                      </a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/*breadcrumb end*/}

        {/*sign in*/}
        <section>
          <div className="innerpage-decor">
            <div className="innerpage-circle1">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/Testimonial2.png`}
                alt=""
              />
            </div>
            <div className="innerpage-circle2">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/Testimonial1.png`}
                alt=""
              />
            </div>
          </div>
          {/*faq in*/}
          <div className="faq">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div id="accordion">
                    <div className="card border-theme mb-3 radius-0">
                      <div
                        className="card-header"
                        onClick={() => toggleMenu(1)}
                      >
                        <a
                          href="javascript"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className=""
                        >
                          Pourquoi une rubrique FAQ aussi complète ?{" "}
                          <i className="fa fa-angle-down"></i>
                        </a>
                      </div>
                      <Collapse isOpen={collapse === 1 ? isOpen : false}>
                        <div>
                          <div className="card-body mx-3">
                            <p>
                              Nous illustrons les principales actions et
                              manipulations à effectuer dans le cadre de
                              l'utilisation de l'application JOYA. Dans ces FAQ
                              vous retrouverez toutes les informations
                              nécessaires pour vous familiariser avec
                              l'application. <br></br>
                              Vous y trouverez une multitude de conseils afin de
                              profiter pleinement de l'application JOYA.{" "}
                              <br></br>
                              <br></br>
                              NB: L'apparence de l'application peut varier
                              légèrement par rapport aux FAQ en raison de mises
                              à jour et d'améliorations continues.
                            </p>
                          </div>
                        </div>
                      </Collapse>
                    </div>

                    <div className="card border-theme mb-3 radius-0">
                      <div
                        className="card-header"
                        onClick={() => toggleMenu(2)}
                      >
                        <a
                          href="javascript"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className=""
                        >
                          Où trouver l'application JOYA ?{" "}
                          <i className="fa fa-angle-down"></i>
                        </a>
                      </div>
                      <Collapse isOpen={collapse === 2 ? isOpen : false}>
                        <div>
                          <div className="card-body mx-3">
                            <ol>
                              <li>
                                Pour télécharger l'application JOYA, recherchez
                                &#171; JOYA APP &#187; dans l'Apple App
                                Store&#174; ou sur Google Play Store et cliquer
                                sur « Installer »
                              </li>
                              <li>
                                Ouvrez l'application JOYA.
                                <ul>
                                  <li>
                                    Si vous avez déjà un compte, appuyez sur
                                    &#171; Connexion &#187;.
                                  </li>
                                  <li>
                                    Pour créer un compte, appuyez sur &#171;
                                    Inscription &#187;.
                                  </li>
                                </ul>
                              </li>
                            </ol>
                          </div>
                        </div>
                      </Collapse>
                    </div>

                    <div className="card border-theme mb-3 radius-0">
                      <div
                        className="card-header"
                        onClick={() => toggleMenu(3)}
                      >
                        <a
                          href="javascript"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className=""
                        >
                          Créer un compte JOYA{" "}
                          <i className="fa fa-angle-down"></i>
                        </a>
                      </div>
                      <Collapse isOpen={collapse === 3 ? isOpen : false}>
                        <div>
                          <div className="card-body mx-3">
                            <p>
                              Pour utiliser nos services il vous faudra créer un
                              compte JOYA. Il n'est pas possible d'accéder au
                              contenu de l'application sans création de compte.{" "}
                              <br></br>
                              Pour vous inscrire, vous devez cliquer sur le
                              bouton &#171; Inscription &#187; <br></br>
                              Il suffit de remplir et soumettre le formulaire
                              d'inscription. Vous serez ensuite redirigé vers
                              l'écran de connexion.
                            </p>
                          </div>
                        </div>
                      </Collapse>
                    </div>

                    <div className="card border-theme mb-3 radius-0">
                      <div
                        className="card-header"
                        onClick={() => toggleMenu(4)}
                      >
                        <a
                          href="javascript"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className=""
                        >
                          Authentification &#38; Accès à l'application JOYA{" "}
                          <i className="fa fa-angle-down"></i>
                        </a>
                      </div>
                      <Collapse isOpen={collapse === 4 ? isOpen : false}>
                        <div>
                          <div className="card-body mx-3">
                            <p>
                              Afin d'accéder à l'application JOYA, il faut
                              impérativement vous authentifier. <br></br> Pour
                              vous connecter vous devez cliquer sur le bouton
                              &#171; Connexion &#187; <br></br>
                              Sur cet écran vous devez saisir votre identifiant
                              (adresse email) et votre mot de passe.
                            </p>
                          </div>
                        </div>
                      </Collapse>
                    </div>

                    <div className="card border-theme mb-3 radius-0">
                      <div
                        className="card-header"
                        onClick={() => toggleMenu(5)}
                      >
                        <a
                          href="javascript"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className=""
                        >
                          Mot de passe oublié{" "}
                          <i className="fa fa-angle-down"></i>
                        </a>
                      </div>
                      <Collapse isOpen={collapse === 5 ? isOpen : false}>
                        <div>
                          <div className="card-body mx-3">
                            <p>
                              Il est possible de cliquer sur &#171; Mot de passe
                              oublié ? &#187; afin de réinitialiser ce dernier
                              en cas d'oubli. Renseignez simplement votre
                              adresse email et les instructions de
                              réinitialisation vous seront envoyées par mail à
                              l'adresse indiquée.
                            </p>
                          </div>
                        </div>
                      </Collapse>
                    </div>

                    <div className="card border-theme mb-3 radius-0">
                      <div
                        className="card-header"
                        onClick={() => toggleMenu(6)}
                      >
                        <a
                          href="javascript"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className=""
                        >
                          Modifier mon mot de passe{" "}
                          <i className="fa fa-angle-down"></i>
                        </a>
                      </div>
                      <Collapse isOpen={collapse === 6 ? isOpen : false}>
                        <div>
                          <div className="card-body mx-3">
                            <p>
                              La modification de votre mot de passe est possible
                              dès que vous le souhaitez, il vous suffit de
                              cliquer sur &#171; Mon compte &#187; <br></br>
                              Vous avez ici accès aux données liées à votre
                              compte, vous devez alors renseigner votre{" "}
                              <u>ancien mot de passe</u> et saisir à deux
                              reprises le <u>nouveau mot de passe</u> afin de
                              procéder à la modification.
                            </p>
                          </div>
                        </div>
                      </Collapse>
                    </div>

                    <div className="card border-theme mb-3 radius-0">
                      <div
                        className="card-header"
                        onClick={() => toggleMenu(7)}
                      >
                        <a
                          href="javascript"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className=""
                        >
                          Déconnexion <i className="fa fa-angle-down"></i>
                        </a>
                      </div>
                      <Collapse isOpen={collapse === 7 ? isOpen : false}>
                        <div>
                          <div className="card-body mx-3">
                            <p>
                              Pour vous déconnecter de l'application vous devez
                              cliquer sur le bouton &#171; Déconnexion &#187;{" "}
                              <br></br>
                              Vous serez redirigés vers l'écran de connexion.
                            </p>
                          </div>
                        </div>
                      </Collapse>
                    </div>

                    <div className="card border-theme mb-3 radius-0">
                      <div
                        className="card-header"
                        onClick={() => toggleMenu(8)}
                      >
                        <a
                          href="javascript"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className=""
                        >
                          Bienvenue sur l'application JOYA{" "}
                          <i className="fa fa-angle-down"></i>
                        </a>
                      </div>
                      <Collapse isOpen={collapse === 8 ? isOpen : false}>
                        <div>
                          <div className="card-body mx-3">
                            <p>
                              Une fois l'authentification validée, l'application
                              JOYA va s'ouvrir directement sur la page d'accueil
                              qui affiche la liste des capteurs enregistrés. À
                              votre toute première connexion, cette liste est
                              vide, nous vous invitons à connecter votre premier
                              capteur pour utiliser l'application.
                            </p>
                          </div>
                        </div>
                      </Collapse>
                    </div>

                    <div className="card border-theme mb-3 radius-0">
                      <div
                        className="card-header"
                        onClick={() => toggleMenu(9)}
                      >
                        <a
                          href="javascript"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className=""
                        >
                          Ajouter un capteur JOYA à mon application{" "}
                          <i className="fa fa-angle-down"></i>
                        </a>
                      </div>
                      <Collapse isOpen={collapse === 9 ? isOpen : false}>
                        <div>
                          <div className="card-body mx-3">
                            <p>
                              Tout l'intérêt de JOYA c'est l'association de
                              notre capteur à notre application. Pour associer
                              un nouvel appareil à votre compte, cliquer sur le
                              bouton central de la barre de navigation (l'icône
                              de QR Code).
                            </p>
                            <ol>
                              <li>
                                Veuillez <strong>Autoriser</strong>{" "}
                                l'application à accéder à votre appareil photo.
                              </li>
                              <li>
                                Dirigez l'objectif de l'appareil photo de votre
                                appareil sur le QR Code du capteur à associer.
                                Dès que le QR Code est reconnu, vous êtes
                                redirigés vers l'écran suivant.
                              </li>
                              <li>
                                Donner un nom à votre plante. <br></br> Vous
                                pouvez l'appeler <i>Spike Le Cactus</i> ou tout
                                simplement <i>Cactus</i>, c'est comme vous
                                voulez !
                              </li>
                              <li>
                                Renseigner la localisation de votre plante.
                                C'est tout de suite plus simple pour s'y
                                retrouver quand vous avez plusieurs capteurs
                                enregistrés. <br></br> Encore une fois vous
                                choisissez, ça peut être très précis{" "}
                                <i>
                                  Près de la fenêtre de gauche dans le bureau
                                </i>{" "}
                                ou simplement <i>Bureau</i>.
                              </li>
                              <li>
                                Enfin vous sélectionnez le type de la plante, là
                                c'est facile on a déjà préparé une liste pour
                                vous !
                              </li>
                              <li>Cliquer sur « Valider » et c'est terminé.</li>
                            </ol>
                          </div>
                        </div>
                      </Collapse>
                    </div>

                    <div className="card border-theme mb-3 radius-0">
                      <div
                        className="card-header"
                        onClick={() => toggleMenu(10)}
                      >
                        <a
                          href="javascript"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className=""
                        >
                          Mon capteur n'a pas de QR Code.{" "}
                          <i className="fa fa-angle-down"></i>
                        </a>
                      </div>
                      <Collapse isOpen={collapse === 10 ? isOpen : false}>
                        <div>
                          <div className="card-body mx-3">
                            <p>
                              Contactez directement le service client à
                              fibyouclient@gmail.com
                            </p>
                          </div>
                        </div>
                      </Collapse>
                    </div>

                    <div className="card border-theme mb-3 radius-0">
                      <div
                        className="card-header"
                        onClick={() => toggleMenu(11)}
                      >
                        <a
                          href="javascript"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className=""
                        >
                          Guide de démarrage rapide{" "}
                          <i className="fa fa-angle-down"></i>
                        </a>
                      </div>
                      <Collapse isOpen={collapse === 11 ? isOpen : false}>
                        <div>
                          <div className="card-body mx-3">
                            <ol>
                              <li>
                                Disposez la pile (fournie) dans l'emplacement
                                dédié.
                              </li>
                              <li>
                                Placez le capteur dans le terreau de la plante à
                                surveiller.
                              </li>
                            </ol>
                            <p>
                              Nous recommandons de ne pas immerger complètement
                              le capteur - notamment afin qu'il puisse capter la
                              luminosité environnante. <br></br>
                              Ne versez pas d'eau directement dans la chambre du
                              capteur. Assurez vous qu'il soit correctement
                              fermé avant de le mettre en place.
                            </p>
                          </div>
                        </div>
                      </Collapse>
                    </div>

                    <div className="card border-theme mb-3 radius-0">
                      <div
                        className="card-header"
                        onClick={() => toggleMenu(12)}
                      >
                        <a
                          href="javascript"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className=""
                        >
                          Ma page d'accueil <i className="fa fa-angle-down"></i>
                        </a>
                      </div>
                      <Collapse isOpen={collapse === 12 ? isOpen : false}>
                        <div>
                          <div className="card-body mx-3">
                            <p>
                              Vous pouvez associer à votre compte plusieurs
                              capteurs JOYA. <br></br> Selon le nombre de
                              capteurs associés, il apparaît sur votre écran une
                              ou plusieurs images qui correspondent à la plante
                              renseignée ainsi que le nom qui lui a été donné au
                              moment de la configuration du capteur. <br></br>
                              En cliquant sur l'image d'une plante vous accédez
                              à une fiche d'informations et les données que
                              remonte le capteur en temps réel. Les statistiques
                              de la plante apparaissent dans un graphique.
                            </p>
                          </div>
                        </div>
                      </Collapse>
                    </div>

                    {/* <div className="card border-theme mb-3 radius-0">
                      <div className="card-header" onClick={() => toggleMenu(13)}>
                        <a href="javascript" onClick={(e) => { e.preventDefault(); }} className="">
                          Alertes &#38; Notifications{" "}
                          <i className="fa fa-angle-down"></i>
                        </a>
                      </div>
                      <Collapse isOpen={collapse === 13 ? isOpen : false}>
                        <div>
                          <div className="card-body mx-3">
                            <p>
                              Chaque plante à des paramètres pré-définis mais il est possible de personnaliser les seuils 
                              d'alertes et l'envoi de notifications. Rendez vous sur la plante dont vous souhaitez modifier 
                              les paramètres et ajuster les seuils sur le curseur selon vos préférences.
                            </p>
                          </div>
                        </div>
                      </Collapse>
                    </div> */}

                    {/* <div className="card border-theme mb-3 radius-0">
                      <div className="card-header" onClick={() => toggleMenu(14)}>
                        <a href="javascript" onClick={(e) => { e.preventDefault(); }} className="">
                          Je ne reçois pas mes notifications.{" "}
                          <i className="fa fa-angle-down"></i>
                        </a>
                      </div>
                      <Collapse isOpen={collapse === 14 ? isOpen : false}>
                        <div>
                          <div className="card-body mx-3">
                            <ol>
                              <li>Vérifiez les autorisations de l'application dans les paramètres du téléphone.</li>
                              <li>Assurez-vous que vous n'avez pas modifier les seuils d'alertes.</li>
                            </ol>
                          </div>
                        </div>
                      </Collapse>
                    </div> */}

                    <div className="card border-theme mb-3 radius-0">
                      <div
                        className="card-header"
                        onClick={() => toggleMenu(15)}
                      >
                        <a
                          href="javascript"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className=""
                        >
                          Je n'arrive pas à connecter mon capteur à
                          l'application JOYA.{" "}
                          <i className="fa fa-angle-down"></i>
                        </a>
                      </div>
                      <Collapse isOpen={collapse === 15 ? isOpen : false}>
                        <div>
                          <div className="card-body mx-3">
                            <ol>
                              <li>
                                Assurez-vous d'avoir scanner le bon QR Code.
                              </li>
                              <li>
                                Vérifiez que votre téléphone est bien connecté
                                au même réseau WiFi que celui renseigner lors de
                                la configuration du capteur.
                              </li>
                              <li>
                                Vérifiez que le réseau fonctionne correctement.
                                Une connexion Internet est indispensable au bon
                                fonctionnement de l'application. Le cas échéant
                                essayez de redémarrer votre routeur.
                              </li>
                              <li>
                                Assurez-vous que le mot de passe WiFi saisi est
                                correct et/ou n'a pas été modifié.
                              </li>
                            </ol>
                          </div>
                        </div>
                      </Collapse>
                    </div>

                    <div className="card border-theme mb-3 radius-0">
                      <div
                        className="card-header"
                        onClick={() => toggleMenu(16)}
                      >
                        <a
                          href="javascript"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className=""
                        >
                          Les données du capteur n'apparaissent pas dans le
                          suivi de ma plante.{" "}
                          <i className="fa fa-angle-down"></i>
                        </a>
                      </div>
                      <Collapse isOpen={collapse === 16 ? isOpen : false}>
                        <div>
                          <div className="card-body mx-3">
                            <p>
                              Dans le cas où les données n'apparaissent pas mais
                              que le capteur est bien reconnu, vérifiez votre
                              connexion Internet.
                            </p>
                          </div>
                        </div>
                      </Collapse>
                    </div>

                    <div className="card border-theme mb-3 radius-0">
                      <div
                        className="card-header"
                        onClick={() => toggleMenu(17)}
                      >
                        <a
                          href="javascript"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className=""
                        >
                          Les données remontées par mon capteur semblent
                          incorrectes <i className="fa fa-angle-down"></i>
                        </a>
                      </div>
                      <Collapse isOpen={collapse === 17 ? isOpen : false}>
                        <div>
                          <div className="card-body mx-3">
                            <ol>
                              <li>
                                Le capteur est peut-être enfoncé trop
                                profondément dans le pot de la plante.
                              </li>
                              <li>
                                L'humidité du terreau s'est peut-être accumulée
                                seulement au niveau du capteur.
                              </li>
                              <li>
                                Assurez-vous que le capteur ne se trouve pas à
                                proximité d'une source de chaleur.
                              </li>
                            </ol>
                          </div>
                        </div>
                      </Collapse>
                    </div>

                    <div className="card border-theme mb-3 radius-0">
                      <div
                        className="card-header"
                        onClick={() => toggleMenu(18)}
                      >
                        <a
                          href="javascript"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className=""
                        >
                          Supprimer un capteur de mon application{" "}
                          <i className="fa fa-angle-down"></i>
                        </a>
                      </div>
                      <Collapse isOpen={collapse === 18 ? isOpen : false}>
                        <div>
                          <div className="card-body mx-3">
                            <ol>
                              <li>
                                Cliquer longuement sur l'image associée au
                                capteur que vous souhaitez supprimer.
                              </li>
                              <li>
                                Validez la demande de suppression de l'appareil.
                              </li>
                            </ol>
                          </div>
                        </div>
                      </Collapse>
                    </div>

                    <div className="card border-theme mb-3 radius-0">
                      <div
                        className="card-header"
                        onClick={() => toggleMenu(19)}
                      >
                        <a
                          href="javascript"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className=""
                        >
                          Je n'ai pas trouvé de solution à mon problème.{" "}
                          <i className="fa fa-angle-down"></i>
                        </a>
                      </div>
                      <Collapse isOpen={collapse === 19 ? isOpen : false}>
                        <div>
                          <div className="card-body mx-3">
                            Si le problème persiste, contactez le service
                            client*.<br></br>
                            Votre mot de passe est personnel, JOYA ne vous
                            demandera jamais cette information afin de vous
                            founir une assistance.<br></br>
                            <br></br>
                            *S'il s'agit d'un problème lié au capteur, veuillez
                            vous munir de votre facture et/ou de votre numéro de
                            commande avant de contacter le service client.
                          </div>
                        </div>
                      </Collapse>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*faq up*/}
        </section>
        {/*sign up*/}

        {/*Footer Section start*/}
        <div className="bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="copyright-section">
                  <p>2021 - 2022 | JOYA by Fibyou&copy;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Footer Section End*/}
      </div>
      {/*blog Section start*/}
    </div>
  );
};

export default FAQ;
