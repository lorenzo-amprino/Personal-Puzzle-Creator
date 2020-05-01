package it.hippomeido.PPC.model;

import org.bson.codecs.pojo.annotations.BsonDiscriminator;
import org.bson.codecs.pojo.annotations.BsonId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@BsonDiscriminator
@Document(collection = "users")
public class User {

  @BsonId
  private String id;

  private String name;

  private String password;

  private String status;

  private String role;

  public User() {
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public User(String status) {
    this.status = status;
  }

  public User( String name, String password, String role) {
    this.name = name;
    this.password = password;
    this.role = role;
  }

  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

  public String getRole() {
    return role;
  }

  public void setRole(String role) {
    this.role = role;
  }

  @Override
  public String toString() {
    return "User{" +
      "id='" + id + '\'' +
      ", name='" + name + '\'' +
      ", password='" + password + '\'' +
      ", status='" + status + '\'' +
      ", role='" + role + '\'' +
      '}';
  }
}
