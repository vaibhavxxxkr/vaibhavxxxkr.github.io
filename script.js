const zodiacSigns = [
    "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
    "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

const horoscopes = {
    Aries: "You are full of energy today! Focus on your goals.",
    Taurus: "Patience is your strength. Good things take time.",
    Gemini: "Today is a great day for communication and creativity.",
    Cancer: "Trust your intuition and stay close to loved ones.",
    Leo: "Your leadership will shine through. Be bold!",
    Virgo: "Attention to detail brings success today.",
    Libra: "Balance your emotions and find inner peace.",
    Scorpio: "Channel your passion into something creative.",
    Sagittarius: "Adventure is calling. Take that first step!",
    Capricorn: "Hard work will be rewarded. Stay focused.",
    Aquarius: "Innovative ideas will help you stand out.",
    Pisces: "Dream big and follow your heart."
};

function populateZodiacs() {
    const selects = [document.getElementById("zodiacSelect"), document.getElementById("zodiac1"), document.getElementById("zodiac2")];
    selects.forEach(select => {
        zodiacSigns.forEach(sign => {
            const option = document.createElement("option");
            option.value = sign;
            option.textContent = sign;
            select.appendChild(option);
        });
    });
}

function showHoroscope() {
    const sign = document.getElementById("zodiacSelect").value;
    const result = document.getElementById("result");
    result.textContent = horoscopes[sign] || "Please select a valid zodiac sign.";
}

function checkCompatibility() {
    const sign1 = document.getElementById("zodiac1").value;
    const sign2 = document.getElementById("zodiac2").value;
    const result = document.getElementById("compatibilityResult");

    if (!sign1 || !sign2) {
        result.textContent = "Please select both zodiac signs.";
        return;
    }

    if (sign1 === sign2) {
        result.textContent = `${sign1} and ${sign2} have great self-understanding!`;
    } else {
        result.textContent = `${sign1} and ${sign2} can build a strong connection with understanding.`;
    }
}

function showBirthChart() {
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const tob = document.getElementById("tob").value;
    const place = document.getElementById("place").value;

    const result = document.getElementById("birthChartResult");

    if (name && dob && tob && place) {
        result.innerHTML = `🌟 <strong>${name}</strong>, born on <strong>${dob}</strong> at <strong>${tob}</strong> in <strong>${place}</strong>. We'll generate a detailed chart soon!`;
    } else {
        result.textContent = "Please fill in all the details.";
    }
}

document.getElementById("toggleDarkMode").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Initialize zodiac options
populateZodiacs();
