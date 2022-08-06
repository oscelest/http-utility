import HTTP from "http";
import HTTPMethod from "../../src/HTTPMethod";
import HTTPStatusCode from "../../src/HTTPStatusCode";
import HTTPStatusMessage from "../../src/HTTPStatusMessage";
import Test from "../Variables";

function getRequestCode(code: number) {
  return new Promise<HTTP.IncomingMessage>((resolve, reject) => {
    const request = HTTP.request({method: HTTPMethod.GET, hostname: Test.host, port: Test.port, path: `/${code}`}, resolve);
    request.on("error", error => reject(error));
    request.end();
  });
}

test("200", async () => {
  const {statusCode, statusMessage} = await getRequestCode(200);
  expect(statusCode).toBe(HTTPStatusCode.OK);
  expect(statusMessage).toBe(HTTPStatusMessage[HTTPStatusCode.OK]);
});

test("300", async () => {
  const {statusCode, statusMessage} = await getRequestCode(300);
  expect(statusCode).toBe(HTTPStatusCode.MultipleChoices);
  expect(statusMessage).toBe(HTTPStatusMessage[HTTPStatusCode.MultipleChoices]);
});

test("400", async () => {
  const {statusCode, statusMessage} = await getRequestCode(400);
  expect(statusCode).toBe(HTTPStatusCode.BadRequest);
  expect(statusMessage).toBe(HTTPStatusMessage[HTTPStatusCode.BadRequest]);
});

test("500", async () => {
  const {statusCode, statusMessage} = await getRequestCode(500);
  expect(statusCode).toBe(HTTPStatusCode.InternalServerError);
  expect(statusMessage).toBe(HTTPStatusMessage[HTTPStatusCode.InternalServerError]);
});
