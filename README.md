[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![npm](https://d25lcipzij17d.cloudfront.net/badge.svg?id=js&r=r&ts=1683906897&type=6e&v=1.0.9&x2=0)](https://www.npmjs.com/package/chattr)

<p><a href="https://www.npmjs.com/package/chattr"><img style='border-radius: 100%; filter: drop-shadow(0px 9px 10px #b0b0b0);' src="https://i.ibb.co/8sXcdcV/chattrlogo.webp" width='350px' height='350px' alt="Chattr logo generated by a function call from chattr" /></a></p>

# chattr

A customizable chatgpt chatbot component library for Nextjs. Built with React, Tailwindcss, OpenAI, and Typescript.

### Table of Contents

**[Installation Instructions](#installation)**<br>
**[Configuration Instructions](#configuration)**<br>
**[Themes](#themes)**<br>
**[Endpoints](#endpoints)**<br>
**[Function Calling](#function-calling)**<br>
**[Usage](#usage)**<br>
**[Customizations](#customizations)**<br>
**[Create Chattr App](#create-chattr-app)**<br>
**[License](#license)**<br>
**[Contributing](#contributing)**<br>
**[Future Development](#future-development)**<br>
**[Author](#author)**<br>
**[Sponsors](#sponsors)**<br>

# Installation

```bash
npm i chattr@latest
```

# Configuration

Before using `chattr`, we need to configure a few things. First, ensure that you are on the latest versions of `react, react-dom, and tailwindcss`. Feel free to try other versions, however do note that they have not been tested. **Make sure tailwindcss is in dependencies and not devDependencies**

```json
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "tailwindcss": "^3.3.6"
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
      colors: {
        chattrWhite: 'rgb(255 255 255 / 1)', // white
        chattrBlack: 'rgb(24 24 27 / 1)', // zinc-900
        chattrPitchBlack: 'rgb(9 9 11 / 1)', // zinc-950
        chattrPrimary: 'rgb(139 92 246 / 1)', // violet-500
        chattrPrimaryDark: 'rgb(124 58 237 / 1)', // violet-600
        chattrSecondary: 'rgb(113 113 122 / 0.8)', // zinc-500/80
        chattrSecondaryDark: 'rgb(244 244 245 / 0.6)', //zinc-100/60
        chattrGray: 'rgb(212 212 216 / 0.9)', // zinc-300/90
        chattrGrayDark: 'rgb(244 244 245 / 0.15)', //zinc-100/15
        chattrText: 'rgb(39 39 42 / 1)', // zinc-800
        chattrTextDark: 'rgb(244 244 245 / 1)', // zinc-100
        chattrBackgroundMuted: 'rgb(228 228 231 / 0.7)', //zinc-200/70
      },
      borderRadius: {
        chattrRoundedSmall: '0.5rem',
        chattrRoundedMedium: '0.85rem',
        chattrRoundedLarge: '1rem',
      },
      animation: {
        chattrLoader: 'chattrLoader 0.5s infinite alternate',
      },
      keyframes: {
        chattrLoader: {
          from: {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
          to: {
            opacity: '0.25',
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

/* Animation styles for the ChattrLoader components */
@layer utilities {
  .animation-delay-200 {
    animation-delay: 0.15s;
  }
  .animation-delay-400 {
    animation-delay: 0.3s;
  }
}

/* Dot styles for the ChattrLoader components */
.chattrDotDefault {
  @apply bg-chattrWhite mx-0.5 h-[6px] w-[6px] rounded-full;
}

.chattrDotMinimalist {
  @apply bg-chattrSecondary dark:bg-chattrSecondaryDark mx-0.5 h-[6px] w-[6px] rounded-full;
}
```

This is for the overall chattr styles, and a custom loader that comes shipped with the chatbot in between states of sent messages. You can customize it, or create your own!

Next, you need an `OPENAI_API_KEY`. If you don't have one already, click [here](https://platform.openai.com/api-keys) to get one.

Once you have your key, install `dotenv` if required and create a `.env` file in the root of your project. Insert your api key there, along with any other api keys if you plan on using [function calling](#function-calling). **In production, remember to copy your api key, to your environment variables section.**

```bash
OPENAI_API_KEY='YOUR_OPENAI_API_KEY'
WEATHER_APP_ID='YOUR_OPENWEATHERMAPS_API_KEY'
REPLICATE_API_TOKEN='YOUR_REPLICATE_TOKEN'
```

# Themes

Chattr currently has two themes- `Default` and `Minimalist`. The default theme was styled by me, and the minimalist theme was styled originally by [shadcn](https://ui.shadcn.com/themes) and has been highly customized to be used as a chattrbot. Shadcn himself even [reposted](https://twitter.com/cbmonx/status/1729318382355587335) the tweet of his chat component being used in chattr!

To see how the themes work, please visit the chattr [repo](https://github.com/christianbmartinez/chattr)

# Endpoints

In order to use chattr, you have to create an endpoint that handles a post request to the chatGpt completions api.

If you're using the `Default.Chattrbot`, you can copy and paste this route to `app/api/chat-gpt/route.ts` as a starting point:

```typescript
// app/api/chat-gpt/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const {
      prompt,
      chattrBotName,
      chattrBotHistory,
    }: {
      prompt: string
      chattrBotName: string | number
      chattrBotHistory: string
    } = await req.json()

    const chatHistory = JSON.stringify(chattrBotHistory)

    const payload = {
      model: 'gpt-4-1106-preview',
      messages: [
        {
          role: 'system',
          content: `
          You are a chatbot named ${chattrBotName}.
          Respond with any information that the user requests.
          You can view the entire chat history here, where your role is the assistant, and the users role is user: ${chatHistory}.
          This history is helpful if you need to recall any information or understand context from chat.
          Use a professional tone in your responses.`,
        },
        {
          role: 'assistant',
          content: `Hey! Thanks for visiting. I'm ${chattrBotName}, you can ask me anything!`, // Replace with your own greeting
        },
        {
          role: 'user',
          content: prompt, // The users prompt
        },
      ],
      temperature: 0.7, // Your configs
      frequency_penalty: 0,
      presence_penalty: 0,
      max_tokens: 75,
      n: 1,
    }

    const response: Response = await fetch(
      'https://api.openai.com/v1/chat/completions',
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        method: 'POST',
        body: JSON.stringify(payload),
      }
    )

    if (!response.ok) {
      return NextResponse.json({
        ok: false,
        error:
          'Looks like something went wrong fetching that answer! Try again later.',
      })
    }

    const completion = await response.json()

    return NextResponse.json({
      ok: true,
      content: { text: completion.choices[0].message.content },
    })
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      ok: false,
      error: 'Looks like something went wrong. Try again later.',
    })
  }
}
```

You can view the default chattrbot and components [here](https://github.com/christianbmartinez/chattr/blob/main/src/components/default) to understand how it works with the `app/api/chat-gpt/route.ts` route.

# Function calling

If you're using the `Minimalist.Chattrbot`, the route is a lot different in that it uses open ai's function calling feature.

A solution for the ui that I came up with is using a key value pair within the response object to tell the client what type of component to render. You can see it in action [here](https://github.com/christianbmartinez/chattr/blob/main/src/components/minimalist/chattr-messages.tsx).

You can copy and paste the following as a starting point to `app/api/function-calling/route.ts`. Make sure to install `replicate` and `dayjs` if you'd like to use the `create_video` and `get_current_weather` functions in this example.

```typescript
// app/api/function-calling/route.ts
import { NextRequest, NextResponse } from 'next/server'

import { get_current_weather, create_image, create_video } from 'chattr'

export async function POST(req: NextRequest) {
  try {
    const {
      prompt,
      chattrBotName,
      chattrBotHistory,
    }: {
      prompt: string
      chattrBotName: string | number
      chattrBotHistory: string
    } = await req.json()

    const chatHistory = JSON.stringify(chattrBotHistory)

    const payload = {
      model: 'gpt-4-1106-preview',
      messages: [
        {
          role: 'system',
          content: `
          You are a chatbot named ${chattrBotName}.
          Respond with any information that the user requests.
          You can view the entire chat history here, where your role is the assistant, and the users role is user: ${chatHistory}.
          This history is helpful if you need to recall any information or understand context from chat.
          Use a professional tone in your responses.`,
        },
        {
          role: 'assistant',
          content: `Hey! Thanks for visiting. I'm ${chattrBotName}, you can ask me anything!`,
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      functions: [
        // Define your functions see more at https://platform.openai.com/docs/guides/function-calling
        {
          name: 'get_current_weather',
          description: 'Get the current weather',
          parameters: {
            type: 'object',
            properties: {
              zipcode: {
                type: 'string',
                description:
                  'The zipcode of the city. For example, 90210 for Beverly Hills. If the user passes in a city, retrieve any zip code for that city and use it as the zipcode value.',
              },
              state: {
                type: 'string',
                description:
                  'The state of the city. For example: CA if the user asks for the weather in Beverly Hills, or UT if the user asks for the weather in Salt Lake City, etc. If the user passes a zip code or a city name as a zip code, retrieve the state that belongs to that zip code and use it as the state value.',
              },
            },
            required: ['zipcode', 'state'],
          },
        },
        {
          name: 'create_image',
          description: 'Create an image for the given description',
          parameters: {
            type: 'object',
            properties: {
              description: {
                type: 'string',
                description: 'Description of what the image should be.',
              },
            },
            required: ['description'],
          },
        },
        {
          name: 'create_video',
          description: 'Create a video for a given description',
          parameters: {
            type: 'object',
            properties: {
              description: {
                type: 'string',
                description: 'Description of what the video should be.',
              },
            },
            required: ['description'],
          },
        },
      ],
      function_call: 'auto', // the completions api will automatically call the functions for you
      temperature: 0.7,
      frequency_penalty: 0,
      presence_penalty: 0,
      max_tokens: 75,
      n: 1,
    }

    const response: Response = await fetch(
      'https://api.openai.com/v1/chat/completions',
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        method: 'POST',
        body: JSON.stringify(payload),
      }
    )

    const completion = await response.json()

    if (completion.choices[0].message.content === null) {
      // If the content is null, that means it's a function call
      const args = JSON.parse(
        completion.choices[0].message.function_call.arguments
      )

      const functionCall = completion.choices[0].message.function_call.name

      if (functionCall === 'get_current_weather') {
        const {
          temperature,
          celcius,
          location,
          url,
          description,
          humidity,
          wind,
          clouds,
          state,
        } = await get_current_weather(args.zipcode, args.state)

        return NextResponse.json({
          ok: true,
          ui: 'weather',
          content: {
            function_response: {
              temperature: temperature,
              celcius: celcius,
              location: location,
              url: url,
              description: description,
              humidity: humidity,
              wind: wind,
              clouds: clouds,
              state: state,
            },
          },
        })
      } else if (functionCall === 'create_image') {
        const { description, url } = await create_image(args.description)

        return NextResponse.json({
          ok: true,
          ui: 'image',
          content: {
            function_response: {
              description: description,
              url: url,
            },
          },
        })
      } else if (functionCall === 'create_video') {
        const { description, url } = await create_video(args.description)

        return NextResponse.json({
          ok: true,
          ui: 'video',
          content: {
            function_response: {
              description: description,
              url: url,
            },
          },
        })
      } else {
        return NextResponse.json({
          ok: false,
          error:
            'Looks like something went wrong while generating that. Please try again! If the problem persists, let us know at hello@example.com.',
        })
      }
    } else {
      return NextResponse.json({
        ok: true,
        content: { text: completion.choices[0].message.content },
      })
    }
  } catch (error) {
    console.log(error)
    return NextResponse.json({ ok: false, error: JSON.stringify(error) })
  }
}
```

You can view the minimalist chattrbot [here](https://github.com/christianbmartinez/chattr/blob/main/src/components/minimalist) to understand how it works with the `app/api/function-calling/route.ts` route.

It's worth mentioning that you should protect your routes with some type of authentication, or at the very least, use a rate limiter. `@upstash/ratelimit @upstash/redis` is a great option. You can view the package [here](https://www.npmjs.com/package/@upstash/ratelimit).

# Usage

After you have setup the route you need, you can import a chattrbot! Just wrap it in a separate component with the `use client` directive:

```tsx
// components/chattr-example.tsx
'use client'

import { Default } from 'chattr'
//import { Minimalist } from 'chattr for function calling'

export default function ChattrExample() {
  return <Default.Chattrbot />
  //return <Minimalist.Chattrbot/>
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

# Customizations

If you need more control over the styles, you can view the chattr repo [here](https://github.com/cbmongithub/chattr). Copy existing code, create new bots, expand on existing bots, etc. The code is open source and yours to use!

# Create Chattr App

If you need full customization over the components themselves, checkout the newly shipped [create-chattr-app](https://github.com/cbmongithub/create-chattr-app)! It is a Next js boilerplate that ships with all chatbot component files, routes, and a landing page already setup for you. All you need is your api keys!

# License

This project is covered under the [MIT](https://opensource.org/licenses/MIT) license.

# Contributing

If you would like to contribute, feel free to open a pull request! Experienced library developers would be awesome as this is my first real library.

# Future Development

More themes are coming, such as full screen layout instead of a widget. If you have any ideas, please [let me know](mailto:hello@christianbmartinez.com?subject=Chattr%20%Suggestion) about them!

# Author

Made with <3 by [Christian B. Martinez](https://christianbmartinez.com). Lets connect on [Github](https://github.com/cbmongithub) or [X (twitter)](https://www.twitter.com/cbmonx)!

Hiring? I would love the opportunity to become apart of your team! [contact me](mailto:hello@christianbmartinez.com?subject=Join%20%our%20Team) anytime.

# Sponsors

If you like the project and it adds value to you, feel free to [sponsor me](https://github.com/sponsors/cbmongithub) if you'd like!
