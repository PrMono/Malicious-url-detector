// popup.js

document.getElementById("scan").addEventListener("click", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const url = tabs[0].url;
        console.log("Scanning URL:", url); // Debug

        // Envoyer l'URL à background.js pour analyse
        chrome.runtime.sendMessage({ action: "checkUrl", url: url }, function(response) {
            console.log("Response from background.js:", response); // Debug
            document.getElementById("result").innerText = response.malicious 
                ? "⚠️ Malicious URL detected!" 
                : "✅ Safe URL";
        });
    });
});