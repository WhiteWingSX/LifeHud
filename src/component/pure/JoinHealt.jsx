import '../../style/styleJoin/joinHealt.css'

export const JoinHealt = ({decreaseLife, increaseLife, increaseCustomCounter, customCounter, handleInputChange,
                              resetLife, zero, setStart, decreaseCustomCounter}) => {

    return (
        <div className="App">
            <div>
                <div className='counter-container'>
                    <h2 className='title-header'>Life: Hp</h2>
                <h3 className='title'>Healt:</h3>
                <div>
                    <button className='btn-increase' onClick={() => increaseLife(1)}>+1</button>
                    <button className='btn-increase' onClick={() => increaseLife(3)}>+3</button>
                    <button className='btn-increase' onClick={() => increaseLife(5)}>+5</button>
                    <button className='btn-increase' onClick={() => increaseLife(10)}>+10</button>
                </div>

                <h3 className='title'>Damange:</h3>
                <div>
                    <button className='btn-decrease' onClick={() => decreaseLife(1)}>-1</button>
                    <button className='btn-decrease' onClick={() => decreaseLife(3)}>-3</button>
                    <button className='btn-decrease' onClick={() => decreaseLife(5)}>-5</button>
                    <button className='btn-decrease' onClick={() => decreaseLife(10)}>-10</button>
                </div>

                <h3 className='title'>Custom:</h3>
                <div>
                    <button className='btn-custom' onClick={decreaseCustomCounter}>-</button>
                    <input
                        type='number'
                        placeholder='Healt'
                        value={customCounter}
                        onChange={handleInputChange}
                    />
                    <button className='btn-custom' onClick={increaseCustomCounter}>+</button>
                </div>

                <div className='btn-reset-container'>
                    <button className='btn-reset' onClick={resetLife}>Reset Hp</button>
                    <button className='btn-reset' onClick={zero}>Hp: 0</button>
                </div>

                    <div className='btn-exit-container'>
                        <button className='btn-exit' onClick={() => {setStart(false)}}>Exit</button>
                    </div>

                </div>
            </div>
        </div>
    );
}