import './style.css'
import MessageContainer from '../message-container/message-container';
import { Methods } from '../../../framework/types/component/methods';
export default class TextMessageBubble extends MessageContainer {
    protected setData() {
        return {}
    }
    protected setMethods(): Methods {
        return {}
    }

    render(): HTMLElement {
        let dom = document.createElement('p')
        dom.setAttribute('class','text')
        dom.innerHTML = this.state.props.message.content
        return dom
    }


}