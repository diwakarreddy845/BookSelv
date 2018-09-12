package com.farmbear.app.service;

import com.farmbear.app.entity.User;

import java.util.List;


public interface UserService {

    User addUser(User User);

    List<User> getAllUsers();

    User updateUser(User User);

    void deleteUser(String id);

    User getUserByEmail(String email);
}
