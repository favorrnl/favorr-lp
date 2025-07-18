# Favorr Landing Page

## Overview

This is a React-based landing page for Favorr, a platform that connects people with experts from top companies for quick consultation sessions. The application features a sleek black and white design with minimal orange accents, built using modern web technologies and following a component-based architecture.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (July 17, 2025)

### Latest Updates (Evening) - User Experience Improvements
✓ Fixed JSX syntax error in final-cta.tsx component
✓ Improved scroll functionality for "Wil jij vooraan staan" button - now scrolls directly to email input with smooth focus
✓ Fixed Let's Talk button navigation to contact page using proper wouter Link component
✓ Enhanced text readability - "Gratis 20 minuten eerlijke hulp" (removed comma for better flow)
✓ Added horizontal scroll indicator for carousel in BOOK JE FAVOR section with snap scrolling and visual hint
✓ Created proper Favorr logo component with correct typography:
  - Inter font with 900 weight (black)
  - Letter spacing of -0.8px for tight spacing
  - "Favor" in white/black, final "r" in orange
  - Support for dark/light themes
✓ Fixed incorrect logo in demo booking section (was "Favor" should be "Favorr")
✓ Enhanced favicon with proper Inter font and letter spacing
✓ Resolved persistent Let's Talk button bug by replacing motion.button with standard <a> tag
✓ Corrected logo coloring - only the last 'r' should be orange (not both 'r's)
✓ Simplified scroll hint text from "Scroll horizontaal voor meer opties" to "Scroll voor meer opties"
✓ Added new legal/IP protection consultation option in BOOK JE FAVOR section
✓ Updated ASML career consultation title to "Insider advice: een potentiële ASML-carriëre?"
✓ Enhanced consultation variety with intellectual property protection expertise from Simmons & Simmons
✓ Made IP consultation more actionable with "Welke stappen zijn essentieel voor nu?"
✓ Updated hero tagline to "Gratis hulp voor 20 minuten. Van experts, voor jonge ondernemers."
✓ Changed hero CTA button text from "WIL JIJ VOORAAN IN DE RIJ?" to "BOVENAAN OP DE WACHTLIJST?"
✓ Fixed navigation button to keep "WAITLIST" in English (not "WACHTLIJST")
✓ Reverted waitlist form title back to "VOORAAN IN DE RIJ?" to differentiate from hero button
✓ Now we have: Hero button = "BOVENAAN OP DE WACHTLIJST?", Form title = "VOORAAN IN DE RIJ?", Nav button = "WAITLIST"

### Previous Updates (Afternoon)
- **Contact form improvements**: White background instead of dark blue, larger container, bigger inputs
- **Button enhancements**: Let's Talk button now redirects to /contact page, orange CTA button with white text
- **Copy updates**: Better contact page headline "Vragen, feeling generous, of op zoek naar een favor?"
- **Form layout**: Privacy text moved below form fields for better UX
- **Email routing**: All contact forms log to console (would email to info@favorr.nl in production)

### Production Deployment
- **Live site**: Deployed to https://favorrr.replit.app/
- **Domain setup**: DNS configured for favorr.nl → www.favorr.nl CNAME to favorrr.replit.app
- **Form handling**: Let's Go waitlist form saves to database, accessible via admin panel (billy/billy)
- **Error handling**: Added browser extension error suppression to prevent MetaMask overlay interference

## Previous Changes (July 15, 2025)

### Copy and Messaging Updates
- **Hero Section**: Replaced generic headlines with powerful rotating messages about network access
- **Main headline**: Now focuses on "WAT ALS JE ZE TÓCH GEWOON EVEN KON BELLEN?" with emphasis on accessibility
- **Copy tone**: More punchy, direct, and memorable rather than purely informational
- **Favor examples**: Added specific company context (McKinsey consultant, De Brauw advocaat, etc.)
- **Business benefits**: Updated to reflect realistic indirect business benefits rather than overstated ROI claims

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI components wrapped in custom UI layer
- **Animations**: Framer Motion for smooth transitions and scroll-triggered animations
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state management

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ES modules
- **API Structure**: RESTful endpoints with JSON responses
- **Validation**: Zod for request/response validation
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Session Management**: Connect-pg-simple for PostgreSQL session storage

