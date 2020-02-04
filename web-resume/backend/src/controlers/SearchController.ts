import * as express from "express";
import { morphism, StrictSchema } from "morphism";
import { UserDto } from "../dto/UserDto";
import { AsyncMiddleware } from "../middleware/AsyncMiddleware";
import { IAsyncCheckTokenMiddleware } from "../middleware/IAsyncCheckTokenMiddleware";
import { User } from "../model/User";
import { ISearchService } from "../services/ISearchService";
import { UserDatasMap } from "./DbDtoMaps";

export function SearchController(
    searchService: ISearchService) {

    const router = express.Router();
    router.get("/search", async (req: any, res: any) => {
        const { query } = req.query;
        res.setHeader("Content-Type", "application/json");
        const users = await searchService.getAsync(query);
        const usersDto = users.map(user=>  morphism<StrictSchema<UserDto, User>>(UserDatasMap, user));
        const json = JSON.stringify(usersDto);
        res.send(json);
    });
    return router;
}
