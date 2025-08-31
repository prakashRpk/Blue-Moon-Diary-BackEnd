const Feedback = require('../Models/Feedback');

module.exports.CreateFeedback = async (req, res) => {
  try {
    const newFeedback = await Feedback.create(req.body);
    res.status(201).json(newFeedback); // 201 = Created
  } catch (error) {
    res.status(400).json({ error: error.message }); // 400 = Bad Request
  }
};

module.exports.GetFeedback = async (req, res) => {
  try {
    const Feedbacks = await Feedback.find(); // Fetch all documents
    res.status(200).json(Feedbacks); // 200 = OK
  } catch (error) {
    res.status(500).json({ error: error.message }); // 500 = Internal Server Error
  }
};