package it.hippomeido.PPC.data;

import it.hippomeido.PPC.data.repositories.PuzzleRepository;
import it.hippomeido.PPC.puzzle.Puzzle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DataPuzzleServiceImpl implements DataPuzzleService {

  @Autowired
  private PuzzleRepository repository;


  @Override
  public Puzzle savePuzzle(Puzzle puzzle) {
    return repository.save(puzzle);
  }

  @Override
  public Puzzle updatePuzzle(Puzzle input) {
    return repository.save(input);
  }

  @Override
  public void delete(String id) {
      repository.deleteById(id);
  }

  @Override
  public Optional<Puzzle> getPuzzleById(String id) {
    return repository.findById(id);
  }
}
