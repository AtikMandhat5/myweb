var express = require('express')
var bodyParser =require('body-parser')


    app = express();
    app.use(bodyParser.urlencoded({extended:false}))
  
    
    app.get('/', (req,res)=>{
        res.sendFile('index.html',{root:__dirname})
    })

    app.listen((process.env.PORT||3000),()=>{
        console.log('server started')
    })
