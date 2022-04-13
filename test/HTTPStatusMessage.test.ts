import HTTPS from "https";
import {IncomingMessage} from "http";
import {HTTPStatusCode, HTTPStatusMessage, HTTPMethod} from "../src";

function getRequestCode(code: number) {
  return new Promise<IncomingMessage>((resolve, reject) => {
    const request = HTTPS.request({method: HTTPMethod.GET, hostname: "httpstat.us", path: `/${code}`, port: 443}, res => {
      resolve(res);
    });

    request.on("error", error => reject(error));

    request.end();
  });
}

test("200", async () => {
  const result = await getRequestCode(200);
  expect(HTTPStatusCode.OK).toBe(result.statusCode);
  expect(HTTPStatusMessage[HTTPStatusCode.OK]).toBe(result.statusMessage);
});

test("300", async () => {
  const result = await getRequestCode(300);
  expect(HTTPStatusCode.MultipleChoices).toBe(result.statusCode);
  expect(HTTPStatusMessage[HTTPStatusCode.MultipleChoices]).toBe(result.statusMessage);
});

test("400", async () => {
  const result = await getRequestCode(400);
  expect(HTTPStatusCode.BadRequest).toBe(result.statusCode);
  expect(HTTPStatusMessage[HTTPStatusCode.BadRequest]).toBe(result.statusMessage);
});

test("500", async () => {
  const result = await getRequestCode(500);
  expect(HTTPStatusCode.InternalServerError).toBe(result.statusCode);
  expect(HTTPStatusMessage[HTTPStatusCode.InternalServerError]).toBe(result.statusMessage);
});
