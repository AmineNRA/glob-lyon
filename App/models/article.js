import { Model, DataTypes } from 'sequelize';
import sequelize from '../database.js';
import User from './user.js';
import Tag from './tag.js';


class Article extends Model { };

Article.init({
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
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    price: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    date: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    view: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    like: {
        type: DataTypes.INTEGER,
        defaultValue: 0
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
    modelName: 'Article',
    tableName: 'article',
});

Article.belongsTo(User, { foreignKey: 'user_id' });
Article.belongsTo(Tag, { foreignKey: 'tag_id' });

export default Article;