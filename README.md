# Projekt: Web-Programmierung_DLBUXPWPO1_Alessio_Nocita
## Konzept Frontend Site "Specialty Coffee Duisburg"

KONZEPT FRONTEND SITE „SPECIALTY COFFEE DUISBURG“
ALESSIO NOCITA

Präsentations- und Verkaufsseite einer fiktiven Specialty Coffee Rösterei und Shop:
„Specialty Coffee Duisburg“.

Hauptziel der Seite: Werbung für den Verkauf des eigenen Specialty Coffees im Shop vor
Ort. Dazu soll ein Blog mit gezielten Beiträgen aus der Welt des Kaffees Interesse
wecken.

Folgende Bereiche sind geplant:

- Startseite
- Über uns
- Unser Kaffee (Landing Page)
- Blog
- Single Post Page
- Kontaktformular
- Impressum (erreichbar über Footer)

Die Seite wird vollständig responsiv und „mobile first“ aufgebaut.

Geplante Layouts:

- 430px (Phone)
- 768px (Tablet)
- 1080px (Laptop)
- 1440px (Desktop)

Die gesamte Seite wird über das JavaScript-Framework „React“ entwickelt. Als CSS-
Preprozessor kommt SASS zum Einsatz. Auf gute HTML-Semantik und gute Accessibility laut WCAG 2.1 wird
geachtet.

Um das Projekt zu **lokal zu installieren**, sind folgende Schritte nötig:

1. Node.js installieren (Download [hier](https://nodejs.org/en))
2. Git Projekt herunterladen: 
```bash
git clone https://github.com/IU-Webprogrammierung/web-programmierung-Alessio-Nocita.git
```
3. zum Projekt-Ordner wechseln: 
```bash
cd web-programmierung-Alessio-Nocita/specialty-coffee-shop
```
4. Dependencies installieren:
```bash
npm install
```

Das Projekt kann dann im Development Modus gestartet werden mit:

```bash
npx tailwindcss -i ./src/index.css -o ./dist/output.css --config tailwind.config.cjs --watch
```
(dies macht alle Tailwind-Styles zugänglich)
gefolgt von:
```bash
npm run dev
```
(dies aktiviert der Development-Server)
und im Browser dann unter [http://localhost:5173/](http://localhost:5173/) angeschaut werden.

Dazu ist eine Online-Ansicht der Website (passend zum aktuellen Stand)  [hier](http://64.227.117.137/) verfügbar.

### 1. Konzeptionsphase
In der **Konzeptionsphase** wird ausschließlich Semantik geschrieben, Content hochgeladen, und Accessibility gewährleistet. 
Um dies zu bewerkstelligen wurde folgendes implementiert:
- HTML-Code (in JSX-Format)
- Code-Kommentare
- Texte
- Bilder und SVG-Icons
- Schriftarten (als Adobe Fonts Projekt Link)
- Accessibility-Code (aria-labels, alt-Bildtexte, figcaptions, tabindexes)

Da das Projekt in React-Format modular aufgebaut wurde, wurde den JSX-Code zum Teil auf JSX-Seitenkomponenten verteilt (im React Router 6 Format), zum Teil auf JSX-UI-Komponenten, die dann als Komponenten in den Pages mit eingebaut sind.

Leere SASS-Modules Dateien wurden schon bereitgestellt (allerdings noch nicht in den JSX-Komponenten verlinkt). Die von React Vite automatisch hergestellten CSS-Dateien wurden vorerst weitgehend nicht verändert, nur im SASS-Format umgewandelt.

Auf weiteres SASS und Javascript-Code wurde vorerst verzichtet, mit Ausnahme von:
- Scripts in `App.js` zum Ermitteln der Viewport-Größe. Diese sind essentiell, um je nach Viewport-Größe die passenden Komponenten zu rendern
- Scripts und Styling in Burgermenu. Diese Scripts und Stylings(importiert und angepasst von [Codepen (Jesse Couch)](https://codepen.io/designcouch/pen/ExvwPY)) sind essentiell für das darstellen des Burger Icons, das später auch per Javascript onClick animiert wird.
- vom React selbst benötigte Scripts


### 2. Erarbeitungsphase
In der **Erarbeitungsphase** wurden alle Styles in SASS Code implementiert. Dafür wurden die schon vorhandenen SASS Modules mit Inhalt gefüllt. Ausserdem wurde die Funktionalität des Burgermenu auch implementiert. 

### 3. Finalisierungsphase
In der **Finalisierungsphase** wurde die Seite komplett einem Refactor mit Tailwind unterzogen und die SASS-Modules anschließend gelöscht. Ausserdem wurde zusätzlich zur HTML-Validierung des Kontaktformulars eine Javascript-Validierung implementiert.


