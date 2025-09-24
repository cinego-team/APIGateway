export const config = {
    MSUsuariosUrls: {
        baseUrl: 'http://localhost:3000',
        login: '/usuarios/login',
        register: '/usuarios/register',
        refreshToken: '/usuarios/refresh-token',
        getDatosClienteById: (id: number) => `/usuarios/datos-cliente/${id}`,
        getDatosEmpleadoById: (id: number) => `/usuarios/datos-empleado/${id}`,
        verificarExistenciaTipoClienteById: (id: number) =>
            `/tipo-cliente/validar-existencia/${id}`,
    },
    MSFuncionesUrls: {
        baseUrl: 'http://localhost:3001',
    },
    MSPeliculasUrls: {
        baseUrl: 'http://localhost:3002',
        getPeliculaById: (id: number) => `/pelicula/${id}`,
    },
    MSVentasUrls: {
        baseUrl: 'http://localhost:3003',
    },
    MSPromocionesUrls: {
        baseUrl: 'http://localhost:3004',
    },
};
