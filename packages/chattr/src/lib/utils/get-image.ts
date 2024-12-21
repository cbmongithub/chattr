const getImage = async (description: string) => {
  try {
    const payload = {
      model: 'dall-e-3',
      prompt: description,
      n: 1,
      size: '1024x1024',
      response_format: 'url',
      quality: 'hd',
    }

    const response = await fetch(
      'https://api.openai.com/v1/images/generations',
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
      throw new Error('Image data not available')
    }

    const image = await response.json()

    return {
      description: description,
      url: `${image.data[0].url}`,
    }
  } catch (error) {
    console.log(error)
    throw error
  }
}

export default getImage