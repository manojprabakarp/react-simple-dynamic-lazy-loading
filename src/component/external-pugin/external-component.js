import React, { useState } from 'react';
import './external-component.css'

function ExternalPlugin() {
    const [showResults, setShowResults] = useState(false)
    function toggle(){
        if(showResults) setShowResults(false)
        else setShowResults(true)
    }
    return (
        <div className="exteranl-popup">
            <div onClick={toggle} className="drop_header dropdown" >PopUp</div>
            { showResults ? 
                <div className="dropdown__content">
                User
                    <ul>
                    <li className="account-dropdown__segment">
                        Profile
                    </li>
                    <li className="account-dropdown__segment">
                       Favorites
                    </li>
                    <li className="account-dropdown__segment">
                        Log Out
                    </li>
                </ul>
            </div>
             : null }
            
        </div>
    );
}
export default ExternalPlugin;