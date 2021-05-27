# PoC
KratiaChain proof of concept

## KratiaChain
Con el desarrollo de KratiaChain buscamos crear un sistema de votacion seguro, transparente y descentralizado que proporcione a sus usuarios un alto grado de confiaza para llevar a cabo una votación de forma digital.

### Registrarse / Iniciar sesión
![alt text](/doc/images/singin.png)

### Votar
![alt text](/doc/images/votacion.png)

### Ver resultados
![alt text](/doc/images/resultados.png)

## Instalación
- [Instalar fabric](https://hyperledger-fabric.readthedocs.io/en/release-2.2/install.html)

- Dentro del directorio fabric samples descargar el proyecto 
```
git clone https://github.com/kratiachain/PoC.git
```
- Instalar depndencias dentro de application, chaincode y cliente-aplicacion
```
npm install
```

## Crear la red, registrar el canal y desplegar el contrato

```
cd ./../test-network
./network.sh down
./network.sh up createChannel -c votenet -ca
./network.sh deployCC -c votenet -ccn votecontract -ccp ./../PoC/chaincode -ccl javascript
```

## Aplicacion de prueba
Despues de iniciar la red de fabric, para probar las funciones del contrato ejecutar la aplicación de prueba:
```
node application/app.js
```

### Resultado
![alt text](/doc/images/app_result.png)

## Aplicacion cliente de votos
Para ejecutar la aplicación de votos:
```
cd cliente-votacion/
npm start
```

## Copyright
Para el desarrollo de este prototipo se utilizaron las funcionalidades de fabric y funcionalidades provistas en los ejemplos desarrollados por IBM bajo la licencia Apache-2.0
