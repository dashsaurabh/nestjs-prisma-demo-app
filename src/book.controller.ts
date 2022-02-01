import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Book } from "@prisma/client";
import { BookService } from "./book.service";

@Controller()
export class BookController {
    constructor(
        private readonly bookService: BookService
    ) {}

    @Get('books/:id')
    async getBookById(@Param('id') id: string): Promise<Book> {
        return this.bookService.getBook({id: Number(id)});
    }

    @Post('books')
    async createBook(@Body() bookData: {title: string, author: string, publishYear: Number}): Promise<Book> {
        const { title, author } = bookData;
        const publishYear = Number(bookData.publishYear);
        return this.bookService.createBook({
            title,
            author,
            publishYear
        })
    }   

    @Put('books/:id')
    async updateBook(@Param('id') id: string, @Body() bookData: {title: string, author: string, publishYear: Number}): Promise<Book> {
        const { title, author } = bookData;
        const publishYear = Number(bookData.publishYear);

        return this.bookService.updateBook({
            where: {id: Number(id)},
            data: {
                title, 
                author,
                publishYear
            }
        })
    }

    @Delete('books/:id') 
    async deleteBook(@Param('id') id: string): Promise<Book> {
        return this.bookService.deleteBook({
            id: Number(id)
        })
    }
}
