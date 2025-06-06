import express from "express"
import { getMessage, getAllUsers } from "../controllers/user.controller.js"

const route = express.Router()


route.get("/message", getMessage) 
route.get("/users", getAllUsers)


export default route