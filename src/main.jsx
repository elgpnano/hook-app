import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
//import { Memorize } from './06-memos/Memorize.jsx'
import { CallBackHook } from './06-memos/CallBackHook.jsx'
import { MemoHook } from './06-memos/MemoHook.jsx'

import './08-useReducer/intro-reducer.js'
import { TodosApp } from './08-useReducer/TodosApp.jsx'
import { MainApp } from './09-useContext/MainApp.jsx'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        {/* <React.StrictMode> */}
            <MainApp />
        {/* </React.StrictMode> */}
    </BrowserRouter>

)
