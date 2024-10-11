import { Model, DataTypes } from 'sequelize';
import sequelize from '../database.js';
import bcrypt from 'bcrypt'


class User extends Model { };

User.init({
    pseudo: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
            notEmpty: false,
        }
    },
    avatar: {
        type: DataTypes.TEXT,
        defaultValue: '/img/user/default_avatar.webp'
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                args: true,
                msg: "L'email n'est pas valide"
            },
            notEmpty: {
                args: true,
                msg: "La case email ne peut pas être vide"
            }
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

User.beforeCreate(async (user) => {
    const hash = await bcrypt.hash(user.password, 10)
    user.password = hash
})

export default User