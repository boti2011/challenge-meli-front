# VISUALIZADOR DE ALERTAS - SERVIDORES MELI

Esta aplicación da una interfaz para la consulta de alertas por sus propiedades, por medio de comodines.

EL problema planteado se describe en la siguiente [wiki](https://github.com/boti2011/challenge-meli/wiki/Planteamiento-del-problema).

## Instalación

Se debe tener instalado lo siguiente:
- npm 6.4.1
- Node 10.15.3
- Angular CLI 10.0.8

## Uso
Clonar el repositorio de forma local

```git
git clone https://github.com/boti2011/challenge-meli-front.git
```
Abrir una consola en la raíz donde fue clonado el repositorio.

Ejecutar los siguiente comandos para descargar las dependencias y correr la aplicación:

```
npm install --install dependencies
ng serve -- run the application
```

## Ingresar a la aplicación

Cuando se ejecute de formar local se debe ingresar a la url [http://localhost:4200/](http://localhost:4200/) 

Si se quiere ingresar al sitio web en donde se encuentra publicada esta aplicación ingresar a la url [https://challengemelibcsb.000webhostapp.com/](https://challengemelibcsb.000webhostapp.com/)

## REALIZAR BÚSQUEDAS EN LA APLICACIÓN

Para realizar búsquedas se debe ingresar la palabra requerida dentro del cuadro de búsqueda que se observa cuando se ingresa a la página, además de esto hay que oprimir el botón "Buscar" para ejecutar la búsqueda.

En el [API de búsqueda](https://github.com/boti2011/challenge-meli-query) se realizó la implementación de la búsqueda "Full-text search" que nos permite usar MySQL.

Para este caso se configuran para está búsqueda los siguientes campos correspondientes a las alertas:
- Server Name
- Server Type
- Alert ID
- Description Alert

Para realizar las búsquedas de alertas por medio de comodines se debe tener en cuenta que:
- EL comodín * funciona para buscar por palabras incompletas, y este debe ser añadido en la palabra que queremos buscar:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - SERV*

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![asterisk_example](https://github.com/boti2011/challenge-meli-front/tree/master/src/assets/evidence/search_asterisk.png?raw=true)

- EL comodín * funciona para buscar valores que tengan estrictamente una palabra, y este debe ser añadido en la palabra que queremos buscar:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - SERVER_1+

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![plus_example](https://github.com/boti2011/challenge-meli-front/tree/master/src/assets/evidence/search_plus.png?raw=true)

Si se requiere más información sobre está funcionalidad, dirigirse a [http://download.nust.na/pub6/mysql/doc/refman/5.0/es/fulltext-boolean.html](http://download.nust.na/pub6/mysql/doc/refman/5.0/es/fulltext-boolean.html)