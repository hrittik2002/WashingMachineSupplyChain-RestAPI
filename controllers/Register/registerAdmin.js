import { encryptPassword } from "../../config/securePassword.js";
import SubAdmin from "../../models/SubAdmin.js";
import SuperAdmin from "../../models/SuperAdmin.js";

/**
 * Register Admin
 * **/
export const registerAdmin = async (req, res) => {
  try {
    const { name, email, role, password, type } = req.body;

    // check
    if (!name || !email || !role || !password || !type) {
      res.status(404).send("Registration unsuccessful");
    }

    // if user already exists on our database the throw error
    const userExists = await SuperAdmin.findOne({ email });

    if (userExists) {
      res.status(404).send(" User already exists");
    }
    // create a new user
    const admin = new SuperAdmin({
      name,
      email,
      role,
      password: await encryptPassword(password),
      type,
    });

    // save admin in db
    try {
      await admin.save();
      res.status(200).json({
        _id: admin._id,
        name: admin.name,
        email: admin.email,
        password: admin.password,
        type: admin.type,
      });
    } catch (err) {
      res.status(404).json({ error: err });
    }
  } catch (err) {
    res.status(404).send(err);
  }
};
/**
 * Register SubAdmin
 * **/
export const registerSubAdmin = async (req, res) => {
    try {
      const { name, email, role, password, type , departmentId , adminId } = req.body;
  
      // check
      if (!name || !email || !role || !password || !type || !departmentId || !adminId) {
        res.status(404).send("Registration unsuccessful");
      }
  
      // if user already exists on our database the throw error
      const userExists = await SubAdmin.findOne({ email });
  
      if (userExists) {
        res.status(404).send(" User already exists");
      }
      // create a new user
      const admin = new SubAdmin({
        name,
        email,
        role,
        password: await encryptPassword(password),
        type,
        departmentId,
        adminId,
      });
  
      // save admin in db
      try {
        await admin.save();
        res.status(200).json({
          _id: admin._id,
          name: admin.name,
          email: admin.email,
          password: admin.password,
          type: admin.type,
          departmentId : admin.departmentId,
          adminId : admin.adminId,
        });
      } catch (err) {
        res.status(404).json({ error: err });
      }
    } catch (err) {
      res.status(404).send(err);
    }
  };
