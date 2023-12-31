// See https://github.com/typicode/json-server#module
import { create, router as _router, defaults, rewriter } from "json-server";
const server = create();
const router = _router("user.json");
const middlewares = defaults();

server.use(middlewares);
// Add this before server.use(router)
server.use(
  rewriter({
    "/api/*": "/$1",
    "/blog/:resource/:id/show": "/:resource/:id",
  })
);
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});

// Export the Server API
export default server;
