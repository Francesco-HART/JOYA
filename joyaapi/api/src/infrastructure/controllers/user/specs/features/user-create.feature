Feature: creation d'un utilisateur
    Background: un utilisateur et un administrateur existent
        Given l'admin Bob et l'utilisateur Lea existent

    Scenario Outline: échec - non respect des champs obligatoires : (email, password)
        When je renseigne un email:<email>
        And un mot de passe:<password>
        Then je reçois une erreur
        Examples:
            | email | password |
            |       | XYZ      |
            | 12345 |          |
            |       |          |

    Scenario: succès
        Given je suis connecté en tant que Bob
        When je renseigne l'email: x-
        And le model de passe: user12345
        And la nom: Bart
        Then l'utilisateur est créée et sauvegardée

    Scenario: échec - création d'un utilisateur sans être admin'
        Given je suis connecté en tant que Lea
        When je renseigne l'email: ABCD
        And je renseigne le mot de passe: admin12345
        Then je reçois une erreur 403


    Scenario: échec - création d'un utilisateur sans être connecté'
        When je renseigne l'email: ABCD
        And je renseigne le mot de passe: admin12345
        Then je reçois une erreur 401
