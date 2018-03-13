import Component from '../../../framework/component'
import './style.css'
import Message from '../../../model/message';
import { Methods } from '../../../framework/types/component/methods';

export default class InputBar extends Component {
    protected setData() {
        return {}
    }
    protected setMethods(): Methods {
        return {}
    }

    sendMessage(message: Message): void {
        this.emit('sendMessage', message)
    }

    render(): HTMLElement {
        let dom = document.createElement('div')
        dom.setAttribute('class', 'input-bar')
        dom.innerHTML =
            `<input id="text-input" class="text-input">
            <a class="btn-pic-select" href="javascript:void(0)">＋</a>`

        let inputDom: HTMLInputElement = <HTMLInputElement>dom.getElementsByClassName('text-input')[0]

        inputDom.addEventListener('keydown', (event) => {
            if (event.keyCode === 13) {
                // let text = this.getText()
                // this.methods.events['sendMessage'](new Message(0, 1, 'text', inputDom.value, new Date().getTime()))
                this.sendMessage(new Message(0, 1, 'text', inputDom.value, new Date().getTime()))
                inputDom.value = ''
            }
            return false
        })

        return dom

    }

}