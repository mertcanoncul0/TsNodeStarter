import { Router } from "express"
import hello from "@/router/hello"

const router = Router()

export default (): Router => {
  hello(router)
  return router
}
