const apiUrl = "http://localhost:4000/users";
const userTableBody = document.getElementById("userTableBody");
const alertBox = document.getElementById("alertBox");

function showAlert(message, type = "success") {
  alertBox.textContent = message;
  alertBox.className = `alert alert-${type}`;
  alertBox.classList.remove("d-none");
  setTimeout(() => alertBox.classList.add("d-none"), 3000);
}

function fetchUsers() {
  fetch(apiUrl)
    .then(res => res.json())
    .then(users => {
      userTableBody.innerHTML = "";
      users.forEach(user => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>
            <button class="btn btn-sm btn-info me-2" onclick="openEditModal(${user.id})">Edit</button>
            <button class="btn btn-sm btn-danger" onclick="deleteUser(${user.id})">Delete</button>
          </td>
        `;
        userTableBody.appendChild(row);
      });
    })
    .catch(() => showAlert("Failed to load users.", "danger"));
}

document.getElementById("userForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email })
  })
    .then(res => res.json())
    .then(() => {
      fetchUsers();
      showAlert("User added successfully!");
      e.target.reset();
    })
    .catch(() => showAlert("Failed to add user.", "danger"));
});

function openEditModal(id) {
  fetch(`${apiUrl}/${id}`)
    .then(res => res.json())
    .then(user => {
      document.getElementById("editUserId").value = user.id;
      document.getElementById("editName").value = user.name;
      document.getElementById("editEmail").value = user.email;
      new bootstrap.Modal(document.getElementById("editModal")).show();
    })
    .catch(() => showAlert("Failed to fetch user data.", "danger"));
}

document.getElementById("editUserForm").addEventListener("submit", e => {
  e.preventDefault();
  const id = document.getElementById("editUserId").value;
  const name = document.getElementById("editName").value;
  const email = document.getElementById("editEmail").value;

  fetch(`${apiUrl}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email })
  })
    .then(res => res.json())
    .then(() => {
      fetchUsers();
      bootstrap.Modal.getInstance(document.getElementById("editModal")).hide();
      showAlert("User updated successfully!");
    })
    .catch(() => showAlert("Failed to update user.", "danger"));
});

function deleteUser(id) {
  if (confirm("Are you sure you want to delete this user?")) {
    fetch(`${apiUrl}/${id}`, { method: "DELETE" })
      .then(res => res.json())
      .then(() => {
        fetchUsers();
        showAlert("User deleted successfully!");
      })
      .catch(() => showAlert("Failed to delete user.", "danger"));
  }
}

fetchUsers();
