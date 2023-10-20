
export enum USER_STATUS {
    AVAILABLE="available",
    IN_CALL="in_call"
}

export type UserDetails = {
    username:string;
    status:USER_STATUS;
}

export interface IUserCommandDb {
    getUserStatus(users:string[]):Promise<UserDetails[]>;

    setUserStatus(user:string, status:USER_STATUS):Promise<void>
}

class UserCommandDb implements IUserCommandDb {

    private readonly _data:UserDetails[];
    constructor(){
        this._data = [
            {username: "userA", status:USER_STATUS.AVAILABLE},
            {username: "userB", status:USER_STATUS.AVAILABLE},
            {username: "userC", status:USER_STATUS.AVAILABLE},
            {username: "userD", status:USER_STATUS.AVAILABLE},
            {username: "userE", status:USER_STATUS.AVAILABLE},
            {username: "userF", status:USER_STATUS.IN_CALL},
        ];
    }


    async getUserStatus(users: string[]): Promise<UserDetails[]> {

        const result:UserDetails[] = [];
        for (const username of users) {
            const tmp = this._data.find(q => q.username === username);
            if(tmp){
                result.push(tmp);
            }
        }
        return result;
    }

    async setUserStatus(username: string, status: USER_STATUS): Promise<void> {
        const tmp = this._data.find(q => q.username === username);
        if(tmp){
            tmp.status = status;
        }
    }
    
}

export const userCommandDb:IUserCommandDb = new UserCommandDb();