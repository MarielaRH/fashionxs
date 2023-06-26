import { handleAuth } from "@auth0/nextjs-auth0";

/**
 * This will create those paths
 * /login
 * Redirects and send params to auth0
 *
 * /logout
 *
 * /callback
 * Gets a user and params after logging in, encript the cookie and saves it
 *
 * /me
 * Next will call this endpoint to ask auth0 if the user cookie is valid and if the user is logged
 */

export default handleAuth();
