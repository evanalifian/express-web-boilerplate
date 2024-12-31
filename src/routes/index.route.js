import express from "express"

export const homeRoute = express.Router()

homeRoute.get("/", (req, res) => {
  res.render("index", {
    title: "Express web app."
  })
})