import ServerMessage from "../model/server-message";
import CommunicationService from "./communication-service";
import Message from "../model/message";


export default class TalkService extends CommunicationService{

    constructor(talkId:string) {
        super(talkId)
    }

    protected onNewMessage(message: Message): void {
        console.log(message)
    }
    protected onLoginSuccess(): void {
        alert('login success')
    }
    protected onAuthFail(): void {
        alert('invalid token')
    }

    

}