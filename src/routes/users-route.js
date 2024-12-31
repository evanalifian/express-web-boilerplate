import express from "express"
import { GET } from "../controllers/users-controller.js"

export const usersRoute = express.Router()

usersRoute.get("/", GET)