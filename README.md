# Junior Guidance Platform

A full-stack web application designed to help users read, publish, and manage articles with proper categorization and role-based access control.

---

# Project Structure

```text
juniorguidance/
│
├── backend/                    # Spring Boot Backend
├── frontend/
│   └── junior-guidance/        # Angular Frontend
├── docker-compose.yml
├── .gitignore
└── README.md
````

---

# Tech Stack

## Frontend

* Angular
* TypeScript
* HTML5
* CSS3
* Angular Material

## Backend

* Java 21
* Spring Boot
* Spring Data JPA
* Spring Security (JWT)
* Maven
* MySQL

## DevOps

* Docker
* Docker Compose
* Nginx

---

# Features

* JWT-based Authentication
* Role-Based Access Control (Admin/User)
* Article Creation and Management
* Article Publishing & Updating
* Category-Based Article Organization
* User Dashboard
* Secure REST APIs
* Responsive UI with Angular Material

---

# Prerequisites

Before running the project locally, ensure the following are installed:

### For Local Setup

* Java JDK 21
* Maven
* MySQL 8+
* Node.js (18+ recommended)
* npm
* Angular CLI

Install Angular CLI:

```bash
npm install -g @angular/cli
```

### For Docker Setup

* Docker
* Docker Compose

---

# Backend Setup (Spring Boot)

## Backend Location

```text
backend/
```

---

## Database Setup

Create the database:

```sql
CREATE DATABASE articleHubSpringOne;
```

---

## Application Properties

For security reasons, the actual `application.properties` file is not committed to Git.

Create the following file:

```text
backend/src/main/resources/application.properties
```

Use the template below:

```properties
spring.application.name=com.article.hub

spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/articleHubSpringOne
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD

spring.jpa.show-sql=true
spring.jpa.hibernate.ddl-auto=update
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
spring.jpa.properties.hibernate.format_sql=true
```

Replace:

* `YOUR_USERNAME`
* `YOUR_PASSWORD`

with your local MySQL credentials.

---

## Database Schema

<img width="641" height="245" alt="Screenshot 2026-06-06 at 10 40 55 AM" src="https://github.com/user-attachments/assets/ac047b7c-3b4d-494f-afd0-7139ea632fd3" />


---

## Run Backend

### Using IDE

Run:

```text
src/main/java/.../Application.java
```

### Using Terminal

```bash
cd backend

mvn clean install
mvn spring-boot:run
```

Backend runs on:

```text
http://localhost:8080
```

---

# Frontend Setup (Angular)

## Frontend Location

```text
frontend/junior-guidance/
```

---

## Install Dependencies

```bash
cd frontend/junior-guidance

npm install
```

---

## Run Frontend

```bash
ng serve
```

Frontend runs on:

```text
http://localhost:4200
```

---

# API Communication

```text
Frontend → http://localhost:4200
Backend  → http://localhost:8080
Database → MySQL
```

Ensure the backend is running before starting the frontend.

---

# Docker Setup

You can run the full project with Docker Compose from the project root:

```bash
docker compose up --build
```

Open the app:

```text
Frontend: http://localhost:4200
Backend:  http://localhost:8080
MySQL:    localhost:3307
```

Open from another device on the same Wi-Fi, such as a phone:

```text
http://YOUR_COMPUTER_IP:4200
```

On macOS, get your computer IP with:

```bash
ipconfig getifaddr en0
```

For example:

```text
http://192.168.1.10:4200
```

Run in background:

```bash
docker compose up --build -d
```

View logs:

```bash
docker compose logs -f
```

Stop containers:

```bash
docker compose down
```

Stop containers and delete the MySQL Docker volume:

```bash
docker compose down -v
```

Rebuild only one service:

```bash
docker compose build backend
docker compose build frontend
```

The Docker database name is `articleHubSpringOne`, with root password `root@123`. The MySQL container is exposed on host port `3307` so it does not conflict with a local MySQL running on `3306`.
