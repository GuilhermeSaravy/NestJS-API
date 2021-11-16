import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll(@Res() response) {
    return response.status(200).send('Listagem de cursos');
  }

  @Get(':id')
  findOne(@Param('id') param) {
    return `Curso #${param}`;
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  creat(@Body() body) {
    return body;
  }
}
