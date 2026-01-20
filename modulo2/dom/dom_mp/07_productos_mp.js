const productos = [
  { nombre: "Ceviche", descripcion: "De camarón fresco con limón y cebolla", precio: 8.5, existencia: 15, ubicacion: "Cocina Fría" },
  { nombre: "Parrillada Mixta", descripcion: "Carne, pollo y chorizo al carbón", precio: 14.0, existencia: 10, ubicacion: "Parrilla Central" },
  { nombre: "Ensalada Andina", descripcion: "Con quinua, aguacate y vegetales frescos", precio: 6.5, existencia: 20, ubicacion: "Cocina Fría" },
  { nombre: "Lomo Fino", descripcion: "Corte premium en salsa de vino tinto", precio: 18.0, existencia: 8, ubicacion: "Cocina Caliente" },
  { nombre: "Jugos Naturales", descripcion: "Fresa, mora, piña o naranjilla", precio: 3.0, existencia: 25, ubicacion: "Bar de Bebidas" },
  { nombre: "Café de Altura", descripcion: "Café ecuatoriano artesanal", precio: 2.5, existencia: 30, ubicacion: "Área de Bebidas" },
  { nombre: "Postre Cumbre", descripcion: "Mousse de chocolate con frutos rojos", precio: 5.5, existencia: 12, ubicacion: "Repostería" },
  { nombre: "Sopa del Día", descripcion: "Preparación especial del chef", precio: 4.0, existencia: 18, ubicacion: "Cocina Caliente" },
  { nombre: "Filete de Pescado", descripcion: "A la plancha con salsa de maracuyá", precio: 13.0, existencia: 9, ubicacion: "Cocina Caliente" },
  { nombre: "Té de Hierbas", descripcion: "Infusión natural de la casa", precio: 2.0, existencia: 22, ubicacion: "Área de Bebidas" }
];

const tabla = document.getElementById('cuerpoTabla');
productos.forEach(p => {
  const fila = document.createElement('tr');
  fila.innerHTML = `
    <td>${p.nombre}</td>
    <td>${p.descripcion}</td>
    <td>$${p.precio.toFixed(2)}</td>
    <td>${p.existencia}</td>
    <td>${p.ubicacion}</td>
  `;
  tabla.appendChild(fila);
});
