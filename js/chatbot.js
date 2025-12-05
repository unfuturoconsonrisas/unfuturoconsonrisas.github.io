document.addEventListener('DOMContentLoaded', function () {
    const openBtn = document.getElementById('openChatbot');
    const closeBtn = document.getElementById('closeChatbot');
    const chatbot = document.getElementById('chatbotContainer');
    const chatBody = chatbot.querySelector('.chat-body');

    if (!openBtn || !closeBtn || !chatbot || !chatBody) return;

    // Abrir chatbot
    openBtn.addEventListener('click', () => {
        chatbot.style.display = 'flex';
        chatbot.setAttribute('aria-hidden', 'false');
        chatBody.scrollTop = chatBody.scrollHeight;
    });

    // Cerrar chatbot
    closeBtn.addEventListener('click', () => {
        chatbot.style.display = 'none';
        chatbot.setAttribute('aria-hidden', 'true');
    });

    // Cerrar con Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && chatbot.style.display === 'flex') {
            chatbot.style.display = 'none';
            chatbot.setAttribute('aria-hidden', 'true');
        }
    });

    // Función para añadir mensajes
    function addMessage(text, sender = 'bot') {
        const msg = document.createElement('div');
        msg.classList.add('chat-msg', sender);
        msg.textContent = text;
        chatBody.appendChild(msg);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    // Mensaje de bienvenida
    addMessage('¡Hola! Soy el asistente del MIMP. ¿En qué puedo ayudarte?');

    // Input dinámico
    const inputRow = document.createElement('div');
    inputRow.classList.add('chat-input-row');
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Escribe tu mensaje...';
    const sendBtn = document.createElement('button');
    sendBtn.textContent = 'Enviar';
    inputRow.appendChild(input);
    inputRow.appendChild(sendBtn);
    chatbot.appendChild(inputRow);

    // Función de respuestas
    function botResponse(msg) {
        msg = msg.toLowerCase();
        if (msg.includes('hola')|| msg.includes('oli')) return '¡Hola! 😊 ¿Cómo estás hoy?.';
        if (msg.includes('horario')|| msg.includes('atencion')) return 'Nuestros horarios de atención son 24/7 vía Línea 100 y virtual.';
        if (msg.includes('denuncia')|| msg.includes('maltrato')|| msg.includes('ayuda')) return 'Para denunciar, llama al 100 o acércate a un Centro de Emergencia Mujer.';
        if (msg.includes('refugio')|| msg.includes('casa')) return 'Tenemos refugios temporales disponibles para casos de riesgo.';
        if (msg.includes('adopcion')|| msg.includes('adoptar')) return 'Tenemos toda la informacion en la pagina principal solo haz click en inciar proceso.';
        if (msg.includes('gracias') || msg.includes('ok')) return '¡De nada! 😊';
        return 'Lo siento, aún no entiendo tu pregunta, pero puedes llamar al 100 para asistencia inmediata.';
    }

    // Enviar mensaje
    function sendMessage() {
        const userMsg = input.value.trim();
        if (!userMsg) return;
        addMessage(userMsg, 'user');
        input.value = '';
        setTimeout(() => {
            addMessage(botResponse(userMsg), 'bot');
        }, 600);
    }

    sendBtn.addEventListener('click', sendMessage);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
});

