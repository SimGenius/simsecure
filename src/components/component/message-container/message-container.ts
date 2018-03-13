import './style.css'
import Component from '../../../framework/component'
import CONFIG from '../../../service/config'
import Message from "../../../model/message";

export default abstract class MessageContainer extends Component {

    message: Message

    // constructor(message: Message, methods = {}) {
    //     super({ message }, methods);
    // }

    // isMyMessage(): boolean {
    //     return this.data.message.userId === CONFIG.currentUser.myUserId
    // }

    // getMessageContainer(children:HTMLElement): HTMLElement {
    //     let dom = document.createElement('div')
    //     dom.setAttribute('class','container')
    //     let bubble = document.createElement('div')
    //     bubble.setAttribute('class',`bubble-${this.isMyMessage() ? 'my' : 'his'}`)
    //     bubble.appendChild(children)
    //     dom.appendChild(bubble)
    //     return dom
        
    // }


}