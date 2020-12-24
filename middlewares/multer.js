const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${req.params.id}-${file.originalName}`);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
