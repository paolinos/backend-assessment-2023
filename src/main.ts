import { CallBusiness } from "./business/call_business";
import { callCommandDb } from "./infrastructure/call_command";
import { channelEventService } from "./infrastructure/channel_event_service";
import { userCommandDb } from "./infrastructure/user_command";


const main = async ():Promise<void> => {
    console.log("log app");


    const call = new CallBusiness(
        userCommandDb,
        callCommandDb,
        channelEventService
    );

    const callResult = await call.startCall("userA", "userB");
    console.log("callResult:", callResult);
}

main();