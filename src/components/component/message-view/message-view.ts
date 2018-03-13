import Component from '../../../framework/component'
import './style.css'
import Message from '../../../model/message'
import TextMessageBubble from '../text-message-bubble/text-message-bubble'
import ImageMessageBubble from '../image-massage-bubble/image-message-bubble'
import LinkMessageBubble from '../link-message-bubble/link-message-bubble'
import MessageContainer from '../message-container/message-container'
import { Methods } from '../../../framework/types/component/methods'
import MessageBubble from '../message-bubble/message-bubble'

export default class MessageView extends Component {
    protected setData() {
        return {}
    }
    protected setMethods(): Methods {
        return {}
    }

    // id: string
    dom: HTMLElement

    // constructor(data: any, methods: any, id: string) {
    //     super(data, methods)
    //     if (document.getElementById(id) !== null) {
    //         console.error(`ID:${id} exists`)
    //         return
    //     } else {
    //         this.id = id
    //     }
    // }

    addMessage() {
        let self
        let messageData = this.state.props.messageData
        let messageBubbles: MessageBubble[] = []
        for (let i = 0; i < messageData.length; i++) {
            messageBubbles.push(
                new MessageBubble({
                    props: {
                        messageData: messageData[i]
                    },
                })
            )
        }
        
        
    }

    render(): HTMLElement {
        let dom = document.createElement('div')
        dom.setAttribute('class', 'message-view')

        let messageData = this.state.props.messageData
        let messageBubbles: MessageBubble[] = []
        for (let i = 0; i < messageData.length; i++) {
            messageBubbles.push(
                new MessageBubble({
                    props: {
                        messageData: messageData[i]
                    },
                })
            )
        }

        for (let i = 0; i < messageBubbles.length; i++) {
            this.appendChild(messageBubbles[i])
        }

        return dom
        // return (`<div class="message-view" id="${this.id}"></div>`)
    }
}
