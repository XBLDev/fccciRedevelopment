const mongoose = require('mongoose');

const GalaryPhotoSchema = new mongoose.Schema({
          dateTaken : String,
          URL : String,    
});
    
module.exports = mongoose.model('GalaryPhotos', GalaryPhotoSchema, 'galaryphotos');