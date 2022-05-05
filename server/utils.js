const { randomUUID } = require("crypto");
function findEmptyRoom(rooms, type) {
  for (const [key, value] of rooms.entries()) {
    if (type === "group" && value.size <= 5) {
      return key;
    } else if (type === "individual" && value.size < 2) {
      return key;
    }
  }
  return createRoom();
}
function createRoom() {
  const _id = randomUUID();
  return _id;
}

module.exports = {
  findEmptyRoom,
};
