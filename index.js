const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require("./config/connectDB");
const userRoutes = require("./routes/userRoutes");
const summaryRoutes = require('./routes/summaryRoutes');
const textToSpeechRoutes = require('./routes/textToSpeechRoutes');
const speechToTextRoutes = require('./routes/speechToTextRoutes');
const cardRoutes = require('./routes/cardRoutes');
const noteRoutes = require('./routes/noteRoutes');

dotenv.config();
const PORT = process.env.PORT;
// const PORT=8080;

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.get("/", async(req, res) => {
    res.send('Welcome to the lexilearn server');
});

app.use("/api/v1/user", userRoutes); // done
app.use("/api/v1/summary", summaryRoutes); //done
app.use("/api/v1/texttospeech", textToSpeechRoutes); //done
app.use("/api/v1/speechtotext", speechToTextRoutes);  // not including
app.use("/api/v1/card", cardRoutes);  // done
app.use("/api/v1/note", noteRoutes);

app.listen(PORT, () => {
    console.log(`Server started at Port : ${PORT}`);
});
