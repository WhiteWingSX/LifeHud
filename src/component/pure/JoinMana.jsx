import '../../style/styleJoin/joinHealt.css'

export const JoinMana = ({ decreaseMana, increaseMana, increaseCustomMana, customMana, handleInputChangeMana, resetMana,
                             cero, setStart, decreaseCustomMana}) => {

    return (

        <div className="App">
            <div>

                <div className='counter-container'>

                    <h3 className='title-header'>Sp- / Sp+</h3>
                    <div>
                        <button onClick={decreaseCustomMana}>-</button>
                        <input
                            type='number'
                            placeholder='custom-Mana'
                            value={customMana}
                            onChange={handleInputChangeMana}
                        />
                        <button onClick={increaseCustomMana}>+</button>
                    </div>

                    <div className='btn-reset-container'>
                        <button className='btn-reset' onClick={resetMana}>Reset Sp</button>
                        <button className='btn-reset' onClick={cero}>Sp: 0</button>
                    </div>
                </div>


            </div>
        </div>
    );
}
