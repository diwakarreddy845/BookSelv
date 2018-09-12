package com.farmbear.app.service;

import com.farmbear.app.entity.Book;
import com.farmbear.app.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookServiceImpl implements BookService {

    @Autowired
    private BookRepository bookRepository;

    @Override
    public Book addbook(Book book) {
        return bookRepository.save(book);
    }

    @Override
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    @Override
    public Book updateBook(Book book) {
        return bookRepository.save(book);
    }

    public void deleteBook(String id){
        bookRepository.deleteById(id);
    }
}
