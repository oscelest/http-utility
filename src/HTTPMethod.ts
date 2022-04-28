export enum HTTPMethod {
  // The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.
  get     = "get",
  GET     = "GET",

  // The POST method submits an entity to the specified resource, often causing a change in state or side effects on the server.
  post    = "post",
  POST    = "POST",

  // The PUT method replaces all current representations of the target resource with the request payload.
  put     = "put",
  PUT     = "PUT",

  // The DELETE method deletes the specified resource.
  delete  = "delete",
  DELETE  = "DELETE",

  // The PATCH method applies partial modifications to a resource.
  patch   = "patch",
  PATCH   = "PATCH",

  // The HEAD method asks for a response identical to a GET request, but without the response body.
  head    = "head",
  HEAD    = "HEAD",

  // The CONNECT method establishes a tunnel to the server identified by the target resource.
  connect = "connect",
  CONNECT = "CONNECT",

  // The OPTIONS method describes the communication options for the target resource.
  options = "options",
  OPTIONS = "OPTIONS",

  // The TRACE method performs a message loop-back test along the path to the target resource.
  trace   = "trace",
  TRACE   = "TRACE",
}

export default HTTPMethod;
