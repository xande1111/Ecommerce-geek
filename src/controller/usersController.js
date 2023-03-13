const db = require("../database");
const Users = require("../models/users");

const usersController = {

    async createUser(req, res) {
    try {
    const newSenha = bcrypt.hashSync(senha, 10);
    const newUser = await Users.create({
    user_name: req.body.user_name,
    user_email: req.body.user_email,
    user_password: newSenha,
    user_type: req.body.user_type,
    });
    res.status(201).json(newUser);
    } catch (err) {
    res.status(500).json({ message: err.message });
    }
    },

    async createUserAdmin(req, res) {
        try {
        const newSenha = bcrypt.hashSync(senha, 10);
        const newUser = await Users.create({
        user_name: req.body.user_name,
        user_email: req.body.user_email,
        user_password: newSenha,
        user_type: req.body.user_type,
        });
        res.status(201).json(newUser);
        } catch (err) {
        res.status(500).json({ message: err.message });
        }
        },


    async getUsers(req, res) {
    try {
    const users = await Users.findAll();
    res.status(200).json(users);
    } catch (err) {
    res.status(500).json({ message: err.message });
    }
    },


    async getUserById(req, res) {
    try {
    const user = await Users.findByPk(req.params.id);
    if (user === null) {
    res.status(404).json({ message: "Usuário não encontrado" });
    } else {
    res.status(200).json(user);
    }
    } catch (err) {
    res.status(500).json({ message: err.message });
    }
    },


    async updateUser(req, res) {
    try {
    const user = await Users.findByPk(req.params.id);
    if (user === null) {
    res.status(404).json({ message: "Usuário não encontrado" });
    } else {
    const updatedUser = await user.update({
    user_name: req.body.user_name,
    user_email: req.body.user_email,
    user_password: req.body.user_password,
    user_type: req.body.user_type,
    });
    res.status(200).json(updatedUser);
    }
    } catch (err) {
    res.status(500).json({ message: err.message });
    }
    },


    async deleteUser(req, res){
    try {
    const user = await Users.findByPk(req.params.id);
    if (user === null) {
    res.status(404).json({ message: "Usuário não encontrado" });
    } else {
    await user.destroy();
    res.status(204).json();
    }
    } catch (err) {
    res.status(500).json({ message: err.message });
    }
    }
}

module.exports = usersController;
