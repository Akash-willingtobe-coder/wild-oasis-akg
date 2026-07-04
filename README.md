<h1 align="center">🏨 Wild Oasis</h1>
<h3 align="center">Full-Stack Hotel Management Ecosystem</h3>

<p align="center">
  An end-to-end hotel management platform consisting of an internal admin dashboard for staff operations and a customer-facing portal for guest bookings.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Supabase-3FCF8E?style=flat&logo=supabase&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/React_Query-FF4154?style=flat&logo=reactquery&logoColor=white" />
</p>

<p align="center">
  <a href="https://wild-oasis-akg.vercel.app">Live Demo — Admin Dashboard</a> ·
  <a href="https://the-wild-oasis-website-pearl.vercel.app">Live Demo — Customer Portal</a> ·
  <a href="#tech-stack">Tech Stack</a>
</p>

---

## 📖 Overview

Wild Oasis is a two-sided hotel management ecosystem. The **admin dashboard** gives hotel staff full control over cabins, bookings, and guests, with real-time operational analytics. The **customer portal** lets guests browse availability and manage their own bookings. Both apps share the same Supabase backend, simulating how a real property-management system separates internal tooling from the public-facing product.

## 🖼️ Screenshots

<!-- Replace the placeholders below with actual screenshots. Recommended: dashboard overview, booking calendar, cabin management, customer booking flow -->

| Admin Dashboard | Booking Management |
|---|---|
| ![Admin Dashboard](./screenshots/admin-dashboard.png) | ![Bookings](./screenshots/bookings.png) |

| Cabin Management | Customer Portal |
|---|---|
| ![Cabins](./screenshots/cabins.png) | ![Customer Portal](./screenshots/customer-portal.png) |

## ✨ Features

**Admin Dashboard**
- Full CRUD for cabin/resource management (add, edit, delete, duplicate cabins)
- Booking workflow management, including check-in and check-out flows
- Guest tracking and history
- Real-time analytics dashboard — sales, occupancy rates, and booking trends visualized with charts
- Dark mode support

**Customer Portal**
- Browse available cabins/rooms with live availability
- Self-service booking creation and management
- Guest-facing account area

**Shared Backend**
- Supabase as the single source of truth for both apps (PostgreSQL under the hood, with auth and storage)
- Server state managed via React Query — caching, background refetching, and optimistic updates

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| Frontend Framework | React, Next.js |
| Styling | Tailwind CSS |
| Server State | React Query |
| Client State | Context API |
| Backend / Database | Supabase (PostgreSQL, Auth, Storage) |

## 🏗️ Architecture Highlights

- Two independent frontends (admin + customer) consuming a shared Supabase backend
- Row-level security policies in Supabase to separate staff vs. guest data access
- Chart-based analytics built on live booking/occupancy data rather than static mockups
- Optimistic UI updates for a fast, responsive feel during CRUD operations

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/Akash-willingtobe-coder/wild-oasis-akg.git
cd wild-oasis-akg

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your Supabase URL and anon/public key

# Run in development mode
npm run dev
```

## 🔗 Links

- **Live Demo (Admin Dashboard):** [https://wild-oasis-akg.vercel.app]
- **Live Demo (Customer Portal):** [https://the-wild-oasis-website-pearl.vercel.app]
- **GitHub Repo (Admin):** [github.com/Akash-willingtobe-coder/wild-oasis-akg](https://github.com/Akash-willingtobe-coder/wild-oasis-akg)
- **GitHub Repo (Customer Portal):** [github.com/Akash-willingtobe-coder/wild-oasis-akg](https://github.com/Akash-willingtobe-coder/the-wild-oasis-website)

## 📌 What This Project Demonstrates

This project was built to practice designing a multi-app ecosystem sharing one backend — a common real-world pattern (internal tools + customer-facing product) — along with real-time data visualization and robust server-state management.

---

<p align="center">Built by <a href="https://github.com/Akash-willingtobe-coder">Akash Goswami</a></p>
