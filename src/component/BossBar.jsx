import { useState, useEffect } from 'react';
import { useHealt } from '../hooks/useHealt.jsx';
import { BossStats } from './pure/bossStats.jsx';
import { useArmor } from '../hooks/useArmor.jsx';
import { JoinHealt } from './pure/JoinHealt.jsx';
import { JoinArmor } from './pure/JoinArmor.jsx';
import '../style/BossBar/bossBar.css'

export const BossBar = () => {

    const [start, setStart] = useState(false)
    const [join, setJoin] = useState(false)
    const [bigDamange, setBigDamange] = useState(false);

    const {bossName,
        updateBossName,
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
                                    <div className={`App ${bigDamange ? 'below-30-percent-2' : ''}`}>
                                        <div className='barhud-container'>
                                            <p className='playerName'>{bossName}</p>

                                            <div className="manabar-container-2">
                                                <p className='mana-info'>Armor {armor} / {totalArmor}  </p>
                                                <div className="manabar-2" style={{width: `${armore}%`}}></div>
                                            </div>
                                            <div className="lifebar-container-2">
                                                <p className='life-info'>Hp: {totalBar} / {life} </p>
                                                <div className="lifebar-2" style={{width: `${monga}%`}}></div>
                                            </div>

                                            <div style={{display: "grid"}}>
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

                                                <div className='btn-exit-container'>
                                                    <button className='btn-exit' onClick={() => {
                                                        setStart(false)
                                                    }}>Exit
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                ) : (

                                    <BossStats
                                        playerName={bossName}
                                        updatePlayerName={updateBossName}
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
                            <div className="infoPlayer">
                                <h1 className="letterColor">BOSS FIGHT</h1>
                                <div style={{display: "flex", justifyContent: "center"}}>
                                    <button className='btn-join' onClick={() => {
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
