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

const cargarEstadoCajaTexto = estadoo => {
    return {
      type: "estado_caja_texto",
      estadoo
    }
};

const cargarNombreAReplicar = nombree => {
    return {
      type: "nombre_a_replicar",
      nombree
    }
};

const reemplazarMensajes = mensajess => {
    return {
      type: "reemplazar_mensajes",
      mensajess
    }
};

const actualizarEstadoUsuario = usuarioo => {
    return {
      type: "actualizar_usuario",
      usuarioo
    }
};

export {cargarUsuario, 
        cargarMensajes, 
        cargarEstadoCajaTexto, 
        cargarNombreAReplicar, 
        reemplazarMensajes,
        actualizarEstadoUsuario};