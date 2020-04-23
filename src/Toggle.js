import React, { useState } from 'react';
import SearchGames from './SearchGames';

const Toggle = () => {
    const [isToggled, setToggle] = useState(false);
    return (
        <div>
            <button onClick={() => setToggle(!isToggled)}>Open search</button>
            {isToggled && <SearchGames setToggle={setToggle} />}
        </div>
        
    );
};

export default Toggle;