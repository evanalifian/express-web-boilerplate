import express from "express"

export const route = express.Router()

let users
fetch("https://jsonplaceholder.typicode.com/users")
  .then(values => values.json())
  .then(values => users = values)

route.get("/", (req, res) => {
  res.render("users/index.html", {
    title: "Users",
    users
  })
})