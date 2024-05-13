import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-4le5wwr-shard-00-00.cujz5de.mongodb.net:27017,ac-4le5wwr-shard-00-01.cujz5de.mongodb.net:27017,ac-4le5wwr-shard-00-02.cujz5de.mongodb.net:27017/?ssl=true&replicaSet=atlas-m1zbbp-shard-0&authSource=admin&retryWrites=true&w=majority&appName=blog`;
    try{
     await mongoose.connect(URL, {useNewUrlParser: true});
     console.log(`database connected successfully`);
    } catch(error){
    console.log(`error while connecting with database` ,error.response.data);
    }
}

export default Connection;