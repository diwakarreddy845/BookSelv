package com.farmbear.app.controller;


import com.farmbear.app.entity.User;
import com.farmbear.app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/allUsers")
    public List<User> getAllUsers() {
        List<User> hotels = this.userService.getAllUsers();
        return hotels;
    }

    @PutMapping("/saveUser")
    public void save(@RequestBody User user) {
        this.userService.addUser(user);
    }

    @PostMapping("/updateUser")
    public void update(@RequestBody User user) {
        this.userService.addUser(user);
    }

    @DeleteMapping("/deleteUser")
    public void delete(@RequestBody User user) {
        this.userService.deleteUser(user.getId());
    }

    @PostMapping("/userByEmail")
    public User getUserByEmail(@RequestBody User user) {
        User uf = this.userService.getUserByEmail(user.getEmail());
        if (uf != null) {
            return uf;
        }
        return null;
    }
}
