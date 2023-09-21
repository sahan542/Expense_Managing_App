const mongoose = require('mongoose');

const transectionSchema = new mongoose.Schema({
    userid:{
        type:String,
        required:[true,'User ID is required'],
    },
    amount:{
        type:String,
        required:[true,'amount is required'],
    },
    type:{
        type:String,
        required:[true,'type is required'],
    },
    category:{
        type:String,
        required:[true,'category is required'],
    },
    reference:{
        type:String,
        required:[true,'Reference is required'],
    },
    description:{
        type:String,
        required:[true,'Description is required'],
    },
    date:{
        type:Date,
        required:[true,'Date is required'],
    },

},{ timestamps: true}
);

const transectionModel = mongoose.model('transections',transectionSchema);
module.exports = transectionModel;