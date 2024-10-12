import { Model, DataTypes } from 'sequelize';
import sequelize from '../database.js';
import User from './user.js';
import Tag from './tag.js';

class Escapade extends Model { };

Escapade.init({
    title: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    image: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    image_inside: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    difficulty: {
        type: DataTypes.ENUM('Facile', 'Moyen', 'Difficile'),
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    distance: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    location: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'Escapade',
    tableName: 'escapade',
})

Escapade.belongsTo(User, { foreignKey: 'user_id' });
Escapade.belongsTo(Tag, { foreignKey: 'tag_id' });

export default Escapade;