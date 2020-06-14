#!/bin/bash
# Simple script to build angular app
# Usage ./build.sh
# ----------------------------------------------------

echo "---------------------------------------------"
echo "Build Container App"
echo "---------------------------------------------"
cd container-app
sudo rm -rf node_modules
sudo rm -rf dist
npm install
sudo ng build --prod --output-hashing none 

echo "---------------------------------------------"
echo "Build Details App"
echo "---------------------------------------------"
cd ../details-app 
sudo rm -rf node_modules
sudo rm -rf dist
npm install 
sudo ng build --prod --output-hashing none --single-bundle true

echo "---------------------------------------------"
echo "Build Form App"
echo "---------------------------------------------"
cd ../user-app
sudo rm -rf node_modules
sudo rm -rf dist
npm install
sudo ng build --prod --output-hashing none --single-bundle true
cd ..

echo "---------------------------------------------"
echo "Build Docker Images"
echo "---------------------------------------------"
sudo docker-compose build
