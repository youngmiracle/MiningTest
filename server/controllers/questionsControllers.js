const db = require('../models/models');
const questions = db.Questions;

class QuestionsController{
    async getQuestions(req, res, next){
        const question = await questions.findAll();
        res.send(question)
    }
}

module.exports = new QuestionsController();