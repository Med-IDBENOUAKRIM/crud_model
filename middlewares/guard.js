require('dotenv').config()

exports.isHasKey = async (req, res, next) => {
    try {
        const api_key = req.headers.authorization;
        if (api_key !== process.env.APIKEY) {
            return res.status(400).json({ error: "You don't have permission !!!" });
        }

        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};
