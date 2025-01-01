# Express web boilerplate

---

## Packages

On depedencies includes :

- Express.js
- ejs

On devDepedencies includes :
- Tailwind CSS
- Nodemon
- Concurrently


---


## Getting started

Let's getting starter with this template.

```bash
git clone https://github.com/evanalifian/express-web-boilerplate.git project-name
```

After you clone this repo, you need to install all the depedencies.

```bash
npm install
```

After that, run your project locally.

```bash
npm run dev
```

This script will run two commands concurrently, express app and tailwind using ***concurrently*** package.


---


## Project structures

```
app
|_____public
|_____src
|     |_____controllers
|     |_____routes
|     |_____views
|     |_____app.js
|     |_____web.js
|_____gitignore.json
|_____package-lock.json
|_____package.json
|_____README.md
|_____tailwind.config.js
```