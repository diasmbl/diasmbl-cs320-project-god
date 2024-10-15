package org.acme;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import java.util.List;

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

    /**
     * Fetches all stored names from the database.
     * 
     * @return A list of all user names.
     */
    @Path("/all")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<UserName> getAllNames() {
        // Return all UserName entities in the database
        return UserName.listAll();
    }

    /**
     * Fetches a single user by name.
     * 
     * @param name The name to fetch.
     * @return The user name or a not found response.
     */
    @Path("/find/{name}")
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public Response getUserByName(@PathParam("name") String name) {
        UserName userName = UserName.find("name", name).firstResult();
        if (userName == null) {
            return Response.status(Response.Status.NOT_FOUND).entity("User not found").build();
        }
        return Response.ok(userName.name).build();
    }

    /**
     * Updates an existing user's name.
     * 
     * @param oldName The old name of the user to be updated.
     * @param newName The new name to update to.
     * @return A response indicating the result of the update operation.
     */
    @Path("/update/{oldName}/{newName}")
    @PATCH
    @Produces(MediaType.TEXT_PLAIN)
    @Transactional
    public Response updateUserName(@PathParam("oldName") String oldName, @PathParam("newName") String newName) {
        UserName userName = UserName.find("name", oldName).firstResult();
        if (userName == null) {
            return Response.status(Response.Status.NOT_FOUND).entity("User not found").build();
        }
        userName.name = newName;
        userName.persist();
        return Response.ok("User name updated to " + newName).build();
    }

    /**
     * Deletes a user by name.
     * 
     * @param name The name of the user to delete.
     * @return A response indicating the result of the delete operation.
     */
    @Path("/delete/{name}")
    @DELETE
    @Produces(MediaType.TEXT_PLAIN)
    @Transactional
    public Response deleteUserByName(@PathParam("name") String name) {
        UserName userName = UserName.find("name", name).firstResult();
        if (userName == null) {
            return Response.status(Response.Status.NOT_FOUND).entity("User not found").build();
        }
        userName.delete();
        return Response.ok("User " + name + " deleted from the database.").build();
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
