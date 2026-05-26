# cityweather# City Weather Platform

[![Next.js](https://img.shields.io/badge/Next.js-13.5+-black?style=flat&logo=next.js)](https://nextjs.org/)
[![Typescript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Clerk](https://img.shields.io/badge/Clerk-Auth%20Solution-4A154B?style=flat)](https://clerk.com/)

## Preview
### Web

![Desktop](./frontend/public/web-preview.png)

### Mobile

![Mobile](./frontend/public/mobile-preview.png)

## 🚀 Quick Start

### Prerequisites
- Docker

### Installation

1. **Clone repository**
```bash
git clone https://github.com/Jingli-123/cityweather.git
cd cityweather
```

2. **Environment Setup**
Create `.env` files in /backend: `.env` and `.env.local` in the /frontend directory.

Edit `.env.local` with your credentials:
```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_Z....
CLERK_SECRET_KEY=sk_test_nD49RceX3Zp....
NEXT_PUBLIC_API_URL=http://localhost:3001
```


Edit `.env` with your credentials:
```env
# Clerk Authentication
CLERK_SECRET_KEY=sk_test_nD49RceX3Zp....
FRONTEND_URL=http://localhost:3000
```
3. **Install application with docker**
```bash
docker compose up
````

4. **Install application without docker**
in root
```bash
cd frontend
npm install
npm run dev
````

in root
```bash
cd backend
npm install
npm run dev
````

5. **Start the application for dev environment**
http://localhost:3000

cd backend
npm install
npm run dev
````

5. **Start the application for dev environment**
http://localhost:3000


