module.exports = {
  apps: [
    {
      name: "config-server",
      script: "java",
      args: "-Dspring.classformat.ignore=true -jar config-server/target/config-server-1.0.0-SNAPSHOT.jar",
      autorestart: true,
      watch: false,
      max_memory_restart: "768M",
      env: {
        NODE_ENV: "production"
      }
    },
    {
      name: "discovery-server",
      script: "java",
      args: "-Dspring.classformat.ignore=true -jar discovery-server/target/discovery-server-1.0.0-SNAPSHOT.jar",
      autorestart: true,
      watch: false,
      max_memory_restart: "768M",
      env: {
        NODE_ENV: "production"
      }
    },
    {
      name: "api-gateway",
      script: "java",
      args: "-Dspring.classformat.ignore=true -Deureka.client.serviceUrl.defaultZone=http://10.0.1.8:8761/eureka/ -Deureka.instance.prefer-ip-address=true -jar api-gateway/target/api-gateway-1.0.0-SNAPSHOT.jar",
      autorestart: true,
      watch: false,
      max_memory_restart: "768M",
      env: {
        NODE_ENV: "production",
        EUREKA_SERVER_URL: "http://10.0.1.8:8761/eureka/"
      }
    }
  ]
};
