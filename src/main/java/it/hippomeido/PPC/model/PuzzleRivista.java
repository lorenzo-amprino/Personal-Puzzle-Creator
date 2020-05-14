package it.hippomeido.PPC.model;

import org.bson.codecs.pojo.annotations.BsonDiscriminator;
import org.bson.codecs.pojo.annotations.BsonId;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

@BsonDiscriminator
@Document
public class PuzzleRivista {

  private String id;

  private String nome;
  private String nPagina;

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getNome() {
    return nome;
  }

  public void setNome(String nome) {
    this.nome = nome;
  }

  public String getnPagina() {
    return nPagina;
  }

  public void setnPagina(String nPagina) {
    this.nPagina = nPagina;
  }

  @Override
  public String toString() {
    return "PuzzleRivista{" +
      "id=" + id +
      ", nome='" + nome + '\'' +
      ", nPagina='" + nPagina + '\'' +
      '}';
  }
}
