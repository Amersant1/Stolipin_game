# Используем Node.js образ для сборки
FROM node:latest as build

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json для установки зависимостей
COPY package.json package-lock.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта внутрь контейнера
COPY . .

# Собираем проект
RUN npm run build

# Используем lightweight Nginx образ для production
FROM nginx:alpine

# Копируем собранные файлы из контейнера с Node.js в контейнер с Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Открываем порт 80 для веб-трафика
EXPOSE 80

# Команда для запуска Nginx внутри контейнера
CMD ["nginx", "-g", "daemon off;"]
