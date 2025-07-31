# Plataforma de Análisis Financiero con Alertas

Este repositorio contiene un sistema completo para análisis de activos financieros con backend en Node.js, frontend en React, y contenedores Docker.

## 🧱 Estructura del Proyecto

```
.
├── backend/        # API REST en Express
├── frontend/       # Interfaz de usuario en React
├── docker-compose.yml
```

---

## 🚀 Instrucciones de uso

### 1. Requisitos

- Node.js (https://nodejs.org)
- Docker y Docker Compose (https://docs.docker.com/get-docker/)

---

### 2. Clonar y levantar el proyecto

```bash
git clone https://github.com/tu_usuario/tu_repo.git
cd tu_repo
docker-compose up --build
```

### 3. Acceder a la aplicación

- Backend: http://localhost:3000
- Frontend: http://localhost:3001

---

## 🖥️ Backend (Node.js)

API REST simple para registrar usuarios con:

- Nombre
- Perfil de riesgo
- Capital disponible

### Endpoints disponibles

- `POST /register`
- `GET /users`

---

## 💻 Frontend (React)

Formulario para registrar usuarios y ver la lista de usuarios guardados.

Puedes modificar el diseño en `frontend/src/App.js`

---

## 🐳 Docker

El archivo `docker-compose.yml` levanta:

- Servicio del backend (Node.js)
- Servicio del frontend (React)

---

## ✅ Próximos pasos sugeridos

- Agregar base de datos (PostgreSQL o MongoDB)
- Añadir autenticación JWT
- Automatizar alertas financieras por Telegram
- Desplegar en Railway, Vercel o AWS

---

## 📄 Licencia

MIT
