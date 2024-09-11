const db = require('../models/models');
const user = db.User;
const jwt = require('jsonwebtoken');
const ApiError = require('../errors/ApiError');

const generateJwt = (id, name) =>{
    return jwt.sign(
        {id, name},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController{
    async registration(req, res, next) {
        const {name, password} = req.body
        if (!name || !password) {
            return next(ApiError.badRequest('Некорректный name или password'))
        }
        const candidate = await user.findOne({where: {name}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким именем уже существует'))
        }else{
            const hashPassword = await bcrypt.hash(password, 5)
            const user = await user.create({name, password: hashPassword})
            const token = generateJwt(user.id, user.name)
            return res.json({token})
        }

    }

    async login(req, res, next){
        const{name,password} = req.body;
        const userRequest = await user.findOne({where:{name}})
        if(!userRequest){
            return next(ApiError.internal('Пользователь не найден.'))
        }else if(!password){
            return next(ApiError.internal('Указан не верный пароль.'))
        }
        const token = generateJwt(user.id, user.name);
        return res.json({token});
    }

    async check(req, res, next) {
        const token = generateJwt(user.id, user.name);
        return res.json({token});
    }
}

module.exports = new UserController();