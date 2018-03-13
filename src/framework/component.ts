import { Methods } from './types/component/methods'
import { createObservableData } from './data/observer'
import { generateId } from './util/id-generator'

export default abstract class Component {
    id: string
    data: any = {}
    props: any = {}
    events: any = {}
    methods: Methods = {}
    dom: HTMLElement
    parent: Component = null

    // constructor(data: any, methods: Methods, parent: Component = null) {
    //     this.data = data
    //     this.methods = methods
    //     this.parent = parent
    //     this.lifeCircle()
    // }
    //
    constructor(parent: Component = null, props?: any, events?: any) {
        // this.data = data
        // this.methods = methods
        this.id = generateId()
        this.events = events
        this.props = createObservableData(props, this)
        this.parent = parent
        this.lifeCircle()
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

    public appendTo(target: Component): void {
        this.parent = target
        target.appendChild(this)
    }

    public appendChild(child: Component): Component {
        child.parent = this
        this.dom.appendChild(child.dom)
        return this
    }

    protected switchViewOn(parentView: HTMLElement): void {
        parentView.innerHTML = this.doRender().innerHTML
    }

    protected rendered(dom: HTMLElement): void {}

    private renderSelf() {
        this.dom = this.doRender()
    }

    private attachEvents() {
        for (let eventName in this.methods.events) {
            this.dom.addEventListener(eventName, this.methods.events[eventName])
        }
    }

    protected appendComponent(component: Component): HTMLElement {
        component.parent = this
        return component.doRender()
    }

    protected emit(event: string, arg: any): void {
        let args = Array.prototype.slice.call(arguments)
        let methodName = args.shift()
        // this.parent.methods.events[methodName].apply(methodName, args)
        this.events[methodName].apply(this, args)
    }

    protected abstract setData(): any

    protected abstract setMethods(): any

    public notifyChildDataChanged(): void {
        this.reRender()
    }

    private lifeCircle() {
        this.data = createObservableData(this.setData(), this)
        this.methods = this.setMethods()
        this.renderSelf()
        // this.attachEvents()
    }
}
