import { Controller, Get, Query } from "@nestjs/common";
import { Book } from "@prisma/client";
import { BookListService } from "./book-list.service";

@Controller()
export class BookListController {
    constructor(
        private readonly bookListService: BookListService
    ) {}

    @Get('books-offset')
    async getBookListWithOffset(@Query('skip') skip: string, @Query('take') take: string): Promise<Book[]> {
        return this.bookListService.getOffsetPaginationList({skip: Number(skip), take: Number(take)});
    }

    @Get('books-cursor')
    async getBookListWithCursor(@Query('take') take: string, @Query('cursor') cursor: string): Promise<Book[]> {
        return this.bookListService.getCursorPaginationList({take: Number(take), cursor: {id: Number(cursor)}});
    }
}