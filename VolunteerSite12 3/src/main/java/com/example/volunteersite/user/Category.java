package com.example.volunteersite.user;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Entity
@Table(name = "categories")
@Data
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @OneToMany
    @Column(name = "posts")
    private List<Post> posts;
    @OneToMany
    @Column(name = "users")
    private List<User> users;

}
