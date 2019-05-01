declare function require(moduleName: string): any;

if (process.env.NODE_ENV !== "production") {
  const dotenv: any = require("dotenv");
  dotenv.config();
}

const normalizePort = (val: string) => {
  const parsedPort = parseInt(val, 10);
  if (isNaN(parsedPort)) {
    return val;
  }
  if (parsedPort >= 0) {
    return parsedPort;
  }
  return false;
}

export const port = normalizePort(process.env.port || process.env.PORT || "3978");