import * as express from "express";
import { morphism } from "morphism";
import { CompetencesService } from "../Services/CompetencesService";
import { JwtFunctions } from "../Services/JwtMiddleware";
import { CompetencesMap } from "./DbDtoMaps";

export function CompetencesController() {
    const router = express.Router();
    const competencesFunction = new CompetencesService();

    /**
    * @swagger
    * /getcompetences:
    *    get:
    *      description: This should return competences info
    */
    router.get("/competences", async (req: any, res) => {
        // const userid = req.decoded.userid;
        const userdataid = "5cf4945b38512b2278d09b0b";
        const competencesDb = await competencesFunction.getUserCompetencesAsync(userdataid);
        const competencesDto =  morphism(CompetencesMap, competencesDb);
        res.send(competencesDto);
    });

    return router;
}
