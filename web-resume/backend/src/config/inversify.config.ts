import { Container, interfaces } from "inversify";
import "reflect-metadata";
import { AsyncCheckTokenMiddleware } from "../middleware/AsyncCheckTokenMiddleware";
import { IAsyncCheckTokenMiddleware } from "../middleware/IAsyncCheckTokenMiddleware";
import { IRepository } from "../repositories/IRepository";
import { MongoDbRepository } from "../repositories/MongoDbRepository";
import { IAccountService } from "../services/IAccountService";
import { IJwtService } from "../services/IJwtService";
import { AccountService } from "../services/implementation/AccountService";
import { JwtService } from "../services/implementation/JwtService";
import { SearchService } from "../services/implementation/SearchService";
import { TokenExtractorService } from "../services/implementation/TokenExtractorService";
import { UserService } from "../services/implementation/UserService";
import { ISearchService } from "../services/ISearchService";
import { ITokenExtractorService } from "../services/ITokenExtractorService";
import { IUserService } from "../services/IUserService";
import config from "./config";

const myContainer = new Container();
myContainer.bind<IRepository>("IRepository").to(MongoDbRepository).inSingletonScope();
myContainer.bind<IUserService>("IUserService").to(UserService);
myContainer.bind<ISearchService>("ISearchService").to(SearchService);
myContainer.bind<IAccountService>("IAccountService").toDynamicValue((context: interfaces.Context) =>
    new AccountService(context.container.get<IRepository>("IRepository"), config.jwtSecret));
myContainer.bind<IJwtService>("IJwtService").to(JwtService);
myContainer.bind<ITokenExtractorService>("ITokenExtractorService").to(TokenExtractorService);
myContainer.bind<IAsyncCheckTokenMiddleware>("IAsyncCheckTokenMiddleware").to(AsyncCheckTokenMiddleware);

export { myContainer };
