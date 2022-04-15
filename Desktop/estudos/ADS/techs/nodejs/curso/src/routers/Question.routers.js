import { Router } from "express"
import {
  deleteQuestion,
  getAllQuestion,
  newQuestion,
  getOneQuestion,
} from "../controllers/Questions/index.js"
const routers = Router()

routers.post("/question", newQuestion)

routers.get("/question", getAllQuestion)

routers.get("/question/:id", getOneQuestion)

routers.delete("/question/:id", deleteQuestion)

export default routers
