import Message from "./message";

export default class ServerMessage{
    action:string
    message:Message

    constructor(data:string){
        let msg = JSON.parse(data)
        this.action = msg.action
        this.message = msg.message
    }
}