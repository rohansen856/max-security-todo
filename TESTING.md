# Todo API Testing Guide

This document describes how to test the REST API for the secure-todo app using **Postman** and **cURL**.

---

## 📌 Base URL

```
http://localhost:3000/api
```

---

## 📘 Endpoints

### 2. Get all Todos

- **Method:** GET
- **Endpoint:** `/todo`

#### Example:

GET `/todo`

#### cURL:

```bash
curl http://localhost:3000/api/todo
```

### 1. Create a Todo

- **Method:** POST
- **Endpoint:** `/todo`
- **Body:** JSON

```json
{
  "task": "Buy groceries"
}
```

#### cURL:

```bash
curl -X POST http://localhost:3000/api/todo \
     -H "Content-Type: application/json" \
     -d '{"task": "Buy groceries"}'
```

---

### 2. Get a Todo by ID

- **Method:** GET
- **Endpoint:** `/todo/:id`

#### Example:

GET `/todo/1`

#### cURL:

```bash
curl http://localhost:3000/api/todo/1
```

---

### 3. Update a Todo by ID

- **Method:** PUT
- **Endpoint:** `/todo/:id`
- **Body:** JSON

```json
{
  "task": "Buy milk and bread"
}
```

#### cURL:

```bash
curl -X PUT http://localhost:3000/api/todo/1 \
     -H "Content-Type: application/json" \
     -d '{"task": "Buy milk and bread"}'
```

---

### 4. Delete a Todo by ID

- **Method:** DELETE
- **Endpoint:** `/todo/:id`

#### Example:

DELETE `/todo/1`

#### cURL:

```bash
curl -X DELETE http://localhost:3000/api/todo/1
```

---

## 🧪 Postman Collection

- Import a new collection
- Set base URL: `http://localhost:3000/api`
- Add the four routes:

  - `POST /todo` (with raw JSON body)
  - `GET /todo/:id`
  - `PUT /todo/:id` (with updated body)
  - `DELETE /todo/:id`

---

✅ Make sure PostgreSQL is running and the Node app is started with `npm run start` before testing.
