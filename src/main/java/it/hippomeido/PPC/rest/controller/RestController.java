package it.hippomeido.PPC.rest.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import it.hippomeido.PPC.controller.SimpleController;
import it.hippomeido.PPC.model.CommonResponse;
import it.hippomeido.PPC.model.CreatePuzzleRequest;
import it.hippomeido.PPC.model.CreatePuzzleResponse;
import it.hippomeido.PPC.model.RetriveWordListResponse;
import it.hippomeido.PPC.puzzle.Puzzle;
import it.hippomeido.PPC.util.leggiFile.FileManagerUtil;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.io.FileNotFoundException;
import java.io.IOException;


@Controller
public class RestController extends SimpleController {

	@RequestMapping(value = "/index.html", method = RequestMethod.GET)
	public ModelAndView index(){
        ModelAndView mv = new ModelAndView("index");
        return mv;
    }
	  
	@RequestMapping(value = "/createPuzzle", method = RequestMethod.POST)
	public @ResponseBody
	CommonResponse<Puzzle> createPuzzle(@RequestBody CreatePuzzleRequest request){

		Puzzle puzzle = new Puzzle(request.getRow(), request.getCol());

		CommonResponse<Puzzle> response = new CommonResponse();
        response.setData(puzzle);
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
	 
}