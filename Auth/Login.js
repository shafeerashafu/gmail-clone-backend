import express from "express";
import bcrypt from "bcrypt";
import { Auth } from "../Database/models.js";

const loginRouter = express.Router();

// API for verifying the user
loginRouter.post("/login", async (req, res) => {
    const { body } = req; 
    try {
        const existingUser = await Auth.findOne({ email: body.email });
        if (existingUser) {
            const value=bcrypt.compareSync(body.password,existingUser.password);
            if (value) {
                existingUser.isAccountVerified = true;
                await existingUser.save();
                const authenticatedUser = await Auth.findOne(
                    { email: body.email },
                    { _id: 0, __v: 0, password: 0 }
                  );
                  res.send({
                    msg: "User authenticated successfully",
                    Userdata: authenticatedUser,
                    code: 1,
                  });
            }
            else {
                res.status(401).send({ msg: "Invalid Credentials", code: 0 });
            }
            return;
        }
        else {
            res.status(404).send({ msg: "User not found" });
        }
    } 
    catch (err) {
        res.status(500).send({ msg: "Error Occured while logging in" });
      }

})

export default loginRouter;