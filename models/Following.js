const Sequelize = require('sequelize');
const config = require(__dirname+'/../config/config.json')['development'];
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
    )
const User = require('./User')(sequelize, Sequelize);
const OtherUser = require('./OtherUser')(sequelize, Sequelize);

const FollowingModel = (sequelize,DataTypes)=>{
    const Following = sequelize.define('Following',{
        f_no:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true
        },
        u_id: {
            type: DataTypes.STRING(30),
            reference: {
				model: User,
				key: 'u_id',
			},
        },
		following : {
            type: DataTypes.STRING(30),
            reference: {
				model: OtherUser,
				key: 'u_id',
			}
		}
    },{
        freezeTableName:true
    });
    return Following;
}

module.exports = FollowingModel;