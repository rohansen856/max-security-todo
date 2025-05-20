# Secure Todo API
[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/rohansen856/max-security-todo/badge)](https://scorecard.dev/viewer/?uri=github.com/rohansen856/max-security-todo)
A REST API for managing todo items with security features built-in.

## 📋 Overview

This project implements a secure Todo API with robust authentication and authorization mechanisms. It allows users to create, read, update, and delete todo items while maintaining high security standards.

## 🛡️ Security Features

- JWT-based authentication
- Role-based access control
- Input validation and sanitization
- Protection against common web vulnerabilities (XSS, CSRF, SQL Injection)
- Rate limiting to prevent brute force attacks
- Secure password hashing
- HTTPS enforcement

## 🏗️ Application Structure

```
/
├── src/
│   ├── controllers/    # Request handlers
│   ├── middleware/     # Auth and validation middleware
│   ├── models/         # Data models
│   ├── routes/         # API endpoints
│   ├── services/       # Business logic
│   └── utils/          # Helper functions
├── tests/              # Test suites
├── config/             # Configuration files
└── server.js           # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+)
- MongoDB
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/secure-todo-api.git

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Start the server
npm start
```

## 🔌 API Endpoints

| Method | Endpoint           | Description                | Auth Required |
|--------|-------------------|----------------------------|---------------|
| POST   | /api/auth/register | Register a new user        | No            |
| POST   | /api/auth/login    | Login and get token        | No            |
| GET    | /api/todos         | Get all todos for user     | Yes           |
| GET    | /api/todos/:id     | Get a specific todo        | Yes           |
| POST   | /api/todos         | Create a new todo          | Yes           |
| PUT    | /api/todos/:id     | Update a todo              | Yes           |
| DELETE | /api/todos/:id     | Delete a todo              | Yes           |

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage
```

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
