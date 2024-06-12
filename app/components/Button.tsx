"use-client"
import React from 'react'
import { useState } from 'react';

type Props = {
    languages: Array<String>,
}

function Button({languages }: Props) {
    const [active, setActive] = useState(false);
    
    return (
        <div>
            {
                active?  
                <button className=' btn btn-neutral cursor-pointer' onClick={()=>{
                    setActive(prev => !prev);
                }}>
                    Language
                </button>
                :
                <ul className='flex flex-row justify-center' onClick={()=>setActive(prev => !prev)}>
                    {
                    languages.map((language) => (
                        <li className='block'>{language}</li>
                    ))
                    }
                </ul>
            }
        </div>
        
      )
}

export default Button