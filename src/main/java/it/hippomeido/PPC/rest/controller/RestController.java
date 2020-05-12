package it.hippomeido.PPC.rest.controller;

import it.hippomeido.PPC.controller.SimpleController;
import it.hippomeido.PPC.model.CommonResponse;
import it.hippomeido.PPC.model.CreatePuzzleRequest;
import it.hippomeido.PPC.model.RetriveWordListResponse;
import it.hippomeido.PPC.model.User;
import it.hippomeido.PPC.puzzle.Puzzle;
import it.hippomeido.PPC.util.leggiFile.FileManagerUtil;
import org.bson.types.ObjectId;
import org.springframework.web.bind.annotation.*;

import java.io.FileNotFoundException;
import java.io.IOException;

@org.springframework.web.bind.annotation.RestController
//@RequestMapping(value = "/rest")
public class RestController extends SimpleController {

//	@RequestMapping(value = "/", method = RequestMethod.GET)
//	public String index(){
//       return "index";
//    }

	@RequestMapping(value = "/createPuzzle", method = RequestMethod.POST)
	public @ResponseBody
	CommonResponse<Puzzle> createPuzzle(@RequestBody CreatePuzzleRequest request){

		Puzzle puzzle = new Puzzle(request.getRow(), request.getCol());
		puzzle.setNome(request.getTitle());
		puzzle.setnPagina(request.getPage()+"");
		puzzle.setId(new ObjectId());

		CommonResponse<Puzzle> response = new CommonResponse(puzzle);
        return response;
    }

	@RequestMapping(value = "/retriveWordList", method = RequestMethod.GET)
	public @ResponseBody
	RetriveWordListResponse retriveWordList() {

		Puzzle puzzle = new Puzzle(5, 5);
		FileManagerUtil fm = new FileManagerUtil("D:\\PPC", puzzle);

		try {
			fm.createSchemaFile(puzzle);
			fm.readWords("D:\\PPC\\altre.txt", puzzle);
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		RetriveWordListResponse response = new RetriveWordListResponse();
		response.setWordList(puzzle.getListaParole());
		return response;
	}

  @GetMapping(produces = "application/json")
  @RequestMapping({ "/validateLogin" })
  public User validateLogin() {
    return new User("User successfully authenticated");
  }

}
