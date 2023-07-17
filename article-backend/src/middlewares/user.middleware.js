import Jwt from "jsonwebtoken";
import UserModel from "../models/user.model.js";

var checkUserAuth = async (req, res, next) => {
  const token = req.headers["authorization"].replace("Bearer ", "");

  if (!token) {
    res.send({ success: false, message: "Token not found" });
  }
  try {
    const decode = Jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await UserModel.findById(decode.userId).select("-password");
    if (!user) {
      res.send({ success: false, message: "Unauthorized User" });
    }
    req.user = user;
    next();
  } catch (err) {
    res.send({ success: false, message: "Unauthorized User" });
  }
};

export default checkUserAuth;
