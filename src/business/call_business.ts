import { ICallCommandDb, UserToken } from "../infrastructure/call_command";
import { IUserCommandDb, USER_STATUS } from "../infrastructure/user_command";
import { IChannelEventService } from "../infrastructure/channel_event_service";
import { CreateCallResponse } from "./call_dto";
import {
    ERROR_CHANNEL_NOT_AVAILABLE,
    ERROR_INVALID_USER_LENGTH, 
    ERROR_USER_NOT_AVAILABLE,
    ERROR_USER_NOT_FOUND,
    ERROR_MAKING_CALL
} from "./errors";
import { createToken } from "../common/crypto";


export interface ICallBusiness {
    startCall(from:string, to:string):Promise<CreateCallResponse>;
}


export class CallBusiness implements ICallBusiness {

    constructor(
        private readonly userDb:IUserCommandDb,
        private readonly callDb:ICallCommandDb,
        private readonly channelEventService:IChannelEventService
    ){ }

    async startCall(from:string, to:string):Promise<CreateCallResponse> {

        
        //      NOTE:
        //          throw Error to refuse. 
        //          All other services will throw Error if something happened
        
        // TODO: implement a call logic
        //      1- validate users
        //          basic check of fields
        //          check user status from DB
        //      2- create channel and assign users
        //      3- save user call
        //      4- set user in call
        //      5- return value

        
        return {
            channel_id: "",
            server_url: "",
            users: []
        }
    }

}