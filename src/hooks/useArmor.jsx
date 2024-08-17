import { useState } from 'react';


export const useArmor = (initialvalue = 0) => {

    const [totalArmor, setTotalArmor] = useState(initialvalue)
    const [armor, setArmor] = useState(initialvalue)
    const [customArmor, setCustomArmor] = useState(0);


    const updateArmor = (ar) => {
        setArmor(ar)
        setTotalArmor(ar)
    }

    const customConfigArmor = (ar) => {
        setCustomArmor(ar)
    }
    const decreaseArmor = (ar) => {
        if (armor <= 0) {
            setArmor(initialvalue);
        } else {
            setArmor((currentLife) => Math.max(currentLife - ar, 0));
        }
    };

    const increaseArmor = (ar) => {
        setArmor((currentLife) => currentLife + ar);
        setArmor((currentLife) => Math.min(currentLife, totalArmor));
    };

    const resetArmor = () => {
        setArmor(totalArmor)
    }

    const zeroArmor = () => {
        setArmor(initialvalue)
    }

    const increaseCustomArmor = () => {
        setArmor((currentLife) => currentLife + customArmor);
        setArmor((currentLife) => Math.min(currentLife, totalArmor));
    };

    const decreaseCustomArmor = () => {
        if (armor <= 0) {
            setArmor(initialvalue);
        } else {
            setArmor((currentLife) => Math.max(currentLife - customArmor, 0));
        }
    };


    return{
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
    }
}
