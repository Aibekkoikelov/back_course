'use strict';
// файл для подключения к базе данных
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development'; // получаем переменную окружения NODE_ENV, если она не задана, то по умолчанию будет development
const config = require(__dirname + '/../config/config.json')[env]; // получаем конфигурацию из файла config.json
const db = {};

let sequelize;
if (config.use_env_variable) {  // если есть переменная окружения, то используем ее
    sequelize = new Sequelize(process.env[config.use_env_variable], config);  // создаем новый экземпляр sequelize с помощью переменной окружения и конфигурации
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config); // создаем новый экземпляр sequelize с помощью конфигурации
}

fs // считываем все файлы из папки models
    .readdirSync(__dirname) // считываем все файлы из папки models
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes); // подключаем каждый файл модели
        db[model.name] = model; // добавляем модель в объект db
    });

Object.keys(db).forEach(modelName => { // проходим по всем моделям
    if (db[modelName].associate) { // если есть метод associate, то вызываем его
        db[modelName].associate(db); // передаем в метод все модели
    }
});

db.sequelize = sequelize; // добавляем в объект db экземпляр sequelize
db.Sequelize = Sequelize; // добавляем в объект db конструктор sequelize

module.exports = db; // экспортируем объект db