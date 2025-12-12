const translations = {
    en: { title: "Sohbet Discord Server", description: "A fun, friendly, and active Turkish community. Games, music, tech, memes and more!", card1_title: "Community", card1_text: "Active members from all age & nationalities. Imagine a chat that never dies.", card2_title: "Events", card2_text: "Movie nights, game sessions, music sharing, and fun competitions.", card3_title: "Atmosphere", card3_text: "No drama, no toxicity. Safe and chill place.", join: "Join Server", contact: "Website development:" },
    tr: { title: "Sohbet Discord Sunucusu", description: "Eğlenceli, arkadaş canlısı ve aktif bir topluluk. Oyunlar, müzik, teknoloji ve daha fazlası!", card1_title: "Topluluk", card1_text: "Her yaştan aktif üyeler. Sohbet asla bitmez.", card2_title: "Etkinlikler", card2_text: "Film geceleri, oyun buluşmaları, müzik paylaşımı ve küçük yarışmalar.", card3_title: "Ortam", card3_text: "Drama yok, toksiklik yok. Rahat ve güvenli bir ortam.", join: "Sunucuya Katıl", contact: "Site tasarım & geliştirme:" },
    fr: { title: "Serveur Discord: Sohbet", description: "Une communauté turque active et sympa. Jeux, musique, tech, memes et plus encore !", card1_title: "Communauté", card1_text: "Membres actifs et sympathiques. Le chat ne s'arrête jamais.", card2_title: "Événements", card2_text: "Soirées films, sessions de jeu, partage musical et petits concours amusants.", card3_title: "Ambiance", card3_text: "Pas de drama, pas de toxicité. Un espace sûr et chill.", join: "Rejoindre le serveur", contact: "Développement du site :" }
};

document.querySelectorAll(".language-flags img").forEach(flag => {
    flag.addEventListener("click", () => { changeLanguage(flag.dataset.lang); });
});

function changeLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        el.textContent = translations[lang][el.dataset.i18n];
    });
}

const themeToggleBtn = document.querySelector(".theme-toggle");
themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    themeToggleBtn.textContent = document.body.classList.contains("light-theme") ? "☀️" : "🌙";
});
