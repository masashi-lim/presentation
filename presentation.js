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
    name: "真田",
    where: "年休",
    toDo: "notyet"
  },
  {
    name: "後田",
    where: "仕入先S社",
    toDo: "notyet"
  },
  {
    name: "横田",
    where: "在社",
    toDo: "notyet"
  },
  {
    name: "江田",
    where: "振休   〜2/8",
    toDo: "notyet"
  },
];

const everyDay = document.getElementById("everyday");
const everyWeek = document.getElementById("everyweek");
const everyMonth = document.getElementById("everymonth");

const form = document.querySelector("form");
const input = document.querySelector("input");
const button = document.querySelector("button");

const list = document.querySelector(".container > ul");
const li = document.querySelector(".container > ul > li");
const desire = document.getElementById("desire");

const membersList = document.querySelector(".members > ul");
const membersListItem = document.querySelector(".members > ul > li");
const groupMember = document.querySelector(".members > h3");

let clickCount = 0;

// ------------------------------ choose List ------------------------------

everyDay.addEventListener("click", () => {
  if (list.className === "hidden") {
    list.classList.remove("hidden");
    desire.classList.remove("hidden");
  } else if (everyDay.className === "select") {
    list.classList.add("hidden");
    desire.classList.add("hidden");
  }
  everyDay.classList.toggle("select");
  everyWeek.classList.remove("select");
  everyMonth.classList.remove("select");
  showList(everyDayTask);
})

everyWeek.addEventListener("click", () => {
  if (list.className === "hidden") {
    list.classList.remove("hidden");
    desire.classList.remove("hidden");
  } else if (everyWeek.className === "select") {
    list.classList.add("hidden");
    desire.classList.add("hidden");
  }
  everyWeek.classList.toggle("select");
  everyDay.classList.remove("select");
  everyMonth.classList.remove("select");
  showList(everyWeekTask);
})

everyMonth.addEventListener("click", () => {
  if (list.className === "hidden") {
    list.classList.remove("hidden");
    desire.classList.remove("hidden");
  } else if (everyMonth.className === "select") {
    list.classList.add("hidden");
    desire.classList.add("hidden");
  }
  everyMonth.classList.toggle("select");
  everyDay.classList.remove("select");
  everyWeek.classList.remove("select");
  showList(everyMonthTask);
})

// ------------------------------ functions ------------------------------

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

groupMember.addEventListener("click", () => {
  window.alert("メンバーをクリックすると...?");
  clickCount = 1;
});

membersList.addEventListener("click", () => {
  if (clickCount === 1) {
    clickCount = 0;
    window.alert("何も起きません");
  }
});

// ------------------------------ add items ------------------------------

form.addEventListener("submit", e => {
  e.preventDefault();
  if (input.value === "DIG2") {
    document.body.querySelector("div").classList.add("hidden");
    const thanks = document.querySelector("h4");
    setTimeout(function() {
      thanks.classList.remove("hidden");
      }, 7000);
  }
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
});

console.log(" Thanks for watching ");
