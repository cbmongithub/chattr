import React from 'react'
import dayjs from 'dayjs'

import ChattrAssistantMessage from './chattr-assistant-message'

export default function ChattrAssistantWeather({
  key,
  data,
}: {
  key?: string
  data?: {
    temperature: string
    celcius: string
    location: string
    description: string
    humidity: string
    wind: string
    clouds: string
    state: string
    url: string
  }
}) {
  const currentTimestamp = Date.now()
  const parsedDate = dayjs(currentTimestamp)
  const today = parsedDate.format('dddd, MMMM DD, YYYY')

  if (!data) {
    return (
      <ChattrAssistantMessage
        key={key}
        content='It looks like something went wrong while fetching the weather :( Try again later!'
      />
    )
  }

  return (
    <div
      key={key}
      className='flex justify-end'>
      <div className='dark:bg-chattrGrayDark rounded-chattrRoundedLarge bg-chattrBackgroundMuted w-full px-3 py-2 shadow'>
        <p className='text-chattrText dark:text-chattrTextDark break-words text-sm font-light'>
          Here&apos;s the most recent weather data I found for {data.location}:
        </p>

        <div className='rounded-chattrRoundedLarge bg-chattrPrimary dark:bg-chattrPrimaryDark mb-2 mt-3 flex w-full flex-col p-4'>
          <div className='text-center'>
            <p className='text-chattrWhite text-xl font-bold'>
              {data.location}, {data.state}
            </p>
            <p className='text-chattrBackgroundMuted text-sm font-light'>
              {today}
            </p>
          </div>
          <div className='flex items-center justify-center py-3'>
            <img
              alt='Weather Icon'
              className='h-16 w-16'
              src={data.url}
              height={100}
              width={100}
            />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <p className='text-chattrWhite text-4xl font-bold'>
              {data.temperature}
            </p>
            <p className='text-chattrGray mt-2 text-sm font-light'>
              {data.celcius}
            </p>
          </div>
          <div className='mt-6 flex flex-row justify-between'>
            <div className='flex flex-col items-center'>
              <p className='text-chattrWhite text-sm font-semibold'>Wind</p>
              <p className='text-chattrGray text-sm font-light'>{data.wind}</p>
            </div>
            <div className='flex flex-col items-center'>
              <p className='text-chattrWhite text-sm font-semibold'>Humidity</p>
              <p className='text-chattrGray text-sm font-light'>
                {data.humidity}
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <p className='text-chattrWhite text-sm font-semibold'>Clouds</p>
              <p className='text-chattrGray text-sm font-light'>
                {data.clouds}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
