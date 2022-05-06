import io from "socket.io-client";
const host =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5500"
    : "https://aiiwoe.herokuapp.com/";
export function init_socket() {
  return io(host);
}
