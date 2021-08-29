const string = `
.skin * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
.skin *::after,
.skin *::before {
    box-sizing: border-box;
}
.skin {
    position: relative;
    background: #ffe600;
    min-height: 50vh;
}
.nose {
    position: relative;
    border: 10px solid black;
    border-color: black transparent transparent;
    width: 0px;
    height: 0px;
    top: 145px;
    left: 50%;
    margin-left: -10px;
    z-index: 10;
}
@keyframes wave {
    0% {
        transform: rotate(0deg);
    }
    33% {
        transform: rotate(2deg);
    }
    66% {
        transform: rotate(-2deg);
    }
    100% {
        transform: rotate(0deg);
    }
}
.nose:hover {
    transform-origin: center bottom;
    animation: wave 260ms infinite linear;
}

.nosein {
    position: absolute;
    width: 20px;
    height: 6px;
    border: 1px solid black;
    top: -16px;
    left: -10px;
    border-radius: 10px 10px 0 0;
    background: black;
}

.eye {
    border: 2px solid black;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background: #2e2e2e;
    border-radius: 50%;
}
@keyframes eyeMove {
    0%,
    100% {
        top: 2px;
        left: 5px;
    }
    30%,
    60%,
    70% {
        top: 0;
        left: 25px;
    }
    40% {
        top: 0;
        left: 25px;
    }
    50% {
        top: 0;
        left: 10px;
    }
    80%,
    90% {
        top: 37px;
        left: 18px;
    }
}
.eye::before {
    content: "";
    display: block;
    border: 2px solid black;
    width: 25px;
    height: 25px;
    background: #fff;
    border-radius: 50%;
    position: relative;
    top: 1px;
    left: 10px;
    animation: eyeMove 3s infinite;
}

.eye.left {
    transform: translateX(-120px);
}
.eye.right {
    transform: translateX(120px);
}

@keyframes mouthMove {
    0%,
    46%,
    54%,
    100% {
        height: 150px;
    }
    50% {
        height: 10px;
    }
}
.mouth {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
}
.mouth .up {
    position: relative;
    top: -20px;
}
.mouth .up .lip {
    border: 3px solid black;
    height: 30px;
    width: 100px;
    background: #ffe600;
    border-top-color: transparent;
    border-right-color: transparent;
    position: relative;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    z-index: 1;
}
.mouth .up .lip.left {
    border-radius: 0 0 0 50px;
    transform: rotate(-15deg) translateX(-53px);
}
.mouth .up .lip.right {
    border-radius: 0 0 50px 0;
    transform: rotate(15deg) translateX(53px);
}
.mouth .up .lip::before {
    content: "";
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    bottom: 0;
    background: #ffe600;
}
.mouth .up .lip.left::before {
    right: -6px;
}
.mouth .up .lip.right::before {
    left: -6px;
}
.mouth .down {
    height: 150px;
    position: absolute;
    top: 5px;
    width: 100%;
    overflow: hidden;
    animation: mouthMove 3s infinite linear;
}
.mouth .down .tongue_up {
    border: 3px solid black;
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px/300px;
    background: #9b000a;
    overflow: hidden;
}
.mouth .down .tongue_up .tongue_down {
    width: 200px;
    height: 280px;
    background: #ff485f;
    position: absolute;
    bottom: -160px;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px/120px;
}

.face {
    position: absolute;
    left: 50%;
    border: 3px solid black;
    width: 86px;
    height: 86px;
    top: 200px;
    margin-left: -43px;
    z-index: 3;
}
.face.left {
    transform: translateX(-165px);
    background: #f00;
    border-radius: 50%;
}
.face.right {
    transform: translateX(165px);
    background: #f00;
    border-radius: 50%;
}
`;
export default string;
