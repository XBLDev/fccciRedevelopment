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
            console.log('Collection has no record, inserting a default one');
            var firstNews = {titleEng: 'Rain and rain unimpeded, we regret', 
                             titleCh: '风雨的无阻, 我们的无悔',
                             date: new Date().toISOString(),
                             ContentURLCH: "https://url",
                             ContentURLENG: "https://url"};
            conn.collection('latestnews').insert(firstNews, function(err, records){
                // console.log("Record added as "+records[0]._id);
                if(err)
                {
                   console.log('error insert very first news');
                }
                else
                {
                    console.log('inserted very first news');
                    
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


router.get('/news', (req, res) => {

    newsModel.findOne({}, {}, { sort: { 'date' : -1 } }, function(err, post) {
        

        if(err)
        {
            console.log(err);
            res.status(200).json({
                message: "Cannot find news"
            });         
        }
        else{
            console.log( post );
            res.status(200).json({
                message: post.ContentURLCH
            });                
        }    

    });



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