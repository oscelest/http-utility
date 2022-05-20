enum HTTPHeader {
  /**
   * @since Experimental
   */
  AcceptCH                        = "accept-ch",
  /**
   * @deprecated
   * @since Experimental
   */
  AcceptCHLifetime                = "accept-ch-lifetime",

  /**
   * @readonly
   */
  AcceptCharset                   = "accept-charset",
  /**
   * @readonly
   */
  AcceptEncoding                  = "accept-encoding",
  AcceptLanguage                  = "accept-language",
  AcceptPatch                     = "accept-patch",
  AcceptPost                      = "accept-post",
  AcceptRanges                    = "accept-ranges",
  Accept                          = "accept",

  AccessControlAllowCredentials   = "access-control-allow-credentials",
  /**
   * @readonly
   */
  AccessControlAllowHeaders       = "access-control-allow-headers",
  /**
   * @readonly
   */
  AccessControlAllowMethods       = "access-control-allow-methods",
  AccessControlAllowOrigin        = "access-control-allow-origin",
  AccessControlExposeHeaders      = "access-control-expose-headers",
  AccessControlMaxAge             = "access-control-max-age",
  AccessControlRequestHeaders     = "access-control-request-headers",
  AccessControlRequestMethod      = "access-control-request-method",

  Age                             = "age",

  Allow                           = "allow",

  AltSvc                          = "alt-svc",

  Authorization                   = "authorization",

  CacheControl                    = "cache-control",

  ClearSiteData                   = "clear-site-data",

  /**
   * @readonly
   */
  Connection                      = "connection",

  ContentDisposition              = "content-disposition",
  /**
   * @Deprecated
   */
  ContentDPR                      = "content-dpr",
  ContentEncoding                 = "content-encoding",
  ContentLanguage                 = "content-language",

  /**
   * @readonly
   */
  ContentLength                   = "content-length",
  ContentLocation                 = "content-location",
  ContentRange                    = "content-range",
  ContentSecurityPolicyReportOnly = "content-security-policy-report-only",
  ContentSecurityPolicy           = "content-security-policy",
  ContentType                     = "content-type",

  Cookie                          = "cookie",

  CrossOriginEmbedderPolicy       = "cross-origin-embedder-policy",
  CrossOriginOpenerPolicy         = "cross-origin-opener-policy",
  CrossOriginResourcePolicy       = "cross-origin-resource-policy",

  /**
   * @readonly
   */
  Date                            = "date",

  /**
   * @Since Experimental
   */
  DeviceMemory                    = "device-memory",

  Digest                          = "digest",

  /**
   * @readonly
   */
  DNT                             = "dnt",

  /**
   * @Since Experimental
   */
  Downlink                        = "downlink",

  /**
   * @Deprecated
   * @since Experimental
   */
  DPR                             = "dpr",

  /**
   * @since Experimental
   */
  EarlyData                       = "early-data",

  /**
   * @since Experimental
   */
  ECT                             = "ect",

  ETag                            = "etag",

  ExpectCT                        = "expect-ct",

  /**
   * @readonly
   */
  Expect                          = "expect",

  Expires                         = "expires",

  /**
   * @readonly
   * @since Experimental
   */
  FeaturePolicy                   = "feature-policy",

  Forwarded                       = "forwarded",

  From                            = "from",

  /**
   * @readonly
   */
  Host                            = "host",

  IfMatch                         = "if-match",
  IfModifiedSince                 = "if-modified-since",
  IfNoneMatch                     = "if-none-match",
  IfRange                         = "if-range",
  IfUnmodifiedSince               = "if-unmodified-since",

  /**
   * @readonly
   */
  KeepAlive                       = "keep-alive",

  /**
   * @Deprecated
   * @since Experimental
   */
  LargeAllocation                 = "large-allocation",

  LastModified                    = "last-modified",

  Link                            = "link",

  Location                        = "location",

  NEL                             = "nel",

  /**
   * @readonly
   */
  Origin                          = "origin",

  /**
   * @Deprecated
   */
  Pragma                          = "pragma",

  /**
   * @readonly
   */
  ProxyAuthenticate               = "proxy-authenticate",
  /**
   * @readonly
   */
  ProxyAuthorization              = "proxy-authorization",

  /**
   * @Deprecated
   */
  PublicKeyPinsReportOnly         = "public-key-pins-report-only",
  /**
   * @Deprecated
   */
  PublicKeyPins                   = "public-key-pins",

  Range                           = "range",
  /**
   * @readonly
   */
  Referer                         = "referer",
  ReferrerPolicy                  = "referrer-policy",

  RetryAfter                      = "retry-after",
  /**
   * @since Experimental
   */
  RTT                             = "rtt",

  SaveData                        = "save-data",

  /**
   * @readonly
   * @since Experimental
   */
  SecCHUAArch                     = "secchuaarch",
  /**
   * @readonly
   * @since Experimental
   */
  SecCHUABitness                  = "secchuabitness",
  /**
   * @readonly
   * @since Experimental
   */
  SecCHUAFullVersionList          = "secchuafull-version-list",
  /**
   * @readonly
   * @deprecated
   */
  SecCHUAFullVersion              = "secchuafull-version",
  /**
   * @readonly
   * @since Experimental
   */
  SecCHUAMobile                   = "secchuamobile",
  /**
   * @readonly
   * @since Experimental
   */
  SecCHUAModel                    = "secchuamodel",
  /**
   * @since Experimental
   */
  SecCHUAPlatformVersion          = "secchuaplatform-version",
  /**
   * @since Experimental
   */
  SecCHUAPlatform                 = "secchuaplatform",
  /**
   * @readonly
   * @since Experimental
   */
  SecCHUA                         = "sec-ch-ua",
  /**
   * @readonly
   */
  SecFetchDest                    = "sec-fetch-dest",
  /**
   * @readonly
   */
  SecFetchMode                    = "sec-fetch-mode",
  /**
   * @readonly
   */
  SecFetchSite                    = "sec-fetch-site",
  /**
   * @readonly
   */
  SecFetchUser                    = "sec-fetch-user",
  /**
   * @readonly
   */
  SecWebSocketAccept              = "sec-websocket-accept",

  ServerTiming                    = "server-timing",
  Server                          = "server",

  ServiceWorkerNavigationPreload  = "service-worker-navigation-preload",

  SetCookie                       = "set-cookie",

  SourceMap                       = "sourcemap",

  StrictTransportSecurity         = "strict-transport-security",

  /**
   * @readonly
   */
  TE                              = "te",

  TimingAllowOrigin               = "timing-allow-origin",

  Tk                              = "tk",

  /**
   * @readonly
   */
  Trailer                         = "trailer",

  /**
   * @readonly
   */
  TransferEncoding                = "transfer-encoding",

  UpgradeInsecureRequests         = "upgrade-insecure-requests",
  /**
   * @readonly
   */
  Upgrade                         = "upgrade",

  UserAgent                       = "user-agent",

  Vary                            = "vary",
  /**
   * @readonly
   */
  Via                             = "via",

  /**
   * @Deprecated
   * @since Experimental
   */
  ViewportWidth                   = "viewport-width",

  WantDigest                      = "want-digest",

  /**
   * @Deprecated
   */
  Warning                         = "warning",

  /**
   * @Deprecated
   * @since Experimental
   */
  Width                           = "width",

  WWWAuthenticate                 = "www-authenticate",

  XContentTypeOptions             = "x-content-type-options",
  XDNSPrefetchControl             = "x-dns-prefetch-control",
  /**
   * @since Experimental
   */
  XForwardedFor                   = "x-forwarded-for",
  /**
   * @since Experimental
   */
  XForwardedHost                  = "x-forwarded-host",
  /**
   * @since Experimental
   */
  XForwardedProto                 = "x-forwarded-proto",
  XFrameOptions                   = "x-frame-options",
  XXSSProtection                  = "x-xss-protection",
}

export default HTTPHeader;
