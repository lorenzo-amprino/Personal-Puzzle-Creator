package it.hippomeido.PPC.data.repositories;

import it.hippomeido.PPC.data.DataTemplateService;
import it.hippomeido.PPC.model.Template;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class DataTemplateServiceImpl implements DataTemplateService {

  @Autowired
  private TemplateRepository repository;

  @Override
  public List<Template> getAll() {
    return repository.findAll();
  }
}
