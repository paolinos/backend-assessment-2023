
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

/**
 * a database abstraction for Call
 */
export interface ICallCommandDb {

    /**
     * Set users in call.
     * @param {string} channelId 
     * @param {UserToken} from 
     * @param {UserToken[]} to 
     */
    setUsersInCall(channelId:string, from:UserToken, to:UserToken[]):Promise<void>

}

/**
 * WARN: CallCommandDb is just an example BUT NOT REAL implementation.
 */
class CallCommandDb implements ICallCommandDb {

    private readonly _data:ChannelDetails[];
    constructor(){
        this._data = [];
    }


    async setUsersInCall(channelId: string, from: UserToken, to: UserToken[]): Promise<void> {

        this._data.push({
            channelId,
            from,
            to
        });

    }

}

export const callCommandDb:ICallCommandDb = new CallCommandDb();