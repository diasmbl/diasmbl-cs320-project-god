package org.acme;

import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import java.util.List;

@Path("/trainers")
public class GreetingResource {

    // Fetch all trainers
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAllTrainers() {
        List<UserName> trainers = UserName.listAll();
        if (trainers.isEmpty()) {
            return Response.status(Response.Status.NOT_FOUND).entity("No trainers found").build();
        }
        return Response.ok(trainers).build();
    }

    // Update trainer name
    @Path("/update/{id}")
    @PATCH
    @Consumes(MediaType.APPLICATION_JSON)
    @Transactional
    public Response updateTrainerName(@PathParam("id") Long id, UserName updatedName) {
        UserName trainer = UserName.findById(id);
        if (trainer == null) {
            return Response.status(Response.Status.NOT_FOUND)
                           .entity("Trainer not found with ID: " + id).build();
        }
        if (updatedName.getName() == null || updatedName.getName().isEmpty()) {
            return Response.status(Response.Status.BAD_REQUEST)
                           .entity("New name cannot be empty.").build();
        }
        trainer.setName(updatedName.getName());
        trainer.persist();
        return Response.ok("Trainer name updated successfully").build();
    }

    // Delete a trainer
    @Path("/delete/{id}")
    @DELETE
    @Transactional
    public Response deleteTrainer(@PathParam("id") Long id) {
        UserName trainer = UserName.findById(id);
        if (trainer == null) {
            return Response.status(Response.Status.NOT_FOUND)
                           .entity("Trainer not found with ID: " + id).build();
        }
        trainer.delete();
        return Response.ok("Trainer deleted successfully").build();
    }
}
