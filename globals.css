@import "tailwindcss";

@theme {
  --color-gold: #c8a97e;
  --color-gold-soft: rgba(200, 169, 126, 0.35);
  --color-champagne: #e8d8c4;
  --color-midnight: #0d1117;
  --color-graphite: #161b22;
  --color-slate-deep: #1f2937;

  --color-background: #0d1117;
  --color-foreground: #f8f8f8;
  --color-muted: #161b22;
  --color-muted-foreground: #a8b2c1;
  --color-border: rgba(200, 169, 126, 0.15);

  --color-primary: #c8a97e;
  --color-primary-foreground: #0d1117;

  --font-display: "Playfair Display", serif;
  --font-sans: "Inter", sans-serif;
  --font-mono: "Montserrat", sans-serif;
}

:root {
  color-scheme: dark;
}

@layer base {
  * {
    border-color: var(--color-border);
  }

  html,
  body {
    background-color: var(--color-midnight);
    color: var(--color-foreground);
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
  }

  body {
    background-image:
      radial-gradient(1200px 600px at 10% -10%, rgba(200, 169, 126, 0.08), transparent 60%),
      radial-gradient(900px 500px at 90% 10%, rgba(232, 216, 196, 0.05), transparent 60%),
      linear-gradient(135deg, #0d1117, #161b22 55%, #1f2937);
    background-attachment: fixed;
  }

  ::selection {
    background: var(--color-gold);
    color: var(--color-midnight);
  }

  h1, h2, h3, h4, h5 {
    font-family: var(--font-display);
    letter-spacing: -0.02em;
  }
}

@utility glass {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.04),
    rgba(255, 255, 255, 0.01)
  );
  backdrop-filter: blur(18px) saturate(140%);
  border: 1px solid rgba(200, 169, 126, 0.18);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.04) inset,
    0 20px 60px -20px rgba(0, 0, 0, 0.55);
}

@utility glow-gold {
  box-shadow:
    0 0 0 1px rgba(200, 169, 126, 0.4),
    0 0 40px -10px rgba(200, 169, 126, 0.5);
}

@utility text-gradient-gold {
  background: linear-gradient(135deg, #e8d8c4 0%, #c8a97e 45%, #8a7048 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

@utility divider-gold {
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(200, 169, 126, 0.6),
    transparent
  );
}
