<img src="src/images/banner.png" alt="Inkkit Banner" style="width: 100%; border-radius: 8px; margin-bottom: 2rem;" />

# Inkkit

Inkkit is an onchain-focused SDK that delivers a delightful developer experience with ready-to-use app layout templates, themes, and magical animated components.

## Features

- 🎨 Customizable app layout templates
- ✨ Magical animated components
- 🎭 Vibrant themes
- ⛓️ Onchain-focused development
- 🚀 Efficient developer experience
- 📱 Polished, engaging interfaces

## Install

```bash
npm install @inkonchain/ink-kit
# or
pnpm install @inkonchain/ink-kit
```

## Usage

```tsx
// Import styles first at the root of your project (required)
import "@inkonchain/ink-kit/style.css";

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

Note: Inkkit classes are prefixed with `ink-` and can be customized using CSS variables instead of Tailwind classes. They should be imported first so that your own custom classes are taking precedence.

## Resources

- **Documentation**: Browse components and examples on our [Storybook page](https://inkkit.inkonchain.com/)
- **Contributing**: Open a PR right here on our [GitHub repository](https://github.com/inkonchain/ink-kit)

## WIP Notice

This is a work in progress: we are constantly adding new components, improving the developer experience, and fixing bugs.
