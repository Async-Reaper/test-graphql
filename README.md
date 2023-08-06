## Инструкция по запуску

Стандартный запуск

```sh
yarn install
yarn dev
```

Запуск через Docker

```sh
docker build -t isl .
docker run -p 6002:80 isl
```
После запуска открыть http://localhost:6002/
