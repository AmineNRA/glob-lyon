import { Model, DataTypes } from 'sequelize';
import sequelize from '../database.js';

class Caroussel extends Model { };

Caroussel.init({
    image: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    image_order: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    author: {
        type: DataTypes.TEXT,
    }
}, {
    sequelize,
    modelName: 'Carrousel',
    tableName: 'carroussel',
})

export default Caroussel;