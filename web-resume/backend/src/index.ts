// const express = require( "express" );
import * as bodyParser from "body-parser";
import * as cors from "cors";
import express from "express";
import config from "./config/config";

const app = express();
const port = config.get("port"); // default port to listen

app.use(cors.default());
// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

// register controllers
import { AccountController } from "./Controlers/AccountController";
import { UserDatasController } from "./Controlers/UserController";
app.use(bodyParser.urlencoded({ // Middleware
    extended: true
  }));
app.use(bodyParser.json());
app.use("/api", AccountController());
app.use("/api", UserDatasController());

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
