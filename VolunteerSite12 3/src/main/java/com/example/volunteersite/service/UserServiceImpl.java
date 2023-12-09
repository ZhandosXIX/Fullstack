package com.example.volunteersite.service;

import com.example.volunteersite.dto.PostDto;
import com.example.volunteersite.dto.UserDto;
import com.example.volunteersite.repositories.CategoryRepository;
import com.example.volunteersite.repositories.UserRepository;
import com.example.volunteersite.user.Category;
import com.example.volunteersite.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    public Optional<User> findByEmail(String email){
        return userRepository.findByEmail(email);
    }

    public List<User> findAllUsers(){
        return userRepository.findAll();
    }

    public void editUser(UserDto userDto){
        User user = userRepository.findById(userDto.getId());
        user.setEmail(userDto.getEmail());
        user.setFirstname(userDto.getFirstname());
        user.setLastname(userDto.getLastname());
        user.setRole(userDto.getRole());
        user.setRating(userDto.getRating());
        user.setAbout(userDto.getAbout());
        userRepository.save(user);
    }

    public void addImageToUser(MultipartFile file){
        Optional<User> user = userRepository.findByEmail(getCurrentUser());
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        if(fileName.contains("..")){
            System.out.println("not a valid file");
        }
        try{
            user.get().setImage(Base64.getEncoder().encodeToString(file.getBytes()));
        }catch (IOException e){
            e.printStackTrace();
        }
        userRepository.save(user.get());
    }

    public void deleteUser(long id){
        User user = userRepository.findById(id);
        userRepository.delete(user);
    }

    public String getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentUserName = (String) authentication.getName();
        return currentUserName;
    }

    public void saveAbout(String about){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentUserName = (String) authentication.getName();
        Optional<User> user = userRepository.findByEmail(currentUserName);
        user.get().setAbout(about);
        userRepository.save(user.get());
    }
    public User findById(long id) {
        return userRepository.findById(id);
    }

    public List<User>findByFirstname(String name){
        return userRepository.findAllByFirstname(name);
    }
    public List<User>findByLastName(String lastname){
        return userRepository.findAllByLastname(lastname);
    }

    public User findByFirst(String name){
        return userRepository.findByFirstname(name);
    }

    public User findByLast(String lastname){
        return userRepository.findByLastname(lastname);
    }

    public List<User> showAllUsersByCategory(String name){
        Category category1 = categoryRepository.findByName(name);
        return userRepository.findAllByCategory(category1);
    }

    }