### Build System
- **Bundler**: Vite for development and production builds
- **Development**: tsx for TypeScript execution
- **Production**: esbuild for server bundling
- **Deployment**: Static client build with Node.js server

## Key Components

### Client-Side Components
1. **Landing Page Sections**:
   - Hero section with main CTA
   - Social proof with company logos
   - Service explanation ("Wat is een Favor?")
   - How it works process
   - Company benefits section
   - Final CTA with waitlist signup

2. **UI System**:
   - Comprehensive component library based on Radix UI
   - Consistent design tokens and styling
   - Responsive design patterns
   - Accessibility-focused implementation

3. **Interactive Features**:
   - Smooth scroll navigation
   - Animated content reveals
   - Sticky navigation with hide/show behavior
   - Form handling with validation

### Server-Side Components
1. **API Routes**:
   - `/api/waitlist` - POST endpoint for email collection
   - Input validation with Zod schemas
   - Error handling middleware

2. **Development Tools**:
   - Vite integration for hot module replacement
   - Request logging middleware
   - Static file serving

## Data Flow

### Waitlist Signup Flow
1. User enters email in final CTA form
2. Client validates input and sends POST request to `/api/waitlist`
3. Server validates email format using Zod schema
4. Currently logs email to console (database integration pending)
5. Returns success/error response to client
6. Client displays toast notification based on response

### Navigation Flow
1. Sticky navigation detects scroll position
2. Navigation items trigger smooth scroll to sections
3. Scroll position determines navigation visibility

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Query
- **UI Framework**: Radix UI primitives, Tailwind CSS
- **Animation**: Framer Motion
- **Routing**: Wouter
- **Utilities**: clsx, class-variance-authority, date-fns

### Backend Dependencies
- **Server**: Express, Node.js types
- **Database**: Drizzle ORM, @neondatabase/serverless
- **Validation**: Zod
- **Session**: connect-pg-simple

### Development Dependencies
- **Build Tools**: Vite, esbuild, tsx
- **TypeScript**: Full TypeScript support with strict mode
- **Replit Integration**: Cartographer and runtime error overlay

## Deployment Strategy

### Development Environment
- Vite dev server with HMR for client
- tsx for server with auto-restart
- Integrated development with Replit tooling

### Production Build
1. Client build: Vite bundles React app to `dist/public`
2. Server build: esbuild bundles Express server to `dist/index.js`
3. Static assets served from build directory
4. Environment variables for database configuration

### Database Setup
- PostgreSQL database with Drizzle ORM
- Schema defined in `shared/schema.ts`
- Migrations managed via `drizzle-kit`
- Connection via `DATABASE_URL` environment variable

### Hosting Considerations
- Supports both development and production environments
- Static client assets can be served via CDN
- Server requires Node.js runtime
- Database connection required for full functionality

## Technical Decisions

### Design System
- **Problem**: Need consistent, accessible UI components
- **Solution**: shadcn/ui system with Radix UI primitives
- **Rationale**: Provides accessibility, customization, and developer experience
- **Trade-offs**: Larger bundle size vs. comprehensive feature set

### Animation Strategy
- **Problem**: Smooth, performant animations for modern feel
- **Solution**: Framer Motion with scroll-triggered animations
- **Rationale**: Excellent React integration and performance
- **Trade-offs**: Bundle size vs. animation capabilities

### State Management
- **Problem**: Server state management for API calls
- **Solution**: React Query with minimal local state
- **Rationale**: Handles caching, error states, and loading states
- **Trade-offs**: Learning curve vs. robust data fetching

### Build Strategy
- **Problem**: Development speed vs. production optimization
- **Solution**: Vite for development, esbuild for production
- **Rationale**: Fast development builds and optimized production output
- **Trade-offs**: Tool complexity vs. performance benefits