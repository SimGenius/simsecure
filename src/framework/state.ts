import { Methods } from "./types/component/methods";

export interface State{
    data?:any,
    props?:any,
    events?:any,
    methods?: Methods
}