# Seville-Ups Setup Guide

## Prerequisites

- Node.js >= 20.19.0
- npm >= 10.8.2
- Supabase account
- Vercel account (for deployment)

## Local Development Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Supabase

1. Create a project at [supabase.com](https://supabase.com)
2. Copy your project URL and anon key from Project Settings > API
3. Update `.env` file with your credentials:

```env
SUPABASE_URL=your-project-url.supabase.co
SUPABASE_KEY=your-anon-key-here
```

### 3. Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Vercel Deployment

### 1. Connect to Vercel

```bash
npm i -g vercel
vercel login
vercel link
```

### 2. Configure Environment Variables

Add the following environment variables in your Vercel project settings:

- `SUPABASE_URL`
- `SUPABASE_KEY`

### 3. Deploy

```bash
vercel deploy --prod
```

## Supabase Integration with Vercel

Vercel provides native Supabase integration:

1. Go to your Vercel project settings
2. Navigate to Integrations
3. Add Supabase integration
4. Follow the prompts to connect your Supabase project
5. Environment variables will be automatically configured

## Project Structure

```
.
├── app/                  # Nuxt app directory
├── composables/          # Vue composables
│   └── useSupabase.ts   # Supabase client composable
├── public/              # Static assets
├── .env                 # Environment variables (local)
├── .env.example         # Environment variables template
├── nuxt.config.ts       # Nuxt configuration
├── vercel.json          # Vercel configuration
└── package.json         # Dependencies
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build locally