const cohere = require('cohere-ai');
const dotenv = require('dotenv');

dotenv.config();
const COHERE_API_KEY = process.env.COHERE_API_KEY;

const summarizeText = async (req, res) => {
  try {
    const { text } = req.body;
    cohere.init(COHERE_API_KEY);
    const summaryOptions = {
      text,
      length: 'short',
      format: 'paragraph',
      model: 'summarize-xlarge',
      additional_command: '',
      temperature: 0.3,
    };

    const response = await cohere.summarize(summaryOptions);
    const summary = await response?.body?.summary;
    if(!response || !summary) {
      return res.status(500).json({
        message: 'Error in text summarization'
      });
    }

    return res.status(200).json({
      message: 'Text Summarization Successful',
      summary
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      message: 'Error summarizing text',
      error: error.message, 
    });
  }
};

module.exports = {
  summarizeText,
};
