package com.farmbear.app.repository;

import com.farmbear.app.entity.User;
import org.springframework.stereotype.Repository;


public interface CustomRepository {

     User findByEmail(String name);

}
