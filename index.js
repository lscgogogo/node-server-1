const express = require('express')
const multer = require('multer')
const upload = multer({dest:'yyy/'})
const cors = require('cors')

const app =express()

app.options('/option',cors())
// xxx跟input的name一致

app.get('/',(req,res)=>{
    res.send('hollw nodejs')
})
app.get('/preview/:key',cors(),(req,res)=>{
    res.sendFile(
        `uploads/${req.params.key}`,
        {
            root:__dirname,
            headers:{
                'Content-Type':'image/jpeg',
            }
        }
    ),
    error => {
        console.log(error);
    };
})

app.post('/upload',cors(),upload.single('file'),(req,res)=>{
    res.send('here')
})

var port = process.env.PORT || 3000
app.listen(port)