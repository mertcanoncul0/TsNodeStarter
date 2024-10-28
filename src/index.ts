import express from "express"
import dotenv from "dotenv"
import http from "node:http"
import router from "@/router"

dotenv.config()
const app = express()
const port = process.env.PORT || 3000

app.use(router())

http.createServer(app).listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`)
})
