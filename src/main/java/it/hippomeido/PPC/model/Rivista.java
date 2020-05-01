package it.hippomeido.PPC.model;

import it.hippomeido.PPC.puzzle.Puzzle;

import java.util.Date;
import java.util.List;


public class Rivista {
  private String id;

  private Date data;

  private String nRivista;

  private List<Puzzle> puzzles;

  public Rivista() {
  }

  ;

  public Rivista(String nRivista) {
    this.nRivista = nRivista;
  }


  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }


  public String getnRivista() {
    return nRivista;
  }

  public void setnRivista(String nRivista) {
    this.nRivista = nRivista;
  }

  public List<Puzzle> getPuzzles() {
    return puzzles;
  }

  public void setPuzzles(List<Puzzle> puzzles) {
    this.puzzles = puzzles;
  }


  public Date getData() {
    return data;
  }

  public void setData(Date data) {
    this.data = data;
  }

  @Override
  public String toString() {
    return "Rivista{" +
      "id='" + id + '\'' +
      ", data=" + data +
      ", nRivista='" + nRivista + '\'' +
      ", puzzles=" + puzzles +
      '}';
  }
}
