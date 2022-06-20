// ==UserScript==
// @name         Tenderly Dappmod
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Tenderly Utils via Tampermonkey Script
// @author       @emilianobonassi
// @match        https://etherscan.io/tx/*
// @icon         https://tenderly.co/favicon.ico
// @updateURL    https://github.com/emilianobonassi/tenderly-dappmod/raw/main/tenderly-dappmod.user.js
// @downloadURL  https://github.com/emilianobonassi/tenderly-dappmod/raw/main/tenderly-dappmod.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const anchor = document.getElementById('spanTxHash')
    const txId = anchor.innerText

    const tenderlyLinkComponent = document.createElement('a')
    tenderlyLinkComponent.href = `https://dashboard.tenderly.co/tx/mainnet/${txId}/debugger`
    tenderlyLinkComponent.innerText = 'Debug on Tenderly'
    tenderlyLinkComponent.target = '_blank'
    tenderlyLinkComponent.rel = 'noopener'
    anchor.parentNode.append(tenderlyLinkComponent)
})();
