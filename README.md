# Tarea_2_SD

## Integrantes:
* Christian Bastias
* Joaquin Neira

---
## Como ejecutar codigo

Primero se debera tener instalado [Docker](https://www.docker.com/) y utilizar la herramienta de Docker-compose.

Como ultimo paso se debera ejecutar la siguiente linea de comando:

```
docker-compose up
```
---
# Informacion del repositorio

## Productor (Login)

* El sistema de login es una API REST en donde se trabaja con la carpeta **Productor**, el cual contiene un metodo del tipo POST en donde se produce un topico. El puerto en donde se trabaja es el **3001**.

## Consumidor 

* Para el consumidor es una API REST el cual trabaja cone el tipo GET el cual obtiene los datos del usuario (user) y se trabaja en el puerto 4000.
---

## Preguntas

* ¿Por qué Kafka funciona bien en este escenario?

Funciona bien en estos escenario ya que es una plataforma distribuida en donde nos ayuda a comunicar un consumidor con un productor. El siste de publicador, suscribtor y broker funciona bien en estos casos ya que alcanza una escabilidad, ademas esto sirve para varios publicadores y consumidores, esto quiere decir que no es solo para un sistema de login si no que para varios sistemas de login de distintas aplicaciones. Para finalizar se puede destacar que este modelo para el escenario actual es bueno, ya que sirve para distribuir la carga de tareas del login como es el bloquear usrario por fallos en los ingrsos.


* Basado en las tecnolog ́ıas que usted tiene a su disposición (Kafka, backend) ¿Qué haría usted para manejar
una gran cantidad de usuarios al mismo tiempo? 

Es posible balancear la carga generando distintos brocker y esto nos ayudaria mucho en momendo donde se tiene gran canridad de usarios. Se puede ver la escalabilidad en los publicadores y consumidores generando replicas para cada uno.



