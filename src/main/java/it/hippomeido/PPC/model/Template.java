package it.hippomeido.PPC.model;

import org.bson.codecs.pojo.annotations.BsonDiscriminator;
import org.bson.codecs.pojo.annotations.BsonId;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Arrays;

@BsonDiscriminator
@Document(collection = "template")
public class Template {

  @BsonId
  private String id;
  private int col;
  private int row;
  private int holeLenght;
  private int holeHeight;
  private int holeX;
  private int holeY;
  private String icon;
  private int[] defaultPages;

  public int getCol() {
    return col;
  }

  public void setCol(int col) {
    this.col = col;
  }

  public int getRow() {
    return row;
  }

  public void setRow(int row) {
    this.row = row;
  }

  public int getHoleLenght() {
    return holeLenght;
  }

  public void setHoleLenght(int holeLenght) {
    this.holeLenght = holeLenght;
  }

  public int getHoleHeight() {
    return holeHeight;
  }

  public void setHoleHeight(int holeHeight) {
    this.holeHeight = holeHeight;
  }

  public int getHoleX() {
    return holeX;
  }

  public void setHoleX(int holeX) {
    this.holeX = holeX;
  }

  public int getHoleY() {
    return holeY;
  }

  public void setHoleY(int holeY) {
    this.holeY = holeY;
  }

  public int[] getDefaultPages() {
    return defaultPages;
  }

  public void setDefaultPages(int[] defaultPages) {
    this.defaultPages = defaultPages;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getIcon() {
    return icon;
  }

  public void setIcon(String icon) {
    this.icon = icon;
  }

  @Override
  public String toString() {
    return "Template{" +
      "id='" + id + '\'' +
      ", col=" + col +
      ", row=" + row +
      ", holeLenght=" + holeLenght +
      ", holeHeight=" + holeHeight +
      ", holeX=" + holeX +
      ", holeY=" + holeY +
      ", icon='" + icon + '\'' +
      ", defaultPages=" + Arrays.toString(defaultPages) +
      '}';
  }
}
