import { useEffect, useState } from 'react';


export const useHealt = (initialvalue = 0) => {

    const [playerName, setPlayerName] = useState('Player')
    const [totalBar, setTotalBar] = useState(initialvalue)
    const [life, setLife] = useState(initialvalue)
    const [customCounter, setCustomCounter] = useState(0);


    const updatePlayerName = (name) => {
        setPlayerName(name)
    }

    const updateLife = (hp) => {
        setLife(hp)
        setTotalBar(hp)
    }

    const customConfig = (hp) => {
        setCustomCounter(hp)
    }
    const decreaseLife = (hp) => {
        if (life <= 0) {
            setLife(initialvalue);
        } else {
            setLife((currentLife) => Math.max(currentLife - hp, 0));
        }
    };

    const increaseLife = (hp) => {
        setLife((currentLife) => currentLife + hp);
        setLife((currentLife) => Math.min(currentLife, totalBar));
    };

    const resetLife = () => {
        setLife(totalBar)
    }

    const zero = () => {
        setLife(initialvalue)
    }

    const increaseCustomCounter = () => {
        setLife((currentLife) => currentLife + customCounter);
        setLife((currentLife) => Math.min(currentLife, totalBar));
    };

    const decreaseCustomCounter = () => {
        if (life <= 0) {
            setLife(initialvalue);
        } else {
            setLife((currentLife) => Math.max(currentLife - customCounter, 0));
        }
    };


    return{
        playerName,
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
    }
}