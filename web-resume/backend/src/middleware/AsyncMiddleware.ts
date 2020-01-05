export function AsyncMiddleware(fn: (req: any, res: any, next: any) => Promise<any>): any {
    return (req: any, res: any, next: any) => {
        return Promise.resolve(fn(req, res, next))
        .catch(next);
    };
}
