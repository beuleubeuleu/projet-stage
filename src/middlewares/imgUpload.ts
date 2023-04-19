import { Request } from "express";
import multer      from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "client/public/images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const fileFilter = (req: Request, file: any, cb: any) => {
  if ( file.mimetype === "image/jpeg" || file.mimetype === "image/png" ) {
    cb(null, true);
  } else {
    cb(new Error("Unsupported file type"), false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

export default upload
