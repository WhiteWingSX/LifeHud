import { useState, useEffect } from 'react';
import '../style/BossBar/bossBar.css'
import { useHealt } from '../hooks/useHealt.jsx';
import { BossStats } from './pure/bossStats.jsx';
import { useArmor } from '../hooks/useArmor.jsx';
import { JoinHealt } from './pure/JoinHealt.jsx';
import { JoinArmor } from './pure/JoinArmor.jsx';

export const BossBar = () => {

    const [start, setStart] = useState(false)
    const [change, setChange] = useState(false)
    const [bigDamange, setBigDamange] = useState(false);


    const {playerName,
        updatePlayerName,
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
        mana,
        totalMana,
        customMana,
        updateMana,
        customConfigMana,
        decreaseMana,
        increaseMana,
        resetMana,
        cero,
        increaseCustomMana,
        decreaseCustomMana,
    } = useArmor()

    const monga = ( ( life / totalBar ) * 100);
    const Zunnma = ( ( mana / totalMana ) * 100);

    useEffect(() => {
        setBigDamange(parseFloat(monga) <= 30);
    }, [monga]);

    const handleInputChange = (e) => {
        const inputValue = parseInt(e.target.value, 10) || '';
        customConfig(inputValue);
    };

    const handleInputChangeMana = (e) => {
        const inputValue = parseInt(e.target.value, 10) || '';
        customConfigMana(inputValue);
    };

    return (
        <>
            {
                start ?
                    (
                        <div className={`App ${bigDamange ? 'below-30-percent-2' : ''}`}>
                            <div className='barhud-container'>
                                <p className='playerName'>{playerName}</p>
                                <div className="lifebar-container-2">
                                    <p className='life-info'>Hp: {totalBar} /  {life} </p>
                                    <div className="lifebar-2" style={{ width: `${monga}%`}}></div>
                                </div>

                                <div className="manabar-container-2">
                                    <p className='mana-info'>Armor {totalMana} /  {mana} </p>
                                    <div className="manabar-2" style={{ width: `${Zunnma}%`}}></div>
                                </div>

                                <div className='mana-life'>
                                    <button className='btn-mafla changeMana' onClick={() => setChange(true)}>Armor</button>
                                    <button className='btn-mafla changeLife' onClick={() => setChange(false)}>Life</button>
                                </div>
                            </div>


                            {
                                change ? (

                                    <JoinArmor
                                        decreaseMana={decreaseMana}
                                        increaseMana={increaseMana}
                                        increaseCustomMana={increaseCustomMana}
                                        customMana={customMana}
                                        handleInputChangeMana={handleInputChangeMana}
                                        resetMana={resetMana}
                                        cero={cero}
                                        setStart={setStart}
                                        decreaseCustomMana={decreaseCustomMana}
                                    />
                                ) : (
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
                                )}
                        </div>

                    ) : (

                        <BossStats
                            playerName={playerName}
                            updatePlayerName={updatePlayerName}
                            life={life}
                            updateLife={updateLife}
                            mana={mana}
                            updateMana={updateMana}
                            setStart={setStart}
                        />
                    )}
        </>
    );
};