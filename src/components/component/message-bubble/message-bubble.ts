import './message-bubble.css'
import Component from '../../../framework/component'
import CONFIG from '../../../service/config'
import { Methods } from '../../../framework/types/component/methods';
import Message from '../../../model/message';
import TextMessageBubble from '../text-message-bubble/text-message-bubble';
import ImageMessageBubble from '../image-massage-bubble/image-message-bubble';
import LinkMessageBubble from '../link-message-bubble/link-message-bubble';

export default class MessageBubble extends Component {
    protected setData() {
        return {}
    }
    protected setMethods(): Methods {
        return {}
    }
    isMyMessage(): boolean {
        return this.props.message.userId === CONFIG.currentUser.myUserId
    }

    private createMessageComponent(message: Message): Component {
        let messageBubble:Component
        switch (message.type) {
            case 'text':
                messageBubble = new TextMessageBubble(this,{message}, {})
                break
            case 'image':
                messageBubble = new ImageMessageBubble(this,{message}, {})
                break
            case 'link':
                messageBubble = new LinkMessageBubble(this,{message}, {})
                break
        }
        return messageBubble
    }


    render(): HTMLElement {
        let dom = document.createElement('div')
        dom.setAttribute('class','container')
        let bubble = document.createElement('div')
        bubble.setAttribute('class',`bubble-${this.isMyMessage() ? 'my' : 'his'}`)
        bubble.appendChild(this.appendComponent(this.createMessageComponent(this.props.message)))
        dom.appendChild(bubble)
        return dom
    }

}