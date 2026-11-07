# Pharmako — Landing page

Landing page de l'application mobile **Pharmako** (pharmacies de garde, chat/appel avec le pharmacien, devis, paiement Mobile Money, QR code de retrait, livraison). Construite selon le framework **StoryBrand**.

## Stack
React 19 · TypeScript · Vite · Tailwind CSS v4 · shadcn/ui (Radix) · Framer Motion · police Mabry Pro · **pnpm**

## Démarrer
```bash
pnpm install
pnpm dev      # http://localhost:5173
pnpm build    # type-check + build de production
pnpm lint
```

## Architecture (feature-sliced léger)
```
src/
├─ app/                  # composition de la page (App.tsx)
├─ features/             # une tranche par section de la landing
│  └─ <feature>/
│     ├─ ui/             # composants React
│     ├─ data.ts         # contenu (textes, listes)
│     ├─ types.ts        # types du contenu
│     └─ index.ts        # API publique de la feature
└─ shared/
   ├─ ui/                # composants shadcn (Button, Card, Accordion…)
   ├─ components/        # Logo, Reveal, SectionHeading
   ├─ config/            # liens (stores, contact)
   ├─ lib/               # utilitaires (cn)
   └─ assets/            # police, logo
```
Règles : `app` → `features` → `shared` ; une feature n'importe jamais une autre feature (seulement `shared`) et s'importe via son `index.ts`.

## Contenu à compléter
- Liens Play Store / App Store et e-mail de contact : `src/shared/config/links.ts`.
