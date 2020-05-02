package it.hippomeido.PPC.app;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration;

@Configuration
public class MongoConfig extends AbstractMongoClientConfiguration {

  @Value("${MONGODB_URI}")
  private String dbUrl;

  @Override
  public MongoClient mongoClient() {
    MongoClient mongoClient = MongoClients.create(dbUrl);
    return mongoClient;
  }

  @Override
  protected String getDatabaseName() {
    return "ppc";
  }
}
