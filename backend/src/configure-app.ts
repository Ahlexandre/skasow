import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { getUploadRoot } from './common/utils/upload-paths';

export function configureApp(app: NestExpressApplication) {
  const config = app.get(ConfigService);

  app.use(
    helmet({
      crossOriginResourcePolicy: { policy: 'cross-origin' },
    }),
  );
  app.useStaticAssets(getUploadRoot(), {
    prefix: '/uploads/',
  });
  app.enableCors({
    origin: parseCorsOrigins(config.get<string>('CORS_ORIGIN')),
    credentials: true,
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  const swaggerConfig = new DocumentBuilder()
    .setTitle('DS Conseil Immo API')
    .setDescription(
      'API backend NestJS pour la vitrine immobiliere intelligente DS Conseil',
    )
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document);
}

function parseCorsOrigins(value?: string) {
  if (!value || value === '*') {
    return true;
  }

  return value.split(',').map((origin) => origin.trim());
}
