import ServerMessage from "../model/server-message";
import Message from "../model/message";
import config from "./config";

export default abstract class CommunicationService {

    private static baseUrl: string = `wss://api.simgenius.cn:3000/`
    private ws: WebSocket

    constructor(talkId: string) {
        this.ws = new WebSocket(CommunicationService.baseUrl + talkId)
    }


    private msgHandler() {
        this.ws.onmessage = (messageEvent: MessageEvent): void => {
            let serverMessage = new ServerMessage(messageEvent.data)
            let message = serverMessage.message
            switch (serverMessage.action) {
                case 'new message':
                    this.onNewMessage(message)
                    break
                case 'auth fail':
                    this.onAuthFail()
                    break
                case 'login success':
                    this.onLoginSuccess()
                    break

            }
        }
    }

    protected abstract onLoginSuccess(): void

    protected abstract onAuthFail(): void

    protected abstract onNewMessage(message: Message): void

    private auth() {
        let { myUserToken, myUserId } = config.currentUser
    }

    protected send(message: Message): void {
        this.ws.send(JSON.stringify(message))
    }

}