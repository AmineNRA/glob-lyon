import { Model, DataTypes } from 'sequelize';
import sequelize from '../database.js';


class Tag extends Model { };

Tag.init({
    label: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    }

}, {
    sequelize,
    modelName: 'Tag',
    tableName: 'tag',
})

export default Tag;