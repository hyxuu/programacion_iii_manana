/*Desafíos de Codificación de React
Componente Básico y Props:
Crea un componente funcional llamado TarjetaPerfil.
Debe aceptar dos props: nombre y titulo.
El componente debe renderizar un <h1> con el nombre y un <p> con el titulo.*/

export default function TarjetaPerfil({user}) {
  return (
    <div> <h1>{user.nombre}</h1> <p>{user.titulo}</p></div>
  );
}