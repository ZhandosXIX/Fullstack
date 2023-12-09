package com.example.volunteersite.user;

import com.example.volunteersite.user.Role;
import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstname;

    @Column(name = "lastname", unique = true)
    private String lastname;

    @Column(unique = true)
    private String email;

    private String city;

    private String phone;

    @Column(name = "about", length = 300)
    private String about;

//    @Lob
//    @Column(length = 50000, columnDefinition = "MEDIUMBLOB")
    private String image;

    private String password;

    @ManyToOne
    private Category category;
    @Min(value = 1, message = "rating should not be less than 1")
    @Max(value = 100, message = "rating should not be greater than 100")
    private int rating;

    @Enumerated(EnumType.STRING)
    private Role role;

    @ManyToMany
    @JoinTable(name = "users_posts",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "post_id"))
    private List<Post> posts;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}
