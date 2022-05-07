import Express from "express";
import HTTP from "http";

export module Test {
  export let port: number;
  export let host: string;
  export let server: HTTP.Server;
  export let application: Express.Application;
}

export default Test;
