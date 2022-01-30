'use strict'
// 1行目に記載している 'use strict' は削除しないでください

console.log(" - presentation - ");

// ------------------------------ variable ------------------------------
const everyDayTask = ["体温チェック", "安全呼称"];
const everyWeekTask = ["交通安全", "健康Challenge"];
const everyMonthTask = ["創意くふう", "ヒヤリハット"];

const members = [
  {
    name: "前田",
    where: "在社",
    toDo: "notyet"
  },
  {
    name: "公志",
    where: "年休",
    toDo: "notyet"
  },
  {
    name: "後田",
    where: "仕入先S社",
    toDo: "notyet"
  },
  {
    name: "園田",
    where: "在社",
    toDo: "notyet"
  },
  {
    name: "江田",
    where: "振休   〜2/8",
    toDo: "notyet"
  },
];

let everyDay = document.getElementById("everyday");
let everyWeek = document.getElementById("everyweek");
let everyMonth = document.getElementById("everymonth");

let form = document.querySelector("form");
let input = document.querySelector("input");

let list = document.querySelector(".container > ul");
let li = document.querySelector(".container > ul > li");

let membersList = document.querySelector(".members > ul");

// ------------------------------ choose List ------------------------------

everyDay.addEventListener("click", () => {
  if (list.className === "hidden") {
    list.classList.remove("hidden");
  } else if (everyDay.className === "select") {
    list.classList.add("hidden");
  }
  everyDay.classList.toggle("select"); // ok
  everyWeek.classList.remove("select"); // ok
  everyMonth.classList.remove("select"); // ok
  showList(everyDayTask);
})

everyWeek.addEventListener("click", () => {
  if (list.className === "hidden") {
    list.classList.remove("hidden");
  } else if (everyWeek.className === "select") {
    list.classList.add("hidden");
  }
  everyWeek.classList.toggle("select");
  everyDay.classList.remove("select");
  everyMonth.classList.remove("select");
  showList(everyWeekTask);
})

everyMonth.addEventListener("click", () => {
  if (list.className === "hidden") {
    list.classList.remove("hidden");
  } else if (everyMonth.className === "select") {
    list.classList.add("hidden");
  }
  everyMonth.classList.toggle("select");
  everyDay.classList.remove("select");
  everyWeek.classList.remove("select");
  showList(everyMonthTask);
})

// everyWeek.addEventListener("click", () => {
//   list.classList.toggle("hidden");
//   everyWeek.classList.toggle("select");
//   everyDay.classList.remove("select");
//   everyMonth.classList.remove("select");
//   showList(everyWeekTask);
// })

// everyMonth.addEventListener("click", () => {
//   list.classList.toggle("hidden");
//   everyMonth.classList.toggle("select");
//   everyDay.classList.remove("select");
//   everyWeek.classList.remove("select");
//   showList(everyMonthTask);
// })

// ------------------------------ function ------------------------------

function showList (taskArray) {
  while(list.firstChild) {
    list.removeChild(list.firstChild);
  }
  for (const task of taskArray) {
    const listItem = document.createElement("li");
    listItem.textContent = task;
    list.appendChild(listItem);
  }
}

function showMembers (members) {
  while (membersList.firstChild) {
    membersList.removeChild(membersList.firstChild);
  }
  for (const member of members) {
    const memberItem = document.createElement("li");
    memberItem.textContent = member.name + " - " + member.where;
    membersList.appendChild(memberItem);
  }
}
window.onload = showMembers(members);

// ------------------------------ add items ------------------------------

form.addEventListener("submit", e => {
  console.log("yam");
  e.preventDefault();
  if (list.classList.contains("hidden") === false) {
    if (everyDay.classList.contains("select")) {
      everyDayTask.push(input.value);
      showList(everyDayTask);
    } else if (everyWeek.classList.contains("select")) {
      everyWeekTask.push(input.value);
      showList(everyWeekTask);
    } else if (everyMonth.classList.contains("select")) {
      everyMonthTask.push(input.value);
      showList(everyMonthTask);
    }
    input.value = "";
  }

// --------------- final ---------------
  if (input.value === "DIG2") {
    document.body.querySelector("div").classList.add("hidden");
    const thanks = document.querySelector("h5");
    console.log(thanks.textContent);
    setTimeout(function() {
      thanks.classList.remove("hidden");
      }, 3000);
  }
})
