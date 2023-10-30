
export enum USER_STATUS {
    AVAILABLE="available",
    IN_CALL="in_call"
}

export type UserDetails = {
    username:string;
    status:USER_STATUS;
}

/**
 * a database abstraction for User
 */
export interface IUserCommandDb {

    /**
     * Get all users and return the user that exist. if not user exist will return an empty array.
     * @param {string[]} users list of usernames to find
     * @returns {Promise<UserDetails[]>} return all users or empty string
     */
    getUserStatus(users:string[]):Promise<UserDetails[]>;

    /**
     * Set user status.
     * @param {string} user username
     * @param {USER_STATUS} status status to save
     */
    setUserStatus(user:string, status:USER_STATUS):Promise<void>

}



/**
 * WARN: UserCommandDb is just an example BUT NOT REAL implementation.
 */
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