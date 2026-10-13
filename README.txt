NOOR Quran — project

Wat werkt in deze eerste versie:
- Responsive app-interface voor telefoon en computer.
- Volledige Arabische Koran geladen via AlQuran Cloud API (internet nodig om inhoud op te halen).
- Nederlandse vertaling wanneer beschikbaar via de API.
- Soera kiezen, zoeken in de huidige soera, vertaling/transliteratie tonen.
- Bladwijzers lokaal op het toestel bewaren.
- Arabische tekst laten voorlezen met de browserstem als die beschikbaar is.
- Optionele microfoon-spraakherkenning als de browser dit ondersteunt.
- PWA-installatie en cache voor de app-interface.

Belangrijke beperkingen:
- Dit is een werkende startversie, geen gecertificeerde Tarteel-vervanger.
- Microfoonherkenning is gewone browser-spraakherkenning en controleert geen tajweed betrouwbaar.
- Koraninhoud/vertaling worden via internet geladen; de volledige Koran is niet vooraf offline opgeslagen.
- Om op Android/iPhone te installeren, moet de map eerst online staan op een HTTPS-host. Een zipbestand alleen kan niet als gewone app op beide toestellen worden geïnstalleerd.

Snel publiceren met GitHub Pages:
1. Maak een GitHub-account en een nieuw public repository.
2. Upload alle bestanden uit deze map naar de hoofdmap van de repository.
3. Open Settings > Pages.
4. Bij Build and deployment kies Deploy from a branch; kies main en / (root), klik Save.
5. Wacht tot GitHub een https://...github.io/... adres toont.
6. Open dat adres op Android in Chrome: menu ⋮ > Install app of Add to Home screen.
7. Open dat adres op iPhone in Safari: deelknop > Add to Home Screen > Add.

De app gebruikt de AlQuran Cloud API voor de Koran en vertaling. Internetverbinding is vereist voor nieuwe inhoud.
