package it.hippomeido.PPC.rest.controller;

import it.hippomeido.PPC.controller.SimpleController;
import it.hippomeido.PPC.data.DataRivistaService;
import it.hippomeido.PPC.model.CommonResponse;
import it.hippomeido.PPC.model.Rivista;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PrePostInvocationAttributeFactory;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/rivista")
public class RivistaController extends SimpleController {

  @Autowired
  private DataRivistaService dataRivistaService;

  @PostMapping(produces = "application/json")
  @RequestMapping(value = "/create")
  public @ResponseBody
  CommonResponse<Rivista> createRivista(@RequestBody Rivista request) {

    Rivista output = dataRivistaService.createRivista(request);

    return new CommonResponse<Rivista>(output);
  }


  @PostMapping(produces = "application/json")
  @RequestMapping(value = "/update")
  public @ResponseBody
  CommonResponse<Rivista> updateRivista(@RequestBody Rivista request) {

    Rivista output = dataRivistaService.updateRivista(request);

    return new CommonResponse<Rivista>(output);
  }

  @GetMapping(produces = "application/json")
  @RequestMapping(value = "/getRiviste")
  public @ResponseBody
  CommonResponse<List<Rivista>> getRiviste() {
    List<Rivista> riviste = dataRivistaService.getAll();
    return new CommonResponse<>(riviste);
  }

  @PostMapping(produces = "application/json")
  @RequestMapping(value = "/delete")
  public @ResponseBody
  CommonResponse<Boolean> deleteRivista(@RequestBody String id){
    dataRivistaService.delete(id);
    return new CommonResponse<>(true);
  }

  @GetMapping(produces = "application/json")
  @RequestMapping(value = "")
  public @ResponseBody
  CommonResponse<Rivista> getRivistaById(@RequestParam String id){
    Optional<Rivista> r = dataRivistaService.getRivistaById(id);
    return new CommonResponse<>(r.get());
  }
}
