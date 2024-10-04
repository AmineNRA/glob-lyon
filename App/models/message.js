import { Model, DataTypes } from 'sequelize';
import sequelize from '../database.js';

class Message extends Model { };

Message.init({
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
            isEmail: true,
        }
    },
    subject: {
        type: DataTypes.ENUM('Informations générales', 'Proposition d’article', 'Problème technique', 'Partenariats et Publicité', 'Demande de collaboration', "Feedback sur le site"),
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
}, {
    sequelize,
    modelName: 'Message',
    tableName: 'message',
})

export default Message;