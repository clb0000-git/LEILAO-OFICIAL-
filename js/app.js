// Teste geral
document.addEventListener("DOMContentLoaded", () => {

  // BOTÃO ENTRAR
  const loginBtn = document.getElementById("loginBtn");
  const modal = document.getElementById("authModal");

  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      modal.style.display = "block";
    });
  }

  // FECHAR MODAL
  document.querySelectorAll(".close").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".modal").forEach(m => {
        m.style.display = "none";
      });
    });
  });

});
const submitLogin = document.getElementById("submitLogin");

if (submitLogin) {
  submitLogin.addEventListener("click", () => {
    alert("Login funcionando!");
  });
}
