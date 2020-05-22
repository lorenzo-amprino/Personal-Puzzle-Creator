package it.hippomeido.PPC.data;

import it.hippomeido.PPC.data.repositories.TemplateRepository;
import it.hippomeido.PPC.model.Template;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DataTemplateServiceImpl implements DataTemplateService {

  @Autowired
  private TemplateRepository repository;

  @Override
  public List<Template> getAll() {
    return repository.findAll();
  }
}
