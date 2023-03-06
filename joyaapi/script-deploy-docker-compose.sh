#!/bin/bash


unset REGISTRY_DOMAIN_NAME USER_NAME FOLDER HELP

while getopts 'hd:u:f:' o
do
    # si il trouve l'option il attribu #
    case $o in
     h) HELP=1;;
     d) REGISTRY_DOMAIN_NAME=$OPTARG;;
     u) USER_NAME=$OPTARG;;
     f) FOLDER=$OPTARG;;
    esac
done

usage()
{
  echo "Usage: initialisation

            [ -d ] [ -d REGISTRY_DOMAIN_NAME]
            [ -u ] [ -u USER_NAME ]
            [ -f ] [ -f FOLDER]
            [ -h ] [ -h HELP ]"
  exit 2
}

help()
{
  echo "Usage: initialisation

            [ -d ] [ -d REGISTRY_DOMAIN_NAME] is the domain registry name like <git.m2mfactory.fr:5050> and is required
            [ -f ] [ -f FOLDER ] this is the folder name where is your docker-compose file 
            [ -u ] [ -u USER_NAME ] this is the user name wich is associated in your registry and is required
            [ -h ] [ -h HELP ] more information about the script

EXAMPLE : sudo sh script.sh -d git.m2mfactory.fr -p test_pwd -u test_user
  "
  exit 2
}


if [ $HELP ]; then
 help
fi

if [ -z $REGISTRY_DOMAIN_NAME ]; then
 echo "Enter Domaine Name"
 usage
elif [ -z $USER_NAME ]; then
 echo "Enter Registry User"
 usage
elif [ -z $FOLDER ]; then
 echo "Enter docker-compose folder name "
 usage
else
cd "$FOLDER"
docker login -u $USER_NAME --password-stdin < ~/home/admin/gitlab-login $REGISTRY_DOMAIN_NAME
docker-compose pull
docker-compose up -d
fi


