# Chattr

A customizable chatgpt chatbot ui component library for react.

## Configuration

Before using `ChatFeed`, ensure that your Tailwind CSS configuration includes the following:

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        loader: 'loader 0.5s infinite alternate',
      },
      keyframes: {
        loader: {
          to: {
            opacity: '0.5',
            transform: 'translate3d(0, -0.2rem, 0)',
          },
        },
      },
    },
  },
  plugins: [],
}

export default config
```

This is due to the custom loader that comes shipped with the chatbot in between sent messages. If you want to create your own, feel free to do so with a component and pass that into the `ChatFeed` component like so:

```tsx
<ChatFeed
  ref={ref}
  messages={messages}
  loading={loading}
  customLoader={<YourCustomLoaderComponent />}
/>
```
