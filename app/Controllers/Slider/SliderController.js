const { GetSliders } = require("../../Repository/SliderRepository");

exports.getSlider = async(req, res, next) => {
    let limit = req.query.slides !== undefined ? req.query.slides : 10;
    await GetSliders(limit).then((results) => {
        return res.status(results.respondCode).send(results.result);
    }).catch((error) => {
        errorLogger.error("Create Ticket -" + " " + error.message)
        return res.status(400).send(Message.SERVER_ERROR);
    })
}