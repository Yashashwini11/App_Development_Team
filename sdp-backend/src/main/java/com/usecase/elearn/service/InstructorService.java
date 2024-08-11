package com.usecase.elearn.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.usecase.elearn.auth.RegisterReponseDTO;
import com.usecase.elearn.model.Assignment;
import com.usecase.elearn.model.Course;
import com.usecase.elearn.model.Enrollment;
import com.usecase.elearn.model.LearningMaterial;
import com.usecase.elearn.model.User;
import com.usecase.elearn.repo.AssignmentRepository;
import com.usecase.elearn.repo.CourseRepository;
import com.usecase.elearn.repo.EnrollmentRepository;
import com.usecase.elearn.repo.LearningMaterialRepository;
import com.usecase.elearn.repo.UserRepo;

@Service
public class InstructorService {

    @Autowired
    private CourseRepository cr;

    @Autowired
    private UserRepo ur;

    @Autowired
    private LearningMaterialRepository lr;

    @Autowired
    private AssignmentRepository ar;

    @Autowired
    private EnrollmentRepository er;

    public Course savecourse(Course course) {
        return cr.save(course);
    }

    public String deletecourse(int id) {
        Course exists = cr.findById(id).orElse(null);
        if (exists != null) {
            cr.deleteById(id);
            return "course deleted successfully";
        }
        return "course not found";
    }

    public List<Course> allcourses() {
        return cr.findAll();
    }

    public LearningMaterial upload(LearningMaterial material) {
        return lr.save(material);
    }

    public Assignment addassign(Assignment assignment) {
        return ar.save(assignment);
    }

    public List<LearningMaterial> getall() {
        return lr.findAll();
    }

    public List<Assignment> getallassignment() {
        return ar.findAll();
    }

    public Optional<Course> getcourse(int id) {
        return cr.findById(id);
    }

    public Optional<LearningMaterial> getmaterialbyid(int id) {
        return lr.findById(id);
    }

    public Optional<Assignment> getbyid(int id) {
        return ar.findById(id);
    }

    public String deletematerial(int id) {
        LearningMaterial exists = lr.findById(id).orElse(null);
        if (exists != null) {
            lr.deleteById(id);
            return "material deleted successfully";
        }
        return "material does not exists";
    }

    public String deleteassignment(int id) {
        Assignment exists = ar.findById(id).orElse(null);
        if (exists != null) {
            ar.deleteById(id);
            return "Assignment deleted successfully";
        }
        return "Assignment not found";
    }

    public Course updatecourse(int id, Course course) {
        Course existscourse = cr.findById(id).orElse(null);
        if (existscourse != null) {
            existscourse.setTitle(course.getTitle());
            existscourse.setSyllabus(course.getSyllabus());
            existscourse.setPrerequisites(course.getPrerequisites());
            existscourse.setDifficultyLevel(course.getDifficultyLevel());
            existscourse.setCategory(course.getCategory());
        }
        return cr.save(existscourse);
    }

    public LearningMaterial updatelearningmaterial(int id, LearningMaterial material) {

        LearningMaterial existsmaterial = lr.findById(id).orElse(null);
        if (existsmaterial != null) {
            existsmaterial.setTitle(material.getTitle());
            existsmaterial.setType(material.getType());
            existsmaterial.setUrl(material.getUrl());
        }
        return lr.save(existsmaterial);
    }

    public Enrollment enroll(Enrollment enroll) {
        return er.save(enroll);
    }

    public Assignment updateassignment(int id, Assignment assignment) {
        Assignment exists = ar.findById(id).orElse(null);
        if (exists != null) {
            exists.setTitle(assignment.getTitle());
            exists.setDueDate(assignment.getDueDate());
            exists.setDescription(assignment.getDescription());
            exists.setCourse(assignment.getCourse());
        }
        return ar.save(exists);
    }

    public List<User> findByRole() {
        return ur.findAll();
    }

    
    public List<Enrollment> findEnrollmentResponse() {
        return er.findAll();
    }

}
