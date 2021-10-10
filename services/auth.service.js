const { Clients } = require('../models')
const bcrypt = require('bcryptjs');

const checkEmailSignInService = async (email) => {
    // check email
    const checkEmail = await Clients.findOne({
        where: {
            email
        }
    })
    // check email
    if (checkEmail) {
        return checkEmail
    } else {
        return false
    }
}

const checkPassWordSignInService = async (dataBody) => {
    const { email, passWord } = dataBody
    const checkEmail = await checkEmailSignInService(email)
    const checkPassWord = bcrypt.compareSync(passWord, checkEmail.passWord);
    if (checkPassWord) {
        return checkPassWord
    } else {
        return false
    }
}

module.exports = {
    checkEmailSignInService,
    checkPassWordSignInService
}