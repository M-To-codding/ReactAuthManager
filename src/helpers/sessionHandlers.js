const sessionStHandlers = {
  getItems: (key) => getItems(key),
  setItems: (name, data) => setItems(name, data),
  removeUser: item => sessionStorage.removeItem(item)
}

var loginedUser = '';

function getItems(key) {
  loginedUser = JSON.parse(sessionStorage.getItem(key)) || undefined;
  return loginedUser;
}

function setItems(key, user) {
  sessionStorage.setItem(key, JSON.stringify(user));
}

export default sessionStHandlers;