import { Router } from "express"
import { deleteQuestion } from "../controllers/Questions/deleteQuestion.js"
import { getAllQuestion } from "../controllers/Questions/getAllQuestion.js"

import { newQuestion } from "../controllers/Questions/newQuestion.js"
const routers = Router()

routers.post("/questions", newQuestion)

routers.get("/questions", getAllQuestion)

routers.delete("/questions/:id", deleteQuestion)

export default routers
