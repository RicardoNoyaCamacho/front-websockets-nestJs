import { connectToServer } from './socket-client'
import './style.css'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h2>Web Socket - Client</h2>
    <input id="jwt-token" placeholder="Json Web Token" />
    <button id="btn-connect">Connect</button>

    <br/>
    <span id="server-status">offline</span>

    <ul id="clients-ul"> </ul>

    <form id="message-form">
      <input placeholder="message" id="message-input"/>
    </form>

    <h3>Messages</h3>
    <ul id="messages-ul"></ul>

  </div>
`

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
// connectToServer();

const inputJwt = document.querySelector<HTMLInputElement>("#jwt-token")!;
const btnconnect = document.querySelector("#btn-connect")!;

btnconnect.addEventListener("click", () => {

  if (inputJwt.value.trim().length <= 0) return alert('Enter a valid JWT');
  connectToServer(inputJwt.value);
})