# Macro Monk Landing

<p align="center">
  <img src="public/macro-monk.png" alt="Macro Monk logo" width="360" />
</p>

Landing page for **Macro Monk**: a macro, training, and body composition tracker for people who already take tracking seriously.

## Live App

- https://app.macromonk.fi/

## Core Message

Macro Monk is built to avoid manipulative app patterns:

- No fake scarcity like "only 3 custom meals/items"
- No ad bombardment and no constant "buy Pro" interruptions
- Practical tracking focused on consistency and results

## Body Composition Tracking

Macro Monk includes trend-based body composition logic:

- Tracks **running 7-day averages** because daily fluctuations are noisy
- Calculates **weekly changes** for more reliable progress interpretation
- Calculates **lean body mass** when the user logs **body-fat %**

## Landing Features

- EN/FI language toggle with browser-locale default and local persistence
- Product-focused hero and differentiation sections
- Body composition section explaining trend-based metrics
- Subtle branded footer with ownership text

## Tech Stack

- Vite
- Vanilla JavaScript
- CSS

## Local Development

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Preview build:

```bash
npm run preview
```
