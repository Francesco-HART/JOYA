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
                          Pourquoi une rubrique FAQ aussi compl??te ?{" "}
                          <i className="fa fa-angle-down"></i>
                        </a>
                      </div>
                      <Collapse isOpen={collapse === 1 ? isOpen : false}>
                        <div>
                          <div className="card-body mx-3">
                            <p>
                              Nous illustrons les principales actions et
                              manipulations ?? effectuer dans le cadre de
                              l'utilisation de l'application JOYA. Dans ces FAQ
                              vous retrouverez toutes les informations
                              n??cessaires pour vous familiariser avec
                              l'application. <br></br>
                              Vous y trouverez une multitude de conseils afin de
                              profiter pleinement de l'application JOYA.{" "}
                              <br></br>
                              <br></br>
                              NB: L'apparence de l'application peut varier
                              l??g??rement par rapport aux FAQ en raison de mises
                              ?? jour et d'am??liorations continues.
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
                          O?? trouver l'application JOYA ?{" "}
                          <i className="fa fa-angle-down"></i>
                        </a>
                      </div>
                      <Collapse isOpen={collapse === 2 ? isOpen : false}>
                        <div>
                          <div className="card-body mx-3">
                            <ol>
                              <li>
                                Pour t??l??charger l'application JOYA, recherchez
                                &#171; JOYA APP &#187; dans l'Apple App
                                Store&#174; ou sur Google Play Store et cliquer
                                sur ?? Installer ??
                              </li>
                              <li>
                                Ouvrez l'application JOYA.
                                <ul>
                                  <li>
                                    Si vous avez d??j?? un compte, appuyez sur
                                    &#171; Connexion &#187;.
                                  </li>
                                  <li>
                                    Pour cr??er un compte, appuyez sur &#171;
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
                          Cr??er un compte JOYA{" "}
                          <i className="fa fa-angle-down"></i>
                        </a>
                      </div>
                      <Collapse isOpen={collapse === 3 ? isOpen : false}>
                        <div>
                          <div className="card-body mx-3">
                            <p>
                              Pour utiliser nos services il vous faudra cr??er un
                              compte JOYA. Il n'est pas possible d'acc??der au
                              contenu de l'application sans cr??ation de compte.{" "}
                              <br></br>
                              Pour vous inscrire, vous devez cliquer sur le
                              bouton &#171; Inscription &#187; <br></br>
                              Il suffit de remplir et soumettre le formulaire
                              d'inscription. Vous serez ensuite redirig?? vers
                              l'??cran de connexion.
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
                          Authentification &#38; Acc??s ?? l'application JOYA{" "}
                          <i className="fa fa-angle-down"></i>
                        </a>
                      </div>
                      <Collapse isOpen={collapse === 4 ? isOpen : false}>
                        <div>
                          <div className="card-body mx-3">
                            <p>
                              Afin d'acc??der ?? l'application JOYA, il faut
                              imp??rativement vous authentifier. <br></br> Pour
                              vous connecter vous devez cliquer sur le bouton
                              &#171; Connexion &#187; <br></br>
                              Sur cet ??cran vous devez saisir votre identifiant
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
                          Mot de passe oubli??{" "}
                          <i className="fa fa-angle-down"></i>
                        </a>
                      </div>
                      <Collapse isOpen={collapse === 5 ? isOpen : false}>
                        <div>
                          <div className="card-body mx-3">
                            <p>
                              Il est possible de cliquer sur &#171; Mot de passe
                              oubli?? ? &#187; afin de r??initialiser ce dernier
                              en cas d'oubli. Renseignez simplement votre
                              adresse email et les instructions de
                              r??initialisation vous seront envoy??es par mail ??
                              l'adresse indiqu??e.
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
                              d??s que vous le souhaitez, il vous suffit de
                              cliquer sur &#171; Mon compte &#187; <br></br>
                              Vous avez ici acc??s aux donn??es li??es ?? votre
                              compte, vous devez alors renseigner votre{" "}
                              <u>ancien mot de passe</u> et saisir ?? deux
                              reprises le <u>nouveau mot de passe</u> afin de
                              proc??der ?? la modification.
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
                          D??connexion <i className="fa fa-angle-down"></i>
                        </a>
                      </div>
                      <Collapse isOpen={collapse === 7 ? isOpen : false}>
                        <div>
                          <div className="card-body mx-3">
                            <p>
                              Pour vous d??connecter de l'application vous devez
                              cliquer sur le bouton &#171; D??connexion &#187;{" "}
                              <br></br>
                              Vous serez redirig??s vers l'??cran de connexion.
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
                              Une fois l'authentification valid??e, l'application
                              JOYA va s'ouvrir directement sur la page d'accueil
                              qui affiche la liste des capteurs enregistr??s. ??
                              votre toute premi??re connexion, cette liste est
                              vide, nous vous invitons ?? connecter votre premier
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
                          Ajouter un capteur JOYA ?? mon application{" "}
                          <i className="fa fa-angle-down"></i>
                        </a>
                      </div>
                      <Collapse isOpen={collapse === 9 ? isOpen : false}>
                        <div>
                          <div className="card-body mx-3">
                            <p>
                              Tout l'int??r??t de JOYA c'est l'association de
                              notre capteur ?? notre application. Pour associer
                              un nouvel appareil ?? votre compte, cliquer sur le
                              bouton central de la barre de navigation (l'ic??ne
                              de QR Code).
                            </p>
                            <ol>
                              <li>
                                Veuillez <strong>Autoriser</strong>{" "}
                                l'application ?? acc??der ?? votre appareil photo.
                              </li>
                              <li>
                                Dirigez l'objectif de l'appareil photo de votre
                                appareil sur le QR Code du capteur ?? associer.
                                D??s que le QR Code est reconnu, vous ??tes
                                redirig??s vers l'??cran suivant.
                              </li>
                              <li>
                                Donner un nom ?? votre plante. <br></br> Vous
                                pouvez l'appeler <i>Spike Le Cactus</i> ou tout
                                simplement <i>Cactus</i>, c'est comme vous
                                voulez !
                              </li>
                              <li>
                                Renseigner la localisation de votre plante.
                                C'est tout de suite plus simple pour s'y
                                retrouver quand vous avez plusieurs capteurs
                                enregistr??s. <br></br> Encore une fois vous
                                choisissez, ??a peut ??tre tr??s pr??cis{" "}
                                <i>
                                  Pr??s de la fen??tre de gauche dans le bureau
                                </i>{" "}
                                ou simplement <i>Bureau</i>.
                              </li>
                              <li>
                                Enfin vous s??lectionnez le type de la plante, l??
                                c'est facile on a d??j?? pr??par?? une liste pour
                                vous !
                              </li>
                              <li>Cliquer sur ?? Valider ?? et c'est termin??.</li>
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
                              Contactez directement le service client ??
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
                          Guide de d??marrage rapide{" "}
                          <i className="fa fa-angle-down"></i>
                        </a>
                      </div>
                      <Collapse isOpen={collapse === 11 ? isOpen : false}>
                        <div>
                          <div className="card-body mx-3">
                            <ol>
                              <li>
                                Disposez la pile (fournie) dans l'emplacement
                                d??di??.
                              </li>
                              <li>
                                Placez le capteur dans le terreau de la plante ??
                                surveiller.
                              </li>
                            </ol>
                            <p>
                              Nous recommandons de ne pas immerger compl??tement
                              le capteur - notamment afin qu'il puisse capter la
                              luminosit?? environnante. <br></br>
                              Ne versez pas d'eau directement dans la chambre du
                              capteur. Assurez vous qu'il soit correctement
                              ferm?? avant de le mettre en place.
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
                              Vous pouvez associer ?? votre compte plusieurs
                              capteurs JOYA. <br></br> Selon le nombre de
                              capteurs associ??s, il appara??t sur votre ??cran une
                              ou plusieurs images qui correspondent ?? la plante
                              renseign??e ainsi que le nom qui lui a ??t?? donn?? au
                              moment de la configuration du capteur. <br></br>
                              En cliquant sur l'image d'une plante vous acc??dez
                              ?? une fiche d'informations et les donn??es que
                              remonte le capteur en temps r??el. Les statistiques
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
                              Chaque plante ?? des param??tres pr??-d??finis mais il est possible de personnaliser les seuils 
                              d'alertes et l'envoi de notifications. Rendez vous sur la plante dont vous souhaitez modifier 
                              les param??tres et ajuster les seuils sur le curseur selon vos pr??f??rences.
                            </p>
                          </div>
                        </div>
                      </Collapse>
                    </div> */}

                    {/* <div className="card border-theme mb-3 radius-0">
                      <div className="card-header" onClick={() => toggleMenu(14)}>
                        <a href="javascript" onClick={(e) => { e.preventDefault(); }} className="">
                          Je ne re??ois pas mes notifications.{" "}
                          <i className="fa fa-angle-down"></i>
                        </a>
                      </div>
                      <Collapse isOpen={collapse === 14 ? isOpen : false}>
                        <div>
                          <div className="card-body mx-3">
                            <ol>
                              <li>V??rifiez les autorisations de l'application dans les param??tres du t??l??phone.</li>
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
                          Je n'arrive pas ?? connecter mon capteur ??
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
                                V??rifiez que votre t??l??phone est bien connect??
                                au m??me r??seau WiFi que celui renseigner lors de
                                la configuration du capteur.
                              </li>
                              <li>
                                V??rifiez que le r??seau fonctionne correctement.
                                Une connexion Internet est indispensable au bon
                                fonctionnement de l'application. Le cas ??ch??ant
                                essayez de red??marrer votre routeur.
                              </li>
                              <li>
                                Assurez-vous que le mot de passe WiFi saisi est
                                correct et/ou n'a pas ??t?? modifi??.
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
                          Les donn??es du capteur n'apparaissent pas dans le
                          suivi de ma plante.{" "}
                          <i className="fa fa-angle-down"></i>
                        </a>
                      </div>
                      <Collapse isOpen={collapse === 16 ? isOpen : false}>
                        <div>
                          <div className="card-body mx-3">
                            <p>
                              Dans le cas o?? les donn??es n'apparaissent pas mais
                              que le capteur est bien reconnu, v??rifiez votre
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
                          Les donn??es remont??es par mon capteur semblent
                          incorrectes <i className="fa fa-angle-down"></i>
                        </a>
                      </div>
                      <Collapse isOpen={collapse === 17 ? isOpen : false}>
                        <div>
                          <div className="card-body mx-3">
                            <ol>
                              <li>
                                Le capteur est peut-??tre enfonc?? trop
                                profond??ment dans le pot de la plante.
                              </li>
                              <li>
                                L'humidit?? du terreau s'est peut-??tre accumul??e
                                seulement au niveau du capteur.
                              </li>
                              <li>
                                Assurez-vous que le capteur ne se trouve pas ??
                                proximit?? d'une source de chaleur.
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
                                Cliquer longuement sur l'image associ??e au
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
                          Je n'ai pas trouv?? de solution ?? mon probl??me.{" "}
                          <i className="fa fa-angle-down"></i>
                        </a>
                      </div>
                      <Collapse isOpen={collapse === 19 ? isOpen : false}>
                        <div>
                          <div className="card-body mx-3">
                            Si le probl??me persiste, contactez le service
                            client*.<br></br>
                            Votre mot de passe est personnel, JOYA ne vous
                            demandera jamais cette information afin de vous
                            founir une assistance.<br></br>
                            <br></br>
                            *S'il s'agit d'un probl??me li?? au capteur, veuillez
                            vous munir de votre facture et/ou de votre num??ro de
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
