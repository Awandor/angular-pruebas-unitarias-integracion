# Pruebas Unitarias y Pruebas de integración

Generado con > `ng new pruebas-unitarias` 

Ahora iniciamos las pruebas > `ng test`

Esto abre una ventana nueva con el framework de pruebas.

Angular incluye Karma que produce un entorno de pruebas para ejecutar las pruebas y mostrar los resultados,
Karma puede ejecutar pruebas hechas con Jasmine, Mocha, QUnit

Angular incluye Jasmine que es el framework de pruebas, no hace falta instalar nada ni configurar nada,
Jasmine sirve para describir las pruebas

Por defecto se crea el archivo `app/app.component.spec.ts` que trae 3 pruebas

Cuando corremos los test Jasmine ejecuta todos los archivos que tengan `.spec.ts`

Si queremos anular temporalmente un archivo de pruebas añadimos `x` delante del `describe` quedando `xdescribe`, todas las pruebas
dentro serán ignoradas.

También no podemos saltar una prueba añadiendo `x` delante del `it`


# Pruebas unitarias

Son pruebas aisladas sin presencia de recursos externos, si hacen falta recursos externos se simulan.

## Pruebas de string

Creamos `src/app/basicas/string/string.ts` y `string.spec.ts` en la misma carpeta.

Añadimos código a `string.ts` que después vamos a probar

Todos los archivos de pruebas constan de dos partes, el `describe` y el `it` que son de Jasmine.


## Pruebas de números

Creamos `src/app/basicas/numeros/numeros.ts` y `numeros.spec.ts` en la misma carpeta.

Añadimos código a `numeros.ts` que después vamos a probar


## Pruebas de booleanos

Creamos `src/app/basicas/booleanos/booleanos.ts` y `booleanos.spec.ts` en la misma carpeta.

Añadimos código a `booleanos.ts` que después vamos a probar


## Pruebas de arreglos

Creamos `src/app/basicas/arreglos/arreglos.ts` y `arreglos.spec.ts` en la misma carpeta.

Añadimos código a `arreglos.ts` que después vamos a probar


## Pruebas de clases

Creamos `src/app/basicas/clases/clases.ts` y `clases.spec.ts` en la misma carpeta.

Añadimos código a `clases.ts` que después vamos a probar

Usamos el método `beforeEach`


## Comprobar el porcentaje de cobertura

Jazmine viene con `code-coverage` incluido

> ng test --code-coverage

Ahora al final del test en la consola tenemos:

=============================== Coverage summary ===============================
Statements   : 95% ( 19/20 )
Branches     : 75% ( 3/4 )
Functions    : 100% ( 7/7 )
Lines        : 94.74% ( 18/19 )
================================================================================

También se ha creado una carpeta coverage en la raiz, si abrimos index.html se nos muestra de manera gráfica


## Pruebas con eventEmitter

Creamos `src/app/intermedio/eventEmitter/jugador2.ts` y `jugador2.spec.ts` en la misma carpeta.


## Pruebas con formulario

Creamos `src/app/intermedio/formularios/formulario.ts` y `formulario.spec.ts` en la misma carpeta.


## Pruebas con espías

Creamos `src/app/intermedio/espias/medicos.component.ts`, `medicos.service.ts` y `medicos.component.spec.ts` en la misma carpeta.

Importamos `MedicoComponent` en `app.modules.ts`


# Pruebas de integración y e2e

Las pruebas de integración son pruebas donde interactúan dos o más componentes, por ejemplo acciones en el componente HTML.

Apesar de haber pasado las pruebas de integración, la aplicación puede fallar cuando el usuario la usa, aquí entra el tema
de las pruebas end to end (e2e)


## Configuraciones de las pruebas de integración

Creamos `src/app/intermedio2`

Creamos un componente > `ng g c intermedio2/medico --skipTests -is` No vamos a generar el archivo de pruebas de forma automática
y con `-is`, inline style, indicamos que no queremos un archivo separado de css 

Creamos `src/app/intermedio2/medico/medico.component.spec.ts`

Mediante `TestBed` y `ComponentFixture` creamos un componente de prueba que tiene todas los métodos, pipes de `medico.component.ts`

Realizamos algunas pruebas básicas, pero aun no son de integración.

Vamos a crear un servicio `ng g s intermedio2/medico/medico --skipTests --flat` con `--flat` no se crea una carpeta

Llamamos al método getMedicosService desde el método getMedicos de `medico.component.ts`. Como hemos inyectado MedicoService en el
constructor al ejecutar las pruebas nos da un error de que no hemos proveido `HttpClient`, lo añadimos a `providers` en `medico.component.spec.ts`
después no da el error de que no hemos proveido `HttpHandler`, hacemos lo mismo con éste.

Hemos visto como añadir dependencias a `providers` desde los errores generados


## Generar el archivo de pruebas automáticamente

Vamos a crear un componente con Angular CLI y que nos genere el archivo de pruebas automáticamente y el css aparte.

> `ng g c intermedio2/hospital`

Se crea `hospital.component.spec.ts` es casi igual a `medico.component.spec.ts` con unas pequeñas diferencias.


