import { Model, DataTypes } from 'sequelize';
import sequelize from '../database.js';
import Article from './article.js';
import User from './user.js';
import Escapade from './escapade.js';

class Comment extends Model { };

Comment.init({
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: { msg: 'Le commentaire ne peut pas être vide.' },
            len: { args: [1, 500], msg: 'Le commentaire doit contenir entre 1 et 500 caractères.' },
            isSafeContent(value) {
                const prohibitedTags = /<script>|<\/script>/i;
                if (prohibitedTags.test(value)) {
                    throw new Error('Les balises <script> ne sont pas autorisées.');
                }
            },

        }
    },
    article_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Article,
            key: 'id'
        },
        allowNull: true
    },
    escapade_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Escapade,
            key: 'id'
        },
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
    modelName: 'Comment',
    tableName: 'comment',
})

Comment.belongsTo(Article, { foreignKey: 'article_id' });
Comment.belongsTo(User, { foreignKey: 'user_id' })
Comment.belongsTo(Escapade, { foreignKey: 'escapade_id' })

export default Comment;