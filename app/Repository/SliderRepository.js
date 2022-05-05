const { Slider } = require("../models/SliderModels")

exports.GetSliders = async (limits) => {
    try{
        return await Slider.find().limit(limits).then((response) => {
            return {
                'result': {slider: response},
                'respondCode': 200,
            }
        }).catch((err) => {
            return {
                'result':'Error',
                'respondCode': 400,
            }
        })
    }catch(err){
        return {
            'result': 'Error',
            'respondCode': 400,
        }
    }
}