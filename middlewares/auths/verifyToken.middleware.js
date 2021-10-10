const jwt = require('jsonwebtoken');

// check token
const authenTicate = (req, res, next) => {
    try {
        const toKen = req.header("toKen");
        const secretKey = "1234@Abcd";
        const deCode = jwt.verify(toKen, secretKey);
        req.user = deCode
        next()
    } catch (error) {
        res.status(401).send({
            message: "YOU ARE NOT SIGN IN"
        })
    }
}

// check permissions
const authorize = (arrayUserType) => (req, res, next) => {
    try {
        const { user } = req
        // res.status(200).send(user)
        if (arrayUserType.includes(user.userTypeCode) && user.id !== parseInt(req.params.id)) {
            next()
        } else {
            res.status(403).send("YOU ARE NOT PERMISSIONS DELETE")
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    authenTicate,
    authorize
}