import '../../style/stats/stats.css'
import { useState } from "react";

export const BossStats = ({ playerName, updatePlayerName, life, updateLife, armor, updateArmor, setStart, setJoin }) => {

    const [warning, setWarning] = useState(false);

    const dataIsReady = () => {
        if(life > 0) {
            setStart(true);
            setWarning(false)
        }

        setWarning(true);
    }

    return (
        <div className='infoPlayer'>
            <h3>Player Name</h3>
            <input
                className='data-input'
                type='text'
                placeholder='Username'
                value={playerName}
                onChange={(e) => updatePlayerName(e.target.value)}
            />

            <h4 style={{marginBottom: 10}}>Armor</h4>
            <i className="bi bi-shield-fill">
                <input
                    className='data-input'
                    type='number'
                    placeholder='Hp'
                    value={armor}
                    onChange={(e) => updateArmor(e.target.value)}
                /></i>

            {
                !warning
                    ? (
                        <>
                            <h4 style={{marginBottom: 10}}>Life Point</h4>
                            <i className="bi bi-heart-fill">
                                <input
                                    className='data-input'
                                    type='number'
                                    placeholder='Hp'
                                    value={life}
                                    onChange={(e) => updateLife(e.target.value)}
                                /></i>
                        </>
                    ) : (
                        <>
                            <h4 style={{color: "red", marginBottom: 10}}>Life Point</h4>
                            {
                                warning
                                    ? <small style={{marginBottom: 10, color: "red"}}>add a Life Point to continue</small>
                                    : ''
                            }

                            <i className="bi bi-heart-fill" style={{color: "red"}}>
                                <input
                                    style={{borderColor: "red"}}
                                    className='data-input'
                                    type='number'
                                    placeholder='Hp'
                                    value={life}
                                    onChange={(e) => updateLife(e.target.value)}
                                /></i>
                        </>
                    )
            }

            <div>
                <div className='btn-exit-container'>
                    <button className='btn-exit' onClick={dataIsReady}>
                        Start
                    </button>
                </div>

                <div className='btn-exit-container'>
                    <button className='btn-exit' onClick={() => {
                        setJoin(false)
                    }}>
                        Leave
                    </button>
                </div>
            </div>

        </div>
    );
}
