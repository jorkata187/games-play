import { useState } from "react";

export default function usePersistedState(initialState) {
const [state, setState] = useState(() => {
    const persistedStateState = localStorage.getItem('auth');
    if(!persistedStateState) {
        return initialState;
    }

    const persistedStateData = JSON.parse(persistedStateState);

    return persistedStateData;
});

const setPersistedState = (data) => {
    const persistedData = JSON.stringify(data);
    
    localStorage.setItem('auth', persistedData);

    setState(data);
}

return [
    state,
    setPersistedState,
]

}