import '../../style/styleJoin/joinBoss.css'

export const JoinArmor = ({ customArmor, decreaseArmor, increaseArmor, resetArmor, increaseCustomArmor, decreaseCustomArmor
                              , zeroArmor, handleInputChangeArmor}) => {

    return (

        <div className="App-2">
            <div>

                <div className='counter-container-2'>

                    <h3 className='title-header'>Armor- / Armor+</h3>

                    <div>
                        <button onClick={decreaseCustomArmor}>-</button>
                        <input
                            type='number'
                            placeholder='custom-Mana'
                            value={customArmor}
                            onChange={handleInputChangeArmor}
                        />
                        <button onClick={increaseCustomArmor}>+</button>
                    </div>

                    <div className='btn-reset-container'>
                        <button className='btn-reset' onClick={resetArmor}>Reset Armor</button>
                        <button className='btn-reset' onClick={zeroArmor}>Armor: 0</button>
                    </div>
                </div>


            </div>
        </div>
    );
}
