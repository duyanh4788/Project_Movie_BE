const { Op } = require('sequelize');
const { Clients } = require('../models')

// get
const findAllClientService = async () => {
    const listClient = await Clients.findAll();
    if (listClient) {
        return listClient
    } else {
        return false
    }
}
// get search
const searchClientService = async (account) => {
    let clientBySearch
    if (account) {
        clientBySearch = await Clients.findAll({
            where: {
                account: {
                    [Op.like]: `%${account}%`
                }
            }
        });
        return clientBySearch
    } else {
        clientBySearch = await Clients.findAll()
        return clientBySearch
    }
}
// get by code
const findDetailClientService = async (id) => {
    const clientByAccount = await Clients.findByPk(id)
    if (clientByAccount) {
        return clientByAccount
    } else {
        return false
    }
}
// post
const createClientService = async (data) => {
    const newClient = await Clients.create(data)
    if (newClient) {
        return newClient
    } else {
        return false
    }

}

// put
const updateClientService = async (id, data) => {
    await Clients.update(data, {
        where: {
            id,
        }
    })
    const updateClient = await findDetailClientService(id)
    if (updateClient) {
        return updateClient
    } else {
        return false
    }

}
// delete
const removeClientService = async (id) => {
    const clientRemove = await findDetailClientService(id)
    if (clientRemove) {
        await Clients.destroy({
            where: {
                id
            }
        })
        return clientRemove
    } else {
        return false
    }
}

// upload
const uploadAvatarService = async (data) => {
    const { url, user } = data
    const userUpload = await Clients.findByPk(user.id)
    if (userUpload) {
        userUpload.avatar = url
        await userUpload.save()
        return userUpload
    } else {
        return false
    }
}

module.exports = {
    findAllClientService,
    searchClientService,
    findDetailClientService,
    createClientService,
    updateClientService,
    removeClientService,
    uploadAvatarService
}
