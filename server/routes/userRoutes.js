import {
    authUser,
    getUserProfile,
    registerUser,
    readUsers,
    deleteUserr
  } from "../controller/userController.js";
  import { protect } from "../middleware/authMiddleware.js";
  import express from "express";
  const router = express.Router();
  
  router.route("/").post(registerUser);
  router.route("/").get( readUsers);
  router.post("/login", authUser);
  router.route("/profile").get(protect, getUserProfile);
  router.delete('/:id', deleteUserr);
    export default router;
  