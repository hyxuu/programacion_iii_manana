
export default function UserCard({ user }) {
  return <div>{user.name} - {user.age} - {user.apellido} - {user.direccion} - {user.telefono}años</div>;
}
