
export type CreateChannelResponse = {
    channelId:string;
    serverUrl:string;
}

type ChannelData = CreateChannelResponse & {
    users?:{
        from: string,
        to: string[],
        startAt:Date,
    }
}

/**
 * a Channel Event service.
 */
export interface IChannelEventService {
    
    /**
     * Send event to assign users to channel
     * @param {string} from username that start the call
     * @param {string[]} to others users in the call 
     * 
     * @returns {Promise<CreateChannelResponse|undefined>} if not channel available return undefined
     */
    setUserToChannel(from:string, to:string[]):Promise<CreateChannelResponse|undefined>;

};



/**
 * WARN: ChannelEventService is just an example BUT NOT REAL implementation.
 */
class ChannelEventService implements IChannelEventService {

    private readonly _data:ChannelData[];
    constructor(){
        this._data = [
            {channelId: "channel1", serverUrl:"http://fake.url/channl-a"},
            {channelId: "channel2", serverUrl:"http://fake.url/channl-b"}
        ];
    }

    async setUserToChannel(from: string, to: string[]): Promise<CreateChannelResponse|undefined> {
        
        const channel = this._data.find(q => q.users === undefined);
        if(channel){
            channel.users = {
                from: from,
                to: to,
                startAt: new Date()
            };

            return {
                channelId: channel.channelId,
                serverUrl: channel.serverUrl
            };
        }

        return undefined;
    }   
}

export const channelEventService:IChannelEventService = new ChannelEventService();