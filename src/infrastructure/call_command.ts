type ChannelDetails = {
    channelId:string;
    from:UserToken; 
    to:UserToken[];
}

export class UserToken {
    constructor(
        public readonly username:string,
        public readonly token:string
    ){}
}

export interface ICallCommandDb {
    saveUserInCall(channelId:string, from:UserToken, to:UserToken[]):Promise<void>
}










class CallCommandDb implements ICallCommandDb {

    private readonly _data:ChannelDetails[];
    constructor(){
        this._data = [];
    }


    async saveUserInCall(channelId: string, from: UserToken, to: UserToken[]): Promise<void> {

        this._data.push({
            channelId,
            from,
            to
        });

    }

}
export const callCommandDb:ICallCommandDb = new CallCommandDb();