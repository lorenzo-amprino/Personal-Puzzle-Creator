package it.hippomeido.PPC.data;

import it.hippomeido.PPC.data.repositories.PuzzleRepository;
import it.hippomeido.PPC.puzzle.Puzzle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DataPuzzleServiceImpl implements DataPuzzleService {

  @Autowired
  private PuzzleRepository repository;


  @Override
  public Puzzle savePuzzle(Puzzle puzzle) {
    return repository.save(puzzle);
  }
}
