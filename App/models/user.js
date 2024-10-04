import { Model, DataTypes } from 'sequelize';
import sequelize from '../database.js';


class User extends Model { };

User.init({
    pseudo: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
            notEmpty: true,
        }
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        },
    },
    firstname: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    lastname: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    role: {
        type: DataTypes.ENUM('admin', 'auteur', 'user'),
        defaultValue: 'user',
    }

}, {
    sequelize,
    modelName: 'User',
    tableName: 'user',
})

export default User