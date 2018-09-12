package com.farmbear.app.service;

import com.farmbear.app.entity.Book;

import java.util.List;

public interface BookService {

    Book addbook(Book book);

    List<Book> getAllBooks();

    Book updateBook(Book book);

    void deleteBook(String id);
}
