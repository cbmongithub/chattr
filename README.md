[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

<p><a href="https://www.npmjs.com/package/chattr"><img src="https://i.ibb.co/McGSP53/chattr-img.jpg" alt="chattr-img" border="1" /></a></p>

# chattr

A customizable chatgpt chatbot component library for React, built with tailwindcss.

### Table of Contents

**[Installation Instructions](#installation)**<br>
**[Configuration Instructions](#configuration)**<br>
**[Development Mode](#development-mode)**<br>
**[Endpoints](#endpoints)**<br>
**[Usage for Nextjs](#usage-for-nextjs)**<br>
**[Usage for Reactjs](#usage-for-reactjs)**<br>
**[Customizations](#customizations)**<br>
**[License](#license)**<br>
**[Contributing](#contributing)**<br>
**[Future Development](#future-development)**<br>
**[Author](#author)**<br>

# Installation

```bash
npm i chattr@latest
```

# Configuration

Before using `chattr`, we need to configure a few things. First, ensure that you are on the latest versions of `react, react-dom, and tailwindcss`

```json
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "tailwindcss": "^3.3.5"
```

If you aren't on the latest versions, start a **new** branch. Then update your dependencies on that branch:

```bash
npm i react@latest react-dom@latest tailwindcss@latest @types/react@latest @types/react-dom@latest
```

Next, make sure that your `tailwind.config.ts` file includes the following:

```typescript
// tailwind.config.ts
{
  //... Other configs ...,
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

And your `globals.css` file looks like this:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .animation-delay-200 {
    animation-delay: 0.15s;
  }
  .animation-delay-400 {
    animation-delay: 0.3s;
  }
}

.dot {
  @apply mx-0.5 h-1.5 w-1.5 rounded-full bg-teal-600 dark:bg-teal-500;
}
```

This is for the custom loader that comes shipped with the chatbot in between states of sent messages. You can customize it, or create your own.

Next, you need an `OPENAI_API_KEY`. If you don't have one already, click [here](https://platform.openai.com/api-keys) to get one.

Once you have your key, install `dotenv` if required and create a `.env` file in the root of your project. Insert your api key there. **In production, remember to copy your api key, to your environment variables section.**

```bash
OPENAI_API_KEY='YOUR_OPENAI_API_KEY'
```

# Development Mode

Chattr logs pre made components to the console, showing you what gets rendered. This is for development mode only, and will not log in production. If you're using [React dev tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?pli=1), you can go to the components tab and click settings, and enable `Highlight updates when components render` to see what gets rendered. This is great for optimizing performance.

# Endpoints

In order to use chattr, you have to create an endpoint that handles a post request to the chatGpt completions api. By default, chattr passes the users message as `prompt` to the backend. When developing your api endpoint, you must extract the "prompt" parameter. If you decide to [customize](#customizations) your chatbot with the boilerplate, you can configure it to send a request directly to open ai's completions endpoint instead.

For Next js, here is an example of an api route where we are destructuring the prompt that contains the users message, and inserting it into a payload.

In the payload, we have our chatgpt model, instructions, the users prompt, and other configurations.

We are then posting that data to the chat gpt completions endpoint as a string with our api key, to get back a subsequent response from open ai.

```typescript
// app/api/chatGpt/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json()

    const payload = {
      model: 'gpt-4-0613',
      messages: [
        {
          role: 'system',
          content:
            "You are a chatbot that responds with any information the user requests. If the user asks an inappropriate question, answer with I'm sorry, but I can't assist you with that question. Use a professional tone.",
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
      frequency_penalty: 0,
      presence_penalty: 0,
      max_tokens: 50,
      n: 1,
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      method: 'POST',
      body: JSON.stringify(payload),
    })

    const data = await response.json()

    return NextResponse.json({ data })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error })
  }
}
```

It's worth mentioning that you should protect this route with some type of authentication, or at the very least, use a rate limiter. `@upstash/ratelimit @upstash/redis` is a great option. You can view the package [here](https://www.npmjs.com/package/@upstash/ratelimit).

# Usage for Nextjs

For quick and easy setup in Next js, you can import a ready made chatbot. Just wrap it in a separate component with the `use client` directive:

```tsx
// components/chattr-example.tsx
'use client'

import { ChattrBot } from 'chattr'

export default function ChattrExample() {
  return (
    // These are the default props. If you don't need to customize these, just return <ChattrBot/>
    <ChattrBot
      welcomeText='Hey there! My name is Chattr, your personal assistant! Let me know if you have any questions.'
      endPoint='/api/chatGpt'
      errorMessage='Whoops! Looks like something went wrong. Please try again later.'
      chattrName='Chattr'
      userName='You'
    />
  )
}
```

Then import it wherever you'd like. For example, in your layout component:

```tsx
// app/layout.tsx
import {
  ThemeProvider,
  Background,
  Navigation,
  Footer,
  ChattrExample,
} from '@/components'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
      suppressHydrationWarning>
      <body>
        <ThemeProvider attribute='class'>
          <Navigation />
          <Background />
          <main>{children}</main>
          <Footer />
          <ChattrExample />
        </ThemeProvider>
      </body>
    </html>
  )
}
```

# Usage for Reactjs

If you are using React, you can use it without creating a wrapper component since you do not need the `use client` directive. Note: The library is still in development, it has not been tested in any other environment aside from next.

```tsx
// Your specified file
import { Navigation, Footer } from './your-components'
import { ChattrBot } from 'chattr'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
      <ChattrBot
        welcomeText='Hey there! My name is Chattr, your personal assistant! Let me know if you have any questions.'
        endPoint='/api/chatGpt'
        errorMessage='Whoops! Looks like something went wrong. Please try again later.'
        chattrName='Chattr'
        userName='You'
      />
    </>
  )
}
```

# Customizations

Currently working on a customization system. For now, if you'd like to customize your chatbot, you can use the boilerplate component below to get started! No documentation has been made yet, although everything is documented in JSDoc! Just hover over the components and intellisense will display props that you can copy default values from and customize.

```tsx
// components/chatbot.tsx
'use client' // for Next js

import React from 'react'

import chattr, {
  useChatbot,
  ChatContainer,
  ChatHeader,
  ChatFeed,
  ChatInput,
  ChatIcon,
} from 'chattr'

type ChatMessage = {
  text: string
  role: 'assistant' | 'user'
  key?: string | number
}

export default function ChatBot() {
  const ref = React.useRef<HTMLDivElement>(null)
  const { isOpen, toggle } = useChatbot()
  const [loading, setLoading] = React.useState(false)
  const [message, setMessage] = React.useState('')
  const [messages, setMessages] = React.useState<ChatMessage[]>([
    {
      text: 'Hey! My name is Bob. Your personal chatbot, you can ask me anything!',
      role: 'assistant',
    },
  ])

  React.useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight
    }
  }, [messages])

  async function sendMessage(
    event: React.MouseEvent | React.KeyboardEvent | React.FormEvent
  ) {
    event.preventDefault()
    setMessage('')
    setLoading(true)
    setMessages(prev => [
      ...prev,
      {
        text: message,
        role: 'user',
      },
    ])

    const response = await fetch('YOUR_API_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: message,
      }),
    })

    let answer = await response.json()

    if (answer.data.choices) {
      setLoading(false)
      setMessages(prev => [
        ...prev,
        {
          text: answer.data.choices[0].message.content,
          role: 'assistant',
        },
      ])
    } else {
      setLoading(false)
      setMessages(prev => [
        ...prev,
        {
          text: 'Something went wrong! Try again later.',
          role: 'assistant',
        },
      ])
    }
  }
  return isOpen ? (
    <>
      <chattr.div className='absolute z-20 flex h-screen w-full flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-900'>
        <chattr.p>This is a custom backdrop.</chattr.p>
      </chattr.div>
      <ChatContainer>
        <ChatHeader
          chatBotName='Bob'
          toggle={toggle}
        />
        <ChatFeed
          chatBotName='Bob'
          ref={ref}
          messages={messages}
          loading={loading}
        />
        <ChatInput
          setMessage={setMessage}
          sendMessage={sendMessage}
          message={message}
          loading={loading}
        />
      </ChatContainer>
    </>
  ) : (
    <ChatIcon toggle={toggle} />
  )
}
```

# License

This project is covered under the [MIT](https://opensource.org/licenses/MIT) license.

# Contributing

If you would like to contribute, [contact](mailto:hello@christianbmartinez.com?subject=[chattr]%20contribution%20inquiry) me!

# Future Development

I am currently working on a highly customizable version as we speak! The goal is to enable users to be able to fully customize any element, use pre made themes, have a website with docs and a configuration tool, and more! It's been fun building this so far, and I really hope you tag along for the ride.

# Author

Made with <3 by [Christian B. Martinez](https://christianbmartinez.com). Lets connect on [Github](https://github.com/christianbmartinez) or [X (twitter)](https://www.twitter.com/_coderchris)!
