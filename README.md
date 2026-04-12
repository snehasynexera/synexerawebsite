# Synexera Website

This repo now runs as two apps:
- `frontend/` (Vite + React)
- `backend/` (Express + MongoDB)

## 1) Backend setup (MongoDB Atlas)

1. Go to `backend/`.
2. Copy `.env.example` to `.env`.
3. Add your Atlas connection string in:

`backend/.env` → `MONGODB_URI=...`

Example:
```env
PORT=5050
FRONTEND_ORIGIN=http://localhost:5173
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/synexera?retryWrites=true&w=majority
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
MAIL_FROM=Synexera <your-email@gmail.com>
```

## 2) Start backend

```bash
cd backend
npm install
npm run dev
```

When it starts correctly, terminal prints:
`your backend is up on http://localhost:5050`

## 3) Start frontend

```bash
cd frontend
npm install
npm run dev
```

Optional frontend env:
`frontend/.env`
```env
VITE_API_BASE_URL=http://localhost:5050
```

If not set, frontend defaults to `http://localhost:5050`.

## Contact form integration

The contact form on the homepage now sends `fullName`, `email`, `subject`, and `message` to:

`POST /api/contact`

The backend validates and stores the submission in MongoDB collection:

`contactmessages`

## Footer email auto-reply (services + pricing)

The footer email field now calls:

`POST /api/newsletter/subscribe`

This endpoint stores subscriber email and sends an automatic pricing email using SMTP.

- Subscriber collection: `newslettersubscribers`
- Pricing template source: `backend/src/config/servicePricing.js`

Update `servicePricing.js` anytime to change the services or prices shown in the outgoing email.
