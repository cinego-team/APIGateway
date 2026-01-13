import { Body, Controller, Delete, Get, Headers, Patch,Param, Post, Put, UseGuards } from '@nestjs/common';
import { MicroservicioPeliculasService } from './microservicio_peliculas.service';
import { AuthGuard } from 'src/middleware/auth.middleware';

@UseGuards(AuthGuard)
@Controller('microservicio-peliculas')
export class MicroservicioPeliculasController {
    constructor(private readonly service: MicroservicioPeliculasService) { }

    @Get('peliculas')
    getAllPeliculas(
        @Headers('authorization') access_token: string,
        @Headers('refresh-token') refresh_token: string
    ) {
        return this.service.getAllPeliculas(access_token, refresh_token);
    }

    @Get('pelicula/:id')
    getPeliculaById(@Param('id') id: number) {
        return this.service.getPeliculaById(id);
    }

    @Post('pelicula/new')
    registrarPelicula(@Body() peliculaBody) {
        return this.service.registrarPelicula(peliculaBody);
    }

    @Put('pelicula/:id')
    actualizarPelicula(@Param('id') id: number, @Body() peliculaBody) {
        return this.service.actualizarPelicula(id, peliculaBody);
    }

    @Delete('pelicula/:id')
    eliminarPelicula(@Param('id') id: number) {
        return this.service.eliminarPelicula(id);
    }


    @Patch('pelicula/:id/poner-en-cartelera')
    ponerEnCartelera(
    @Param('id') id: number
    ) {
    return this.service.ponerEnCartelera(id);
    }

    @Patch('pelicula/:id/sacar-de-cartelera')
    sacarDeCartelera(
    @Param('id') id: number
    ) {
    return this.service.sacarDeCartelera(id);
    }

    // ADMIN

    @Get('pelicula/admin/selec')
    getPeliculasParaSelec() {
    return this.service.getPeliculasParaSelec();
    }

    @Get('pelicula/admin/all')
    getPeliculasAdmin() {
    return this.service.getPeliculasAdmin();
    }

    @Get('pelicula/admin/:id')
    getPeliculaAdminById(
    @Param('id') id: number
    ) {
    return this.service.getPeliculaAdminById(id);
    }

    @Post('pelicula/admin/new')
    crearPeliculaAdmin(@Body() body) {
    return this.service.crearPeliculaAdmin(body);
    }

    @Put('pelicula/admin/:id')
    actualizarPeliculaAdmin(
    @Param('id') id: number,
    @Body() body
    ) {
    return this.service.actualizarPeliculaAdmin(id, body);
    }

    @Delete('pelicula/admin/:id')
    eliminarPeliculaAdmin(
    @Param('id') id: number
    ) {
    return this.service.eliminarPeliculaAdmin(id);
    }


    @Post('genero/new')
    registrarGenero(@Body() generoBody) {
        return this.service.registrarGenero(generoBody);
    }

    @Put('genero/:id')
    actualizarGenero(@Param('id') id: number, @Body() generoBody) {
        return this.service.actualizarGenero(id, generoBody);
    }

    @Get('generos')
    getAllGeneros() {
        return this.service.getAllGeneros();
    }

    @Get('genero/:id')
    getGeneroById(@Param('id') id: number) {
        return this.service.getGeneroById(id);
    }

    @Delete('genero/:id')
    eliminarGenero(@Param('id') id: number) {
        return this.service.eliminarGenero(id);
    }

    @Post('genero/admin/new')
    crearGenero(@Body() body) {
    return this.service.registrarGenero(body);
    }

    @Get('genero/admin/all')
    getAllGenerosAdmin() {
    return this.service.getAllGenerosAdmin();
    }

    @Get('genero/admin/:id')
    getGeneroAdminById(
    @Param('id') id: number
    ) {
    return this.service.getGeneroAdminById(id);
    }

    @Put('genero/admin/:id')
    actualizarGeneroAdmin(
    @Param('id') id: number,
    @Body() body
    ) {
    return this.service.actualizarGeneroAdmin(id, body);
    }

    @Patch('genero/:id')
    actualizarGeneroParcial(
    @Param('id') id: number,
    @Body() body
    ) {
    return this.service.actualizarGeneroParcial(id, body);
    }

