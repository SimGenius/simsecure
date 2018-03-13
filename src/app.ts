import 'resetcss/reset.min.css'
import './base-style.css'
import Message from './model/message';
import Component from './framework/component'
import RootComponent from './framework/root-component';
import MessageView from './components/component/message-view/message-view';

import NavigationBar from './components/component/navigation-bar/navigation-bar';

import InputBar from './components/component/input-bar/input-bar';
import { Methods } from './framework/types/component/methods';



// let app = document.getElementById('app')
let localhost = 'http://10.64.40.240'

export default class App extends RootComponent {
    protected setData() {
        return {
            messages: [
                { userId: 1, content: 'test1', messageId: 0, time: 0, type: 'text' },
                { userId: 1, content: 'test1', messageId: 0, time: 0, type: 'text' },
                { userId: 2, content: 'test2', messageId: 0, time: 0, type: 'text' },
                { userId: 1, content: 'https://simgenius.cn/blog3', messageId: 0, time: 0, type: 'link' },
                { userId: 1, content: localhost + '/test/logo.png', messageId: 0, time: 0, type: 'image' },
                { userId: 2, content: localhost + '/test/logo.png', messageId: 0, time: 0, type: 'image' },
                { userId: 2, content: localhost + '/test/test1.jpg', messageId: 0, time: 0, type: 'image' },
                { userId: 1, content: localhost + '/test/test1.jpg', messageId: 0, time: 0, type: 'image' },
                { userId: 2, content: 'is that successful?', messageId: 0, time: 0, type: 'text' },
                { userId: 1, content: 'yes', messageId: 0, time: 0, type: 'text' }

            ]
        }
    }

    messageView: MessageView

    constructor() {
        super(null)

    }

    protected setMethods(): Methods {
        return {
            events: {
                sendMessage: function (message: Message) {
                    this.messageView.pushMessage(message)
                }
            }
        }
    }

    render(): HTMLElement {
        let self = this

        let dom = document.createElement('div')

        let navi = new NavigationBar(this, { title: 'SimTalk' }, {
            click: function (word: string) {
                console.log(word)
            }
        })

        let inputBar = new InputBar(this, {}, {
            sendMessage: function (message: Message) {
                self.data.messages = self.data.messages.concat(message)
                console.log(self.data)
            }
        })

        let messageView = new MessageView(this, { messageData: this.data.messages }, {})

        dom.appendChild(this.appendComponent(navi))
        dom.appendChild(this.appendComponent(messageView))
        dom.appendChild(this.appendComponent(inputBar))

        return dom
    }


}

// let messageView = new MessageView({}, {}, 'messageView')




// .appendTo(app)
// let messageView = new MessageView({},{},'messageView')
// new InputBar({},{sendText:function(message:Message){
//     messageView.pushMessage(message)
// }}).appendTo(app)
// messageView.appendTo(app)

// let messageView = document.getElementById('messageView')


