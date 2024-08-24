import { useState, useEffect } from 'react';
import { useHealt } from '../hooks/useHealt.jsx';
import { BossStats } from './pure/bossStats.jsx';
import { useArmor } from '../hooks/useArmor.jsx';
import { JoinHealt } from './pure/JoinHealt.jsx';
import { JoinArmor } from './pure/JoinArmor.jsx';
import '../style/BossBar/bossBar.css'
import '../style/Style.css'

export const EnemyBar = () => {

    const [start, setStart] = useState(false)
    const [join, setJoin] = useState(false)
    const [bigDamange, setBigDamange] = useState(false);

    const {enemyName,
        updateEnemyName,
        life,
        totalBar,
        updateLife,
        customConfig,
        customCounter,
        decreaseLife,
        decreaseCustomCounter,
        increaseLife,
        increaseCustomCounter,
        resetLife,
        zero,
    } = useHealt();

    const {
        armor,
        totalArmor,
        customArmor,
        updateArmor,
        customConfigArmor,
        decreaseArmor,
        increaseArmor,
        resetArmor,
        zeroArmor,
        increaseCustomArmor,
        decreaseCustomArmor,
    } = useArmor()

    const monga = ( ( life / totalBar ) * 100);
    const armore = ( ( armor / totalArmor ) * 100);

    useEffect(() => {
        setBigDamange(parseFloat(monga) <= 30);
    }, [monga]);

    const handleInputChange = (e) => {
        const inputValue = parseInt(e.target.value, 10) || '';
        customConfig(inputValue);
    };

    const handleInputChangeArmor = (e) => {
        const inputValue = parseInt(e.target.value, 10) || '';
        customConfigArmor(inputValue);
    };

    return (
        <>
            {
                join ?
                    (
                        start ?
                            (
                                <div className={`App2 ${bigDamange ? 'below-30-percent-3' : ''}`}>
                                    <div className='barhud-container3'>
                                        <div style={{display: 'grid', justifyContent: 'center'}}>
                                            <p className='playerName'>{enemyName}</p>

                                            <div className="manabar-container-3">
                                                <p className='mana-info'>Armor {armor} / {totalArmor}  </p>
                                                <div className="manabar-3" style={{width: `${armore}%`}}></div>
                                            </div>
                                            <div className="lifebar-container-3">
                                                <p className='life-info'>Hp: {totalBar} / {life} </p>
                                                <div className="lifebar-3" style={{width: `${monga}%`}}></div>
                                            </div>
                                        </div>


                                        <div style={{display: "grid", justifyContent: 'center'}}>
                                            <JoinArmor
                                                customArmor={customArmor}
                                                decreaseArmor={decreaseArmor}
                                                increaseArmor={increaseArmor}
                                                resetArmor={resetArmor}
                                                increaseCustomArmor={increaseCustomArmor}
                                                decreaseCustomArmor={decreaseCustomArmor}
                                                zeroArmor={zeroArmor}
                                                handleInputChangeArmor={handleInputChangeArmor}
                                            />

                                            <JoinHealt
                                                decreaseLife={decreaseLife}
                                                increaseLife={increaseLife}
                                                increaseCustomCounter={increaseCustomCounter}
                                                customCounter={customCounter}
                                                handleInputChange={handleInputChange}
                                                resetLife={resetLife}
                                                zero={zero}
                                                setStart={setStart}
                                                decreaseCustomCounter={decreaseCustomCounter}
                                            />
                                        </div>


                                            <div className='btn-exit-container2'>
                                                <button className='btn-exit' onClick={() => {
                                                    setStart(false)
                                                }}>Exit
                                                </button>
                                            </div>
                                        </div>
                                </div>

                            ) : (

                                <BossStats
                                    playerName={enemyName}
                                    updatePlayerName={updateEnemyName}
                                    life={life}
                                    updateLife={updateLife}
                                    armor={armor}
                                    updateArmor={updateArmor}
                                    setStart={setStart}
                                    setJoin={setJoin}
                                />
                            )
                    )
                    :
                    (
                        <div className="backgroundJoin">
                            <div className="infoPlayer2">
                                <h2 className="letterColor">ENEMY</h2>
                                <div style={{display: "flex", justifyContent: "center"}}>
                                    <button className='btn-joinEnemy' onClick={() => {
                                        setJoin(true)
                                    }}>
                                        JOIN
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
            }
        </>
    );
};
