package it.hippomeido.PPC.data;

import it.hippomeido.PPC.model.Rivista;
import it.hippomeido.PPC.puzzle.Puzzle;

import java.util.List;
import java.util.Optional;

public interface DataPuzzleService {

  Puzzle savePuzzle(Puzzle puzzle);

  Puzzle updatePuzzle(Puzzle input);

  void delete(String id);

  Optional<Puzzle> getPuzzleById(String id);
}
