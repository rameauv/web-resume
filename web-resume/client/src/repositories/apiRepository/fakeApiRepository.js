import * as ApiDtos from './apiDtos';

export function getContact() {
  return new Promise((resolve, reject) => {
    var contactDto = new ApiDtos.ContactDto();
    contactDto.profilePicture = "profile.jpg"
    contactDto.firstname = "Valentin";
    contactDto.lastname = "RAMEAU";
    contactDto.title = "Software engineer"
    contactDto.address = "Lyon 03, Rhône-Alpes, France"
    resolve(contactDto);
    reject("");
  });
}

export function getWorkingExperiences() {
  return new Promise((resolve, reject) => {
    var workingExperiencesDto = new ApiDtos.WorkingExperiencesDto();
    var workingExperienceDto1 = new ApiDtos.WorkingExperienceDto();
    var workingExperienceDto2 = new ApiDtos.WorkingExperienceDto();
    var workingExperienceDto3 = new ApiDtos.WorkingExperienceDto();
    workingExperienceDto1.address = "Lyon, France";
    workingExperienceDto2.address = "Lyon, France";
    workingExperienceDto3.address = "Lyon, France";
    workingExperienceDto1.company = "Witivio";
    workingExperienceDto2.company = "Linkart";
    workingExperienceDto3.company = "CordenPharma";
    workingExperienceDto1.current = false;
    workingExperienceDto2.current = false;
    workingExperienceDto3.current = false;
    workingExperienceDto1.startingDate = new Date("2018-05-16T02:02:59.000+00:00");
    workingExperienceDto2.startingDate = new Date("2017-09-16T02:02:59.000+00:00");
    workingExperienceDto3.startingDate = new Date("2016-11-16T02:02:59.000+00:00");
    workingExperienceDto1.endingDate = new Date("2018-08-17T02:02:59.000+00:00");
    workingExperienceDto2.endingDate = new Date("2018-04-17T02:02:59.000+00:00");
    workingExperienceDto3.endingDate = new Date("2016-12-17T02:02:59.000+00:00");
    workingExperienceDto1.title = "Software developer"
    workingExperienceDto2.title = "Software developer"
    workingExperienceDto3.title = "Software developer"
    workingExperienceDto1.imageUrl = "witivio.gif"
    workingExperienceDto2.imageUrl = ""
    workingExperienceDto3.imageUrl = "corden.png"
    workingExperiencesDto.workingExperiences = [workingExperienceDto1, workingExperienceDto2, workingExperienceDto3];
    resolve(workingExperiencesDto);
    reject("");
  });
}

export function getCompetences() {
  return new Promise((resolve, reject) => {
    var competencesDto = new ApiDtos.CompetencesDto();
    var competenceDto1 = new ApiDtos.CompetenceDto();
    var competenceDto2 = new ApiDtos.CompetenceDto();
    var competenceDto3 = new ApiDtos.CompetenceDto();
    var competenceDto4 = new ApiDtos.CompetenceDto();
    var competenceDto5 = new ApiDtos.CompetenceDto();
    var competenceDto6 = new ApiDtos.CompetenceDto();
    var competenceDto7 = new ApiDtos.CompetenceDto();
    var competenceDto8 = new ApiDtos.CompetenceDto();
    var competenceDto9 = new ApiDtos.CompetenceDto();
    var competenceDto10 = new ApiDtos.CompetenceDto();
    var competenceDto11 = new ApiDtos.CompetenceDto();
    var competenceDto12 = new ApiDtos.CompetenceDto();
    competenceDto1.title = "C# .NET";
    competenceDto2.title = "Python";
    competenceDto3.title = "C++";
    competenceDto4.title = "C";
    competenceDto5.title = "Linux";
    competenceDto6.title = "Git";
    competenceDto7.title = "MongoDb";
    competenceDto8.title = "Java";
    competenceDto9.title = "MySql";
    competenceDto10.title = "PHP/Symphony";
    competenceDto11.title = "Angular";
    competenceDto12.title = "React";
    competenceDto1.rate = 90;
    competenceDto2.rate = 90;
    competenceDto3.rate = 90;
    competenceDto4.rate = 90;
    competenceDto5.rate = 90;
    competenceDto6.rate = 90;
    competenceDto7.rate = 75;
    competenceDto8.rate = 75;
    competenceDto9.rate = 75;
    competenceDto10.rate = 75;
    competenceDto11.rate = 75;
    competenceDto12.rate = 75;
    competencesDto.competences = [
      competenceDto1,
      competenceDto2,
      competenceDto3,
      competenceDto4,
      competenceDto5,
      competenceDto6,
      competenceDto7,
      competenceDto8,
      competenceDto9,
      competenceDto10,
      competenceDto11,
      competenceDto12
    ];
    resolve(competencesDto);
    reject("")
  });
}

export function getUserDatas() {
  return new Promise((resolve, reject) => {
    resolve({ firstname: "Valentin", lastname: "RAMEAU", profilePicture: "https://media.licdn.com/dms/image/C5103AQGTwJVHR7ja4A/profile-displayphoto-shrink_200_200/0?e=1563408000&v=beta&t=_EBi8godCBoYQ7SSns4DEtaZXROtn9jQoTQ2RhOyEYA", resumeTitle: "Software engineer" });
    reject("");
  });
}
