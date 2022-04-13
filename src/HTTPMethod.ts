export enum HTTPMethod {
  // The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.
  get     = "GET",
  GET     = "GET",

  // The POST method submits an entity to the specified resource, often causing a change in state or side effects on the server.
  post    = "POST",
  POST    = "POST",

  // The PUT method replaces all current representations of the target resource with the request payload.
  put     = "PUT",
  PUT     = "PUT",

  // The DELETE method deletes the specified resource.
  delete  = "DELETE",
  DELETE  = "DELETE",

  // The PATCH method applies partial modifications to a resource.
  patch   = "PATCH",
  PATCH   = "PATCH",

  // The HEAD method asks for a response identical to a GET request, but without the response body.
  head    = "HEAD",
  HEAD    = "HEAD",

  // The CONNECT method establishes a tunnel to the server identified by the target resource.
  connect = "CONNECT",
  CONNECT = "CONNECT",

  // The OPTIONS method describes the communication options for the target resource.
  options = "OPTIONS",
  OPTIONS = "OPTIONS",

  // The TRACE method performs a message loop-back test along the path to the target resource.
  trace   = "TRACE",
  TRACE   = "TRACE",
}

export default HTTPMethod;
