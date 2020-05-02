package it.hippomeido.PPC;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import it.hippomeido.PPC.app.MongoConfig;
import it.hippomeido.PPC.data.repositories.UserRepository;
import it.hippomeido.PPC.model.User;
import org.bson.Document;
import org.junit.Ignore;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Arrays;

@SpringBootTest
class PpcApplicationTests extends ConfigTest{

  @Autowired
  private UserRepository repository;

  @Autowired
  private MongoConfig mongoConfig;

  @Ignore
	@Test
  public void loadUsers(){

    MongoClient mongoClient = mongoConfig.mongoClient();
    MongoDatabase database = mongoClient.getDatabase("ppc");

    MongoCollection<Document> collection = database.getCollection("users");


    User u = new User("maurizio","ppc-password","USER");
    User u2 = new User("matteo","ppc-password","USER");

    repository.insert(Arrays.asList(u,u2));
  }
}
