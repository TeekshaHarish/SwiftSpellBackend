const PlayHT = require('playht');
const dotenv = require('dotenv');

dotenv.config();
const TTS_KEY = process.env.TTS_KEY;
const USERID = process.env.USERID;

const textToSpeech = async (req, res) => {
  try {
    const { text } = req.body;

    PlayHT.init({
      apiKey: `${TTS_KEY}`,
      userId: `${USERID}`,
      defaultVoiceId: 's3://voice-cloning-zero-shot/d9ff78ba-d016-47f6-b0ef-dd630f59414e/female-cs/manifest.json',
      defaultVoiceEngine: 'PlayHT2.0',
    });

    const generated = await PlayHT.generate(text);
    const { audioUrl } = generated;
    if(!generated || !audioUrl) {
      return res.status(500).json({
        message: 'Error converting text to speech'
      })
    }

    return res.status(200).json({
      message: 'Text to Speech Successful',
      audio: audioUrl
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      message: 'Error converting text to speech',
      error: error.message, 
    });
  }
};

module.exports = {
  textToSpeech,
};
