import express from "express"
import "dotenv/config"
import routersQuestion from "./routers/Question.routers.js"
import routersResponse from "./routers/Response.routers.js"

import cors from "cors"

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(routersQuestion)
app.use(routersResponse)

app.listen(3001, () => console.log("server is running"))
