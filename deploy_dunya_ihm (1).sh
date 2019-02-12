#!/usr/bin/env bash

user=Romeo
password=alex9409
dunya_lien="git clone -b dev http://$user:$password@192.168.9.16/agroduniya"

echo "========ETEINDRE ET SUPPRIMER LES DOCKERS=============="
docker stop ihm_duniya_test
docker rm ihm_duniya_test
docker rmi ihm_duniya
echo "========FIN=========="

echo "========SUPPRIMER LES PROJETS SI ILS EXISTENT=============="
rm -rf duniya
echo "========FIN=========="

echo "========CLONAGE DES RESOURCES=============="
$dunya_lien/duniya.git
echo "========FIN CLONAGE DES RESOURCES=========="

echo "=======DEBUT DEPLOYEMENT DES RESSOURCES SF========"
cd duniya
docker build -f Dockerfile -t ihm_duniya .
docker run -p 8020:4200 --name ihm_duniya_test --net=host -d ihm_duniya
cd ..
echo "=======FIN DEPLOYEMENT DES RESSOURCES SF========"
