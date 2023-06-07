package com.example.Library.storage;

import com.example.Library.model.Book;

import java.util.ArrayList;
import java.util.List;

public class Storage {
    private static List<Book> books = new ArrayList<>();

    public static int addBook(Book book) {
        int id = books.size();
        book.setId(id);
        books.add(book);
        return book.getId();
    }

    public static List<Book> getAllBooks() {
        return books;
    }
}
