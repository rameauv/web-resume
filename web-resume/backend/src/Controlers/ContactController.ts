import * as express from "express";
import { morphism } from "morphism";
import { ContactService } from "../Services/ContactService";
import { JwtFunctions } from "../Services/JwtMiddleware";
import { ContactMap } from "./DbDtoMaps";

export function ContactControler() {
    const router = express.Router();
    const contactFunction = new ContactService();
    const jwtFunctions = new JwtFunctions();

    /**
    * @swagger
    * /getContact:
    *    get:
    *      description: This should return contact info
    */
    router.get("/contact", async (req: any, res, next) => {
        // const userid = req.decoded.userid;
        const userdataid = "5cf4945b38512b2278d09b0b";
        const contactDb = await contactFunction.getContactAsync(userdataid);
        const contactDto = morphism(ContactMap, contactDb);
        res.send(contactDto);
    });

    return router;
}
