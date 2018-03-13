import './style.css'
import MessageContainer from '../message-container/message-container';
import { Methods } from '../../../framework/types/component/methods';
export default class LinkMessageBubble extends MessageContainer {
    protected setData() {
        return {}
    }
    protected setMethods(): Methods {
        return {}
    }


    render(): HTMLElement {
        let dom = document.createElement('a')
        dom.setAttribute('class','link')
        dom.setAttribute('href',this.state.props.message.content)
        dom.setAttribute('target','_blank')
        dom.innerHTML = this.state.props.message.content
        return dom
    }


    // render(): string {
    //     let template = `<a href="${this.data.message.content}" target="_blank" class="link">${this.data.message.content}</a>`
    //     return this.getMessageContainer(template)
    // }


}