package org.acme;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Path("/hello")
public class GreetingResource {

    /**
     * Handles a personalized greeting request and persists the user's name.
     * 
     * @param name The name of the user.
     * @return A greeting message indicating that the name has been stored.
     */
    @Path("/personalized/{name}")
    @POST
    @Produces(MediaType.TEXT_PLAIN)
    @Transactional
    public String personalizedHello(@PathParam("name") String name) {
        // Create a new UserName object
        UserName userName = new UserName(name);
        // Persist the new UserName object
        userName.persist();
        // Return the personalized greeting message
        return "Hello " + name + "! Your name has been stored in the database.";
    }

    // Inner class representing a UserName entity
    public static class UserName extends PanacheEntityBase {
        public String name;

        public UserName() {
        }

        public UserName(String name) {
            this.name = name;
        }

        @Override
        public String toString() {
            return name;
        }
    }
}
