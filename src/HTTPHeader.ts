export enum HTTPHeader {
  /**
   * @since Experimental
   */
  AcceptCH                        = "Accept-CH",
  /**
   * @deprecated
   * @since Experimental
   */
  AcceptCHLifetime                = "Accept-CH-Lifetime",

  /**
   * @readonly
   */
  AcceptCharset                   = "Accept-Charset",
  /**
   * @readonly
   */
  AcceptEncoding                  = "Accept-Encoding",
  AcceptLanguage                  = "Accept-Language",
  AcceptPatch                     = "Accept-Patch",
  AcceptPost                      = "Accept-Post",
  AcceptRanges                    = "Accept-Ranges",
  Accept                          = "Accept",

  AccessControlAllowCredentials   = "Access-Control-Allow-Credentials",
  /**
   * @readonly
   */
  AccessControlAllowHeaders       = "Access-Control-Allow-Headers",
  /**
   * @readonly
   */
  AccessControlAllowMethods       = "Access-Control-Allow-Methods",
  AccessControlAllowOrigin        = "Access-Control-Allow-Origin",
  AccessControlExposeHeaders      = "Access-Control-Expose-Headers",
  AccessControlMaxAge             = "Access-Control-Max-Age",
  AccessControlRequestHeaders     = "Access-Control-Request-Headers",
  AccessControlRequestMethod      = "Access-Control-Request-Method",

  Age                             = "Age",

  Allow                           = "Allow",

  AltSvc                          = "Alt-Svc",

  Authorization                   = "Authorization",

  CacheControl                    = "Cache-Control",

  ClearSiteData                   = "Clear-Site-Data",

  /**
   * @readonly
   */
  Connection                      = "Connection",

  ContentDisposition              = "Content-Disposition",
  /**
   * @Deprecated
   */
  ContentDPR                      = "Content-DPR",
  ContentEncoding                 = "Content-Encoding",
  ContentLanguage                 = "Content-Language",

  /**
   * @readonly
   */
  ContentLength                   = "Content-Length",
  ContentLocation                 = "Content-Location",
  ContentRange                    = "Content-Range",
  ContentSecurityPolicyReportOnly = "Content-Security-Policy-Report-Only",
  ContentSecurityPolicy           = "Content-Security-Policy",
  ContentType                     = "Content-Type",

  Cookie                          = "Cookie",

  CrossOriginEmbedderPolicy       = "Cross-Origin-Embedder-Policy",
  CrossOriginOpenerPolicy         = "Cross-Origin-Opener-Policy",
  CrossOriginResourcePolicy       = "Cross-Origin-Resource-Policy",

  /**
   * @readonly
   */
  Date                            = "Date",

  /**
   * @Since Experimental
   */
  DeviceMemory                    = "Device-Memory",

  Digest                          = "Digest",

  /**
   * @readonly
   */
  DNT                             = "DNT",

  /**
   * @Since Experimental
   */
  Downlink                        = "Downlink",

  /**
   * @Deprecated
   * @since Experimental
   */
  DPR                             = "DPR",

  /**
   * @since Experimental
   */
  EarlyData                       = "Early-Data",

  /**
   * @since Experimental
   */
  ECT                             = "ECT",

  ETag                            = "ETag",

  ExpectCT                        = "Expect-CT",

  /**
   * @readonly
   */
  Expect                          = "Expect",

  Expires                         = "Expires",

  /**
   * @readonly
   * @since Experimental
   */
  FeaturePolicy                   = "Feature-Policy",

  Forwarded                       = "Forwarded",

  From                            = "From",

  /**
   * @readonly
   */
  Host                            = "Host",

  IfMatch                         = "If-Match",
  IfModifiedSince                 = "If-Modified-Since",
  IfNoneMatch                     = "If-None-Match",
  IfRange                         = "If-Range",
  IfUnmodifiedSince               = "If-Unmodified-Since",

  /**
   * @readonly
   */
  KeepAlive                       = "Keep-Alive",

  /**
   * @Deprecated
   * @since Experimental
   */
  LargeAllocation                 = "Large-Allocation",

  LastModified                    = "Last-Modified",

  Link                            = "Link",

  Location                        = "Location",

  NEL                             = "NEL",

  /**
   * @readonly
   */
  Origin                          = "Origin",

  /**
   * @Deprecated
   */
  Pragma                          = "Pragma",

  /**
   * @readonly
   */
  ProxyAuthenticate               = "Proxy-Authenticate",
  /**
   * @readonly
   */
  ProxyAuthorization              = "Proxy-Authorization",

  /**
   * @Deprecated
   */
  PublicKeyPinsReportOnly         = "Public-Key-Pins-Report-Only",
  /**
   * @Deprecated
   */
  PublicKeyPins                   = "Public-Key-Pins",

  Range                           = "Range",
  /**
   * @readonly
   */
  Referer                         = "Referer",
  ReferrerPolicy                  = "Referrer-Policy",

  RetryAfter                      = "Retry-After",
  /**
   * @since Experimental
   */
  RTT                             = "RTT",

  SaveData                        = "Save-Data",

  /**
   * @readonly
   * @since Experimental
   */
  SecCHUAArch                     = "SecCHUAArch",
  /**
   * @readonly
   * @since Experimental
   */
  SecCHUABitness                  = "SecCHUABitness",
  /**
   * @readonly
   * @since Experimental
   */
  SecCHUAFullVersionList          = "SecCHUAFull-Version-List",
  /**
   * @readonly
   * @deprecated
   */
  SecCHUAFullVersion              = "SecCHUAFull-Version",
  /**
   * @readonly
   * @since Experimental
   */
  SecCHUAMobile                   = "SecCHUAMobile",
  /**
   * @readonly
   * @since Experimental
   */
  SecCHUAModel                    = "SecCHUAModel",
  /**
   * @since Experimental
   */
  SecCHUAPlatformVersion          = "SecCHUAPlatform-Version",
  /**
   * @since Experimental
   */
  SecCHUAPlatform                 = "SecCHUAPlatform",
  /**
   * @readonly
   * @since Experimental
   */
  SecCHUA                         = "Sec-CH-UA",
  /**
   * @readonly
   */
  SecFetchDest                    = "Sec-Fetch-Dest",
  /**
   * @readonly
   */
  SecFetchMode                    = "Sec-Fetch-Mode",
  /**
   * @readonly
   */
  SecFetchSite                    = "Sec-Fetch-Site",
  /**
   * @readonly
   */
  SecFetchUser                    = "Sec-Fetch-User",
  /**
   * @readonly
   */
  SecWebSocketAccept              = "Sec-WebSocket-Accept",

  ServerTiming                    = "Server-Timing",
  Server                          = "Server",

  ServiceWorkerNavigationPreload  = "Service-Worker-Navigation-Preload",

  SetCookie                       = "Set-Cookie",

  SourceMap                       = "SourceMap",

  StrictTransportSecurity         = "Strict-Transport-Security",

  /**
   * @readonly
   */
  TE                              = "TE",

  TimingAllowOrigin               = "Timing-Allow-Origin",

  Tk                              = "Tk",

  /**
   * @readonly
   */
  Trailer                         = "Trailer",

  /**
   * @readonly
   */
  TransferEncoding                = "Transfer-Encoding",

  UpgradeInsecureRequests         = "Upgrade-Insecure-Requests",
  /**
   * @readonly
   */
  Upgrade                         = "Upgrade",

  UserAgent                       = "User-Agent",

  Vary                            = "Vary",
  /**
   * @readonly
   */
  Via                             = "Via",

  /**
   * @Deprecated
   * @since Experimental
   */
  ViewportWidth                   = "Viewport-Width",

  WantDigest                      = "Want-Digest",

  /**
   * @Deprecated
   */
  Warning                         = "Warning",

  /**
   * @Deprecated
   * @since Experimental
   */
  Width                           = "Width",

  WWWAuthenticate                 = "WWW-Authenticate",

  XContentTypeOptions             = "X-Content-Type-Options",
  XDNSPrefetchControl             = "X-DNS-Prefetch-Control",
  /**
   * @since Experimental
   */
  XForwardedFor                   = "X-Forwarded-For",
  /**
   * @since Experimental
   */
  XForwardedHost                  = "X-Forwarded-Host",
  /**
   * @since Experimental
   */
  XForwardedProto                 = "X-Forwarded-Proto",
  XFrameOptions                   = "X-Frame-Options",
  XXSSProtection                  = "X-XSS-Protection",
}

export default HTTPHeader;
