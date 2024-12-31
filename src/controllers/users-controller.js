export async function GET(req, res) {
  const users = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((values) => values.json())

  res.render("users/index.html", {
    title: "Users",
    users,
  });
}
