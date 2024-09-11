const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id_user:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING, unique: true},
    password:{type: DataTypes.STRING},
    JWT_token:{type: DataTypes.STRING}
})

const Result = sequelize.define('result', {
    id_result:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    progres:{type: DataTypes.INTEGER},
    id_level: {type: DataTypes.INTEGER},
    id_user: {type: DataTypes.INTEGER}
})

const Level = sequelize.define('level', {
    id_level:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    number:{type: DataTypes.INTEGER},
    language:{type: DataTypes.STRING}
})

const Questions = sequelize.define('questions', {
    id_questions:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title:{type: DataTypes.STRING},
    id_answer:{type: DataTypes.INTEGER},
    id_level:{type: DataTypes.INTEGER}
})

const Answer = sequelize.define('answer', {
    id_answer:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title:{type: DataTypes.STRING},
    corretly:{type: DataTypes.BOOLEAN}
})

User.hasMany(Result);

Level.hasMany(Result);
Level.hasMany(Questions);

Answer.hasMany(Questions);

module.exports = {
    User,
    Result,
    Level,
    Questions,
    Answer
}