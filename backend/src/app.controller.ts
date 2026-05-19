import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('root')
@Controller()
export class AppController {
  @Get()
  getRoot() {
    return {
      name: 'DS Conseil Immo API',
      status: 'ok',
      docs: '/docs',
      health: '/health',
    };
  }
}
