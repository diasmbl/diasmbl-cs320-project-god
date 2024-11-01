package org.acme;

import jakarta.ws.rs.container.ContainerRequestContext;
import jakarta.ws.rs.container.ContainerRequestFilter;
import jakarta.ws.rs.ext.Provider;
import java.io.IOException;

@Provider
public class ReactRoutingFilter implements ContainerRequestFilter {

    /**
     * Filters and redirects requests for routes that are not API-related.
     *
     * @param requestContext The context of the HTTP request.
     * @throws IOException In case of IO errors.
     */
    @Override
    public void filter(ContainerRequestContext requestContext) throws IOException {
        // Check if the request has already matched a resource
        if (requestContext.getUriInfo().getMatchedResources().isEmpty()) {
            // Retrieve the request path
            String path = requestContext.getUriInfo().getPath();

            // Adjust to exclude API paths and serve React app routes
            if (!path.startsWith("api") && !path.startsWith("static") && !path.equals("index.html")) {
                // Redirect to the React app's index.html
                requestContext.setRequestUri(requestContext.getUriInfo().getBaseUriBuilder().path("index.html").build());
            }
        }
    }
}
