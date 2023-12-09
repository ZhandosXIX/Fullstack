package com.example.volunteersite.repositories;

import com.example.volunteersite.user.Category;
import com.example.volunteersite.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);

    User findById(long id);

    User findByFirstnameAndLastname(String name, String lastname);

    List<User> findAllByFirstname(String name);
    List<User> findAllByLastname(String lastname);
    User findByFirstname(String name);

    User findByLastname(String lastname);

    List<User> findAllByCategory(Category category);
}
