import { Model, DataTypes } from 'sequelize';
import sequelize from '../database.js';
import Article from './article.js';
import User from './user.js';

class Comment extends Model { };

Comment.init({
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    article_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Article,
            key: 'id'
        },
        allowNull: false
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
    modelName: 'Comment',
    tableName: 'comment',
})

Comment.belongsTo(Article, { foreignKey: 'article_id' });
Comment.belongsTo(Tag, { foreignKey: 'tag_id' })

export default Comment;