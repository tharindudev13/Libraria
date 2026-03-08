package com.example.libraria.config;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    private UserDetailsService userDetailsService;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
        
        return http
            .cors(Customizer.withDefaults())
            .csrf(customizer -> customizer.disable())
            .authorizeHttpRequests(request -> request
                .requestMatchers("/api/v1/users/loginreq").permitAll()
                .requestMatchers("/api/v1/users/getuser/{email}").permitAll()
                .requestMatchers("/api/v1/books/getallbooks").permitAll()
                .requestMatchers("/api/v1/books/search").permitAll()
                .requestMatchers("/api/v1/lends/getlends/{email}").hasRole("USER")
                .requestMatchers("/api/v1/lends/newLends").hasRole("USER")
                .requestMatchers("/api/v1/lends/renew/{lendId}").hasRole("USER")
                .anyRequest().authenticated())
            .formLogin(Customizer.withDefaults())  //For the browser
            .httpBasic(Customizer.withDefaults())  //For the postman
            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .build();
        
       

    }

    // @Bean
    // public UserDetailsService userDetailsService(){

    //     UserDetails user1 = User
    //     .withDefaultPasswordEncoder()
    //     .username("tharindu")
    //     .password("t@123")
    //     .roles("USER")
    //     .build();

    //     UserDetails user2 = User
    //     .withDefaultPasswordEncoder()
    //     .username("devinda")
    //     .password("d@123")
    //     .roles("ADMIN")
    //     .build();

    //     return new InMemoryUserDetailsManager(user1,user2);
    // }

    @Bean
    public AuthenticationProvider authenticationProvider(UserDetailsService userDetailsService){
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider(userDetailsService);
        provider.setPasswordEncoder(new BCryptPasswordEncoder(12));

        return provider;
    }

    @Bean
    public CorsConfigurationSource configurationSource(){
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:5173")); // Your frontend URL
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
        configuration.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

}
