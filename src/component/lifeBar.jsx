import { useState, useEffect } from 'react';
import '../style/lifeBar/lifeBar.css'
import { useHealt } from '../hooks/useHealt.jsx';
import { Stats } from './pure/stats.jsx';
import { useMana } from '../hooks/useMana.jsx';
import { JoinHealt } from './pure/JoinHealt.jsx';
import { JoinMana } from './pure/JoinMana.jsx';

export const LifeBar = () => {

    const [start, setStart] = useState(false)
    const [change, setChange] = useState(false)
    const [bigDamange, setBigDamange] = useState(false);
    const [midDamange, setMidDamange] = useState(false);


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
    } = useMana()

    const monga = ( ( life / totalBar ) * 100);
    const Zunnma = ( ( mana / totalMana ) * 100);

    useEffect(() => {
        setMidDamange(parseFloat(monga) <= 70 && parseFloat(monga) > 30);
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
                    <div className={`App ${bigDamange ? 'below-30-percent' : ''} ${midDamange ? 'below-65-percent' : ''}`}>
                        <div className='barhud-container'>
                            <p className='playerName'>{playerName}</p>
                            <div className="lifebar-container">
                                <p className='life-info'>Hp: {totalBar} /  {life} </p>
                                <div className="lifebar" style={{ width: `${monga}%`}}></div>
                            </div>

                            <div className="manabar-container">
                                <p className='mana-info'>Sp: {totalMana} /  {mana} </p>
                                <div className="manabar" style={{ width: `${Zunnma}%`}}></div>
                            </div>

                            <div className='mana-life'>
                                <button className='btn-mafla changeMana' onClick={() => setChange(true)}>Mana</button>
                                <button className='btn-mafla changeLife' onClick={() => setChange(false)}>Life</button>
                            </div>
                        </div>


                        {
                            change ? (

                                <JoinMana
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

                        <Stats
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