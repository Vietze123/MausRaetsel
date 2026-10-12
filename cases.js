// Maus ermittelt selbst.
window.MAUS_CASES = [
  {
    "id": "rosenhain",
    "version": 3,
    "title": "Tod zwischen Rosen",
    "subtitle": "Du bist die Ermittlerin, Maus. Ein Mord. Drei Alibis. Und eine Lüge, die sich selbst verrät.",
    "tag": "Episode 01 · Tod zwischen Rosen",
    "duration": "Etwa 60–90 Minuten · 40 Aufgaben · jederzeit pausierbar",
    "description": "Ein elegantes Gartenfest endet mit einem Mord. Als Ermittlerin Maus liest du zwischen den Zeilen, prüfst Alibis und stellst dem Täter eine Falle.",
    "chapters": [
      {
        "title": "Die letzte Einladung",
        "icon": "✉️",
        "steps": [
          {
            "title": "Ein Fest endet im Schweigen",
            "story": "Der Regen trommelt gegen die Scheiben des Gartenhauses Rosenhain. Eben noch Musik, jetzt Stille: Um 20:20 findet die Gastgeberin den Kunsthändler Viktor Winter leblos im Arbeitszimmer. Du übernimmst die Ermittlungen, Maus. Die Spurensicherung bestätigt einen tödlichen Schlag mit einem schweren Gegenstand. Du stellst deine Teetasse ab. „Niemand geht. Und niemand erzählt mir, was ich hören soll.“ Dein erster Blick gilt der Uhr – nicht den Gesichtern.",
            "question": "Die Tat geschah laut gesicherter medizinischer Eingrenzung dieser fiktiven Fallakte zwischen 20:10 und 20:15. Eine Gartenkamera zeigt um 20:08 eine Person am Tor und um 20:18 wieder. Was belegen die beiden Bilder allein?",
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
            "story": "Drei Menschen standen Viktor nahe: Clara Winter, seine Cousine und Floristin; Jonas Berg, sein Assistent; und Ben Falk, sein Geschäftspartner. Viktor hatte alle drei um ein Gespräch gebeten. Auf seinem Schreibtisch liegt ein verschlüsselter Zettel.",
            "question": "Die Anweisung lautet: „Jeder Buchstabe ist eine Stelle zu weit im Alphabet.“ Auf dem Zettel steht „BLUF“. Was ist gemeint?",
            "options": [
              "AKTE",
              "BLUT",
              "BANK"
            ],
            "answer": 0,
            "hint": "Gehe bei jedem Buchstaben eine Stelle zurück: B wird A.",
            "reveal": "AKTE. Neben dem Zettel liegt eine Mappe mit der Aufschrift „Inventar“. Jemand hat die letzten Seiten herausgerissen. Dein erster wirklicher Ansatz, Maus.",
            "note": "Viktors Zettel verweist auf eine Akte; in der Inventarmappe fehlen Seiten.",
            "kind": "Entschlüsseln"
          },
          {
            "title": "Die umgekehrte Einladung",
            "story": "Zwischen den Einladungen liegt eine Karte in Viktors Handschrift: „Was verborgen ist, liest sich vom Ende her.“ Darunter steht RATNEVNI. Du drehst die Karte zwischen den Fingern. Die Anweisung klingt wie ein letzter kleiner Test.",
            "question": "Welches Wort ergibt die zweite Zeile, rückwärts gelesen?",
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
            "story": "Die Empfangskraft hat die Musikliste gesichert: Klavierstück 19:58–20:04, Pause 20:04–20:06, Streichquartett 20:06–20:14, Pause 20:14–20:17. Eine Zeugin erinnert sich nur: „Als ich die Arbeitszimmertür ins Schloss fallen hörte, spielte das Quartett.“",
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
              "Bens Einschätzung ihrer Beziehung",
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
            "title": "Ein ruhiger Raum, eine fehlende Seite",
            "story": "Das Arbeitszimmer hat nur eine Tür. Das Fenster ist von innen verriegelt und wurde laut Spurensicherung nicht geöffnet. Die Tür war nicht abgeschlossen. Wer zu Viktor wollte, musste vom Flur hereinkommen. Clara behauptet, niemand hätte Zugang gehabt.",
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
            "question": "Was lässt sich aus der Farbe des Fadens allein sicher ableiten?",
            "options": [
              "Ben ist der Täter",
              "Jonas ist der Täter",
              "Ben und Jonas kommen als Quelle infrage"
            ],
            "answer": 2,
            "hint": "Die Farbe passt zu mehr als einer Person.",
            "reveal": "Der Faden grenzt die Spur zunächst auf Ben oder Jonas ein, beweist aber keine Täterschaft. Du lässt ihn mit den Kleidungsstücken vergleichen.",
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
            "story": "Auf Viktors Tisch steht eine Tasse mit Claras Lippenstift. Ein datiertes Festfoto von 18:30 zeigt Clara mit genau dieser Tasse im Arbeitszimmer. Die Spur wurde nicht zeitlich eingegrenzt.",
            "question": "Welche Aussage bleibt mit diesen Angaben vereinbar?",
            "options": [
              "Clara muss während der Tat im Zimmer gewesen sein",
              "Die Tasse beweist einen Einstieg durchs Fenster",
              "Clara kann die Spur bereits um 18:30 hinterlassen haben"
            ],
            "answer": 2,
            "hint": "Frage dich, ob die Spur nur während der Tat entstanden sein kann.",
            "reveal": "Die frühere Anwesenheit erklärt den Lippenstift. Die Tasse widerlegt Claras späteres Alibi nicht.",
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
            "story": "Clara umfasst ihre Teetasse so fest, dass ihre Finger weiß werden. „Ich war draußen und habe die Blumen für morgen sortiert.“ Nervosität ist kein Schuldbeweis. Du prüfst ihre Aussage, Maus: Zwei Lieferanten haben von 20:07 bis 20:17 ohne Unterbrechung mit Clara am Gartentor gesprochen. Sie konnten sie die ganze Zeit sehen.",
            "question": "Deckt dieses bestätigte Alibi die gesamte Tatzeit 20:10–20:15 ab?",
            "options": [
              "Ja, vollständig",
              "Nur den Anfang",
              "Nein, überhaupt nicht"
            ],
            "answer": 0,
            "hint": "Vergleiche Anfang und Ende beider Zeiträume.",
            "reveal": "Ja. Clara war während der gesamten Tatzeit am Tor. Sie bleibt eine wichtige Zeugin, aber als ausführende Täterin scheidet sie im Rahmen dieser Fallakte aus.",
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
            "question": "Wie viele eigene Beobachtungen liegen tatsächlich vor?",
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
            "question": "Welche Frage ist am wenigsten suggestiv?",
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
            "story": "Das Originalfoto zeigt Jonas in der Küche. Laut verifizierten Metadaten wurde es um 20:10:30 aufgenommen. Vom Arbeitszimmer zur Küche braucht man auf dem einzigen Weg mindestens 90 Sekunden. Eine gesicherte Audiodatei aus Viktors Diktiergerät belegt: Um 20:10:00 war Viktor noch lebend allein im Zimmer. Danach fiel der tödliche Schlag. Die Gastgeberin bestätigt außerdem, Jonas seit dem Foto um 20:10:30 bis 20:16 ununterbrochen gesehen zu haben.",
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
            "story": "Ben behauptet: „Um 20:12 habe ich schon am Empfang unterschrieben.“ Seine Unterschrift steht im Besucherbuch direkt unter dem gedruckten Zeitstempel 20:18. Die Empfangskraft bestätigt, dass sie ihn beim Unterschreiben sah. Das Buch wird fortlaufend geführt und der Zeitstempel ist korrekt. Du lässt eine Pause entstehen. Ben antwortet auf die Stille, bevor du eine Frage stellst: „Die Uhr dort geht bestimmt falsch.“ Du bleibst bei den überprüften Angaben. Eine hektische Reaktion ist ein Ansatz für die nächste Frage, kein Beweis.",
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
            "story": "Ein Kontrollfoto zeigt das Küchenwandzifferblatt auf 20:07, während die kalibrierte Referenzuhr exakt 20:10 zeigt. Die Küchenwanduhr läuft konstant drei Minuten nach. Ein anderes Foto zeigt sie auf 20:08.",
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
            "question": "Welches Dokument prüfst du für seine behauptete Unterschriftszeit zuerst?",
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
            "story": "Die Inventarmappe nennt einen Archivkasten. Auf dem Schloss steht Viktors Eselsbrücke: „Drei Ziffern. Die erste ist doppelt so groß wie die zweite. Die dritte ist drei größer als die erste. Die Summe ist 13.“",
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
            "story": "Die beiden authentischen Rechnungen für R-17 nennen 4.800 Euro und 5.200 Euro. Der zugehörige Buchungsauszug weist beide Eingänge aus, zusammen aber nur 4.800 Euro als Erlös für R-17 in der Übersicht.",
            "question": "Wie viel Geld fehlt in dieser Erlösübersicht gegenüber den beiden Zahlungseingängen?",
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
        "title": "Die Nachricht um acht",
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
            "story": "Ein beschädigter Ausdruck enthält drei nummerierte Fragmente: 1 „Morgen übergebe ich“, 2 „alles der Polizei“, 3 „Gib mir bis 20:15 eine Erklärung.“ Die authentische Handyfassung beginnt mit der Frist und endet mit der angekündigten Übergabe.",
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
            "story": "Die Spurensicherung findet den Messing-Briefbeschwerer unter den weißen Rosen im Flur. Nach bestätigter Untersuchung ist er die Tatwaffe. Am Griff sitzt ein frischer Riss eines Stoffstücks. Der Materialvergleich ergibt: Es passt exakt in die neue Risskante von Bens Schal. Jonas’ Mantel hat eine andere Webstruktur.",
            "question": "Welche frühere Unsicherheit löst der Vergleich?",
            "options": [
              "Der Stoff stammt von Bens Schal, nicht von Jonas’ Mantel",
              "Die Tatzeit liegt jetzt am Morgen",
              "Clara war im Arbeitszimmer"
            ],
            "answer": 0,
            "hint": "Das ist mehr als dieselbe Farbe: Die Risskanten passen zusammen.",
            "reveal": "Das Stoffstück lässt sich Bens Schal zuordnen. Der Briefbeschwerer verbindet ihn nun auch mit dem Tatmittel. Dein Blick wandert vom Rosenbeet zu Ben.",
            "note": "Tatwaffe gesichert; frisches Stoffstück passt exakt in Bens Schalriss.",
            "kind": "Ermitteln"
          },
          {
            "title": "Die Spur richtig einordnen",
            "story": "Ben sagt: „Ich war schon nachmittags am Schreibtisch. Der Faden könnte alt sein.“ Der einzelne Faden könnte tatsächlich älter sein. Aber das passende Stoffstück sitzt am Griff der versteckten Tatwaffe; der Riss am Schal wurde auf einem Foto um 19:50 noch nicht gesehen.",
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
            "story": "Das gesicherte Foto um 19:50 zeigt Bens Schal ohne Riss. Die dokumentierte Sicherstellung um 20:25 zeigt denselben Schal mit Riss. Dazwischen gibt es kein weiteres gesichertes Schalbild.",
            "question": "Was kann dieses Fotopaar zeitlich belegen?",
            "options": [
              "Der Riss entstand sicher exakt um 20:12",
              "Der Riss entstand nach 19:50 und spätestens bis 20:25",
              "Der Riss war bereits morgens vorhanden"
            ],
            "answer": 1,
            "hint": "Zwei Zustände begrenzen ein Zeitfenster, nennen aber keine genaue Minute.",
            "reveal": "Der Riss ist in diesem Fenster neu entstanden. Erst weitere Spuren verbinden ihn mit der Tat.",
            "note": "Schalriss zeitlich eingegrenzt: nach 19:50 bis spätestens 20:25.",
            "kind": "Zeitfenster"
          },
          {
            "title": "Eine Erklärung bleibt übrig",
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
            "story": "Im aufgezeichneten Gespräch sagst du ruhig: „Der Briefbeschwerer lag draußen unter den roten Rosen.“ Ben lacht kurz. „Weiße Rosen. Im Flur, nicht draußen.“ Du hast ihm weder Farbe noch Ort genannt. Beide Details wurden seit dem Fund geheim gehalten; Ben war bei der Suche nicht anwesend und bekam keine Fundberichte. Dann schweigt er. Dein Bluff ist aufgegangen – aber du prüfst weiter.",
            "question": "Wie ordnest du Bens Korrektur ein?",
            "options": [
              "Als überprüfbares Wissen über den geheim gehaltenen Fundort – ein weiterer belastender Hinweis",
              "Als allein ausreichenden Beweis, der alle anderen Spuren ersetzt",
              "Als Beleg dafür, dass jede nervöse Person schuldig ist"
            ],
            "answer": 0,
            "hint": "Er nennt zwei richtige Details, die ihm nach den vorliegenden Angaben nicht mitgeteilt wurden. Verbinde das mit den bisherigen Belegen.",
            "reveal": "Du schiebst das Foto seines unbeschädigten Schals von 19:50 neben den Materialvergleich. „Woher wussten Sie es, Ben?“ Erst die Kombination aus Fundwissen, Tatwaffenspur, falschem Alibi und Motiv bringt ihn zum Geständnis: Er wollte die Betrugsbelege an sich nehmen, schlug Viktor im Streit, riss die Seiten heraus und versteckte den Briefbeschwerer unter den weißen Rosen im Flur. Die Polizei prüft seine Angaben an den gesicherten Spuren.",
            "note": "Ben nennt geheim gehaltene Funddetails. Zusammen mit den unabhängigen Belegen führt die Falle zu einem überprüften Geständnis.",
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
    "ending": "Ben Falk tötete Viktor Winter, um die Aufdeckung seiner Doppelverkäufe zu verhindern. Seine angekündigte Begegnung, das falsche Alibi und der frische Schalriss an der Tatwaffe ergeben die Beweiskette. Deine gezielte falsche Angabe zum Fundort bringt Ben dazu, geheim gehaltene Details zu nennen. Sein anschließend überprüftes Geständnis bestätigt die Rekonstruktion. Clara und Jonas sind durch unabhängige Alibis entlastet. Du hast keine Gedanken gelesen, Maus – du hast genau hingesehen und deine Vermutungen geprüft.",
    "epilogue": "Du schließt die Fallakte, Maus. Die Polizei übernimmt Ben und die gesicherten Beweise. Draußen hört der Regen auf. Dein Tee ist kalt geworden; du lächelst trotzdem. Für heute ist genug ermittelt. Zeit zum Einkuscheln. Bis zum nächsten Fall. ♡",
    "cover": "assets/szene-1.webp"
  }
];
