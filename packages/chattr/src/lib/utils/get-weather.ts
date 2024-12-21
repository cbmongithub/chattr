export const getWeather = async (
  zipcode: string,
  state: string
) => {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=${process.env.WEATHER_APP_ID}&units=imperial`
    )

    if (!response.ok) {
      throw new Error('Weather data not available')
    }
    const city = await response.json()

    const celcius = ((city.main.temp - 32) * 5) / 9

    return {
      temperature: `${city.main.temp}°F`,
      celcius: `${Math.round(celcius * 100) / 100}°C`,
      location: `${city.name}`,
      url: `https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`,
      description: `${city.weather[0].description}`,
      humidity: `${city.main.humidity}%`,
      wind: `${city.wind.speed}m/h`,
      clouds: `${city.clouds.all}%`,
      state: state,
    }
  } catch (error) {
    console.log(error)
    throw error
  }
}
