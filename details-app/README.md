# Details 

Second Micro Frontend Application 

## Development server

Run `ng serve` for a dev server. 
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build 
sudo ng build --prod --output-hashing none  --single-bundle true

# Build Docker Image
sudo docker build -t details-app .

# To Run
sudo docker run --name details -p 8082:80 details-app
