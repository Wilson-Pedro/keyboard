var res = document.querySelector('#res')

function zero() {
    res.textContent += '0'
}

function one() {
    res.textContent += `1`
}

function two() {
    res.textContent += `2`
}

function three() {
    res.textContent += '3'
}

function four() {
    res.textContent += '4'
}

function five() {
    res.textContent += '5'
}

function six() {
    res.textContent += '6'
}

function seven() {
    res.textContent += '7'
}

function eight() {
    res.textContent += '8'
}

function nine(){
    res.textContent += '9'
}

function Q() {
    res.textContent += 'q'
}

function W() {
    res.textContent += 'w'
}

function E() {
    res.textContent += 'e'
}

function R() {
    res.textContent += 'r'
}

function T() {
    res.textContent += 't'
}

function Y() {
    res.textContent += 'y'
}

function U() {
    res.textContent += 'u'
}

function I() {
    res.textContent += 'i'
}

function O() {
    res.textContent += 'o'
}

function P() {
    res.textContent += 'p'
}

function A() {
    res.textContent += 'a'
}

function S() {
    res.textContent += 's'
}

function D() {
    res.textContent += 'd'
}

function F() {
    res.textContent += 'f'
}
function G() {
    res.textContent += 'g'
}

function H() {
    res.textContent += 'h'
}

function J() {
    res.textContent += 'j'
}

function K() {
    res.textContent += 'k'
}

function L() {
    res.textContent += 'l'
}

function Ç() {
    res.textContent += 'ç'
}

function Z() {
    res.textContent += 'z'
}

function X() {
    res.textContent += 'x'
}

function C() {
    res.textContent += 'c'
}

function V() {
    res.textContent += 'v'
}

function B() {
    res.textContent += 'b'
}

function N() {
    res.textContent += 'n'
}

function M() {
    res.textContent += 'm'
}

function acento() {
    res.textContent += '´'
}

function abrirChave() {
    res.textContent += '{' 
}

function fecharChave() {
    res.textContent += '}'
}

function abrirColchete() {
    res.textContent += '['
}

function fecharColchete() {
    res.textContent += ']'
}

function underline() {
    res.textContent += '_'
}

function menos() {
    res.textContent += '-'
}

function mais() {
    res.textContent += '+'
}

function igual() {
    res.textContent += '='
}

function interrogação() {
    res.textContent += '?'
}

function barra() {
    res.textContent += '|'
}

function barraR() {
    res.textContent += '/'
}

function tio() {
    res.textContent += '^'
}

function doisPontos() {
    res.textContent += ':'
}

function maior() {
    res.textContent += '<'
}

function menor() {
    res.textContent += '>'
}

function aspas() {
    res.textContent += '"'
}

function espaço() {
    res.textContent += ' '
}

function backspace() {
    var res = document.getElementById('res').innerHTML
    document.getElementById('res').innerHTML = res.substring(0, res.length - 1)
}

function enter(){
    var res = document.getElementById('res').innerHTML
    alert(res)
}


const letters = ["A", "S", "Q"];d

// Capturando o evento de clique de qualquer elemento do documento
document.addEventListener("click", (e) => {
    // função para capturar o estado do botão capslock (on ou off)
    const capsLockState = getCapsLockState();

    const foundIndex = [];

    let idx = letters.indexOf(e.target.textContent);

    // Filtrando o index de qual elemento foi clicado
    while (idx != -1) {
        foundIndex.push(idx);
        idx = letters.indexOf(e.target.textContent, idx + 1);
    }

    if (foundIndex.length > 0) {
        // De acordo com o estado do botão capsLock
        if (capsLockState === "off") {
            //  transformamos a letra para minúscula
            res.textContent += letters[foundIndex].toLowerCase();
            
        } else {
            //  transformamos a letra para maiúscula
            res.textContent += letters[foundIndex]?.toUpperCase();
        }
    }
});

// Função que pega o estado atual do icon sinalizador e retorna se está (on ou off)
function getCapsLockState() {
    const capsLockStateIcon = document.querySelector(".caps-lock-state-icon");
    const capsLockState = capsLockStateIcon.classList.item(1);
    return capsLockState;
}

/**
 * Ao clicar no botão capsLock no teclado esta função adiciona a classe (on ou off) na classe (.caps-lock-state-icon),
 * e de acordo com o estado atual ele faz a inversão, se estiver on fica off e vice versa.
 */



function capslk() {
    const capsLockState = document.querySelector(".caps-lock-state-icon");
    if (capsLockState.classList.contains("off")) {
        capsLockState.classList.remove("off");
        capsLockState.classList.add("on");
    } else {
        capsLockState.classList.remove("on");
        capsLockState.classList.add("off");
    }
}
