import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("api/db.json");
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use((req, _, next) => {
  if (req.method === "POST") {
    req.body.id = Date.now();
  }
  next();
});
server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});
