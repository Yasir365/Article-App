import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";

class UserController {
  static userRegistration = async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
      res.send({ success: false, message: "name, email, password and confirm_password required" });
    } else {
      const user = await UserModel.findOne({ email: email });
      if (user) {
        res.send({ success: false, message: "Email already exist" });
      } else {
        if (password !== confirmPassword) {
          res.send({ success: false, message: "Password and ConfirmPassword not matched" });
        } else {
          try {
            const salt = await bcrypt.genSalt(12);
            const hashPassword = await bcrypt.hash(password, salt);
            const doc = new UserModel({
              name: name,
              email: email,
              password: hashPassword,
            });
            await doc.save();
            const savedUser = await UserModel.findOne({ email: email });

            //generate JWT token
            const token = Jwt.sign({ userId: savedUser._id }, process.env.JWT_SECRET_KEY, {
              expiresIn: "1d",
            });

            res.status(201).send({ success: true,message: "register successfully!!",
              data: [
                {
                  user: {
                    name: savedUser.name,
                    email: savedUser.email,
                    createdAt: savedUser.createdAt,
                    updatedAt: savedUser.updatedAt,
                  },
                },
              ],
              token: token,
            });
          } catch (error) {
            res.send({ success: true, message: "Internal server Error" });
          }
        }
      }
    }
  };

  static userLogin = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      res.send({ success: false, message: " email and password required" });
    } else {
      const user = await UserModel.findOne({ email: email });
      if (!user) {
        res.send({ success: false, message: "Invalid email or password" });
      } else {
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          res.send({ success: false, message: "Invalid email or password" });
        } else {
          
          //generate JWT token
          const token = Jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
            expiresIn: "1d",
          });

          res.status(201).send({ success: true, message: "Login successfully!!",
            data: [
              {
                user: {
                  name: user.name,
                  email: user.email,
                  createdAt: user.createdAt,
                  updatedAt: user.updatedAt,
                },
              },
            ],
            token: token,
          });
        }
      }
    }
  };

  static userChangePassword = async (req, res) => {
    const { oldPassword, newPassword, confirmPassword } = req.body;
    if (!confirmPassword || !newPassword || !oldPassword) {
      res.send({ success: false, message: "oldPassword, newPassword and confirmPassword required" });
    } else {
      if (confirmPassword !== newPassword) {
        res.send({success: false,message: "password and confirmPassword not matched" });
      } else {
        const user = await UserModel.findById(req.user._id);
        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) {
          res.send({ success: false, message: "Incorrect Old Password" });
        } else {
          const salt = await bcrypt.genSalt(12);
          const newHashPassword = await bcrypt.hash(newPassword, salt);
          await UserModel.findByIdAndUpdate(req.user._id, {
            $set: { password: newHashPassword },
          });
          res.send({ success: true, message: "password change successfully" });
        }
      }
    }
  };


  static loggedUser = async (req, res) => {
    res.send({ success: true, data: [{ user: req.user }] });
  };
}

export default UserController;
