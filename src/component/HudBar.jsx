import { useState } from 'react';
import { LifeBar } from './lifeBar.jsx';
import '../style/Style.css'
import { BossBar } from './BossBar.jsx';


export const HudBar = () => {

    return (
        <>
            <div className='orderHud'>
                <LifeBar/>
                <LifeBar/>
                <LifeBar/>
                <LifeBar/>
            </div>
            <hr/>
            <div className='orderBoss'>
                <BossBar/>
            </div>
        </>
    )
}
