package org.acme;

import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

/**
 * A resource class that handles submitting a user's name, validates it, and persists it to the database.
 */
@Path("/submit-name")
public class SubmitNameResource {

    /**
     * Handles the submission of a user's name, validates it, and persists it in the database.
     * 
     * @param user The user object containing the name.
     * @return A response indicating the result of the operation.
     */
    @POST
    @Transactional
    @Consumes(MediaType.APPLICATION_JSON)
    public Response submitName(UserName user) {
        // Check if the name is empty
        if (user.getName() == null || user.getName().isEmpty()) {
            return Response.status(Response.Status.BAD_REQUEST)
                    .entity("Please enter a name.").build();
        }

        // Check if the name contains spaces
        if (user.getName().contains(" ")) {
            return Response.status(Response.Status.BAD_REQUEST)
                    .entity("Please enter only one name. Make sure your name does not contain spaces.").build();
        }

        // Persist the valid user name in the database
        user.persist();  // This assumes UserName extends PanacheEntityBase or PanacheEntity

        // Return a success message
        return Response.ok("Hello, " + user.getName() + "! Your name has been stored in the database.").build();
    }
}
