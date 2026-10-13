
/* NOOR Quran - Abdul Basit Abdus Samad */

const noorReciter = {
  name: "Abdul Basit Abdus Samad",
  arabicName: "عبد الباسط عبد الصمد",
  folder: "Abdul_Basit_Murattal_192kbps"
};

function noorAudioUrl(surah, ayah) {
  const s = String(surah).padStart(3, "0");
  const a = String(ayah).padStart(3, "0");

  return `https://everyayah.com/data/${noorReciter.folder}/${s}${a}.mp3`;
}

function playNoorAyah(surah, ayah) {
  const audio = document.getElementById("noor-reciter-audio");
  if (!audio) {
    alert("De audio-speler is nog niet toegevoegd.");
    return;
  }

  audio.src = noorAudioUrl(surah, ayah);
  audio.play().catch(() => {
    alert("De audio kon niet starten. Controleer je internetverbinding.");
  });
}
