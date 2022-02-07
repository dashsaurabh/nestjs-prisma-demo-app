import { Injectable } from "@nestjs/common";
import { Book, Prisma } from "@prisma/client";
import { DBService } from "./db.service";

@Injectable()
export class BookListService {
    constructor(private dbService: DBService) {}

    async getOffsetPaginationList(params: {
        skip?: number;
        take?: number;
    }): Promise<Book[]> {
        const { skip, take } = params;

        if (isNaN(skip)) {
            return this.dbService.book.findMany({
                take
            });
        }else{
            return this.dbService.book.findMany({
                skip,
                take,
                where: {
                    title: {
                        contains: 'Foundation'
                    }
                },
                orderBy: {
                    publishYear: 'desc'
                }
            });
        }
    }

    async getCursorPaginationList(params: {
        take?: number;
        cursor?: Prisma.BookWhereUniqueInput;
    }): Promise<Book[]> {
        const { take, cursor } = params;
    
        return this.dbService.book.findMany({
            take,
            cursor,
            where: {
                title: {
                  contains: 'Foundation',
                },
              },
              orderBy: {
                id: 'asc',
              },
        })
    }
}