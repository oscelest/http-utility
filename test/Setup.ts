import Express from "express";
import Test from "./Variables";
import HTTPStatusMessage from "../src/HTTPStatusMessage";
import HTTPStatusCode from "../src/HTTPStatusCode";

beforeAll(async () => {
  Test.port = 7327;
  Test.host = "localhost";
  Test.application = Express();

  Test.application.all("/:code", async (request: Express.Request, response: Express.Response) => {
    const code = request.params.code ? Number(request.params.code) as HTTPStatusCode : HTTPStatusCode.OK;
    response.status(code).send(HTTPStatusMessage[code]);
  });

  Test.application.all("*", async (request: Express.Request, response: Express.Response) => {
    response.status(HTTPStatusCode.OK).send(request.url);
  });

  Test.server = Test.application.listen(Test.port);
});

afterAll(async () => {
  Test.server.close();
});
