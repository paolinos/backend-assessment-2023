import { CallBusiness } from "./call_business";
import { ERROR_INVALID_USER_LENGTH, ERROR_USER_NOT_FOUND } from "./errors";
import { callCommandDb } from "../infrastructure/call_command";
import { channelEventService } from "../infrastructure/channel_event_service";
import { userCommandDb } from "../infrastructure/user_command";

// TODO: Review and update tests
/*
    How to mock:

    - Example mocking userCommandDb.getUserStatus(.....)
    const getUserStatusMock = jest.spyOn(userCommandDb, "getUserStatus");
    getUserStatusMock.mockImplementation(() => Promise.resolve([])); => mock return with empty values
*/

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