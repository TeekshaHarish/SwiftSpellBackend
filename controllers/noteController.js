const Note = require('../models/noteModel');

const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const userID = req.user?req.user:'65b2b60da17135e971496c47';

    const note = new Note({
      title,
      content,
      user: userID
    });

    const newNote = await note.save();

    return res.status(201).send({
      message: "Note created successfully",
      note: newNote,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).send({
      message: "Note creation unsuccessful",
      error: error.message,
    });
  }
};

const getAllNotes = async (req, res) => {
  // return res.send("This is all notes api")
  try {
    const userId = req.user?req.user:'65b2b60da17135e971496c47';
    const notes = await Note.find({ user: userId });

    return res.status(200).json({
      message: "Notes found successfully",
      notes,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Notes fetching unsuccessful",
      error: error.message,
    });
  }
};

const getSingleNote = async (req, res) => {
  try {
    const noteID = req.params.id;
    const note = await Note.findById(noteID);
    if (!note) {
      return res.status(404).json({
        message: "Note not found",
      });
    }

    return res.status(200).json({
      message: "Note found successfully",
      note,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Note fetching unsuccessful",
      error: error.message,
    });
  }
};

const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const noteID = req.params.id;

    const note = await Note.findById(noteID);
    if (!note) {
      return res.status(404).send({
        message: "Note not found",
      });
    } 

    note.title = title;
    note.content = content;
    const updatedNote = await note.save();

    return res.status(200).send({
      message: "Note updated successfully",
      updatedNote,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      message: "Note updating unsuccessful",
      error: error.message,
    });
  }
};

const deleteNote = async (req, res) => {
  try {
    const noteID = req.params.id;
    const note = await Note.findById(noteID);

    if (!note) {
      return res.status(404).send({
        message: "Note not found",
      });
    } 

    await note.deleteOne();

    return res.status(200).send({
      message: "Note deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      message: "Note deletion unsuccessful",
      error: error.message,
    });
  }
};

module.exports = {
  createNote,
  getAllNotes,
  getSingleNote,
  updateNote,
  deleteNote,
};
