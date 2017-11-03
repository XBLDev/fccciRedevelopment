const mongoose = require('mongoose');

// define the User model schema
const CalendarEventSchema = new mongoose.Schema({

      year   : String ,
      Events: [{
        month : String,
        MonthlyEvent : [{date: Date, eventCH: String, eventEN: String}]
      }]

  });

  module.exports = mongoose.model('CalendarEvents', CalendarEventSchema, 'calendarevents');