# Quick Start Guide

## Initial Setup (First Time)

1. **Ensure Node.js 20+ is installed**
   ```bash
   nvm use 20  # If using nvm
   node --version  # Should be v20.19.0 or higher
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Supabase credentials**

   Edit `.env` and replace placeholder values with your actual Supabase credentials:
   ```env
   SUPABASE_URL=https://your-project-id.supabase.co
   SUPABASE_KEY=your-actual-anon-key
   ```

   Get these from: [Supabase Dashboard](https://supabase.com) → Your Project → Settings → API

4. **Start development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Daily Development

```bash
npm run dev    # Start dev server
```

## Deployment to Vercel

### Option 1: Through Vercel Dashboard (Recommended)
1. Push code to GitHub/GitLab/Bitbucket
2. Import project at [vercel.com](https://vercel.com)
3. Add environment variables in project settings:
   - `SUPABASE_URL`
   - `SUPABASE_KEY`
4. Deploy automatically on every push to main

### Option 2: Using Vercel CLI
```bash
npm i -g vercel
vercel login
vercel link
vercel env add SUPABASE_URL
vercel env add SUPABASE_KEY
vercel deploy --prod
```

## Project Structure

- `app/` - Pages, layouts, and components
- `composables/` - Reusable Vue composables
- `public/` - Static assets
- `.env` - Local environment variables (not committed)
- `nuxt.config.ts` - Nuxt configuration

## Common Commands

```bash
npm run dev        # Development server
npm run build      # Production build
npm run preview    # Preview production build
npm run generate   # Generate static site
```

## Next Steps

1. Create your first page in `app/pages/index.vue`
2. Set up Supabase database schema
3. Use `useSupabase()` composable to interact with Supabase
4. Deploy to Vercel

## Need Help?

- See [SETUP.md](./SETUP.md) for detailed setup instructions
- See [CLAUDE.md](./CLAUDE.md) for project architecture and guidelines