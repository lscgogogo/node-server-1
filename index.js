const express = require('express')
const multer = require('multer')
const app =express()
const upload = multer({dest:'yyy/'})

app.options('/option',cors())
// xxx跟input的name一致

app.get('/preview/:key',cors(),(req,res)=>{
    res.sendfile(
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

app.post('/upload',upload.single('xxx'),(req,res)=>{
    res.send('here')
})

app.listen(3000)