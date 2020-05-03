package it.hippomeido.PPC.data;

import it.hippomeido.PPC.data.repositories.RivistaRepository;
import it.hippomeido.PPC.model.Rivista;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DataRivistaServiceImpl implements DataRivistaService {

  @Autowired
  private RivistaRepository rivistaRepository;


  @Override
  public Rivista createRivista(Rivista input) {

    return rivistaRepository.save(input);
  }

  @Override
  public Rivista updateRivista(Rivista input) {

    return rivistaRepository.save(input);
  }

  @Override
  public List<Rivista> getAll() {
    return rivistaRepository.findAll();
  }

  @Override
  public void delete(String id) {
    rivistaRepository.deleteById(id);
  }

  @Override
  public Optional<Rivista> getRivistaById(String id) {
    return rivistaRepository.findById(id);
  }


}
