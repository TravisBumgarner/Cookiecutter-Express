#!/bin/sh

mkdir ./{{cookiecutter.backend_folder}}/src/db/seeds 
mkdir ./{{cookiecutter.backend_folder}}/src/db/migrations 

cd {{cookiecutter.backend_folder}}

yarn

exit 0
