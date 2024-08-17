import { useState, useEffect } from 'react';
import '../style/lifeBar/lifeBar.css'
import '../style/Style.css'
import { useHealt } from '../hooks/useHealt.jsx';
import { Stats } from './pure/stats.jsx';
import { useMana } from '../hooks/useMana.jsx';
import { JoinHealt } from './pure/JoinHealt.jsx';
import { JoinMana } from './pure/JoinMana.jsx';
import { useArmor } from "../hooks/useArmor.jsx";
import { JoinArmor } from "./pure/JoinArmor.jsx";

export const LifeBar = () => {

    const [start, setStart] = useState(false)
    const [join, setJoin] = useState(false)
    const [bigDamange, setBigDamange] = useState(false);
    const [midDamange, setMidDamange] = useState(false);
    const [littleDamage, setLittleDamage] = useState(false)


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
    const Zunnma = ( ( mana / totalMana ) * 100);
    const armore = ( ( armor / totalArmor ) * 100);

    useEffect(() => {
        setLittleDamage(parseFloat(monga) <= 99 && parseFloat(monga) > 70)
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
                                    <div
                                        className={`App ${bigDamange ? 'below-30-percent' : ''} ${midDamange ? 'below-65-percent' : ''} ${littleDamage ? 'below-99-percent' : ''}`}>
                                        <div className='barhud-container'>
                                            <p className='playerName'>{playerName}</p>

                                            <div className="armorBar-container">
                                                <p className='armor-info'>Armor: {armor} / {totalArmor} </p>
                                                <div className="armorBar" style={{width: `${armore}%`}}></div>
                                            </div>

                                            <div className="lifebar-container">
                                                <p className='life-info'>Hp: {life} / {totalBar} </p>
                                                <div className="lifebar" style={{width: `${monga}%`}}></div>
                                            </div>

                                            <div className="manabar-container">
                                                <p className='mana-info'>Sp: {mana} / {totalMana} </p>
                                                <div className="manabar" style={{width: `${Zunnma}%`}}></div>
                                            </div>

                                            <div className='mana-life'
                                                 style={{display: 'grid', justifyContent: "center"}}>

                                                <JoinArmor
                                                    customArmor = {customArmor}
                                                    decreaseArmor = {decreaseArmor}
                                                    increaseArmor = {increaseArmor}
                                                    resetArmor = {resetArmor}
                                                    increaseCustomArmor = {increaseCustomArmor}
                                                    decreaseCustomArmor = {decreaseCustomArmor}
                                                    zeroArmor = {zeroArmor}
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

                                            </div>

                                            <div className='btn-exit-container'>
                                                <button className='btn-exit' onClick={() => {
                                                    setStart(false)
                                                }}>Exit
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                ) : (

                                    <>
                                        <Stats
                                            playerName={playerName}
                                            updatePlayerName={updatePlayerName}
                                            life={life}
                                            updateLife={updateLife}
                                            mana={mana}
                                            updateMana={updateMana}
                                            armor={armor}
                                            updateArmor={updateArmor}
                                            setStart={setStart}
                                            setJoin={setJoin}
                                        />
                                    </>
                                )
                    )
                    :
                    (
                        <div className="backgroundJoin">
                            <div className="infoPlayer">
                                <h1 className="letterColor">NEW PLAYER</h1>
                                <div style={{display: "flex",justifyContent: "center"}}>
                                    <button className='btn-join' onClick={() => {setJoin(true)}}>
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
