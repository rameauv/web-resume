export interface IAsyncCheckTokenMiddleware {
    build(): (req: any, res: any, next: any) => Promise<any>;
}
