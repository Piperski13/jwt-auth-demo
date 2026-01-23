const output = document.getElementById("output");

document.getElementById("registerBtn").addEventListener("click", register);
document.getElementById("loginBtn").addEventListener("click", login);
document.getElementById("profileBtn").addEventListener("click", getProfile);
document.getElementById("logoutBtn").addEventListener("click", logout);

async function register() {
  let name = document.getElementById("regName").value;
  let email = document.getElementById("regEmail").value;
  let password = document.getElementById("regPassword").value;

  const res = await fetch("http://localhost:5000/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });

  document.getElementById("regName").value = "";
  document.getElementById("regEmail").value = "";
  password = document.getElementById("regPassword").value = "";

  const data = await res.json();
  output.textContent = JSON.stringify(data, null, 2);
}

async function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const res = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
    credentials: "include", // VERY important for cookies
  });

  document.getElementById("loginEmail").value = "";
  document.getElementById("loginPassword").value = "";

  const data = await res.json();
  output.textContent = JSON.stringify(data, null, 2);
}

async function getProfile() {
  const res = await fetch("http://localhost:5000/api/auth/profile", {
    credentials: "include",
  });

  const data = await res.json();
  output.textContent = JSON.stringify(data, null, 2);
}

async function logout() {
  const res = await fetch("http://localhost:5000/api/auth/logout", {
    method: "POST",
    credentials: "include",
  });

  const data = await res.json();
  output.textContent = JSON.stringify(data, null, 2);
}
