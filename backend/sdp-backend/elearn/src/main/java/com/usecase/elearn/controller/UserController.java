package com.usecase.elearn.controller;

import com.usecase.elearn.enums.Role;
import com.usecase.elearn.model.Course;
import com.usecase.elearn.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.usecase.elearn.model.User;
import com.usecase.elearn.service.UserService;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService us;
    @Autowired
    private UserRepo ur;

    @PostMapping("/adduser")
    public User adduser(@RequestBody User user) {
        return us.save(user);
    }

    @GetMapping("/students")
    public List<User> getAllStudents() {
        return ur.findByRole(Role.USER);
    }

    @GetMapping("/professors")
    public List<User> getAllProfessors() {
        return ur.findByRole(Role.INSTRUCTOR);
    }

    @DeleteMapping("/deletestudent/{id}")
    public String deleteStudent(@PathVariable Long id) {
        return us.deleteStudent(id);
    }

    @PutMapping("/updatestudent/{id}")
    public ResponseEntity<User> updateStudent(@PathVariable Long id, @RequestBody User user) {
        return us.updateStudent(id, user);
    }
    @PutMapping("/updateprofessor/{id}")
    public ResponseEntity<User> updateProfessor(@PathVariable Long id, @RequestBody User user) {
        return us.updateProfessor(id, user);
    }
}
