import * as React from 'react'
import * as ReactDOM from 'react-dom'

export function Index(){
    return <div>Hello World!!!</div>
}

let domContainer = document.getElementById('applicaitonDomContainer')
let body = Index()
ReactDOM.render(body, domContainer)