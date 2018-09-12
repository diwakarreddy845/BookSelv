package com.farmbear.app.repository;

import com.farmbear.app.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;


public class CustomRepositoryImpl implements CustomRepository{

    @Autowired
    private MongoOperations operations;

    public User findByEmail(String email){
        return operations.findOne(Query.query(Criteria.where("email").is(email)), User.class);
    }


}
