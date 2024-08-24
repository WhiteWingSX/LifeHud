import { LifeBar } from './lifeBar.jsx';
import { BossBar } from './BossBar.jsx';
import '../style/Style.css'
import { EnemyBar } from "./EnemyHud.jsx";

export const HudBar = () => {

    return (
        <>
            <div className='orderHud'>
                <LifeBar/>
                <LifeBar/>
                <LifeBar/>
                <LifeBar/>
                <LifeBar/>
                <LifeBar/>
                <LifeBar/>
                <LifeBar/>
            </div>
            <hr/>

            {/*TODO: Realizar HUD para enemigos menores*/}
            <div className="orderEnemy">
                <EnemyBar/>
                <EnemyBar/>
                <EnemyBar/>
                <EnemyBar/>
                <EnemyBar/>
                <EnemyBar/>
                <EnemyBar/>
                <EnemyBar/>
                <EnemyBar/>
                <EnemyBar/>
                <EnemyBar/>
                <EnemyBar/>
                <EnemyBar/>
                <EnemyBar/>
                <EnemyBar/>
                <EnemyBar/>
            </div>
            <hr/>

            <div className='orderBoss'>
                <BossBar/>
                <BossBar/>
                <BossBar/>
            </div>
        </>
    )
}
