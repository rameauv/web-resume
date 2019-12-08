import * as express from "express";
import { morphism } from "morphism";
import { JwtFunctions } from "../Services/JwtMiddleware";
import { WorkingExperiencesService } from "../Services/WorkingExperiencesService";
import { WorkingExperiencesMap } from "./DbDtoMaps";

export function WorkingExperiencesController() {
    const _router = express.Router();
    const _workingExperiencesService = new WorkingExperiencesService();

    _router.get("/workingExperiences", async (req: any, res) => {
        // const userid = req.decoded.userid;
        const userdataid = "5cf4945b38512b2278d09b0b";
        const workingExperiencesDb = await _workingExperiencesService.getUserWorkingExperiencesAsync(userdataid);
        const workingExperiencesDto = morphism(WorkingExperiencesMap, workingExperiencesDb);
        res.send(workingExperiencesDto);
    });

    return _router;
}
