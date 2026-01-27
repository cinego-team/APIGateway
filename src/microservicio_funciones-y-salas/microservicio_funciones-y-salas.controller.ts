import {
    Controller,
    Get,
    Put,
    Delete,
    Post,
    Patch,
    Body,
    Headers,
    Param,
    UseGuards,
} from '@nestjs/common';
import { MicroservicioFuncionesYSalasService } from './microservicio_funciones-y-salas.service';
import { AuthGuard } from 'src/middleware/auth.middleware';
import { Permissions } from 'src/middleware/decorators/permissions.decorator';
import { Req } from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common';
@UseGuards(AuthGuard)
@Controller('microservicio-funciones-y-salas')
export class MicroservicioFuncionesYSalasController {
    constructor(private service: MicroservicioFuncionesYSalasService) {}
    @Get('funciones-por-pelicula/:id')
    findAllByPeliculaId(
        @Param('id') id: number,
        @Headers('authorization') access_token: string,
        @Headers('refresh-roken') refresh_token: string,
    ) {
        return this.service.findAllByPeliculaId(
            id,
            access_token,
            refresh_token,
        );
    }

    @UseGuards(AuthGuard)
    @Permissions('EMPLEADO')
    @Delete('funcion/admin/:id')
    deleteFuncion(@Param('id') id: number) {
        return this.service.deleteFuncion(id);
    }

    @UseGuards(AuthGuard)
    @Permissions('EMPLEADO')
    @Post('funcion/admin/new')
    createFuncion(@Body() body, @Req() req) {
        console.log('REQ.USER:', req.user);
        return this.service.createFuncion(body, req.user);
    }

