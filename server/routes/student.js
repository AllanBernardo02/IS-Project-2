import express from "express";

const router = express.Router()

import { signin, signup } from "../controllers/student.js";

router.post("/signinStudent", signin)
router.post("/signupStudent", signup)

export default router