var fs = require('fs');
fs.readFile("lorem.txt", 'utf8', function(err, data) {
    if(err){
        console.log('could not read the lorem file');
        return;
    }
    function brojRec()  //BROJ NA RECENICI
    {
    let str = data;
    let str1 = str.split(".");
    let recenici = str1.length;
    console.log("We have " + recenici + " sentences");
    }

    function brojZborovi(){ //BROJ NA ZBOROVI
        let str = data;
    let str1 = str.split(" ");
    let zborovi = str1.length;
    console.log("We have " + zborovi + " words");
    }

    function brojKarakteri(){ // BROJ NA KARAKTERI
        let str = data;
    let str1 = str.split("");
    let karakteri = str1.length;
    console.log("We have " + karakteri + " characters");
    }

    function lessThen7(){ // Zborovi POMALI od 7
    let count=0;    
    let str = data;
    let str1 = str.split(" ");
    for(let i=0; i<str1.length; i++){
        if(str1[i].length<7){
            count++;
        }
    }
    console.log("We have " + count + " words less then 7 characters");
    }

    function GreaterThen7(){ // Zborovi Pogolemi od 7
        let count=0;    
        let str = data;
        let str1 = str.split(" ");
        for(let i=0; i<str1.length; i++){
            if(str1[i].length>7){
                count++;
            }
        }
        console.log("We have " + count + " words greater then 7 characters");
        }

        function Egual7(){ // Zborovi so golemina 7 chars
            let count=0;    
            let str = data;
            let str1 = str.split(" ");
            for(let i=0; i<str1.length; i++){
                if(str1[i].length==7){
                    count++;
                }
            }
            console.log("We have " + count + " words equal to 7 chars");
            }
    
        function MostUsedWord(){   //Most common word in the file
              
            let str = data;
            let str1 = str.split(" ");
            count="";
            for(let i=0; i<str1.length; i++){
                for(let j=0; j<str1.length; j++ ){
                    if(str1[i]==str1[j]){
                        count=str1[i][j];
                        break;
                    }
                }
            }
            console.log("We have the word " + count + " is the most used in the txt file.");
            }
        

    brojRec();
    brojZborovi();
    brojKarakteri();
    lessThen7();
    GreaterThen7();
    Egual7();
    MostUsedWord();
});
const express = require('express');
const bodyParser = require('body-parser');
var app = express(); 
app.use(bodyParser.urlencoded({ extended: false })); 


app.get('/names.txt', function (req, res) 
{
    var names = './names.txt';
    fs.readFile(names, function (err, data)
     {
        
        var fileData = JSON.stringify(data);
        res.send(fileData);
    })
});


app.post('/names/', function (req, res) {

    fs.appendFile('./names.txt', `${req.body.name}`, function (err, data) {
        res.send(req.body.name);
    })
});
app.listen(8080);



