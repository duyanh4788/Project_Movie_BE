const { Clients } = require('../models')


const graphqlResolvers = {
    async client({ id }) {
        try {
            const clientDetail = await Clients.findByPk(id);
            return clientDetail
        } catch (error) {
            console.log(error);
            throw new Error(error)
        }
    },
    async clients() {
        try {
            const clientList = await Clients.findAll()
            return clientList
        } catch (error) {
            console.log(error);
            throw new Error(error)
        }
    },
    async createClient({ inputClient }) {
        try {
            const newClient = await Clients.create(inputClient)
            return newClient
        } catch (error) {
            console.log(error);
            throw new Error(error)
        }
    }
};

module.exports = {
    graphqlResolvers
}