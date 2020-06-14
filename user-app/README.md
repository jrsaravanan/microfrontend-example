# User App

User microfrontend application
## Development server

Run `ng serve` for a dev server. 
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.



## Build angular
sudo ng build --prod --output-hashing none  --single-bundle true

## Build docker image
sudo docker build -t user-app .

## Run Image
sudo docker run --name usr -p 8081:80 user-app
