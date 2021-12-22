#!/bin/sh

cd ..

DESTINATION="{{cookiecutter.project_parent}}/{{cookiecutter.project_name}}"

echo "Moving to ${DESTINATION}"

mkdir -p $DESTINATION

mv ./{{cookiecutter.backend_folder}} $DESTINATION

cd $DESTINATION

# Make Empty Folders
mkdir ./src/db/seeds 
mkdir ./src/db/migrations 

cd {{cookiecutter.backend_folder}}

npm i

code .

exit 0