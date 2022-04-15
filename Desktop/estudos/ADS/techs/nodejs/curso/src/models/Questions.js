import connection from "../database/index.js"
import { DataTypes } from "sequelize"

const Questions = connection.define("Questions", {
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  done: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
})

Questions.sync({ force: false })

export default Questions
