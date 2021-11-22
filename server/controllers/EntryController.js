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
// this method rerquests all of the entries in db
  async getEntries(req, res) {
    const entries = await Entry.find();
    res.locals.entries = entries;
    res.status(200).json(res.locals.entries);
    
  },

  // this method will filter the entries by the requested category
  async getEntry(req, res) {
    const entries = await Entry.find({category: req.body.category})
    
    res.locals.entries = entries
    res.status(200).json(res.locals.entries);
  },

// this method will 
  async updateEntry(req, res) {
    const {text} = req.body;
    const entry = await Entry.findByIdAndUpdate(req.body._id, {text: text}, (err, updated) => {
      if (err) {
        console.log(err);
        res.status(400)
      } else {
        res.locals.updated = updated;
        return res.status(200).json(res.locals.updated)
      };
    })
  },

  async deleteEntry(req, res, next) {
    await Entry.findByIdAndDelete(`${req.params.entryId}`, (err, updated) => {
      if (err) return res.status(400).render('Error in EntryController.deleteEntry');
      console.log(updated)
      

      // res.locals.student = student;
      console.log('Student deleted from database.');
     
      return next();
    });
  },

  // quizController.getQuestions = async (req, res, next) => {
  //   console.log('inside get questions')
  
  //   const questions = await Question.find();
  //   res.locals.questions = questions;
  //   // console.log('result questions', res.locals.questions);
  //   next();
  // }
  

};


module.exports = EntryController;