import '../../style/stats/stats.css'

export const Stats = ({ playerName, updatePlayerName, life, updateLife, mana, updateMana, setStart }) => {

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

            <h3>Life Point</h3>
            <input
                className='data-input'
                type='number'
                placeholder='Hp'
                value={life}
                onChange={(e) => updateLife(e.target.value)}
            />

            <h3>Mana</h3>
            <input
                className='data-input'
                type='number'
                placeholder='Sp'
                value={mana}
                onChange={(e) => updateMana(e.target.value)}/>

            <div className='btn-exit-container'>
                <button className='btn-exit' onClick={() => {setStart(true)}}>Start</button>
            </div>
        </div>
    );
}