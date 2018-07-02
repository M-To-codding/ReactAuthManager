const localStHandlers = {
  getItems: (key) => getItems(key),
  setItems: function (key, data) {
    setItems(key, data);
  }
}

var itemsArr = [];

function getItems(key) {
  itemsArr = JSON.parse(localStorage.getItem(key)) || [];
  return itemsArr;
}

function setItems(key, data) {
  itemsArr.push(data);
  localStorage.setItem(key, JSON.stringify(itemsArr));
}

export default localStHandlers;