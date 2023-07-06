const mongoose = require('mongoose');

const dbConnection = async() => {

    try {
        await mongoose.connect(process.env.NODE_2);
        console.log('Base de datos online!!!!');
    } catch (error) {
        console.log(error);
        
    }


}

module.exports = {
    dbConnection
}
