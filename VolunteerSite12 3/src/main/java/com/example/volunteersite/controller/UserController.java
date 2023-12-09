package com.example.volunteersite.controller;

import com.example.volunteersite.dto.UserDto;
import com.example.volunteersite.repositories.OrganizationRepository;
import com.example.volunteersite.service.CategoryService;
import com.example.volunteersite.service.OrganizationService;
import com.example.volunteersite.service.UserServiceImpl;
import com.example.volunteersite.user.Category;
import com.example.volunteersite.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("http://localhost:3000")
public class UserController {
    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private CategoryService categoryService;
    @GetMapping("/showAllUsers")
    public List<User> showUserData(){
        return userService.findAllUsers();
    }

    @PutMapping("/updateUser")
    public void updateUser(@RequestBody UserDto userDto){
        userService.editUser(userDto);
    }

    @DeleteMapping("/deleteUser/{id}")
    public void deleteUser(@PathVariable long id){
        userService.deleteUser(id);
    }

    @PutMapping(value = "/addImage/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public void addImage(@RequestParam("file") MultipartFile file){
        userService.addImageToUser(file);
    }

    @GetMapping("/getUser")
    public Optional<User> getUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentUserName = authentication.getName();
        return userService.findByEmail(currentUserName);
    }

    @GetMapping("/getUserByLastname/{lastname}")
    public List<User> findAllByLastname(@PathVariable String lastname){
        return userService.findByLastName(lastname);
    }

    @GetMapping("/getUserByName/{name}")
    public List<User> findAllByName(@PathVariable String name){
        return userService.findByFirstname(name);
    }
    @PutMapping("/aboutMe")
    public void makeAbout(@RequestBody UserDto userDto){
        userService.saveAbout(userDto.getAbout());
    }

    @GetMapping("/showAllUsersByCategory/{name}")
    public List<User> findUsersByCategory(@PathVariable String name){
        return userService.showAllUsersByCategory(name);
    }
}
