# King Framework
King es un framework para el desarrollo de Kratia, basado en los frameworks de Django y el framework que provee IBM en los ejemplos de hyperledger
Consta de tres clases que actuan como Model, View y  Mapper (MVM)

# Clases
## State (Model)
Clase abstracta que representa un estado en la blockchain

### Atributos
- className [String]: Nombre de la clase de un modelo
- key [String]: Clave formada por 1 o más de sus atributos
- keyAtributes [String[]]: Lista de los atributos que componen la clave
- currentState [String]: Estado actual del objeto State
- stateLists[Statelist[]]: Lista de todas las StateList a las que un State pertenece

### Métodos
#### Getters
- getClass()
- getKey()
- getCurrentState()
- Serializers
- serialize():
- deserialize():
#### Key:
- makeKey(): Crea una clave a partir de los atributos del objeto
- splitKey():  Divide la clave en los atributos del objeto (ver si hace falta
#### ABMC:
- save(): Guarda el objeto en bd, lo crea si no existe y lo actualiza si ya existe
- static getByKey(): Busca un objeto en bd y lo devuelve si lo encuentra
- static getAll(): Busca todos los objetos que cumplan con un criterio de búsqueda
- remove(): Elimina un objeto de la bd


## StateList (Mapper)
Clase concreta que permite mapear objetos State a registros de la blockchain y mantiene una lista de ellos de acuerdo a un criterio
Un estado puede pertenecer a múltiples listas de estado, pero cada lista mapea un único estado.

### Atributos
- ctx [Strub]: Interfaz para la comunicación con la bd
- name [String]: Nombre de la lista
- stateClass[String]: Nombre de la clase de los estados que almacena

### Métodos:
- save(): Guarda el objeto en bd, lo crea si no existe y lo actualiza si ya existe
- static getByKey(): Busca un objeto en bd y lo devuelve si lo encuentra
- static getAll(): Busca todos los estados que cumplan con un criterio de búsqueda
- remove(): Elimina un estado de la lista


## Contract (View)
Clase concreta heredable que contiene los métodos para comunicarse con la blockchain.

Actúa como un model view permitiendo interactuar con un estado


### Atributos:
-  state [State]: estado a modificar
- stateLists [State]: Listas de estado que almacenan el estado
- allowedActions: Lista de todas las acciones válidas en el contrato

### Métodos:
- create(): Guarda el objeto en bd, lo crea si no existe y lo actualiza si ya existe
- get():  Busca un objeto en bd y lo devuelve si lo encuentra
- list(): Busca todos los estados que cumplan con un criterio de búsqueda
- delete(): Elimina un estado de la blockchain
