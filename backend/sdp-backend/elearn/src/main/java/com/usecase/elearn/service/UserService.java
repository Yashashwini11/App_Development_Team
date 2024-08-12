package com.usecase.elearn.service;

import com.usecase.elearn.model.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.usecase.elearn.model.User;
import com.usecase.elearn.repo.UserRepo;


@Service
public class UserService {

    @Autowired
    private UserRepo ur;

    public User save(User user) {
        return ur.save(user);
    }
    public String deleteStudent(Long id) {
        User exists = ur.findById(id).orElse(null);
        if (exists != null) {
            ur.deleteById(id);
            return "Student deleted successfully";
        }
        return "Student not found";
    }

    public ResponseEntity<User> updateStudent(Long id, User user) {
        if (ur.existsById(id)) {
            user.setId(id);
            return ResponseEntity.ok(ur.save(user));
        }
        return ResponseEntity.notFound().build();
    }
    public ResponseEntity<User> updateProfessor(Long id, User user) {
        if (ur.existsById(id)) {
            user.setId(id);
            return ResponseEntity.ok(ur.save(user));
        }
        return ResponseEntity.notFound().build();
    }
}
