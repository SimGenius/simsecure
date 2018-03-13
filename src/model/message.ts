export default class Message {
    messageId: number
    userId: number
    type: string
    content: string | any
    time: number

    constructor(messageId = 0, userId = 0, type = 'text', content = '', time = 0) {
        this.messageId = messageId
        this.userId = userId
        this.type = type
        this.content = content
        this.time = time
    }      
}