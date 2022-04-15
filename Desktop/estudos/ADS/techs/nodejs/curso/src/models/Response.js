import connection from "../database/index.js"
import { DataTypes } from "sequelize"

const Response = connection.define("Response", {
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  likesCount: {
    type: DataTypes.NUMBER,
    defaultValue: 0,
  },
})

Response.sync({ force: true }).catch(e => console.log(e))

export default Response
