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
    id: 1,
    login: "p1ck23",
    password: "123",
  },
];
let notes = [
  {
    id: 1,
    title: "Первая заметка",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit temporabeatae temporibus, similique obcaecati debitis? Quos vel accusamus",
  },
  {
    id: 1,
    title: "Вторая заметка",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit temporabeatae temporibus, similique obcaecati debitis? Quos vel accusamus",
  },
];
const headerDateElement = document.getElementsByClassName("header_date");
const date = new Date();
const boxElement = document.querySelector(".box");
console.log(headerDateElement.value);
headerDateElement[0].textContent = formatDate(date);

const initAddButton = () => {
  const addButton = document.querySelector(".header__button");
  addButton.addEventListener("click", () => {
    notes.push({
      id: 1,
      title: "Название",
      text: "Текст заметки",
    });
    renderNotes();
  });
};

const initDeleteButton = () => {
  const deleteButtons = document.querySelectorAll(".delete-button");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Handle delete logic
    });
  });
};

const initEditButton = () => {
  const editButtons = document.querySelectorAll(".edit-button");
  editButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Handle edit logic
    });
  });
};

const renderNotes = () => {
  const notesHTML = notes
    .map((note, index) => {
      return `<article class="note"><div class="note__box">
      <p class="note__title">
        ${note.title}
      </p>
      <div>
        <button class="delete-button note__button">
          <i class="fa-solid fa-trash"></i>
        </button>
        <button class="edit-button note__button">
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
      </div>
    </div>
    <p class="note__text">
      ${note.text}
    </p></article>`;
    })
    .join("");
  boxElement.innerHTML = notesHTML;
  initDeleteButton();
  initEditButton();
};

initAddButton(); 
renderNotes(); 
