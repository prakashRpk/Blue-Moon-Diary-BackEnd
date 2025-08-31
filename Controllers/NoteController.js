const mongoose = require('mongoose');
const Note = require('../Models/Notes');

// Create Note
module.exports.CreateNote = async (req, res) => {
  try {
    const newNote = await Note.create(req.body);
    res.status(201).json(newNote); // 201 = Created
  } catch (error) {
    res.status(400).json({ error: error.message }); // 400 = Bad Request
  }
};

// Get All Notes
module.exports.GetNote = async (req, res) => {
  try {
    const notes = await Note.find(); // Fetch all documents
    res.status(200).json(notes); // 200 = OK
  } catch (error) {
    res.status(500).json({ error: error.message }); // 500 = Internal Server Error
  }
};

// Update Note
module.exports.UpdateNote = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid note ID' });
    }

    const updatedNote = await Note.findByIdAndUpdate(
      id,
      req.body, // <-- you missed this (data to update)
      { new: true } // return updated doc
    );

    if (!updatedNote) {
      return res.status(404).json({ error: 'Note not found' });
    }

    res.status(200).json({
      message: 'Note updated successfully',
      note: updatedNote
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Note
module.exports.DeleteNote = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: 'Invalid note ID' });
    }

    const note = await Note.findById(id);
    if (!note) {
      return res.status(404).json({ success: false, message: 'Note not found' });
    }

    await Note.findByIdAndDelete(id);

    res.status(200).json({ success: true, message: 'Note deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};
