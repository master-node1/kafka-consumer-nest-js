import { Logger, Module } from '@nestjs/common';
import { AppController } from '../controller/app.controller';


@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    Logger,
  ],
})
export class AppModule  {
}
