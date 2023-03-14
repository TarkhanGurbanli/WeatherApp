// const messagesContainer = document.getElementById('messages');
// const messageInput = document.getElementById('message-input');
// const sendButton = document.getElementById('send-button');

// sendButton.addEventListener('click', () => {
//     const messageText = messageInput.value.trim();
//     if (messageText !== '') {
//         const message = createMessage('sent', messageText);
//         messagesContainer.appendChild(message);
//         messageInput.value = '';

//         // Simülasyon amaçlı, yanıt mesajı 1 saniye sonra eklenecek
//         setTimeout(() => {
//             const responseText = `Teşekkürler, "${messageText}" mesajını aldım!`;
//             const response = createMessage('received', responseText);
//             messagesContainer.appendChild(response);
//         }, 1000);
//     }
// });

// function createMessage(type, text) {
//     const message = document.createElement('div');
//     message.classList.add('message', type);
//     message.innerText = text;
//     return message;
// }


const input = document.querySelector(".message-text");
const main = document.querySelector("main");

input.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        if (input.value.trim() != "") {
            if (input.value[0].toUpperCase() == input.value[0]) {
                addChat('support');
            }
            else {
                addChat('user')
            }
        }

        main.scrollTop = main.scrollHeight;
    }
});

function addChat(clname) {
    let div = document.createElement("div");
    div.className = `message ${clname}`;
    let msg = document.createElement("span");
    msg.innerHTML = input.value;
    div.appendChild(msg);
    main.appendChild(div);
    let date = new Date();
    let time = document.createElement("span");
    time.innerHTML = `${date.getHours()}:${date.getMinutes()}`;
    div.appendChild(time)
    time.className = "time";
    input.value = ""
}