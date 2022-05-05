const mongoose = require('mongoose');
const opts = {timestamps:true, toJSON: { virtuals: true }}
const SliderSchema = mongoose.Schema({
    image:{
        required: true,
        type: String,
        default: false,
    },
    title:{
        required: true,
        type: String,
        default: false,
    },
    subtitle:{
        required: true,
        type: String,
        default: false,
    },
}, opts);

SliderSchema.virtual('id').get(function(){
    return this._id.toHexString();
});


exports.Slider = mongoose.model('Slider', SliderSchema);
exports.SliderSchema = SliderSchema;