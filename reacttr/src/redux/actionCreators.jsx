const cargarUsuario = user => {
    return {
      type: "cargar_usuario",
      user
    }
};

const cargarMensajes = mensajesssss => {
    return {
      type: "cargar_mensajes",
      mensajesssss
    }
};

export {cargarUsuario, cargarMensajes};