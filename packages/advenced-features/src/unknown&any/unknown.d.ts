interface IComment {
    date: Date;
    message: string;
}
interface IDataService {
    getData(): unknown;
}
declare let service: IDataService;
declare const res: unknown;
