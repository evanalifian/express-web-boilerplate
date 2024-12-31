import { app } from "./app.js"
import { homeRoute } from "./routes/index.route.js"
import { usersRoute } from "./routes/users-route.js"

const port = 3000

app.use("/", homeRoute)
app.use("/users", usersRoute)

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}/`)
})