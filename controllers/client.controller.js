const { findAllClientService, searchClientService, findDetailClientService, createClientService, updateClientService, removeClientService, uploadAvatarService } = require('../services/client.service')
const bcrypt = require('bcryptjs')
const { sequelize } = require('../models')

const findAllClient = async (req, res) => {
    try {
        const data = await findAllClientService()
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error)
    }
};

const searchClient = async (req, res) => {
    try {
        const data = await searchClientService(req.query.account)
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error)
    }
}

const findDetailClient = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await findDetailClientService(id)
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error)
    }
};

const createClient = async (req, res) => {
    try {
        const { account, userName, email, phone, passWord, userTypeCode } = req.body;
        //1 tạo ra chuỗi random
        const salt = bcrypt.genSaltSync(10)
        //2 mã hoá password 
        const hashpassWord = bcrypt.hashSync(passWord, salt)
        //3 post data
        const newClient = await createClientService({
            account, userName, email, phone, passWord: hashpassWord, userTypeCode
        })
        res.status(200).send(newClient)
    } catch (error) {
        res.status(500).send(error)
    }
};

const updateClient = async (req, res) => {
    try {
        const { account, userName, email, phone, passWord, userTypeCode } = req.body;
        const { id } = req.params;
        // create random password
        const salt = bcrypt.genSaltSync(10);
        // encryption
        const hassPassword = bcrypt.hashSync(passWord, salt)
        // post password
        const clientUpdate = await updateClientService(id, {
            account, userName, email, phone, passWord: hassPassword, userTypeCode
        })
        res.status(200).send(clientUpdate)
    } catch (error) {
        res.status(500).send(error)
    }
};

const removeClient = async (req, res) => {
    try {
        const data = await removeClientService(req.params.id)
        if (data) {
            res.status(200).send(`Delete Account Success Account : '${data.account}'`)
        } else {
            res.status(500).send("Account does not exist");
        }
    } catch (error) {
        res.status(500).send(error)
    }
};

const uploadAvatar = async (req, res) => {
    const { user } = req
    const url = `http://localhost:7000/${req.file.path}`
    const data = { url, user }
    try {
        const userUpload = await uploadAvatarService(data)
        res.status(200).send(userUpload)
    } catch (error) {
        res.status(500).send(error)
    }
}

const uploadAllbums = async (req, res) => {
    await res.status(200).send(req.file)
}

const findMovieByClient = async (req, res) => {
    try {
        const query = `
        select Movies.nameMovie as movieName , Movies.trailler as Trailler, Clients.account as ClientName  from Movies
        inner join Tickets
        on Tickets.movieId = Movies.id
        inner join Clients
        on Tickets.clientId = Clients.id
        where Clients.account like "%anh%"
        `;
        const [result, metaData] = await sequelize.query(query);
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    findAllClient,
    searchClient,
    findDetailClient,
    createClient,
    updateClient,
    removeClient,
    uploadAvatar,
    uploadAllbums,
    findMovieByClient
};
