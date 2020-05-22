package it.hippomeido.PPC.puzzle;

import org.bson.codecs.pojo.annotations.BsonDiscriminator;
import org.bson.codecs.pojo.annotations.BsonId;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@BsonDiscriminator
@Document(collection = "puzzle")
public class Puzzle {

  @BsonId
  private String id;
  private Character[][] schema;
  private List<String> listaParole;
  private List<String> paroleUsate;
  private String chiave;
  private String nome;
  private String nPagina;

  public Puzzle() {
    this.listaParole = new ArrayList<String>();
  }

  public Puzzle(String id) {
    this.id = id;
  }

  public Puzzle(int row, int col) {
    this.listaParole = new ArrayList<String>();
    this.schema = new Character[row][col];
    setupSchema(schema);

  }

  // methods

  /**
   * Metodo che riempie lo schema di caratteri di default '.'.
   * Viene chiamato all'interno del costruttore per inizializzare lo schema.
   *
   * @param schema
   * @author Lorenzo
   */
  private void setupSchema(Character[][] schema) {
    for (int i = 0; i < schema.length; i++) {
      for (int j = 0; j < schema[i].length; j++) {
        schema[i][j] = '.';
      }
    }
  }

  /**
   * Metodo che stampa in console lo schema lettera per lettera.
   *
   * @author Lorenzo
   */
  public void printSchema() {
    for (int i = 0; i < schema.length; i++) {
      for (int j = 0; j < schema[i].length; j++) {
        if (j == schema[i].length - 1) {
          System.out.println(schema[i][j]);
        } else {
          System.out.print(schema[i][j]);
        }
      }
    }
  }

  /**
   * Metodo che restituisce il numero di spazi vuoti nello schema.
   *
   * @return int
   * @author Lorenzo
   */
  public int retriveEmptySpaces() {
    int counter = 0;
    for (int i = 0; i < schema.length; i++) {
      for (int j = 0; j < schema[i].length; j++) {
        if (schema[i][j] == '.') {
          counter++;
        }
      }
    }
    return counter;
  }

  // getter and setter


  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public Character[][] getSchema() {
    return schema;
  }

  public void setSchema(Character[][] schema) {
    this.schema = schema;
  }

  public List<String> getListaParole() {
    return listaParole;
  }

  public void setListaParole(List<String> listaParole) {
    this.listaParole = listaParole;
  }

  public List<String> getParoleUsate() {
    return paroleUsate;
  }

  public void setParoleUsate(List<String> paroleUsate) {
    this.paroleUsate = paroleUsate;
  }

  public String getChiave() {
    return chiave;
  }

  public void setChiave(String chiave) {
    this.chiave = chiave;
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
    return "Puzzle [schema=" + Arrays.toString(schema) + ", listaParole=" + listaParole + ", paroleUsate="
      + paroleUsate + ", chiave=" + chiave + ", nome=" + nome + "]";
  }


}
