package com.farmbear.app.entity;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Document(collection = "author")
public class Author {

    @Id
    private String id;
    private String name;
    private List<Book> listOfBooks;
    private Date publishedDate;
    private boolean eBookavailable;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Book> getListOfBooks() {
        return listOfBooks;
    }

    public void setListOfBooks(List<Book> listOfBooks) {
        this.listOfBooks = listOfBooks;
    }

    public Date getPublishedDate() {
        return publishedDate;
    }

    public void setPublishedDate(Date publishedDate) {
        this.publishedDate = publishedDate;
    }

    public boolean iseBookavailable() {
        return eBookavailable;
    }

    public void seteBookavailable(boolean eBookavailable) {
        this.eBookavailable = eBookavailable;
    }

}
