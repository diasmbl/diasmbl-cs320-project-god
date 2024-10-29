package org.acme;

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
    public Response personalizedHello(@PathParam("name") String name) {
        // Validate the name input
        if (name == null || name.isEmpty()) {
            return Response.status(Response.Status.BAD_REQUEST)
                    .entity("Please provide a valid name.")
                    .build();
        }

        // Create a new UserName object and persist it
        UserName userName = new UserName();
        userName.setName(name);
        userName.persist();

        // Return success message
        return Response.ok("Hello " + name + "! Your name has been stored in the database.").build();
    }

    /**
     * Fetches all stored names from the database.
     * 
     * @return A list of all user names.
     */
    @Path("/all")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAllNames() {
        List<UserName> names = UserName.listAll();

        if (names.isEmpty()) {
            return Response.status(Response.Status.NOT_FOUND).entity("No users found").build();
        }

        return Response.ok(names).build();
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
        // Search for the user by name in the database
        UserName userName = UserName.find("name", name).firstResult();

        if (userName == null) {
            return Response.status(Response.Status.NOT_FOUND)
                    .entity("User with the name '" + name + "' not found.")
                    .build();
        }

        return Response.ok(userName.getName()).build();
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
        // Fetch the user by old name
        UserName userName = UserName.find("name", oldName).firstResult();

        if (userName == null) {
            return Response.status(Response.Status.NOT_FOUND)
                    .entity("User with the name '" + oldName + "' not found.")
                    .build();
        }

        if (newName == null || newName.isEmpty()) {
            return Response.status(Response.Status.BAD_REQUEST)
                    .entity("New name cannot be empty.")
                    .build();
        }

        // Update the user's name
        userName.setName(newName);
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
        // Fetch the user by name
        UserName userName = UserName.find("name", name).firstResult();

        if (userName == null) {
            return Response.status(Response.Status.NOT_FOUND)
                    .entity("User with the name '" + name + "' not found.")
                    .build();
        }

        // Delete the user
        userName.delete();

        return Response.ok("User " + name + " deleted from the database.").build();
    }
}
