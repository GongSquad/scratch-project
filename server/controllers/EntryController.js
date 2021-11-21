const Entry = require('../models/EntryModel.js');

const EntryController = {
  createEntry(req, res, next) {
    const { title, category, text } = req.body;
    if (!category) return res.render('Missing date and/or category from EntryController.createEntry');
  
    Entry.create({ title: title, category: category, text: text }, (err, entry) => {
      if (err) {
        console.log('MONGOERRORSAYSWHATTTTTT', err);
        res.status(400);
      } else{
        // console.log(student);
        console.log('connected to DB')
        res.locals.entry = entry;
        // res.json(res.locals.entry);
        // res.redirect('/');
        next();
        // res.send({student: res.locals.student});
      }
    });
  },

  async getEntries(req, res) {
    const entries = await Entry.find();
    res.locals.entries = entries;
    res.status(200).json(res.locals.entries);
  }
  // quizController.getQuestions = async (req, res, next) => {
  //   console.log('inside get questions')
  
  //   const questions = await Question.find();
  //   res.locals.questions = questions;
  //   // console.log('result questions', res.locals.questions);
  //   next();
  // }
  

};


module.exports = EntryController;