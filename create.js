Lógica para el formulario de creación de datos
function createRecord(data) {
    console.log("Insertando en la base de datos:", data);
    return { status: 200, message: "Registro creado" };
}
