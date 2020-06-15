# ContainerApp

Sample container application, integrate and compose the Microfrontend application.

## Run in Local 
```
Run `ng serve` 
```


## Build 
```
ng build --prod --output-hashing none 
```

## Build Image
```
sudo docker build -t container-app .
```

## Run
```
sudo docker run -d --name container-app -p 8080:80  container-app
```
