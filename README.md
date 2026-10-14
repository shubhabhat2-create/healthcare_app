# CareNest Healthcare Store

A learning/portfolio healthcare e-commerce web app based on the uploaded PRD. The PRD defines a responsive healthcare product platform for patients/customers, healthcare professionals and administrators, with product discovery, cart, checkout, orders, admin, security, accessibility and testability requirements. 

## Architecture
- React + Vite frontend
- Node.js + Express API Gateway
- Product Service
- Order Service
- Auth Service
- In-memory mock data for the first iteration (replace with PostgreSQL later)

## Run
Requires Node.js 20+.

Terminal 1:
```bash
cd services/product-service && npm install && npm run dev
```
Terminal 2:
```bash
cd services/order-service && npm install && npm run dev
```
Terminal 3:
```bash
cd services/auth-service && npm install && npm run dev
```
Terminal 4:
```bash
cd services/api-gateway && npm install && npm run dev
```
Terminal 5:
```bash
cd frontend && npm install && npm run dev
```

Open http://localhost:5173

## Next increments
1. PostgreSQL + migrations
2. Real authentication/session management
3. Cart persistence
4. Checkout/address/payment adapter
5. Admin portal
6. Notifications
7. Docker Compose
8. Automated API + Playwright tests
9. CI/CD and security hardening
