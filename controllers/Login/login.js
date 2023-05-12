import { generateJwtToken } from "../../config/generateJwtToken.js";
import { matchPassword } from "../../config/securePassword.js";
import SuperAdmin from "../../models/SuperAdmin.js";

export const LoginAdmin = async (req, res) => {
  try {
    // extract credentials from request body
    const { email, password } = req.body;

    // find the user in the database by using email
    const user = await SuperAdmin.findOne({ email });

    // if user exists and entered password is correct the give +ve response
    if (user && (await matchPassword(password, user.password))) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        pic: user.pic,
        token: generateJwtToken(user._id),
      });
    } else {
      res.status(404).json({
        error: "Invalid Email or Password",
      });
    }
  } catch (err) {
    res.status(404).json({ error: "Something went wrong" });
  }
};
