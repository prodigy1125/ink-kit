<img src="../src/images/banner.webp" alt="Ink Kit Banner" style="width: 100%; border-radius: 8px; margin-bottom: 2rem;" />

# Ink Kit

> **Looking for React UI components?** The ecosystem has matured significantly with excellent options like [shadcn/ui](https://ui.shadcn.com/), [Radix UI](https://www.radix-ui.com/), [Chakra UI](https://chakra-ui.com/), and [Mantine](https://mantine.dev/). For wallet connectivity specifically, check out [RainbowKit](https://www.rainbowkit.com/) or [ConnectKit](https://docs.family.co/connectkit).

---

## About This Project

Ink Kit is a React component library that provided UI components, app layouts, and themes, plus a wallet connection component built on wagmi. Modern alternatives now offer better maintained solutions for both general UI and web3-specific needs.

## Installation

If you're maintaining an existing project using Ink Kit:

```bash
npm install @inkonchain/ink-kit@0.9.1-beta.19
# or
pnpm install @inkonchain/ink-kit@0.9.1-beta.19
```

## Usage

```tsx
// Import styles first at the root of your project (required)
import "@inkonchain/ink-kit/style.css";
```

```tsx
// Import components as needed
import { Button } from "@inkonchain/ink-kit";

function App() {
  return (
    <div>
      <Button onClick={() => {}} size="md" variant="secondary">
        Ship It
      </Button>
    </div>
  );
}
```

Note: Ink Kit classes are prefixed with `ink:` and can be customized using CSS variables instead of Tailwind classes. They should be imported first so that your own custom classes are taking precedence.

## Key Features

- 🎨 **Customizable app layout templates**
- ✨ **Magical animated components**
- 🎭 **Vibrant themes**
- ⛓️ **Onchain-focused development**
- 🚀 **Efficient developer experience**
- 📱 **Polished, engaging interfaces**

## Theming

By default, Ink Kit provides a couple of themes already in the stylesheet:

- Light (`light-theme`)
- Dark (`dark-theme`)
- Contrast (`contrast-theme`)
- Neo (`neo-theme`)
- Morpheus (`morpheus-theme`)

To specify which theme to use, add the `ink:THEME_ID` to your document root:

```tsx
<html class="ink:dark-theme">
  ...
```

If you want to programmatically set this value, you can use the `useInkThemeClass`:

```tsx
const theme = getMyCurrentTheme();
useInkThemeClass(theme === "light" ? "ink:neo-theme" : "ink:dark-theme");
```

### Custom Theme

To create a custom theme, you can override CSS variables:

```css
:root {
  --ink-button-primary: rgb(10, 55, 10);
  ...
}
```

To see examples on specific colors that you can override, check the following [theme](https://github.com/inkonchain/ink-kit/tree/main/src/styles/theme) section of the Ink Kit repository.

## Resources

- **Storybook Documentation**: [ink-kit.inkonchain.com](https://ink-kit.inkonchain.com/)
- **NPM Package**: [@inkonchain/ink-kit](https://www.npmjs.com/package/@inkonchain/ink-kit)

---

This repository was archived in October 2025. The code remains available under the MIT license for anyone who wishes to reference or fork it.
