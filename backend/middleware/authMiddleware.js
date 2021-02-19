import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";

/* 
  Protects a route by checking if the incoming request header 
  contains a valid jwt token
*/
const protect = asyncHandler(async (req, res, next) => {
  let authorizationHeader = req.headers.authorization;
  let jwtToken;

  if (authorizationHeader && authorizationHeader.startsWith("Bearer")) {
    try {
      jwtToken = authorizationHeader.split(" ")[1]; // extracts the token from header
      const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET);
      const { id } = decoded;
      req.user = await await User.findById(id).select("-password"); // exclude password
      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not Authorized, token failed!");
    }
  }

  if (!jwtToken) {
    res.status(401);
    throw new Error("Not Authorized, no token!");
  }
});

const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not Authorized as an admin!");
  }
};

export { protect, isAdmin };
