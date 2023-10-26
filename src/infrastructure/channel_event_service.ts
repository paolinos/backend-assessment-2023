
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


export interface IChannelEventService {

    setUserToChannel(from:string, to:string[]):Promise<CreateChannelResponse|undefined>;

};









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