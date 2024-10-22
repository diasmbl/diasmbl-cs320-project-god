package org.acme;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import jakarta.transaction.Transactional;

@Path("/submit-name")
public class SubmitNameResource {

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

        // Simulate name storage (replace this with actual DB persistence)
        user.persist(); // This assumes that persist() is implemented

        // Return success message
        return Response.ok("Hello, " + user.getName() + "! Your name has been stored in the database.").build();
    }
}
