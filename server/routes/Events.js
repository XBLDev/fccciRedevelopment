var mongoose = require('mongoose')


const express = require('express');

const router = new express.Router();

const calendarevents = mongoose.model('CalendarEvents');

var conn = mongoose.connection;

calendarevents.find().count(function(err, count){
    if(!err)
    {
        if(count == 0)
        {
            console.log('Found calendarevents, no records in it, adding some new default records');

            // year   : String ,
            // Events: [{
            //   month : String,
            //   MonthlyEvent : [{date: Date, eventCH: String, eventEN: String}]
            // }]
            // var d = new Date();
            // d.setFullYear(2020, 0, 14);
            //new Date().toISOString(),
            //new Date('05 October 2011 14:48 UTC');

            var Events_2017 = {
            year: '2017', 
            Events: [
                {month: 11, MonthlyEvent : 
                    [
                        {date: new Date('05 November 2017').toISOString(), eventCH: '风雨的无阻, 我们的无悔', eventEN: 'Rain and rain unimpeded, we regret'},
                        {date: new Date('15 November 2017').toISOString(), eventCH: '华联社中文学校2017年寻根之旅黑龙江冬令营总结大会', eventEN: 'Hualian Chinese School 2017 Seeking Tour of Heilongjiang Winter Camp Summary Conference'}
                    ]
                },
                {month: 12, MonthlyEvent : 
                    [
                        {date: new Date('08 December 2017').toISOString(), eventCH: '风雨的无阻, 我们的无悔', eventEN: 'Rain and rain unimpeded, we regret'}
                    ]
                }

            ]
            };

            var Events_2018 = {
                year: '2018', 
                Events: [
                    {month: 1, MonthlyEvent : 
                        [
                            {date: new Date('08 January 2018').toISOString(), eventCH: '风雨的无阻, 我们的无悔', eventEN: 'Rain and rain unimpeded, we regret'},
                            {date: new Date('20 January 2018').toISOString(), eventCH: '华联社中文学校2017年寻根之旅黑龙江冬令营总结大会', eventEN: 'Hualian Chinese School 2017 Seeking Tour of Heilongjiang Winter Camp Summary Conference'}
                        ]
                    }

                ]
                };


            conn.collection('calendarevents').insert(Events_2017, function(err, records){
                // console.log("Record added as "+records[0]._id);
                if(err)
                {
                   console.log('error insert first events');
                }
                else
                {
                    console.log('inserted first events');
                    
                }
            });

            conn.collection('calendarevents').insert(Events_2018, function(err, records){
                // console.log("Record added as "+records[0]._id);
                if(err)
                {
                   console.log('error insert second events');
                }
                else
                {
                    console.log('inserted second events');
                    
                }
            });

        }
        else
        {
            console.log('Found calendarevents, it has records in it');
        }        
    }
    else
    {
        console.log('Cannot find calendarevents, ERROR: ',error);
    }

})


router.get('/archiveEvents', (req, res) => {
    console.log('SERVER: /Events/archiveEvents called');
    calendarevents.find({}, 'year Events -_id', function (err, events) {
        if(err)
        {
            res.status(200).json({
                message: 'FROM SERVER: /Events/archiveEvents request received: '.concat(err),
                Events: []
            });     
        }
        else
        {
            // console.log('FROM SERVER: /Events/archiveEvents request result: ', events.length);

        //     FROM SERVER: /Events/archiveEvents request result:  { year: '2017',
        //     Events:
        //      [ { month: '11', MonthlyEvent: [Array] },
        //        { month: '12', MonthlyEvent: [Array] } ] }
        //   FROM SERVER: /Events/archiveEvents request result:  { year: '2018',
        //     Events: [ { month: '1', MonthlyEvent: [Array] } ] }

            var returnedArchiveEvents = [];//November 2014 (2)
            for(var i = 0; i < events.length; i++)
            {   
                // console.log('FROM SERVER: /Events/archiveEvents request result: year: ', events[i]['year'],', events length: ', events[i]['Events'].length);
                console.log('FROM SERVER: /Events/archiveEvents request result: year: ', events[i]['year'],', events in that year: ');
                
                // console.log(events[i]['Events']);
                
                for(var a = 0; a < events[i]['Events'].length; a++)
                {
                    console.log('Month: ',events[i]['Events'][a]['month'],', event number in that month: ', events[i]['Events'][a]['MonthlyEvent'].length);
                    var NumOfMonthlyEvents = events[i]['Events'][a]['month'].toString().
                    concat('/').
                    concat(events[i]['year'].toString()).
                    concat(' (').
                    concat(events[i]['Events'][a]['MonthlyEvent'].length.toString()).
                    concat(')');

                    returnedArchiveEvents.push(NumOfMonthlyEvents);
                }
            }

            res.status(200).json({
                message: 'FROM SERVER: /Events/archiveEvents request received: '.concat('SUCCEED'),
                Events: returnedArchiveEvents
            });                 
        }
    
    })        
    // res.status(200).json({
    //     message: 'FROM SERVER: /Events/archiveEvents request received: '.concat('SUCCEED'),

    // });     

})


router.get('/calendarEvents', (req, res) => {

    console.log('SERVER: /Events/calendarEvents called, params: year: ', req.query.year,', month: ', req.query.month);

    var query = {};
    query['year'] = req.query.year;

    calendarevents.findOne(query, 'Events -_id', function (err, events) {
        if(err)
        {
                res.status(200).json({
                    message: 'FROM SERVER: calendarEvents request received: '.concat(err),
                    Events: []
                // listOfTitles: Values
                });     
        }
        else
        {
            // console.log('FROM SERVER: calendarEvents request result: ', events['Events']);
            var thismonthEvents = '';
            var thismonthEventsArray = [];
            var eventCHString = '';
            var eventENString = '';
            var eventDATEString = '';
            
            for(var i=0; i< events['Events'].length; i++)
            {
                // console.log('FROM SERVER: calendarEvents request result: ', events['Events'][i]['month']);
                if(events['Events'][i]['month'] == req.query.month)
                {
                    console.log('FROM SERVER: found month that matches the req.month: ', events['Events'][i]['month']
                , ', events: ', events['Events'][i]['MonthlyEvent']);
                    thismonthEvents = events['Events'][i]['MonthlyEvent'].toString();
                    // thismonthEvents = events['Events'][i];
                    for(var a = 0; a<events['Events'][i]['MonthlyEvent'].length; a++)
                    {
                        // console.log(events['Events'][i]['MonthlyEvent'][a]);
                        thismonthEventsArray.push(events['Events'][i]['MonthlyEvent'][a].toString());
                    }
                    // eventCHString = events['Events'][i]['MonthlyEvent']['eventCH'];
                    // eventENString = events['Events'][i]['MonthlyEvent']['eventEN'];
                    // eventDATEString = events['Events'][i]['MonthlyEvent']['date'];
                    break;
                }
            }

            res.status(200).json({
                message: 'FROM SERVER: calendarEvents request received: '.concat('SUCCEED'),
                // Events: thismonthEvents,
                Events: thismonthEventsArray
                // CH_Str: eventCHString, 
                // EN_Str: eventENString,
                // DATE_Str: eventDATEString
            // listOfTitles: Values
            });     
        }
        
        
    });        


    // res.status(200).json({
    //         message: 'FROM SERVER: calendarEvents request received: '.concat('year: '.concat(req.query.year).concat(', month: ').concat(req.query.month))
    //             // listOfTitles: Values
    // });     

})    

module.exports = router;