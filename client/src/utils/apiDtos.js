export class ContactDto {
    profilePicture; //string
    title; //string
    firstname; // string
    lastname; // string
    address; //string
}

export class WorkingExperiencesDto {
    workingExperiences; // List<WorkingExperienceDto>
}

export class WorkingExperienceDto {
    title; // string
    company; // string
    startingDate; // date
    endingDate; // date
    current; // boolean
    address; // string
    imageUrl; // string
}

export class CompetencesDto {
    competences; // List<CompetenceDto>
}

export class CompetenceDto {
    title; // string
    rate; // integer between 0 and 100
}