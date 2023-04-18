const view = document.getElementById("view");
const answer = document.getElementById("ans");
document.getElementById("clear").onclick = function clear() {
  view.value = "";
  ans.value = "";
}

document.getElementById("delete").onclick = function del() {
  view.value = view.value.slice(0, -1);
}
document.getElementById("equals").onclick = function ans() {
  try {
    const result = eval(view.value);
    if (isNaN(result)) {
      answer.value = "syntaxError";
    }
    else {
      answer.value = result;
    }
  }
  catch (e) {
    answer.value = 'SyntaxError';
  }
}

function input(num) {
  ans.value = "";
  view.value = view.value + num;
}
