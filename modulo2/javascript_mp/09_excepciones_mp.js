try {
    console.log("Intentando acceder a un pedido inexistente");
    console.log(pedidoNoDeclarado);
} catch (error) {
    console.log("Mensaje de error:", error.message);
}

try {
    console.log("Intentando abrir menú del día...");
    throw new Error("Menú no disponible");
} catch (error) {
    console.log("Mensaje de error:", error.message);
} finally {
    console.log("Finalizando intento de abrir menú");
}
