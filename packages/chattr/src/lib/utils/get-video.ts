import Replicate from 'replicate'

const getVideo = async (description: string) => {
  try {
    const replicate = new Replicate({
      auth: process.env.REPLICATE_API_TOKEN,
    })

    const response = await replicate.run(
      'anotherjesse/zeroscope-v2-xl:1f0dd155aeff719af56f4a2e516c7f7d4c91a38c7b8e9e81808e7c71bde9b868',
      {
        input: {
          fps: 24,
          fast: true,
          width: 576,
          height: 320,
          prompt: description,
          num_frames: 24,
          guidance_scale: 17.5,
          num_inference_steps: 50,
        },
      }
    )

    if (!response) {
      throw new Error('Video data not available')
    }

    return {
      description: description,
      url: response,
    }
  } catch (error) {
    console.log(error)
    throw error
  }
}

export default getVideo