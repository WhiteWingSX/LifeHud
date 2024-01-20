import '../../style/styleJoin/joinHealt.css'

export const JoinMana = ({ decreaseMana, increaseMana, increaseCustomMana, customMana, handleInputChangeMana, resetMana,
                             cero, setStart, decreaseCustomMana}) => {

    return (


        <div className="App">
            <div>

                <div className='counter-container'>

                    <h2 className='title-header'>Mana: Sp</h2>
                    <h3 className='title'>Increase:</h3>
                    <div>
                        <button className='btn-increase-mana' onClick={() => increaseMana(1)}>+1</button>
                        <button className='btn-increase-mana' onClick={() => increaseMana(3)}>+3</button>
                        <button className='btn-increase-mana' onClick={() => increaseMana(5)}>+5</button>
                        <button className='btn-increase-mana' onClick={() => increaseMana(10)}>+10</button>
                    </div>

                    <h3 className='title'>Decrease:</h3>
                    <div>
                        <button className='btn-decrease-mana' onClick={() => decreaseMana(1)}>-1</button>
                        <button className='btn-decrease-mana' onClick={() => decreaseMana(3)}>-3</button>
                        <button className='btn-decrease-mana' onClick={() => decreaseMana(5)}>-5</button>
                        <button className='btn-decrease-mana' onClick={() => decreaseMana(10)}>-10</button>
                    </div>

                    <h3 className='title'>Custom:</h3>
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

                    <div className='btn-exit-container'>
                        <button className='btn-exit' onClick={() => {setStart(false)}}>Exit</button>
                    </div>
                </div>


            </div>
        </div>
    );
}