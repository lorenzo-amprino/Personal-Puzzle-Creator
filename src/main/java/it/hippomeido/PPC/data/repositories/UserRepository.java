package it.hippomeido.PPC.data.repositories;

import it.hippomeido.PPC.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepository extends MongoRepository<User, String> {

  public Optional<User> findById(String id);

}
