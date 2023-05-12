import { encryptPassword } from "../../config/securePassword.js";
import Employee from "../../models/Employee.js";
import SubAdmin from "../../models/SubAdmin.js";
import SuperAdmin from "../../models/SuperAdmin.js";
import nodemailer from 'nodemailer'
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
    const { name, email, role, password, type, departmentId, adminId } = req.body;

    // check
    if (!name || !email || !role || !password || !type || !departmentId || !adminId) {
      return res.status(400).send({ error: "Registration unsuccessful. Please provide all required information." });
    }

    // if user already exists on our database then throw an error
    const userExists = await SubAdmin.findOne({ email });
    if (userExists) {
      return res.status(400).send({ error: "User already exists. Please choose a different email." });
    }

    // create a new user
    const subAdmin = new SubAdmin({
      name,
      email,
      role,
      password: await encryptPassword(password),
      type,
      departmentId,
      adminId,
    });

    // save subadmin in the database
    await subAdmin.save();
    console.log(process.env.SMTP_PORT)
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    // send an email with the subadmin's authentication details
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });
    console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbb")
    const mailOptions = {
      from: process.env.MAIL_USER,
      to: email,
      subject: "Your account has been created!",
      html: `
        <html>
          <head>
            <style>
              /* Add any CSS styles here */
              body {
                font-family: Arial, sans-serif;
                font-size: 16px;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f5f5f5;
              }
              .logo {
                text-align: center;
                margin-bottom: 20px;
              }
              .logo img {
                height: 50px;
              }
              .message {
                margin-bottom: 20px;
                padding: 20px;
                background-color: #fff;
              }
              .message h2 {
                font-size: 24px;
                margin-bottom: 10px;
              }
              .message p {
                line-height: 1.5;
                margin-bottom: 10px;
              }
              .credentials {
                margin-bottom: 20px;
                padding: 20px;
                background-color: #fff;
              }
              .credentials h2 {
                font-size: 24px;
                margin-bottom: 10px;
              }
              .credentials ul {
                list-style: none;
                padding-left: 0;
                margin-bottom: 10px;
              }
              .credentials li {
                margin-bottom: 5px;
               }
            </style>
          </head>
          <body>
            <div class="container">
            <div class="message">
              <h2>Hello ${email},</h2>
              <p>Your account has been created with the following credentials:</p>
            </div>
            <div class="credentials">
            <h2>Credentials</h2>
              <ul>
                <li>Username: ${email}</li>
                <li>Password: ${password}</li>
              </ul>
            </div>
            <p>Thank you for joining our team!</p>
            </div>
          </body>
        </html>
      `,
    };

console.log("cccccccccccccccccccccccccc")
    // send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).send({ error: "Email failed to send." });
      } else {
        console.log("Email sent: " + info.response);
        return res.status(200).json({
          _id: subAdmin._id,
          name: subAdmin.name,
          email: subAdmin.email,
          type: subAdmin.type,
          departmentId: subAdmin.departmentId,
          adminId: subAdmin.adminId,
        });
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "An error occurred while registering the subadmin." });
  }
};
4
/**
 * Register Employee
 * **/
export const registerEmployee = async (req, res) => {
  try {
    const { name, email, role, password, type , departmentId , subAdminId , employId } = req.body;

    // check
    if (!name || !email || !role || !password || !type || !departmentId || !subAdminId) {
      res.status(404).send("Registration unsuccessful");
    }

    // if user already exists on our database the throw error
    const userExists = await Employee.findOne({ email });

    if (userExists) {
      res.status(404).send(" User already exists");
    }
    // create a new user
    const admin = new Employee({
      name,
      email,
      role,
      password: await encryptPassword(password),
      type,
      departmentId,
      subAdminId,
      employId
    });

    // save admin in db
    try {
      await admin.save();
      res.status(200).json({
        _id: admin._id,
        name: admin.name,
        email: admin.email,
        type: admin.type,
        departmentId : admin.departmentId,
        subAdminId : admin.subAdminId,
        employId : admin.employId,
      });
    } catch (err) {
      res.status(404).json({ error: err });
    }
  } catch (err) {
    res.status(404).send(err);
  }
};