package it.hippomeido.PPC.rest.controller;

import it.hippomeido.PPC.controller.SimpleController;
import it.hippomeido.PPC.data.DataRivistaService;
import it.hippomeido.PPC.model.CommonResponse;
import it.hippomeido.PPC.model.Rivista;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/rivista")
public class RivistaController extends SimpleController {

  @Autowired
  private DataRivistaService dataRivistaService;

  @PostMapping(produces = "application/json")
  @RequestMapping(value ="/create")
  public @ResponseBody CommonResponse<Rivista> createRivista(@RequestBody Rivista request) {

    Rivista output = dataRivistaService.createRivista(request);

    return new CommonResponse<Rivista>(output);
  }


  @PostMapping(produces = "application/json")
  @RequestMapping(value ="/update")
  public @ResponseBody CommonResponse<Rivista>updateRivista(@RequestBody Rivista request) {

    Rivista output = dataRivistaService.createRivista(request);

    return new CommonResponse<Rivista>(output);
  }
}
