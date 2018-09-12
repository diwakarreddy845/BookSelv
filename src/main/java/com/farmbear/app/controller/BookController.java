package com.farmbear.app.controller;


import com.farmbear.app.entity.Book;
import com.farmbear.app.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class BookController {

    @Autowired
    private BookService bookService;

    @GetMapping("/allBooks")
    public List<Book> getAllBooks() {
        List<Book> hotels = this.bookService.getAllBooks();
        return hotels;
    }

    @PutMapping("/saveBook")
    public void save(@RequestBody Book book) {
        this.bookService.addbook(book);
    }

    @PostMapping("/updateBook")
    public void update(@RequestBody Book book) {
        this.bookService.addbook(book);
    }

    @DeleteMapping("/deleteBook")
    public void delete(@RequestBody Book book) {
        this.bookService.deleteBook(book.getId());
    }

}
