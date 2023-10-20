
export const createToken = ():string => {
    return `${Date.now()}-${Math.floor(Math.random() *  1000)}-${Math.floor(Math.random() *  1000)}`;
}