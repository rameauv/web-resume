import * as express from "express";
import { morphism, StrictSchema } from "morphism";
import { UserDto } from "../dto/UserDto";
import { AsyncMiddleware } from "../middleware/AsyncMiddleware";
import { IAsyncCheckTokenMiddleware } from "../middleware/IAsyncCheckTokenMiddleware";
import { User } from "../model/User";
import { IUserService } from "../services/IUserService";
import { UserDatasMap } from "./DbDtoMaps";

export function UserDatasController(
    userService: IUserService,
    asyncCheckTokenMiddleware: IAsyncCheckTokenMiddleware) {

    const router = express.Router();
    const checkToken = asyncCheckTokenMiddleware.build();
    router.get("/userDatas", async (req: any, res: any) => {
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
        const userDatasDto = morphism<StrictSchema<UserDto, User>>(UserDatasMap, userDatas);
        const json = JSON.stringify(userDatasDto);
        res.send(json);
    });

    router.get("/myUserDatas", AsyncMiddleware(checkToken), async (req: any, res: any) => {
        const userid = req.decoded.userid;
        res.setHeader("Content-Type", "application/json");
        // const userid = "username";
        const userDatas = await userService.getUserAsync(userid);
        const userDatasDto = morphism<StrictSchema<UserDto, User>>(UserDatasMap, userDatas);
        const json = JSON.stringify(userDatasDto);
        res.send(json);
    });

    return router;
}
