package it.hippomeido.PPC.data.repositories;

import it.hippomeido.PPC.model.Template;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TemplateRepository extends MongoRepository<Template, String> {
}
