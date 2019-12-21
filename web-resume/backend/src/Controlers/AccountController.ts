import * as  bcrypt from "bcrypt";
import * as express from "express";
import * as jwt from "jsonwebtoken";
import { IRepository } from "..//Repositories/IRepository";
import config from "../config/config";
import { myContainer } from "../config/inversify.config";
import { LoginDto } from "../Dto/LoginDto";
import { Credentials } from "../Model/Credentials";
import { IAccountService } from "../Services/IAccountService";
import { InvalidCredentialsError } from "../Services/InvalidCredentialsError";

export function AccountController() {
    const router = express.Router();
    const repository = myContainer.get<IRepository>("IRepository");
    const accountService = myContainer.get<IAccountService>("IAccountService");

    router.post("/login", async (req, res) => {
        const userid = req.body.userid;
        const password = req.body.password;
        const secret = config.get("jwtSecret");

        if (userid && password) {
            try {
                const loginRes = await accountService.AsyncLogin(new Credentials(userid, password));
                const loginDto = new LoginDto();
                loginDto.message = "Authentication successful!";
                loginDto.success = true;
                loginDto.token = loginRes.token;
                loginDto.userDatas = loginRes.userDatas;
                res.json(loginDto);
            } catch (e) {
                if (e instanceof InvalidCredentialsError) {
                    res.status(403).json({
                        message: "Incorrect username or password",
                        success: false
                    });
                } else {
                    throw e;
                }
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
