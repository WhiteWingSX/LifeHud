import { useState } from 'react';


export const useArmor = (initialvalue = 0) => {

    const [totalMana, setTotalMana] = useState(initialvalue)
    const [mana, setMana] = useState(initialvalue)
    const [customMana, setCustomMana] = useState(0);


    const updateMana = (sp) => {
        setMana(sp)
        setTotalMana(sp)
    }

    const customConfigMana = (sp) => {
        setCustomMana(sp)
    }
    const decreaseMana = (sp) => {
        if (mana <= 0) {
            setMana(initialvalue);
        } else {
            setMana((currentLife) => Math.max(currentLife - sp, 0));
        }
    };

    const increaseMana = (sp) => {
        setMana((currentLife) => currentLife + sp);
        setMana((currentLife) => Math.min(currentLife, totalMana));
    };

    const resetMana = () => {
        setMana(totalMana)
    }

    const cero = () => {
        setMana(initialvalue)
    }

    const increaseCustomMana = () => {
        setMana((currentLife) => currentLife + customMana);
        setMana((currentLife) => Math.min(currentLife, totalMana));
    };

    const decreaseCustomMana = () => {
        if (mana <= 0) {
            setMana(initialvalue);
        } else {
            setMana((currentLife) => Math.max(currentLife - customMana, 0));
        }
    };


    return{
        mana,
        totalMana,
        customMana,
        updateMana,
        customConfigMana,
        decreaseMana,
        increaseMana,
        resetMana,
        cero,
        increaseCustomMana,
        decreaseCustomMana,
    }
}