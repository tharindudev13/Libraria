package com.example.libraria.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable()) // Required to allow POST requests from React
            .cors(org.springframework.security.config.Customizer.withDefaults()) // Required to allow your Frontend URL
            .authorizeHttpRequests(auth -> auth
                // 1. PUBLIC: Anyone can fetch books
                .requestMatchers("/api/v1/users/loginreq").permitAll() 
                
                // 2. PROTECTED: Only authenticated users can reserve/lend
                .requestMatchers("/api/v1/lends/**").authenticated() 
                
                // 3. ADMIN ONLY: Only users with ADMIN role can add/delete
                .requestMatchers("/api/v1/admin/**").hasRole("ADMIN")

                
                .anyRequest().authenticated()
            )
            .httpBasic(org.springframework.security.config.Customizer.withDefaults()); // Uses basic login for now

        return http.build();
    }
}
