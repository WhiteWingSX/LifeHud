import React from 'react'
import ReactDOM from 'react-dom/client'
// import  {LifeBar} from './component/lifeBar.jsx';
import { HudBar } from './component/HudBar.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <HudBar/>
  </React.StrictMode>,
)
