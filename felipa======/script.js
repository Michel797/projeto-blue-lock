// Função para alternar entre as abas
function openTab(evt, tabId) {
    // Esconde todos os conteúdos das abas
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    // Remove a classe 'active' de todos os botões
    const tabBtns = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabBtns.length; i++) {
        tabBtns[i].classList.remove("active");
    }

    // Mostra a aba atual e adiciona a classe 'active' ao botão clicado
    document.getElementById(tabId).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// Configuração das datas finais de cada objetivo
const targetDates = {
    "timer-brasilia": new Date("August 13, 2026 23:59:59").getTime(),
    "timer-salvador": new Date("February 25, 2027 23:59:59").getTime(),
    "timer-rio": new Date("October 20, 2026 23:59:59").getTime(),
    "timer-piaui": new Date("December 31, 2026 23:59:59").getTime()
};

// Função para atualizar os cronômetros
function updateCountdowns() {
    const now = new Date().getTime();

    for (const id in targetDates) {
        const distance = targetDates[id] - now;
        const timerElement = document.getElementById(id);

        if (!timerElement) continue;

        // Se o tempo já acabou
        if (distance < 0) {
            timerElement.innerHTML = "<div style='width: 100%; color: #ff7675; font-size: 1.2rem;'>Tempo Concluído! 🚀</div>";
            continue;
        }

        // Cálculos de tempo para dias, horas, minutos e segundos
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Atualiza o DOM colocando um zero à esquerda se for menor que 10
        timerElement.querySelector(".days").innerText = days < 10 ? "0" + days : days;
        timerElement.querySelector(".hours").innerText = hours < 10 ? "0" + hours : hours;
        timerElement.querySelector(".minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
        timerElement.querySelector(".seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
    }
}

// Atualiza o cronômetro a cada 1 segundo
setInterval(updateCountdowns, 1000);

// Executa uma vez ao carregar a página para evitar o delay de 1s inicial
updateCountdowns();
