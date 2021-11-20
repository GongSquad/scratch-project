const Entry = require('../models/EntryModel.js');

const EntryController = {
  createEntry(req, res) {
    const { title, date, category, text } = req.body;
    if (!date || !category) return res.render('Missing date and/or category from EntryController.createEntry');
  
    Entry.create({ title: title, date: date, category: category, text: test }, (err, entry) => {
      if (err) {
        console.log('MONGOERRORSAYSWHATTTTTT', err);
        res.status(400);
      } else{
        // console.log(student);
        console.log('connected to DB')
        res.locals.entry = entry;
        res.json(res.locals.entry);

        // next();
        // res.send({student: res.locals.student});
      }
    });
  },
};


module.exports = EntryController;