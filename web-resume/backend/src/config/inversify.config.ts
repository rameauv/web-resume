import { Container } from "inversify";
import "reflect-metadata";
import { JwtConfig } from "../Model/JwtConfig";
import { IRepository } from "../Repositories/IRepository";
import { MongoDbRepository } from "../Repositories/MongoDbRepository";
import { IAccountService } from "../Services/IAccountService";
import { IJwtService } from "../Services/IJwtService";
import { AccountService } from "../Services/implementation/AccountService";
import { JwtService } from "../Services/implementation/JwtService";
import { UserService } from "../Services/implementation/UserService";
import { IUserService } from "../Services/IUserService";
import config from "./config";

const myContainer = new Container();
myContainer.bind<IRepository>("IRepository").to(MongoDbRepository).inSingletonScope();
myContainer.bind<IUserService>("IUserService").to(UserService);
myContainer.bind<IAccountService>("IAccountService").to(AccountService);
myContainer.bind<IJwtService>("IJwtService").to(JwtService);

export { myContainer };
