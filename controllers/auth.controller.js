const { Clients } = require('../models')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const clientSignIn = async (req, res) => {
    const { email, passWord } = req.body;
    try {
        // check email có tồn tại
        const checkEmail = await Clients.findOne({
            where: {
                email
            }
        })
        if (checkEmail) {
            // check passWord
            const checkPassWord = bcrypt.compareSync(passWord, checkEmail.passWord)
            if (checkPassWord) {
                // payload
                const payload = {
                    id: checkEmail.id,
                    email: checkEmail.email,
                    userTypeCode: checkEmail.userTypeCode,
                }
                // secretkey 
                const secretKey = "1234@Abcd"
                // create token
                const toKen = jwt.sign(payload, secretKey, { expiresIn: 360 })

                res.status(200).send({
                    message: "LOGIN SUCCESSFULLY",
                    toKen
                })
            } else {
                res.status(400).send({
                    message: "PASSWORD IS WRONG"
                })
            }
        } else {
            res.status(400).send({
                message: "EMAIL DOES NOT EXIST"
            })
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    clientSignIn
}