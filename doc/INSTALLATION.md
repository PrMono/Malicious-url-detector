# 🛠 Installation de Malicious URL Detector

Cette extension permet de **détecter en temps réel les URL malveillantes** en utilisant l’API VirusTotal.

---

## 📌 Prérequis
Avant d’installer l’extension, assurez-vous d’avoir :
- ✅ **Google Chrome** ou un navigateur compatible (Brave, Edge)
- ✅ **Une clé API VirusTotal** (gratuite, nécessite une inscription)

---

## 🔧 **Installation de l’extension**
### **1️⃣ Cloner le projet**
Ouvrez un terminal et exécutez :
```bash
git clone https://github.com/TON-UTILISATEUR/malicious-url-detector.git
cd malicious-url-detector

2️⃣ Charger l’extension dans Chrome
Ouvrir Google Chrome
Aller dans les extensions :
Tapez chrome://extensions/ dans la barre d'adresse et appuyez sur Entrée
Activer le Mode développeur :
En haut à droite, activez l’option Mode développeur
Charger l’extension :
Cliquez sur "Charger une extension non empaquetée"
Sélectionnez le dossier src/ de votre projet
L’extension est maintenant installée ! ✅

3️⃣ Configurer l’API VirusTotal
Créer un compte sur VirusTotal
Obtenir une clé API :
Allez dans API Key et copiez votre clé
Modifier background.js :
Ouvrez le fichier background.js et remplacez VOTRE_CLÉ_API_ICI par votre clé API :
const VIRUSTOTAL_API_KEY = "VOTRE_CLÉ_API_ICI";
Enregistrer et recharger l’extension ✅

Tester l’extension
Ouvrir un site web sûr (https://www.wikipedia.org)
Cliquer sur l’icône de l’extension
Appuyer sur "Scan Current Tab"
Vérifier le résultat :
✅ "Safe URL" → Le site est sécurisé
⚠️ "Malicious URL detected!" → Le site est suspect
📸 Voir assets/result-detection.png pour un exemple de détection d’URL.

🛠 Dépannage
Si l’extension ne fonctionne pas :

Assurez-vous que l’API Key est bien renseignée dans background.js
Rechargez l’extension (chrome://extensions/ → Mettre à jour)
Vérifiez la console (F12 > Console) pour voir d’éventuelles erreurs

📖 Autres ressources
📌 Utilisation de l’API VirusTotal
📌 [Guide pour les contributeurs](