const testController = (req, res) => {
    res.status(200).send({
        messsage: "Welcome User",
        success: true,
    });
};

module.exports = { testController };