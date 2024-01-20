import '../../style/styleJoin/joinBoss.css'

export const JoinArmor = ({ decreaseMana, increaseMana, increaseCustomMana, customMana, handleInputChangeMana, resetMana,
                             cero, setStart, decreaseCustomMana}) => {

    return (


        <div className="App-2">
            <div>

                <div className='counter-container-2'>

                    <h2 className='title-header'>Armor</h2>
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
                        <button className='btn-reset' onClick={resetMana}>Reset Armor</button>
                        <button className='btn-reset' onClick={cero}>Armor: 0</button>
                    </div>

                    <div className='btn-exit-container'>
                        <button className='btn-exit-2' onClick={() => {setStart(false)}}>Exit</button>
                    </div>
                </div>


            </div>
        </div>
    );
}