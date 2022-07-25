// ==UserScript==
// @name         App IDE Dark Mode ("very hacky edition")
// @version      0.2.0
// @description  Just a quick and dirty stylesheet change to create a dark mode for the app IDE
// @author       Suma
// @match        https://devportal.cb.dev/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=cb.dev
// @grant        none
// @updateURL    https://raw.githubusercontent.com/sumaeq/cb-ide-darkmode/main/cb-ide-darkmode.js
// @downloadURL  https://raw.githubusercontent.com/sumaeq/cb-ide-darkmode/main/cb-ide-darkmode.js
// ==/UserScript==

(() => {

    document.querySelector('html').style.filter = `invert(95%) hue-rotate(178deg)`;
    const style = document.createElement('style');
    style.innerHTML = `<style>
    img {
        filter: invert(95%) hue-rotate(-178deg) !important;
    }
    #monaco-editor {
        filter: hue-rotate(5deg) !important;
    }
    pre {
        filter: invert(100%) hue-rotate(180deg) !important;
    }
</style>`;
    document.head.appendChild(style);

})();