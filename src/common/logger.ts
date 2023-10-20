

export interface ILogger {
    
    log(...args:any[]):Promise<void>;

    error(error:Error, ...args:any[]):Promise<void>;
}