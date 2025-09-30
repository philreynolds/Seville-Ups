# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Seville-Ups** is a full-stack web application built with Nuxt.js, TypeScript, and Supabase.

### Tech Stack
- **Frontend Framework**: Nuxt.js 4 (Vue 3)
- **UI Components**: NuxtUI (@nuxt/ui)
- **Build Tool**: Vite 7 (built into Nuxt 4)
- **Language**: TypeScript
- **Database**: Supabase (PostgreSQL)
- **Hosting**: Vercel
- **Node Version**: >= 20.19.0

## Development Commands

### Setup
```bash
# Install dependencies
npm install

# Configure environment variables
cp .env.example .env
# Then edit .env with your Supabase credentials
```

### Development
```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Generate static site
npm run generate
```

### Node Version Management
This project requires Node.js >= 20.19.0. If using nvm:
```bash
nvm install 20
nvm use 20
```

## Project Architecture

### Directory Structure
```
app/                    # Nuxt app directory (pages, layouts, components)
composables/            # Vue composables
  └── useSupabase.ts   # Supabase client wrapper
public/                # Static assets
.env                   # Local environment variables (not committed)
.env.example           # Environment variables template
nuxt.config.ts         # Nuxt configuration with Supabase module
vercel.json            # Vercel deployment configuration
```

### Supabase Integration

The project uses `@nuxtjs/supabase` module for Supabase integration.

**Access Supabase client:**
```typescript
// Use the composable
const { client, user, auth } = useSupabase()

// Or use Nuxt's built-in composables directly
const supabase = useSupabaseClient()
const user = useSupabaseUser()
```

**Configuration**: See `nuxt.config.ts` for redirect options and module settings.

### Environment Variables

Required environment variables (add to `.env` and Vercel):
- `SUPABASE_URL`: Your Supabase project URL
- `SUPABASE_KEY`: Your Supabase anon key

### TypeScript Configuration

TypeScript is fully configured with Nuxt 4's built-in support:
- Auto-generated types in `.nuxt/`
- Type checking via `nuxt typecheck` (if needed)
- Full IDE support with `tsconfig.json`

## Deployment

### Vercel Deployment

1. **Connect Repository**: Link your Git repository to Vercel
2. **Configure Environment Variables**: Add `SUPABASE_URL` and `SUPABASE_KEY`
3. **Deploy**: Vercel auto-detects Nuxt and configures build settings

**Alternative: Manual deployment**
```bash
npm i -g vercel
vercel login
vercel link
vercel deploy --prod
```

### Vercel + Supabase Integration
Vercel offers native Supabase integration that automatically configures environment variables. Enable it in your Vercel project settings under Integrations.

## Development Guidelines

### Adding New Pages
Create `.vue` files in `app/pages/` directory. Nuxt auto-generates routes.

### Using NuxtUI Components
NuxtUI provides a comprehensive set of pre-built Vue components:
- Components are auto-imported (e.g., `<UButton>`, `<UCard>`, `<UModal>`)
- Follow the [NuxtUI documentation](https://ui.nuxt.com) for component usage
- Components support theming and are fully accessible

### Adding Composables
Create reusable logic in `composables/` directory with `use` prefix.

### Supabase Queries
Use the Supabase client from `useSupabase()` composable for database operations.

### Authentication
The Supabase module handles auth automatically with redirect options configured in `nuxt.config.ts`.

## Git Workflow
- Main branch: `main`
- Create feature branches for all development work
- Never commit directly to main
- `.env` files are gitignored

## Troubleshooting

### Node Version Issues
If you see engine compatibility errors, ensure Node.js >= 20.19.0:
```bash
node --version  # Should be v20.19.0 or higher
```

### Supabase Connection Issues
- Verify `.env` file has correct `SUPABASE_URL` and `SUPABASE_KEY`
- Check Supabase project is active and accessible
- Ensure environment variables are set in Vercel for production

## Additional Resources
- [Nuxt Documentation](https://nuxt.com/docs)
- [NuxtUI Documentation](https://ui.nuxt.com)
- [Supabase Documentation](https://supabase.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- See `SETUP.md` for detailed setup instructions