import * as express from "express";
import { morphism } from "morphism";
import { CompetencesService } from "../Services/CompetencesService";
import { JwtFunctions } from "../Services/JwtMiddleware";
import { CompetencesMap } from "./DbDtoMaps";

export function CompetencesController() {
    const _router = express.Router();
    const _competencesService = new CompetencesService();
    const _jwtFunctions = new JwtFunctions();

    _router.get("/competences", async (req: any, res, next) => {
        // const userid = req.decoded.userid;
        const userdataid = "5cf4945b38512b2278d09b0b";
        const competencesDb = await _competencesService.getUserCompetencesAsync(userdataid);
        const competencesDto = morphism(CompetencesMap, competencesDb);
        res.send(competencesDto);
    });

    return _router;
}
