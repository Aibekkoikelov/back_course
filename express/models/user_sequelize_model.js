

// Вариант создания модели через sequelize.define

'use strict';
const {
    Model
} = require('sequelize'); // Подключаем модель из sequelize
module.exports = (sequelize, DataTypes) => { // Экспортируем модель
    class User extends Model { // Инициализируем модель
        static associate(models) { // Создаем метод для связи моделей
            User.hasOne(models.Token, { // Создаем связь один к одному
                foreignKey: 'userId', // Указываем внешний ключ
                onDelete: 'cascade' // Указываем, что при удалении пользователя удалять и токен
            })
            User.belongsTo(models.Role, { // Создаем связь один ко многим
                foreignKey: 'roleId', // Указываем внешний ключ
                onDelete: 'cascade' // Указываем, что при удалении пользователя удалять и роль
            })
        }
    }
    User.init({ // Инициализируем модель
        email:{ // Создаем поле email
            type: DataTypes.STRING, // Указываем тип данных
            allowNull: false, // Указываем, что поле не может быть пустым
        },
        password:{ // Создаем поле password
            type: DataTypes.STRING, // Указываем тип данных
            allowNull: false, // Указываем, что поле не может быть пустым
        },
        roleId:{
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
        sequelize, // Подключаем sequelize
        modelName: 'User', // Указываем имя модели
    });
    return User; // Возвращаем модель
};