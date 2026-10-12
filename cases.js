// Zwei eigenständige Kriminalfälle; Entscheidungen und Fortschritt pro Fall.
window.MAUS_CASES = [
  {
    "id": "rosenhain",
    "version": 3,
    "title": "Tod zwischen Rosen",
    "subtitle": "Du bist die Ermittlerin, Maus. Ein Mord. Drei Verdächtige. Und eine Lüge, die sich selbst verrät.",
    "tag": "Episode 01 · Tod zwischen Rosen",
    "duration": "Etwa 60–90 Minuten · jederzeit pausierbar",
    "description": "Ein elegantes Gartenfest endet mit einem Mord. Als Ermittlerin Maus liest du zwischen den Zeilen, prüfst Alibis und stellst dem Täter eine Falle.",
    "chapters": [
      {
        "title": "Die letzte Einladung",
        "icon": "✉️",
        "steps": [
          {
            "title": "Ein Fest endet im Schweigen",
            "story": "Der Regen trommelt gegen die Scheiben des Gartenhauses Rosenhain. Du bist als Gast beim Blumenfest, Maus. Um 20:20 findet die Gastgeberin Helena den Kunsthändler Viktor Winter leblos im Arbeitszimmer. Als Kriminalermittlerin vor Ort verständigst du dein Team, lässt den Raum sichern und beginnst mit den ersten Gesprächen. Im Laufe der Untersuchung bestätigt sich: Viktor starb durch einen Schlag mit einem schweren Gegenstand. Du stellst deine Teetasse ab. „Bitte bleiben Sie für die Befragung hier.“ Dein erster Blick gilt der Uhr – nicht den Gesichtern.",
            "question": "Die abgeglichenen Aufzeichnungen und Zeugenaussagen grenzen die Tatzeit in dieser Fallakte auf 20:10 bis 20:15 ein. Eine Gartenkamera zeigt dieselbe Person um 20:08 und um 20:18 am Tor. Was belegen diese beiden Bilder allein?",
            "options": [
              "Die Person war die ganze Zeit am Tor",
              "Nur ihre Anwesenheit um 20:08 und 20:18",
              "Die Person betrat das Arbeitszimmer"
            ],
            "answer": 1,
            "hint": "Zwei Momentaufnahmen sagen nichts Sicheres über die Zeit dazwischen.",
            "reveal": "Nur die beiden Zeitpunkte sind belegt. Du notierst die Tatzeit. Durch den Flur zieht Blumenduft, doch das Fest ist plötzlich sehr weit weg.",
            "note": "Gesicherte Tatzeit: 20:10–20:15. Einzelne Kamerabilder sind kein durchgehendes Alibi.",
            "kind": "Ermitteln"
          },
          {
            "title": "Drei Namen auf der Gästeliste",
            "story": "Drei Menschen standen Viktor nahe: Clara Winter, seine Cousine und Floristin; Jonas Berg, sein Assistent; und Ben Falk, sein Geschäftspartner. Viktor hatte alle drei um ein Gespräch gebeten. Auf seinem Schreibtisch liegt ein verschlüsselter Zettel. Viktor liebte kleine Denkspiele und kennzeichnete seine Unterlagen gelegentlich mit verschlüsselten Merkhilfen.",
            "question": "Die Anweisung lautet: „Jeder Buchstabe ist eine Stelle zu weit im Alphabet.“ Auf dem Zettel steht „BLUF“. Was ist gemeint?",
            "options": [
              "AKTE",
              "BLUT",
              "BANK"
            ],
            "answer": 0,
            "hint": "Gehe bei jedem Buchstaben eine Stelle zurück: B wird A.",
            "reveal": "AKTE. Neben dem Zettel liegt eine Mappe mit der Aufschrift „Inventar“. Jemand hat zwei Seiten herausgerissen. Dein erster wirklicher Ansatz, Maus.",
            "note": "Viktors Zettel verweist auf eine Akte; in der Inventarmappe fehlen Seiten.",
            "kind": "Entschlüsseln"
          },
          {
            "title": "Die umgekehrte Einladung",
            "story": "Zwischen den Einladungen liegt eine Karte in Viktors Handschrift: „Was verborgen ist, liest sich vom Ende her.“ Darunter steht RATNEVNI. Du drehst die Karte zwischen den Fingern. Die Anweisung klingt wie ein letzter kleiner Test.",
            "question": "Welches Wort ergibt „RATNEVNI“, rückwärts gelesen?",
            "options": [
              "INVENTAR",
              "INTERVALL",
              "INVENTOR"
            ],
            "answer": 0,
            "hint": "Beginne rechts mit I, dann N und V.",
            "reveal": "INVENTAR. Die Karte verweist auf Viktors Bestandsunterlagen, nicht auf die Gästeliste.",
            "note": "Eine rückwärts geschriebene Notiz verweist auf das Inventar.",
            "kind": "Entschlüsseln"
          },
          {
            "title": "Die verschwundenen Minuten",
            "story": "Die Empfangskraft hat die tatsächlichen Spielzeiten der Musik anhand einer durchgehenden Festaufnahme überprüft: Klavierstück 19:58–20:04, Pause 20:04–20:06, Streichquartett 20:06–20:14, Pause 20:14–20:17. Eine Zeugin erinnert sich: „Als ich die Arbeitszimmertür ins Schloss fallen hörte, spielte das Quartett.“",
            "question": "Welcher Zeitraum bleibt für diese Beobachtung möglich?",
            "options": [
              "Nur 20:10–20:15",
              "20:06–20:14",
              "20:14–20:17"
            ],
            "answer": 1,
            "hint": "Nutze die Zeit des Musikstücks, ohne die Erinnerung genauer zu machen als sie ist.",
            "reveal": "Die Beobachtung lässt sich auf 20:06–20:14 eingrenzen. Sie nennt weder die Person noch eine genaue Minute.",
            "note": "Türgeräusch während des Quartetts: 20:06–20:14, Person unbekannt.",
            "kind": "Zeitfenster"
          },
          {
            "title": "Was gehört zuerst in die Akte?",
            "story": "Du hörst drei Angaben: Die Gastgeberin sah um 20:20 Viktor leblos. Ein Gast vermutet, Clara sei eifersüchtig. Ben sagt, Viktor habe ihn immer gemocht. Du möchtest Beobachtung und Vermutung sauber trennen.",
            "question": "Welche Angabe ist eine konkrete Beobachtung mit überprüfbarer Zeit?",
            "options": [
              "Die vermutete Eifersucht",
              "Bens Einschätzung seines Verhältnisses zu Viktor",
              "Der Fund durch die Gastgeberin um 20:20"
            ],
            "answer": 2,
            "hint": "Eine konkrete Wahrnehmung nennt ein Ereignis und seinen Zeitpunkt.",
            "reveal": "Du hältst den Fund fest und kennzeichnest die anderen Aussagen als Einschätzungen.",
            "note": "Fundzeit 20:20 ist eine Beobachtung; Beziehungseinschätzungen sind keine Tatbeweise.",
            "kind": "Aussagen prüfen"
          }
        ],
        "art": "assets/szene-1.webp",
        "artAlt": "Rosenumranktes Gartenhaus im Regen mit beleuchteter offener Tür.",
        "guide": "Ich beginne mit Fakten. Ein überzeugendes Alibi ist noch lange kein geprüftes Alibi."
      },
      {
        "title": "Hinter der Rosentür",
        "icon": "🚪",
        "steps": [
          {
            "title": "Ein zugänglicher Raum",
            "story": "Das Arbeitszimmer hat nur eine Tür. Das Fenster ist von innen verriegelt und wurde laut Spurensicherung nicht geöffnet. Die Tür war nicht abgeschlossen. Wer zu Viktor wollte, musste vom Flur hereinkommen. Clara hatte angenommen, Viktor habe die Tür abgeschlossen. Die überprüften Spuren zeigen etwas anderes.",
            "question": "Welche Aussage ist durch die gesicherten Angaben widerlegt?",
            "options": [
              "Ein Gast konnte die Tür vom Flur aus öffnen",
              "Man musste durchs Fenster einsteigen",
              "Die Tür war nicht abgeschlossen"
            ],
            "answer": 1,
            "hint": "Eine unverschlossene Tür bietet einen anderen Weg als das Fenster.",
            "reveal": "Ein Einstieg durchs Fenster war nicht nötig. Die Tür war offen zugänglich. Clara erschrickt, als sie hört, wie wenig das Zimmer geschützt war.",
            "note": "Zugang nur über die unverschlossene Flurtür; kein Fenstereinstieg.",
            "kind": "Ermitteln"
          },
          {
            "title": "Der Platz auf dem Schreibtisch",
            "story": "Auf der Tischunterlage ist ein sauberer rechteckiger Abdruck. Auf einem Foto vom Nachmittag steht genau dort ein schwerer Messing-Briefbeschwerer. Jetzt fehlt er. Neben dem Abdruck liegt ein dunkelblauer Stofffaden. Ben trägt einen dunkelblauen Wollschal; Jonas einen dunkelblauen Wollmantel; Clara ein cremefarbenes Kleid.",
            "question": "Welche Aussage berücksichtigt, dass sowohl Ben als auch Jonas dunkelblaue Wollkleidung tragen?",
            "options": [
              "Ben ist der Täter",
              "Jonas ist der Täter",
              "Ben und Jonas kommen als Quelle infrage"
            ],
            "answer": 2,
            "hint": "Die Farbe passt zu mehr als einer Person.",
            "reveal": "Die Farbe passt sowohl zu Bens Schal als auch zu Jonas’ Mantel. Sie erlaubt noch keine eindeutige Zuordnung und beweist keine Täterschaft. Du lässt Material und Webstruktur vergleichen.",
            "note": "Messing-Briefbeschwerer fehlt. Dunkelblauer Faden könnte zunächst von Ben oder Jonas stammen.",
            "kind": "Ermitteln"
          },
          {
            "title": "Der Weg durch das Haus",
            "story": "Der gesicherte Grundriss zeigt folgende Verbindungen: Empfang ↔ Flur; Flur ↔ Arbeitszimmer; Flur ↔ Wintergarten; Wintergarten ↔ Küche. Weitere Türen gibt es nicht.",
            "question": "Welche Folge führt vom Empfang zur Küche, ohne das Arbeitszimmer zu betreten?",
            "options": [
              "Empfang → Flur → Wintergarten → Küche",
              "Empfang → Arbeitszimmer → Küche",
              "Empfang → Küche → Wintergarten"
            ],
            "answer": 0,
            "hint": "Prüfe jede Verbindung im angegebenen Grundriss.",
            "reveal": "Der Flur verbindet Empfang und Wintergarten. Von dort führt die Tür zur Küche.",
            "note": "Der Weg zur Küche führt über Flur und Wintergarten.",
            "kind": "Weg rekonstruieren"
          },
          {
            "title": "Der zerrissene Seitenrand",
            "story": "Auf den verbliebenen Inventarseiten steht die fortlaufende Nummerierung 11, 12, 15, 16. Der Abgleich mit einer archivierten Inhaltsübersicht bestätigt: Dazwischen fehlen genau zwei Seiten, keine weiteren.",
            "question": "Welche Seiten fehlen?",
            "options": [
              "12 und 13",
              "13 und 14",
              "14 und 15"
            ],
            "answer": 1,
            "hint": "Zwischen 12 und 15 liegen zwei ganze Zahlen.",
            "reveal": "13 und 14. Du gibst genau diese Nummern an die Spurensicherung weiter.",
            "note": "Inventarseiten 13 und 14 fehlen.",
            "kind": "Dokumentvergleich"
          },
          {
            "title": "Die scheinbar verräterische Tasse",
            "story": "Auf Viktors Tisch steht eine Tasse mit einem Lippenstiftabdruck in der Farbe, die Clara trägt. Ein datiertes Festfoto von 18:30 zeigt Clara mit genau dieser Tasse im Arbeitszimmer. Die Spur wurde nicht zeitlich eingegrenzt.",
            "question": "Welche Aussage bleibt mit diesen Angaben vereinbar?",
            "options": [
              "Clara muss während der Tat im Zimmer gewesen sein",
              "Die Tasse beweist einen Einstieg durchs Fenster",
              "Clara kann die Spur bereits um 18:30 hinterlassen haben"
            ],
            "answer": 2,
            "hint": "Frage dich, ob die Spur nur während der Tat entstanden sein kann.",
            "reveal": "Claras frühere Anwesenheit könnte den Lippenstiftabdruck erklären. Die Tasse beweist nicht, dass sie während der Tat im Zimmer war.",
            "note": "Lippenstift an der Tasse kann von Claras Besuch um 18:30 stammen.",
            "kind": "Falsche Fährte"
          }
        ],
        "art": "assets/szene-2.webp",
        "artAlt": "Leeres Arbeitszimmer mit zerrissener Akte und fehlendem Briefbeschwerer.",
        "guide": "Ich trenne Beobachtung und Schlussfolgerung. Genau dort verstecken sich die Fehler."
      },
      {
        "title": "Zwischen den Aussagen",
        "icon": "🕰️",
        "steps": [
          {
            "title": "Claras Blumen",
            "story": "Clara umfasst ihre Teetasse so fest, dass ihre Finger weiß werden. „Ich war draußen bei den Blumenlieferanten. Wir haben die Lieferung für morgen besprochen.“ Nervosität ist kein Schuldbeweis. Du prüfst ihre Aussage, Maus: Zwei Lieferanten haben von 20:07 bis 20:17 ohne Unterbrechung mit Clara am Gartentor gesprochen. Sie konnten sie die ganze Zeit sehen.",
            "question": "Deckt dieses bestätigte Alibi die gesamte Tatzeit 20:10–20:15 ab?",
            "options": [
              "Ja, vollständig",
              "Nur den Anfang",
              "Nein, überhaupt nicht"
            ],
            "answer": 0,
            "hint": "Vergleiche Anfang und Ende beider Zeiträume.",
            "reveal": "Ja. Die beiden Lieferanten bestätigen Claras Anwesenheit während der gesamten Tatzeit. Damit scheidet sie in dieser Fallakte als die Person aus, die den tödlichen Schlag im Arbeitszimmer ausführte.",
            "note": "Clara: lückenlos bestätigtes Alibi von 20:07 bis 20:17.",
            "kind": "Ermitteln"
          },
          {
            "title": "Jonas und die Teetassen",
            "story": "Jonas half der Gastgeberin von 20:11 bis 20:16 ununterbrochen in der Küche. Das ist bestätigt. Er sagt deshalb: „Ich habe ein Alibi für die ganze Tatzeit.“ Doch du schaust noch einmal auf deine Notizen.",
            "question": "Welcher Teil der Tatzeit ist durch dieses Alibi nicht abgedeckt?",
            "options": [
              "20:10 bis 20:11",
              "20:12 bis 20:14",
              "20:15 bis 20:16"
            ],
            "answer": 0,
            "hint": "Die Tatzeit beginnt früher als sein bestätigter Küchenaufenthalt.",
            "reveal": "Zwischen 20:10 und 20:11 bleibt eine Lücke. Jonas ist noch nicht vollständig entlastet. Er erinnert sich aber an ein Foto, das um 20:10:30 aufgenommen wurde.",
            "note": "Jonas zunächst nur von 20:11 bis 20:16 bestätigt; eine frühe Lücke bleibt.",
            "kind": "Ermitteln"
          },
          {
            "title": "Zwei Zeugen, dieselbe Quelle",
            "story": "Ein Gast behauptet: „Jonas war um 20:12 im Flur.“ Ein zweiter bestätigt es. Auf Nachfrage erklärt der zweite, er habe Jonas nicht selbst gesehen, sondern nur den ersten Gast erzählen hören.",
            "question": "Wie viele voneinander unabhängige Wahrnehmungsberichte liegen hier vor?",
            "options": [
              "Eine",
              "Zwei unabhängige Beobachtungen",
              "Keine Beobachtung"
            ],
            "answer": 0,
            "hint": "Zähle Wahrnehmungen, nicht Personen, die dieselbe Geschichte wiederholen.",
            "reveal": "Nur der erste Gast berichtet eine eigene Wahrnehmung. Ob er Jonas richtig erkannt hat, muss noch geprüft werden.",
            "note": "Die behauptete Flurbeobachtung hat nur eine ursprüngliche Quelle.",
            "kind": "Zeugen prüfen"
          },
          {
            "title": "Der Mantel an der Garderobe",
            "story": "Der erste Gast beschreibt einen dunkelblauen Mantel hinter Milchglas. Jonas hat seinen Mantel nachweislich um 19:45 an die Garderobe gehängt. Die Garderobe steht im Flur direkt hinter dem Milchglas. Der Gast sah weder Gesicht noch Bewegung.",
            "question": "Welche Erklärung ist durch die Beobachtung ebenfalls möglich?",
            "options": [
              "Jonas sprach sichtbar mit Viktor",
              "Der Gast sah den hängenden Mantel statt Jonas",
              "Clara trug nachweislich Jonas’ Mantel"
            ],
            "answer": 1,
            "hint": "Ein Kleidungsstück kann vorhanden sein, ohne dass sein Besitzer darin steckt.",
            "reveal": "Der Mantel erklärt die Silhouette. Die Aussage beweist Jonas’ Anwesenheit im Flur nicht.",
            "note": "Milchglas-Silhouette kann der abgelegte Mantel gewesen sein.",
            "kind": "Beobachten"
          },
          {
            "title": "Eine Frage ohne Vorgabe",
            "story": "Clara schaut immer wieder zum Gartentor. Du möchtest erfahren, was sie dort gesehen hat, ohne eine Antwort vorzugeben.",
            "question": "Welche Frage lässt Clara am ehesten in ihren eigenen Worten antworten?",
            "options": [
              "Ben ist doch sicher am Tor vorbeigegangen, oder?",
              "Du hast nichts gesehen, stimmt’s?",
              "Was hast du zwischen 20:07 und 20:17 am Tor beobachtet?"
            ],
            "answer": 2,
            "hint": "Eine offene Frage nennt keinen erwarteten Täter und keine erwartete Antwort.",
            "reveal": "Clara beschreibt eine Lieferung und ihre beiden Gesprächspartner. Du protokollierst ihre eigenen Worte.",
            "note": "Claras Torbeobachtungen werden mit einer offenen Frage aufgenommen.",
            "kind": "Verhören"
          }
        ],
        "art": "assets/szene-3.webp",
        "artAlt": "Wintergarten mit drei leeren Stühlen und Teetassen nach dem Fest.",
        "guide": "Angst kann viele Gründe haben. Ich prüfe Aussagen, statt Gesichter zu verurteilen."
      },
      {
        "title": "Die falsche Uhrzeit",
        "icon": "📷",
        "steps": [
          {
            "title": "Das Foto aus der Küche",
            "story": "Das Originalfoto zeigt Jonas in der Küche. Laut verifizierten Metadaten wurde es um 20:10:30 aufgenommen. Vom Arbeitszimmer zur Küche braucht man auf dem einzigen Weg mindestens 90 Sekunden. Eine gesicherte Audiodatei aus Viktors Diktiergerät belegt: Um 20:10:00 ist Viktors Stimme noch lebend zu hören. Die abgeglichenen Aufzeichnungen und Zeugenaussagen legen den tödlichen Schlag nach diesen Zeitpunkt. Die Gastgeberin bestätigt außerdem, Jonas seit dem Foto um 20:10:30 bis 20:16 ununterbrochen gesehen zu haben.",
            "question": "Konnte Jonas Viktor nach 20:10 töten und um 20:10:30 schon in der Küche sein?",
            "options": [
              "Ja, 30 Sekunden reichen",
              "Nein, der Weg dauert mindestens 90 Sekunden",
              "Das Foto belegt gar nichts"
            ],
            "answer": 1,
            "hint": "Zwischen den beiden Zeitpunkten liegen nur 30 Sekunden.",
            "reveal": "Nein. Die dokumentierte Mindestwegzeit macht das unmöglich. Zusammen mit dem ununterbrochenen Küchenaufenthalt ist Jonas für die ganze relevante Zeit entlastet.",
            "note": "Jonas entlastet: Foto 20:10:30, Mindestwegzeit 90 Sekunden, danach durchgehendes Küchenalibi.",
            "kind": "Ermitteln"
          },
          {
            "title": "Bens Empfang",
            "story": "Ben behauptet: „Um 20:12 habe ich schon am Empfang unterschrieben.“ Seine Unterschrift steht im Besucherbuch in einer eigenen Zeile mit dem beim Unterschreiben automatisch erzeugten Zeitstempel 20:18. Die Empfangskraft bestätigt, dass sie ihn beim Unterschreiben sah. Das Buch wird fortlaufend geführt und der Zeitstempel ist korrekt. Du lässt eine Pause entstehen. Ben antwortet auf die Stille, bevor du eine Frage stellst: „Die Uhr dort geht bestimmt falsch.“ Du bleibst bei den überprüften Angaben. Eine hektische Reaktion ist ein Ansatz für die nächste Frage, kein Beweis.",
            "question": "Welche Schlussfolgerung ist gerechtfertigt?",
            "options": [
              "Bens behauptete Unterschriftszeit stimmt nicht",
              "Ben ist damit bereits zweifelsfrei überführt",
              "Ben war um 20:12 sicher im Garten"
            ],
            "answer": 0,
            "hint": "Die Spur widerlegt eine konkrete Uhrzeit, noch nicht die ganze Tat.",
            "reveal": "Ben unterschrieb erst um 20:18. Sein Alibi für 20:12 ist falsch. Als du ihn darauf ansprichst, nennt er es eine Verwechslung. Zum ersten Mal wird seine Stimme scharf.",
            "note": "Ben behauptete 20:12 am Empfang; bestätigt ist seine Unterschrift erst um 20:18.",
            "kind": "Ermitteln"
          },
          {
            "title": "Die Uhr auf dem Foto",
            "story": "Ein Kontrollfoto zeigt das Zifferblatt der Küchenwanduhr auf 20:07, während die kalibrierte Referenzuhr exakt 20:10 zeigt. Die Küchenwanduhr läuft konstant drei Minuten nach. Ein anderes Foto zeigt sie auf 20:08.",
            "question": "Welche tatsächliche Uhrzeit entspricht 20:08 auf dieser Wanduhr?",
            "options": [
              "20:11",
              "20:05",
              "20:08"
            ],
            "answer": 0,
            "hint": "Die Uhr zeigt zu wenig an. Addiere drei Minuten.",
            "reveal": "20:11. Du trennst die Wanduhr von den bereits verifizierten Originalmetadaten des Jonas-Fotos.",
            "note": "Küchenwanduhr geht drei Minuten nach; Anzeige 20:08 entspricht 20:11.",
            "kind": "Zeit korrigieren"
          },
          {
            "title": "Passt der Rundweg?",
            "story": "Für einen kontrollierten Rundweg gelten Mindestzeiten: Empfang zum Arbeitszimmer 45 Sekunden, Arbeitszimmer zur Küche 90 Sekunden, Küche zum Empfang 60 Sekunden. Ben behauptet, er habe diesen ganzen Rundweg einschließlich eines Gesprächs in genau zwei Minuten zurückgelegt.",
            "question": "Was ist bereits ohne Gesprächsdauer festzustellen?",
            "options": [
              "Die Wege dauern genau zwei Minuten",
              "Die Wege allein dauern mindestens 3 Minuten 15 Sekunden",
              "Die Wege dauern höchstens 90 Sekunden"
            ],
            "answer": 1,
            "hint": "Addiere 45 + 90 + 60 Sekunden.",
            "reveal": "195 Sekunden sind 3 Minuten 15 Sekunden. Zwei Minuten reichen selbst ohne Gespräch nicht.",
            "note": "Bens behaupteter Zweiminuten-Rundweg ist mit den Mindestwegzeiten unvereinbar.",
            "kind": "Wegzeiten"
          },
          {
            "title": "Der Ausschnitt im Besucherbuch",
            "story": "Ben zeigt dir ein Foto seiner Unterschrift ohne den Rand des Buchs. Das gesicherte Original enthält den korrekten Zeitstempel 20:18 und die fortlaufende Seitenfolge.",
            "question": "Welche Quelle ist für die Prüfung seiner behaupteten Unterschriftszeit am aussagekräftigsten?",
            "options": [
              "Nur Bens beschnittenes Foto",
              "Seine Erinnerung an die Uhrzeit",
              "Das vollständige gesicherte Original mit Zeitstempel"
            ],
            "answer": 2,
            "hint": "Die relevante Angabe fehlt gerade im Ausschnitt.",
            "reveal": "Das Original zeigt den Zusammenhang, den der Ausschnitt verbirgt. Die Unterschrift bleibt auf 20:18 datiert.",
            "note": "Der beschnittene Buchausschnitt ersetzt das Original mit Zeitstempel nicht.",
            "kind": "Dokumentvergleich"
          }
        ],
        "art": "assets/szene-4.webp",
        "artAlt": "Empfangsbuch, Uhr und Küchenfoto zur Überprüfung der Alibis.",
        "guide": "Dreißig Sekunden können eine ganze Geschichte kippen."
      },
      {
        "title": "Die verschlossene Akte",
        "icon": "🗝️",
        "steps": [
          {
            "title": "Viktors Zahlenschloss",
            "story": "Die Inventarmappe nennt den Archivkasten in Viktors Schrank. Auf einer Karte am Schloss steht Viktors Eselsbrücke: „Drei Ziffern. Die erste ist doppelt so groß wie die zweite. Die dritte ist drei größer als die erste. Die Summe ist 13.“",
            "question": "Welcher Code erfüllt alle Bedingungen?",
            "options": [
              "427",
              "436",
              "247"
            ],
            "answer": 0,
            "hint": "Teste jede Bedingung einzeln. Bei 427 ist 4 doppelt so groß wie 2.",
            "reveal": "427: 4 = 2 × 2, 7 = 4 + 3 und 4 + 2 + 7 = 13. Im Kasten liegen Kopien der fehlenden Inventarseiten. Gut kombiniert, Maus.",
            "note": "Archivkasten mit Code 427 geöffnet; Kopien der fehlenden Seiten gesichert.",
            "kind": "Kombinieren"
          },
          {
            "title": "Ein doppelter Verkauf",
            "story": "In den Kopien taucht dieselbe Vase zweimal auf: Inventarnummer R-17, einmal verkauft an Frau Sommer und einmal an Herrn Lind. Es gibt nachweislich nur ein Original mit dieser Nummer. Beide Zahlungen gingen auf das Geschäftskonto ein. Die Unterlagen tragen Bens Freigabe.",
            "question": "Was ist die konkrete Unstimmigkeit?",
            "options": [
              "Eine Vase wurde an zwei verschiedene Käufer verkauft",
              "Die Vase ist blau statt rosa",
              "Clara hat keine Rechnung erhalten"
            ],
            "answer": 0,
            "hint": "Vergleiche Inventarnummer und Käufer, nicht nur die Beträge.",
            "reveal": "Dasselbe Einzelstück wurde zweimal verkauft. Viktor hatte die Doppelverkäufe entdeckt. Ben verantwortete die Freigaben – ein nachvollziehbares Motiv taucht auf.",
            "note": "R-17 wurde als dasselbe Original zweimal verkauft; beide Unterlagen tragen Bens Freigabe.",
            "kind": "Ermitteln"
          },
          {
            "title": "Die zweite Verschlüsselung",
            "story": "Im geöffneten Archivkasten findest du ein Etikett: „A=1, B=2 … Z=26“. Daneben stehen die Zahlen 11–15–16–9–5.",
            "question": "Welches Wort steckt darin?",
            "options": [
              "KOPIE",
              "KONTO",
              "KISTE"
            ],
            "answer": 0,
            "hint": "11 ist K, 15 ist O. Übersetze jede Zahl einzeln.",
            "reveal": "KOPIE. Viktor bewahrte bewusst Zweitfassungen seiner Unterlagen auf.",
            "note": "Zahlenchiffre 11–15–16–9–5 ergibt KOPIE.",
            "kind": "Entschlüsseln"
          },
          {
            "title": "Die Rechnung geht nicht auf",
            "story": "Die beiden authentischen Rechnungen für R-17 nennen 4.800 Euro und 5.200 Euro. Der Kontoauszug bestätigt beide Zahlungseingänge. In einer separat geführten Erlösübersicht sind für R-17 jedoch insgesamt nur 4.800 Euro eingetragen.",
            "question": "Um welchen Betrag liegt die Erlösübersicht unter der Summe der beiden Zahlungseingänge?",
            "options": [
              "400 Euro",
              "5.200 Euro",
              "10.000 Euro"
            ],
            "answer": 1,
            "hint": "Addiere die Eingänge und ziehe den ausgewiesenen Erlös ab.",
            "reveal": "10.000 minus 4.800 ergibt 5.200 Euro. Du dokumentierst die Abweichung; die genaue Verwendung des Geldes muss separat geklärt werden.",
            "note": "Zahlungen für R-17: 10.000 Euro; Übersicht: 4.800 Euro; Abweichung: 5.200 Euro.",
            "kind": "Buchungen prüfen"
          },
          {
            "title": "Nicht jede doppelte Zeile ist Betrug",
            "story": "Eine andere Vase, R-18, steht in zwei Zeilen: „Reservierung, keine Zahlung“ und „Verkauf, Zahlung bestätigt“. R-17 dagegen steht auf zwei bestätigten Verkaufsrechnungen an unterschiedliche Käufer.",
            "question": "Welche Unterscheidung ist für deinen Verdacht entscheidend?",
            "options": [
              "Jede doppelte Inventarnummer ist automatisch Betrug",
              "Die höhere Inventarnummer ist immer verdächtiger",
              "Bei R-17 sind zwei Verkäufe und Zahlungen belegt; bei R-18 nur ein Verkauf"
            ],
            "answer": 2,
            "hint": "Vergleiche die Art der Einträge, nicht nur ihre Anzahl.",
            "reveal": "Eine Reservierung plus ein Verkauf ist kein doppelter Verkauf. Der belastende Unterschied bei R-17 sind zwei abgeschlossene Geschäfte.",
            "note": "R-18 ist Reservierung plus Verkauf; R-17 hat zwei bestätigte Verkäufe.",
            "kind": "Muster erkennen"
          }
        ],
        "art": "assets/szene-5.webp",
        "artAlt": "Geöffneter Archivkasten, Inventarseiten und eine antike Vase.",
        "guide": "Wer etwas verschwinden lässt, verrät oft, was ihm gefährlich werden könnte."
      },
      {
        "title": "Die Frist um Viertel nach acht",
        "icon": "📜",
        "steps": [
          {
            "title": "Eine Frist, keine Einladung",
            "story": "Viktors Handy enthält eine Nachricht an Ben von 19:55: „Ich habe die Doppelverkäufe belegt. Gib mir bis 20:15 eine Erklärung. Morgen übergebe ich alles der Polizei.“ Ben antwortete um 19:57: „Ich komme ins Arbeitszimmer.“ Beide Nachrichten sind authentisch.",
            "question": "Welche drei Dinge verbindet diese Nachricht unmittelbar?",
            "options": [
              "Ben, das Arbeitszimmer und den drohenden Betrugsnachweis",
              "Clara, den Garten und die Vase",
              "Jonas, die Küche und das Empfangsbuch"
            ],
            "answer": 0,
            "hint": "Achte auf Empfänger, angekündigten Ort und Konflikt.",
            "reveal": "Ben wusste von den Belegen, kündigte seinen Besuch im Arbeitszimmer an und stand unter Zeitdruck. Das beweist noch nicht den Mord, verbindet aber Gelegenheit und Motiv.",
            "note": "Ben kündigte um 19:57 einen Besuch an; Viktor drohte wegen der Doppelverkäufe mit der Polizei.",
            "kind": "Ermitteln"
          },
          {
            "title": "Wer wollte die Akte verschwinden lassen?",
            "story": "Viktor war Eigentümer der Vase. Clara erhielt die Blumenkosten unabhängig vom Verkauf. Jonas bekam ein festes Gehalt. Ben war für die von ihm freigegebenen Verkäufe verantwortlich. Die Polizei bestätigt, dass die fehlenden Originalseiten seine Freigaben enthielten.",
            "question": "Wem hätte das Verschwinden dieser Seiten bei dem beschriebenen Konflikt unmittelbar genutzt?",
            "options": [
              "Clara",
              "Jonas",
              "Ben"
            ],
            "answer": 2,
            "hint": "Gesucht ist die Person, deren Verantwortlichkeit auf den Seiten dokumentiert war.",
            "reveal": "Ben. Die verschwundenen Seiten hätten seine Verbindung zu den Doppelverkäufen verdeckt. Doch Viktor hatte Kopien angelegt. Du hast sie rechtzeitig gefunden.",
            "note": "Das Entfernen der Originalseiten hätte Bens dokumentierte Verantwortung verschleiert.",
            "kind": "Ermitteln"
          },
          {
            "title": "Die Nachricht in Fragmenten",
            "story": "Ein beschädigter Ausdruck enthält drei nummerierte Fragmente: 1 „Morgen übergebe ich“, 2 „alles der Polizei“, 3 „Gib mir bis 20:15 eine Erklärung.“ Dieser Abschnitt der authentischen Nachricht beginnt mit der Frist und endet mit der angekündigten Übergabe.",
            "question": "Welche Reihenfolge stellt diese Aussage wieder her?",
            "options": [
              "3 → 1 → 2",
              "1 → 3 → 2",
              "2 → 1 → 3"
            ],
            "answer": 0,
            "hint": "Beginne mit der Frist. Danach folgt der vollständige Satz über morgen.",
            "reveal": "Erst die Frist, dann die Übergabe: Viktor wollte eine Erklärung und kündigte für den Folgetag die Polizei an.",
            "note": "Nachrichtenfolge: Frist bis 20:15, danach angekündigte Übergabe am Folgetag.",
            "kind": "Rekonstruieren"
          },
          {
            "title": "Motiv oder Gelegenheit?",
            "story": "Du sortierst deine Akte in zwei Spalten. Links steht „drohender Nachweis der von Ben freigegebenen Doppelverkäufe“. Rechts steht „Ben kündigte seinen Besuch im Arbeitszimmer an“.",
            "question": "Welche Zuordnung passt?",
            "options": [
              "Links Tatnachweis; rechts vollständiges Alibi",
              "Links Motiv; rechts Hinweis auf eine mögliche Begegnung",
              "Beides beweist die genaue Tatminute"
            ],
            "answer": 1,
            "hint": "Ein Grund für eine Tat ist etwas anderes als eine angekündigte Anwesenheit.",
            "reveal": "Der Betrugsnachweis liefert ein Motiv. Die Besuchsankündigung ist ein Ansatz zur Gelegenheit, beweist für sich aber nicht den tatsächlichen Besuch.",
            "note": "Motiv und angekündigte Begegnung werden getrennt bewertet.",
            "kind": "Beweise ordnen"
          },
          {
            "title": "Die fehlenden Antworten",
            "story": "Ben sagt: „Viktor hat mir nie eine Frist gesetzt.“ Du besitzt seine authentische Antwort von 19:57 auf Viktors Nachricht von 19:55.",
            "question": "Welche Nachfrage prüft seinen konkreten Widerspruch?",
            "options": [
              "Warum sind Sie so nervös?",
              "Sie sehen wie ein Täter aus – warum?",
              "Wie erklären Sie Ihre Antwort um 19:57 auf die Nachricht mit der Frist?"
            ],
            "answer": 2,
            "hint": "Beziehe dich auf die überprüfte Nachricht, nicht auf seinen Gesichtsausdruck.",
            "reveal": "Du legst die beiden Nachrichten nebeneinander. Ben muss seine Aussage anhand eines dokumentierten Widerspruchs erklären.",
            "note": "Bens Leugnung der Frist widerspricht dem authentischen Nachrichtenverlauf.",
            "kind": "Verhören"
          }
        ],
        "art": "assets/szene-6.webp",
        "artAlt": "Handy und Verkaufsbelege auf einem Schreibtisch.",
        "guide": "Ein Motiv erklärt den Druck. Es ersetzt keinen Tatnachweis."
      },
      {
        "title": "Unter den weißen Rosen",
        "icon": "🌹",
        "steps": [
          {
            "title": "Ein Fund im Pflanzkasten",
            "story": "Am nächsten Morgen meldet die Spurensicherung einen Fund: In einem von mehreren Pflanzkästen mit weißen Rosen im Flur liegt der Messing-Briefbeschwerer unter der Erde, verborgen unter dem Wurzelballen. Der untersuchte Briefbeschwerer passt zu den gesicherten Tatspuren. An seiner Unterseite klemmt ein abgerissenes Stück dunkelblauen Wollstoffs. Seine Risskante schließt exakt an den Riss in Bens sichergestelltem Schal an. Jonas’ Mantel hat eine andere Webstruktur. Du lässt den Fundort gegenüber den Befragten geheim halten.",
            "question": "Welche frühere Unsicherheit löst der Vergleich?",
            "options": [
              "Der Stoff stammt von Bens Schal, nicht von Jonas’ Mantel",
              "Die Tatzeit liegt jetzt am Morgen",
              "Clara war im Arbeitszimmer"
            ],
            "answer": 0,
            "hint": "Das ist mehr als dieselbe Farbe: Die Risskanten passen zusammen.",
            "reveal": "Das abgerissene Stück lässt sich Bens Schal zuordnen. Damit besteht eine direkte Materialverbindung zwischen seinem Schal und der Tatwaffe. Du hältst fest, was der Vergleich zeigt, ohne daraus allein den gesamten Tatablauf abzuleiten.",
            "note": "Tatwaffe verborgen im Pflanzkasten; Stoffstück an der Unterseite passt exakt an Bens Schalriss.",
            "kind": "Ermitteln"
          },
          {
            "title": "Die Spur richtig einordnen",
            "story": "Im ersten Gespräch erklärt Ben den losen Tischfaden: „Ich war schon nachmittags am Schreibtisch. Der Faden könnte alt sein.“ Das wäre für diesen Faden möglich. Inzwischen liegt aber eine weitere Spur vor: Das abgerissene Stück an der Unterseite der Tatwaffe passt exakt in seinen Schalriss. Ein vollständiges, scharfes Foto von 19:50 zeigt den Schal noch unbeschädigt.",
            "question": "Welche Bewertung berücksichtigt alle Angaben?",
            "options": [
              "Der alte Besuch erklärt jede neue Spur",
              "Der einzelne Faden allein genügt; alles andere ist egal",
              "Der neue Schalriss und die Tatwaffe sind stärker als der einzelne Faden"
            ],
            "answer": 2,
            "hint": "Unterscheide einen losen Faden von einem exakt passenden, frisch abgerissenen Stück.",
            "reveal": "Der frische Riss und das passende Stück an der Tatwaffe wiegen stärker. Bens Erklärung für einen alten Faden beantwortet diese neue Spur nicht.",
            "note": "Bens Schal war um 19:50 unbeschädigt; seine Erklärung zum alten Faden erklärt den frischen Riss nicht.",
            "kind": "Ermitteln"
          },
          {
            "title": "Die Nummern der Beutel",
            "story": "Vier versiegelte Beutel sind protokolliert: A enthält den losen Tischfaden; B den Stoff an der Tatwaffe; C eine Vergleichsprobe aus Jonas’ Mantel; D Bens Schal mit Riss.",
            "question": "Welche Paarung prüft den behaupteten exakten Anschluss der Risskanten?",
            "options": [
              "B und D",
              "A und C",
              "C und D"
            ],
            "answer": 0,
            "hint": "Der direkte Anschluss betrifft das Stück an der Waffe und den beschädigten Schal.",
            "reveal": "B und D ergeben den direkten Risskantenvergleich. Der Tischfaden ist eine andere, schwächere Spur.",
            "note": "Direkter Risskantenvergleich: Stoff an der Tatwaffe gegen Bens Schal.",
            "kind": "Spuren zuordnen"
          },
          {
            "title": "Vorher und nachher",
            "story": "Ein vollständiges, scharfes Foto von 19:50 zeigt Bens Schal ohne Riss. Ein Foto von der Sicherstellung um 21:05 zeigt denselben Schal mit Riss. Zwischen diesen beiden Zeitpunkten gibt es kein weiteres gesichertes Schalbild.",
            "question": "Was kann dieses Fotopaar zeitlich belegen?",
            "options": [
              "Der Riss entstand sicher exakt um 20:12",
              "Der Riss entstand nach 19:50 und spätestens bis 21:05",
              "Der Riss war bereits morgens vorhanden"
            ],
            "answer": 1,
            "hint": "Zwei Zustände begrenzen ein Zeitfenster, nennen aber keine genaue Minute.",
            "reveal": "Der Riss ist in diesem Fenster neu entstanden. Erst weitere Spuren verbinden ihn mit der Tat.",
            "note": "Schalriss zeitlich eingegrenzt: nach 19:50 bis spätestens 21:05.",
            "kind": "Zeitfenster"
          },
          {
            "title": "Eine offene Frage",
            "story": "Ben erklärt den Tischfaden mit seinem Besuch am Nachmittag. Du hältst ihm noch keinen Fundort vor. Die Materialprüfung des frischen Stoffstücks an der Tatwaffe liegt bereits vor.",
            "question": "Welche Frage bleibt durch seine Erklärung unbeantwortet?",
            "options": [
              "Warum war Clara am Gartentor?",
              "Wie viele Rosen gibt es im Garten?",
              "Wie kam das frisch abgerissene, passende Schalstück an die Tatwaffe?"
            ],
            "answer": 2,
            "hint": "Seine Erklärung betrifft einen losen Tischfaden, nicht das direkt passende neue Stück.",
            "reveal": "Du bleibst bei der stärkeren Spur. Eine plausible Erklärung für den Tischfaden beantwortet den Materialvergleich nicht.",
            "note": "Die Erklärung zum Tischfaden beantwortet die frische Spur an der Tatwaffe nicht.",
            "kind": "Widerspruch prüfen"
          }
        ],
        "art": "assets/szene-7.webp",
        "artAlt": "Messing-Briefbeschwerer und dunkelblauer Stoff unter weißen Rosen im Flur.",
        "guide": "Gleiche Farbe ist eine Vermutung. Passende Risskanten sind eine überprüfte Spur."
      },
      {
        "title": "Die letzte Falle",
        "icon": "🔎",
        "steps": [
          {
            "title": "Wer steht im Zentrum der Beweise?",
            "story": "Du legst deine Fallakte auf den Tisch, Maus. Clara und Jonas sind durch unabhängig bestätigte Angaben entlastet. Ben hat eine falsche Alibizeit genannt, seinen Besuch angekündigt, ein dokumentiertes Motiv und eine frische Spur an der Tatwaffe. Du weißt: Ein Blick kann täuschen. Das Gesamtbild der überprüften Belege zählt.",
            "question": "Wen belasten die zusammengetragenen Belege am stärksten?",
            "options": [
              "Clara Winter",
              "Jonas Berg",
              "Ben Falk"
            ],
            "answer": 2,
            "hint": "Verbinde Alibis, Nachricht, Dokumente und Materialvergleich.",
            "reveal": "Ben Falk. Du lässt ihn noch einmal in den Wintergarten bitten. Die Spurensicherung hält den Fundort der Tatwaffe weiterhin geheim. Du beschließt, ihm eine falsche Einzelheit vorzulegen – und auf eine überprüfbare Korrektur zu warten.",
            "note": "Die Belege konzentrieren sich auf Ben Falk; Clara und Jonas sind durch unabhängige Alibis entlastet.",
            "kind": "Rekonstruieren"
          },
          {
            "title": "Der rote Faden",
            "story": "Vier Ereignisse sind bestätigt: A – Viktor droht um 19:55 mit der Polizei; B – Ben kündigt um 19:57 seinen Besuch an; C – die Tat geschieht zwischen 20:10 und 20:15; D – Ben unterschreibt um 20:18 am Empfang.",
            "question": "Welche Reihenfolge passt zu allen bestätigten Zeiten?",
            "options": [
              "A → B → C → D",
              "B → D → A → C",
              "D → A → C → B"
            ],
            "answer": 0,
            "hint": "Ordne die angegebenen Zeiten aufsteigend.",
            "reveal": "Du hast die zeitliche Kette geordnet. Sie ist die Grundlage deiner nächsten Fragen.",
            "note": "Zeitliche Kette: Drohung, Besuchsankündigung, Tat, Empfangsunterschrift.",
            "kind": "Rekonstruieren"
          },
          {
            "title": "Der Schutz deiner Falle",
            "story": "Du bereitest das Gespräch mit Ben vor. Farbe und Ort der Rosen am Fundort sollen nicht verraten werden. Eine Kollegin schlägt vor, das Fundfoto vor Ben auf den Tisch zu legen.",
            "question": "Warum lässt du das Foto vorerst verdeckt?",
            "options": [
              "Das Foto würde das Tatzeitfenster ändern",
              "Ben könnte daraus die geheim gehaltenen Funddetails erfahren",
              "Bilder können niemals Beweise sein"
            ],
            "answer": 1,
            "hint": "Deine Falle prüft Wissen, das nicht erst im Gespräch vermittelt werden darf.",
            "reveal": "Du hältst den Fundbericht und das Foto zurück. Andernfalls wäre eine spätere genaue Korrektur durch Ben leicht zu erklären.",
            "note": "Fundbild und Fundbericht bleiben vor der Wissensprüfung verborgen.",
            "kind": "Falle vorbereiten"
          },
          {
            "title": "Keine Gedanken lesen",
            "story": "Vor dem Gespräch ordnest du vier Aussagen: „Ben wirkt ruhig“, „Clara zittert“, „Jonas schaut weg“, „Das Stoffstück passt exakt an Bens frischen Schalriss“.",
            "question": "Welche Angabe ist hier ein überprüfter Sachbeleg?",
            "options": [
              "Bens ruhiges Auftreten",
              "Claras Zittern",
              "Der dokumentierte exakte Materialvergleich"
            ],
            "answer": 2,
            "hint": "Die anderen Angaben beschreiben Verhalten, das viele Ursachen haben kann.",
            "reveal": "Du stützt die Konfrontation auf den Materialvergleich. Die Falle soll einen weiteren prüfbaren Hinweis liefern.",
            "note": "Die finale Konfrontation beruht auf Sachbelegen statt auf vermeintlichem Gedankenlesen.",
            "kind": "Beweise abwägen"
          },
          {
            "title": "Ein Detail zu viel",
            "story": "Im aufgezeichneten Gespräch am nächsten Morgen sagst du ruhig: „Der Briefbeschwerer lag draußen unter den roten Rosen.“ Ben lacht kurz. „Weiße Rosen. Im Flur. Sie hätten unter dem Wurzelballen suchen müssen.“ Du hast ihm absichtlich einen falschen Fundort genannt. Die richtigen Angaben – vor allem das Versteck unter dem Wurzelballen – wurden seit dem Fund geheim gehalten. Ben war bei der Suche nicht anwesend und bekam keine Fundberichte. Seine Korrektur ist ein neuer Ansatz. Du prüfst, woher er dieses Wissen haben könnte.",
            "question": "Wie ordnest du Bens Korrektur ein?",
            "options": [
              "Als überprüfbares Wissen über den geheim gehaltenen Fundort – ein weiterer belastender Hinweis",
              "Als allein ausreichenden Beweis, der alle anderen Spuren ersetzt",
              "Als Beleg dafür, dass jede nervöse Person schuldig ist"
            ],
            "answer": 0,
            "hint": "Er nennt richtige Funddetails, darunter das Versteck unter dem Wurzelballen. Diese wurden ihm nach den vorliegenden Angaben nicht mitgeteilt.",
            "reveal": "Du schiebst das Foto des unbeschädigten Schals von 19:50 neben den Materialvergleich. „Woher wussten Sie von dem Versteck, Ben?“ Die Kombination aus Fundwissen, Tatwaffenspur, falscher Alibizeit und Motiv bringt ihn zum Geständnis: Er wollte die Betrugsbelege an sich nehmen, schlug Viktor im Streit, riss die Seiten heraus und vergrub den Briefbeschwerer im Pflanzkasten unter dem Wurzelballen der weißen Rosen. Dein Team überprüft die Einzelheiten seines Geständnisses anhand der gesicherten Spuren.",
            "note": "Ben nennt geheim gehaltene Funddetails, einschließlich des Verstecks unter dem Wurzelballen. Sein anschließendes Geständnis wird mit den gesicherten Spuren abgeglichen.",
            "kind": "Psychologisch ermitteln"
          }
        ],
        "art": "assets/szene-8.webp",
        "artAlt": "Beweistisch im Wintergarten am Morgen mit Schal, Fotos und Tatwaffe.",
        "guide": "Ich gebe Ben eine falsche Einzelheit. Mal sehen, ob er sie zu genau berichtigt."
      }
    ],
    "suspects": [
      {
        "name": "Clara Winter",
        "role": "Viktors Cousine · Floristin",
        "detail": "Kümmerte sich um die Blumen des Festes."
      },
      {
        "name": "Jonas Berg",
        "role": "Viktors Assistent",
        "detail": "Half bei der Organisation und beim Empfang."
      },
      {
        "name": "Ben Falk",
        "role": "Viktors Geschäftspartner",
        "detail": "Verantwortete die Verkäufe der Kunstobjekte."
      }
    ],
    "ending": "Ben Falk tötete Viktor Winter, um die Aufdeckung seiner Doppelverkäufe zu verhindern. Seine Besuchsankündigung, das falsche Alibi und das an der Tatwaffe gefundene Stoffstück mit passender Risskante ergeben die Beweiskette. Deine gezielte falsche Angabe zum Fundort bringt Ben dazu, geheim gehaltene Details zu nennen. Sein anschließend überprüftes Geständnis bestätigt die Rekonstruktion. Clara und Jonas sind durch unabhängige Alibis entlastet. Du hast keine Gedanken gelesen, Maus – du hast genau hingesehen und deine Vermutungen geprüft.",
    "epilogue": "Du schließt die Fallakte, Maus. Dein Team nimmt Ben fest und sichert die Beweise für die weiteren Ermittlungen. Draußen hört der Regen auf. Dein Tee ist kalt geworden; du lächelst trotzdem. Für heute ist genug ermittelt. Zeit zum Einkuscheln. Bis zum nächsten Fall. ♡",
    "cover": "assets/szene-1.webp"
  },
  {
    "id": "letzte-vorstellung",
    "version": 2,
    "title": "Die letzte Vorstellung",
    "subtitle": "Ein vorbereiteter Todesfall. Deine Entscheidungen verändern die Ermittlung – und ihr Ende.",
    "tag": "Episode 02 · Theater Morgenstern",
    "duration": "Etwa 60–90 Minuten pro Durchlauf · mehrere Ermittlungswege",
    "description": "Maus untersucht eine tödliche Premiere. Sichere Spuren, führe Gespräche und wähle deinen Abschlussbericht. Verschiedene Ermittlungswege führen zu vier möglichen Enden.",
    "cover": "assets/theater-1.webp",
    "chapters": [
      {
        "title": "Applaus im Dunkeln",
        "icon": "🎭",
        "art": "assets/theater-1.webp",
        "artAlt": "Beleuchteter Eingang eines kleinen Theaters im abendlichen Regen.",
        "guide": "Ich sichere zuerst Beobachtungen. Die Ursache bleibt eine eigene Frage.",
        "steps": [
          {
            "title": "Applaus, dann Stille",
            "story": "Du sitzt als Gast bei der Premiere im kleinen Theater Morgenstern, Maus. Um 21:10 bricht auf der Seitenbühne ein schwerer Teil der Kulisse zusammen. Der Hauptdarsteller Adrian Voss stirbt an seinen Verletzungen. Du verständigst dein Team und lässt den Bereich sichern. Die Vorstellung wird abgebrochen. Eine später überprüfte Bühnenaufnahme zeigt: Adrian betrat die Seitenbühne kurz vor dem Zusammenbruch.",
            "question": "Was ist durch diese Aufnahme allein belegt?",
            "options": [
              "Adrians Anwesenheit auf der Seitenbühne kurz vor dem Zusammenbruch",
              "Wer die Kulisse manipuliert hat",
              "Dass die Manipulation erst um 21:10 erfolgte"
            ],
            "answer": 0,
            "hint": "Unterscheide den sichtbaren Vorfall von seiner möglichen Vorbereitung.",
            "reveal": "Die Aufnahme zeigt Ort und Ablauf des Vorfalls, aber nicht dessen Ursache. Du hältst beide Fragen getrennt.",
            "note": "Vorfall um 21:10 auf der Seitenbühne; Ursache zunächst offen.",
            "kind": "Beobachten",
            "type": "choice"
          },
          {
            "title": "Drei Menschen hinter dem Vorhang",
            "story": "Drei Personen hatten am frühen Abend Zugang zur später gesperrten Kulisse: Leona Brandt, die Regisseurin; Nils Kramer, der Bühnenmeister; und Mara Seidel, Adrians Zweitbesetzung. Nach dem Abbruch sitzen Leona am Regiepult, Nils bei der Technik und Mara in ihrer Garderobe.",
            "question": "Welche Information brauchst du für die Frage nach einer vorherigen Manipulation?",
            "options": [
              "Nur ihre Plätze um 21:10",
              "Ihre Aufenthaltsorte während des möglichen Manipulationszeitraums",
              "Nur ihre Berufe"
            ],
            "answer": 1,
            "hint": "Die Vorbereitung kann lange vor dem sichtbaren Vorfall liegen.",
            "reveal": "Du fragst nach dem frühen Abend. Ein Alibi während der Vorstellung beantwortet die Frage nach der Vorbereitung nicht.",
            "note": "Drei Personen hatten Zugang: Leona, Nils und Mara. Frühere Aufenthaltsorte müssen geprüft werden.",
            "kind": "Ermitteln",
            "type": "choice"
          },
          {
            "title": "Die Einsatzliste",
            "story": "Eine Bühnenaufnahme und die geprüfte Einsatzliste stimmen überein: Szene 26 endet um 21:08, Umbau 21:08–21:10, Szene 27 sollte um 21:10 beginnen. Der Zusammenbruch ist genau um 21:10 aufgezeichnet. Die Premiere begann um 20:30; die Pause war für 21:15 geplant. Die nachfolgenden Programmpunkte wurden nach dem Vorfall abgesagt.",
            "question": "Ordne diese Planzeiten von früh nach spät.",
            "options": [
              "Während Szene 26",
              "Erst nach dem Ende von Szene 27",
              "Zum vorgesehenen Beginn von Szene 27"
            ],
            "answer": 2,
            "hint": "Vergleiche die Uhrzeiten, nicht die Reihenfolge der Karten.",
            "reveal": "Die Planzeiten lauten: Premiere 20:30, Ende von Szene 26 um 21:08, vorgesehener Beginn von Szene 27 um 21:10, geplante Pause 21:15. Der Vorfall fällt auf den vorgesehenen Beginn von Szene 27; die Pause konnte anschließend nicht wie geplant stattfinden.",
            "note": "Zusammenbruch am Übergang zu Szene 27.",
            "kind": "Zeitablauf",
            "type": "order",
            "items": [
              "Beginn der Premiere · 20:30",
              "Ende von Szene 26 · 21:08",
              "Vorgesehener Beginn von Szene 27 · 21:10",
              "Geplante Pause · 21:15"
            ],
            "correct": [
              0,
              1,
              2,
              3
            ]
          },
          {
            "title": "Das Programm als Wegweiser",
            "story": "Adrian hat auf seinem Programmheft notiert: „Meine Merkhilfe: A=1, B=2 … Z=26.“ Daneben stehen 19–11–18–9–16–20. Das Heft wurde aus seiner Garderobe gesichert.",
            "question": "Welches Wort ergibt die Zahlenfolge?",
            "options": [
              "SKRIPT",
              "SZENEN",
              "SCHLAG"
            ],
            "answer": 0,
            "hint": "19 ist S, 11 ist K. Übersetze jede Zahl einzeln.",
            "reveal": "SKRIPT. Adrian wollte sich offenbar etwas zum Text der Produktion merken. Noch weißt du nicht, was.",
            "note": "Adrians Zahlenmerkzettel verweist auf das Skript.",
            "kind": "Entschlüsseln",
            "type": "input",
            "accepted": [
              "SKRIPT"
            ],
            "label": "Entschlüsseltes Wort",
            "normalize": "text"
          },
          {
            "title": "Wo beginnst du?",
            "story": "Dein Team sichert den abgesperrten Bereich grundsätzlich ab. Du kannst selbst zuerst die Kulisse untersuchen oder die frühen Unterlagen verfolgen. Beide Wege bleiben möglich, führen aber zu unterschiedlichen ersten Ermittlungsaufgaben.",
            "question": "Welchem Ansatz folgst du zuerst?",
            "options": [
              "Sie haben doch sicher nichts damit zu tun, oder?",
              "Welche Beobachtungen sprechen aus Ihrer Sicht für einen Unfall?",
              "Warum sehen Sie so schuldig aus?"
            ],
            "answer": 1,
            "hint": "Diese Entscheidung hat keine vorgegebene richtige Antwort. Ihr Verlauf wird in der Akte festgehalten.",
            "reveal": "Leona verweist auf den Zusammenbruch. Du erklärst, dass ein sichtbarer Vorfall seine Ursache noch nicht erklärt.",
            "note": "Leonas Unfallbehauptung nennt zunächst keine unabhängig geprüfte Ursache.",
            "kind": "Deine Entscheidung",
            "type": "decision",
            "decisionKey": "focus",
            "choices": [
              {
                "id": "scene",
                "label": "Zuerst die Kulisse und das Kontrollsiegel untersuchen",
                "reveal": "Du gehst mit der Technik auf die Seitenbühne. Dein nächster Schritt ist der Vergleich der Beobachtungen am Objekt.",
                "note": "Erster Ansatz: Untersuchung der Kulisse."
              },
              {
                "id": "documents",
                "label": "Zuerst Sicherheitsabnahme und Zusatzfreigabe vergleichen",
                "reveal": "Du beginnst mit den Dokumenten. Dein nächster Schritt ist die Zuordnung von Prüfaussagen und Quellen.",
                "note": "Erster Ansatz: Prüfung der Unterlagen."
              }
            ]
          }
        ]
      },
      {
        "title": "Der Eingriff vor der Premiere",
        "icon": "🔍",
        "art": "assets/theater-2.webp",
        "artAlt": "Leere Seitenbühne mit geborgenem Kulissenteil und gesichertem Bereich.",
        "guide": "Ich suche den Zeitpunkt der Vorbereitung, nicht nur den des Vorfalls.",
        "steps": [
          {
            "title": "Die Kulisse erzählt",
            "story": "Dein Team untersucht die geborgene Kulisse. Die technische Prüfung bestätigt eine gezielte Veränderung nach der Sicherheitsabnahme. Die Einzelheiten bleiben im Ermittlungsbericht; für deine Rekonstruktion zählt zunächst der Zeitpunkt. Niemand musste im Moment des Zusammenbruchs unmittelbar an der Kulisse stehen.",
            "question": "Wähle die zwei Aussagen, die mit dem Technikbefund vereinbar sind.",
            "options": [
              "Nur eine direkt daneben stehende Person kann verantwortlich sein",
              "Alle Personen mit einem Alibi um 21:10 sind automatisch entlastet",
              "Eine vorherige Manipulation ist mit einem späteren Alibi vereinbar"
            ],
            "answer": 2,
            "hint": "Vorbereitung und Wirkung können zeitlich auseinanderliegen.",
            "reveal": "Du behandelst den Vorfall als Verdacht auf eine vorbereitete Tötung. Entscheidend wird das Zeitfenster der Veränderung.",
            "note": "Technische Prüfung bestätigt gezielte Veränderung nach der Sicherheitsabnahme.",
            "kind": "Ermitteln",
            "type": "multi",
            "items": [
              "Der Eingriff kann vor dem sichtbaren Vorfall liegen.",
              "Ein späteres Alibi schließt den früheren Eingriff nicht aus.",
              "Eine Person musste um 21:10 direkt an der Kulisse stehen.",
              "Der Technikbefund nennt ohne weitere Quellen die Person."
            ],
            "correct": [
              0,
              1
            ],
            "variants": [
              {
                "when": {
                  "focus": "documents"
                },
                "patch": {
                  "type": "match",
                  "title": "Was steht in welcher Quelle?",
                  "story": "Du beginnst mit drei gesicherten Quellen: Die Bühnenaufnahme dokumentiert den Vorfall um 21:10. Nils’ Sicherheitsabnahme beschreibt den Zustand um 19:08. Der spätere Technikbericht bestätigt eine gezielte Veränderung nach dieser Abnahme. Niemand musste im Moment des Vorfalls direkt daneben stehen.",
                  "question": "Ordne die Aussage der Quelle zu, aus der sie hier stammt.",
                  "left": [
                    "Bühnenaufnahme",
                    "Sicherheitsabnahme",
                    "Späterer Technikbericht"
                  ],
                  "right": [
                    "Vorfall auf der Seitenbühne um 21:10.",
                    "Geprüfter Zustand um 19:08.",
                    "Gezielte Veränderung nach der Abnahme."
                  ],
                  "correct": [
                    0,
                    1,
                    2
                  ],
                  "reveal": "Die Quellen beantworten unterschiedliche Fragen: Vorfall, früherer Zustand und spätere technische Ursache. Deine nächste Prüfung gilt dem Zeitfenster des Eingriffs."
                }
              }
            ]
          },
          {
            "title": "Zwei Bilder, ein Zeitfenster",
            "story": "Eine fest montierte Dokumentationskamera fotografiert die Kulisse regelmäßig. Das geprüfte Foto um 19:12 zeigt das Kontrollsiegel noch unbeschädigt. Um 19:18 ist es beschädigt. Die technische Untersuchung bestätigt: Die relevante Veränderung erforderte das Öffnen dieses versiegelten Bereichs. Der Materialbefund schließt ein früheres Öffnen mit anschließendem unbemerktem Wiederverschließen des Kontrollsiegels aus.",
            "question": "Welches Zeitfenster folgt daraus für das Öffnen?",
            "options": [
              "Nach 19:12 und spätestens bis 19:18",
              "Sicher exakt um 19:15",
              "Erst zwischen 21:08 und 21:10"
            ],
            "answer": 0,
            "hint": "Die Bilder begrenzen die Veränderung, nennen aber keine genaue Minute.",
            "reveal": "Das Siegel wurde nach dem ersten und bis zum zweiten Foto geöffnet. Du prüfst jetzt genau dieses Fenster.",
            "note": "Vorbereitung eingegrenzt: nach 19:12 bis spätestens 19:18.",
            "kind": "Zeitfenster",
            "type": "input",
            "accepted": [
              "19:12-19:18",
              "nach19:12bisspaetestens19:18"
            ],
            "label": "Zeitfenster, z. B. 18:00–18:10",
            "normalize": "interval"
          },
          {
            "title": "Die einzige Tür",
            "story": "Der Bühnenplan und die gesicherten Zugangsaufnahmen zeigen: Garderobenflur ↔ Seitenbühne; Seitenbühne ↔ Hauptbühne. Der direkte Außenzugang zur Seitenbühne war von 19:00 bis 19:30 versiegelt. Die Hauptbühne war in dieser Zeit durchgehend gefilmt; niemand ging von dort zur Seitenbühne. Der Garderobenausgang führt zunächst in den Garderobenflur; die Kulisse steht hinter der Seitenbühnentür.",
            "question": "Lege den belegten Weg vom Garderobenausgang zur Kulisse in die richtige Reihenfolge.",
            "options": [
              "Über den versiegelten Außenzugang",
              "Über den Garderobenflur zur Seitenbühne",
              "Unbemerkt über die vollständig gefilmte Hauptbühne"
            ],
            "answer": 1,
            "hint": "Prüfe, welche beiden Alternativen die Angaben ausschließen.",
            "reveal": "Der Weg führt vom Garderobenausgang in den Garderobenflur, durch die Seitenbühnentür und zur dort stehenden Kulisse. Der Weg nennt noch keine handelnde Person.",
            "note": "Für das Vorbereitungsfenster bleibt der Zugang über den Garderobenflur.",
            "kind": "Weg rekonstruieren",
            "type": "order",
            "items": [
              "Garderobenausgang",
              "Garderobenflur",
              "Seitenbühnentür",
              "Kulisse auf der Seitenbühne"
            ],
            "correct": [
              0,
              1,
              2,
              3
            ]
          },
          {
            "title": "Die fremde Freigabe",
            "story": "Nils’ unterschriebene Sicherheitsabnahme von 19:08 meldet einen geprüften Zustand. Später wurde eine weitere Karte in die Wartungsmappe gelegt: „Zusatzprüfung freigegeben“. Sie trägt keinen Namen und keine prüfbare Unterschrift.",
            "question": "Welche zwei Angaben sind in der Fallakte tatsächlich belegt? Wähle beide.",
            "options": [
              "Dass Nils sie unterschrieben hat",
              "Dass die Kulisse nachweislich erneut sicher war",
              "Dass eine Freigabe behauptet wurde, nicht wer sie erteilte"
            ],
            "answer": 2,
            "hint": "Ein aufgedruckter Satz ersetzt weder Urheberschaft noch eine dokumentierte Prüfung.",
            "reveal": "Die Karte kann ein Versuch sein, einen Eingriff als Wartung erscheinen zu lassen. Du lässt Papier und Herkunft prüfen.",
            "note": "Namenlose Zusatzfreigabe hat zunächst keine gesicherte Urheberschaft.",
            "kind": "Dokument prüfen",
            "type": "multi",
            "items": [
              "Nils unterschrieb die Sicherheitsabnahme um 19:08.",
              "Die Zusatzkarte enthält keinen prüfbaren Namen.",
              "Nils unterschrieb auch die Zusatzkarte.",
              "Die namenlose Karte beweist eine erneute Sicherheitsprüfung."
            ],
            "correct": [
              0,
              1
            ]
          },
          {
            "title": "Ein Siegel ist keine Uhr",
            "story": "Ein beschädigtes Siegel liegt im Beutel. Die Technik sagt: „Das Öffnen ist damit dokumentiert.“ Ein Mitarbeiter ergänzt: „Dann kennen wir ja die genaue Tatminute.“",
            "question": "Welche zwei Quellen erfüllen hier unterschiedliche Aufgaben? Wähle beide passenden Aussagen.",
            "options": [
              "Das Siegel belegt einen Eingriff; die Fotos begrenzen dessen Zeitfenster",
              "Das Siegel allein datiert den Eingriff auf 19:15",
              "Das beschädigte Siegel beweist allein die Täterschaft"
            ],
            "answer": 0,
            "hint": "Trenne den Materialbefund von der Zeitinformation aus den Fotos.",
            "reveal": "Erst zusammen ergeben Materialprüfung und Fotos einen zeitlich eingegrenzten Eingriff.",
            "note": "Siegelbefund und Fotozeiten sind verschiedene Teile der Rekonstruktion.",
            "kind": "Beweise ordnen",
            "type": "multi",
            "items": [
              "Das beschädigte Siegel belegt das Öffnen.",
              "Die abgeglichenen Fotos grenzen das Zeitfenster ein.",
              "Das Siegel allein nennt die genaue Minute.",
              "Die Fotos identifizieren ohne weitere Angaben die handelnde Person."
            ],
            "correct": [
              0,
              1
            ]
          }
        ]
      },
      {
        "title": "Alibis hinter dem Vorhang",
        "icon": "🗣️",
        "art": "assets/theater-3.webp",
        "artAlt": "Technische Prüfberichte, Kontrollsiegel und Bühnenplan am Schreibtisch.",
        "guide": "Ein passendes Alibi braucht eine unabhängige Quelle.",
        "steps": [
          {
            "title": "Mara vor laufender Kamera",
            "story": "Mara behauptet, sie habe von 19:10 bis 19:20 im Probenraum an einer Choreografie gearbeitet. Die vollständige Aufnahme zeigt sie durchgehend dort; die Kamera war mit der Referenzuhr synchronisiert.",
            "question": "Wie viele Minuten zeigt die vollständige Aufnahme Mara ohne Unterbrechung im Probenraum?",
            "options": [
              "Nur den Anfang",
              "Ja, vollständig",
              "Nein, es betrifft nur die Aufführung"
            ],
            "answer": 1,
            "hint": "Ziehe die Anfangszeit von der Endzeit ab.",
            "reveal": "Von 19:10 bis 19:20 sind es zehn Minuten. Das deckt auch das gesamte Vorbereitungsfenster nach 19:12 bis 19:18 ab.",
            "note": "Mara durchgehend 19:10–19:20 im Probenraum.",
            "kind": "Alibi prüfen",
            "type": "input",
            "accepted": [
              "10"
            ],
            "label": "Minuten",
            "normalize": "number"
          },
          {
            "title": "Nils’ scheinbare Lücke",
            "story": "Nils sagt zunächst: „Ich war ab 19:15 am Lieferhof.“ Zwei Mitarbeiter bestätigen ihn ununterbrochen von 19:15 bis 19:20. Über die Minuten davor weißt du bisher nichts Sicheres.",
            "question": "Welcher Teil des Vorbereitungsfensters bleibt dadurch zunächst offen?",
            "options": [
              "19:15 bis 19:18",
              "Erst ab 19:20",
              "Nach 19:12 bis 19:15"
            ],
            "answer": 2,
            "hint": "Sein bestätigtes Intervall beginnt später als das Vorbereitungsfenster.",
            "reveal": "Du markierst die frühe Lücke und fragst nach einer weiteren unabhängigen Quelle.",
            "note": "Nils zunächst erst ab 19:15 am Lieferhof bestätigt.",
            "kind": "Zeitfenster",
            "type": "input",
            "accepted": [
              "19:12-19:15",
              "nach19:12bis19:15"
            ],
            "label": "Noch offenes Zeitfenster",
            "normalize": "interval"
          },
          {
            "title": "Die vollständige Lieferung",
            "story": "Der Betreiber des Lieferhofs gibt die vollständige, mit der Referenzuhr abgeglichene Aufnahme heraus. Sie zeigt Nils durchgehend von 19:11 bis 19:20 beim Entladen. Vom Lieferhof zur Seitenbühne führt kein unbeobachteter direkter Zugang.",
            "question": "Welche zwei Aussagen erlaubt die neue Aufnahme? Wähle beide.",
            "options": [
              "Sie schließt Nils’ bislang offene frühe Alibilücke",
              "Sie beweist, dass Nils um 21:10 im Zuschauerraum war",
              "Sie zeigt, wer das Siegel beschädigt hat"
            ],
            "answer": 0,
            "hint": "Die neue Quelle betrifft dieselbe Person und einen längeren Zeitraum.",
            "reveal": "Nils ist während des ganzen Vorbereitungsfensters am Lieferhof. Die anfänglich ungenaue Erinnerung wird durch die Aufnahme ergänzt.",
            "note": "Nils durchgehend 19:11–19:20 am Lieferhof; frühe Lücke geschlossen.",
            "kind": "Quellen vergleichen",
            "type": "multi",
            "items": [
              "Nils ist auch im bislang offenen frühen Abschnitt am Lieferhof zu sehen.",
              "Die durchgehende Aufnahme deckt das Vorbereitungsfenster vollständig ab.",
              "Die Aufnahme zeigt den Eingriff auf der Seitenbühne.",
              "Nils ist dadurch als Autor der Zusatzfreigabe bewiesen."
            ],
            "correct": [
              0,
              1
            ]
          },
          {
            "title": "Zwei Erzählungen, ein Telefonat",
            "story": "Zwei Gäste erzählen, Leona sei um 19:14 im Archiv gewesen. Beide geben auf Nachfrage an, diese Information aus demselben Telefonat mit Leona zu haben. Keiner hat sie dort gesehen.",
            "question": "Wie viele unabhängige Sichtbeobachtungen belegen hier ihre Anwesenheit im Archiv?",
            "options": [
              "Eine",
              "Keine",
              "Zwei"
            ],
            "answer": 1,
            "hint": "Beide Gäste hörten dieselbe Behauptung, statt Leona im Archiv zu sehen.",
            "reveal": "Beide Gäste wiederholen dieselbe Quelle: Leona selbst. Das behauptete Archiv-Alibi muss unabhängig geprüft werden.",
            "note": "Leonas Archiv-Alibi beruht bisher allein auf ihrer eigenen Aussage.",
            "kind": "Zeugen prüfen",
            "type": "input",
            "accepted": [
              "0"
            ],
            "label": "Anzahl unabhängiger Sichtbeobachtungen",
            "normalize": "number"
          },
          {
            "title": "Wie gewinnst du eine Aussage?",
            "story": "Mara ist erschöpft. Ihre Videoaufnahme ist gesichert, doch sie erinnert sich auch an Leonas Verhalten bei der Uhr am Regiepult. Du entscheidest, wie du das Gespräch führst.",
            "question": "Wie gehst du vor?",
            "options": [
              "Allein Nils’ technische Kenntnisse",
              "Allein Maras Zweitbesetzung",
              "Die unabhängig dokumentierten Aufenthaltsorte im Vorbereitungsfenster"
            ],
            "answer": 2,
            "hint": "Diese Entscheidung hat keine vorgegebene richtige Antwort. Ihr Verlauf wird in der Akte festgehalten.",
            "reveal": "Du hältst Nils’ und Maras Entlastung fest. Leona bleibt zu prüfen; damit ist sie noch nicht überführt.",
            "note": "Beruf und möglicher Vorteil ersetzen keine Prüfung der Gelegenheit.",
            "kind": "Deine Entscheidung",
            "type": "decision",
            "decisionKey": "interview",
            "choices": [
              {
                "id": "listen",
                "label": "Zeit geben und offen nach ihrer Erinnerung fragen",
                "reveal": "Mara fasst Vertrauen. Sie beschreibt das Kontrollfoto und erklärt, welche Uhr im Bild zu sehen ist. Du prüfst ihre Erinnerung an der gesicherten Aufnahme.",
                "note": "Mara wurde ruhig und offen befragt."
              },
              {
                "id": "pressure",
                "label": "Sofort mit dem Rollenwechsel konfrontieren und Druck machen",
                "reveal": "Mara beendet das freiwillige Gespräch. Ihre gesicherte Aufnahme bleibt verfügbar; die Uhrkorrektur musst du aus den Prüfprotokollen selbst rekonstruieren.",
                "note": "Druck im Gespräch: Mara beendet ihre freiwillige Mitarbeit."
              }
            ]
          }
        ]
      },
      {
        "title": "Vier Minuten zu viel",
        "icon": "🕰️",
        "art": "assets/theater-4.webp",
        "artAlt": "Garderobe mit Spiegellichtern, leeren Stühlen und Probenunterlagen.",
        "guide": "Ich gleiche Uhren ab, bevor ich Aussagen gegeneinander halte.",
        "steps": [
          {
            "title": "Vier Minuten zu viel",
            "story": "Ein Kontrollfoto zeigt die Anzeige des Regieterminals auf 19:20, während die Referenzuhr 19:16 zeigt. Die Prüfung bestätigt: Nur dieses Terminal ging am Abend konstant vier Minuten vor.",
            "question": "Welche tatsächliche Uhrzeit entspricht Terminalzeit 19:17?",
            "options": [
              "19:13",
              "19:21",
              "19:17"
            ],
            "answer": 0,
            "hint": "Die Anzeige ist zu weit voraus. Ziehe vier Minuten ab.",
            "reveal": "19:17 auf dem Terminal entspricht 19:13 auf der Referenzuhr. Alle bisherigen Foto- und Videozeiten sind bereits Referenzzeiten.",
            "note": "Regieterminal vier Minuten voraus; 19:17 entspricht tatsächlich 19:13.",
            "kind": "Zeit korrigieren",
            "type": "input",
            "accepted": [
              "19:13"
            ],
            "label": "Tatsächliche Uhrzeit",
            "normalize": "time",
            "variants": [
              {
                "when": {
                  "interview": "pressure"
                },
                "patch": {
                  "type": "order",
                  "title": "Die Korrektur aus dem Protokoll",
                  "story": "Mara hat das freiwillige Gespräch beendet. Du arbeitest mit dem gesicherten Prüfprotokoll weiter: Auf dem Kontrollfoto zeigt das Regieterminal 19:20 und die Referenzuhr 19:16. Der Bericht bestätigt einen konstanten Vorsprung von vier Minuten. Alle bisherigen Foto- und Videozeiten sind Referenzzeiten.",
                  "question": "Ordne die notwendigen Prüfschritte für Terminalzeit 19:17.",
                  "items": [
                    "Anzeige und Referenz auf demselben Kontrollfoto vergleichen.",
                    "Den konstanten Vorsprung von vier Minuten feststellen.",
                    "Von Terminalzeit 19:17 vier Minuten abziehen.",
                    "19:13 als Referenzzeit in der Akte notieren."
                  ],
                  "correct": [
                    0,
                    1,
                    2,
                    3
                  ],
                  "hint": "Erst prüfen, dann die bestätigte Differenz anwenden.",
                  "reveal": "19:17 entspricht tatsächlich 19:13. Du hast die Korrektur ohne Maras zusätzliche Aussage anhand des Prüfprotokolls rekonstruiert."
                }
              }
            ]
          },
          {
            "title": "Der Zugang mit D4",
            "story": "Das Terminal protokolliert um angezeigte 19:17 die Verwendung des Zugangsausweises D4 an der Tür zur Seitenbühne. Die Ausgabeliste ordnet D4 Leona zu. Ein Ausweis kann jedoch weitergegeben werden. Die geprüfte Ausgabeliste nennt außerdem T2 für Nils und A8 für Mara.",
            "question": "Ordne jeden ausgegebenen Ausweis seiner Person zu. Das ordnet die Ausweise zu, beweist aber noch nicht jede Nutzung.",
            "options": [
              "Leona selbst ist dadurch zweifelsfrei als Nutzerin identifiziert",
              "Leonas ausgegebener Ausweis wurde tatsächlich um 19:13 verwendet",
              "Der Zugang lag sicher außerhalb des Vorbereitungsfensters"
            ],
            "answer": 1,
            "hint": "Korrigiere die Zeit und unterscheide Ausweis und Person.",
            "reveal": "D4 wurde um 19:13 benutzt – innerhalb des Fensters. Wer ihn trug, muss durch weitere Quellen geprüft werden.",
            "note": "Ausweis D4, Leona zugeordnet, um tatsächliche 19:13 verwendet.",
            "kind": "Zugang prüfen",
            "type": "match",
            "left": [
              "D4",
              "T2",
              "A8"
            ],
            "right": [
              "Leona Brandt",
              "Nils Kramer",
              "Mara Seidel"
            ],
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "title": "Das Bild im Türspiegel",
            "story": "Eine Kamera im Garderobenflur zeigt um Referenzzeit 19:13 Leonas Gesicht und den Ausweis D4, als sie die Seitenbühnentür öffnet. Ihr Eintritt ist sichtbar; im Flur wird sie erst um 19:17 wieder aufgenommen.",
            "question": "Was zeigt die Fluraufnahme? Wähle genau die zwei belegten Aussagen.",
            "options": [
              "Die Aufnahme zeigt den genauen Handgriff an der Kulisse",
              "Leona hat die Kulisse nachweislich repariert",
              "Leona selbst benutzte den Ausweis beim Eintritt"
            ],
            "answer": 2,
            "hint": "Die Kamera identifiziert die eintretende Person, zeigt aber nicht den Innenraum.",
            "reveal": "Leona ist als Nutzerin des Ausweises identifiziert. Die Innenraumhandlung bleibt durch diese Aufnahme offen.",
            "note": "Leona betritt die Seitenbühne um 19:13 und erscheint um 19:17 wieder im Flur.",
            "kind": "Beobachten",
            "type": "multi",
            "items": [
              "Leona selbst öffnet um 19:13 die Seitenbühnentür.",
              "Leona wird um 19:17 wieder im Flur aufgenommen.",
              "Die Kamera zeigt den Eingriff an der Kulisse.",
              "Die Aufnahme beweist eine Reparatur."
            ],
            "correct": [
              0,
              1
            ]
          },
          {
            "title": "Kann das Archiv passen?",
            "story": "Leona behauptet, sie habe von 19:12 bis 19:18 ununterbrochen im Archiv gelesen. Das Archiv liegt in einem anderen Stockwerk. Die Aufnahme ihres Eintritts auf die Seitenbühne um 19:13 ist abgeglichen und eindeutig.",
            "question": "Welche konkrete Behauptung ist widerlegt?",
            "options": [
              "Ihr ununterbrochener Aufenthalt im Archiv von 19:12 bis 19:18",
              "Dass sie jemals im Archiv war",
              "Dass sie Regisseurin ist"
            ],
            "answer": 0,
            "hint": "Widerlege genau die Aussage, die der Aufnahme widerspricht.",
            "reveal": "Der behauptete durchgehende Archivaufenthalt stimmt nicht. Das erklärt noch nicht, was sie auf der Seitenbühne tat.",
            "note": "Leonas behauptetes durchgehendes Archiv-Alibi ist widerlegt.",
            "kind": "Widerspruch prüfen",
            "type": "choice"
          },
          {
            "title": "Wann fiel die Kulisse?",
            "story": "Im Regieterminal steht der Vorfall bei angezeigten 21:14. Die Bühnenaufnahme datiert ihn auf Referenzzeit 21:10. Dasselbe Terminal ging konstant vier Minuten vor.",
            "question": "Welche Referenzzeit ergibt sich aus dem Terminaleintrag 21:14?",
            "options": [
              "Nein: Die Angaben liegen acht Minuten auseinander",
              "Ja: 21:14 minus vier Minuten ergibt 21:10",
              "Ja, aber nur wenn die Bühnenkamera ebenfalls vorgeht"
            ],
            "answer": 1,
            "hint": "Wende dieselbe bestätigte Korrektur wie bei 19:17 an.",
            "reveal": "Die Angaben beschreiben denselben Zeitpunkt. Es gibt keinen zweiten Zusammenbruch.",
            "note": "Terminaleintrag 21:14 und Bühnenaufnahme 21:10 stimmen nach Korrektur überein.",
            "kind": "Zeit korrigieren",
            "type": "input",
            "accepted": [
              "21:10"
            ],
            "label": "Vorfallzeit nach Korrektur",
            "normalize": "time"
          }
        ]
      },
      {
        "title": "Das verschwundene Manuskript",
        "icon": "📜",
        "art": "assets/theater-5.webp",
        "artAlt": "Regiepult mit Einsatzunterlagen, Uhr und farbig markiertem Skript.",
        "guide": "Ein Konflikt kann ein Motiv liefern. Er ersetzt keinen Tatnachweis.",
        "steps": [
          {
            "title": "Der Schlüssel zum Text",
            "story": "Adrians Merkzettel nennt einen Dokumentenkasten im Archiv: „Drei Ziffern. Die erste ist um zwei größer als die zweite. Die dritte ist doppelt so groß wie die zweite. Die Summe ist 14.“",
            "question": "Welcher Code erfüllt alle Bedingungen?",
            "options": [
              "635",
              "524",
              "536"
            ],
            "answer": 2,
            "hint": "Prüfe Unterschied, Verdopplung und Summe getrennt.",
            "reveal": "536: 5=3+2, 6=2×3 und 5+3+6=14. Im Kasten liegen ältere Manuskriptfassungen.",
            "note": "Dokumentenkasten mit Code 536 geöffnet.",
            "kind": "Kombinieren",
            "type": "input",
            "accepted": [
              "536"
            ],
            "label": "Dreistelliger Code",
            "normalize": "code"
          },
          {
            "title": "Zwei Fassungen derselben Szene",
            "story": "Das aufgeführte Stück trägt Leona als alleinige Autorin. Im Kasten liegt ein älteres Manuskript von Emil Hartmann. Eine Passage umfasst in beiden Fassungen dieselben zwölf ungewöhnlichen Sätze, einschließlich derselben absichtlichen Wortverdrehung.",
            "question": "Welche zwei Einordnungen sind durch den beschriebenen Vergleich gerechtfertigt?",
            "options": [
              "Eine auffällige textliche Übereinstimmung zwischen den Fassungen",
              "Dass Leona deshalb automatisch den Tod verursacht hat",
              "Dass die gesamte Produktion bereits gerichtlich beurteilt wurde"
            ],
            "answer": 0,
            "hint": "Textvergleich und Tötungsnachweis sind verschiedene Fragen.",
            "reveal": "Die Übereinstimmung ist ein Ansatz für die Prüfung der Herkunft und Rechte. Für sich allein beweist sie noch nicht jede Form der Nutzung oder deren Rechtmäßigkeit.",
            "note": "Älteres Hartmann-Manuskript und Aufführungstext enthalten dieselbe ungewöhnliche Passage.",
            "kind": "Dokumentvergleich",
            "type": "multi",
            "items": [
              "Die ungewöhnliche Passage stimmt in beiden Fassungen überein.",
              "Die Rechte an der Nutzung müssen anhand weiterer Unterlagen geprüft werden.",
              "Der Vergleich allein beweist die Manipulation der Kulisse.",
              "Gleiche Sätze erlauben automatisch jede Art der Nutzung."
            ],
            "correct": [
              0,
              1
            ]
          },
          {
            "title": "Die fehlenden Seiten",
            "story": "Das Inventar des Dokumentenkastens nennt die Seiten 1 bis 24. Vorhanden sind 1 bis 16 und 19 bis 24. Eine frühere vollständige Kopie zeigt auf den fehlenden Seiten die Korrespondenz über Nutzungsrechte.",
            "question": "Welche beiden Seiten fehlen?",
            "options": [
              "16 und 17",
              "17 und 18",
              "18 und 19"
            ],
            "answer": 1,
            "hint": "Die Lücke liegt zwischen den vorhandenen Seiten 16 und 19.",
            "reveal": "17 und 18. Die Kopie bewahrt die fehlende Korrespondenz; du sicherst beide Quellen.",
            "note": "Archivseiten 17 und 18 fehlen; vollständige frühere Kopie vorhanden.",
            "kind": "Dokumentvergleich",
            "type": "input",
            "accepted": [
              "17,18"
            ],
            "label": "Fehlende Seiten, z. B. 5, 6",
            "normalize": "set"
          },
          {
            "title": "Eine Unterschrift, zwei Rollen",
            "story": "Die vollständige Kopie enthält einen Brief von Emil Hartmann: Er lehnt die Nutzung ohne Nennung seines Namens ausdrücklich ab. Leona antwortet unterschrieben, sie werde die Premiere ohne seinen Text gestalten. Die geprüfte Endfassung enthält dennoch die verglichene Passage und nennt nur Leona. Die gesicherten Schreiben sind datiert: Leonas Anfrage am 20. August, Hartmanns Ablehnung am 2. September, Leonas Antwort am 4. September. Die Premiere fand im Oktober statt.",
            "question": "Ordne die dokumentierte Korrespondenz und die Premiere zeitlich.",
            "options": [
              "Dass Adrian die Hauptrolle spielt",
              "Dass Nils die Sicherheitsabnahme unterschrieben hat",
              "Leonas Zusicherung, die Premiere ohne Hartmanns Text zu gestalten"
            ],
            "answer": 2,
            "hint": "Erst die Anfrage, dann die Ablehnung, dann Leonas Zusicherung und zuletzt die tatsächlich aufgeführte Fassung.",
            "reveal": "Die Folge lautet: Anfrage am 20. August, Ablehnung am 2. September, Zusicherung am 4. September, Premiere im Oktober. Der verwendete Text widerspricht Leonas Zusicherung. Weitere Nutzungsrechte werden separat geprüft.",
            "note": "Leonas unterschriebene Zusicherung widerspricht der verwendeten Hartmann-Passage.",
            "kind": "Aussagen prüfen",
            "type": "order",
            "items": [
              "Leona fragt am 20. August nach der Nutzung.",
              "Hartmann lehnt am 2. September die Nutzung ohne Namensnennung ab.",
              "Leona sagt am 4. September eine Premiere ohne seinen Text zu.",
              "Die Oktoberpremiere enthält dennoch die verglichene Passage."
            ],
            "correct": [
              0,
              1,
              2,
              3
            ]
          },
          {
            "title": "Die Kopie und das Original",
            "story": "Adrians authentischer Nachrichtenverlauf zeigt: Er kündigte Leona um 18:50 eine Klärung der Textrechte in der Pause um 21:15 an. Die vollständige frühere Archivkopie ist bereits gesichert. Jetzt kommt die Theaterleitung und möchte im Archiv aufräumen. Du musst den Umgang mit den Originalseiten festlegen.",
            "question": "Wie gehst du mit den Archivoriginalen um?",
            "options": [
              "Leona kannte Adrians angekündigte Klärung und den Zeitdruck bis zur Pause",
              "Adrian hatte damit auf seine Rolle verzichtet, bevor die Premiere begann",
              "Mara hatte Adrian die Nachricht geschrieben"
            ],
            "answer": 0,
            "hint": "Diese Entscheidung hat keine vorgegebene richtige Antwort. Ihr Verlauf wird in der Akte festgehalten.",
            "reveal": "Leona wusste, dass der Konflikt noch an diesem Abend vor die Theaterleitung kommen sollte. Das liefert ein mögliches Motiv, keinen alleinigen Tatbeweis.",
            "note": "Leona wusste seit 18:50 von Adrians angekündigter Klärung in der Pause um 21:15.",
            "kind": "Deine Entscheidung",
            "type": "decision",
            "decisionKey": "archive",
            "choices": [
              {
                "id": "seal",
                "label": "Originalseiten sichern und den Bereich bis zur Dokumentation sperren",
                "reveal": "Die Originale werden beschriftet und gesichert. Die vollständige Kopie lässt sich später direkt mit ihnen abgleichen.",
                "note": "Archivoriginale dokumentiert und gesichert; Kopie separat erhalten."
              },
              {
                "id": "copy",
                "label": "Nur die vorhandene Kopie mitnehmen und den Raum zur Räumung freigeben",
                "reveal": "Die Kopie bleibt erhalten. Bei der anschließenden Räumung werden die Originalseiten jedoch vermischt; später sind einzelne Blätter nicht mehr auffindbar. Der ursprüngliche Zusammenhang lässt sich nicht mehr vollständig am Original prüfen.",
                "note": "Kopie erhalten; Teile des Archivoriginals bei freigegebener Räumung verloren."
              }
            ]
          }
        ]
      },
      {
        "title": "Die neue Warteposition",
        "icon": "🚪",
        "art": "assets/theater-6.webp",
        "artAlt": "Archiv mit älteren Manuskripten und geöffnetem Dokumentenkasten.",
        "guide": "Eine kleine Änderung im Ablauf kann eine große Wirkung haben.",
        "steps": [
          {
            "title": "Die neue Warteposition",
            "story": "Adrians regulärer Ablaufplan nennt für den Umbau vor Szene 27 die sichere Warteposition K. In seiner Tasche liegt eine handschriftliche Änderungsanweisung: Position M direkt neben der später zusammengebrochenen Kulisse. Sie wurde ihm laut Botin um 19:25 in einem geschlossenen Umschlag übergeben. Der Wortlaut lautet: Zwischen dem zweiten und dritten Glockenschlag nach M wechseln und dort auf Szene 27 warten.",
            "question": "Welche Warteposition nennt die Änderungsanweisung statt K?",
            "options": [
              "Warum stehen im Zuschauerraum rote Sitze?",
              "Wer veranlasste den Wechsel von K zu M und weshalb?",
              "Wer kaufte das letzte Programmheft?"
            ],
            "answer": 1,
            "hint": "Der Wechsel betrifft den Ort, an dem Adrian auf seinen Einsatz wartete.",
            "reveal": "Die Anweisung erklärt, warum Adrian sich dort aufhielt. Ihre Urheberschaft und ihr Zusammenhang mit der Manipulation bleiben zu prüfen.",
            "note": "Änderungsanweisung verlegt Adrians Warteposition von K nach M.",
            "kind": "Ermitteln",
            "type": "input",
            "accepted": [
              "M"
            ],
            "label": "Neue Warteposition",
            "normalize": "text",
            "variants": [
              {
                "when": {
                  "archive": "copy"
                },
                "patch": {
                  "type": "multi",
                  "title": "Was bleibt nach der Räumung?",
                  "story": "Die vollständige frühere Archivkopie ist gesichert; einzelne Originalseiten sind nach der freigegebenen Räumung nicht mehr auffindbar. Adrians Änderungsanweisung aus seiner Tasche ist davon nicht betroffen: Sie liegt weiterhin gesichert vor und nennt Warteposition M statt K.",
                  "question": "Welche zwei Unterlagen kannst du auf diesem Weg noch direkt nutzen?",
                  "items": [
                    "Die gesicherte vollständige frühere Archivkopie",
                    "Adrians gesicherte Änderungsanweisung",
                    "Jede verschwundene Archivoriginalseite",
                    "Eine vollständige nachträgliche Originalprüfung ohne die Blätter"
                  ],
                  "correct": [
                    0,
                    1
                  ],
                  "hint": "Unterscheide verlorene Archivseiten von getrennt gesicherten Unterlagen.",
                  "reveal": "Kopie und Änderungsanweisung bleiben verfügbar. Die räumlich getrennt gesicherte Anweisung erklärt den Wechsel nach M; der spätere Abgleich mit allen Archivoriginalen ist eingeschränkt.",
                  "note": "Nach der Räumung bleiben Archivkopie und Adrians gesicherte Anweisung nutzbar; Originalabgleich eingeschränkt."
                }
              }
            ]
          },
          {
            "title": "Der Plan der Wege",
            "story": "Im Bühnenplan liegen K und M in verschiedenen Bereichen. Der Weg vom Ausgang der Garderobe nach K dauert mindestens 50 Sekunden; nach M mindestens 20 Sekunden. Die Botin beobachtete Adrian um 21:09:30 an diesem Ausgang. Der Vorfall geschah um 21:10.",
            "question": "Wie viele Sekunden verbleiben zwischen 21:09:30 und dem Vorfall um 21:10?",
            "options": [
              "Beide Positionen",
              "K, aber nicht M",
              "M, aber nicht K"
            ],
            "answer": 2,
            "hint": "Von einer halben Minute bis zur nächsten vollen Minute bleiben 30 Sekunden.",
            "reveal": "Es bleiben 30 Sekunden. Das reicht für den 20-Sekunden-Weg nach M, aber nicht für den mindestens 50-Sekunden-Weg nach K. Die Bühnenaufnahme bestätigt Adrians Ankunft bei M.",
            "note": "Von 21:09:30 bis 21:10 reicht die Wegzeit für M, nicht für K.",
            "kind": "Wegzeiten",
            "type": "input",
            "accepted": [
              "30"
            ],
            "label": "Verbleibende Sekunden",
            "normalize": "number"
          },
          {
            "title": "Keine normale Textänderung",
            "story": "Die Änderungsanweisung nennt nur Adrians Warteposition vor Szene 27. Andere Rollen, Dialoge und Einsätze bleiben gleich. Auf dem regulären Plan steht keine entsprechende Änderung.",
            "question": "Welche zwei Merkmale der Änderungsanweisung sind hier belegt?",
            "options": [
              "Eine gezielte Verlegung von Adrians Warteposition",
              "Eine vollständige Neufassung des Stücks",
              "Ein nachgewiesener Ausfall aller Bühnenuhren"
            ],
            "answer": 0,
            "hint": "Bleibe bei dem, was die Anweisung tatsächlich verändert.",
            "reveal": "Nur Adrian wird an eine andere Position geschickt. Die ungewöhnliche Einzeländerung muss erklärt werden.",
            "note": "Die Anweisung betrifft gezielt Adrian, nicht den ganzen Bühnenablauf.",
            "kind": "Muster erkennen",
            "type": "multi",
            "items": [
              "Sie betrifft Adrians Warteposition vor Szene 27.",
              "Andere Rollen und Dialoge bleiben unverändert.",
              "Sie ändert alle Einsätze des Ensembles.",
              "Sie belegt einen Ausfall aller Bühnenuhren."
            ],
            "correct": [
              0,
              1
            ]
          },
          {
            "title": "Die Botin erinnert sich",
            "story": "Die Botin berichtet: „Leona gab mir den verschlossenen Umschlag um 19:25 und sagte, ich solle ihn Adrian persönlich bringen.“ Eine Flurkamera zeigt die Übergabe des Umschlags von Leona an die Botin. Sie zeigt nicht dessen Inhalt. Die Maskenbildnerin bestätigt, dass Adrian den noch geschlossenen Umschlag erhielt und erst anschließend in ihrer Gegenwart öffnete.",
            "question": "Ordne den dokumentierten Transport des Umschlags.",
            "options": [
              "Dass die Kamera den vollständigen Anweisungstext zeigt",
              "Die Übergabe durch Leona und den von der Botin berichteten Auftrag",
              "Dass die Botin die Kulisse manipuliert hat"
            ],
            "answer": 1,
            "hint": "Die Aufnahme bestätigt die Übergabe; der mündliche Auftrag bleibt eine Zeugenaussage.",
            "reveal": "Leona übergibt den Umschlag an die Botin. Die Botin bringt ihn zu Adrian. Er erhält ihn noch geschlossen und öffnet ihn anschließend in Gegenwart der Maskenbildnerin. Aufnahme und Aussagen müssen dabei als unterschiedliche Quellen kenntlich bleiben.",
            "note": "Leona übergab um 19:25 den Umschlag; die Botin berichtet einen persönlichen Zustellauftrag an Adrian.",
            "kind": "Quellen abgleichen",
            "type": "order",
            "items": [
              "Leona übergibt den Umschlag um 19:25.",
              "Die Botin bringt ihn persönlich zu Adrian.",
              "Adrian erhält den noch geschlossenen Umschlag.",
              "Adrian öffnet ihn im Beisein seiner Maskenbildnerin."
            ],
            "correct": [
              0,
              1,
              2,
              3
            ]
          },
          {
            "title": "Der Umschlag blieb geschlossen",
            "story": "Adrian öffnete den Umschlag im Beisein seiner Maskenbildnerin. Sie bestätigt, dass darin nur die Änderungsanweisung lag. Die Botin und Adrian hatten den Umschlag zwischen Übergabe und Öffnung durchgehend im Blick; das Siegel war bis zur Öffnung unbeschädigt.",
            "question": "Welche zwei Angaben schließen den beschriebenen unbemerkten Austausch nach 19:25 aus?",
            "options": [
              "Jede denkbare Vorbereitung vor 19:25",
              "Jeder mögliche Grund für die Anweisung",
              "Ein unbemerkter Austausch des Inhalts nach der Übergabe an die Botin"
            ],
            "answer": 2,
            "hint": "Die Kontrolle beginnt bei der Übergabe, nicht schon bei der Herstellung.",
            "reveal": "Der Inhalt kann im beschriebenen Transport nicht unbemerkt ausgetauscht worden sein. Wer ihn vorher einlegte, bleibt mit weiteren Belegen zu klären.",
            "note": "Umschlagtransport nach 19:25 durchgehend beobachtet; Siegel bis zur Öffnung intakt.",
            "kind": "Beweiskette",
            "type": "multi",
            "items": [
              "Der Umschlag bleibt während des Transports durchgehend im Blick.",
              "Das Siegel ist bis zum Öffnen unbeschädigt.",
              "Es gibt keine Angaben über die Herstellung vor 19:25.",
              "Die Botin arbeitet für das Theater."
            ],
            "correct": [
              0,
              1
            ]
          }
        ]
      },
      {
        "title": "Eine Unterschrift zu viel",
        "icon": "✒️",
        "art": "assets/theater-7.webp",
        "artAlt": "Theaterbüro mit Zugangsausweis, Anweisungen und Briefumschlag.",
        "guide": "Ich prüfe, wer eine Anweisung schrieb und wem sie übergeben wurde.",
        "steps": [
          {
            "title": "Die Durchschrift",
            "story": "In Leonas Regiemappe liegt eine Durchschrift der Änderungsanweisung. Der Materialvergleich ordnet Original und Durchschrift demselben Schreibvorgang zu. Original und Durchschrift tragen Leonas von ihr bestätigte Handschrift. Für den Vergleich ziehst du außerdem das dokumentierte Umschlagsiegel und die abgeglichene Fluraufnahme heran.",
            "question": "Ordne jedem geprüften Befund die Aussage zu, die er unmittelbar stützt.",
            "options": [
              "Leona verfasste die Änderungsanweisung selbst",
              "Leona war damit nachweislich um 21:10 neben der Kulisse",
              "Adrian hatte das Manuskript selbst geschrieben"
            ],
            "answer": 0,
            "hint": "Handschrift betrifft Urheberschaft, Siegel den Transportinhalt und die Fluraufnahme den beobachteten Eintritt.",
            "reveal": "Die bestätigte Handschrift verbindet Leona mit der Anweisung. Das intakte Siegel betrifft den kontrollierten Transportinhalt. Die abgeglichene Fluraufnahme belegt ihren Eintritt um 19:13. Erst gemeinsam lassen sich diese Befunde in die Rekonstruktion einordnen.",
            "note": "Original und Durchschrift verbinden die Änderungsanweisung mit Leona.",
            "kind": "Materialvergleich",
            "type": "match",
            "left": [
              "Übereinstimmende, bestätigte Handschrift",
              "Intaktes Umschlagsiegel während des Transports",
              "Abgeglichene Fluraufnahme um 19:13"
            ],
            "right": [
              "Leona schrieb die Änderungsanweisung.",
              "Der Transportinhalt wurde nicht unbemerkt ausgetauscht.",
              "Leona öffnete zu diesem Zeitpunkt die Seitenbühnentür."
            ],
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "title": "Eine Freigabe aus derselben Mappe",
            "story": "Auch die namenlose Zusatzfreigabe stammt nach Materialvergleich aus einem Schreibblock in Leonas Regiemappe. Eine deckungsgleiche Durchschrift trägt ihre bestätigte Handschrift. Die technische Prüfung meldet keinen Auftrag, der eine solche Zusatzprüfung erforderlich gemacht hätte.",
            "question": "Welche Einordnung passt zu diesen Befunden?",
            "options": [
              "Die namenlose Karte stammt deshalb sicher von Nils",
              "Leona verfasste die Zusatzfreigabe; eine technische Notwendigkeit ist bislang nicht belegt",
              "Jede Wartungskarte ist automatisch ein Tötungsbeweis"
            ],
            "answer": 1,
            "hint": "Urheberschaft und fehlende Erklärung sind belastend, ersetzen aber nicht den Gesamtzusammenhang.",
            "reveal": "Leona muss nun erklären, warum sie ohne dokumentierten Technikauftrag einen Eingriff freigab.",
            "note": "Zusatzfreigabe ebenfalls von Leona; kein passender dokumentierter Technikauftrag.",
            "kind": "Dokumentvergleich",
            "type": "choice"
          },
          {
            "title": "Die Reihenfolge der Vorbereitung",
            "story": "Du ordnest vier gesicherte Ereignisse: A – Adrian kündigt um 18:50 die Klärung an; B – das Siegel ist um 19:12 intakt; C – Leona betritt um 19:13 die Seitenbühne; D – sie übergibt um 19:25 den Umschlag.",
            "question": "Ordne die vier gesicherten Ereignisse chronologisch.",
            "options": [
              "C → A → D → B",
              "D → B → A → C",
              "A → B → C → D"
            ],
            "answer": 2,
            "hint": "Ordne die Referenzzeiten aufsteigend.",
            "reveal": "Der angekündigte Konflikt liegt vor dem Eingriffsfenster; der Umschlag folgt nach Leonas Aufenthalt auf der Seitenbühne.",
            "note": "Zeitliche Kette: Konfliktankündigung, intaktes Siegel, Leonas Eintritt, Umschlagübergabe.",
            "kind": "Rekonstruieren",
            "type": "order",
            "items": [
              "Adrian kündigt die Klärung an · 18:50",
              "Kontrollsiegel noch intakt · 19:12",
              "Leona betritt die Seitenbühne · 19:13",
              "Umschlagübergabe an die Botin · 19:25"
            ],
            "correct": [
              0,
              1,
              2,
              3
            ]
          },
          {
            "title": "Das Alibi am Regiepult",
            "story": "Leona sagt: „Sie sehen mich doch um 21:10 auf der Aufnahme am Regiepult. Ich konnte nichts tun.“ Du hast den Eingriff bereits auf nach 19:12 bis 19:18 eingegrenzt.",
            "question": "Welche Antwort trifft den logischen Fehler?",
            "options": [
              "Die Aufnahme um 21:10 widerlegt eine Vorbereitung am frühen Abend nicht",
              "Die Aufnahme muss deshalb gefälscht sein",
              "Alle Alibis sind grundsätzlich wertlos"
            ],
            "answer": 0,
            "hint": "Ein echtes späteres Alibi kann wahr sein und die frühere Vorbereitung trotzdem offenlassen.",
            "reveal": "Du bestätigst die Aufnahme, ohne daraus eine Entlastung für das andere Zeitfenster abzuleiten.",
            "note": "Leonas echtes Alibi um 21:10 beantwortet nicht ihre Gelegenheit um 19:13.",
            "kind": "Psychologisch ermitteln",
            "type": "choice"
          },
          {
            "title": "Die Bühne deiner Konfrontation",
            "story": "Du hast die frühen Aufenthalte, Leonas Dokumente und den gezielten Positionswechsel zusammengeführt. Leona sitzt noch im Theater. Eine Journalistin wartet im Foyer. Dein Team bittet dich um eine Entscheidung zum nächsten Gespräch.",
            "question": "Wie präsentierst du die belastenden Belege?",
            "options": [
              "Allein ihr ruhiger Gesichtsausdruck",
              "Der Zusammenhang der überprüften Aufenthalts-, Dokument- und Ablaufbelege",
              "Allein die Tatsache, dass sie Regisseurin ist"
            ],
            "answer": 1,
            "hint": "Diese Entscheidung hat keine vorgegebene richtige Antwort. Ihr Verlauf wird in der Akte festgehalten.",
            "reveal": "Die Belege verbinden Gelegenheit, vorbereiteten Eingriff, Adrians Position und ein mögliches Motiv. Du legst sie ohne Deutung ihrer Mimik vor.",
            "note": "Rekonstruktion stützt sich auf überprüfte Quellen, nicht auf Körpersprache.",
            "kind": "Deine Entscheidung",
            "type": "decision",
            "decisionKey": "approach",
            "choices": [
              {
                "id": "quiet",
                "label": "Vertraulich im aufgezeichneten Gespräch mit deinem Team",
                "reveal": "Du legst die Quellen in einem ruhigen Gespräch vor. Leona erhält Gelegenheit, die einzelnen Widersprüche zu erklären; die Beteiligten werden nicht vor der Presse vorgeführt.",
                "note": "Konfrontation vertraulich und dokumentiert geführt."
              },
              {
                "id": "public",
                "label": "Leona im Foyer vor der Journalistin öffentlich mit dem Verdacht konfrontieren",
                "reveal": "Die Journalistin macht den Verdacht sofort öffentlich. Leona bricht das Gespräch ab. Dein Team arbeitet weiter mit den gesicherten Aufnahmen und Dokumenten, doch die Nachricht überholt die Ermittlungen.",
                "note": "Verdacht öffentlich vorgetragen; Leona bricht das Gespräch ab."
              }
            ]
          }
        ]
      },
      {
        "title": "Der letzte Vorhang",
        "icon": "🎬",
        "art": "assets/theater-8.webp",
        "artAlt": "Stille Bühne im Morgenlicht mit gesicherter Fallakte.",
        "guide": "Ich führe die Quellen zusammen und prüfe jede Aussage an unabhängigen Belegen.",
        "steps": [
          {
            "title": "Ein Wortlaut, den sie kennt",
            "story": "Du prüfst Leonas Kenntnis der Anweisung anhand ihrer bereits gesicherten ersten Aussage. Noch bevor die Durchschrift gezeigt wurde, sagte sie: „Adrian sollte zwischen dem zweiten und dritten Glockenschlag nach M.“ Genau das steht in der gesicherten Anweisung. Ihre Urheberschaft ist bereits durch den Materialvergleich und die bestätigte Handschrift belegt.",
            "question": "Welche zwei Einordnungen passen zu Leonas genauer Formulierung?",
            "options": [
              "Sie beweist ganz allein die Manipulation der Kulisse",
              "Sie entlastet Leona automatisch",
              "Sie passt zu ihrer bereits belegten Urheberschaft der Anweisung"
            ],
            "answer": 2,
            "hint": "Die Urheberschaft ist schon durch die Durchschrift belegt. Der Satz ergänzt sie, ersetzt aber keine andere Spur.",
            "reveal": "Du behandelst ihren Satz als Bestätigung der detaillierten Kenntnis. Die entscheidenden Belege bleiben die Dokumente, die Gelegenheit und der technische Befund.",
            "note": "Leona beschreibt die Anweisung detailliert; kein alleiniger Nachweis des Eingriffs.",
            "kind": "Befragen",
            "type": "multi",
            "items": [
              "Sie passt zu ihrer bereits belegten Urheberschaft der Anweisung.",
              "Sie ersetzt keinen unabhängigen Nachweis des Eingriffs an der Kulisse.",
              "Sie beweist allein jede Einzelheit des Vorfalls.",
              "Sie widerlegt das vorhandene Schriftstück."
            ],
            "correct": [
              0,
              1
            ],
            "variants": [
              {
                "when": {
                  "approach": "public"
                },
                "patch": {
                  "title": "Die Aussage bleibt in der Akte",
                  "story": "Nach der öffentlichen Konfrontation spricht Leona nicht weiter mit dir. Du greifst auf ihre bereits vorher gesicherte erste Aussage zurück: „Adrian sollte zwischen dem zweiten und dritten Glockenschlag nach M.“ Dieser Wortlaut und ihre belegte Urheberschaft bleiben prüfbar. Ein neues Gespräch ist für diesen Beleg nicht erforderlich."
                }
              }
            ]
          },
          {
            "title": "Die behauptete Entlastung",
            "story": "In Leonas gesicherter erster Aussage steht: „Nils muss die Zusatzfreigabe bestellt haben.“ Die vollständige technische Auftragsliste enthält keinen solchen Auftrag. Nils war im Eingriffsfenster nachweislich am Lieferhof. Du formulierst die Fragen für die weitere Prüfung; auf dem öffentlichen Weg beantwortet Leona sie vorerst nicht.",
            "question": "Welche zwei Fragen prüfen Leonas Behauptung über Nils anhand von Quellen?",
            "options": [
              "Auf welchen dokumentierten Auftrag von Nils beziehen Sie sich?",
              "Warum lächeln Sie?",
              "Nils ist bestimmt böse, oder?"
            ],
            "answer": 0,
            "hint": "Frage nach der Quelle ihres behaupteten Auftrags.",
            "reveal": "In der vorliegenden Aussage nennt Leona keinen überprüfbaren Auftrag. Eine unbelegte Behauptung ändert die gesicherten Dokumente und Alibis nicht. Dein Team hält die Frage für die weitere Prüfung fest.",
            "note": "Leonas Verweis auf Nils enthält keine überprüfbare Auftragsgrundlage.",
            "kind": "Widerspruch prüfen",
            "type": "multi",
            "items": [
              "Auf welchen dokumentierten Auftrag von Nils beziehen Sie sich?",
              "Wer kann den behaupteten Auftrag unabhängig bestätigen?",
              "Warum lächeln Sie?",
              "Ist Nils nicht generell verdächtig, weil er Techniker ist?"
            ],
            "correct": [
              0,
              1
            ]
          },
          {
            "title": "Die vollständige Kette",
            "story": "Eine technische Prüfung belegt die gezielte Veränderung im eingegrenzten Fenster. Mara und Nils sind für den unmittelbaren Eingriff unabhängig entlastet. Leona betrat den Bereich in diesem Fenster, verfasste die Zusatzfreigabe und schickte Adrian schriftlich nach M. Ihre frühe Alibibehauptung stimmt nicht.",
            "question": "Wähle die vier voneinander verschiedenen Teile der Rekonstruktion.",
            "options": [
              "Mara Seidel",
              "Leona Brandt",
              "Nils Kramer"
            ],
            "answer": 1,
            "hint": "Verbinde Vorbereitung, Aufenthaltsorte und gezielte Änderung des Bühnenablaufs.",
            "reveal": "Die Belege konzentrieren sich auf Leona. Du legst deinem Team die dokumentierte Reihenfolge vor und kennzeichnest die Punkte, die in einem weiteren Gespräch geklärt werden sollen.",
            "note": "Gesamtbild konzentriert sich auf Leona; frühere und spätere Zeiten werden getrennt geprüft.",
            "kind": "Rekonstruieren",
            "type": "multi",
            "items": [
              "Leonas dokumentierter Eintritt im Vorbereitungsfenster",
              "Gezielte Veränderung laut technischer Prüfung",
              "Leonas bestätigte Urheberschaft der Zusatzfreigabe und Anweisung",
              "Ihr dokumentierter Konflikt mit Adrian vor der Premiere",
              "Ihre Berufsbezeichnung allein",
              "Maras mögliche Rollenübernahme allein"
            ],
            "correct": [
              0,
              1,
              2,
              3
            ]
          },
          {
            "title": "Bevor du die Akte schließt",
            "story": "Dein Team bereitet den abschließenden Bericht vor. Noch ist kein Geständnis protokolliert. Du prüfst, welche zusätzlichen Schritte Aussagen belastbar machen, bevor du über das weitere Vorgehen entscheidest.",
            "question": "Ordne jeder Aussage den nötigen zusätzlichen Prüfschritt zu.",
            "options": [
              "Die bisherigen Beweise vernichten",
              "Jede Einzelheit ungeprüft als wahr übernehmen",
              "Die Angaben mit den gesicherten Spuren und Aufzeichnungen abgleichen"
            ],
            "answer": 2,
            "hint": "Ein Zugangsausweis nennt noch nicht jeden Nutzer; ein Geständnis verlangt einen Abgleich; ein Motiv benötigt weitere Tatbelege.",
            "reveal": "Ausweis und Person, Aussage und Sachbeleg, Motiv und Tatnachweis sind unterschiedliche Fragen. Du hast die Prüfungen für deinen Bericht getrennt aufgeführt.",
            "note": "Abschlussprüfung: Nutzer identifizieren, Angaben abgleichen, Motiv durch weitere Tatbelege ergänzen.",
            "kind": "Auflösung prüfen",
            "type": "match",
            "left": [
              "Ein Ausweis wurde verwendet.",
              "Eine Person nennt ein Geständnis.",
              "Ein Konflikt könnte ein Motiv liefern."
            ],
            "right": [
              "Die tatsächlich handelnde Person identifizieren.",
              "Die Angaben mit unabhängigen Spuren abgleichen.",
              "Gelegenheit und Tatbelege separat prüfen."
            ],
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "title": "Was steht in deinem Abschlussbericht?",
            "story": "Du hast die Belege und die Folgen deiner Entscheidungen vor dir. Du entscheidest, wen du in deinem Bericht als Hauptverdacht benennst – oder ob du die Akte mit offenen Fragen an die weitere Ermittlung übergibst. Eine Festnahme und spätere Bewertung stützen sich auf die dokumentierten Belege, nicht auf deine Wahl allein.",
            "question": "Wie lautet deine abschließende Empfehlung?",
            "options": [
              "Zeitpunkt der Vorbereitung und Zeitpunkt ihrer Wirkung",
              "Farbe der Sitze und Farbe des Vorhangs",
              "Applaus vor und nach einer Szene"
            ],
            "answer": 0,
            "hint": "Diese Entscheidung hat keine vorgegebene richtige Antwort. Ihr Verlauf wird in der Akte festgehalten.",
            "reveal": "Du hast die richtige Frage gestellt: Nicht nur, wer um 21:10 wo war, sondern wer zuvor den Ablauf verändern konnte. Das Theater wird erst nach einer erneuten Sicherheitsprüfung wieder geöffnet.",
            "note": "Fall gelöst durch getrennte Prüfung von Vorbereitung und Wirkung.",
            "kind": "Deine Entscheidung",
            "type": "decision",
            "decisionKey": "verdict",
            "choices": [
              {
                "id": "leona",
                "label": "Leona als Hauptverdacht benennen und die Beweiskette vorlegen",
                "reveal": "Du legst den Schwerpunkt auf Leona und dokumentierst ihre Gelegenheit, die Anweisungen sowie den Konflikt mit Adrian.",
                "note": "Abschlussbericht: Hauptverdacht Leona; Beweiskette vorgelegt."
              },
              {
                "id": "nils",
                "label": "Nils als Hauptverdacht benennen",
                "reveal": "Du stellst Nils in den Mittelpunkt. Dein Team hält dagegen: Die vollständige Lieferhofaufnahme entlastet ihn für den unmittelbaren Eingriff.",
                "note": "Abschlussbericht: Verdacht Nils trotz unabhängiger Entlastung."
              },
              {
                "id": "mara",
                "label": "Mara als Hauptverdacht benennen",
                "reveal": "Du stellst Mara in den Mittelpunkt. Dein Team verweist auf ihr durchgehendes Probenraum-Alibi; die mögliche Rollenübernahme ersetzt keine Tatbelege.",
                "note": "Abschlussbericht: Verdacht Mara trotz unabhängiger Entlastung."
              },
              {
                "id": "defer",
                "label": "Noch keinen Hauptverdacht festlegen und ergänzende Prüfung anfordern",
                "reveal": "Du gibst die Akte mit klar bezeichneten offenen Prüfpunkten weiter. Die vorhandenen Belege bleiben gesichert, der Fall wird weiterbearbeitet.",
                "note": "Abschlussbericht: ergänzende Prüfung angefordert; Akte offen."
              }
            ]
          }
        ]
      }
    ],
    "suspects": [
      {
        "name": "Leona Brandt",
        "role": "Regisseurin · Autorin laut Programm",
        "detail": "Leitet die Produktion und verteilt Änderungen des Bühnenablaufs."
      },
      {
        "name": "Nils Kramer",
        "role": "Bühnenmeister",
        "detail": "Verantwortet die dokumentierte Sicherheitsabnahme der Kulisse."
      },
      {
        "name": "Mara Seidel",
        "role": "Adrians Zweitbesetzung",
        "detail": "Probte am frühen Abend im Choreografieraum."
      }
    ],
    "ending": "Dein Abschluss hängt von den festgehaltenen Entscheidungen und dem vorgelegten Bericht ab.",
    "epilogue": "Dein Team führt die Akte anhand der gesicherten Belege und der offenen Prüfpunkte weiter.",
    "branching": true,
    "endings": {
      "clear": {
        "title": "Ein klarer Schlussakkord",
        "summary": "Die Beweiskette hält, und die Beteiligten wurden mit Respekt behandelt.",
        "text": "Du benennst Leona anhand der überprüften Beweiskette. Die gesicherten Archivoriginale ermöglichen einen vollständigen Abgleich; die ruhigen Gespräche liefern zusätzliche überprüfbare Angaben. Im vertraulichen Abschlussgespräch gesteht Leona die Vorbereitung und die gezielte Anweisung an Adrian. Dein Team gleicht ihre Angaben mit den unabhängigen Spuren ab und nimmt sie fest. Die Theaterleitung stoppt die Produktion und prüft die Textrechte.",
        "epilogue": "Mara dankt dir dafür, dass du ihre mögliche Rollenübernahme nicht mit Schuld verwechselt hast. Nils gibt dir das abgegriffene Programmheft zurück. Im leeren Saal fällt der Vorhang. Du schließt eine nachvollziehbar dokumentierte Akte, Maus."
      },
      "fractured": {
        "title": "Die Wahrheit mit Rissen",
        "summary": "Der Hauptverdacht ist schlüssig, aber dein Weg hat Vertrauen oder zusätzliche Beweissicherung gekostet.",
        "text": "Dein Bericht benennt Leona. Ihre dokumentierte Anwesenheit, die gezielte Anweisung und der Technikbefund bleiben belastend. Dein Team verfolgt den Verdacht anhand dieser Quellen weiter. Eine abgeschlossene vollständige Aufklärung lässt sich jedoch noch nicht melden: Zusätzliche Befragungen und offene Prüfschritte stehen aus. Deine früheren Entscheidungen haben die Arbeit erschwert.",
        "epilogue": "Die Wahrheit ist näher gerückt, doch nicht jedes Vertrauen lässt sich zurückholen. Du hältst die Folgen deines Vorgehens in der Akte fest, bevor du das Theater verlässt."
      },
      "wrong": {
        "title": "Eine falsche Fährte bis zum Schluss",
        "summary": "Dein Abschlussbericht widerspricht den überprüften Alibis.",
        "text": "Du benennst eine durch unabhängige Aufnahmen entlastete Person als Hauptverdacht. Dein Team übernimmt diese Empfehlung nicht ungeprüft und veranlasst eine erneute Prüfung. Niemand wird allein wegen deiner Wahl überführt. Wertvolle Zeit geht verloren; die belastenden Hinweise auf Leona müssen neu zusammengeführt werden.",
        "epilogue": "Die Fallakte bleibt offen. Du erkennst, wie ein plausibles Motiv oder ein Beruf den Blick auf stärkere Belege verstellen kann. Ein neuer Durchlauf gibt dir Gelegenheit, deinen Ermittlungsweg zu ändern."
      },
      "open": {
        "title": "Der Vorhang bleibt offen",
        "summary": "Du gibst eine geordnete Akte mit weiteren Prüfpunkten ab.",
        "text": "Du legst noch keinen Hauptverdacht fest. Dein Team erhält die dokumentierten Quellen und einen Auftrag zur ergänzenden Prüfung. Die belastenden Hinweise auf Leona werden weiter untersucht; es gibt in diesem Ende weder ein abgeschlossen geprüftes Geständnis noch eine endgültige Aufklärung.",
        "epilogue": "Du hast offene Fragen benannt, statt Gewissheit vorzutäuschen. Das Theater bleibt bis zur Sicherheitsfreigabe geschlossen. Für heute endet dein Teil der Ermittlung – die Geschichte wartet auf ihre Fortsetzung."
      }
    }
  }
];
