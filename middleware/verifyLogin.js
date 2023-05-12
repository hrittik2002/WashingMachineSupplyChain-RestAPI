import jwt from 'jsonwebtoken'
import SuperAdmin from '../models/SuperAdmin.js';

// verify user with jwt token when user is sending request
export const verifyToken = async (req, res, next) => {
  // extracting the header from the request
  const authHeader = req.headers.authorization;

  if (authHeader) {
    // extracting the jwt token from the header
    const token = authHeader.split(" ")[1];
    console.log(token)
    // verifying the jwt token
    try {
      const user = jwt.verify(token, process.env.JWT_SECRET);
      req.user = user;
      next();
    } catch (err) {
      res.status(401).json("Token is invalid");
    }
  } else {
    // in case there is no header
    res.status(401).json("You are not authenticated");
  }
};

export const verifyAdmin = async (req, res, next) => {
  verifyToken(req, res, async () => {
    const userId = req.user.id;
    const user = await SuperAdmin.findOne({ _id: userId });
    if (user) {
      next();
    } else {
      res.status(404).send({ error: "Wrong Token" });
    }
  });
};