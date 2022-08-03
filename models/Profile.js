import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/connectdb.js';
import Constants from '../constants/constants.js';

/**
 * @swagger
 * components:
 *  schemas:
 *      Profile:
 *        type: object
 *        properties:
 *         name:
 *          type: string
 *         lastname:
 *          type: string
 *         birthday:
 *          type: date
 *         picture:
 *          type: string
 *         admin:
 *          type: boolean
 *         user_id:
 *          type: integer
 *        required:
 *          - name
 *          - lastname
 *          - birthday
 *          - admin
 *          - user_id
 *        example:
 *          name: Manuel
 *          lastname: Quispe
 *          birthday: 2020-01-01
 *          picture: http://www.example.com/image.png
 *          admin: false
 *          user_id: 1
 */

class Profile extends Model {
 }

 Profile.init({
    name: {
        type: DataTypes.STRING(Constants.ONE_LINE_SIZE),
        allowNull: false,
        notEmpty: true
    },
    lastname: {
        type: DataTypes.STRING(Constants.ONE_LINE_SIZE),
        allowNull: false,
        notEmpty: true
    },
    birthday: {
        type: DataTypes.DATEONLY,
        isDate: true,
        allowNull: false,
        notEmpty: true
    },
    picture: {
        type: DataTypes.STRING(Constants.LINK_SIZE),
        isUrl: true,
        allowNull: true
    },
    admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
        notEmpty: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id',
            onDelete: 'cascade'
        }

    }
}, {
    sequelize,
    modelName: 'Profile',
    timestamps: false
});

export default Profile;