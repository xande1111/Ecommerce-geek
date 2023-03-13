const { users } = require('../models');
const jwt = require('jsonwebtoken');
const secret = require('../configs/secret');
const bcrypt = require('bcryptjs');


const AuthController = {

    async login(req, res){
        const { email, senha } = req.body
        
        const user = await users.findOne({
            where: {
                email,
            },
        });

        if(!user){
            return res.status(400).json('Email não cadastrado');
        }

        if(!bcrypt.compareSync(senha, user.senha)) {
            return res.status(401).json('Senha invalida');
        }

        const token =  jwt.sign(
            {
            id: user.id, 
            email: user.email, 
            nome: user.nome
            },
            secret.key
        );

        return res.json(token);

    },
};

module.exports = AuthController