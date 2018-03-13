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
        return this.state.props.message.userId === CONFIG.currentUser.myUserId
    }

    private createMessageComponent(message: Message): Component {
        let messageBubble:Component
        switch (message.type) {
            case 'text':
                messageBubble = new TextMessageBubble({props:{message:message}})
                break
            case 'image':
                messageBubble = new ImageMessageBubble({props:{message:message}})
                break
            case 'link':
                messageBubble = new LinkMessageBubble({props:{message:message}})
                break
        }
        return messageBubble
    }


    render(): HTMLElement {
        let dom = document.createElement('div')
        dom.setAttribute('class','container')
        let bubble = document.createElement('div')
        bubble.setAttribute('class',`bubble-${this.isMyMessage() ? 'my' : 'his'}`)
        bubble.appendChild(this.createMessageComponent(this.state.props.message).render())
        dom.appendChild(bubble)
        return dom
    }

}