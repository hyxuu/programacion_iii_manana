import { useState, useDeferredValue } from 'react';

export default function FormDiferido() {
  const [access, setAccess] = useState(false);
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const emailDiferido = useDeferredValue(email);

  const esValido = emailDiferido.includes("@") && emailDiferido.includes(".");

  const handleLogin = () => {
    if (esValido && password.length > 0) {
      setAccess(true);
    }
  };

  return (
    <div>
      {!access ? (
        <>
          <input 
            type="email" 
            value={email} 
            placeholder="Ingrese su email" 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <p style={{ color: esValido ? 'lightgreen' : 'salmon' }}>
            {esValido ? 'Email válido' : 'Email inválido'}
          </p>

          <input 
            type="text" 
            value={nombres} 
            placeholder="Ingrese su nombre" 
            onChange={(e) => setNombres(e.target.value)} 
          />

          <input 
            type="text" 
            value={apellidos} 
            placeholder="Ingrese su apellido" 
            onChange={(e) => setApellidos(e.target.value)} 
          />

          <input 
            type="password" 
            value={password} 
            placeholder="Ingrese su contraseña" 
            onChange={(e) => setPassword(e.target.value)} 
          />
          
          <button onClick={handleLogin}>Entrar</button>
        </>
      ) : (
        <p>Bienvenido, {nombres}!</p>
      )}
    </div>
  );
}