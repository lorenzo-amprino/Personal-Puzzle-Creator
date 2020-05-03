package it.hippomeido.PPC.data;

import it.hippomeido.PPC.model.Rivista;

import java.util.List;
import java.util.Optional;

public interface DataRivistaService {

  Rivista createRivista(Rivista input);

  Rivista updateRivista(Rivista input);

  List<Rivista> getAll();

  void delete(String id);

  Optional<Rivista> getRivistaById(String id);

}
