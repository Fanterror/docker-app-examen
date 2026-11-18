
# Mi Biblioteca

Aplicación web sencilla para mostrar y buscar videojuegos. Proyecto académico de contenerización con Docker.

## Tecnologías
- HTML
- CSS
- JavaScript
- Docker
- Nginx

## Requisitos
- Docker Desktop instalado.
- Docker funcionando.

## Construir la imagen

```bash
docker build -t mi-biblioteca:v1 .
```

## Ejecutar el contenedor

```bash
docker run -d --name biblioteca-web -p 8080:80 mi-biblioteca:v1
```

## Acceder a la aplicación

http://localhost:8080

## Detener el contenedor

```bash
docker stop biblioteca-web
```

## Iniciar nuevamente

```bash
docker start biblioteca-web
```

## Ver contenedores

```bash
docker ps
docker ps -a
```
