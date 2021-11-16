import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { CourseService } from './course.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CourseService) {}

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return this.coursesService.findOne(id);
  }

  @Post()
  create(@Body() body) {
    return this.coursesService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.coursesService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id) {
    return this.coursesService.remove(id);
  }
}
