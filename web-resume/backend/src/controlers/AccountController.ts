import * as express from "express";
import { LoginDto } from "../dto/LoginDto";
import { Credentials } from "../model/Credentials";
import { IAccountService } from "../services/IAccountService";
import { InvalidCredentialsError } from "../services/InvalidCredentialsError";

export function AccountController(accountService: IAccountService) {
    const router = express.Router();

    router.post("/login", async (req, res) => {
        const userid = req.body.userid;
        const password = req.body.password;

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
