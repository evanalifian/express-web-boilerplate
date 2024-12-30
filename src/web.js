import { app } from "./app.js"
import { route } from "./routes/users-route.js"

const port = 3000

app.get("/", (req, res) => {
  res.render("index", {
    title: "Express web app."
  })
})

app.use("/users", route)

app.listen(port, () => {
  console.log(`App is running on https://localost:${port}`)
})