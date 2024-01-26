const { hostname } = require('os')
const Sequelize=require('sequelize')

const sequelize=new Sequelize('new_schema2','root','Vivek@#123',{
    dialect: 'mysql',
    host: 'localhost'
})

module.exports=sequelize

