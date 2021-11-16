import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll() {
    return 'Listagem de cursos';
  }

  @Get(':id')
  findOne(@Param('id') param) {
    return `Curso #${param}`;
  }

  @Post()
  creat(@Body() body) {
    return body;
  }
}
