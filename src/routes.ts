/**
 * @openapi
 * /hello:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
export const hello = async (ctx, next) => {
  ctx.body = "Hello World!";
  next();
};

