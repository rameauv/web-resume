import * as  bcrypt from "bcrypt";
import * as express from "express";
import * as jwt from "jsonwebtoken";
import { JwtConfig } from "../config/jwt";
import { LoginDto } from "../Dto/LoginDto";
import { MongoDbHelper } from "../Repositories/MongoDbHelper";

export function AccountController() {
    const router = express.Router();
    const mongoDbHelper = new MongoDbHelper();

    router.post("/login", async (req, res) => {
        const userid = req.body.userid;
        const password = req.body.password;

        if (userid && password) {
            const user = await mongoDbHelper.getUserAsync(userid);
            if (user) {
                console.log(bcrypt.hashSync(user.password, 10));
            }
            if (user && await bcrypt.compare(password, user.password)) {
                const token = jwt.sign({ userid },
                    JwtConfig.secret,
                    {
                        expiresIn: "24h" // expires in 24 hours
                    }
                );
                // return the JWT token for the future API calls
                const loginDto = new LoginDto();
                loginDto.message = "Authentication successful!";
                loginDto.success = true;
                loginDto.token = token;
                loginDto.userDatas = user;
                res.json(loginDto);
            } else {
                res.status(403).json({
                    message: "Incorrect username or password",
                    success: false
                });
            }
        } else {
            res.status(400).json({
                message: "Authentication failed! Please check the request",
                success: false
            });
        }
        return;
    });

    return router;
}
