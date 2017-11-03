var mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost/local');

// var Schema = mongoose.Schema;
// var newsSchema = new Schema({
//     // my props
//       newsID  : Number
//     , title   : String
//     , date    : Date

// });

function find (collec, query, callback) {
    mongoose.connection.db.collection(collec, function (err, collection) {
    collection.find(query).toArray(callback);
    });
}


// const News = require('mongoose').model('LatestNews', newsSchema);
// console.log('News created/connected');


const express = require('express');

const router = new express.Router();

const newsModel = mongoose.model('LatestNews');

var conn = mongoose.connection;

// var user = {
//     a: 'abc',
//     _id: new ObjectID()
//   };
  
// conn.collection('aaa').insert(user);

newsModel.find().count(function(err, count){

    if(!err)
    {
        console.log('Find news on start, count: ', count);
        if(count == 0)
        {
            console.log('Collection has no record, inserting 2 default news');
            var firstNews = {titleEng: 'Rain and rain unimpeded, we regret', 
                             titleCh: '风雨的无阻, 我们的无悔',
                             date: new Date().toISOString(),
                             ContentURLCH: "https://s3-us-west-2.amazonaws.com/fccci/LATESTNEWS/Event1/Event01_CH.txt",
                             ContentURLENG: "https://s3-us-west-2.amazonaws.com/fccci/LATESTNEWS/Event1/Event01_ENG.txt"};

            var secondNews = {titleEng: 'Hualian Chinese School 2017 Seeking Tour of Heilongjiang Winter Camp Summary Conference', 
                             titleCh: '华联社中文学校2017年寻根之旅黑龙江冬令营总结大会',
                             date: new Date().toISOString(),
                             ContentURLCH: "https://s3-us-west-2.amazonaws.com/fccci/LATESTNEWS/Event2/Event02_CH.txt",
                             ContentURLENG: "https://s3-us-west-2.amazonaws.com/fccci/LATESTNEWS/Event2/Event02_ENG.txt"};

            conn.collection('latestnews').insert(firstNews, function(err, records){
                // console.log("Record added as "+records[0]._id);
                if(err)
                {
                   console.log('error insert first news');
                }
                else
                {
                    console.log('inserted first news');
                    
                }
            });

            conn.collection('latestnews').insert(secondNews, function(err, records){
                // console.log("Record added as "+records[0]._id);
                if(err)
                {
                   console.log('error insert second news');
                }
                else
                {
                    console.log('inserted second news');
                    
                }
            });            
        }
        else{
            console.log('Collection has record, no need for inserting a default one');
            
        }        
    }
    else
    {
        console.log('Find news on start, cannot find news ');

    }

})    

router.get('/requestNews', (req, res) => {
    console.log('SERVER: requestNews called, params: news: ', req.query.news,', language: ', req.query.language);
    var nameOfTheNews = req.query.news.substring(req.query.news.lastIndexOf("/")+1, req.query.news.length);
    // var nameOfTheNews = req.query.news.substring(req.query.news.lastIndexOf("/")+1, req.query.news.length);
    console.log('SERVER: parsed nameOfTheNews: ', nameOfTheNews);
    var searchField = req.query.language == 'Eng' ? 'titleEng' : 'titleCh';
    //'titleEng -_id' : 'titleCh -_id';
    var searchReturnedField = req.query.language == 'Eng' ? 'ContentURLENG' : 'ContentURLCH';
    console.log('SERVER: searchField: ',searchField,', searchReturnedField: ', searchReturnedField);

    // var name = req.params.name;
    // var value = req.params.value;
    var query = {};
    query[searchField] = nameOfTheNews;

    newsModel.findOne(query, searchReturnedField.concat(' -_id'), function (err, newsURL) {
    // newsModel.findOne({ 'titleEng': nameOfTheNews }, searchReturnedField.concat(' -_id'), function (err, newsURL) {
        
        if(err)
        {
            res.status(200).json({
                message: 'FROM SERVER: request received was: '.concat('ERROR')
                // listOfTitles: Values
            });     
        }
        else
        {
            // console.log('Found news with the same news name in the DB, the URL for file is: ',newsURL.length);
            
            if(!newsURL)
            {
                
                res.status(200).json({
                    message: 'CANNOT FIND A FILE THAT HAS THE SAME NAME'                  
                    // message: 'SERVER: GOT ENTIRE FILE IN A STRING FROM THE FILE: '.concat(newsURL['ContentURLCH'])
                });                     
            }
            else{
                // console.log('Found news with the same news name in the DB, the URL for file is: ',newsURL);
                var http = require('http');
                var https = require('https');            
                var fs = require('fs');
                var str = '';
                // var file = fs.createWriteStream(dest);
                https.get(newsURL[searchReturnedField], function(response) {

                    response.on('data', function (chunk) {
                            str += chunk;
                    });
                    
                    response.on('end', function () {

                            res.status(200).json({
                                message: str                    
                            });                             
                    });

                });
            }
            // res.status(200).json({
            //     message: 'FROM SERVER: the CH URL for file for the current newboard: '.concat(newsURL['ContentURLCH'])
            // });                 
            // console.log('/'+newsURL['ContentURLCH'].substring(newsURL['ContentURLCH'].lastIndexOf('.com/')+5, newsURL['ContentURLCH'].length))
            // var http = require('http');
            // var str = '';
            // var options = {
            //     host: 'someURL',
            //     path: '/'+newsURL['ContentURLCH'].substring(newsURL['ContentURLCH'].lastIndexOf('.com/')+5, newsURL['ContentURLCH'].length)
            // };
            // http.request(options, function(response) {

            //     response.on('data', function (chunk) {
            //             console.log(chunk);
            //             str += chunk;
            //     });
        
            //     response.on('end', function () {
            //             console.log(str);
            //             res.status(200).json({
            //                 message: str

            //             });                             
            //     });
        
            // })

        }
    })

})    




router.get('/news', (req, res) => {
        //query with mongoose
        // var query = newsModel.find({}).select('titleCh -_id');
        console.log('SERVER: news called, params: language: ', req.query.language);

        var searchParameter = req.query.language == 'Eng' ? 'titleEng -_id' : 'titleCh -_id';

        newsModel.find({}, searchParameter, function(err, Values){
            if(err)
            {
                console.log(err);
            }
            else
            {
                console.log(Values);
                res.status(200).json({
                    message: Values.toString(),
                    listOfTitles: Values
                });                     
            }
            // if(err) return next(err);
            // res.send(someValue);
        });



    // newsModel.findOne({}, {}, { sort: { 'date' : -1 } }, function(err, post) {
        

    //     if(err)
    //     {
    //         console.log(err);
    //         res.status(200).json({
    //             message: "Cannot find news"
    //         });         
    //     }
    //     else{
    //         console.log( post );
    //         res.status(200).json({
    //             message: post.ContentURLCH
    //         });                
    //     }    

    // });



    // newsModel.find().count(function(err, count){
    //     if(err)
    //     {
    //         console.log(err);
    //         res.status(200).json({
    //             message: "Cannot find news"
    //         });         
    //     }
    //     else
    //     {
    //         console.log("Number of news: ", count );
    //         res.status(200).json({
    //             message: "Number of news: ".concat(count.toString())
    //         });    
    //     }       
    // });


});

module.exports = router;