    @UseGuards(AuthGuard)
    @Permissions('EMPLEADO')
    @Put('funcion/admin/edit/:id')
    updateFuncion(@Param('id') id: number, @Body() body, @Req() req) {
        return this.service.updateFuncion(id, body, req.user);
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
    updateButaca(@Param('id') id: number, @Body() body) {
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
    getDisponibilidadButacaById(@Param('id') id: number) {
        return this.service.getDisponibilidadButacaById(id);
    }

    @Put('disponibilidad-butaca/:id')
    updateDisponibilidadButaca(@Param('id') id: number, @Body() body) {
        return this.service.updateDisponibilidadButaca(id, body);
    }

    @Patch('disponibilidad-butaca/reservar')
    reservarButacas(@Body() body: { disponibilidadButacaIds: number[] }) {
        return this.service.reservarButacas(body);
    }

    @Patch('disponibilidad-butaca/ocupar')
    ocuparButacas(@Body() body: { disponibilidadButacaIds: number[] }) {
        return this.service.ocuparButacas(body);
    }

    @Delete('disponibilidad-butaca/:id')
    deleteDisponibilidadButaca(@Param('id') id: number) {
        return this.service.deleteDisponibilidadButaca(id);
    }

    // FILA
    @Get('fila')
    getAllFilas() {
        return this.service.getAllFilas();
    }

    @Get('fila/:id')
    getFilaById(@Param('id') id: number) {
        return this.service.getFilaById(id);
    }

    @Put('fila/:id')
    updateFila(@Param('id') id: number, @Body() body) {
        return this.service.updateFila(id, body);
    }

    @Delete('fila/:id')
    deleteFila(@Param('id') id: number) {
        return this.service.deleteFila(id);
    }
    // FORMATO
    @UseGuards(AuthGuard)
    @Permissions('EMPLEADO')
    @Post('formato/admin/new')
    createFormato(@Body() body) {
        return this.service.createFormato(body);
    }

    @Get('formato')
    getAllFormatos() {
        return this.service.getAllFormatos();
    }

    @Get('formato/:id')
    getFormatoById(@Param('id') id: number) {
        return this.service.getFormatoById(id);
    }
    @UseGuards(AuthGuard)
    @Permissions('EMPLEADO')
    @Put('formato/admin/:id')
    updateFormato(@Param('id') id: number, @Body() body) {
        return this.service.updateFormato(id, body);
    }

    @UseGuards(AuthGuard)
    @Permissions('EMPLEADO')
    @Delete('formato/admin/:id')
    deleteFormato(@Param('id') id: number) {
        return this.service.deleteFormato(id);
    }

    @UseGuards(AuthGuard)
    @Permissions('EMPLEADO')
    @Get('formato/admin/all')
    getAllFormatosAdmin() {
        return this.service.getAllFormatosAdmin();
    }

    @UseGuards(AuthGuard)
    @Permissions('EMPLEADO')
    @Get('formato/admin/:id')
    getFormatoAdminById(@Param('id') id: number) {
        return this.service.getFormatoAdminById(id);
    }
    @UseGuards(AuthGuard)
    @Permissions('EMPLEADO')
    @Get('formato/:id/admin')
    getFormatoForPut(@Param('id') id: number) {
        return this.service.getFormatoForPut(id);
    }

    // IDIOMA
    @UseGuards(AuthGuard)
    @Permissions('EMPLEADO')
    @Post('idioma/admin/new')
    createIdioma(@Body() body) {
        return this.service.createIdioma(body);
    }
    @UseGuards(AuthGuard)
    @Permissions('EMPLEADO')
    @Get('idioma/admin/all')
    getAllIdiomas() {
        return this.service.getAllIdiomas();
    }
    @UseGuards(AuthGuard)
    @Permissions('EMPLEADO')
    @Get('idioma/admin/:id')
    getIdiomaById(@Param('id') id: number) {
        return this.service.getIdiomaById(id);
    }

    @UseGuards(AuthGuard)
    @Permissions('EMPLEADO')
    @Put('idioma/admin/:id')
    updateIdioma(@Param('id') id: number, @Body() body) {
        return this.service.updateIdioma(id, body);
    }

    @Patch('idioma/:id')
    updateIdiomaPartial(@Param('id') id: number, @Body() body) {
        return this.service.updateIdiomaPartial(id, body);
    }
    @UseGuards(AuthGuard)
    @Permissions('EMPLEADO')
    @Delete('idioma/admin/:id')
    deleteIdioma(@Param('id') id: number) {
        return this.service.deleteIdioma(id);
    }

    // SALA
    @Post('salas/admin/new')
    @UseGuards(AuthGuard)
    @Permissions('EMPLEADO')
    createSala(@Body() body, @Headers('authorization') authorization: string) {
        return this.service.createSala(body, authorization);
    }

    @UseGuards(AuthGuard)
    @Permissions('EMPLEADO')
    @Get('salas/admin/all')
    getAllSalasAdmin(@Req() req: any) {
        return this.service.getAllSalasAdmin(req);
    }
    @UseGuards(AuthGuard)
    @Permissions('EMPLEADO')
    @Get('salas/admin/selec')
    getSalasForSelect() {
        return this.service.getSalasForSelect();
    }
    @UseGuards(AuthGuard)
    @Permissions('EMPLEADO')
    @Get('salas/admin/:id')
    getSalaById(@Param('id') id: number) {
        return this.service.getSalaById(id);
    }
    @UseGuards(AuthGuard)
    @Permissions('EMPLEADO')
    @Put('salas/admin/:id')
    updateSala(@Param('id') id: number, @Body() body) {
        return this.service.updateSala(id, body);
    }
    @Delete('salas/admin/:id')
    @UseGuards(AuthGuard)
    @Permissions('EMPLEADO')
    remove(
        @Param('id', ParseIntPipe) id: number,
        @Headers('authorization') authorization: string,
    ) {
        return this.service.deleteSala(id, authorization);
    }

    @UseGuards(AuthGuard)
    @Permissions('EMPLEADO')
    @Get('funcion/admin/all')
    getFunciones() {
        return this.service.getFunciones();
    }
}
