import { SetMetadata } from '@nestjs/common';
/**
 * Permissions Decorator
 *
 * Decorador personalizado que permite definir los permisos
 * requeridos para acceder a un endpoint.
 *
 * Utiliza SetMetadata para asociar un arreglo de permisos
 * al handler del controlador bajo la clave 'permissions'.
 * el handler es el método específico del controlador que maneja una request HTTP.
 *
 * Estos permisos luego son leídos por el AuthGuard mediante
 * el Reflector para verificar si el usuario autenticado
 * posee las autorizaciones necesarias.
 *
 * Uso:
 *
 * @Permissions('CREAR_VENTA', 'ELIMINAR_VENTA')
 * @Post()
 * crearVenta() { ... }
 *
 * Si el usuario no tiene todos los permisos definidos,
 * el AuthGuard lanzará una ForbiddenException.
 *
 */
export const Permissions = (...permissions: string[]) =>
    SetMetadata('permissions', permissions);
