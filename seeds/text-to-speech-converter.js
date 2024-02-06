const gTTS = require('gtts');
const fs=require('fs');
const Speech =require('../models/speechModel')
const connectDB = require("../config/connectDB");
connectDB();
async function createSpeechEntry(text) {
    try {
      let speech_text = text;
      const speech = new gTTS(speech_text, 'es');
      speech.save('Voice2.mp3', function (err, result){
        if(err) { throw new Error(err); }
        console.log("Text to speech converted!");
    });
    const speechData = fs.readFileSync('Voice2.mp3');

    const speech_entry = new Speech({
        content:speech_text,
        audioFile:Buffer.from(speechData)
      });

      const new_speech_entry=await speech_entry.save();
    //   console.log('Speech entry created:', result.insertedId);
    } finally {
    //   await client.close();
    }
  }
  createSpeechEntry("Welcome to Geeks for Geeks");

  async function getSpeechEntryById() {
    try {

      const result = await Speech.findOne({ _id:'65c1961035053f3893d18ca1' });
  
      if (result) {
        console.log('Speech entry found:', result);
      } else {
        console.log('Speech entry not found');
      }
    } finally {
    //   await client.close();
    }
  }

  getSpeechEntryById()
  