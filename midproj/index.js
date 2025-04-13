document.getElementById("add-btn").addEventListener("click", function () {
  document.querySelector(".form1").style.display = "block";
  document.querySelector(".flex-sect").style.display = "none";
  document.getElementById("previewSection").style.display = "none";
  document.getElementById("goToadduser").style.display = "none";
});

document.getElementById("preview-btn").addEventListener("click", function () {
  document.querySelector(".form1").style.display = "none";
  document.querySelector(".flex-sect").style.display = "none";
  document.getElementById("previewSection").style.display = "block";
  document.getElementById("goToadduser").style.display = "block";

  viewUser();
});

document.getElementById("userForm").addEventListener("submit", function (e) {
  e.preventDefault();
  AddUser();
  document.getElementById("userForm").reset();
  document.getElementById("goToPreviewBtn").style.display = "block";
});

document
  .getElementById("goToPreviewBtn")
  .addEventListener("click", function () {
    document.querySelector(".form1").style.display = "none";
    document.querySelector(".flex-sect").style.display = "none";
    document.getElementById("previewSection").style.display = "block";
    document.getElementById("goToadduser").style.display = "block";
    viewUser();
  });
document.getElementById("goToadduser").addEventListener("click", function () {
  document.querySelector(".form1").style.display = "block";
  document.querySelector(".flex-sect").style.display = "none";
  document.getElementById("previewSection").style.display = "none";
});

let userList = [];

class user {
  constructor(email, username, phone, address, gender) {
    this.email = email;
    this.username = username;
    this.phone = phone;
    this.address = address;
    this.gender = gender;
  }
}

function checkName(str) {
  for (let i = 0; i < str.length; i++) {
    if (
      !(str[i] >= "A" && str[i] <= "Z") &&
      !(str[i] >= "a" && str[i] <= "z") &&
      str[i] !== " "
    ) {
      return true;
    }
  }
  return false;
}

function AddUser() {
  const email = document.getElementById("email").value.trim();
  const username = document.getElementById("username").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();
  const gender = document.getElementById("gender").value;
  let isValid = true;

  if (
    email === "" ||
    !email.includes("@") ||
    !email.includes(".") ||
    email.startsWith("@") ||
    email.endsWith("@") ||
    email.startsWith(".") ||
    email.endsWith(".")
  ) {
    document.getElementById("errormessage1").textContent = "Invalid email";
    isValid = false;
  }

  if (username === "" || checkName(username)) {
    document.getElementById("errormessage2").textContent =
      "Name must contain only letters";
    isValid = false;
  }

  if (isNaN(phone) || phone.length < 10) {
    document.getElementById("errormessage3").textContent =
      "Phone must be at least 10 digits and numbers only";
    isValid = false;
  }

  if (address === "") {
    document.getElementById("errormessage4").textContent =
      "Address must not be empty";
    isValid = false;
  }

  if (gender === "") {
    document.getElementById("errormessage5").textContent =
      "Gender must be selected";
    isValid = false;
  }

  if (!isValid) return;

  const newUser = new user(email, username, phone, address, gender);
  userList.push(newUser);

  document.getElementById("successMessage").style.display = "block";
  setTimeout(() => {
    document.getElementById("successMessage").style.display = "none";
  }, 2000);

  document.getElementById("errormessage1").textContent = "";
  document.getElementById("errormessage2").textContent = "";
  document.getElementById("errormessage3").textContent = "";
  document.getElementById("errormessage4").textContent = "";
  document.getElementById("errormessage5").textContent = "";
}

function viewUser() {
  const table = document
    .getElementById("table")
    .getElementsByTagName("tbody")[0];
  const cardsContainer = document.getElementById("cardsContainer");

  table.innerHTML = "";
  cardsContainer.innerHTML = "";

  userList.forEach((elements) => {
    const row = document.createElement("tr");

    const email = document.createElement("td");
    email.textContent = elements.email;

    const username = document.createElement("td");
    username.textContent = elements.username;

    const phone = document.createElement("td");
    phone.textContent = elements.phone;

    const gender = document.createElement("td");
    gender.textContent = elements.gender;

    const address = document.createElement("td");
    address.textContent = elements.address;

    row.appendChild(email);
    row.appendChild(username);
    row.appendChild(phone);
    row.appendChild(gender);
    row.appendChild(address);

    table.appendChild(row);

    const card = document.createElement("div");

    const cardBody = document.createElement("div");

    const cardTitle = document.createElement("h5");
    cardTitle.textContent = elements.username;

    const emailText = document.createElement("h6");
    emailText.textContent = elements.email;

    const phoneText = document.createElement("h6");
    phoneText.textContent = elements.phone;

    const genderText = document.createElement("p");
    genderText.textContent = elements.gender;

    const addressText = document.createElement("p");
    addressText.textContent = elements.address;

    card.className = "card-user";
    cardBody.className = "card-body";
    cardTitle.className = "card-user-title";
    emailText.className = "card-email";
    phoneText.className = "card-phone";
    genderText.className = "card-gender";
    addressText.className = "card-address";

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(emailText);
    cardBody.appendChild(phoneText);
    cardBody.appendChild(genderText);
    cardBody.appendChild(addressText);

    card.appendChild(cardBody);
    cardsContainer.appendChild(card);
  });
}
