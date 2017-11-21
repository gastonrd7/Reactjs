const cargarUsuario = user => {
    return {
      type: "cargar_usuario",
      user
    }
};

export {cargarUsuario};