import TapButton from './TapButton.jsx';
import { useState } from 'react';
import { EXAMPLES } from '../data';

export default function Button() {
    const [name, setName] = useState('')
    
    function onChange(name){
        setName(name)
    }
    
    let myExamp = 'Click on a button';
    
    if (name) {
        myExamp = (
            <>
            <h3>{EXAMPLES[name].title}</h3>
            <p>{EXAMPLES[name].description}</p>
            <pre><code>{EXAMPLES[name].code}</code></pre>
            </>
        )
        
    }
    
    return (
        <>
        <menu>
            <TapButton 
            onClick={() => onChange('components')} 
            isSelected={name === 'components'}>Components </TapButton>
            <TapButton 
            onClick={() => onChange('jsx')} 
            isSelected={name === 'jsx'} >Jsx</TapButton>
            <TapButton 
            onClick={() => onChange('props')} 
            isSelected={name === 'props'} >Props</TapButton>
            <TapButton 
            onClick={() => onChange('state')} 
            isSelected={name === 'state'} >State</TapButton>
        </menu>
            <div id='tab-content'>
                {myExamp}
            </div>
        </>
    )
}