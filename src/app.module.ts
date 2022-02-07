import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookListService } from './book-list.service';
import { BookController } from './book.controller';
import { BookListController } from './book-list.controller';
import { BookService } from './book.service';
import { DBService } from './db.service';

@Module({
  imports: [],
  controllers: [AppController, BookController, BookListController],
  providers: [AppService, BookService, DBService, BookListService],
})
export class AppModule {}
