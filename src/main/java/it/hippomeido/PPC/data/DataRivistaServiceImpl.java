package it.hippomeido.PPC.data;

import it.hippomeido.PPC.data.repositories.RivistaRepository;
import it.hippomeido.PPC.model.Rivista;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DataRivistaServiceImpl implements DataRivistaService {

  @Autowired
  private RivistaRepository rivistaRepository;


  @Override
  public Rivista createRivista(Rivista input) {
    return null;
  }
}
