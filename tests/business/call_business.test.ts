import { CallBusiness } from "../../src/business/call_business";
import { ERROR_INVALID_USER_LENGTH, ERROR_USER_NOT_FOUND } from "../../src/business/errors";
import { callCommandDb } from "../../src/infrastructure/call_command";
import { channelEventService } from "../../src/infrastructure/channel_event_service";
import { userCommandDb } from "../../src/infrastructure/user_command";



describe("CallBusiness startCall", () => {

    let callBusiness:CallBusiness;
    beforeAll(() => {
        callBusiness = new CallBusiness(
            userCommandDb,
            callCommandDb,
            channelEventService
        );
    })


    test("when users are empty Should throw an error", async () => {
        await expect(callBusiness.startCall("", "")).rejects.toThrow(ERROR_INVALID_USER_LENGTH);
    })

    test.each([
        {from: "invalidA", to:"userB"},
        {from: "userA", to:"invalidB"},
        {from: "invalidA", to:"invalidB"},
    ])("when users are invalid Should throw an error", async ({from, to}) => {
        await expect(callBusiness.startCall(from, to)).rejects.toThrow(ERROR_USER_NOT_FOUND);
    })

    // TODO: add missing test

});