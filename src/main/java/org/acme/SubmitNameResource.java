package org.acme;

import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.mindrot.jbcrypt.BCrypt;  // Import BCrypt for password hashing

@Path("/submit-name")
public class SubmitNameResource {

    @POST
    @Transactional
    @Consumes(MediaType.APPLICATION_JSON)
    public Response submitName(UserName user) {
        if (user.getName() == null || user.getName().isEmpty() || user.getPassword() == null || user.getPassword().isEmpty()) {
            return Response.status(Response.Status.BAD_REQUEST)
                    .entity("Please enter both username and password.").build();
        }

        if (user.getName().contains(" ")) {
            return Response.status(Response.Status.BAD_REQUEST)
                    .entity("Username should not contain spaces.").build();
        }

        // Hash the password
        String hashedPassword = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt());
        user.setPassword(hashedPassword);

        // Persist the user
        user.persist();

        return Response.ok("User " + user.getName() + " has been successfully registered.").build();
    }
}
