package org.acme;

import jakarta.ws.rs.container.ContainerRequestContext;
import jakarta.ws.rs.container.ContainerRequestFilter;
import jakarta.ws.rs.ext.Provider;
import java.io.IOException;

@Provider
public class ReactRoutingFilter implements ContainerRequestFilter {
    @Override
    public void filter(ContainerRequestContext requestContext) throws IOException {
        //Check if the path is part of your API
        String path = requestContext.getUriInfo().getPath();

        //Adjust to exclude API paths, assuming your APIs Start with /api
        if (!path.startsWith("api") && !path.startsWith("static") && !path.equals("index.html")) {
            requestContext.setRequestUri(requestContext.getUriInfo().getBaseUriBuilder().path("index.html").build());
        }
    }

}