## Primera prueba de integración

Creamos `src/app/intermedio2/incrementador` y dentro pegamos los archivos de los recursos del curso.

Añadimos `IncrementadorComponent` a `app.module.ts`

En tslint.json cambiamos `no-inferrable-types` a false, así no nos da warning por poner el tipado string e inmediatamente establecer un valor


## Separar las pruebas unitarias de las pruebas de integración

Podemos mezclar ambos tipos en un mismo archivo pero es mejor separarlas como se va a ver en la siguiente prueba unitaria

Creamos `src/app/intermedio2/incrementador/incrementador.component.unit.spec.ts`


## Prueba de existencia de una ruta en particular

Creamos `src/app/intermedio2/rutas/app.routes.ts` y `app.routes.spec.ts`

Creamos unas rutas en `app.routes.ts`


## Prueba de existencia de la directiva router-outlet

En `app.component.html` borramos todo y ponemos <router-outlet></router-outlet> para que funcionen las rutas.

No vamos a probar aquí que las rutas funcionan, eso ya está probado con las pruebas unitarias
pero vamos a montar la estructura correcta, ahora en `app.module.ts` importamos `RouterModule.forRoot(RUTAS)`

La prueba de app.component falla porque hay que importar `RouterModule.forRoot(RUTAS)` pero esto puede ser pesado y no es necesario
podemos en vez de ello importar `RoterTestingModule`

Ahora vamos a probar que existe la directiva <router-outlet></router-outlet>

Vamos a `app.component.spec.ts`


## Prueba de existencia de un RouterLink hacia MedicosComponent

Añadimos a `app.component.html` unos `routerLink`

Vamos a `app.component.spec.ts` hay que importar `RouterTestingModule.withRoutes( [] )`
recorremos el arreglo de enlaces y comprobamos si alguno de ellos contiene `/medicos`



# Pruebas de integración avanzadas

## Pruebas en navbar

Vamos a resolver errores por componentes desconocidos.

Creamos un navbar > `ng g c avanzado/navbar`, hay que asegurarse de que ha sido importado a `app.module.ts`

Quitamos los enlaces de `app.component.html` y los pegamos en `navbar.component.html` y en su lugar colocamos <Navbar></Navbar>

Ahora tenemos que importarlo a `app.component.spec.ts` y funciona

Pero si tuviésemos muchas importaciones podemos hacer otra cosa, no lo importamos y añadimos a `schemas: [NO_ERRORS_SCHEMA]`
esto va hacer que el test ignore cualquier componente o directiva que no conozca.

Ahora la prueba de existencia de un RouterLink hacia MedicosComponent la quitamos de `app.component.spec.ts` y la llevamos
a `navbar.component.spec.ts`, hay que importar `RouterTestingModule.withRoutes( [] )`


## Prueba de routerMedico

Vamos a preparar un componente que recibe parámetros y navega > `ng g c avanzado/routerMedico -is`
hay que asegurarse de que ha sido importado a `app.module.ts`

Ahora vamos a reemplazar servicios de Angular por servicios falsos

Normalmente no vamos a hacer pruebas de componentes de Angular, estos ya sabemos que funcionan, haremos mocks de estos
componentes

Esta prueba es muy importante porque se puede implementar en muchas cosas parecidas a ésta.

Vamos a `router-medico.component.spec.ts` necesitamos añadir a providers: Router y ActivatedRoute porque `router-medico.component.ts`
los usa en el constructor.

De `Router` sólo nos interesa el método `navigate` para probar que efectivamente fue llamado

Podemos crear una clase `FakeRouter` con el método `navigate` que sólo recibe parámetros y no hace nada y luego podemos
decirle al test que Router es `FakeRouter`

Vamos a comprobar los parámetros enviados a un `Observable` para ello importamos `from` que nos permite inyectar
valores a un `Observable`






# GIT

En nuestra cuenta de github creamos un repositorio

Si no tenemos repositorio git local lo creamos > `git init`

Si no tenemos archivo `.gitignore` lo creamos, especialmente para evitar `node_modules`

Añadimos los cambios a GIT> `git add .`
Commit > `git commit -m "Primer commit"`

Si en este punto borro accidentalmente algo puedo recuperarlo con > `git checkout -- .`

Que nos recontruye los archivos tal y como estaban en el último commit.

Enlazamos el repositorio local con un repositorio externo en GitHub donde tenemos cuenta y hemos creado un repositorio
`git remote add origin https://github.com/Awandor/angular-pruebas-unitarias-integracion.git`

Situarnos en la rama master > `git branch -M master`

Subir todos los cambios a la rama master remota > `git push -u origin master`

Para reconstruir en local el código de GitHub nos bajamos el código y ejecutamos `npm install` que instala todas las dependencias


## Tags y Releases

Crear un tag en Github y un Release

> `git tag -a v1.0.0 -m "Versión 1 - Lista para producción"`

> `git tag` muestra los tags

> `git push --tags` > sube los tags al repositorio remoto

En github vamos a Tags > Add release notes








This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
