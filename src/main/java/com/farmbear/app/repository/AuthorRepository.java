package com.farmbear.app.repository;

import com.farmbear.app.entity.Author;
import com.farmbear.app.entity.Book;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthorRepository extends MongoRepository<Author, String> {
}
