import Component from "../component"

export function createObservableData(data: any,component:Component): Object {

    let observableData: any = {}

    for (let name in data) {
        Object.defineProperty(observableData, name, {
            get: function (): any {
                return data[name]
            },
            set: function (value: any): void {
                data[name] = value
                component.notifyChildDataChanged()
            },
            configurable: true,
            enumerable: true,
        })
    }

    return observableData
}