import express from "express"

export const usersRoute = express.Router()

let users
fetch("https://jsonplaceholder.typicode.com/users")
  .then(values => values.json())
  .then(values => users = values)

usersRoute.get("/", (req, res) => {
  res.render("users/index.html", {
    title: "Users",
    users
  })
})