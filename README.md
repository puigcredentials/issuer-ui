
# Introduction 
IN2 Issuer UI is the presentation side application for the IN2 Issuer project. It is a Angular application. 

## Architecture
The application is based on the following architecture:
### Issuer UI 

## Main Features
// TODO: Add the main features of the application
·Landing Page

# Getting Started
This aplication is developed, builded and tested in Visual Studio Code 
1. Clone the repository:
```git clone https://github.com/in2workspace/issuer-ui.git```
2. Install dependencies:
```npm install```
1. Start aplication in local development
```npm start```
1. Build docker image
```docker build -t issuer-ui .```
1. Run docker image
```docker run -p 4200:8088 -e login_url=http://yourdomain.com -e wallet_url=http://yourdomain.com issuer-ui```
# Customization



# Build and Test
We have 3 different ways to build and test the project depending on the selected Spring Boot profile.
- `test` profile: This profile is used for unit testing. It uses an in-memory database and does not require any external dependencies.
- `local` profile: This profile is used for local development. It uses an in-memory database and generates default data to test the application. You need to run a set of docker containers to run the application (Orion Context Broker and MongoDb).
- `local-docker` profile: This profile is used for local development. It uses a dockerized database and generates default data to test the application.
- `dev` profile: This profile is used for development. It uses a dockerized database and generates default data to test the application.
- `docker` you can set environment variables dinamicaly using '-e WCA_URL=http://yourdomain.com' all the diferent environment variables are WCA_URL, DATA_URL, LOGIN_URL, REGISTER_URL, EXECCONT_URI, VP_URL, CRED_URI, CREDID_URI, USER_URI
# Contribute

# License

# Documentation
