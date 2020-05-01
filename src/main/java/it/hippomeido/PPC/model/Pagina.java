package it.hippomeido.PPC.model;

import it.hippomeido.PPC.puzzle.Puzzle;

import java.util.List;


public class Pagina {
  private String id;
  private int nPagina;
  private List<Puzzle> puzzles;


  String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }


  public int getnPagina() {
    return nPagina;
  }

  public void setnPagina(int nPagina) {
    this.nPagina = nPagina;
  }


  public List<Puzzle> getPuzzles() {
    return puzzles;
  }

  public void setPuzzles(List<Puzzle> puzzles) {
    this.puzzles = puzzles;
  }

  @Override
  public String toString() {
    return "Pagina{" +
      "id='" + id + '\'' +
      ", nPagina=" + nPagina +
      ", puzzles=" + puzzles +
      '}';
  }
}
