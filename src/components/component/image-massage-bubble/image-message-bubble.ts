import './style.css'
import MessageContainer from '../message-container/message-container';
import { Methods } from '../../../framework/types/component/methods';
export default class ImageMessageBubble extends MessageContainer {

    protected setData() {
        return {}
    }

    protected setMethods(): Methods {
        return {}
    }

    render(): HTMLElement {
        let dom = document.createElement('img')
        dom.setAttribute('class', 'bubble-img')
        dom.setAttribute('src', this.state.props.message.content)
        dom.addEventListener('click', () => this.onImageClicked(this.state.props.message.content))
        // dom.outerHTML = `<img class="bubble-img" src="${this.data.message.content}">`
        return dom
    }

    onImageClicked(url: string): void {
        console.log(this)
        window.open(url, "newwindow", "height=300, width=400, toolbar= no, menubar=no, scrollbars=no, resizable=no, location=no, status=no,top=100,left=300")
    }
    
}