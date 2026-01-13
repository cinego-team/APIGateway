import { Controller, Get,Put, Delete, Post, Patch,Body, Headers, Param, UseGuards } from '@nestjs/common';
import { MicroservicioFuncionesYSalasService } from './microservicio_funciones-y-salas.service';
import { AuthGuard } from 'src/middleware/auth.middleware';

@UseGuards(AuthGuard)
@Controller('microservicio-funciones-y-salas')
export class MicroservicioFuncionesYSalasController {
    constructor(private service: MicroservicioFuncionesYSalasService) { }
    @Get('funciones-por-pelicula/:id')
    findAllByPeliculaId(
        @Param('id') id: number,
        @Headers('authorization') access_token: string,
        @Headers('refresh-roken') refresh_token: string) {
        return this.service.findAllByPeliculaId(id, access_token, refresh_token);
    }
    @Get('butaca-por-funcion/:id')
    findAllDisponibilidadByFuncionId(@Param('id') id: number) {
        return this.service.findAllDisponibilidadByFuncionId(id);
    }

    @Get('funcion/:id')
    getFuncionById(@Param('id') id: number) {
        return this.service.getFuncionById(id);
    }
    //butaca
    @Get('butaca')
    getAllButacas() {
        return this.service.getAllButacas();
    }

    @Get('butaca/:id')
    getButacaById(@Param('id') id: number) {
        return this.service.getButacaById(id);
    }

    @Put('butaca/:id')
    updateButaca(
        @Param('id') id: number,
        @Body() body
    ) {
        return this.service.updateButaca(id, body);
    }

    @Delete('butaca/:id')
    deleteButaca(@Param('id') id: number) {
        return this.service.deleteButaca(id);
    }
    //disponibilidad butaca 

    @Get('disponibilidad-butaca')
    getAllDisponibilidadButaca() {
    return this.service.getAllDisponibilidadButaca();
    }

    @Get('disponibilidad-butaca/:id')
    getDisponibilidadButacaById(
    @Param('id') id: number
    ) {
    return this.service.getDisponibilidadButacaById(id);
    }

    @Put('disponibilidad-butaca/:id')
    updateDisponibilidadButaca(
    @Param('id') id: number,
    @Body() body
    ) {
    return this.service.updateDisponibilidadButaca(id, body);
    }

    @Patch('disponibilidad-butaca/reservar')
    reservarButacas(
    @Body() body: { disponibilidadButacaIds: number[] }
    ) {
    return this.service.reservarButacas(body);
    }

    @Patch('disponibilidad-butaca/ocupar')
    ocuparButacas(
    @Body() body: { disponibilidadButacaIds: number[] }
    ) {
    return this.service.ocuparButacas(body);
    }

    @Delete('disponibilidad-butaca/:id')
    deleteDisponibilidadButaca(
    @Param('id') id: number
    ) {
    return this.service.deleteDisponibilidadButaca(id);
    }

    // FILA
    @Get('fila')
    getAllFilas() {
    return this.service.getAllFilas();
    }

    @Get('fila/:id')
    getFilaById(
    @Param('id') id: number
    ) {
    return this.service.getFilaById(id);
    }

    @Put('fila/:id')
    updateFila(
    @Param('id') id: number,
    @Body() body
    ) {
    return this.service.updateFila(id, body);
    }

    @Delete('fila/:id')
    deleteFila(
    @Param('id') id: number
    ) {
    return this.service.deleteFila(id);
    }
// FORMATO
    @Post('formato/admin/new')
    createFormato(@Body() body) {
    return this.service.createFormato(body);
    }

    @Get('formato')
    getAllFormatos() {
    return this.service.getAllFormatos();
    }

    @Get('formato/:id')
    getFormatoById(
    @Param('id') id: number
    ) {
    return this.service.getFormatoById(id);
    }

    @Put('formato/admin/:id')
    updateFormato(
    @Param('id') id: number,
    @Body() body
    ) {
    return this.service.updateFormato(id, body);
    }

    @Delete('formato/admin/:id')
    deleteFormato(
    @Param('id') id: number
    ) {
    return this.service.deleteFormato(id);
    }

    @Get('formato/admin/all')
    getAllFormatosAdmin() {
    return this.service.getAllFormatosAdmin();
    }

    @Get('formato/admin/:id')
    getFormatoAdminById(
    @Param('id') id: number
    ) {
    return this.service.getFormatoAdminById(id);
    }

    @Get('formato/:id/admin')
    getFormatoForPut(
    @Param('id') id: number
    ) {
    return this.service.getFormatoForPut(id);
    }

// IDIOMA
    @Post('idioma/admin/new')
    createIdioma(@Body() body) {
    return this.service.createIdioma(body);
    }

    @Get('idioma/admin/all')
    getAllIdiomas(
    ) {
    return this.service.getAllIdiomas();
    }

    @Get('idioma/admin/:id')
    getIdiomaById(
    @Param('id') id: number
    ) {
    return this.service.getIdiomaById(id);
    }

    @Put('idioma/admin/:id')
    updateIdioma(
    @Param('id') id: number,
    @Body() body
    ) {
    return this.service.updateIdioma(id, body);
    }

    @Patch('idioma/:id')
    updateIdiomaPartial(
    @Param('id') id: number,
    @Body() body
    ) {
    return this.service.updateIdiomaPartial(id, body);
    }

    @Delete('idioma/admin/:id')
    deleteIdioma(
    @Param('id') id: number
    ) {
    return this.service.deleteIdioma(id);
    }

// SALA
    @Post('salas/admin/new')
    createSala(@Body() body) {
    return this.service.createSala(body);
    }

    @Get('salas')
    getAllSalas() {
    return this.service.getAllSalas();
    }

    @Get('salas/admin/:id')
    getSalaById(
    @Param('id') id: number
    ) {
    return this.service.getSalaById(id);
    }

    @Put('salas/admin/:id')
    updateSala(
    @Param('id') id: number,
    @Body() body
    ) {
    return this.service.updateSala(id, body);
    }

    @Delete('salas/admin/:id')
    deleteSala(
    @Param('id') id: number
    ) {
    return this.service.deleteSala(id);
    }

    @Get('salas/admin/selec')
    getSalasForSelect() {
    return this.service.getSalasForSelect();
    }

    @Get('salas/admin/all')
    getAllSalasAdmin() {
    return this.service.getAllSalasAdmin();
    }


}
