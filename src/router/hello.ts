import { Router } from "express"

export default (router: Router) => {
  router.get("/", (req, res) => {
    res.send("<h1>Hello, world!</h1>")
  })
}
