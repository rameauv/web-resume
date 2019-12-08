// const express = require( "express" );
import * as bodyParser from "body-parser";
import * as cors from "cors";
import express from "express";
const fs = require("fs");

const app = express();
const port = 8080; // default port to listen

app.use(cors.default());
// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

// register controllers
import { AccountController } from "./Controlers/AccountController";
import { CompetencesController } from "./Controlers/CompetencsController";
import { ContactControler } from "./Controlers/ContactController";
import { UserDatasController } from "./Controlers/UserDatasController";
import { WorkingExperiencesController } from "./Controlers/WorkingExperiencesController";
app.use(bodyParser.urlencoded({ // Middleware
    extended: true
  }));
app.use(bodyParser.json());
app.use("/api", ContactControler());
app.use("/api", WorkingExperiencesController());
app.use("/api", AccountController());
app.use("/api", CompetencesController());
app.use("/api", UserDatasController());

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );