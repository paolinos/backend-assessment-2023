export type UserCall = {
    username: string;
    token: string;
};

export type CreateCallResponse = {
    channel_id:string;
    server_url: string;
    users: UserCall[]
};