    @Delete('genero/admin/:id')
    eliminarGeneroAdmin(
    @Param('id') id: number
    ) {
    return this.service.eliminarGeneroAdmin(id);
    }



    @Post('clasificacion/new')
    agregarClasificacion(@Body() clasificacionBody) {
        return this.service.registrarClasificacion(clasificacionBody);
    }

    @Put('clasificacion/:id')
    actualizarClasificacion(
        @Param('id') id: number,
        @Body() clasificacionBody,
    ) {
        return this.service.actualizarClasificacion(id, clasificacionBody);
    }

    @Get('clasificaciones')
    getAllClasificaciones() {
        return this.service.getAllClasificaciones();
    }

    @Get('clasificacion/:id')
    getClasificacionById(@Param('id') id: number) {
        return this.service.getClasificacionById(id);
    }

    @Delete('clasificacion/:id')
    eliminarClasificacion(@Param('id') id: number) {
        return this.service.eliminarClasificacion(id);
    }

    @Post('clasificacion/admin/new')
    crearClasificacion(@Body() body) {
    return this.service.crearClasificacion(body);
    }

    @Get('clasificacion/admin/all')
    getAllClasificacionesAdmin() {
    return this.service.getAllClasificacionesAdmin();
    }

    @Get('clasificacion/admin/:id')
    getClasificacionAdminById(
    @Param('id') id: number
    ) {
    return this.service.getClasificacionAdminById(id);
    }

    @Put('clasificacion/admin/:id')
    actualizarClasificacionAdmin(
    @Param('id') id: number,
    @Body() body
    ) {
    return this.service.actualizarClasificacionAdmin(id, body);
    }

    @Patch('clasificacion/:id')
    actualizarClasificacionParcial(
    @Param('id') id: number,
    @Body() body
    ) {
    return this.service.actualizarClasificacionParcial(id, body);
    }

    @Delete('clasificacion/admin/:id')
    eliminarClasificacionAdmin(
    @Param('id') id: number
    ) {
    return this.service.eliminarClasificacionAdmin(id);
    }


    @Post('estado-pelicula/new')
    registrarEstadoPelicula(@Body() estadoPeliculaBody) {
        return this.service.registrarEstadoPelicula(estadoPeliculaBody);
    }

    @Put('estado-pelicula/:id')
    actualizarEstadoPelicula(
        @Param('id') id: number,
        @Body() estadoPeliculaBody,
    ) {
        return this.service.actualizarEstadoPelicula(id, estadoPeliculaBody);
    }

    @Get('estados-pelicula')
    getAllEstadosPeliculas() {
        return this.service.getAllEstadosPelicula();
    }

    @Get('estado-pelicula/:id')
    getEstadoPeliculaById(@Param('id') id: number) {
        return this.service.getEstadoPeliculaById(id);
    }

    @Delete('estado-pelicula/:id')
    eliminarEstadoPelicula(@Param('id') id: number) {
        return this.service.eliminarEstadoPelicula(id);
    }


    @Post('estado-pelicula/admin/new')
    crearEstadoPelicula(@Body() body) {
    return this.service.crearEstadoPelicula(body);
    }

    @Get('estado-pelicula/admin/all')
    getAllEstadosPeliculasAdmin() {
    return this.service.getAllEstadosPeliculasAdmin();
    }

    @Get('estado-pelicula/admin/:id')
    getEstadoPeliculaAdminById(
    @Param('id') id: number
    ) {
    return this.service.getEstadoPeliculaAdminById(id);
    }

    @Put('estado-pelicula/admin/:id')
    actualizarEstadoPeliculaAdmin(
    @Param('id') id: number,
    @Body() body
    ) {
    return this.service.actualizarEstadoPeliculaAdmin(id, body);
    }

    @Patch('estado-pelicula/:id')
    actualizarEstadoPeliculaParcial(
    @Param('id') id: number,
    @Body() body
    ) {
    return this.service.actualizarEstadoPeliculaParcial(id, body);
    }

    @Delete('estado-pelicula/admin/:id')
    eliminarEstadoPeliculaAdmin(
    @Param('id') id: number
    ) {
    return this.service.eliminarEstadoPeliculaAdmin(id);
    }


   
}
