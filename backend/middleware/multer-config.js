const multer = require('multer');

const storage = multer.memoryStorage();


const fileFilter = (req, file, callback) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];

    if (allowedTypes.includes(file.mimetype)) {
        callback(null, true);
    } else {
        callback(null, false);
        callback(new Error('Le fichier n\'est pas valide. Seuls les fichiers JPG, JPEG et PNG sont acceptés.'));
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 }
});

module.exports = upload;
