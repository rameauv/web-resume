import * as express from "express";
import { morphism } from "morphism";
import { JwtFunctions } from "../Services/JwtMiddleware";
import { UserDatasService } from "../Services/UserDatasService";
import { UserDatasMap } from "./DbDtoMaps";

export function UserDatasController() {
    const router = express.Router();
    const userDatasService = new UserDatasService();
    const jwtFunctions = new JwtFunctions();

    router.get("/userDatas", async (req: any, res) => {
        const userid = req.query.userid;
        res.setHeader("Content-Type", "application/json");
        // const userid = "username";
        const userDatas = await userDatasService.getUserDatasAsync(userid);
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

    router.get("/myUserDatas", jwtFunctions.checkToken, async (req: any, res) => {
        const userid = req.decoded.userid;
        res.setHeader("Content-Type", "application/json");
        // const userid = "username";
        const userDatas = await userDatasService.getUserDatasAsync(userid);
        const userDatasDto = morphism(UserDatasMap, userDatas);
        const json = JSON.stringify(userDatasDto);
        res.send(json);
    });

    return router;
}
