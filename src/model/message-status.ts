export default class MessageStatus {
    _id: number
    _sent: boolean
    _success: boolean

    constructor(id: number, sent: boolean, success: boolean) {
        this._id = id
        this._sent = sent
        this._success = success
    }


    public get id() {
        return this._id
    }

    public get sent() {
        return this._sent
    }

    public set sent(sent:boolean) {
        this._sent = sent
        this.onStatusChange(this)
    }

    public get success() {
        return this._success
    }

    public set success(success:boolean) {
        this._success = success
        this.onStatusChange(this)
    }


    protected onStatusChange(messageStatus: MessageStatus):void { };
}