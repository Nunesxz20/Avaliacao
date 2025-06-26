// Aguarda o carregamento do DOM
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-contato");
    const feedback = document.getElementById("feedback");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // impede envio padrão
  
      // Coleta os valores
      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const assunto = document.getElementById("assunto").value.trim();
      const mensagem = document.getElementById("mensagem").value.trim();
  
      // Validações
      if (!nome || !email || !assunto || !mensagem) {
        feedback.textContent = "Por favor, preencha todos os campos.";
        feedback.className = "feedback erro";
        return;
      }
  
      const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!emailValido) {
        feedback.textContent = "Digite um e-mail válido.";
        feedback.className = "feedback erro";
        return;
      }
  
      if (mensagem.length < 20) {
        feedback.textContent = "A mensagem deve ter pelo menos 20 caracteres.";
        feedback.className = "feedback erro";
        return;
      }
  
      // Se tudo estiver certo
      feedback.textContent = "Mensagem enviada com sucesso!";
      feedback.className = "feedback";
  
      // Simula envio limpando o formulário
      form.reset();
    });
  });
  