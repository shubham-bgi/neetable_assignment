let multer = require('multer');
let mimeExt = require('mime-ext');

module.exports = (req,res)=>{
    let storage =   multer.diskStorage({
        destination: function (req, file, callback) {
          callback(null, './uploads');
        },
        filename: function (req, file, callback) {
          callback(null, file.fieldname + '-' + Date.now() + '.' + mimeExt(file.mimetype)[0]);
        }
      })
    let upload = multer({ storage : storage}).single('file');
    upload(req,res,function(err) {
        if(err) {
            console.log(err);
            return res.send("Error uploading file.");
        }
        res.send("File is uploaded");
    });
}