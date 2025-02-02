// background.js

self.addEventListener("activate", () => {
    console.log("Service Worker Activated!");
});

chrome.runtime.onInstalled.addListener(() => {
    console.log("Malicious URL Detector extension installed.");
});

const API_KEY = "79b407c27e84eb4d91ad66b4844e240e4ebe182abbe3e99ba4907c5801b9270e";  // Remplace par ta clé API VirusTotal
const API_URL = "https://www.virustotal.com/api/v3/urls";

// Fonction pour vérifier une URL via VirusTotal
async function checkUrl(url) {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "x-apikey": API_KEY,
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `url=${encodeURIComponent(url)}`
        });

        const data = await response.json();
        const analysis_id = data.data.id;

        const reportResponse = await fetch(`https://www.virustotal.com/api/v3/analyses/${analysis_id}`, {
            headers: { "x-apikey": API_KEY }
        });

        const reportData = await reportResponse.json();
        return reportData.data.attributes.stats.malicious > 0;
    } catch (error) {
        console.error("Error checking URL:", error);
        return false;
    }
}

// Écouteur de messages pour `popup.js`
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "checkUrl") {
        checkUrl(message.url).then(isMalicious => {
            sendResponse({ malicious: isMalicious });
        });
        return true;  // Permet une réponse asynchrone
    }
});

// Garde le Service Worker actif en créant une alarme récurrente
if (chrome.alarms) {
    chrome.alarms.create("keepActive", { periodInMinutes: 5 });
    chrome.alarms.onAlarm.addListener((alarm) => {
        if (alarm.name === "keepActive") {
            console.log("Keeping the Service Worker alive");
        }
    });
} else {
    console.error("chrome.alarms is not available!");
}
