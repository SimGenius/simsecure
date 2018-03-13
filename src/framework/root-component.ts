import Component from "./component";

export default abstract class RootComponent extends Component {
    // protected renderDOM(): HTMLElement {
    //     let dom = document.createElement('div')
    //     dom.id = 'app'
    //     this.dom = dom
    //     return dom
    // }

    public start(){
        let appDOM = this.render()
        appDOM.id = 'app-content'
        let appContainer = document.getElementById('app').appendChild(appDOM)

    }

}