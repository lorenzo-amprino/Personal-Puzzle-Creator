package it.hippomeido.PPC.rest.controller;

import it.hippomeido.PPC.data.DataPuzzleService;
import it.hippomeido.PPC.data.DataTemplateService;
import it.hippomeido.PPC.model.CommonResponse;
import it.hippomeido.PPC.model.CreatePuzzleRequest;
import it.hippomeido.PPC.model.Template;
import it.hippomeido.PPC.puzzle.Puzzle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/puzzle")
public class PuzzleController {

  @Autowired
  private DataPuzzleService dataPuzzleService;

  @Autowired
  private DataTemplateService dataTemplateService;

  @RequestMapping(value = "/create", method = RequestMethod.POST)
  public @ResponseBody
  CommonResponse<Puzzle> createPuzzle(@RequestBody CreatePuzzleRequest request) {

    Puzzle puzzle = new Puzzle(request.getTemplate().getRow(), request.getTemplate().getCol());
    puzzle.setListaParole(request.getWordList());
    puzzle.setNome(request.getTitle());
    puzzle.setnPagina(request.getPage() + "");

    Puzzle output = dataPuzzleService.savePuzzle(puzzle);

    CommonResponse<Puzzle> response = new CommonResponse(output);
    return response;
  }

  @PostMapping(produces = "application/json")
  @RequestMapping(value = "/update")
  public @ResponseBody
  CommonResponse<Puzzle> updatePuzzle(@RequestBody Puzzle request) {

    Puzzle output = dataPuzzleService.updatePuzzle(request);

    return new CommonResponse<Puzzle>(output);
  }

  @PostMapping(produces = "application/json")
  @RequestMapping(value = "/delete")
  public @ResponseBody
  CommonResponse<Boolean> deletePuzzle(@RequestBody String id){
    dataPuzzleService.delete(id);
    return new CommonResponse<>(true);
  }

  @GetMapping(produces = "application/json")
  @RequestMapping(value = "")
  public @ResponseBody
  CommonResponse<Puzzle> getPuzzleById(@RequestParam String id){
    Optional<Puzzle> r = dataPuzzleService.getPuzzleById(id);
    return new CommonResponse<>(r.get());
  }

  @GetMapping(produces = "application/json")
  @RequestMapping(value = "/template")
  public @ResponseBody
  CommonResponse<List<Template>> getTemplates(){
    return new CommonResponse<>(dataTemplateService.getAll());
  }

}
