package com.yassine.portfolio.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

import static com.yassine.portfolio.security.ApplicationUserRole.*;


@Configuration
public class SecurityConfiguration {
    private final PasswordEncoder passwordEncoder;

    //Set this variable to work locally
    //private final boolean isLocalDebugMode = false;

    @Autowired
    public SecurityConfiguration (PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    //by default spring uses in memory database to save session ids, better use real database
    //Form bases != basic auth, where logout is not possible
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        //String rememberMeSecret = isLocalDebugMode? "somethingverysecured":System.getenv("APP_SECRET");

        http
                //.csrf().disable()
                //.csrf()
                //.csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse()).and()
                .authorizeHttpRequests()

                .anyRequest().permitAll();

                /*
                .requestMatchers("/assets/css/*").permitAll()
                //.antMatchers("/assets/css/*").permitAll() //permit access to hosted css files
                //.antMatchers("/", "index", "/css/*", "/js/*").permitAll()
                //.antMatchers("/api/**").hasRole(VISITOR.name())
                //Any request must be authenticated
                .anyRequest()
                .authenticated()
                .and()




                //form login
                .formLogin()
                    //Using own login page instead of default, using thymeleaf package for templates
                    .loginPage("/login")
                    //Permit everyone to login page
                    .permitAll()
                    //redirection url if user is logged in
                    //.defaultSuccessUrl("/courses", true)
                    .defaultSuccessUrl("/index.html", true)
                    //parameter names (currently with default values)
                    .passwordParameter("password")
                    .usernameParameter("username")
                .and()
                //default two weeks
                .rememberMe()
                //override valid time
                    .tokenValiditySeconds((int) TimeUnit.DAYS.toSeconds(3))
                    //override key to hash parameters
                    .key(rememberMeSecret)
                    .rememberMeParameter("remember-me") //parameter in html form,better cookie in a real database
                .and()
                //customize logout
                .logout()
                    .logoutUrl("/logout")
                    //GET logout, if csrf is enabled POST is required
                    .logoutRequestMatcher(new AntPathRequestMatcher("/logout", "GET")) // https://docs.spring.io/spring-security/site/docs/4.2.12.RELEASE/apidocs/org/springframework/security/config/annotation/web/configurers/LogoutConfigurer.html
                    .clearAuthentication(true)
                    .invalidateHttpSession(true)
                    //delete cookies in user browser
                    .deleteCookies("JSESSIONID", "remember-me")
                    //go back to login page after logout
                    .logoutSuccessUrl("/login");*/
        return http.build();
    }

    /*@Bean
    protected UserDetailsService userDetailsService() {

        //better use database, should be enough for a dumb portfolio page
        //using environment variables for better security
        String username =  isLocalDebugMode?"admin":System.getenv("APP_USERNAME");
        String password =  isLocalDebugMode?passwordEncoder.encode("password"):
                           passwordEncoder.encode(System.getenv("APP_PASSWORD"));

        UserDetails ratchetUser = User.builder()
                .username(username)
                .password(password)
                .authorities(VISITOR.getGrantedAuthorities())
                .build();

        return new InMemoryUserDetailsManager(
                ratchetUser
        );

    }*/
}
