const output = document.getElementById("output");

document.getElementById("registerBtn").addEventListener("click", register);
document.getElementById("loginBtn").addEventListener("click", login);
document.getElementById("profileBtn").addEventListener("click", getProfile);
document.getElementById("logoutBtn").addEventListener("click", logout);

async function register() {
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;

  const res = await fetch("http://localhost:5000/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

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
