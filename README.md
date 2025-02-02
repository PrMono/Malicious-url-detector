# 🔍 Malicious URL Detector - Chrome Extension

🚀 Une **extension Chrome** permettant de détecter **les URL malveillantes en temps réel** grâce à **l'API VirusTotal**.

![Demo](assets/demo.gif)  


---

## 📌 Fonctionnalités
✔️ **Analyse d'URL en temps réel** via l'API VirusTotal  
✔️ **Identification des sites malveillants**  
✔️ **Interface simple et rapide**  
✔️ **Compatible Google Chrome & Edge**  

---

## 🔧 Installation

### 1️⃣ Cloner le projet
```bash
git clone https://github.com/PrMono/Malicious-url-detector.git
cd Malicious-url-detector

2️⃣ Charger l’extension dans Chrome
Ouvrir Google Chrome
Aller dans les extensions :
📌 Tapez chrome://extensions/ dans la barre d'adresse
Activer le Mode développeur (en haut à droite)
Charger l’extension :
Cliquez sur "Charger une extension non empaquetée"
Sélectionnez le dossier src/ du projet
✅ L’extension est maintenant installée !

🔑 Configuration de l’API VirusTotal
Créer un compte sur VirusTotal
Obtenir une clé API :
Allez dans API Key et copiez votre clé
Configurer l’extension :
Ouvrez le fichier src/background.js
Remplacez "VOTRE_CLÉ_API_ICI" par votre clé API
const VIRUSTOTAL_API_KEY = "VOTRE_CLÉ_API_ICI";
Enregistrez et rechargez l’extension ! ✅

🎯 Utilisation
Ouvrir un site web (https://www.wikipedia.org)
Cliquer sur l’icône de l’extension
Appuyer sur "Scan Current Tab"
Vérifier le résultat :
✅ "Safe URL" → Le site est sécurisé
⚠️ "Malicious URL detected!" → Le site est suspect

🛠 Dépannage
Si l’extension ne fonctionne pas :

Vérifiez que votre API Key est bien configurée dans background.js
Rechargez l’extension (chrome://extensions/ → Mettre à jour)
Vérifiez la console Chrome (F12 > Console) pour voir d’éventuelles erreurs

📜 Licence
📌 MIT License - Vous pouvez modifier et utiliser ce projet librement.
## 📖 Documentation
📌 [Guide complet d'installation](https://github.com/PrMono/Malicious-url-detector/blob/main/doc/INSTALLATION.md)  
📌 [Utilisation de l’API VirusTotal](https://github.com/PrMono/Malicious-url-detector/blob/main/doc/API_USAGE.md)  
📌 [Guide pour les contributeurs](https://github.com/PrMono/Malicious-url-detector/blob/main/doc/DEV_GUIDE.md)  

