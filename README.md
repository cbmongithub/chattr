[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![alt text](https://github.com/christianbmartinez/chattr/blob/main/chattr_img.jpg)

# chattr

A customizable chatgpt chatbot component library for React, built with tailwindcss.

### Table of Contents

**[Installation Instructions](#installation)**<br>
**[Configuration Instructions](#configuration)**<br>
**[Endpoints](#endpoints)**<br>
**[Usage for Nextjs](#usage-for-nextjs)**<br>
**[Usage for Reactjs](#usage-for-reactjs)**<br>
**[Customizations](#customizations)**<br>
**[License](#license)**<br>
**[Contributing](#contributing)**<br>
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

This is for the custom loader that comes shipped with the chatbot in between states of sent messages. You can customize it, or create your own.

Next, you need an `OPENAI_API_KEY`. If you don't have one already, click [here](https://platform.openai.com/api-keys) to get one.

Once you have your key, install `dotenv` if required and create a `.env` file in the root of your project. Insert your api key there. **In production, remember to copy this api key, verbatim, to your environment variables section.**

```bash
OPENAI_API_KEY='asdfkj2w38ou92example384u2ioashdfa_sk'
```

# Endpoints

In order to use chattr, you have to create an endpoint that handles a post request to the chatGpt completions api. By default, chattr passes the users message as `prompt` to the backend. When developing your api endpoint, you must extract the "prompt" parameter.

Here is an example of an api route in Next js, where we are destructuring the prompt that contains the users message, submitted from the client.

In the payload, we have our chatgpt model, instructions, the users prompt, and other configurations.

We are then posting that data to the chat gpt completions endpoint as a string with our api key, and get back an response from open ai.

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

# Usage for Nextjs

For quick and easy setup in Next js, you can import a ready made chatbot. Just wrap it in a separate component with the `use client` directive:

```tsx
// components/chattr-example.tsx
'use client'

import { ChatBot } from 'chattr'

export default function ChattrExample() {
  return (
    <ChatBot
      initialText='Hey there! Welcome to my website. Let me know if you have any questions!'
      endPoint='/api/chatGpt' // Example api endpoint that would handle a chatgpt api POST request.
      errorMessage='Hmmm.... It looks like something went wrong on my end, try again later!'
    />
  )
}
```

Then all you have to do is import it wherever you'd like. For example, in your layout component:

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
import { ChatBot } from 'chattr'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
      <ChatBot
        initialText='Hey there! Welcome to my website. Let me know if you have any questions!'
        endPoint='https://www.example.com/api/chatGpt' // Example express endpoint that would handle a chatgpt api POST request.
        errorMessage='Hmmm.... It looks like something went wrong on my end, try again later!'
      />
    </>
  )
}
```

# Customizations

If you want to customize your chatbot, you can use the boilerplate component below to get started! No documentation has been made yet, although everything is documented in JSDoc! Just hover over the components and intellisense will display props that you can copy default values from and customize.

```tsx
// components/chatbot.tsx
'use client' // for Next js

import React from 'react'

import {
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
      text: 'Hey! My name is Custom. Your personal chatbot, you can ask me anything!',
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

    const response = await fetch('YOUR_ENDPOINT', {
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
    <ChatContainer>
      <ChatHeader
        chatBotName='Custom'
        toggle={toggle}
      />
      <ChatFeed
        chatBotName='Custom'
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
  ) : (
    <ChatIcon toggle={toggle} />
  )
}
```

# License

This project is covered under the [MIT](https://opensource.org/licenses/MIT) license.

# Contributing

If you would like to contribute, [contact](mailto:hello@christianbmartinez.com?subject=[chattr]%20contribution%20inquiry) me!

# Author

Made with <3 by [Christian B. Martinez](https://christianbmartinez.com). Lets connect on [Github](https://github.com/christianbmartinez) or [X (twitter)](https://www.twitter.com/_coderchris)!
