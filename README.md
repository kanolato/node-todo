# Node Todo App

A Node app built with MongoDB and Angular. For demonstration purposes and a tutorial.

Node provides the RESTful API. Angular provides the frontend and accesses the API. MongoDB stores like a hoarder.

## Requirements
- Docker
- Docker Compose

## Development
Run node-todo and mongo:
```
docker-compose up --build
```
Run tests:
```
./integration-test.sh
```
The app will be running on [localhost:8080](http://localhost:8080).
> The `docker-compose.yaml` has no volume so all the information stored in mongo is ephemeral.
