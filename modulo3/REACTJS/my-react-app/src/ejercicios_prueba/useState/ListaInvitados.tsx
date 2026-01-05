import { useState } from 'react';

export default function ListaInvitados(){
    const[invitados, setInvitados] = useState(["Ana", "Beto","Carla", "David"]);

    return(
        <div>
            <ul>
                {invitados.map((items, index) => <li key={index}>{items}
                    <button type='button' onClick={
                        ()=> setInvitados(invitados.filter((_,i) => i !== index))}>
                            Borrar
                        </button>
                </li>)}
            </ul>
        </div>
    )
}