package com.example.Library.controllers;

import com.example.Library.model.Book;
import com.example.Library.storage.Storage;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.lang.reflect.Method;
import java.util.List;

@org.springframework.web.bind.annotation.RestController
public class RestController {
    @RequestMapping(value = "/books/", method = RequestMethod.POST)
    public int add(Book book) {
        Storage.addBook(book);
        return book.getId();
    }

    @RequestMapping(value = "/books/", method = RequestMethod.GET)
    public List<Book> getBooks() {
        return Storage.getAllBooks();
    }

}

