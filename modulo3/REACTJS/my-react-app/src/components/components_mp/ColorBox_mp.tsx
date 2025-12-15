import { useState } from 'react';

export default function ColorBox_mp(){
    const [color, setColor]= useState('Yellow');
    return(
        <>
          <div style={{ width: 100, height:100, backgroundColor:color }}></div>
          <button onClick={()=> setColor('salmon')}>Cambiar color del menú</button>
        </>
    );
}
