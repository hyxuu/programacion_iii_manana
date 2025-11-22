interface Empleado {
    id: number;
    nombre: string;
    correo?: string;
}
const empleado1: Empleado = {
    id: 12,
    nombre: 'Carlos Ramírez'
}
const empleado2: Empleado = {
    id: 13,
    nombre: 'María Torres',
    correo: 'mariaejemplo@restaurantecumbre.com'
}
console.log(empleado1);
console.log(empleado1.id);
console.log(empleado1.nombre);
console.log(empleado1.correo);
console.log(empleado2);
console.log(empleado2.id);
console.log(empleado2.nombre);
console.log(empleado2.correo);
