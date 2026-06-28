// Função para abrir/fechar o Modal de Login
function toggleLogin() {
    const modal = document.getElementById('loginModal');
    if (modal.style.display === 'flex') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'flex';
    }
}

// Simulação simples de Login de utilizador
function simularLogin(event) {
    event.preventDefault(); // Impede a página de recarregar
    document.getElementById('loginBtn').innerText = "Olá, Membro!";
    document.getElementById('quiz-intro').innerText = "Bem-vindo de volta! O teu progresso está a ser guardado.";
    toggleLogin();
}

// Lógica para calcular o perfil do Quiz baseado nas respostas
function calcularResultado() {
    // Captura as opções selecionadas
    const p1 = document.querySelector('input[name="p1"]:checked');
    const p2 = document.querySelector('input[name="p2"]:checked');

    // Validação: obriga o utilizador a responder a tudo
    if (!p1 || !p2) {
        alert("Por favor, responde a todas as perguntas antes de ver o resultado.");
        return;
    }

    // Contagem de respostas (A, B ou C)
    let contagem = { A: 0, B: 0, C: 0 };
    contagem[p1.value]++;
    contagem[p2.value]++;

    // Define qual letra teve mais respostas
    let maiorOpcao = 'A';
    if (contagem.B > contagem.A) maiorOpcao = 'B';
    if (contagem.C > contagem.B && contagem.C > contagem.A) maiorOpcao = 'C';

    // Perfis de Resultado
    const perfis = {
        'A': {
            titulo: "O Ouvinte Atento 🍃",
            descricao: "Tens uma excelente capacidade para ouvir sem julgar. As pessoas sentem-se seguras ao teu lado porque dás espaço para que elas se expressem livremente."
        },
        'B': {
            titulo: "O Solucionador Prático 🛠️",
            descricao: "A tua empatia move-te a agir! Queres logo resolver a dor do outro. Lembra-te apenas que, às vezes, as pessoas só precisam de um abraço e não de uma solução imediata."
        },
        'C': {
            titulo: "O Empata Esponja 🌊",
            descricao: "Sentes as emoções dos outros de forma muito intensa. Isso faz de ti alguém incrivelmente sensível, mas cuidado para não carregares o peso do mundo nos teus ombros."
        }
    };

    // Exibe o resultado na tela
    document.getElementById('perfil-titulo').innerText = perfis[maiorOpcao].titulo;
    document.getElementById('perfil-descricao').innerText = perfis[maiorOpcao].descricao;
    
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('resultado').classList.remove('hidden');
}

// Função para reiniciar as opções do Quiz
function reiniciarQuiz() {
    document.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false);
    document.getElementById('quiz-container').classList.remove('hidden');
    document.getElementById('resultado').classList.add('hidden');
}