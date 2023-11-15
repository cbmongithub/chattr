type ChattrConfig = {
  debugMode: boolean
}

const defaultConfig: ChattrConfig = {
  debugMode: false,
}

let chattrConfig: ChattrConfig = { ...defaultConfig }

export function setConfig(config: Partial<ChattrConfig>): void {
  chattrConfig = { ...chattrConfig, ...config }
}

export function getConfig(): ChattrConfig {
  return chattrConfig
}
