const { users } = require('../models/users');

const usersController = {
    listarUsers: async (req, res) => {
        try {
            const listarUsers = await users.findAll();
            
            res.status(200).json(listarUsers);

        } catch (error) {
            console.log(erro);
        }
    }

}