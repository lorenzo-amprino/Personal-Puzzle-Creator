package it.hippomeido.PPC.app;


import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;
import it.hippomeido.PPC.data.repositories.UserRepository;
import it.hippomeido.PPC.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
import java.util.List;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

  @Autowired
  private UserRepository repository;


  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http.csrf().disable().
      cors().and().
      authorizeRequests().antMatchers(HttpMethod.OPTIONS, "/**").permitAll().anyRequest().authenticated()
      .and().httpBasic();
  }

  @Autowired
  public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
    addUsers(auth);
  }

  @Bean
  CorsConfigurationSource corsConfigurationSource() {
    CorsConfiguration configuration = new CorsConfiguration();
    configuration.setAllowedOrigins(Arrays.asList("http://localhost:4200", "http://new-ppc.herokuapp.com"));
    configuration.setAllowedMethods(Arrays.asList("GET", "POST", "DELETE", "OPTIONS"));
    configuration.setAllowedHeaders(Arrays.asList("Authorization", "Cache-Control", "Content-Type"));
    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    source.registerCorsConfiguration("/**", configuration);
    return source;
  }

  private void addUsers(AuthenticationManagerBuilder auth) throws Exception {

    MongoClient mongoClient = MongoClients.create(
      "mongodb+srv://admin:ppcAdminDB@ppc-tzcvl.mongodb.net/ppc?retryWrites=true&w=majority");
    MongoDatabase database = mongoClient.getDatabase("ppc");

    List<User> utenti = repository.findAll();

    for (User u : utenti) {
      auth.inMemoryAuthentication().withUser(u.getName()).password("{noop}" + u.getPassword()).roles(u.getRole());
    }
  }

}
