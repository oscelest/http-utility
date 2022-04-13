import HTTPStatusCode from "./HTTPStatusCode";

export const HTTPStatusMessage: HTTPStatusMessage = {

  // --- Information responses --- //

  [HTTPStatusCode.Continue]:           "Continue",
  [HTTPStatusCode.SwitchingProtocols]: "Switching Protocols",
  [HTTPStatusCode.Processing]:         "Processing",
  [HTTPStatusCode.EarlyHints]:         "Early Hints",

  // --- Successful responses --- //

  [HTTPStatusCode.OK]:                          "OK",
  [HTTPStatusCode.Created]:                     "Created",
  [HTTPStatusCode.Accepted]:                    "Accepted",
  [HTTPStatusCode.NonAuthoritativeInformation]: "Non-Authoritative Information",
  [HTTPStatusCode.NoContent]:                   "No Content",
  [HTTPStatusCode.ResetContent]:                "Reset Content",
  [HTTPStatusCode.PartialContent]:              "Partial Content",
  [HTTPStatusCode.MultiStatus]:                 "Multi-Status",
  [HTTPStatusCode.AlreadyReported]:             "Already Reported",
  [HTTPStatusCode.IMUsed]:                      "IM Used",

  // --- Redirection messages --- //

  [HTTPStatusCode.MultipleChoices]:   "Multiple Choices",
  [HTTPStatusCode.MovedPermanent]:    "Moved Permanent",
  [HTTPStatusCode.Found]:             "Found",
  [HTTPStatusCode.SeeOther]:          "See Other",
  [HTTPStatusCode.NotModified]:       "Not Modified",
  [HTTPStatusCode.UseProxy]:          "Use Proxy",
  [HTTPStatusCode.TemporaryRedirect]: "Temporary Redirect",
  [HTTPStatusCode.PermanentRedirect]: "Permanent Redirect",

  // --- Client error responses -- //

  [HTTPStatusCode.BadRequest]:                   "Bad Request",
  [HTTPStatusCode.Unauthorized]:                 "Unauthorized",
  [HTTPStatusCode.PaymentRequired]:              "Payment Required",
  [HTTPStatusCode.Forbidden]:                    "Forbidden",
  [HTTPStatusCode.NotFound]:                     "Not Found",
  [HTTPStatusCode.MethodNotAllowed]:             "Method Not Allowed",
  [HTTPStatusCode.NotAcceptable]:                "Not Acceptable",
  [HTTPStatusCode.ProxyAuthenticationRequired]:  "Proxy Authentication Required",
  [HTTPStatusCode.RequestTimeout]:               "Request Timeout",
  [HTTPStatusCode.Conflict]:                     "Conflict",
  [HTTPStatusCode.Gone]:                         "Gone",
  [HTTPStatusCode.LengthRequired]:               "Length Required",
  [HTTPStatusCode.PreconditionFailed]:           "Precondition Failed",
  [HTTPStatusCode.RequestEntityTooLarge]:        "Request-Entity Too Large",
  [HTTPStatusCode.RequestURITooLong]:            "Request-URI Too Long",
  [HTTPStatusCode.UnsupportedMediaType]:         "Unsupported Media Type",
  [HTTPStatusCode.RequestedRangeNotSatisfiable]: "Requested Range Not Satisfiable",
  [HTTPStatusCode.ExpectationFailed]:            "Expectation Failed",
  [HTTPStatusCode.IamATeapot]:                   "I'm a teapot",
  [HTTPStatusCode.MisdirectedRequest]:           "Misdirected Request",
  [HTTPStatusCode.UnprocessableEntity]:          "Unprocessable Entity",
  [HTTPStatusCode.Locked]:                       "Locked",
  [HTTPStatusCode.FailedDependency]:             "Failed Dependency",
  [HTTPStatusCode.TooEarly]:                     "Too Early",
  [HTTPStatusCode.UpgradeRequired]:              "Upgrade Required",
  [HTTPStatusCode.PreconditionRequired]:         "Precondition Required",
  [HTTPStatusCode.TooManyRequests]:              "Too Many Requests",
  [HTTPStatusCode.RequestHeaderFieldsTooLarge]:  "Request Header Fields Too Large",
  [HTTPStatusCode.UnavailableForLegalReasons]:   "Unavailable For Legal Reasons",

  // --- Server error responses -- //

  [HTTPStatusCode.InternalServerError]:             "Internal Server Error",
  [HTTPStatusCode.NotImplemented]:                  "Not Implemented",
  [HTTPStatusCode.BadGateway]:                      "Bad Gateway",
  [HTTPStatusCode.ServiceUnavailable]:              "Service Unavailable",
  [HTTPStatusCode.GatewayTimout]:                   "Gateway Timout",
  [HTTPStatusCode.HTTPVersionNotSupported]:         "HTTP Version Not Supported",
  [HTTPStatusCode.VariantAlsoNegotiates]:           "Variant Also Negotiates",
  [HTTPStatusCode.InsufficientStorage]:             "Insufficient Storage",
  [HTTPStatusCode.LoopDetected]:                    "Loop Detected",
  [HTTPStatusCode.NotExtended]:                     "Not Extended",
  [HTTPStatusCode.NetworkAuthenticationRequired]:   "Network Authentication Required",
  [HTTPStatusCode.WebServerReturnedAnUnknownError]: "Web Server Returned an Unknown Error",
  [HTTPStatusCode.WebServerIsDown]:                 "Web Server Is Down",
  [HTTPStatusCode.ConnectionTimedOut]:              "Connection Timed Out",
  [HTTPStatusCode.OriginIsUnreachable]:             "Origin Is Unreachable",
  [HTTPStatusCode.ATimeoutOccurred]:                "A Timeout Occurred",
  [HTTPStatusCode.SSLHandshakeFailed]:              "SSL Handshake Failed",
  [HTTPStatusCode.InvalidSSLCertificate]:           "Invalid SSL Certificate",
  [HTTPStatusCode.RailgunError]:                    "Railgun Error"

};

