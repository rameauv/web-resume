import * as express from "express";
import { morphism } from "morphism";
import { myContainer } from "../config/inversify.config";
import { IJwtService } from "../Services/IJwtService";
import { IUserService } from "../Services/IUserService";
import { AsyncCheckToken } from "../middleware/JwtMiddleware";
import { UserDatasMap } from "./DbDtoMaps";

export function UserDatasController() {
    const router = express.Router();
    const userService = myContainer.get<IUserService>("IUserService");
    const jwtService = myContainer.get<IJwtService>("IJwtService");
    const checkToken = AsyncCheckToken(jwtService);

    router.get("/userDatas", async (req: any, res) => {
        const userid = req.query.userid;
        res.setHeader("Content-Type", "application/json");
        // const userid = "username";
        const userDatas = await userService.getUserAsync(userid);
        if (!userDatas) {
            res.status(400).json({
                message: "bad userid",
                success: false
            });
            return;
        }
        const userDatasDto = morphism(UserDatasMap, userDatas);
        const json = JSON.stringify(userDatasDto);
        res.send(json);
    });

    router.get("/myUserDatas", checkToken, async (req: any, res) => {
        const userid = req.decoded.userid;
        res.setHeader("Content-Type", "application/json");
        // const userid = "username";
        const userDatas = await userService.getUserAsync(userid);
        const userDatasDto = morphism(UserDatasMap, userDatas);
        const json = JSON.stringify(userDatasDto);
        res.send(json);
    });

    return router;
}
