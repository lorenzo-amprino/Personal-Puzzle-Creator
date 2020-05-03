package it.hippomeido.PPC.model;

import it.hippomeido.PPC.puzzle.Puzzle;
import org.bson.codecs.pojo.annotations.BsonDiscriminator;
import org.bson.codecs.pojo.annotations.BsonId;
import org.bson.codecs.pojo.annotations.BsonProperty;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@BsonDiscriminator
@Document(collection = "riviste")
public class Rivista {

  @BsonId
  private String id;

  private Date data;

  private String nRivista;

  @BsonProperty(useDiscriminator = true)
  private List<Puzzle> puzzles;

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

  public Rivista() {}

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
