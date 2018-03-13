import { Methods } from './types/component/methods'
import { createObservableData } from './data/observer'
import { generateId } from './util/id-generator'
import { State } from './state';

export default abstract class Component {
    id: string
    // data: any = {}
    // props: any = {}
    // events: any = {}
    // methods: Methods = {}
    state:State = {}
    dom: HTMLElement
    parent: Component = null
    children: Component[] = []

    constructor(state:State) {
        // this.data = data
        // this.methods = methods
        this.id = generateId()
        this.state = state
    }

    /**
     * How to get the DOM of this Component
     */
    protected abstract render(): HTMLElement

    protected doRender(): HTMLElement {
        let dom = this.render()
        this.dom = dom
        dom.setAttribute('id', this.id)
        this.rendered(dom)
        return this.dom
    } 

    protected reRender(): void {
        // this.dom.parentNode.removeChild(this.dom)
        let parentDOM =
            this.parent === null
                ? document.getElementById('app')
                : document.getElementById(this.parent.id)
        if (this.parent === null) {
            this.parent = this
        }

        let childDOM = parentDOM.childNodes[0]
        parentDOM.removeChild(childDOM)
        this.renderSelf()
        // let newDom = this.doRender()
        this.parent.appendChild(this)
    }


    public appendChild(child: Component): Component {
        child.parent = this
        this.children.push(child)
        return this
    }

    // protected switchViewOn(parentView: HTMLElement): void {
    //     parentView.innerHTML = this.doRender().innerHTML
    // }

    protected rendered(dom: HTMLElement): void {}

    private renderSelf() {
        this.dom = this.doRender()
    }

    // private attachEvents() {
    //     for (let eventName in this.state.methods.events) {
    //         this.dom.addEventListener(eventName, this.state.methods.events[eventName])
    //     }
    // }

    // protected appendComponent(component: Component): HTMLElement {
    //     component.parent = this
    //     return component.doRender()
    // }

    // protected emit(event: string, arg: any): void {
    //     let args = Array.prototype.slice.call(arguments)
    //     let methodName = args.shift()
    //     // this.parent.methods.events[methodName].apply(methodName, args)
    //     this.state.events[methodName].apply(this, args)
    // }

    protected abstract setData(): any

    protected abstract setMethods(): any

    public notifyChildDataChanged(): void {
        this.reRender()
    }

    private lifeCircle() {
        this.state.data = createObservableData(this.setData(), this)
        this.state.methods = this.setMethods()
        this.renderSelf()
    }
}
