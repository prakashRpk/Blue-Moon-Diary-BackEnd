const express = require('express');
const verifyToken = require('../middleware/auth');
const router = express.Router();


const { login } = require('../controllers/LoginController');
const { profile } = require('../controllers/ProfileController');
const { CreateUser, GetUser, UpdateUser} = require('../Controllers/UserController') 
const {CreateNote, GetNote, DeleteNote, UpdateNote} = require('../Controllers/NoteController')
const {CreateFeedback,GetFeedback} = require('../Controllers/FeedbackController')

router.post('/login', login);
router.get('/profile', verifyToken, profile);

router.post('/CreateUser', CreateUser);
router.get('/GetUser', GetUser);
router.put('/UpdateUser/:id',UpdateUser)

router.post('/CreateNote',CreateNote)
router.get('/GetNote',GetNote)
router.put('/UpdateNote/:id',UpdateNote)
router.delete('/DeleteNote/:id',DeleteNote)

router.post('/CreateFeedback',CreateFeedback)
router.get('/GetFeedback',GetFeedback)

module.exports = router;
