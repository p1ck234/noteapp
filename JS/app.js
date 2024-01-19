const authAccount = () => {
  const inputElementLogin = document.getElementById("inputLogin");
  const inputElementPassword = document.getElementById("inputPassword");

  for (account of accounts) {
    if (
      account.login === inputElementLogin.value &&
      account.password == inputElementPassword.value
    ) {
      window.location.href = "notes.html";
    } else {
      alert("Данные не верны!");
    }
  }
};

function formatDate(date) {
  const day = ("0" + date.getDate()).slice(-2);
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const year = date.getFullYear().toString().slice(-2);
  const hours = ("0" + date.getHours()).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);

  const formattedDate =
    day + "." + month + "." + year + " " + hours + ":" + minutes;

  return formattedDate;
}

let accounts = [
  {
    login: "p1ck23",
    password: "123",
  },
];
const headerDateElement = document.getElementsByClassName("header_date");
const date = new Date();
console.log(headerDateElement.value);
headerDateElement[0].textContent = formatDate(date);
