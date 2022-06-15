import http from "http";
import { createTerminus } from "@godaddy/terminus";
import app from "../src/app";

const port = process.env.PORT || 3000;

const server = http.createServer(app);

const onSignal = () => {
  console.log("server is starting cleanup");
  // start cleanup of resource, like databases or file descriptors

  return Promise.resolve();
};

const onHealthCheck = () => {
  // checks if the system is healthy, like the db connection is live
  // resolves, if health, rejects if not

  return Promise.resolve('UP');
};

const beforeShutdown = () => {
  // given your readiness probes run every 5 second
  // may be worth using a bigger number so you won't
  // run into any race conditions
  return new Promise(resolve => {
    setTimeout(resolve, 5000)
  })
}

createTerminus(server, {
  signal: "SIGINT",
  healthChecks: { "/health-check": onHealthCheck },
  beforeShutdown,
  onSignal,
});

server.listen(port, () => console.info(`App listening at http://localhost:${port}`));
