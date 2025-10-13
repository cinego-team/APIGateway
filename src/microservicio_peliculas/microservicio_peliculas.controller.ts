import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { MicroservicioPeliculasService } from './microservicio_peliculas.service';

@Controller('microservicio-peliculas')
export class MicroservicioPeliculasController {
    constructor(private readonly service: MicroservicioPeliculasService) {}

    @Get('peliculas')
    getAllPeliculas() {
        return this.service.getAllPeliculas();
    }

    @Get('pelicula/:id')
    getPeliculaById(@Param('id') id: number) {
        return this.service.getPeliculaById(id);
    }

    @Post('pelicula')
    registrarPelicula(@Body() peliculaBody) {
        return this.service.registrarPelicula(peliculaBody);
    }

    @Put('pelicula/:id')
    actualizarPelicula(@Param('id') id: number, @Body() peliculaBody) {
        return this.service.actualizarPelicula(id, peliculaBody);
    }

    @Post('genero')
    registrarGenero(@Body() generoBody) {
        return this.service.registrarGenero(generoBody);
    }

    @Put('genero/:id')
    actualizarGenero(@Param('id') id: number, @Body() generoBody) {
        return this.service.actualizarGenero(id, generoBody);
    }

    @Get('genero')
    getAllGeneros() {
        return this.service.getAllGeneros();
    }

    @Post('idioma')
    agregarIdioma(@Body() idiomaBody) {
        return this.service.registrarIdioma(idiomaBody);
    }

    @Put('idioma/:id')
    actualizarIdioma(@Param('id') id: number, @Body() idiomaBody) {
        return this.service.actualizarIdioma(id, idiomaBody);
    }

    @Get('idioma')
    getAllIdiomas() {
        return this.service.getAllIdiomas();
    }

    @Post('clasificacion')
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

    @Get('clasificacion')
    getAllClasificaciones() {
        return this.service.getAllClasificaciones();
    }

    @Post('estado-pelicula')
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

    @Get('estado-pelicula')
    getAllEstadosPeliculas() {
        return this.service.getAllEstadosPelicula();
    }

    @Post('formato')
    registrarFormato(@Body() formatoBody) {
        return this.service.registrarFormato(formatoBody);
    }

    @Put('formato/:id')
    actualizarFormato(@Param('id') id: number, @Body() formatoBody) {
        return this.service.actualizarFormato(id, formatoBody);
    }

    @Get('formato')
    getAllFormatos() {
        return this.service.getAllFormatos();
    }

    @Post('sala')
    registrarSala(@Body() salaBody) {
        return this.service.registrarSala(salaBody);
    }

    @Put('sala/:id')
    actualizarSala(@Param('id') id: number, @Body() salaBody) {
        return this.service.actualizarSala(id, salaBody);
    }

    @Get('sala')
    getAllSalas() {
        return this.service.getAllSalas();
    }

    @Post('funcion')
    registrarFuncion(@Body() funcionBody) {
        return this.service.registrarFuncion(funcionBody);
    }

    @Put('funcion/:id')
    actualizarFuncion(@Param('id') id: number, @Body() funcionBody) {
        return this.service.actualizarFuncion(id, funcionBody);
    }

    @Get('funcion')
    getAllFunciones() {
        return this.service.getAllFunciones();
    }

    @Post('fila')
    registrarFila(@Body() filaBody) {
        return this.service.registrarFila(filaBody);
    }

    @Put('fila/:id')
    actualizarFila(@Param('id') id: number, @Body() filaBody) {
        return this.service.actualizarFila(id, filaBody);
    }

    @Get('fila')
    getAllFilas() {
        return this.service.getAllFilas();
    }

    @Post('butaca')
    registrarButaca(@Body() butacaBody) {
        return this.service.registrarButaca(butacaBody);
    }

    @Put('butaca/:id')
    actualizarButaca(@Param('id') id: number, @Body() butacaBody) {
        return this.service.actualizarButaca(id, butacaBody);
    }

    @Get('butaca')
    getAllButacas() {
        return this.service.getAllButacas();
    }
}
