import '../../style/styleJoin/joinHealt.css'

export const JoinHealt = ({decreaseLife, increaseLife, increaseCustomCounter, customCounter, handleInputChange,
                              resetLife, zero, setStart, decreaseCustomCounter}) => {

    return (
        <div className="App">
            <div>
                <div className='counter-container'>
                    <h3 className='title-header'>Damange/Healt</h3>
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

                </div>
            </div>
        </div>
    );
}
