package it.hippomeido.PPC;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import it.hippomeido.PPC.app.MongoConfig;
import it.hippomeido.PPC.data.repositories.TemplateRepository;
import it.hippomeido.PPC.data.repositories.UserRepository;
import it.hippomeido.PPC.model.Template;
import it.hippomeido.PPC.model.User;
import org.bson.Document;
import org.junit.Ignore;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Arrays;

@SpringBootTest
class PpcApplicationTests extends ConfigTest {

  @Autowired
  private TemplateRepository repository;

  @Autowired
  private MongoConfig mongoConfig;

  @Ignore
  @Test
  public void loadUsers() {

    MongoClient mongoClient = mongoConfig.mongoClient();
    MongoDatabase database = mongoClient.getDatabase("ppc");

    MongoCollection<Document> collection = database.getCollection("users");

    Template template = new Template();
    template.setCol(15);
    template.setRow(25);
    template.setHoleHeight(7);
    template.setHoleLenght(11);
    template.setHoleX(4);
    template.setHoleY(7);
    template.setIcon("icon_hole_2");
    template.setDefaultPages(new int[]{25,31,39});


    repository.insert(template);
  }

  @Test
  public void prova(){
    String i1 = "uno";
    String i2 = "due";

    System.out.println(String.format("interpolazione %s - %s", i1, i2));
}

}
