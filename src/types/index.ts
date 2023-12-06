export type ChattrMessage = {
  role: 'user' | 'assistant'
  key?: string
  content?: string
  ui: string
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
}