export interface HTTPStatusMessage {
  [HTTPStatusCode.Continue]: "Continue";
  [HTTPStatusCode.SwitchingProtocols]: "Switching Protocols";
  [HTTPStatusCode.Processing]: "Processing";
  [HTTPStatusCode.EarlyHints]: "Early Hints";
  [HTTPStatusCode.OK]: "OK";
  [HTTPStatusCode.Created]: "Created";
  [HTTPStatusCode.Accepted]: "Accepted";
  [HTTPStatusCode.NonAuthoritativeInformation]: "Non-Authoritative Information";
  [HTTPStatusCode.NoContent]: "No Content";
  [HTTPStatusCode.ResetContent]: "Reset Content";
  [HTTPStatusCode.PartialContent]: "Partial Content";
  [HTTPStatusCode.MultiStatus]: "Multi-Status";
  [HTTPStatusCode.AlreadyReported]: "Already Reported";
  [HTTPStatusCode.IMUsed]: "IM Used";
  [HTTPStatusCode.MultipleChoices]: "Multiple Choices";
  [HTTPStatusCode.MovedPermanent]: "Moved Permanent";
  [HTTPStatusCode.Found]: "Found";
  [HTTPStatusCode.SeeOther]: "See Other";
  [HTTPStatusCode.NotModified]: "Not Modified";
  [HTTPStatusCode.UseProxy]: "Use Proxy";
  [HTTPStatusCode.TemporaryRedirect]: "Temporary Redirect";
  [HTTPStatusCode.PermanentRedirect]: "Permanent Redirect";
  [HTTPStatusCode.BadRequest]: "Bad Request";
  [HTTPStatusCode.Unauthorized]: "Unauthorized";
  [HTTPStatusCode.PaymentRequired]: "Payment Required";
  [HTTPStatusCode.Forbidden]: "Forbidden";
  [HTTPStatusCode.NotFound]: "Not Found";
  [HTTPStatusCode.MethodNotAllowed]: "Method Not Allowed";
  [HTTPStatusCode.NotAcceptable]: "Not Acceptable";
  [HTTPStatusCode.ProxyAuthenticationRequired]: "Proxy Authentication Required";
  [HTTPStatusCode.RequestTimeout]: "Request Timeout";
  [HTTPStatusCode.Conflict]: "Conflict";
  [HTTPStatusCode.Gone]: "Gone";
  [HTTPStatusCode.LengthRequired]: "Length Required";
  [HTTPStatusCode.PreconditionFailed]: "Precondition Failed";
  [HTTPStatusCode.RequestEntityTooLarge]: "Request-Entity Too Large";
  [HTTPStatusCode.RequestURITooLong]: "Request-URI Too Long";
  [HTTPStatusCode.UnsupportedMediaType]: "Unsupported Media Type";
  [HTTPStatusCode.RequestedRangeNotSatisfiable]: "Requested Range Not Satisfiable";
  [HTTPStatusCode.ExpectationFailed]: "Expectation Failed";
  [HTTPStatusCode.IamATeapot]: "I'm a teapot";
  [HTTPStatusCode.MisdirectedRequest]: "Misdirected Request";
  [HTTPStatusCode.UnprocessableEntity]: "Unprocessable Entity";
  [HTTPStatusCode.Locked]: "Locked";
  [HTTPStatusCode.FailedDependency]: "Failed Dependency";
  [HTTPStatusCode.TooEarly]: "Too Early";
  [HTTPStatusCode.UpgradeRequired]: "Upgrade Required";
  [HTTPStatusCode.PreconditionRequired]: "Precondition Required";
  [HTTPStatusCode.TooManyRequests]: "Too Many Requests";
  [HTTPStatusCode.RequestHeaderFieldsTooLarge]: "Request Header Fields Too Large";
  [HTTPStatusCode.UnavailableForLegalReasons]: "Unavailable For Legal Reasons";
  [HTTPStatusCode.InternalServerError]: "Internal Server Error";
  [HTTPStatusCode.NotImplemented]: "Not Implemented";
  [HTTPStatusCode.BadGateway]: "Bad Gateway";
  [HTTPStatusCode.ServiceUnavailable]: "Service Unavailable";
  [HTTPStatusCode.GatewayTimout]: "Gateway Timout";
  [HTTPStatusCode.HTTPVersionNotSupported]: "HTTP Version Not Supported";
  [HTTPStatusCode.VariantAlsoNegotiates]: "Variant Also Negotiates";
  [HTTPStatusCode.InsufficientStorage]: "Insufficient Storage";
  [HTTPStatusCode.LoopDetected]: "Loop Detected";
  [HTTPStatusCode.NotExtended]: "Not Extended";
  [HTTPStatusCode.NetworkAuthenticationRequired]: "Network Authentication Required";
  [HTTPStatusCode.WebServerReturnedAnUnknownError]: "Web Server Returned an Unknown Error";
  [HTTPStatusCode.WebServerIsDown]: "Web Server Is Down";
  [HTTPStatusCode.ConnectionTimedOut]: "Connection Timed Out";
  [HTTPStatusCode.OriginIsUnreachable]: "Origin Is Unreachable";
  [HTTPStatusCode.ATimeoutOccurred]: "A Timeout Occurred";
  [HTTPStatusCode.SSLHandshakeFailed]: "SSL Handshake Failed";
  [HTTPStatusCode.InvalidSSLCertificate]: "Invalid SSL Certificate";
  [HTTPStatusCode.RailgunError]: "Railgun Error";
}

export default HTTPStatusMessage;
