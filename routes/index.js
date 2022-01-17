var express = require('express');
var router = express.Router();
var multer= require('multer'); // for handling mutipart form data/images/files
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('modal');
});




router.post('/uploadprocessbar', async (req, res) =>{

  const storage = multer.diskStorage({
    destination: function(req, res , cb){
      cb(null,'./public/videos/')
    },
    filename: function(req,file, cb){
      cb(null,file.originalname);
    }
  })
  //for handling file size and name, we have to pass another argument i.e. 'storage' in the multer
  // if you want limit the size, pass limit argument to the multer, limit take object
  // 1 * 1024 * 1024= 1MB
  //for handling file extension, pass 'filefillter' argument to the multer
  
  const upload = multer({
    storage:storage,
    // limits:{fileSize : 1 * 1024 * 1024 },
    // fileFilter: function(req, file, cb){
    //   if(file.mimetype=='video/mp4' 
    //   // || file.mimetype == 'image/jpg' 
    //   // || file.mimetype == 'image/jpeg'
    //   ){
    //     cb(null,true)
    //   } else{
    //     const err= new Error()
    //     err.name='Extension Error'
    //     err.message= 'Only video/mp4 files allowed'
    //     return cb(err,false)
    //   }

    // }
  
  }).single('file');  // name og the input file


  upload(req, res, (err) =>{
    console.log(req.file);
    if(err){
      console.log(err);
      return;
    }
    console.log('file uploaded')
  })
  
})


module.exports = router;
