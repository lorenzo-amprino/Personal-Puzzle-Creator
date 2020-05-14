package it.hippomeido.PPC.data.repositories;

import it.hippomeido.PPC.puzzle.Puzzle;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PuzzleRepository extends MongoRepository<Puzzle, String> {

}
