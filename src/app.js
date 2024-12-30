import express from "express"
import ejs from "ejs"
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);
export const app = express()

app.use(express.static("public"))

app.engine(".html", ejs.__express)
app.set("views", `${__dirname}/views`)
app.set('view engine', 'html')