package it.hippomeido.PPC.data.repositories;

import it.hippomeido.PPC.model.Rivista;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RivistaRepository extends MongoRepository<Rivista, String> {
}
