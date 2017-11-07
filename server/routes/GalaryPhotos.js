var mongoose = require('mongoose')

const express = require('express');

const router = new express.Router();

const galaryphotos = mongoose.model('GalaryPhotos');

var conn = mongoose.connection;

galaryphotos.find().count(function(err, count){

    if(!err)
    {
        if(count == 0)
        {
            console.log('Found galaryphotos, no records in it, adding some new default records');
            var GalaryPhoto1 = {
                dateTaken: new Date('05 November 2017').toISOString(), 
                URL: 'https://s3-us-west-2.amazonaws.com/fccci/GalaryPhotos/0.jpg'
            };          
            var GalaryPhoto2 = {
                dateTaken: new Date('06 November 2017').toISOString(), 
                URL: 'https://s3-us-west-2.amazonaws.com/fccci/GalaryPhotos/1.jpg'
            };           
            var GalaryPhoto3 = {
                dateTaken: new Date('07 November 2017').toISOString(), 
                URL: 'https://s3-us-west-2.amazonaws.com/fccci/GalaryPhotos/2.jpg'
            };           
            var GalaryPhoto4 = {
                dateTaken: new Date('08 November 2017').toISOString(), 
                URL: 'https://s3-us-west-2.amazonaws.com/fccci/GalaryPhotos/3.jpg'
            };         
            
            conn.collection('galaryphotos').insert(GalaryPhoto1, function(err, records){
                if(err)
                {
                   console.log('error insert first galaryphoto');
                }
                else
                {
                    console.log('inserted first galaryphoto');
                }
            })                

            conn.collection('galaryphotos').insert(GalaryPhoto2, function(err, records){
                if(err)
                {
                   console.log('error insert first galaryphoto');
                }
                else
                {
                    console.log('inserted first galaryphoto');
                }
            })     
            
            conn.collection('galaryphotos').insert(GalaryPhoto3, function(err, records){
                if(err)
                {
                   console.log('error insert first galaryphoto');
                }
                else
                {
                    console.log('inserted first galaryphoto');
                }
            })      
            
            conn.collection('galaryphotos').insert(GalaryPhoto4, function(err, records){
                if(err)
                {
                   console.log('error insert first galaryphoto');
                }
                else
                {
                    console.log('inserted first galaryphoto');
                }
            })                      
        }
        else
        {
            console.log('Found galaryphotos, it has records in it');
            
        }        
    }
    else
    {
        console.log('Cannot find galaryphotos, ERROR: ',error);
        
    }    

});

router.get('/getGalaryPhotos', (req, res) => {

    console.log('SERVER: /GalaryPhotos/getGalaryPhotos called');
    galaryphotos.find({}, 'URL -_id', function (err, events) {
        res.status(200).json({
            message: events.length,
            URLS: events
// listOfTitles: Values
        });     
    
    })        

    // res.status(200).json({
    //     message: 'FROM SERVER: getGalaryPhotos called'
    // // listOfTitles: Values
    // });     

});    

module.exports = router;