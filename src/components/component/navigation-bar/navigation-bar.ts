import Component from '../../../framework/component'
import './style.css'
import { Methods } from '../../../framework/types/component/methods';
export default class NavigationBar extends Component {
    protected setData() {
        return {}
    }
    protected setMethods(): Methods {
        return {}
    }
    render(): HTMLElement {
        let dom = document.createElement('div')
        dom.setAttribute('class','navigation-bar')
        dom.innerHTML = `<p class="navigation-bar-title">${this.state.props.title}</p>`
        // dom.addEventListener('click',()=>this.emit('click','test'))
        return dom
        // return (
        //     `<div class="navigation-bar">
        //         <p class="navigation-bar-title">${this.data.title}</p>
        //     </div>`
        // )
    }


}