// ==UserScript==
// @name         Tenderly Dappmod
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Tenderly Utils via Tampermonkey Script
// @author       @emilianobonassi
// @match        https://etherscan.io/tx/*
// @icon         https://tenderly.co/favicon.ico
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
