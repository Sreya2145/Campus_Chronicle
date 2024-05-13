

import multer from 'multer';
import {GridFsStorage} from 'multer-gridfs-storage';
import dotenv from 'dotenv';

dotenv.config();

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;

const storage = new GridFsStorage({
    url:`mongodb://${username}:${password}@ac-4le5wwr-shard-00-00.cujz5de.mongodb.net:27017,ac-4le5wwr-shard-00-01.cujz5de.mongodb.net:27017,ac-4le5wwr-shard-00-02.cujz5de.mongodb.net:27017/?ssl=true&replicaSet=atlas-m1zbbp-shard-0&authSource=admin&retryWrites=true&w=majority&appName=blog`,
    options: {useNewUrlParser: true},
    file: (request, file) =>{
        const match =["image/png", "image/jpg"];
        if(match.indexOf(file.mimetype)===-1){
            return `${Date.now()}-blog-${file.originalname}`;
        }
        return{
            bucketName: "photos",
            filename:`${Date.now()}-blog-${file.originalname}`
        }
    }
})

export default multer({storage});