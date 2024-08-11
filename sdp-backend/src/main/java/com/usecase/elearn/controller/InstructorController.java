package com.usecase.elearn.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.usecase.elearn.auth.RegisterReponseDTO;
import com.usecase.elearn.model.Assignment;
import com.usecase.elearn.model.Course;
import com.usecase.elearn.model.Enrollment;
import com.usecase.elearn.model.LearningMaterial;
import com.usecase.elearn.model.User;
import com.usecase.elearn.repo.CourseRepository;
import com.usecase.elearn.repo.EnrollmentRepository;
import com.usecase.elearn.repo.UserRepo;
import com.usecase.elearn.request.CourseRequest;
import com.usecase.elearn.request.EnrollmentRequest;
import com.usecase.elearn.response.CourseResponse;
import com.usecase.elearn.response.EnrollmentReponse;
import com.usecase.elearn.service.InstructorService;

@RestController
@RequestMapping("/instructor")
@CrossOrigin(origins = "*") // Allow the frontend origin

public class InstructorController {

    @Autowired
    private InstructorService is;

    @Autowired
    private CourseRepository cr;

    @Autowired
    private UserRepo ur;

    @Autowired
    private EnrollmentRepository er;

    @PostMapping("/addcourse")
    public ResponseEntity<String> addCourse(@RequestBody CourseRequest courseRequest) {
        System.out.println("Received Course Request: " + courseRequest);

        Course course = Course.builder()
                .title(courseRequest.getTitle())
                .category(courseRequest.getCategory())
                .difficultyLevel(courseRequest.getDifficultyLevel())
                .syllabus(courseRequest.getSyllabus())
                .schedule(courseRequest.getSchedule())
                .prerequisites(courseRequest.getPrerequisites())
                .build();

        cr.save(course);

        return ResponseEntity.ok("Course added successfully");
    }

    @DeleteMapping("/deletecourse/{id}")
    public String deleteCourse(@PathVariable int id) {
        return is.deletecourse(id);
    }

    @GetMapping("/getallcourses")
    public List<CourseResponse> getAllCourses() {
        List<Course> courses = cr.findAll(); // Assuming findAll is the correct method in your repository
        return courses.stream()
                .map(course -> new CourseResponse(
                        course.getId(),
                        course.getTitle(),
                        course.getCategory(),
                        course.getDifficultyLevel(),
                        course.getSyllabus(),
                        course.getSchedule(),
                        course.getPrerequisites()))
                .collect(Collectors.toList());
    }

    @GetMapping("/getcoursebyid/{id}")
    public Optional<Course> getcourse(@PathVariable int id) {
        return is.getcourse(id);
    }

    @PutMapping("/updatecourse/{id}")
    public Course updatecourse(@PathVariable int id, @RequestBody Course course) {
        return is.updatecourse(id, course);
    }

    @PostMapping("/addmaterial")
    public LearningMaterial addMaterial(@RequestBody LearningMaterial material) {
        return is.upload(material);
    }

    @GetMapping("/getallmaterial")
    public List<LearningMaterial> getall() {
        return is.getall();
    }

    @GetMapping("/getmaterialbyid/{id}")
    public Optional<LearningMaterial> getbyid(@PathVariable int id) {
        return is.getmaterialbyid(id);
    }

    @DeleteMapping("/deletematerial/{id}")
    public String deletematerial(@PathVariable int id) {
        return is.deletematerial(id);
    }

    @PutMapping("/updatematerial/{id}")
    public LearningMaterial updatematerial(@PathVariable int id, @RequestBody LearningMaterial material) {
        return is.updatelearningmaterial(id, material);
    }

    @PostMapping("/addassignment")
    public Assignment addassign(@RequestBody Assignment assignment) {
        return is.addassign(assignment);
    }

    @GetMapping("/getallassignments")
    public List<Assignment> getallassignments() {
        return is.getallassignment();
    }

    @GetMapping("/getassignmentbyid/{id}")
    public Optional<Assignment> get(@PathVariable int id) {
        return is.getbyid(id);
    }

    @DeleteMapping("/deleteassignment/{id}")
    public String deleteassignment(@PathVariable int id) {
        return is.deleteassignment(id);
    }

    @PutMapping("/updateassignment/{id}")
    public Assignment updateassignment(@PathVariable int id, @RequestBody Assignment assignment) {
        return is.updateassignment(id, assignment);
    }

    @PostMapping("/viewenrollment")
    public Enrollment enrollUser(@RequestBody EnrollmentRequest enrollmentRequest) {
        User user = ur.findById(enrollmentRequest.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        Course course = cr.findById(enrollmentRequest.getCourseId())
                .orElseThrow(() -> new RuntimeException("Course not found"));
        Enrollment enrollment = new Enrollment();
        enrollment.setUser(user);
        enrollment.setCourse(course);
        return er.save(enrollment);
    }

    @GetMapping("/getallusers")
    public List<RegisterReponseDTO> getAllUsers() {
        List<User> users = is.findByRole(); // Ensure this service method is correct
        return users.stream()
                .map(user -> new RegisterReponseDTO(user.getName(), user.getEmail(), user.getRole()))
                .collect(Collectors.toList());
    }

    @GetMapping("/getenrollment")
    public List<EnrollmentReponse> enrollmentReponses() {
        List<Enrollment> enrollments = is.findEnrollmentResponse();
        return enrollments.stream()
                .map(enroll -> EnrollmentReponse.builder()
                        .name(enroll.getUser().getName())
                        .title(enroll.getCourse().getTitle())
                        .build())
                .collect(Collectors.toList());
    }

}
