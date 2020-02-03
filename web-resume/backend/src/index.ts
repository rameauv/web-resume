// const express = require( "express" );
import * as bodyParser from "body-parser";
import * as cors from "cors";
import express from "express";
import config from "./config/config";
import { myContainer } from "./config/inversify.config";

const app = express();
const port = config.port; // default port to listen

app.use(cors.default());
// define a route handler for the default home page
app.get("/", (req: any, res: any) => {
    res.send("Hello world!");
});

// register controllers
import { AccountController } from "./controlers/AccountController";
import { SearchController } from "./controlers/SearchController";
import { UserDatasController } from "./controlers/UserController";
import { IAsyncCheckTokenMiddleware } from "./middleware/IAsyncCheckTokenMiddleware";
import { IAccountService } from "./services/IAccountService";
import { ISearchService } from "./services/ISearchService";
import { IUserService } from "./services/IUserService";

app.use(bodyParser.urlencoded({ // Middleware
    extended: true
}));
app.use(bodyParser.json());
app.use("/api", AccountController(myContainer.get<IAccountService>("IAccountService")));
app.use("/api", UserDatasController(
    myContainer.get<IUserService>("IUserService"),
    myContainer.get<IAsyncCheckTokenMiddleware>("IAsyncCheckTokenMiddleware")));
app.use("/api", SearchController(myContainer.get<ISearchService>("ISearchService")));
// start the Express server
app.listen(port, "0.0.0.0", () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});

export default app;
