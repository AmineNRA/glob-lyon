import { Model, DataTypes } from 'sequelize';
import sequelize from '../database.js';
import User from './user.js';
import Tag from './tag.js';

class Escapade extends Model { };

Escapade.init({
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    difficulty: {
        type: DataTypes.ENUM('facile', 'moyen', 'difficile'),
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    distance: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    location: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    tag_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Tag,
            key: 'id'
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        },
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'Escapade',
    tableName: 'escapade',
})

Escapade.belongsTo(User, { foreignKey: 'user_id' });
Escapade.belongsTo(Tag, { foreignKey: 'tag_id' });

export default Escapade;