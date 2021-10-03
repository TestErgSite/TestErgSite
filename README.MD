## Запуск CRA - если требуется работать только с фронтендом

```shell
npm start
```

## Запуск лэндинга через сервер - если требуется работа с сервером

```shell
nodemon server.js
```

## Отслеживание изменений с сервера и авто билд (запускается после команды `nodemon server.js`)

```shell
npm run watch
```

## Работа с Докером (для обновления сайта на хостинге) 

### Билд докер образа

```shell
docker build -t luvcrime/ergonza:x.x.x .
```

### Пушим докер образ
```shell
docker push luvcrime/ergonza:1.0.2
```

### Заходим на сайт sloppy.io и в settings меняем Image tag (это версионность которую мы указывали при билде -  x.x.x)