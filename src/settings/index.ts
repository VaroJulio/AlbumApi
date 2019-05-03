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

export const port = normalizePort(process.env.PORT || "3978");
export const usersurl = process.env.USERSURL;
export const photosurl = process.env.PHOTOSURL;
export const albumsurl = process.env.ALBUMSURL;
export const users = process.env.USERSSERVICENAME;
export const photos = process.env.PHOTOSSERVICENAME;
export const albums = process.env.ALBUMSSERVICENAME;