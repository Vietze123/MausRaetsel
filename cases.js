window.MAUS_CASES = [
  {
    "id": "rosenhain",
    "version": 5,
    "title": "Tod zwischen Rosen",
    "subtitle": "Du bist die Ermittlerin, Maus. Ein Mord. Drei Verdächtige. Und eine Lüge, die sich selbst verrät.",
    "tag": "Episode 01 · Tod zwischen Rosen",
    "duration": "Etwa 75–120 Minuten · abhängig von Rätseltempo und Hinweisen",
    "description": "Ein elegantes Gartenfest endet mit einem Mord. Als Ermittlerin Maus liest du zwischen den Zeilen, prüfst Alibis und stellst dem Täter eine Falle. Anspruchsvolle Fassung: Quellen kombinieren, abgeglichene Zeitbelege prüfen und Beweisketten prüfen. Ohne Rechenaufgaben: Aussagen kombinieren und Zusammenhänge prüfen.",
    "chapters": [
      {
        "title": "Die letzte Einladung",
        "icon": "✉️",
        "steps": [
          {
            "title": "Ein Fest endet im Schweigen",
            "story": "Der Regen trommelt gegen die Scheiben des Gartenhauses Rosenhain. Du bist als Gast beim Blumenfest, Maus. Um 20:20 findet die Gastgeberin Helena den Kunsthändler Viktor Winter leblos im Arbeitszimmer. Als Kriminalermittlerin vor Ort verständigst du dein Team, lässt den Raum sichern und beginnst mit den ersten Gesprächen. Im Laufe der Untersuchung bestätigt sich: Viktor starb durch einen Schlag mit einem schweren Gegenstand. Du stellst deine Teetasse ab. „Bitte bleiben Sie für die Befragung hier.“ Dein erster Blick gilt der Uhr – nicht den Gesichtern. Die abgeglichenen Aufzeichnungen grenzen die Tatzeit auf 20:10–20:15 ein. Die Gartenkamera lieferte zwei Einzelbilder derselben Person: 20:08 und 20:18.",
            "question": "Eine lückenlose Bildserie mit Aufnahmen alle 30 Sekunden könnte die Anwesenheit um 20:12 belegen. Hier liegen jedoch nur zwei Einzelbilder um 20:08 und 20:18 vor. Welche Schlussfolgerung ist belastbar?",
            "hint": "Prüfe, ob die vorliegenden Bilder tatsächlich eine lückenlose Serie bilden. Die Zeit zwischen zwei Einzelbildern bleibt sonst offen.",
            "reveal": "Nur die beiden Zeitpunkte sind belegt. Du notierst die Tatzeit. Durch den Flur zieht Blumenduft, doch das Fest ist plötzlich sehr weit weg.",
            "note": "Gesicherte Tatzeit: 20:10–20:15. Einzelne Kamerabilder sind kein durchgehendes Alibi.",
            "kind": "Ermitteln",
            "type": "choice",
            "options": [
              "Die beiden Randbilder reichen aus, weil 20:12 zwischen ihnen liegt.",
              "Eine Anwesenheit um 20:12 bleibt offen; die Regel für eine lückenlose Serie lässt sich hier nicht anwenden.",
              "Die Person muss um 20:12 abwesend gewesen sein, weil kein entsprechendes Bild vorliegt.",
              "Die Person war mindestens fünf Minuten am Tor, weil beide Bilder denselben Hintergrund zeigen."
            ],
            "answer": 1
          },
          {
            "title": "Drei Namen auf der Gästeliste",
            "story": "Auf Viktors Schreibtisch liegen vier Wortkarten: AKTE, BANK, BLUT und VASE. Sein Vermerk: „Nicht der Ort einer Zahlung. Nicht der verletzte Körper. Nicht das verkaufte Objekt.“ Die gesuchte Karte bezeichnet, was Viktor verborgen hatte.",
            "question": "Welche Karte bleibt übrig?",
            "hint": "Ordne die drei Ausschlüsse den vier Begriffen zu.",
            "reveal": "BANK ist der Zahlungsort, BLUT gehört zum Körper, VASE zum Verkaufsobjekt. Übrig bleibt AKTE; sie verweist auf Viktors Unterlagen.",
            "note": "BANK ist der Zahlungsort, BLUT gehört zum Körper, VASE zum Verkaufsobjekt. Übrig bleibt AKTE; sie verweist auf Viktors Unterlagen.",
            "kind": "Entschlüsseln",
            "type": "input",
            "accepted": [
              "AKTE"
            ],
            "normalize": "text",
            "label": "Deine Schlussfolgerung"
          },
          {
            "title": "Die umgekehrte Einladung",
            "story": "Zwischen den Einladungen liegt eine Karte in Viktors Handschrift: „Was verborgen ist, liest sich vom Ende her.“ Darunter steht RATNEVNI. Du drehst die Karte zwischen den Fingern. Die Anweisung klingt wie ein letzter kleiner Test. Auf der Kartenrückseite liegen Fragmente: 1=VEN, 2=IN, 3=AR, 4=T. Die rückwärts geschriebene Zeile auf der Vorderseite liefert das gesuchte Wort; jedes Fragment muss genau einmal vorkommen.",
            "question": "Welche vierstellige Zahlenfolge ist der Schlüssel für die Fragmente? Antworte mit den Kennziffern ohne Trennzeichen.",
            "hint": "Lies zuerst die Vorderseite rückwärts. Setze danach die vier Fragmente so zusammen, dass genau dieses Wort entsteht.",
            "reveal": "IN + VEN + T + AR ergibt INVENTAR: 2143.",
            "note": "Eine rückwärts geschriebene Notiz verweist auf das Inventar.",
            "kind": "Entschlüsseln",
            "type": "input",
            "accepted": [
              "2143"
            ],
            "normalize": "code",
            "label": "Deine Antwort"
          },
          {
            "title": "Die verschwundenen Minuten",
            "story": "Die geprüfte Musikfolge lautet: Klavier, erste Pause, Quartett, zweite Pause. Die Tat liegt laut unabhängiger Aufnahme zwischen dem Beginn des Quartetts und dem Beginn der zweiten Pause. Die Zeugin hörte die Arbeitszimmertür während des Quartetts.",
            "question": "Welche Schlussfolgerungen passen gleichzeitig zu beiden Quellen?",
            "hint": "Ein zeitlich passender Vorgang ist noch kein eindeutig identifizierter Tatvorgang.",
            "reveal": "Quartett und Tatfenster passen zusammen. Person und genaue Handlung bleiben offen; eine Wahrnehmung in der ersten Pause widerspräche der beschriebenen Erinnerung.",
            "note": "Quartett und Tatfenster passen zusammen. Person und genaue Handlung bleiben offen; eine Wahrnehmung in der ersten Pause widerspräche der beschriebenen Erinnerung.",
            "kind": "Zeitfenster",
            "type": "multi",
            "items": [
              "Das Türgeräusch kann zur Tat gehören.",
              "Die Musik identifiziert die Person an der Tür.",
              "Die Zeugenaussage legt keine genaue Tatminute fest.",
              "Die Erinnerung allein beweist, dass das Geräusch der tödliche Schlag war.",
              "Ein Türgeräusch während der ersten Pause würde dieser Erinnerung widersprechen."
            ],
            "correct": [
              0,
              2,
              4
            ]
          },
          {
            "title": "Was gehört zuerst in die Akte?",
            "story": "Du hörst drei Angaben: Helena fand Viktor um 20:20 leblos. Ein Gast vermutet, Clara sei eifersüchtig. Ben sagt, Viktor habe ihn immer gemocht. Du trennst die berichteten Wahrnehmungen von den daraus abgeleiteten Schlussfolgerungen.",
            "question": "Welche Aussagen geben die berichteten Angaben und ihre Grenzen korrekt wieder?",
            "hint": "Prüfe jede Aussage einzeln gegen die Quellen. Eine plausible Ergänzung ist nicht automatisch ein belegter Schluss.",
            "reveal": "Helenas Fund belegt den Zustand um 20:20, nicht die genaue Todesminute oder die Tatperson. Ben berichtet seine eigene Beziehungseinschätzung. Sie schließt einen Streit am selben Abend nicht aus.",
            "note": "Fundzeit 20:20 ist eine Beobachtung; Beziehungseinschätzungen sind keine Tatbeweise.",
            "kind": "Aussagen prüfen",
            "type": "multi",
            "items": [
              "Helena fand Viktor um 20:20; daraus folgt keine genaue Todesminute.",
              "Der Gast beobachtete Eifersucht als inneren Zustand unmittelbar.",
              "Ben beschrieb seine eigene Einschätzung der Beziehung.",
              "Bens Einschätzung schließt einen Streit am selben Abend aus.",
              "Der später bestätigte Tod lag spätestens bei Helenas Eintreffen vor; die Tatperson folgt daraus nicht."
            ],
            "correct": [
              0,
              2,
              4
            ]
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
            "question": "Welche Annahmen über den Zugang und den Zustand des Zimmers beim Fund widersprechen den gesicherten Spuren?",
            "hint": "Prüfe jede Aussage einzeln gegen die Quellen. Eine plausible Ergänzung ist nicht automatisch ein belegter Schluss.",
            "reveal": "Ein Einstieg durchs Fenster war nicht nötig. Die Tür war offen zugänglich. Clara erschrickt, als sie hört, wie wenig das Zimmer geschützt war.",
            "note": "Zugang nur über die unverschlossene Flurtür; kein Fenstereinstieg.",
            "kind": "Ermitteln",
            "type": "multi",
            "items": [
              "Ein Zutritt durch das Fenster während des relevanten Zeitraums.",
              "Ein Zutritt durch die unverschlossene Flurtür.",
              "Ein von innen abgeschlossener Raum beim Fund.",
              "Ein Besuch vor der Tat durch dieselbe Flurtür.",
              "Eine Tat im Zimmer ohne vorherigen Fenstereinstieg."
            ],
            "correct": [
              0,
              2
            ]
          },
          {
            "title": "Der Platz auf dem Schreibtisch",
            "story": "Auf der Tischunterlage ist ein sauberer rechteckiger Abdruck. Auf einem Foto vom Nachmittag steht genau dort ein schwerer Messing-Briefbeschwerer. Jetzt fehlt er. Neben dem Abdruck liegt ein dunkelblauer Stofffaden. Ben trägt einen dunkelblauen Wollschal; Jonas einen dunkelblauen Wollmantel; Clara ein cremefarbenes Kleid.",
            "question": "Ordne den Befunden die engste zulässige Aussage zu.",
            "hint": "Frage bei jeder Zuordnung: Was belegt diese Quelle unmittelbar, und welche stärkere Behauptung bleibt noch offen?",
            "reveal": "Die Farbe passt sowohl zu Bens Schal als auch zu Jonas’ Mantel. Sie erlaubt noch keine eindeutige Zuordnung und beweist keine Täterschaft. Du lässt Material und Webstruktur vergleichen.",
            "note": "Messing-Briefbeschwerer fehlt. Dunkelblauer Faden könnte zunächst von Ben oder Jonas stammen.",
            "kind": "Ermitteln",
            "type": "match",
            "left": [
              "Dunkelblauer loser Faden",
              "Rechteckiger Abdruck und Nachmittagsfoto",
              "Cremefarbenes Kleid Claras"
            ],
            "right": [
              "Ben und Jonas bleiben als Materialquellen möglich; die Person ist nicht bestimmt.",
              "Ein früher dort stehender Gegenstand fehlt; seine Verwendung ist noch zu prüfen.",
              "Dieses Kleid erklärt den dunkelblauen Wollfaden nicht; Clara ist dadurch nicht umfassend entlastet."
            ],
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "title": "Der Weg durch das Haus",
            "story": "Der Grundriss verbindet Empfang mit Flur, Flur mit Arbeitszimmer und Wintergarten, Wintergarten mit Küche. Weitere Türen gibt es nicht. Du sollst die Küche erreichen und zum Empfang zurückkehren, ohne das Arbeitszimmer zu betreten.",
            "question": "Welche Abschnitte muss jeder mögliche Hin- und Rückweg enthalten?",
            "hint": "Verfolge die offenen Verbindungen. Der Rückweg benutzt dieselben Türen, ohne einen neuen Durchgang zu schaffen.",
            "reveal": "Jeder mögliche Weg führt über Flur und Wintergarten. Das Arbeitszimmer liegt als Sackgasse daneben und ist kein Durchgang zur Küche.",
            "note": "Jeder mögliche Weg führt über Flur und Wintergarten. Das Arbeitszimmer liegt als Sackgasse daneben und ist kein Durchgang zur Küche.",
            "kind": "Weg rekonstruieren",
            "type": "multi",
            "items": [
              "Empfang–Flur",
              "Flur–Wintergarten",
              "Wintergarten–Küche",
              "Flur–Arbeitszimmer",
              "Arbeitszimmer–Küche"
            ],
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "title": "Der zerrissene Seitenrand",
            "story": "Im Inventarordner folgen die Kapitel Erwerb, Prüfung, Freigabe und Übergabe. Jedes Kapitel hat genau ein Deckblatt. Erwerb, Prüfung und Übergabe sind vorhanden. Ein abgerissener Registerreiter trägt „Unterschrift des Verkaufenden“; die Inhaltsübersicht ordnet ihn ausschließlich der Freigabe zu.",
            "question": "Welches Kapitel fehlt?",
            "hint": "Prüfe Deckblätter und Registerreiter gemeinsam.",
            "reveal": "Das Kapitel Freigabe fehlt. Der Registerreiter bestätigt seine Funktion; die übrigen Deckblätter sind vorhanden.",
            "note": "Das Kapitel Freigabe fehlt. Der Registerreiter bestätigt seine Funktion; die übrigen Deckblätter sind vorhanden.",
            "kind": "Dokumentvergleich",
            "type": "input",
            "accepted": [
              "Freigabe"
            ],
            "normalize": "text",
            "label": "Deine Schlussfolgerung"
          },
          {
            "title": "Die scheinbar verräterische Tasse",
            "story": "Auf Viktors Tisch steht eine Tasse mit einem Lippenstiftabdruck in der Farbe, die Clara trägt. Ein datiertes Festfoto von 18:30 zeigt Clara mit genau dieser Tasse im Arbeitszimmer. Die Spur wurde nicht zeitlich eingegrenzt. Die aufgeführten neuen Befunde sind hypothetisch und wurden nicht gefunden. Gesucht sind zeitlich brauchbare Prüfungen.",
            "question": "Welche beiden hypothetischen Zusatzbefunde würden den zeitlichen Zusammenhang mit dem Tatfenster enger prüfen, statt nur einen früheren Besuch zu belegen?",
            "hint": "Prüfe jede Aussage einzeln gegen die Quellen. Eine plausible Ergänzung ist nicht automatisch ein belegter Schluss.",
            "reveal": "Die Serienaufnahme würde einen neuen Abdruck zwischen 20:09 und 20:13 eingrenzen; dieser Zeitraum überschneidet sich mit der Tatzeit. Die Aufnahme um 20:12 würde Claras Kontakt mit der Tasse im Tatfenster zeigen. Keiner dieser Zusatzbefunde liegt tatsächlich vor.",
            "note": "Lippenstift an der Tasse kann von Claras Besuch um 18:30 stammen.",
            "kind": "Falsche Fährte",
            "type": "multi",
            "items": [
              "Eine Serienaufnahme: Tasse um 20:09 sauber, neuer Abdruck um 20:13.",
              "Das vorhandene Foto von 18:30.",
              "Eine abgeglichene Aufnahme von Clara beim Trinken um 20:12.",
              "Der gleiche Lippenstiftfarbton in ihrem Besitz.",
              "Claras Besitz des gleichen Tassentyps."
            ],
            "correct": [
              0,
              2
            ]
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
            "story": "Claras Gespräch am Gartentor ist lückenlos bestätigt. Es beginnt vor der gesicherten Tat und endet danach. Einer der Lieferanten beobachtete ihren Standort durchgehend; der andere bestätigt den Gesprächsinhalt.",
            "question": "Welche Angaben tragen das Ortsalibi, welche haben eine andere Aufgabe?",
            "hint": "Verwechsle eine unabhängige Bestätigung des Inhalts nicht mit einer lückenlosen Standortbeobachtung.",
            "reveal": "Sichtbeleg und vollständige zeitliche Abdeckung entlasten Clara für die Tatphase. Der zweite Bericht bestätigt den Gesprächsinhalt.",
            "note": "Sichtbeleg und vollständige zeitliche Abdeckung entlasten Clara für die Tatphase. Der zweite Bericht bestätigt den Gesprächsinhalt.",
            "kind": "Ermitteln",
            "type": "match",
            "left": [
              "Durchgehende Sicht auf Clara am Tor",
              "Bestätigung des Gesprächsinhalts",
              "Gespräch umfasst die ganze Tatphase"
            ],
            "right": [
              "Belegt den Standort ohne unbeobachtete Unterbrechung.",
              "Stützt den Inhalt, ersetzt allein kein durchgehendes Ortsalibi.",
              "Verbindet den Standortbeleg mit dem relevanten Zeitraum."
            ],
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "title": "Jonas und die Teetassen",
            "story": "Jonas ist zunächst nur ab dem Servieren des Tees in der Küche bestätigt. Die Tatphase begann schon zuvor. Der Wegabgleich wird von deinem Team erledigt; noch liegt kein durchgehender Ortsbeleg für die frühere Phase vor.",
            "question": "Welche Aussage darf noch nicht als gesichert in die Akte?",
            "hint": "Gesucht sind die noch nicht belegten Behauptungen, nicht die bestätigten Angaben.",
            "reveal": "Die frühere Phase bleibt zunächst offen. Der spätere Küchenbeleg darf nicht rückwirkend zu einem vollständigen Alibi erweitert werden.",
            "note": "Die frühere Phase bleibt zunächst offen. Der spätere Küchenbeleg darf nicht rückwirkend zu einem vollständigen Alibi erweitert werden.",
            "kind": "Ermitteln",
            "type": "multi",
            "items": [
              "Jonas war beim Servieren in der Küche.",
              "Jonas war auch während der früheren Phase ununterbrochen dort.",
              "Ein früherer Aufenthalt im Arbeitszimmer muss gesondert geprüft werden.",
              "Der spätere Küchenbeleg schließt rückwirkend jede frühe Abwesenheit aus."
            ],
            "correct": [
              1,
              3
            ]
          },
          {
            "title": "Zwei Zeugen, dieselbe Quelle",
            "story": "Ein Gast behauptet: „Jonas war um 20:12 im Flur.“ Ein zweiter bestätigt es. Auf Nachfrage erklärt der zweite, er habe Jonas nicht selbst gesehen, sondern nur den ersten Gast erzählen hören.",
            "question": "Welche Quelle stützt welche Aussage, ohne die Zahl unabhängiger Beobachtungen zu verdoppeln?",
            "hint": "Frage bei jeder Zuordnung: Was belegt diese Quelle unmittelbar, und welche stärkere Behauptung bleibt noch offen?",
            "reveal": "Nur der erste Gast berichtet eine eigene Wahrnehmung. Ob er Jonas richtig erkannt hat, muss noch geprüft werden.",
            "note": "Die behauptete Flurbeobachtung hat nur eine ursprüngliche Quelle.",
            "kind": "Zeugen prüfen",
            "type": "match",
            "left": [
              "Erster Gast: eigene Wahrnehmung",
              "Zweiter Gast: Erzählung des ersten",
              "Beide Aussagen stimmen wörtlich überein"
            ],
            "right": [
              "Ein Wahrnehmungsbericht, dessen Identifizierung zu prüfen ist.",
              "Bestätigung der Weitergabe, keine zweite Sichtbeobachtung.",
              "Kann durch die gemeinsame Quelle erklärt werden."
            ],
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "title": "Der Mantel an der Garderobe",
            "story": "Der erste Gast beschreibt einen dunkelblauen Mantel hinter Milchglas. Jonas hat seinen Mantel nachweislich um 19:45 an die Garderobe gehängt. Die Garderobe steht im Flur direkt hinter dem Milchglas. Der Gast sah weder Gesicht noch Bewegung.",
            "question": "Welche Angaben begrenzen die Identifizierung einer Person aus dieser Mantelsichtung? Wähle alle relevanten Einschränkungen.",
            "hint": "Prüfe jede Aussage einzeln gegen die Quellen. Eine plausible Ergänzung ist nicht automatisch ein belegter Schluss.",
            "reveal": "Der Mantel erklärt die Silhouette. Die Aussage beweist Jonas’ Anwesenheit im Flur nicht.",
            "note": "Milchglas-Silhouette kann der abgelegte Mantel gewesen sein.",
            "kind": "Beobachten",
            "type": "multi",
            "items": [
              "Kein Gesicht und keine Bewegung gesehen.",
              "Der Mantel hing schon vor der Tat am beschriebenen Ort.",
              "Jonas besitzt einen dunkelblauen Mantel.",
              "Die Sichtung erfolgte hinter Milchglas.",
              "Die Garderobe beweist Jonas’ Anwesenheit in der Küche."
            ],
            "correct": [
              0,
              1,
              3
            ]
          },
          {
            "title": "Eine Frage ohne Vorgabe",
            "story": "Clara schaut immer wieder zum Gartentor. Du möchtest erfahren, was sie dort gesehen hat, ohne eine Antwort vorzugeben.",
            "question": "Ordne die Fragen ihrem Erkenntniswert zu.",
            "hint": "Frage bei jeder Zuordnung: Was belegt diese Quelle unmittelbar, und welche stärkere Behauptung bleibt noch offen?",
            "reveal": "Die erste Frage erfasst Claras eigene Wahrnehmung. Die zweite prüft die Herkunft eines genannten Namens, die dritte die Vergleichbarkeit der Uhrzeit. Die letzte Frage gibt bereits eine Person vor.",
            "note": "Claras Torbeobachtungen werden mit einer offenen Frage aufgenommen.",
            "kind": "Verhören",
            "type": "match",
            "left": [
              "„Was haben Sie selbst am Tor wahrgenommen?“",
              "„Von wem haben Sie den Namen gehört?“",
              "„Welche Zeit zeigte Ihre Uhr im Vergleich zur Festuhr?“",
              "„Ben ging vorbei, richtig?“"
            ],
            "right": [
              "Eigene Beobachtung ohne vorgeschlagenen Inhalt.",
              "Herkunft einer möglichen Fremdinformation.",
              "Vergleichbarkeit des berichteten Zeitpunkts.",
              "Vorgabe einer Person; beeinflusst die Antwort."
            ],
            "correct": [
              0,
              1,
              2,
              3
            ]
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
            "story": "Ein authentisches Foto zeigt Jonas um 20:10:30 in der Küche. Dein Team bestätigt unabhängig: Der tödliche Schlag geschah erst nach Viktors letzter lebender Sprachaufnahme um 20:10:00. Zwischen dieser Aufnahme und dem Foto konnte niemand den einzigen Weg vom Arbeitszimmer zur Küche rechtzeitig zurücklegen. Seit dem Foto wurde Jonas dort ununterbrochen gesehen.",
            "question": "Welche gemeinsame Kette trägt Jonas’ Entlastung?",
            "hint": "Eine Quelle liefert den Tatbeginn, eine die Weggrenze, eine den späteren Standort.",
            "reveal": "Zusammen schließen Sprachaufnahme, geprüfte Weggrenze und fortgesetztes Küchenalibi Jonas für den tödlichen Schlag aus.",
            "note": "Zusammen schließen Sprachaufnahme, geprüfte Weggrenze und fortgesetztes Küchenalibi Jonas für den tödlichen Schlag aus.",
            "kind": "Ermitteln",
            "type": "multi",
            "items": [
              "Viktor lebte noch vor dem Küchenfoto.",
              "Die geprüfte Weggrenze schließt einen rechtzeitigen Wechsel nach einem späteren Schlag aus.",
              "Jonas bleibt danach durchgehend in der Küche.",
              "Ein einzelnes Foto beweist immer den gesamten Abend.",
              "Die Stimme beweist allein, wo Jonas war."
            ],
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "title": "Bens Empfang",
            "story": "Ben behauptet: „Um 20:12 habe ich schon am Empfang unterschrieben.“ Seine Unterschrift steht im Besucherbuch in einer eigenen Zeile mit dem beim Unterschreiben automatisch erzeugten Zeitstempel 20:18. Die Empfangskraft bestätigt, dass sie ihn beim Unterschreiben sah. Das Buch wird fortlaufend geführt und der Zeitstempel ist korrekt. Du lässt eine Pause entstehen. Ben antwortet auf die Stille, bevor du eine Frage stellst: „Die Uhr dort geht bestimmt falsch.“ Du bleibst bei den überprüften Angaben. Eine hektische Reaktion ist ein Ansatz für die nächste Frage, kein Beweis. Nur die ausdrücklich behauptete Unterschrift und die überprüfte Korrektheit des Stempels werden geprüft.",
            "question": "Welche der folgenden Behauptungen widerlegt der überprüfte Buchbefund unmittelbar? Wähle alle widerlegten Behauptungen.",
            "hint": "Prüfe jede Aussage einzeln gegen die Quellen. Eine plausible Ergänzung ist nicht automatisch ein belegter Schluss.",
            "reveal": "Widerlegt sind die Unterschrift um 20:12 und ein verspäteter Stempel. Sein anderer Aufenthaltsort um 20:12 folgt daraus nicht.",
            "note": "Ben behauptete, um 20:12 unterschrieben zu haben. Bestätigt ist seine Unterschrift um 20:18; sein Aufenthaltsort um 20:12 folgt daraus nicht.",
            "kind": "Ermitteln",
            "type": "multi",
            "items": [
              "Ben unterschrieb bereits um 20:12.",
              "Ben unterschrieb erst um 20:18.",
              "Der Zeitstempel dieser Unterschrift ist sechs Minuten verspätet.",
              "Ben hielt sich um 20:12 irgendwo im Empfangsbereich auf.",
              "Ben ging zwischen 20:12 und 20:18 an einen anderen Ort."
            ],
            "correct": [
              0,
              2
            ]
          },
          {
            "title": "Die Uhr auf dem Foto",
            "story": "Auf demselben Kontrollfoto stehen Küchenwanduhr und kalibrierte Referenzuhr. Die Abgleichliste deines Teams ordnet die Küchenanzeige „20:08“ bereits der Referenz „20:11“ zu. Die originale Datei ist gesichert. Ben legt nur den ausgeschnittenen Küchenwert vor und behauptet, beide Uhren hätten denselben Wert gezeigt.",
            "question": "Welche Quellenkombination widerlegt seine konkrete Behauptung?",
            "hint": "Du musst die Uhrwerte nicht umrechnen. Prüfe, welche Quellen ihren Zusammenhang belegen.",
            "reveal": "Vollständiges Foto und Abgleichliste belegen unterschiedliche Anzeigen. Ein Ausschnitt derselben Uhr liefert keinen unabhängigen Vergleich.",
            "note": "Vollständiges Foto und Abgleichliste belegen unterschiedliche Anzeigen. Ein Ausschnitt derselben Uhr liefert keinen unabhängigen Vergleich.",
            "kind": "Zeit korrigieren",
            "type": "multi",
            "items": [
              "Vollständiges Kontrollfoto mit beiden Anzeigen.",
              "Geprüfte Abgleichliste derselben beiden Uhren.",
              "Ein weiterer Ausschnitt derselben Küchenanzeige.",
              "Bens Erinnerung an eine einzelne Uhr."
            ],
            "correct": [
              0,
              1
            ]
          },
          {
            "title": "Passt der Rundweg?",
            "story": "Ben schildert einen Rundweg: erst Empfang, dann Arbeitszimmer, dann Küche, danach wieder Empfang. Die Empfangskraft sah ihn beim ersten Aufenthalt; die Gastgeberin bestätigt einen Küchenaufenthalt. Beide Berichte enthalten keine durchgehende Beobachtung des Wegs. Ben nennt zusätzlich ein Gespräch im Arbeitszimmer.",
            "question": "Welche Behauptungen bleiben durch diese Randbeobachtungen offen?",
            "hint": "Ein beobachteter Anfang und ein beobachtetes Ende sind keine vollständige Wegaufzeichnung.",
            "reveal": "Die Randorte sind bestätigt; Gespräch, Zwischenstationen und durchgehender Weg sind es nicht.",
            "note": "Die Randorte sind bestätigt; Gespräch, Zwischenstationen und durchgehender Weg sind es nicht.",
            "kind": "Wegzeiten",
            "type": "multi",
            "items": [
              "Das behauptete Gespräch im Arbeitszimmer fand tatsächlich statt.",
              "Die Empfangskraft sah Ben am Empfang.",
              "Der gesamte Weg wurde ohne Unterbrechung beobachtet.",
              "Die Gastgeberin sah Ben in der Küche.",
              "Welche Zwischenstationen Ben tatsächlich aufsuchte."
            ],
            "correct": [
              0,
              2,
              4
            ]
          },
          {
            "title": "Der Ausschnitt im Besucherbuch",
            "story": "Ben zeigt dir ein Foto seiner Unterschrift ohne den Rand des Buchs. Das gesicherte Original enthält den korrekten Zeitstempel 20:18 und die fortlaufende Seitenfolge.",
            "question": "Welche beiden Quellen liefern zusammen den vollständigen Zeitstempel und eine unabhängige Identifizierung der unterschreibenden Person?",
            "hint": "Prüfe jede Aussage einzeln gegen die Quellen. Eine plausible Ergänzung ist nicht automatisch ein belegter Schluss.",
            "reveal": "Das vollständige Original belegt Zeitstempel und Seitenfolge. Die Empfangskraft bestätigt unabhängig, dass Ben diese Zeile unterschrieb. Zusammen prüfen die Quellen sowohl die Zeit als auch die Person.",
            "note": "Der beschnittene Buchausschnitt ersetzt das Original mit Zeitstempel nicht.",
            "kind": "Dokumentvergleich",
            "type": "multi",
            "items": [
              "Originalbuch mit vollständigem Zeitstempel und Seitenfolge.",
              "Bens beschnittenes Bild derselben Zeile.",
              "Aussage der Empfangskraft über die beobachtete Unterschrift.",
              "Bens Erinnerung, wann er angekommen sei.",
              "Vergleich zweier Ausschnitte aus Bens identischem Foto."
            ],
            "correct": [
              0,
              2
            ]
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
            "title": "Viktors Symbolverschluss",
            "story": "Am Archivkasten sind die Symbolkarten ROSE, SCHLÜSSEL, FEDER und SPIEGEL befestigt. Der Merkzettel nennt drei Regeln: Die Feder liegt unmittelbar rechts vom Schlüssel. Die Rose steht links vom Schlüssel. Der Spiegel steht ganz rechts. Jede Karte kommt genau einmal vor.",
            "question": "Welches Symbol steht ganz links?",
            "hint": "Setze zuerst das feste Nachbarpaar ein. Prüfe dann, wo Rose und Spiegel noch Platz haben.",
            "reveal": "Die einzige Reihenfolge ist ROSE–SCHLÜSSEL–FEDER–SPIEGEL. Der Zusatzverschluss öffnet sich mit der linken Symbolkarte; die Belegkopien werden gesichert.",
            "note": "Die einzige Reihenfolge ist ROSE–SCHLÜSSEL–FEDER–SPIEGEL. Der Zusatzverschluss öffnet sich mit der linken Symbolkarte; die Belegkopien werden gesichert.",
            "kind": "Kombinieren",
            "type": "input",
            "accepted": [
              "ROSE"
            ],
            "normalize": "text",
            "label": "Deine Schlussfolgerung"
          },
          {
            "title": "Ein doppelter Verkauf",
            "story": "In den Kopien taucht dieselbe Vase zweimal auf: Inventarnummer R-17, einmal verkauft an Frau Sommer und einmal an Herrn Lind. Es gibt nachweislich nur ein Original mit dieser Nummer. Beide Zahlungen gingen auf das Geschäftskonto ein. Die Unterlagen tragen Bens Freigabe.",
            "question": "Welche Quellen müssen gemeinsam vorliegen, damit nicht nur eine doppelte Zeile, sondern zwei bezahlte Verkäufe desselben Originals dokumentiert sind?",
            "hint": "Prüfe jede Aussage einzeln gegen die Quellen. Eine plausible Ergänzung ist nicht automatisch ein belegter Schluss.",
            "reveal": "Dasselbe Einzelstück wurde zweimal verkauft. Viktor hatte die Doppelverkäufe entdeckt. Ben verantwortete die Freigaben – ein nachvollziehbares Motiv taucht auf.",
            "note": "R-17 wurde als dasselbe Original zweimal verkauft; beide Unterlagen tragen Bens Freigabe.",
            "kind": "Ermitteln",
            "type": "multi",
            "items": [
              "Beide Verkaufsrechnungen mit derselben Inventarnummer und verschiedenen Käufern.",
              "Bestätigte Zahlungseingänge für beide Rechnungen.",
              "Inventarnachweis, dass R-17 genau ein Original bezeichnet.",
              "Allein zwei ähnlich formulierte Zeilen.",
              "Allein Bens Unterschrift ohne Rechnungsgegenstand."
            ],
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "title": "Die zweite Verschlüsselung",
            "story": "Im Kasten liegt eine Merkhilfe zu einem Unterlagentyp: „Er wurde erst nach dem vollständig fertiggestellten Original angefertigt und bewahrt dessen Wortlaut samt Unterschrift. Sein eigener Fund beweist nicht, dass das Original noch vorhanden ist.“ Zur Auswahl stehen Entwurf, Kopie, Quittung und Inhaltsverzeichnis.",
            "question": "Welcher Begriff passt zu beiden Bedingungen?",
            "hint": "Achte sowohl auf die mögliche Wortgleichheit als auch auf die getrennte Existenz des Originals.",
            "reveal": "Eine KOPIE kann denselben Wortlaut bewahren, auch wenn das Original fehlt. Ein Entwurf oder Inhaltsverzeichnis erfüllt diese beiden Bedingungen nicht notwendig.",
            "note": "Eine KOPIE kann denselben Wortlaut bewahren, auch wenn das Original fehlt. Ein Entwurf oder Inhaltsverzeichnis erfüllt diese beiden Bedingungen nicht notwendig.",
            "kind": "Entschlüsseln",
            "type": "input",
            "accepted": [
              "KOPIE"
            ],
            "normalize": "text",
            "label": "Deine Schlussfolgerung"
          },
          {
            "title": "Der Verkauf hinter der Übersicht",
            "story": "Die Vase R-17 ist ein einziges Original. Zwei authentische Verkaufsrechnungen nennen unterschiedliche Käufer und jeweils eine bestätigte Zahlung. Ein separater Beleg zeigt eine teilweise Rückzahlung an einen dieser Käufer. Die Erlösübersicht enthält dagegen nur den anderen Verkauf.",
            "question": "Welche Aussagen bleiben auch ohne Berechnung der Geldbeträge gültig?",
            "hint": "Unterscheide Vertrag, Zahlung, Rückzahlung und Übersicht. Diese Quellen erfüllen verschiedene Aufgaben.",
            "reveal": "Der zweite Verkauf und sein Zahlungsweg bleiben trotz Teilrückzahlung zu prüfen. Die einseitige Erlösübersicht ersetzt diese Prüfung nicht.",
            "note": "Der zweite Verkauf und sein Zahlungsweg bleiben trotz Teilrückzahlung zu prüfen. Die einseitige Erlösübersicht ersetzt diese Prüfung nicht.",
            "kind": "Buchungen prüfen",
            "type": "multi",
            "items": [
              "Die teilweise Rückzahlung beseitigt den zweiten Vertragsvorgang nicht automatisch.",
              "Die Erlösübersicht bildet die beiden bestätigten Verkäufe nicht vollständig ab.",
              "Zwei Rechnungen beweisen ohne Inventarnachweis zwei verschiedene Originale.",
              "Für beide Käufer müssen die Vertrags- und Zahlungswege geprüft werden.",
              "Ein Rückzahlungsbeleg ist ein Nachweis, dass niemals eine zweite Zahlung einging."
            ],
            "correct": [
              0,
              1,
              3
            ]
          },
          {
            "title": "Nicht jede doppelte Zeile ist Betrug",
            "story": "Eine andere Vase, R-18, steht in zwei Zeilen: „Reservierung, keine Zahlung“ und „Verkauf, Zahlung bestätigt“. R-17 dagegen steht auf zwei bestätigten Verkaufsrechnungen an unterschiedliche Käufer.",
            "question": "Ordne den Einträgen die nötige Prüfung zu.",
            "hint": "Frage bei jeder Zuordnung: Was belegt diese Quelle unmittelbar, und welche stärkere Behauptung bleibt noch offen?",
            "reveal": "Bei R-18 müssen Reservierung und tatsächliche Zahlung getrennt werden. Bei R-17 sind zwei bezahlte Verkäufe desselben Originals zu prüfen. Eine identische Rechnungskopie ist dagegen kein weiterer Verkauf.",
            "note": "R-18 ist Reservierung plus Verkauf; R-17 hat zwei bestätigte Verkäufe.",
            "kind": "Muster erkennen",
            "type": "match",
            "left": [
              "R-18: Reservierung und Verkauf",
              "R-17: zwei bezahlte Verkäufe eines Originals",
              "Identische Kopie derselben Rechnung"
            ],
            "right": [
              "Zahlungsvorgänge zählen, nicht bloß Inventarzeilen.",
              "Zwei Vertrags- und Zahlungsvorgänge mit der Zahl vorhandener Originale vergleichen.",
              "Dokumentkopien nicht als zusätzlichen Verkauf zählen."
            ],
            "correct": [
              0,
              1,
              2
            ]
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
            "story": "Viktor kündigt Ben in einer authentischen Nachricht die Übergabe der Doppelverkaufsbelege an die Polizei an. Ben antwortet, er werde ins Arbeitszimmer kommen. Die Antwort stammt aus demselben gesicherten Verlauf.",
            "question": "Welche Aussagen stützt der Verlauf unmittelbar?",
            "hint": "Eine Ankündigung ist zunächst ein Plan, kein beobachteter Besuch.",
            "reveal": "Konflikt und Besuchsankündigung sind dokumentiert. Die tatsächliche Begegnung und Tatzeit brauchen eigene Belege.",
            "note": "Konflikt und Besuchsankündigung sind dokumentiert. Die tatsächliche Begegnung und Tatzeit brauchen eigene Belege.",
            "kind": "Ermitteln",
            "type": "multi",
            "items": [
              "Ben reagierte auf die Konfliktnachricht.",
              "Ben kündigte eine Begegnung an.",
              "Ben führte den angekündigten Besuch damit schon nachweislich durch.",
              "Die konkrete Tatminute folgt aus dem Wortlaut.",
              "Ein möglicher Konflikthintergrund ist dokumentiert."
            ],
            "correct": [
              0,
              1,
              4
            ]
          },
          {
            "title": "Wer wollte die Akte verschwinden lassen?",
            "story": "Viktor war Eigentümer der Vase. Clara erhielt die Blumenkosten unabhängig vom Verkauf. Jonas bekam ein festes Gehalt. Ben war für die von ihm freigegebenen Verkäufe verantwortlich. Die Polizei bestätigt, dass die fehlenden Originalseiten seine Freigaben enthielten.",
            "question": "Welche Aussagen bilden eine belastbare Verbindung von Interesse, Zuständigkeit und bedrohten Unterlagen?",
            "hint": "Prüfe jede Aussage einzeln gegen die Quellen. Eine plausible Ergänzung ist nicht automatisch ein belegter Schluss.",
            "reveal": "Bens Freigaben, die fehlenden Blätter und Viktors angekündigte Beweisübergabe verbinden Zuständigkeit und mögliches Interesse am Verschwinden der Akte. Die erhaltenen Kopien machen diese Verbindung weiterhin überprüfbar.",
            "note": "Das Entfernen der Originalseiten hätte Bens dokumentierte Verantwortung verschleiert.",
            "kind": "Ermitteln",
            "type": "multi",
            "items": [
              "Ben gab die betroffenen Verkäufe frei.",
              "Die fehlenden Originalseiten enthielten seine Freigaben.",
              "Viktor hatte die Übermittlung des Betrugsnachweises angekündigt.",
              "Claras unabhängige Blumenkosten verändern Bens Vertragsverantwortung.",
              "Jonas’ festes Gehalt weist ihn als Verfasser der Freigaben aus."
            ],
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "title": "Die Nachricht in Fragmenten",
            "story": "Ein beschädigter Ausdruck der authentischen Nachricht enthält fünf Fragmente: 1=„alles der Polizei.“; 2=„bis 20:15“; 3=„Morgen übergebe ich“; 4=„Gib mir“; 5=„eine Erklärung.“ Der rekonstruierte Abschnitt beginnt mit der Frist und endet mit der angekündigten Übergabe. Alle Fragmente gehören zur selben Nachricht und müssen genau einmal verwendet werden.",
            "question": "Fünf Fragmente müssen ohne Ergänzung die Nachricht bilden. Gib ihre Kennziffern ohne Trennzeichen ein.",
            "hint": "Übersetze jede Bedingung in eine Gleichung oder eine Fragmentfolge. Prüfe am Ende sämtliche Bedingungen an allen Stellen.",
            "reveal": "„Gib mir / bis 20:15 / eine Erklärung. / Morgen übergebe ich / alles der Polizei.“ Die Fragmentfolge lautet 42531.",
            "note": "Nachrichtenfolge: Frist bis 20:15, danach angekündigte Übergabe am Folgetag.",
            "kind": "Rekonstruieren",
            "type": "input",
            "accepted": [
              "42531"
            ],
            "normalize": "code",
            "label": "Deine Antwort"
          },
          {
            "title": "Motiv oder Gelegenheit?",
            "story": "Du ordnest die bisher bekannten Angaben nach ihrer Aussagekraft: den drohenden Betrugsnachweis, Bens Besuchsankündigung und seine spätere Unterschrift. Außerdem prüfst du allgemein, welche Aussagekraft eine frische Stoffspur an einer Tatwaffe hätte. Eine solche zusätzliche Spur ist zu diesem Zeitpunkt noch nicht gefunden.",
            "question": "Ordne jede Angabe ihrer Reichweite zu.",
            "hint": "Frage bei jeder Zuordnung: Was belegt diese Quelle unmittelbar, und welche stärkere Behauptung bleibt noch offen?",
            "reveal": "Ein drohender Betrugsnachweis kann ein Motiv liefern. Eine Besuchsankündigung belegt zunächst nur einen Plan. Die spätere Unterschrift ist kein Alibi für die Zeit davor. Eine mögliche Materialspur müsste auf Herkunft, Sicherung und Zeitbezug geprüft werden.",
            "note": "Motiv und angekündigte Begegnung werden getrennt bewertet.",
            "kind": "Beweise ordnen",
            "type": "match",
            "left": [
              "Drohend bevorstehender Betrugsnachweis",
              "Ben kündigt den Besuch an",
              "Ben unterschreibt später am Empfang",
              "Hypothetische frische Stoffspur an einer Tatwaffe"
            ],
            "right": [
              "Mögliches Motiv, kein Tatbeweis für sich.",
              "Geplante Begegnung, keine alleinige Anwesenheitsbestätigung.",
              "Spätere Beobachtung, kein rückwirkendes Alibi.",
              "Sachspur, deren Herkunft und Zeitbezug zu prüfen sind."
            ],
            "correct": [
              0,
              1,
              2,
              3
            ]
          },
          {
            "title": "Die fehlenden Antworten",
            "story": "Ben sagt: „Viktor hat mir nie eine Frist gesetzt.“ Du besitzt seine authentische Antwort von 19:57 auf Viktors Nachricht von 19:55.",
            "question": "Welche Kombination prüft Bens Aussage „nie eine Frist“ ohne die Begegnung als schon bewiesen vorauszusetzen?",
            "hint": "Prüfe jede Aussage einzeln gegen die Quellen. Eine plausible Ergänzung ist nicht automatisch ein belegter Schluss.",
            "reveal": "Du legst die beiden Nachrichten nebeneinander. Ben muss seine Aussage anhand eines dokumentierten Widerspruchs erklären.",
            "note": "Bens Leugnung der Frist widerspricht dem authentischen Nachrichtenverlauf.",
            "kind": "Verhören",
            "type": "multi",
            "items": [
              "Authentische Nachricht von 19:55 mit dem Fristwortlaut.",
              "Authentische Antwort von 19:57 im selben Nachrichtenverlauf.",
              "Die Frage nach seiner Erklärung genau dieses Verlaufs.",
              "Die Behauptung, seine Antwort beweise schon den tödlichen Schlag.",
              "Die Annahme, ein Antwortender habe jede Nachricht vollständig gelesen."
            ],
            "correct": [
              0,
              1,
              2
            ]
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
            "question": "Welche Befunde stützen gemeinsam die engere Rekonstruktion aus Gegenstand, Materialanschluss und Ausschluss der Mantelalternative?",
            "hint": "Prüfe jede Aussage einzeln gegen die Quellen. Eine plausible Ergänzung ist nicht automatisch ein belegter Schluss.",
            "reveal": "Das abgerissene Stück lässt sich Bens Schal zuordnen. Damit besteht eine direkte Materialverbindung zwischen seinem Schal und der Tatwaffe. Du hältst fest, was der Vergleich zeigt, ohne daraus allein den gesamten Tatablauf abzuleiten.",
            "note": "Tatwaffe verborgen im Pflanzkasten; Stoffstück an der Unterseite passt exakt an Bens Schalriss.",
            "kind": "Ermitteln",
            "type": "multi",
            "items": [
              "Exakter Anschluss der Risskante an Bens Schal.",
              "Andere Webstruktur von Jonas’ Mantel.",
              "Dunkelblaue Farbe beider Kleidungsstücke allein.",
              "Tatspurenvergleich des gefundenen Briefbeschwerers.",
              "Versteck in einem Pflanzkasten ohne Materialvergleich."
            ],
            "correct": [
              0,
              1,
              3
            ]
          },
          {
            "title": "Die Spur richtig einordnen",
            "story": "Im ersten Gespräch erklärt Ben den losen Tischfaden: „Ich war schon nachmittags am Schreibtisch. Der Faden könnte alt sein.“ Das wäre für diesen Faden möglich. Inzwischen liegt aber eine weitere Spur vor: Das abgerissene Stück an der Unterseite der Tatwaffe passt exakt in seinen Schalriss. Ein vollständiges, scharfes Foto von 19:50 zeigt den Schal noch unbeschädigt.",
            "question": "Welche Aussagen bleiben mit sämtlichen Angaben zur alten Tischspur und zur neuen Tatwaffenspur vereinbar?",
            "hint": "Prüfe jede Aussage einzeln gegen die Quellen. Eine plausible Ergänzung ist nicht automatisch ein belegter Schluss.",
            "reveal": "Der frische Riss und das passende Stück an der Tatwaffe wiegen stärker. Bens Erklärung für einen alten Faden beantwortet diese neue Spur nicht.",
            "note": "Bens Schal war um 19:50 unbeschädigt; seine Erklärung zum alten Faden erklärt den frischen Riss nicht.",
            "kind": "Ermitteln",
            "type": "multi",
            "items": [
              "Der lose Tischfaden könnte vom Nachmittagsbesuch stammen.",
              "Der Schalriss war schon vor dem scharfen Foto um 19:50 vorhanden.",
              "Das passende Stück an der Tatwaffe verlangt eine gesonderte Erklärung.",
              "Der frühe Besuch erklärt automatisch das spätere Abreißen.",
              "Die Tatwaffenspur ersetzt nicht die Prüfung der Tatzeit."
            ],
            "correct": [
              0,
              2,
              4
            ]
          },
          {
            "title": "Die Nummern der Beutel",
            "story": "Vier versiegelte Beutel sind protokolliert: A enthält den losen Tischfaden; B den Stoff an der Tatwaffe; C eine Vergleichsprobe aus Jonas’ Mantel; D Bens Schal mit Riss.",
            "question": "Ordne den drei Prüfaufträgen die jeweils passenden Beutelpaare zu.",
            "hint": "Frage bei jeder Zuordnung: Was belegt diese Quelle unmittelbar, und welche stärkere Behauptung bleibt noch offen?",
            "reveal": "B + D prüft den Anschluss der Risskanten. A + C vergleicht den Tischfaden mit Jonas’ Mantel. B + C vergleicht den Tatwaffenstoff mit diesem Mantel. Die beiden Stofffunde dürfen nicht verwechselt werden.",
            "note": "Direkter Risskantenvergleich: Stoff an der Tatwaffe gegen Bens Schal.",
            "kind": "Spuren zuordnen",
            "type": "match",
            "left": [
              "Exakter Anschluss der Risskanten",
              "Mantel als alternative Quelle des Tischfadens",
              "Webvergleich Tatwaffenstoff gegen Jonas’ Mantel"
            ],
            "right": [
              "B + D",
              "A + C",
              "B + C"
            ],
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "title": "Vorher und nachher",
            "story": "Auf einem gesicherten frühen Foto ist Bens Schal unbeschädigt. Ein späteres Foto der Sicherstellung zeigt denselben Schal mit Riss. Dazwischen liegt die Tat, aber es gibt kein weiteres gesichertes Schalbild.",
            "question": "Welche zeitlichen Aussagen sind durch das Fotopaar allein gerechtfertigt?",
            "hint": "Die Fotos bilden eine Grenze, keine Aufnahme der Beschädigung.",
            "reveal": "Das Fotopaar grenzt die Veränderung ein. Erst der passende Stoff an der Tatwaffe verbindet den Riss zusätzlich mit dem Tatgegenstand.",
            "note": "Das Fotopaar grenzt die Veränderung ein. Erst der passende Stoff an der Tatwaffe verbindet den Riss zusätzlich mit dem Tatgegenstand.",
            "kind": "Zeitfenster",
            "type": "multi",
            "items": [
              "Der Riss entstand erst nach dem frühen Foto.",
              "Er war spätestens bei der späteren Sicherstellung vorhanden.",
              "Er entstand zwingend während der Tat.",
              "Eine spätere Beschädigung nach der Tat ist durch dieses Paar allein ausgeschlossen.",
              "Die Zuordnung zur Tat braucht zusätzlich den Materialanschluss an der Tatwaffe."
            ],
            "correct": [
              0,
              1,
              4
            ]
          },
          {
            "title": "Eine offene Frage",
            "story": "Ben erklärt den Tischfaden mit seinem Besuch am Nachmittag. Du hältst ihm noch keinen Fundort vor. Die Materialprüfung des frischen Stoffstücks an der Tatwaffe liegt bereits vor.",
            "question": "Welche Belege wären nötig, um Bens Nachmittags-Erklärung auch für das Stück an der Tatwaffe zu prüfen?",
            "hint": "Prüfe jede Aussage einzeln gegen die Quellen. Eine plausible Ergänzung ist nicht automatisch ein belegter Schluss.",
            "reveal": "Du bleibst bei der stärkeren Spur. Eine plausible Erklärung für den Tischfaden beantwortet den Materialvergleich nicht.",
            "note": "Die Erklärung zum Tischfaden beantwortet die frische Spur an der Tatwaffe nicht.",
            "kind": "Widerspruch prüfen",
            "type": "multi",
            "items": [
              "Ein glaubwürdiger Nachweis, wann das passende Stück abriss.",
              "Ein Nachweis, ob der Gegenstand damals schon mit diesem Stück in Kontakt kam.",
              "Eine erneute Wiederholung seines Nachmittagsbesuchs.",
              "Ein Abgleich mit dem unbeschädigten Schal auf dem Foto von 19:50.",
              "Ein Urteil allein aus seinem Blick während der Frage."
            ],
            "correct": [
              0,
              1,
              3
            ]
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
            "question": "Stelle die Beweisbereiche zusammen, die Ben belasten, ohne ein Alibi der anderen als direkten Tatbeweis umzudeuten.",
            "hint": "Prüfe jede Aussage einzeln gegen die Quellen. Eine plausible Ergänzung ist nicht automatisch ein belegter Schluss.",
            "reveal": "Ben Falk. Du lässt ihn noch einmal in den Wintergarten bitten. Die Spurensicherung hält den Fundort der Tatwaffe weiterhin geheim. Du beschließt, ihm eine falsche Einzelheit vorzulegen – und auf eine überprüfbare Korrektur zu warten.",
            "note": "Die Belege konzentrieren sich auf Ben Falk; Clara und Jonas sind durch unabhängige Alibis entlastet.",
            "kind": "Rekonstruieren",
            "type": "multi",
            "items": [
              "Überprüfter Widerspruch seiner Unterschriftszeit.",
              "Authentischer Konflikt und angekündigte Begegnung.",
              "Frische, exakt passende Spur an der Tatwaffe.",
              "Claras Nervosität statt ihrer bestätigten Gartenanwesenheit.",
              "Jonas’ Entlastung als alleiniger Beweis gegen Ben."
            ],
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "title": "Der rote Faden",
            "story": "Du führst die bisherigen Zeitbelege zusammen. Ordne Bens Antwort, Viktors letzte lebende Stimme, Jonas’ Küchenfoto, das Ende des Tatzeitfensters und Bens Unterschrift. Die zugehörigen Zeiten stehen in deiner Fallakte.",
            "question": "Ordne die Ereignisse nach ihren Referenzzeiten. Verwende die Hinweise aus früheren Stationen.",
            "hint": "Suche in deiner Fallakte nach den Ausgangszeiten. Gleiche unterschiedliche Uhren ab, bevor du die Karten legst.",
            "reveal": "19:57 → 20:10:00 → 20:10:30 → 20:15 → 20:18. Die Ereignisse belegen eine Reihenfolge, nicht automatisch jeden Aufenthalt Bens.",
            "note": "Zeitliche Kette: Bens Antwort 19:57 → Viktors Stimme 20:10:00 → Jonas’ Foto 20:10:30 → Ende des Tatfensters 20:15 → Unterschrift 20:18.",
            "kind": "Rekonstruieren",
            "type": "order",
            "items": [
              "Bens Antwort auf die Frist",
              "Viktors letzte lebende Stimme",
              "Jonas auf dem Küchenfoto",
              "Ende des gesicherten Tatfensters",
              "Bens Unterschrift am Empfang"
            ],
            "correct": [
              0,
              1,
              2,
              3,
              4
            ]
          },
          {
            "title": "Der Schutz deiner Falle",
            "story": "Du bereitest das Gespräch mit Ben vor. Farbe und Ort der Rosen am Fundort sollen nicht verraten werden. Eine Kollegin schlägt vor, das Fundfoto vor Ben auf den Tisch zu legen.",
            "question": "Welche Maßnahmen erhalten den Prüfwert des geheimen Funddetails?",
            "hint": "Prüfe jede Aussage einzeln gegen die Quellen. Eine plausible Ergänzung ist nicht automatisch ein belegter Schluss.",
            "reveal": "Du hältst den Fundbericht und das Foto zurück. Andernfalls wäre eine spätere genaue Korrektur durch Ben leicht zu erklären.",
            "note": "Fundbild und Fundbericht bleiben vor der Wissensprüfung verborgen.",
            "kind": "Falle vorbereiten",
            "type": "multi",
            "items": [
              "Vor dem Gespräch festhalten, welche Details nicht veröffentlicht wurden.",
              "Das Fundfoto vor Ben verdeckt halten.",
              "Bens korrigierte Angabe vollständig protokollieren.",
              "Ben vor seiner Antwort die Rosenfarbe bestätigen.",
              "Den Fundort erst nach seiner Antwort als Beweis behaupten, ohne vorherige Dokumentation."
            ],
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "title": "Keine Gedanken lesen",
            "story": "Vor dem Gespräch ordnest du Beobachtungen und Behauptungen aus der Fallakte: Bens ruhiges Auftreten, die passende Materialspur, den Widerspruch bei seiner Unterschriftszeit und seine behauptete Abwesenheit während der Tat.",
            "question": "Ordne die Angaben der richtigen Prüfart zu.",
            "hint": "Frage bei jeder Zuordnung: Was belegt diese Quelle unmittelbar, und welche stärkere Behauptung bleibt noch offen?",
            "reveal": "Du stützt die Konfrontation auf den Materialvergleich. Die Falle soll einen weiteren prüfbaren Hinweis liefern.",
            "note": "Die finale Konfrontation beruht auf Sachbelegen statt auf vermeintlichem Gedankenlesen.",
            "kind": "Beweise abwägen",
            "type": "match",
            "left": [
              "Ruhiger Gesichtsausdruck",
              "Frischer Materialanschluss",
              "Widerspruch zur Unterschriftszeit",
              "Behauptete Abwesenheit während der Tat"
            ],
            "right": [
              "Verhalten beschreiben, ohne daraus Schuld abzuleiten.",
              "Herkunft, Sicherung und zeitlichen Zusammenhang des Stoffstücks prüfen.",
              "Authentische Zeitquelle und Identifizierung vergleichen.",
              "Unabhängige, ausreichend durchgehende Ortsbelege verlangen."
            ],
            "correct": [
              0,
              1,
              2,
              3
            ]
          },
          {
            "title": "Ein Detail zu viel",
            "story": "Im aufgezeichneten Gespräch am nächsten Morgen sagst du ruhig: „Der Briefbeschwerer lag draußen unter den roten Rosen.“ Ben lacht kurz. „Weiße Rosen. Im Flur. Sie hätten unter dem Wurzelballen suchen müssen.“ Du hast ihm absichtlich einen falschen Fundort genannt. Die richtigen Angaben – vor allem das Versteck unter dem Wurzelballen – wurden seit dem Fund geheim gehalten. Ben war bei der Suche nicht anwesend und bekam keine Fundberichte. Seine Korrektur ist ein neuer Ansatz. Du prüfst, woher er dieses Wissen haben könnte.",
            "question": "Welche gemeinsamen Bedingungen machen Bens Korrektur zu einem belastbaren zusätzlichen Hinweis?",
            "hint": "Prüfe jede Aussage einzeln gegen die Quellen. Eine plausible Ergänzung ist nicht automatisch ein belegter Schluss.",
            "reveal": "Du schiebst das Foto des unbeschädigten Schals von 19:50 neben den Materialvergleich. „Woher wussten Sie von dem Versteck, Ben?“ Die Kombination aus Fundwissen, Tatwaffenspur, falscher Alibizeit und Motiv bringt ihn zum Geständnis: Er wollte die Betrugsbelege an sich nehmen, schlug Viktor im Streit, riss die Seiten heraus und vergrub den Briefbeschwerer im Pflanzkasten unter dem Wurzelballen der weißen Rosen. Dein Team überprüft die Einzelheiten seines Geständnisses anhand der gesicherten Spuren.",
            "note": "Ben nennt geheim gehaltene Funddetails, einschließlich des Verstecks unter dem Wurzelballen. Sein anschließendes Geständnis wird mit den gesicherten Spuren abgeglichen.",
            "kind": "Psychologisch ermitteln",
            "type": "multi",
            "items": [
              "Das präzise Wurzelballen-Detail war vorher dokumentiert und geheim.",
              "Ben war bei der Suche nicht anwesend.",
              "Er korrigierte Farbe und Innenort, obwohl die Frage andere Angaben enthielt.",
              "Die Korrektur allein ersetzt Materialvergleich und Alibiprüfung.",
              "Eine mögliche anderweitige Informationsquelle wird zusätzlich geprüft."
            ],
            "correct": [
              0,
              1,
              2,
              4
            ]
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
    "cover": "assets/szene-1.webp",
    "difficulty": "Anspruchsvoll"
  },
  {
    "id": "letzte-vorstellung",
    "version": 4,
    "title": "Die letzte Vorstellung",
    "subtitle": "Ein vorbereiteter Todesfall. Deine Entscheidungen verändern die Ermittlung – und ihr Ende.",
    "tag": "Episode 02 · Theater Morgenstern",
    "duration": "Etwa 75–120 Minuten · abhängig von Rätseltempo und Hinweisen",
    "description": "Maus untersucht eine tödliche Premiere. Sichere Spuren, führe Gespräche und wähle deinen Abschlussbericht. Verschiedene Ermittlungswege führen zu vier möglichen Enden. Anspruchsvolle Fassung: Quellen kombinieren, abgeglichene Zeitbelege prüfen und Beweisketten prüfen. Ohne Rechenaufgaben: Aussagen kombinieren und Zusammenhänge prüfen.",
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
            "question": "Ein Aktenentwurf behauptet: „Die Aufnahme beweist den Zusammenbruch um 21:10, also wurde die Kulisse um 21:10 verändert.“ Welche Korrektur hält Beobachtung und Ursache auseinander?",
            "hint": "Trenne den beobachteten Zusammenbruch vom möglichen Zeitpunkt seiner Vorbereitung.",
            "reveal": "Die Aufnahme zeigt Ort und Ablauf des Vorfalls, aber nicht dessen Ursache. Du hältst beide Fragen getrennt.",
            "note": "Vorfall um 21:10 auf der Seitenbühne; Ursache zunächst offen.",
            "kind": "Beobachten",
            "type": "choice",
            "options": [
              "Die Vorfallzeit ist belegt; die Veränderung kann vorher erfolgt sein und benötigt eigene Zustandsbelege.",
              "Die Vorfallzeit muss stattdessen 19:08 gewesen sein, weil dann abgenommen wurde.",
              "Die frühere Veränderung ist bereits durch Adrians Eintritt genau datiert.",
              "Die Aufnahme widerlegt jeden vorherigen Eingriff."
            ],
            "answer": 0
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
            "story": "Die Einsatzliste unterscheidet regulären Plan und späteren Änderungszettel. Regulär wartet Adrian bei K vor Szene 27. Der Änderungszettel schickt ihn nach M. Szene 26 ist beendet; Szene 27 beginnt erst danach. Die Änderung betrifft nur Adrians Warteort, nicht den Szenenbeginn.",
            "question": "Welche Angaben widersprechen der Behauptung, der Änderungszettel sei nur eine Wiederholung des regulären Plans?",
            "hint": "Ein unveränderter Szenenbeginn hebt einen veränderten Aufenthaltsort nicht auf.",
            "reveal": "K und M sind verschiedene Warteorte. Der Zettel verändert Adrians Position, auch wenn der geplante Szenenbeginn gleich bleibt.",
            "note": "K und M sind verschiedene Warteorte. Der Zettel verändert Adrians Position, auch wenn der geplante Szenenbeginn gleich bleibt.",
            "kind": "Zeitablauf",
            "type": "multi",
            "items": [
              "Der reguläre Warteort ist K.",
              "Der Änderungszettel nennt M.",
              "Der Beginn von Szene 27 bleibt gleich.",
              "Dasselbe Stück wird weiterhin aufgeführt."
            ],
            "correct": [
              0,
              1
            ]
          },
          {
            "title": "Das Programm als Wegweiser",
            "story": "Adrians Programm enthält Wortfragmente: SK, RI, PT. Die Notiz verlangt, dass „RI“ direkt vor „PT“ liegt und „SK“ vor beiden. Alle Fragmente gehören zu einem gesuchten Unterlagentyp.",
            "question": "Welches Wort ergibt sich?",
            "hint": "Das feste Nachbarpaar bestimmt das Wortende.",
            "reveal": "SK + RI + PT ergibt SKRIPT. Die Merkhilfe verweist auf Adrians Textunterlagen.",
            "note": "SK + RI + PT ergibt SKRIPT. Die Merkhilfe verweist auf Adrians Textunterlagen.",
            "kind": "Entschlüsseln",
            "type": "input",
            "accepted": [
              "SKRIPT"
            ],
            "normalize": "text",
            "label": "Deine Schlussfolgerung"
          },
          {
            "title": "Wo beginnst du?",
            "story": "Dein Team sichert den abgesperrten Bereich grundsätzlich ab. Du kannst selbst zuerst die Kulisse untersuchen oder die frühen Unterlagen verfolgen. Beide Wege bleiben möglich, führen aber zu unterschiedlichen ersten Ermittlungsaufgaben.",
            "question": "Welchem Ansatz folgst du zuerst?",
            "hint": "Diese Entscheidung hat keine vorgegebene richtige Antwort. Ihr Verlauf wird in der Akte festgehalten.",
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
            "story": "Ein Foto zeigt das Kontrollsiegel noch intakt; ein späteres zeigt es beschädigt. Die Materialprüfung schließt ein früheres unbemerktes Öffnen und Wiederverschließen aus. Der ergänzende Prüfbericht grenzt den Eingriff bereits auf nach 19:12 bis spätestens 19:16 ein. Diese Zeiten sind fertig abgeglichen.",
            "question": "Welche Aussagen dürfen daraus abgeleitet werden?",
            "hint": "Verwende die fertige Eingrenzung als Beleg; frage, was sie darüber hinaus nicht zeigt.",
            "reveal": "Geprüftes Eingriffsfenster: nach 19:12 bis spätestens 19:16. Die Person und genaue Minute folgen aus diesen Zustandsbelegen allein nicht.",
            "note": "Geprüftes Eingriffsfenster: nach 19:12 bis spätestens 19:16. Die Person und genaue Minute folgen aus diesen Zustandsbelegen allein nicht.",
            "kind": "Zeitfenster",
            "type": "multi",
            "items": [
              "Die relevante Veränderung liegt zwischen den geprüften Zuständen.",
              "Der ergänzende Bericht verengt das grobe Fotofenster.",
              "Das beschädigte Siegel identifiziert für sich die Person.",
              "Ein früheres verdecktes Öffnen bleibt trotz des ausdrücklichen Materialausschlusses gleich gut belegt.",
              "Die genaue Minute ist innerhalb der bestätigten Grenze noch offen."
            ],
            "correct": [
              0,
              1,
              4
            ]
          },
          {
            "title": "Die einzige Tür",
            "story": "Der Bühnenplan und die gesicherten Zugangsaufnahmen zeigen: Garderobenflur ↔ Seitenbühne; Seitenbühne ↔ Hauptbühne. Der direkte Außenzugang zur Seitenbühne war von 19:00 bis 19:30 versiegelt. Die Hauptbühne war in dieser Zeit durchgehend gefilmt; niemand ging von dort zur Seitenbühne. Der Garderobenausgang führt zunächst in den Garderobenflur; die Kulisse steht hinter der Seitenbühnentür.",
            "question": "Welche Aussagen über die möglichen Zugangswege und die Identifizierung einer Person sind mit den gesicherten Quellen vereinbar?",
            "hint": "Prüfe jede Aussage einzeln gegen die Quellen. Eine plausible Ergänzung ist nicht automatisch ein belegter Schluss.",
            "reveal": "Der Weg führt vom Garderobenausgang in den Garderobenflur, durch die Seitenbühnentür und zur dort stehenden Kulisse. Der Weg nennt noch keine handelnde Person.",
            "note": "Für das Vorbereitungsfenster bleibt der Zugang über den Garderobenflur.",
            "kind": "Weg rekonstruieren",
            "type": "multi",
            "items": [
              "Garderobenflur zur Seitenbühne.",
              "Direkter Außenzugang zwischen 19:12 und 19:16.",
              "Hauptbühne zur Seitenbühne ohne gefilmten Übertritt.",
              "Ein Garderobenzugang allein identifiziert noch keine Person.",
              "Das Außensiegel belegt jeden Eintritt durch den Garderobenflur."
            ],
            "correct": [
              0,
              3
            ]
          },
          {
            "title": "Die fremde Freigabe",
            "story": "Nils’ unterschriebene Sicherheitsabnahme von 19:08 meldet einen geprüften Zustand. Später wurde eine weitere Karte in die Wartungsmappe gelegt: „Zusatzprüfung freigegeben“. Sie trägt keinen Namen und keine prüfbare Unterschrift.",
            "question": "Welche zwei Angaben sind in der Fallakte tatsächlich belegt? Wähle beide.",
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
            "question": "Ordne die Befunde den Grenzen ihrer Aussagekraft zu.",
            "hint": "Frage bei jeder Zuordnung: Was belegt diese Quelle unmittelbar, und welche stärkere Behauptung bleibt noch offen?",
            "reveal": "Erst zusammen ergeben Materialprüfung und Fotos einen zeitlich eingegrenzten Eingriff.",
            "note": "Siegelbefund und Fotozeiten sind verschiedene Teile der Rekonstruktion.",
            "kind": "Beweise ordnen",
            "type": "match",
            "left": [
              "Beschädigtes Kontrollsiegel",
              "Fotos 19:12 und 19:18",
              "Materialanalyse 19:10–19:16",
              "Fehlender Name auf einer Karte"
            ],
            "right": [
              "Belegt Öffnen, nicht allein die Minute.",
              "Begrenzen den Zustandswechsel, nicht die Person.",
              "Verengt zusammen mit den Fotos das mögliche Fenster.",
              "Verhindert eine unmittelbare Zuordnung zur freigebenden Person."
            ],
            "correct": [
              0,
              1,
              2,
              3
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
            "story": "Mara ist vor, während und nach dem bestätigten Eingriffsfenster durchgehend im Probenraum gefilmt. Ein Gast bestätigt zusätzlich ihr Probenprogramm, sah sie aber nicht die ganze Zeit.",
            "question": "Welche Quelle trägt welche Aussage?",
            "hint": "Der Inhalt einer Probe und die durchgehende Anwesenheit sind verschiedene Fragen.",
            "reveal": "Die Aufnahme entlastet Mara im Eingriffsfenster. Der zusätzliche Programmbericht ersetzt ihre vollständige Ortsaufnahme nicht.",
            "note": "Die Aufnahme entlastet Mara im Eingriffsfenster. Der zusätzliche Programmbericht ersetzt ihre vollständige Ortsaufnahme nicht.",
            "kind": "Alibi prüfen",
            "type": "match",
            "left": [
              "Durchgehende, abgeglichene Aufnahme",
              "Gastbericht über das Programm",
              "Aufnahme umfasst das gesamte Eingriffsfenster"
            ],
            "right": [
              "Lückenloser Ortsbeleg.",
              "Bestätigung des Probeninhalts ohne vollständiges Ortsalibi.",
              "Verbindung des Ortsbelegs mit der relevanten Tatphase."
            ],
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "title": "Nils’ scheinbare Lücke",
            "story": "Zwei Mitarbeiter bestätigen Nils erst ab dem Beginn des Entladens am Lieferhof. Das bestätigte Eingriffsfenster begann früher. Über die Zeit vor ihrem Eintreffen liegt noch keine gesicherte Beobachtung vor.",
            "question": "Welche Aussage ist mit diesem vorläufigen Quellenstand vereinbar?",
            "hint": "Fehlende Bestätigung und widerlegte Behauptung sind nicht dasselbe.",
            "reveal": "Nils ist für die spätere Lieferphase bestätigt. Der frühere Abschnitt bleibt bis zur vollständigen Aufnahme offen.",
            "note": "Nils ist für die spätere Lieferphase bestätigt. Der frühere Abschnitt bleibt bis zur vollständigen Aufnahme offen.",
            "kind": "Zeitfenster",
            "type": "multi",
            "items": [
              "Ein früherer Abschnitt muss noch unabhängig geprüft werden.",
              "Die spätere Anwesenheit ist bestätigt.",
              "Die spätere Anwesenheit belegt schon die ganze frühere Phase.",
              "Nils’ anfängliche Angabe ist automatisch bewusst gelogen."
            ],
            "correct": [
              0,
              1
            ]
          },
          {
            "title": "Die vollständige Lieferung",
            "story": "Der Betreiber des Lieferhofs gibt die vollständige, mit der Referenzuhr abgeglichene Aufnahme heraus. Sie zeigt Nils durchgehend von 19:11 bis 19:20 beim Entladen. Vom Lieferhof zur Seitenbühne führt kein unbeobachteter direkter Zugang.",
            "question": "Welche Aussagen gelten nach dem Abgleich beider Alibiquellen?",
            "hint": "Prüfe jede Aussage einzeln gegen die Quellen. Eine plausible Ergänzung ist nicht automatisch ein belegter Schluss.",
            "reveal": "Nils ist während des ganzen Vorbereitungsfensters am Lieferhof. Die anfänglich ungenaue Erinnerung wird durch die Aufnahme ergänzt.",
            "note": "Nils durchgehend 19:11–19:20 am Lieferhof; frühe Lücke geschlossen.",
            "kind": "Quellen vergleichen",
            "type": "multi",
            "items": [
              "Die Lieferhofaufnahme schließt auch Nils’ zuvor offenen frühen Abschnitt.",
              "Nils’ Beobachtung ab 19:15 allein deckte das ganze neue Fenster ab.",
              "Mara und Nils sind im gemeinsamen Eingriffsfenster unabhängig an anderen Orten dokumentiert.",
              "Die beiden Alibis identifizieren unmittelbar die manipulierende Person.",
              "Die vollständige Aufnahme macht eine hypothetische Wegrechnung für Nils’ frühere Alibilücke entbehrlich."
            ],
            "correct": [
              0,
              2,
              4
            ]
          },
          {
            "title": "Zwei Erzählungen, ein Telefonat",
            "story": "A und B wiederholen Leonas Telefonangabe über das Archiv. C hörte nur B erzählen. D sah eine Person vor dem Archiv und hielt sie für Leona; das Gesicht und ein Betreten sind nicht unabhängig bestätigt.",
            "question": "Welche Berichte liefern eine unabhängige Wahrnehmung, deren Reichweite noch begrenzt ist?",
            "hint": "Ein eigener Bericht kann unabhängig sein, ohne die gesuchte Identität oder den Aufenthalt im Raum zu bestätigen.",
            "reveal": "Nur D berichtet eine eigene Sichtung. Diese belegt weder die Identität Leona noch einen Aufenthalt im Archiv. A, B und C gehen auf dieselbe Telefonangabe zurück.",
            "note": "Nur D berichtet eine eigene Sichtung. Diese belegt weder die Identität Leona noch einen Aufenthalt im Archiv. A, B und C gehen auf dieselbe Telefonangabe zurück.",
            "kind": "Zeugen prüfen",
            "type": "multi",
            "items": [
              "A",
              "B",
              "C",
              "D"
            ],
            "correct": [
              3
            ]
          },
          {
            "title": "Wie gewinnst du eine Aussage?",
            "story": "Mara ist erschöpft. Ihre Videoaufnahme ist gesichert, doch sie erinnert sich auch an Leonas Verhalten bei der Uhr am Regiepult. Du entscheidest, wie du das Gespräch führst.",
            "question": "Wie gehst du vor?",
            "hint": "Diese Entscheidung hat keine vorgegebene richtige Antwort. Ihr Verlauf wird in der Akte festgehalten.",
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
            "title": "Der Abgleich der Quellen",
            "story": "Das Prüfteam hat die Gerätezeiten bereits abgeglichen: Ein Scannerwert bezeichnet denselben Eintritt wie der Terminaleintrag und die Referenzaufnahme um 19:13. Der Zugangsausweis kann weitergegeben werden. Die Referenzaufnahme zeigt jedoch Gesicht und Ausweis gemeinsam.",
            "question": "Welche zwei unterschiedlichen Beweislücken werden durch diese Kombination geschlossen?",
            "hint": "Zeitabgleich und Nutzeridentifizierung sind verschiedene Prüfungen.",
            "reveal": "Der fertige Geräteabgleich verbindet die Zeitpunkte; die Gesicht-Aufnahme identifiziert die Nutzerin. Der Innenvorgang bleibt unbeobachtet.",
            "note": "Der fertige Geräteabgleich verbindet die Zeitpunkte; die Gesicht-Aufnahme identifiziert die Nutzerin. Der Innenvorgang bleibt unbeobachtet.",
            "kind": "Zeit korrigieren",
            "type": "multi",
            "variants": [
              {
                "when": {
                  "interview": "pressure"
                },
                "patch": {
                  "type": "order",
                  "title": "Die Korrektur aus dem Protokoll",
                  "story": "Mara hat das Gespräch beendet. Gesicherte Originalaufnahmen und der fertig geprüfte Geräteabgleich bleiben verfügbar. Du dokumentierst, warum die widersprüchlich angezeigten Gerätewerte denselben Eintritt bezeichnen.",
                  "question": "Ordne die Prüfung vom Originaleintrag zur belastbaren Zuordnung.",
                  "items": [
                    "Originaleintrag mit Gerät und Quelle sichern.",
                    "Den unabhängigen Abgleich dieses Geräts heranziehen.",
                    "Den abgeglichenen Vorgang mit der Referenzaufnahme verknüpfen.",
                    "Die sichtbar handelnde Person anhand von Gesicht und Ausweis zuordnen."
                  ],
                  "correct": [
                    0,
                    1,
                    2,
                    3
                  ],
                  "hint": "Eine Personenidentifizierung braucht zuerst die richtige Zuordnung des Vorgangs, aber kein eigenes Umrechnen.",
                  "reveal": "Quellen, fertiger Abgleich und Referenzaufnahme verbinden den Eintritt um 19:13 mit Leona.",
                  "note": "Eintritt um 19:13 anhand unabhängigen Geräteabgleichs und Gesicht-Aufnahme zugeordnet."
                }
              }
            ],
            "items": [
              "Vergleichbarkeit der aufgezeichneten Zeitpunkte.",
              "Identifizierung der tatsächlich sichtbaren Ausweisnutzerin.",
              "Beobachtung der Manipulation im Innenraum.",
              "Nachweis, dass ein ausgegebener Ausweis niemals weitergegeben wurde."
            ],
            "correct": [
              0,
              1
            ]
          },
          {
            "title": "Der Zugang mit D4",
            "story": "Das Terminal protokolliert um angezeigte 19:17 die Verwendung des Ausweises D4 an der Seitenbühnentür. Die Ausgabequittungen sind gesichert, doch die zusammenfassende Tabelle muss aus ihren Bedingungen rekonstruiert werden. Jede der drei Personen erhielt genau einen der Ausweise D4, T2 oder A8. Die Personenzuordnung beweist noch nicht, wer einen möglicherweise weitergegebenen Ausweis benutzte.",
            "question": "Ordne die Ausweise durch Ausschluss zu: D4 ging nicht an Technik oder Zweitbesetzung; T2 ging nicht an die Regie; A8 ging an die Zweitbesetzung.",
            "hint": "Frage bei jeder Zuordnung: Was belegt diese Quelle unmittelbar, und welche stärkere Behauptung bleibt noch offen?",
            "reveal": "D4 gehört zu Leona, T2 zu Nils und A8 zu Mara. Der korrigierte Zugangseintrag mit D4 liegt bei 19:13. Die Ausgabezuordnung beweist noch nicht, wer den Ausweis tatsächlich benutzte.",
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
            "story": "Die Referenzaufnahme zeigt Leona beim Eintritt auf die Seitenbühne während des bestätigten Eingriffsfensters. Erst danach wird sie wieder im Flur aufgenommen. Der Innenraum wird nicht gefilmt.",
            "question": "Welche Aussagekombination trennt ihre Gelegenheit von einer beobachteten Handlung?",
            "hint": "Was außerhalb eines Raums sichtbar ist, ist keine Kameraaufnahme seines Innenraums.",
            "reveal": "Leonas Gelegenheit ist belegt. Die konkrete Handlung wird aus Technik-, Dokument- und Zugangsbefunden rekonstruiert, nicht aus einer Innenaufnahme.",
            "note": "Leonas Gelegenheit ist belegt. Die konkrete Handlung wird aus Technik-, Dokument- und Zugangsbefunden rekonstruiert, nicht aus einer Innenaufnahme.",
            "kind": "Beobachten",
            "type": "multi",
            "items": [
              "Leona hatte dokumentierten Zugang in der relevanten Phase.",
              "Die Aufnahme allein zeigt jede Handlung an der Kulisse.",
              "Eintritt und späteres Wiedererscheinen lassen den Innenvorgang offen.",
              "Der technische Befund muss mit den Ortsbelegen zusammengeführt werden."
            ],
            "correct": [
              0,
              2,
              3
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
            "story": "Die Bühnenkamera und ein Terminalexport zeigen unterschiedliche Anzeigen für den Zusammenbruch. Das Prüfteam bestätigt unabhängig, dass beide Einträge denselben Vorgang zur Referenzzeit 21:10 bezeichnen. Eine Zeugin erklärt daraus: „Dann sind sämtliche Geräte desselben Abends korrekt.“",
            "question": "Welche Aussagen sind gerechtfertigt?",
            "hint": "Ein geprüfter Vergleich zweier Quellen ist keine pauschale Freigabe aller Geräte.",
            "reveal": "Vorfallzeit 21:10 ist abgeglichen. Andere Geräte sind damit nicht automatisch überprüft.",
            "note": "Vorfallzeit 21:10 ist abgeglichen. Andere Geräte sind damit nicht automatisch überprüft.",
            "kind": "Zeit korrigieren",
            "type": "multi",
            "items": [
              "Der geprüfte Vorgang ist zwischen den beiden Quellen zugeordnet.",
              "Die Abgleichbestätigung gilt automatisch für jedes andere Gerät.",
              "Die globale Behauptung der Zeugin ist weitergehend als der einzelne Nachweis.",
              "Andere Geräte brauchen bei widersprüchlichen Einträgen einen eigenen Abgleich."
            ],
            "correct": [
              0,
              2,
              3
            ]
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
            "story": "Adrians Archivkasten trägt vier Symbolkarten: MASKE, FEDER, BÜHNE, SCHLÜSSEL. Hinweise: Der Schlüssel liegt rechts von der Bühne. Die Feder liegt unmittelbar links vom Schlüssel. Die Maske ist nicht außen. Jede Karte kommt einmal vor.",
            "question": "Welches Symbol liegt ganz links?",
            "hint": "Das feste Paar Feder–Schlüssel lässt für eine nicht außen liegende Maske nur eine zulässige Anordnung.",
            "reveal": "Nur BÜHNE–MASKE–FEDER–SCHLÜSSEL erfüllt alle Bedingungen. Die linke Symbolkarte öffnet den Dokumentenkasten.",
            "note": "Nur BÜHNE–MASKE–FEDER–SCHLÜSSEL erfüllt alle Bedingungen. Die linke Symbolkarte öffnet den Dokumentenkasten.",
            "kind": "Kombinieren",
            "type": "input",
            "accepted": [
              "BÜHNE"
            ],
            "normalize": "text",
            "label": "Deine Schlussfolgerung"
          },
          {
            "title": "Zwei Fassungen derselben Szene",
            "story": "Das aufgeführte Stück trägt Leona als alleinige Autorin. Im Kasten liegt ein älteres Manuskript von Emil Hartmann. Eine Passage umfasst in beiden Fassungen dieselben zwölf ungewöhnlichen Sätze, einschließlich derselben absichtlichen Wortverdrehung.",
            "question": "Welche zwei Einordnungen sind durch den beschriebenen Vergleich gerechtfertigt?",
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
            "story": "Im Archiv fehlt das Kapitel Nutzungsrechte. Die vollständige frühere Kopie enthält Hartmanns Ablehnung und Leonas Zusicherung; beide Originalblätter fehlen. Andere Originalblätter sind vorhanden.",
            "question": "Welche Prüfungen bleiben möglich, welche sind eingeschränkt?",
            "hint": "Trenne erhaltenen Inhalt von erhaltenem Material.",
            "reveal": "Die Kopie bewahrt den Wortlaut. Sie ersetzt nicht den Materialvergleich der fehlenden Originalblätter; vorhandene Originale bleiben vergleichbar.",
            "note": "Die Kopie bewahrt den Wortlaut. Sie ersetzt nicht den Materialvergleich der fehlenden Originalblätter; vorhandene Originale bleiben vergleichbar.",
            "kind": "Dokumentvergleich",
            "type": "match",
            "left": [
              "Wortlaut der fehlenden Korrespondenz",
              "Direkter Materialvergleich der fehlenden Blätter",
              "Abgleich vorhandener Originale mit ihrer Kopie"
            ],
            "right": [
              "Anhand der authentischen früheren Kopie prüfbar.",
              "Ohne diese Originalblätter nicht vollständig durchführbar.",
              "Weiterhin anhand der erhaltenen Blätter möglich."
            ],
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "title": "Eine Unterschrift, zwei Rollen",
            "story": "Die vollständige Kopie enthält einen Brief von Emil Hartmann: Er lehnt die Nutzung ohne Nennung seines Namens ausdrücklich ab. Leona antwortet unterschrieben, sie werde die Premiere ohne seinen Text gestalten. Die geprüfte Endfassung enthält dennoch die verglichene Passage und nennt nur Leona. Die gesicherten Schreiben sind datiert: Leonas Anfrage am 20. August, Hartmanns Ablehnung am 2. September, Leonas Antwort am 4. September. Die Premiere fand im Oktober statt.",
            "question": "Welche drei Quellen sind nötig, um Leonas Zusicherung gegen die spätere tatsächliche Nutzung zu prüfen?",
            "hint": "Prüfe jede Aussage einzeln gegen die Quellen. Eine plausible Ergänzung ist nicht automatisch ein belegter Schluss.",
            "reveal": "Leonas unterschriebene Antwort belegt ihre Zusicherung. Die Endfassung und der Vergleich mit Hartmanns Manuskript belegen die spätere Verwendung der Passage. Der Inhalt der Endfassung widerspricht damit ihrer Zusicherung; weitere Nutzungsrechte sind gesondert zu prüfen.",
            "note": "Leonas unterschriebene Zusicherung widerspricht der verwendeten Hartmann-Passage.",
            "kind": "Aussagen prüfen",
            "type": "multi",
            "items": [
              "Ihre unterschriebene Antwort vom 4. September.",
              "Geprüfte Endfassung des aufgeführten Stücks.",
              "Textvergleich mit Hartmanns älterem Manuskript.",
              "Die ältere Anfrage allein, ohne Antwort und Endfassung.",
              "Eine namenlose Sicherheitskarte als Nachweis der Textrechte."
            ],
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "title": "Die Kopie und das Original",
            "story": "Adrians authentischer Nachrichtenverlauf zeigt: Er kündigte Leona um 18:50 eine Klärung der Textrechte in der Pause um 21:15 an. Die vollständige frühere Archivkopie ist bereits gesichert. Jetzt kommt die Theaterleitung und möchte im Archiv aufräumen. Du musst den Umgang mit den noch vorhandenen Originalblätter festlegen.",
            "question": "Wie gehst du mit den Archivoriginalen um?",
            "hint": "Diese Entscheidung hat keine vorgegebene richtige Antwort. Ihr Verlauf wird in der Akte festgehalten.",
            "kind": "Deine Entscheidung",
            "type": "decision",
            "decisionKey": "archive",
            "choices": [
              {
                "id": "seal",
                "label": "Erhaltene Originalblätter sichern und den Bereich bis zur Dokumentation sperren",
                "reveal": "Die vorhandenen Originalblätter werden dokumentiert und gesichert. Sie lassen sich später mit der früheren Kopie vergleichen. Die bereits fehlenden Blätter 17 und 18 bleiben durch die Kopie dokumentiert.",
                "note": "Erhaltene Archivoriginale gesichert; fehlende Blätter 17 und 18 weiterhin durch die frühere Kopie dokumentiert."
              },
              {
                "id": "copy",
                "label": "Nur die vorhandene Kopie mitnehmen und den Raum zur Räumung freigeben",
                "reveal": "Die frühere vollständige Kopie bleibt erhalten. Bei der freigegebenen Räumung werden die noch vorhandenen Originalblätter vermischt; weitere Blätter sind danach nicht auffindbar. Der Abgleich mit den erhaltenen Originalen ist dadurch zusätzlich eingeschränkt.",
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
            "story": "Adrians regulärer Ablaufplan nennt für den Umbau vor Szene 27 die sichere Warteposition K. In seiner Tasche liegt eine handschriftliche Änderungsanweisung: Position M direkt neben der später zusammengebrochenen Kulisse. Leona übergab den verschlossenen Umschlag um 19:25 an die Botin, die ihn anschließend zu Adrian brachte. Der Wortlaut lautet: Zwischen dem zweiten und dritten Glockenschlag nach M wechseln und dort auf Szene 27 warten.",
            "question": "Welche Warteposition nennt die Änderungsanweisung statt K?",
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
                  "story": "Die vollständige frühere Archivkopie ist gesichert; weitere Originalblätter sind nach der freigegebenen Räumung nicht mehr auffindbar. Adrians Änderungsanweisung aus seiner Tasche ist davon nicht betroffen: Sie liegt weiterhin gesichert vor und nennt Warteposition M statt K.",
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
                  "reveal": "Kopie und Änderungsanweisung bleiben verfügbar. Die räumlich getrennt gesicherte Anweisung erklärt den Wechsel nach M; der spätere Abgleich mit den noch vorhandenen Archivoriginalen ist eingeschränkt.",
                  "note": "Nach der Räumung bleiben Archivkopie und Adrians gesicherte Anweisung nutzbar; Originalabgleich eingeschränkt."
                }
              }
            ]
          },
          {
            "title": "Der Plan der Wege",
            "story": "Dein Team hat die Wege bereits praktisch überprüft: Adrian konnte nach seinem beobachteten Garderobenabgang rechtzeitig M erreichen, aber nicht K. Die Änderungsanweisung nennt M; der reguläre Ablaufplan nennt K. Die Bühne zeigt Adrian später tatsächlich bei M.",
            "question": "Welche Quellen erfüllen dabei unterschiedliche Aufgaben?",
            "hint": "Möglichkeit, Anweisung und tatsächliche Durchführung dürfen nicht ineinander aufgehen.",
            "reveal": "Wegprüfung, Anweisung und Aufnahme stützen unterschiedliche Teile des Positionswechsels. Eigene Zeitrechnungen sind dafür nicht erforderlich.",
            "note": "Wegprüfung, Anweisung und Aufnahme stützen unterschiedliche Teile des Positionswechsels. Eigene Zeitrechnungen sind dafür nicht erforderlich.",
            "kind": "Wegzeiten",
            "type": "match",
            "left": [
              "Praktisch geprüfter Wegeabgleich",
              "Änderungsanweisung statt regulärem Plan",
              "Bühnenaufnahme bei M"
            ],
            "right": [
              "Belegt die erreichbare Position, ohne die Anweisung selbst zu erklären.",
              "Dokumentiert den beabsichtigten Positionswechsel.",
              "Bestätigt die tatsächliche spätere Anwesenheit."
            ],
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "title": "Keine normale Textänderung",
            "story": "Die Änderungsanweisung nennt nur Adrians Warteposition vor Szene 27. Andere Rollen, Dialoge und Einsätze bleiben gleich. Auf dem regulären Plan steht keine entsprechende Änderung.",
            "question": "Welche zwei Merkmale der Änderungsanweisung sind hier belegt?",
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
            "story": "Die Botin berichtet: „Leona gab mir den verschlossenen Umschlag um 19:25 und sagte, ich solle ihn Adrian persönlich bringen.“ Eine Flurkamera zeigt die Übergabe des Umschlags von Leona an die Botin. Sie zeigt nicht dessen Inhalt. Die Maskenbildnerin bestätigt, dass Adrian den noch geschlossenen Umschlag erhielt und erst anschließend in ihrer Gegenwart öffnete. Die Maskenbildnerin sah beim Öffnen, dass der Umschlag nur die Änderungsanweisung enthielt.",
            "question": "Welche beiden Quellenpaarungen verbinden die Übergabe des Umschlags mit der Beobachtung seines Inhalts beim Öffnen?",
            "hint": "Prüfe jede Aussage einzeln gegen die Quellen. Eine plausible Ergänzung ist nicht automatisch ein belegter Schluss.",
            "reveal": "Die Flurkamera bestätigt die Übergabe von Leona an die Botin. Die Botin berichtet die persönliche Zustellung. Die Maskenbildnerin bezeugt das Öffnen und den darin gefundenen Text. Sowohl Kamera plus Öffnungszeugin als auch Botin plus Öffnungszeugin verbinden Übergabe und Inhalt; die Kamera allein zeigt den Text nicht.",
            "note": "Leona übergab um 19:25 den Umschlag; die Botin berichtet einen persönlichen Zustellauftrag an Adrian.",
            "kind": "Quellen abgleichen",
            "type": "multi",
            "items": [
              "Flurkamera der Übergabe und Aussage der Maskenbildnerin beim Öffnen.",
              "Flurkamera allein als vollständiger Nachweis des Wortlauts.",
              "Übergabeaussage der Botin und Aussage der Maskenbildnerin beim Öffnen.",
              "Intaktes Siegel allein als Nachweis einer bestimmten Warteposition.",
              "Leonas Berufsbezeichnung und geplanter Szenenbeginn."
            ],
            "correct": [
              0,
              2
            ]
          },
          {
            "title": "Der Umschlag blieb geschlossen",
            "story": "Adrian öffnete den Umschlag im Beisein seiner Maskenbildnerin. Sie bestätigt, dass darin nur die Änderungsanweisung lag. Die Botin und Adrian hatten den Umschlag zwischen Übergabe und Öffnung durchgehend im Blick; das Siegel war bis zur Öffnung unbeschädigt.",
            "question": "Welche zwei Angaben schließen den beschriebenen unbemerkten Austausch nach 19:25 aus?",
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
            "question": "Ordne die zu belegenden Schritte den unmittelbar geeigneten Quellen zu.",
            "hint": "Frage bei jeder Zuordnung: Was belegt diese Quelle unmittelbar, und welche stärkere Behauptung bleibt noch offen?",
            "reveal": "Durchschrift und bestätigte Handschrift stützen die Urheberschaft. Gesicht und Ausweis auf der Aufnahme stützen die Identifizierung der Nutzerin. Uhrkorrektur und unabhängiger Bildabgleich prüfen die Gelegenheitszeit. Beobachtung und unbeschädigtes Siegel stützen die Kontinuität des Inhalts bis zum Öffnen.",
            "note": "Original und Durchschrift verbinden die Änderungsanweisung mit Leona.",
            "kind": "Materialvergleich",
            "type": "match",
            "left": [
              "Urheberschaft der Anweisung",
              "Nutzung des Ausweises durch eine Person",
              "Gelegenheitszeit trotz falscher Uhren",
              "Kontinuität des Umschlaginhalts"
            ],
            "right": [
              "Durchschriftvergleich und bestätigte Handschrift.",
              "Abgeglichene Aufnahme mit Gesicht und Ausweis.",
              "Scannerkorrektur plus unabhängiger Bildzeitabgleich.",
              "Durchgehende Beobachtung und intaktes Siegel bis zum Öffnen."
            ],
            "correct": [
              0,
              1,
              2,
              3
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
            "story": "Du führst sechs Zeitbelege aus der bisherigen Akte zusammen: Adrians Klärungsankündigung, den Beginn von Nils’ Lieferhofaufnahme, das letzte Foto des intakten Siegels, Leonas Eintritt, die obere Materialgrenze und die Umschlagübergabe.",
            "question": "Ordne die Ereignisse ohne angehängte Uhrzeiten mithilfe der bisherigen Akte.",
            "hint": "Suche in deiner Fallakte nach den Ausgangszeiten. Gleiche unterschiedliche Uhren ab, bevor du die Karten legst.",
            "reveal": "18:50 → 19:11 → 19:12 → 19:13 → 19:16 → 19:25.",
            "note": "18:50 Klärungsankündigung → 19:11 Lieferhofaufnahme → 19:12 intaktes Siegel → 19:13 Leonas Eintritt → 19:16 Materialgrenze → 19:25 Umschlagübergabe.",
            "kind": "Rekonstruieren",
            "type": "order",
            "items": [
              "Adrian kündigt die Klärung an.",
              "Nils wird erstmals durchgehend am Lieferhof aufgenommen.",
              "Letztes Foto des intakten Siegels.",
              "Leona betritt die Seitenbühne.",
              "Obergrenze der Materialanalyse.",
              "Übergabe des Umschlags an die Botin."
            ],
            "correct": [
              0,
              1,
              2,
              3,
              4,
              5
            ]
          },
          {
            "title": "Das Alibi am Regiepult",
            "story": "Leona sagt: „Sie sehen mich doch um 21:10 auf der Aufnahme am Regiepult. Ich konnte nichts tun.“ Du hast den Eingriff bereits auf nach 19:12 bis spätestens 19:16 eingegrenzt.",
            "question": "Welche Aussagen beziehen sich auf die richtige Ermittlungsphase und berücksichtigen die Grenzen der Alibis?",
            "hint": "Prüfe jede Aussage einzeln gegen die Quellen. Eine plausible Ergänzung ist nicht automatisch ein belegter Schluss.",
            "reveal": "Du bestätigst die Aufnahme, ohne daraus eine Entlastung für das andere Zeitfenster abzuleiten.",
            "note": "Leonas echtes Alibi um 21:10 beantwortet nicht ihre Gelegenheit um 19:13.",
            "kind": "Psychologisch ermitteln",
            "type": "multi",
            "items": [
              "Mara 19:10–19:20 für den früheren Eingriff.",
              "Leona am Regiepult 21:10 als Entlastung für 19:12–19:16.",
              "Nils 19:11–19:20 für den früheren Eingriff.",
              "Leonas Eintritt 19:13 als Gelegenheit im verengten Fenster.",
              "Nils am Lieferhof als Beweis, dass er die Anweisung nicht zuvor schreiben konnte."
            ],
            "correct": [
              0,
              2,
              3
            ]
          },
          {
            "title": "Die Bühne deiner Konfrontation",
            "story": "Du hast die frühen Aufenthalte, Leonas Dokumente und den gezielten Positionswechsel zusammengeführt. Leona sitzt noch im Theater. Eine Journalistin wartet im Foyer. Dein Team bittet dich um eine Entscheidung zum nächsten Gespräch.",
            "question": "Wie präsentierst du die belastenden Belege?",
            "hint": "Diese Entscheidung hat keine vorgegebene richtige Antwort. Ihr Verlauf wird in der Akte festgehalten.",
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
            "question": "Welche Quellenketten schließen eine konkrete Lücke in der Rekonstruktion?",
            "hint": "Prüfe jede Aussage einzeln gegen die Quellen. Eine plausible Ergänzung ist nicht automatisch ein belegter Schluss.",
            "reveal": "Die Belege konzentrieren sich auf Leona. Du legst deinem Team die dokumentierte Reihenfolge vor und kennzeichnest die Punkte, die in einem weiteren Gespräch geklärt werden sollen.",
            "note": "Gesamtbild konzentriert sich auf Leona; frühere und spätere Zeiten werden getrennt geprüft.",
            "kind": "Rekonstruieren",
            "type": "multi",
            "items": [
              "Ausweisausgabe → korrigierter Zugang → Gesicht auf der Fluraufnahme.",
              "Namenlose Karte → passende Durchschrift → bestätigte Handschrift.",
              "Anweisung → beobachteter, versiegelter Transport → Öffnung vor Zeugin.",
              "Mögliches Motiv → automatisch erwiesene Manipulationsminute.",
              "Späteres Alibi → automatisch keine frühere Vorbereitung."
            ],
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "title": "Bevor du die Akte schließt",
            "story": "Dein Team bereitet den abschließenden Bericht vor. Noch ist kein Geständnis protokolliert. Du prüfst, welche zusätzlichen Schritte Aussagen belastbar machen, bevor du über das weitere Vorgehen entscheidest.",
            "question": "Ordne jeder Aussage den nötigen zusätzlichen Prüfschritt zu.",
            "hint": "Ein Zugangsausweis nennt noch nicht jeden Nutzer; ein Geständnis verlangt einen Abgleich; ein Motiv benötigt weitere Tatbelege.",
            "reveal": "Ausweis und Person, Aussage und Sachbeleg, Motiv und Tatnachweis sind unterschiedliche Fragen. Du hast die Prüfungen für deinen Bericht getrennt aufgeführt.",
            "note": "Abschlussprüfung: Nutzer identifizieren, Angaben abgleichen, Motiv durch weitere Tatbelege ergänzen.",
            "kind": "Auflösung prüfen",
            "type": "match",
            "left": [
              "Ein Ausweis wurde verwendet.",
              "Eine Person würde ein Geständnis ablegen.",
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
            "hint": "Diese Entscheidung hat keine vorgegebene richtige Antwort. Ihr Verlauf wird in der Akte festgehalten.",
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
        "detail": "Probte am frühen Abend im Probenraum an einer Choreografie."
      }
    ],
    "ending": "Dein Abschluss hängt von den festgehaltenen Entscheidungen und dem vorgelegten Bericht ab.",
    "epilogue": "Dein Team führt die Akte anhand der gesicherten Belege und der offenen Prüfpunkte weiter.",
    "branching": true,
    "endings": {
      "clear": {
        "title": "Ein klarer Schlussakkord",
        "summary": "Die Beweiskette hält, und die Beteiligten wurden mit Respekt behandelt.",
        "text": "Du benennst Leona anhand der überprüften Beweiskette. Die gesicherten, noch vorhandenen Archivoriginale können mit der früheren vollständigen Kopie abgeglichen werden; die bereits fehlenden Blätter 17 und 18 bleiben durch diese Kopie dokumentiert. Die ruhigen Gespräche liefern zusätzliche überprüfbare Angaben. Im vertraulichen Abschlussgespräch gesteht Leona die Vorbereitung und die gezielte Anweisung an Adrian. Dein Team gleicht ihre Angaben mit den unabhängigen Spuren ab und nimmt sie fest. Die Theaterleitung stoppt die Produktion und prüft die Textrechte.",
        "epilogue": "Mara dankt dir dafür, dass du ihre mögliche Rollenübernahme nicht mit Schuld verwechselt hast. Nils gibt dir das abgegriffene Programmheft zurück. Im leeren Saal fällt der Vorhang. Du schließt eine nachvollziehbar dokumentierte Akte, Maus."
      },
      "fractured": {
        "title": "Die Wahrheit mit Rissen",
        "summary": "Der Hauptverdacht ist schlüssig, doch dein Vorgehen hat Vertrauen beschädigt oder die zusätzliche Beweissicherung erschwert.",
        "text": "Dein Bericht benennt Leona. Ihre dokumentierte Anwesenheit, die gezielte Anweisung und der Technikbefund bleiben belastend. Dein Team verfolgt den Verdacht anhand dieser Quellen weiter. Eine vollständige Aufklärung lässt sich jedoch noch nicht melden: Zusätzliche Befragungen und offene Prüfschritte stehen aus. Deine früheren Entscheidungen haben die Arbeit erschwert.",
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
        "text": "Du legst noch keinen Hauptverdacht fest. Dein Team erhält die dokumentierten Quellen und einen Auftrag zur ergänzenden Prüfung. Die belastenden Hinweise auf Leona werden weiter untersucht; es gibt in diesem Ende weder ein vollständig überprüftes Geständnis noch eine endgültige Aufklärung.",
        "epilogue": "Du hast offene Fragen benannt, statt Gewissheit vorzutäuschen. Das Theater bleibt bis zur Sicherheitsfreigabe geschlossen. Für heute endet dein Teil der Ermittlung – die Geschichte wartet auf ihre Fortsetzung."
      }
    },
    "difficulty": "Anspruchsvoll"
  },
  {
    "id": "weinfest-grasbrunn",
    "version": 3,
    "title": "Die verschwundene Festkasse",
    "subtitle": "Ein Weinfest in Grasbrunn. Ein vermisster Kassenwart. Und zwei Boxen, die fast gleich aussehen.",
    "tag": "Episode 03 · Weinfest in Grasbrunn",
    "duration": "Etwa 75–120 Minuten · abhängig von Rätseltempo und Hinweisen",
    "contentTag": "Vermisstenfall und Diebstahl · fiktive Handlung",
    "description": "Unter den Lichterketten verschwinden die Spenden – und Anton, der Kassenwart. Maus folgt vertauschten Siegeln, Abholaufträgen und Dorfgerüchten. Deine Entscheidungen verändern den Weg und den Abschluss. Anspruchsvolle Fassung: Quellen kombinieren, abgeglichene Zeitbelege prüfen und Beweisketten prüfen. Ohne Rechenaufgaben: Aussagen kombinieren und Zusammenhänge prüfen.",
    "cover": "assets/grasbrunn-1.webp",
    "branching": true,
    "chapters": [
      {
        "title": "Lichter über Grasbrunn",
        "icon": "🍇",
        "steps": [
          {
            "title": "Lichter über der Festwiese",
            "story": "Auf einer fiktiven Festwiese im Dorf Grasbrunn hängen Lichterketten zwischen weißen Zelten. Du bist als Gast da, Maus. Um 20:15 meldet eine Helferin: Die kontrolliert geöffnete Festkasse ist leer, und Kassenwart Anton Reiter ist seit seinem Gang zum Lager nicht zurückgekehrt. Die Spenden waren für einen erfundenen Jugendgartenverein bestimmt. Du verständigst dein Team.",
            "question": "Welche beiden Fragen müssen zunächst getrennt geprüft werden?",
            "type": "multi",
            "items": [
              "Wo Anton ist und ob er Hilfe braucht.",
              "Was mit den dokumentierten Spenden geschah.",
              "Welche Person allein wegen ihres Berufs schuldig ist.",
              "Ob der Festwein automatisch die Ursache sein muss."
            ],
            "correct": [
              0,
              1
            ],
            "hint": "Die Meldung nennt einen vermissten Menschen und fehlendes Geld.",
            "reveal": "Du koordinierst die Suche und lässt die Kassenunterlagen sichern. Eine Verbindung zwischen den beiden Ereignissen ist zunächst nur eine Möglichkeit.",
            "note": "20:15: leere Festkasse gemeldet; Anton noch nicht zurückgekehrt.",
            "kind": "Ermitteln"
          },
          {
            "title": "Drei Personen, viele Aufgaben",
            "story": "Eva Leitner koordiniert das Fest und verteilt schriftliche Aufträge. Benno Kranz transportiert Material und Kassenboxen. Jule Sommer betreut als eingeladene Winzerin einen Stand und hilft beim Zählen. Alle drei hatten am Abend berechtigten Zugang zum Kassenzelt.",
            "question": "Ordne die Zuständigkeiten per Ausschluss zu: Die Person mit dem Weinstand gab keine Ausgaben frei. Benno transportierte Boxen. Eva betreute weder Weinstand noch Transport.",
            "type": "match",
            "hint": "Jede Person übernimmt genau eine der drei Zuständigkeiten. Trage sichere Zuordnungen ein und schließe diese dann für die übrigen Personen aus.",
            "reveal": "Die Zuordnung beschreibt Zuständigkeiten, noch keine Schuld. Du fragst jede Person nach ihren überprüfbaren Tätigkeiten.",
            "note": "Eva koordiniert; Benno transportiert; Jule betreut einen Stand und half beim Zählen.",
            "kind": "Ermitteln",
            "left": [
              "Festkoordination und Freigaben",
              "Materialtransport",
              "Weinstand und Zählhilfe"
            ],
            "right": [
              "Eva Leitner",
              "Benno Kranz",
              "Jule Sommer"
            ],
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "title": "Was wurde wirklich gezählt?",
            "story": "Anton und Jule bestätigen auf demselben unterschriebenen Zählbogen 4.860 Euro. Ein Hilfszettel listet Scheine aus einer Kontrolltüte. Der Begleitvermerk erklärt ausdrücklich, dass diese Scheine bereits im Zählbogen enthalten sind. Die Tütenkennung stimmt in beiden Unterlagen überein.",
            "question": "Welche Angaben verhindern, dass der Hilfszettel als zusätzliche Spende behandelt wird?",
            "type": "multi",
            "hint": "Ein zweiter Beleg kann denselben Gegenstand beschreiben, ohne einen neuen Eingang zu belegen.",
            "reveal": "Bestätigte Gesamtsumme bleibt 4.860 Euro. Hilfszettel und Zählbogen beziehen sich auf dieselben bereits erfassten Scheine.",
            "note": "Bestätigte Gesamtsumme bleibt 4.860 Euro. Hilfszettel und Zählbogen beziehen sich auf dieselben bereits erfassten Scheine.",
            "kind": "Ermitteln",
            "items": [
              "Vermerk über die bereits enthaltenen Scheine.",
              "Übereinstimmende Tütenkennung.",
              "Ein höherer Betrag ohne Quellenvergleich.",
              "Unterschriften bestätigen die Gesamtsumme, nicht einen zusätzlichen Eingang."
            ],
            "correct": [
              0,
              1,
              3
            ]
          },
          {
            "title": "Die letzte gesicherte Folge",
            "story": "Die abgeglichenen Aufnahmen und Unterlagen zeigen: Zählung 20:00; Foto der vollen, verschlossenen Box um 20:06; Aufnahme einer anderen Box um 20:12; Abholung durch Benno um 20:13; Meldung der leeren Kasse um 20:15.",
            "question": "Ordne die Ereignisse anhand der Akte; auf den Karten stehen keine Uhrzeiten.",
            "type": "order",
            "hint": "Suche in deiner Fallakte nach den Ausgangszeiten. Gleiche unterschiedliche Uhren ab, bevor du die Karten legst.",
            "reveal": "20:00 → 20:06 → 20:12 → 20:13 → 20:15. Die andere Box steht vor Bennos Abholung bereit.",
            "note": "Eine andere Box steht spätestens um 20:12 bereit; Abholung erst um 20:13.",
            "kind": "Ermitteln",
            "items": [
              "Gemeinsame Zählung",
              "Foto der vollen G-17",
              "G-71 an derselben Stelle aufgenommen",
              "Benno übernimmt die bereitgestellte Box",
              "Leerer Inhalt gemeldet"
            ],
            "correct": [
              0,
              1,
              2,
              3,
              4
            ]
          },
          {
            "type": "decision",
            "decisionKey": "focus",
            "title": "Mensch oder Unterlagen zuerst?",
            "story": "Dein Team sucht Anton und sichert parallel das Kassenzelt. Du kannst selbst zuerst seinem letzten Weg folgen oder die Kassenunterlagen vergleichen. Es gibt kein reales Zeitlimit; die Szenen erzählen unterschiedliche Ermittlungswege.",
            "question": "Welchen Ansatz verfolgst du persönlich zuerst?",
            "choices": [
              {
                "id": "rescue",
                "label": "Antons letzten Weg zum Lager verfolgen",
                "reveal": "Du gehst mit einem Helfer zum Lagerbereich. Dein nächstes Rätsel ist die Ortsangabe auf Antons Abholzettel.",
                "note": "Erster Ansatz: Antons letzten Weg persönlich verfolgt."
              },
              {
                "id": "records",
                "label": "Zählbogen, Boxenfoto und Abholauftrag vergleichen",
                "reveal": "Du beginnst mit den Quellen am Kassenzelt. Dein Team setzt die Suche nach Anton unabhängig davon fort.",
                "note": "Erster Ansatz: Kassenunterlagen persönlich geprüft; Suche parallel fortgesetzt."
              }
            ],
            "kind": "Deine Entscheidung",
            "hint": "Diese Entscheidung hat keine vorgegebene richtige Antwort. Sie verändert den weiteren Weg."
          }
        ],
        "art": "assets/grasbrunn-1.webp",
        "artAlt": "Fiktives Weinfest auf einer Grasbrunner Festwiese mit Zelten und Lichterketten.",
        "guide": "Ich trenne die Suche nach Anton von der Frage nach dem Geld."
      },
      {
        "title": "Antons letzter Weg",
        "icon": "🏮",
        "steps": [
          {
            "title": "Der Zettel mit E3",
            "story": "Ein Helfer sah Anton um 20:07 mit einem Zettel zum Lagerbereich gehen. Auf dem gesicherten Zettel steht: „Siegelrollen abholen – Lager E3.“ Der Festplan benutzt Buchstaben für Bereiche und Zahlen für die dortigen Lager.",
            "question": "Welches Lager ist auf dem Zettel genannt?",
            "type": "input",
            "accepted": [
              "E3"
            ],
            "label": "Lagerkennung",
            "normalize": "text",
            "hint": "Übernimm Buchstabe und Nummer gemeinsam.",
            "reveal": "Ein Helfer begleitet dich zu E3. Anton ist dort hinter einer klemmenden Lagertür eingeschlossen. Dein Team lässt sie fachgerecht öffnen und prüft seinen Zustand. Es gibt in diesem Fall keinen Befund einer absichtlichen Einsperrung.",
            "note": "Anton wird im Lager E3 gefunden; klemmende Tür, kein belegtes absichtliches Einsperren.",
            "kind": "Ermitteln",
            "variants": [
              {
                "when": {
                  "focus": "records"
                },
                "patch": {
                  "type": "match",
                  "title": "Quellen am Kassenzelt",
                  "story": "Du vergleichst zuerst den unterschriebenen Zählbogen, das Boxenfoto und den Abholauftrag. Dein Team setzt die Suche fort und findet Anton im Lager E3 hinter einer klemmenden Tür. Er ist ansprechbar. Eine technische Prüfung liefert keinen Befund einer absichtlichen Einsperrung.",
                  "question": "Ordne den Quellen die belegten Angaben zu.",
                  "left": [
                    "Zählbogen",
                    "Boxenfoto um 20:06",
                    "Abholauftrag"
                  ],
                  "right": [
                    "Bestätigte Spenden: 4.860 Euro.",
                    "Ursprüngliche Box G-17 mit Siegel 614.",
                    "G-17 soll am Materialplatz übergeben werden."
                  ],
                  "correct": [
                    0,
                    1,
                    2
                  ],
                  "hint": "Der Zählbogen nennt Geld, das Foto den Gegenstand, der Auftrag einen geplanten Weg.",
                  "reveal": "Die drei Quellen sind getrennt gesichert. Dein Team meldet Anton aus E3; sein Ausbleiben erklärt sich durch die klemmende Tür. Du kannst ihn nun nach dem Lagerauftrag fragen.",
                  "note": "Kassenquellen getrennt gesichert; Anton im Lager E3 gefunden."
                }
              }
            ]
          },
          {
            "title": "Eine Suche ist kein Schuldbeweis",
            "story": "Anton ist ansprechbar. Er sagt: „Eva gab mir den Auftrag, Siegelrollen zu holen. Ich kam wegen der Tür nicht wieder hinaus.“ Die technische Prüfung bestätigt die klemmende Tür, aber keinen Befund dafür, dass Eva sie absichtlich blockierte.",
            "question": "Welche zwei Angaben lassen sich daraus getrennt festhalten?",
            "type": "multi",
            "items": [
              "Anton berichtet einen Auftrag von Eva.",
              "Die klemmende Tür erklärt seine verzögerte Rückkehr.",
              "Evas absichtliches Einsperren ist damit bewiesen.",
              "Anton hat deshalb selbst die Spenden gestohlen."
            ],
            "correct": [
              0,
              1
            ],
            "hint": "Unterscheide den berichteten Auftrag von der Ursache der eingeschränkten Rückkehr.",
            "reveal": "Du sicherst Antons Aussage, ohne aus der Türstörung eine unbelegte zusätzliche Tat abzuleiten. Der Auftrag könnte trotzdem für die Zeit am Kassenzelt relevant sein.",
            "note": "Auftrag laut Anton von Eva; Türstörung erklärt das Ausbleiben, nicht automatisch eine Absicht.",
            "kind": "Ermitteln"
          },
          {
            "title": "Der Rückweg über die Wiese",
            "story": "Der Festplan führt von E3 über den Materialweg zur Rückseite des Kassenzelts und von dort zum Eingang. Ein scheinbar direkter Weg über den Weinstand endet an einer versiegelten Tür. Weitere Zugänge sind nicht vorhanden.",
            "question": "Welche Quellen brauchst du, um einen behaupteten Rückweg über den Weinstand zu prüfen?",
            "type": "multi",
            "hint": "Ein gezeichneter Weg ist nicht automatisch ein benutzbarer Zugang.",
            "reveal": "Plan und Türzustand schließen die versiegelte Abkürzung aus. Der offene Weg führt über Materialweg und Zeltrückseite.",
            "note": "Plan und Türzustand schließen die versiegelte Abkürzung aus. Der offene Weg führt über Materialweg und Zeltrückseite.",
            "kind": "Ermitteln",
            "items": [
              "Festplan mit den tatsächlichen Verbindungen.",
              "Nachweis über den Zustand der versiegelten Tür während der relevanten Phase.",
              "Die Behauptung, ein kürzer aussehender Weg sei immer offen.",
              "Allein die Beschriftung „Weinstand“."
            ],
            "correct": [
              0,
              1
            ]
          },
          {
            "title": "Die Zahlen am Siegel",
            "story": "Das Foto um 20:06 zeigt die volle Box mit eingravierter Kennung G-17 und Siegelnummer 614. Die um 20:13 abgeholte und später leer geöffnete Box trägt G-71 und Siegel 641. Die Kennungen sind in den Originalbildern lesbar.",
            "question": "Welche beiden vollständigen Datensätze gehören zu unterschiedlichen dokumentierten Boxen?",
            "type": "multi",
            "hint": "Prüfe jede Aussage einzeln gegen die Quellen. Eine plausible Ergänzung ist nicht automatisch ein belegter Schluss.",
            "reveal": "Das Foto um 20:06 zeigt G-17 mit Siegel 614 und vollem Inhalt. Die abgeholte, später leer geöffnete Box trägt G-71 und Siegel 641. Gravur und Materialvergleich unterscheiden zwei Gegenstände, nicht nur zwei Etiketten.",
            "note": "Volle Box: G-17 mit Siegel 614; abgeholte leere Box: G-71 mit Siegel 641.",
            "kind": "Ermitteln",
            "items": [
              "G-17 / 614 / voll um 20:06",
              "G-71 / 641 / leer nach Abholung",
              "G-17 / 641 / voll um 20:06",
              "G-71 / 614 / leer nach Abholung",
              "G-17 und G-71 sind zwei Lesarten derselben Gravur."
            ],
            "correct": [
              0,
              1
            ]
          },
          {
            "title": "Die Spanne des Austauschs",
            "story": "Die abgeglichenen Aufnahmen zeigen erst die volle G-17, später G-71 an derselben Stelle. Ein separater Prüfbericht legt das gemeinsame Austauschfenster bereits auf 20:08–20:12 fest. Die Gravuren und der Materialvergleich unterscheiden zwei Boxen.",
            "question": "Welche Befunde stützen welche Teile der Rekonstruktion?",
            "type": "match",
            "hint": "Zeitliche Einordnung und Identität des Gegenstands sind verschiedene Fragen.",
            "reveal": "Zwei Boxen und der Wechsel sind gestützt. Das fertig geprüfte Austauschfenster lautet 20:08–20:12; die handelnde Person folgt daraus noch nicht.",
            "note": "Zwei Boxen und der Wechsel sind gestützt. Das fertig geprüfte Austauschfenster lautet 20:08–20:12; die handelnde Person folgt daraus noch nicht.",
            "kind": "Ermitteln",
            "left": [
              "Aufnahmen vor und nach dem Wechsel",
              "Unterschiedliche Gravuren und Material",
              "Gemeinsamer geprüfter Bericht"
            ],
            "right": [
              "Belegen die Änderung des bereitstehenden Gegenstands.",
              "Unterscheiden die Boxen unabhängig von einer Etikettverwechslung.",
              "Grenzt den Wechsel bereits auf die relevante Phase ein."
            ],
            "correct": [
              0,
              1,
              2
            ]
          }
        ],
        "art": "assets/grasbrunn-2.webp",
        "artAlt": "Leeres Kassenzelt mit verschlossener Spendenbox und Zählunterlagen.",
        "guide": "Ich höre zu und leite nicht mehr ab, als die Quellen zeigen."
      },
      {
        "title": "Aussagen zwischen den Ständen",
        "icon": "🍷",
        "steps": [
          {
            "title": "Jules Verkostung",
            "story": "Jule ist vor, während und nach dem gesamten bestätigten Austauschfenster durchgehend auf der Verkostungsbühne aufgenommen. Eine Erzählung von Gästen beschreibt nur, dass sie irgendwann dort Wein vorstellte.",
            "question": "Welche Aussage trägt ihre Entlastung für den unmittelbaren Austausch?",
            "type": "multi",
            "hint": "Achte auf durchgehende Beobachtung und auf die richtige Ermittlungsphase.",
            "reveal": "Das abgeglichene, durchgehende Bühnenbild entlastet Jule für den unmittelbaren Austausch. Die zeitlich offene Erzählung allein würde das nicht leisten.",
            "note": "Das abgeglichene, durchgehende Bühnenbild entlastet Jule für den unmittelbaren Austausch. Die zeitlich offene Erzählung allein würde das nicht leisten.",
            "kind": "Ermitteln",
            "items": [
              "Die Aufnahme erfasst sie ohne Unterbrechung während der ganzen relevanten Phase.",
              "Die bloße Erzählung „irgendwann auf der Bühne“ reicht allein aus.",
              "Die Kamerazeiten wurden unabhängig abgeglichen.",
              "Eine Anwesenheit nach dem Austausch beweist immer auch die Anwesenheit davor."
            ],
            "correct": [
              0,
              2
            ]
          },
          {
            "title": "Bennos Transport",
            "story": "Ein Besucher verdächtigt Benno, weil er die leere Box wegtrug. Die durchgehende Aufnahme des Materialplatzes zeigt ihn jedoch von 20:05 bis 20:12 dort. G-71 steht bereits um 20:12 im Kassenzelt. Benno tritt erst um 20:13 zur Abholung hinein.",
            "question": "Welche Aussagen passen gemeinsam zu Benno, den Boxen und dem verengten Zeitfenster?",
            "type": "multi",
            "hint": "Prüfe jede Aussage einzeln gegen die Quellen. Eine plausible Ergänzung ist nicht automatisch ein belegter Schluss.",
            "reveal": "Benno ist als Abholer belegt, aber für den unmittelbaren Austausch im früheren Fenster entlastet. Eine mögliche Kenntnis des Inhalts müsste gesondert geprüft werden.",
            "note": "Benno 20:05–20:12 am Materialplatz; Abholung von G-71 erst um 20:13.",
            "kind": "Ermitteln",
            "items": [
              "Benno ist während des gesamten verengten Fensters am Materialplatz aufgenommen.",
              "Seine Abholung findet nach dem aufgenommenen Boxenwechsel statt.",
              "Sein Transport beweist allein, dass er den Austausch veranlasste.",
              "Sein Alibi schließt jede mögliche frühere Kommunikation aus.",
              "Eine Kenntnis des Inhalts benötigt weiterhin eigene Quellen."
            ],
            "correct": [
              0,
              1,
              4
            ]
          },
          {
            "title": "Drei Stände, drei Sorten",
            "story": "Zur Zuordnung einer Helferbeobachtung prüfst du die Speisekarten: Am Stand Wiese gibt es weder Rotwein noch Rosé. Der Stand Laube bietet keinen Rotwein an. Jeder der drei Stände Wiese, Laube und Glocke schenkt genau eine der drei Sorten Weißwein, Rosé oder Rotwein aus. Jede Sorte gibt es nur einmal. Die ursprünglichen Sortenbedingungen bleiben gültig; jedes Glaszeichen kommt genau einmal vor.",
            "question": "Drei Stände führen jeweils genau eine Sorte und genau ein Glaszeichen (Kreis, Stern, Blatt). Wiese schenkt weder Rotwein noch Rosé aus und hat nicht Kreis. Rosé wird im Sternglas gereicht. Glocke hat Kreis. Welche vollständige Zuordnung ergibt sich?",
            "type": "match",
            "hint": "Ordne zuerst die Weinsorten durch Ausschluss zu. Verteile danach Kreis, Stern und Blatt so, dass jedes Zeichen genau einmal vorkommt.",
            "reveal": "Wiese ist Weißwein, Laube Rosé und Glocke Rotwein. Rosé→Stern, Glocke→Kreis, daher Wiese→Blatt.",
            "note": "Wiese: Weißwein / Blatt; Laube: Rosé / Stern; Glocke: Rotwein / Kreis.",
            "kind": "Ermitteln",
            "left": [
              "Wiese",
              "Laube",
              "Glocke"
            ],
            "right": [
              "Weißwein / Blatt",
              "Rosé / Stern",
              "Rotwein / Kreis"
            ],
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "title": "Die doppelte Dorfgeschichte",
            "story": "Die Gäste A und B wiederholen Rosis Wiedergabe von Evas Telefonangabe. Rosi sah Eva nicht selbst am Stand. C berichtet eine eigene Sichtung vor dem Stand, kann sie aber zeitlich nicht einordnen.",
            "question": "Welche Berichte liefern eine eigene Sichtung, die trotzdem Evas behauptete Anwesenheit zur entscheidenden Zeit nicht bestätigt?",
            "type": "multi",
            "hint": "Eine eigene Sichtung und ein zeitlich belastbares Alibi sind nicht dasselbe.",
            "reveal": "C ist die einzige eigene Sichtung, aber ohne Zeitbezug. A, B und Rosi geben letztlich Evas Behauptung weiter.",
            "note": "C ist die einzige eigene Sichtung, aber ohne Zeitbezug. A, B und Rosi geben letztlich Evas Behauptung weiter.",
            "kind": "Ermitteln",
            "items": [
              "A",
              "B",
              "Rosi",
              "C"
            ],
            "correct": [
              3
            ]
          },
          {
            "type": "decision",
            "decisionKey": "interview",
            "title": "Ein Gespräch auf der Bank",
            "story": "Rosi möchte mit dir sprechen, ist aber verunsichert: Benno ist ihr Neffe, und im Dorf wird bereits getuschelt. Seine Aufnahme ist gesichert. Du brauchst ihre eigenen Beobachtungen, keine Gerüchte.",
            "question": "Wie führst du das Gespräch?",
            "choices": [
              {
                "id": "listen",
                "label": "Rosi in Ruhe und abseits der Gäste nach eigenen Beobachtungen fragen",
                "reveal": "Rosi erzählt, dass sie auf Evas Auftrag einen Umschlag zum Materialplatz brachte. Du protokollierst ihre eigenen Worte und prüfst sie an den Unterlagen. Sie bietet an, dem Team den damaligen Übergabeweg persönlich zu zeigen.",
                "note": "Rosi berichtet ihren Umschlagtransport auf Evas Auftrag und bietet eine persönliche Rekonstruktion des Übergabewegs an."
              },
              {
                "id": "pressure",
                "label": "Benno vor den Gästen wegen seines Boxentransports unter Verdacht stellen und Rosi drängen",
                "reveal": "Rosi bricht das freiwillige Gespräch ab. Gesicherte Aufnahmen und Unterlagen bleiben verfügbar; zusätzliche Angaben musst du aus anderen Quellen prüfen.",
                "note": "Öffentlicher Druck auf Rosi; freiwillige Mitarbeit beendet."
              }
            ],
            "kind": "Deine Entscheidung",
            "hint": "Diese Entscheidung hat keine vorgegebene richtige Antwort. Sie verändert den weiteren Weg."
          }
        ],
        "art": "assets/grasbrunn-3.webp",
        "artAlt": "Lagerhütte mit geöffneter Tür und Laterne neben der Festwiese.",
        "guide": "Gerüchte werden nicht wahrer, wenn viele sie weitererzählen."
      },
      {
        "title": "Zwei Zeiten auf einer Aufnahme",
        "icon": "🕰️",
        "steps": [
          {
            "title": "Die Zeitquelle hinter dem Eintrag",
            "story": "Die Kamera speichert UTC, der Export nutzt eine andere Geräteanzeige. Das Prüfteam liefert eine fertige, unabhängig geprüfte Zuordnung: Der fragliche Export gehört zur örtlichen Festzeit 20:08. Rohdatei, Gerätekennung und Vergleichsbild sind gesichert.",
            "question": "Welche Prüfungen machen diese Zuordnung belastbar, ohne selbst Uhren umzurechnen?",
            "type": "multi",
            "hint": "Prüfe Herkunft und Geltungsbereich des fertigen Abgleichs.",
            "reveal": "Die Quelle wird dem geprüften Gerät zugeordnet und die fertige örtliche Festzeit 20:08 übernommen. Eine erneute eigene Umrechnung ist nicht nötig.",
            "note": "Die Quelle wird dem geprüften Gerät zugeordnet und die fertige örtliche Festzeit 20:08 übernommen. Eine erneute eigene Umrechnung ist nicht nötig.",
            "kind": "Ermitteln",
            "variants": [
              {
                "when": {
                  "interview": "pressure"
                },
                "patch": {
                  "type": "order",
                  "title": "Zeitabgleich ohne Zusatzgespräch",
                  "story": "Rosi beendet das Gespräch. Gesicherte Rohdatei, Gerätekennung, Vergleichsbild und fertiger unabhängiger Zeitabgleich bleiben verfügbar. Du dokumentierst den Eintrag als örtliche Festzeit 20:08.",
                  "question": "Ordne die Quellenprüfung bis zum Fallakteneintrag.",
                  "items": [
                    "Die originale Datei mit dem fraglichen Eintrag sichern.",
                    "Das Gerät über seine Kennung dem Prüfbericht zuordnen.",
                    "Die Zuordnung mit dem unabhängigen Vergleichsbild prüfen.",
                    "Die bestätigte örtliche Festzeit 20:08 in der Akte notieren."
                  ],
                  "correct": [
                    0,
                    1,
                    2,
                    3
                  ],
                  "hint": "Erst die Herkunft zuordnen, dann den geprüften Befund dokumentieren.",
                  "reveal": "Der Quellenweg stützt die örtliche Zeit 20:08 auch ohne Rosis Ergänzung und ohne eigenes Umrechnen.",
                  "note": "Örtliche Festzeit 20:08 durch Rohdatei, Gerätezuordnung und unabhängigen Prüfbericht gestützt."
                }
              }
            ],
            "items": [
              "Rohdatei und Gerätekennung verbinden den fraglichen Eintrag mit dem geprüften Gerät.",
              "Ein unabhängiges Vergleichsbild stützt die Zuordnung.",
              "Eine beliebige andere Geräteanzeige ersetzt den geprüften Abgleich.",
              "Die bereits örtlich eingeordnete Zeit wird als solche gekennzeichnet."
            ],
            "correct": [
              0,
              1,
              3
            ]
          },
          {
            "title": "Der Eintritt ins Kassenzelt",
            "story": "Die abgeglichene Außenaufnahme zeigt Eva um örtliche 20:08 beim Eintritt in das Kassenzelt und um 20:11 beim Verlassen. Die Kamera zeigt ihr Gesicht, aber nicht den Innenraum.",
            "question": "Welche Aussagen folgen aus Exportkorrektur, Außenaufnahme und Materialfenster gemeinsam?",
            "type": "multi",
            "hint": "Prüfe jede Aussage einzeln gegen die Quellen. Eine plausible Ergänzung ist nicht automatisch ein belegter Schluss.",
            "reveal": "Du kannst Evas Anwesenheit einordnen. Was sie im Innenraum tat, muss aus weiteren Belegen rekonstruiert werden.",
            "note": "Eva betritt um 20:08 das Kassenzelt; erscheint um 20:11 wieder draußen.",
            "kind": "Ermitteln",
            "items": [
              "Eva tritt zum Beginn des verengten Fensters ins Zelt.",
              "Die Aufnahme zeigt den tatsächlichen Austausch im Innenraum.",
              "Evas Eintrittszeit darf nicht noch einmal um zwei Stunden verschoben werden.",
              "Der Innenraum ist durch ihr Gesicht auf der Außenkamera vollständig beobachtet.",
              "Eva hat im verengten Fenster dokumentierten Zugang."
            ],
            "correct": [
              0,
              2,
              4
            ]
          },
          {
            "title": "Ein Alibi am falschen Stand",
            "story": "Eva sagt: „Ich stand von 20:07 bis 20:12 ununterbrochen bei der Verkostung am Stand Glocke.“ Das Kassenzelt liegt getrennt davon, und ihr Eintritt um 20:08 ist eindeutig aufgenommen.",
            "question": "Welche konkrete Behauptung ist widerlegt?",
            "type": "choice",
            "options": [
              "Dass Glocke einen Weinstand bezeichnet.",
              "Dass Eva jemals bei Glocke stand.",
              "Dass Eva von 20:07 bis 20:12 ununterbrochen bei Glocke war."
            ],
            "answer": 2,
            "hint": "Widerlege nur die Aussage, die der Aufnahme tatsächlich widerspricht.",
            "reveal": "Ihr behaupteter durchgehender Aufenthalt stimmt nicht. Die Aufnahme beweist nicht, dass sie den Stand niemals besuchte.",
            "note": "Evas behauptetes ununterbrochenes Stand-Alibi ist widerlegt.",
            "kind": "Ermitteln"
          },
          {
            "title": "Die Grenze der Außenaufnahme",
            "story": "Eva wird während des bestätigten Austauschfensters beim Eintritt und später beim Verlassen des Kassenzelts aufgenommen. Der Innenraum bleibt unbeobachtet. Ein Helfer behauptet: „Weil ich ihren Austritt sah, weiß ich, dass sie vorher nichts mitgenommen hat.“",
            "question": "Welche Schlüsse sind gerechtfertigt?",
            "type": "multi",
            "hint": "Ein beobachteter Austritt ist kein Rückblick durch geschlossene Wände.",
            "reveal": "Evas Gelegenheit ist belegt, der Innenvorgang nicht. Boxen- und Transportbelege müssen separat geprüft werden.",
            "note": "Evas Gelegenheit ist belegt, der Innenvorgang nicht. Boxen- und Transportbelege müssen separat geprüft werden.",
            "kind": "Ermitteln",
            "items": [
              "Der Austritt allein zeigt nicht sämtliche Handlungen im Innenraum.",
              "Der Zugang in der relevanten Phase ist dokumentiert.",
              "Der Helfer hat den gesamten Innenvorgang dadurch unabhängig bestätigt.",
              "Gegenstands- und Transportbelege müssen gesondert geprüft werden."
            ],
            "correct": [
              0,
              1,
              3
            ]
          },
          {
            "title": "Der kurze Stromausfall",
            "story": "Um 20:09 fällt die Festbeleuchtung für eine Minute aus. Die Außenkamera läuft mit eigener Batterie durchgehend weiter. Der geprüfte Videostream enthält weder eine Lücke noch einen Neustart. Die Kameraaufnahme bleibt bei der Prüfung auch während des Ausfalls auswertbar.",
            "question": "Welche Aussagen über Beleuchtung, Aufzeichnung und Auswertbarkeit sind mit den Angaben vereinbar?",
            "type": "multi",
            "hint": "Prüfe jede Aussage einzeln gegen die Quellen. Eine plausible Ergänzung ist nicht automatisch ein belegter Schluss.",
            "reveal": "Beleuchtung und Aufzeichnung sind getrennte Systeme. Der Stream ist lückenlos, und seine Sichtbarkeit wurde zusätzlich geprüft.",
            "note": "20:09–20:10 Beleuchtungsausfall; batteriebetriebene Außenkamera ohne Lücke.",
            "kind": "Ermitteln",
            "items": [
              "Die Festbeleuchtung liefert während des Ausfalls kein Licht.",
              "Die Batteriekamera zeichnet trotzdem ohne Unterbrechung auf.",
              "Der Lichtausfall beweist eine einminütige Lücke im geprüften Videostream.",
              "Ein lückenloser Stream ersetzt nicht die Prüfung, ob die Aufnahme im Dunkeln auswertbar ist.",
              "Die eigenständige Batterie ändert automatisch sämtliche Kamera-Uhrzeiten."
            ],
            "correct": [
              0,
              1,
              3
            ]
          }
        ],
        "art": "assets/grasbrunn-4.webp",
        "artAlt": "Bank und Weinstand im Laternenlicht nach dem Fest.",
        "guide": "Ich gleiche Zeitarten ab, bevor ich Aussagen vergleiche."
      },
      {
        "title": "Die Entnahme im Kassenordner",
        "icon": "📓",
        "steps": [
          {
            "title": "Der Kassenordner",
            "story": "Antons Kassenordner trägt vier Symbolkarten: REBE, GLAS, SIEGEL, SCHLÜSSEL. Der Schlüssel liegt unmittelbar rechts vom Siegel. Das Glas liegt unmittelbar links vom Siegel. Die Rebe steht nicht zwischen zwei Karten. Jede Karte kommt genau einmal vor. Der Schlüssel steht ganz rechts.",
            "question": "Welches Symbol liegt ganz links?",
            "type": "input",
            "hint": "Setze die feste Dreiergruppe so ein, dass der Schlüssel ganz rechts liegt.",
            "reveal": "GLAS–SIEGEL–SCHLÜSSEL bilden eine feste Gruppe. Nur REBE–GLAS–SIEGEL–SCHLÜSSEL lässt für alle vier Karten Platz; der Symbolverschluss öffnet den Ordner.",
            "note": "GLAS–SIEGEL–SCHLÜSSEL bilden eine feste Gruppe. Nur REBE–GLAS–SIEGEL–SCHLÜSSEL lässt für alle vier Karten Platz; der Symbolverschluss öffnet den Ordner.",
            "kind": "Ermitteln",
            "accepted": [
              "REBE"
            ],
            "normalize": "text",
            "label": "Deine Schlussfolgerung"
          },
          {
            "title": "Eine Abweichung im Ausgabenblatt",
            "story": "Evas Ausgabenzeile fasst Zeltkosten und Lieferkosten zusammen. Beide haben eigene authentische Belege; der unabhängige Prüfbericht meldet einen weiteren ungeklärten Anteil. Ein Helfer möchte allein die Zeltrechnung als Erklärung der gesamten Zeile übernehmen.",
            "question": "Welche Quellen braucht die vollständige Prüfung?",
            "type": "multi",
            "hint": "Eine Sammelzeile kann mehrere Vorgänge enthalten. Prüfe Herkunft und Zuordnung statt Beträge auszurechnen.",
            "reveal": "Zeltkosten, Lieferkosten und ungeklärter Anteil bleiben getrennt dokumentiert. Die eine Rechnung erklärt nicht automatisch die ganze Sammelzeile.",
            "note": "Zeltkosten, Lieferkosten und ungeklärter Anteil bleiben getrennt dokumentiert. Die eine Rechnung erklärt nicht automatisch die ganze Sammelzeile.",
            "kind": "Ermitteln",
            "items": [
              "Zeltrechnung mit Zahlungsnachweis.",
              "Lieferkostenbeleg mit Zuordnung zur selben Zeile.",
              "Prüfbericht über den weiterhin ungeklärten Anteil.",
              "Nur die Beschriftung „Zeltkosten“ ohne Abgleich.",
              "Evas Erklärung als Ersatz aller Originalbelege."
            ],
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "title": "Der Beleg ohne Gegenstück",
            "story": "Ein separates, von Eva unterschriebenes Blatt dokumentiert eine private Vorschussentnahme von 1.200 Euro. Die vollständige Buchungsübersicht enthält keine bestätigte Rückzahlung. Der ungeklärte Anteil der anderen Ausgabenzeile stammt dagegen aus einem eigenen Prüfvergleich.",
            "question": "Welche Aussagen dürfen gemeinsam festgehalten werden?",
            "type": "multi",
            "hint": "Ähnliche Verdachtsmomente sind nicht automatisch ein einziger Buchungsvorgang.",
            "reveal": "Private Entnahme, fehlende Rückzahlung und anderer Ausgabenvergleich werden getrennt festgehalten. Der Austausch braucht eigene Sachbelege.",
            "note": "Private Entnahme, fehlende Rückzahlung und anderer Ausgabenvergleich werden getrennt festgehalten. Der Austausch braucht eigene Sachbelege.",
            "kind": "Ermitteln",
            "items": [
              "Die unterschriebene Entnahme ist ein eigenständiger Vorgang.",
              "Eine bestätigte Rückzahlung fehlt in der vollständigen Übersicht.",
              "Jede Unstimmigkeit einer anderen Zeile ist automatisch dieselbe Entnahme.",
              "Der Ausgabenvergleich und die private Entnahme dürfen nicht ohne Verbindungsbeleg gleichgesetzt werden.",
              "Die Entnahme allein zeigt, wer die Boxen tauschte."
            ],
            "correct": [
              0,
              1,
              3
            ]
          },
          {
            "title": "Die angekündigte Klärung",
            "story": "Anton kündigt Eva eine Klärung der Entnahme mit dem Festteam an. Eva antwortet im authentischen Verlauf: „Warte mit dem Gespräch, bis die Abholung vorbei ist.“ Beide Nachrichten liegen vor dem Boxenwechsel.",
            "question": "Welche Schlüsse trägt diese Reihenfolge?",
            "type": "multi",
            "hint": "Der Verlauf belegt Kenntnis und Wunsch, nicht automatisch eine spätere Handlung.",
            "reveal": "Eva kannte den Konflikt und wollte die Klärung verschieben. Die Boxenhandlung und die Türstörung müssen aus anderen Quellen geprüft werden.",
            "note": "Eva kannte den Konflikt und wollte die Klärung verschieben. Die Boxenhandlung und die Türstörung müssen aus anderen Quellen geprüft werden.",
            "kind": "Ermitteln",
            "items": [
              "Eva wusste vor dem Wechsel von der angekündigten Klärung.",
              "Ihre Antwort enthält den Wunsch nach Aufschub.",
              "Die Nachricht zeigt den körperlichen Austausch der Box.",
              "Ein möglicher Konflikthintergrund ist dokumentiert.",
              "Der Aufschub beweist eine absichtliche Blockade der Lagertür."
            ],
            "correct": [
              0,
              1,
              3
            ]
          },
          {
            "type": "decision",
            "decisionKey": "archive",
            "title": "Original oder schnelle Kopie?",
            "story": "Die vollständige digitale Kopie des Kassenordners ist bereits gesichert. Die Helfer möchten den Bürobereich abbauen. Du entscheidest, ob auch die Originalunterlagen im Zusammenhang erhalten bleiben.",
            "question": "Wie gehst du mit den Originalbelegen um?",
            "choices": [
              {
                "id": "seal",
                "label": "Originalbelege dokumentieren und bis zur Sicherung zusammenhalten",
                "reveal": "Die Originale werden geordnet gesichert. Unterschriften und Zusammenhang können später vollständig abgeglichen werden.",
                "note": "Kassenoriginale im Zusammenhang dokumentiert und gesichert."
              },
              {
                "id": "copy",
                "label": "Nur die gesicherte Kopie nutzen und den Abbau freigeben",
                "reveal": "Die digitale Kopie bleibt erhalten. Beim freigegebenen Abbau gehen jedoch einzelne Originalblätter verloren; ein späterer vollständiger Originalabgleich ist eingeschränkt.",
                "note": "Digitale Kopie erhalten, einzelne Originale beim freigegebenen Abbau verloren."
              }
            ],
            "kind": "Deine Entscheidung",
            "hint": "Diese Entscheidung hat keine vorgegebene richtige Antwort. Sie verändert den weiteren Weg."
          }
        ],
        "art": "assets/grasbrunn-5.webp",
        "artAlt": "Logistikschreibtisch mit Uhr, Funkgerät, Abholzetteln und Festplan.",
        "guide": "Eine Entnahme kann einen Konflikt erklären. Der Austausch braucht eigene Belege."
      },
      {
        "title": "Eine Box zu viel",
        "icon": "📦",
        "steps": [
          {
            "title": "Welche Box wurde wohin geschickt?",
            "story": "Der von Eva unterzeichnete Abholauftrag nennt ausdrücklich G-17 und die Übergabe am Materialplatz. Die gesicherte Rückmeldung von Benno nennt G-71 als tatsächlich abgeholte Box. Das Öffnungsprotokoll bestätigt G-71 und den leeren Inhalt.",
            "question": "Ordne den Dokumenten ihre konkrete Aussage zu.",
            "type": "match",
            "left": [
              "Abholauftrag",
              "Bennos Rückmeldung",
              "Öffnungsprotokoll"
            ],
            "right": [
              "G-17 soll am Materialplatz übergeben werden.",
              "G-71 wurde tatsächlich abgeholt.",
              "G-71 wurde nach der Abholung geöffnet und war leer."
            ],
            "correct": [
              0,
              1,
              2
            ],
            "hint": "Geplanter Auftrag und tatsächliche Durchführung sind verschiedene Quellen.",
            "reveal": "Der Auftrag passt nicht zur tatsächlich bereitgestellten Box. Benno meldete die gravierte Kennung seiner Abholung, statt eine Identität zwischen den Boxen zu beweisen.",
            "note": "Auftrag nennt G-17; tatsächlich abgeholt und anschließend leer vorgefunden wurde G-71.",
            "kind": "Ermitteln",
            "variants": [
              {
                "when": {
                  "archive": "copy"
                },
                "patch": {
                  "type": "multi",
                  "title": "Was blieb nach dem Abbau?",
                  "story": "Beim freigegebenen Büroabbau gingen einzelne Kassenoriginale verloren. Die vollständige frühere digitale Kopie ist gesichert. Bennos Rückmeldung und das Öffnungsprotokoll wurden unabhängig davon am Materialplatz gesichert. Der kopierte Abholauftrag nennt G-17; beide anderen Quellen nennen G-71.",
                  "question": "Welche drei Quellen bleiben für diesen Vergleich verfügbar?",
                  "items": [
                    "Die gesicherte digitale Kopie des Abholauftrags",
                    "Bennos separat gesicherte Rückmeldung",
                    "Das separat gesicherte Öffnungsprotokoll",
                    "Jedes verschwundene Kassenoriginal",
                    "Ein vollständiger Materialabgleich ohne die Originalblätter"
                  ],
                  "correct": [
                    0,
                    1,
                    2
                  ],
                  "hint": "Trenne verlorene Originalblätter von ihrer gesicherten Kopie und getrennt gesicherten Unterlagen.",
                  "reveal": "Kopie, Rückmeldung und Öffnungsprotokoll bleiben nutzbar. Sie zeigen den Widerspruch zwischen geplanter und tatsächlicher Box; ein vollständiger Originalabgleich ist auf deinem Weg eingeschränkt.",
                  "note": "Nach dem Abbau bleiben Auftragskopie, Rückmeldung und Öffnungsprotokoll erhalten."
                }
              }
            ]
          },
          {
            "title": "Die umgedrehte Notiz",
            "story": "Antons Merkhilfe nennt vier Begriffe: LAGER, KASSE, BÜHNE, FAHRZEUG. Der gesuchte Begriff bezeichnet weder seinen Fundort noch Jules Auftrittsort noch das Transportmittel. Er bezeichnet die Unterlagen, auf die sich sein Streit mit Eva bezieht.",
            "question": "Welcher Begriff erfüllt sämtliche Bedingungen?",
            "type": "input",
            "hint": "Ordne jedem ausgeschlossenen Begriff seine Funktion in der bisherigen Akte zu.",
            "reveal": "LAGER ist Antons Fundort, BÜHNE Jules Auftrittsort, FAHRZEUG das Transportmittel. KASSE bleibt als Bezug der umstrittenen Unterlagen.",
            "note": "LAGER ist Antons Fundort, BÜHNE Jules Auftrittsort, FAHRZEUG das Transportmittel. KASSE bleibt als Bezug der umstrittenen Unterlagen.",
            "kind": "Ermitteln",
            "accepted": [
              "KASSE"
            ],
            "normalize": "text",
            "label": "Deine Schlussfolgerung"
          },
          {
            "title": "Drei Quellen für einen Austausch",
            "story": "Du vergleichst: Foto von G-17 um 20:06; Aufnahme von G-71 um 20:12; Materialbericht, der zwei verschiedene Boxen bestätigt. Ein Gast behauptet dagegen, nur ein Etikett sei verrutscht.",
            "question": "Welche Angaben stützen gemeinsam einen Gegenstandswechsel und nicht nur eine falsch gelesene Siegelnummer?",
            "type": "multi",
            "hint": "Prüfe jede Aussage einzeln gegen die Quellen. Eine plausible Ergänzung ist nicht automatisch ein belegter Schluss.",
            "reveal": "Zeitlich abgeglichene Kennungen und Materialbericht stützen den Austausch. Eine Vermutung über ein Etikett erklärt die unterschiedlichen Gravuren und Gegenstände nicht.",
            "note": "Austausch durch zwei Kennungsaufnahmen und Materialbericht gestützt.",
            "kind": "Ermitteln",
            "items": [
              "Zwei abgeglichene Aufnahmen mit verschiedenen gravierten Boxenkennungen.",
              "Materialbericht über zwei unterschiedliche Gegenstände.",
              "Allein die Vertauschung 614↔641 ohne Prüfung der Gravur.",
              "Die ursprüngliche volle Box und die kontrolliert leere Ersatzbox.",
              "Der ungewöhnliche Beruf eines Transporthelfers."
            ],
            "correct": [
              0,
              1,
              3
            ]
          },
          {
            "title": "Der Weg der leeren Box",
            "story": "Der dokumentierte Transport lautet: G-71 steht im Kassenzelt bereit; Benno übernimmt sie um 20:13; er bringt sie zum Materialplatz; dort wird sie kontrolliert geöffnet. Der leere Inhalt wird protokolliert und um 20:15 gemeldet. Drei unveränderte Vorgänge stehen in verschiedenen Zeitformaten: Aufnahme UTC 18:12:00; Abholscan 20:13:45 auf einem Gerät mit 45 Sekunden Vorsprung; Meldung örtlich 20:15:00.",
            "question": "Ordne die drei Transporteinträge nach örtlicher Festzeit: Kameraeintrag, Abholscan und Meldung.",
            "type": "order",
            "hint": "Suche in deiner Fallakte nach den Ausgangszeiten. Gleiche unterschiedliche Uhren ab, bevor du die Karten legst.",
            "reveal": "Aufnahme→20:12:00; Scan→20:13:00; Meldung→20:15:00. Die Formate werden vor dem Ordnen korrigiert.",
            "note": "Transportkette der Ersatzbox G-71 dokumentiert.",
            "kind": "Ermitteln",
            "items": [
              "G-71 auf der Aufnahme",
              "Bennos Abholscan",
              "Meldung des leeren Inhalts"
            ],
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "title": "Der Auftrag an Anton",
            "story": "Der Papierzettel für Lager E3 stammt aus Evas Auftragsblock. Seine erhaltene Durchschrift passt zum selben Schreibvorgang und trägt Evas von ihr bestätigte Handschrift. Anton verließ die Kasse um 20:07; Eva trat um 20:08 hinein. Die erhaltene Durchschrift und eine Helferaufnahme bestätigen die Übergabe des Auftrags um 20:04. Die Durchschrift nennt außerdem 20:03 als Zeitpunkt der Erstellung.",
            "question": "Welche drei voneinander verschiedenen Belegbereiche verbinden Eva mit Antons Lagergang, ohne eine absichtliche Türblockade zu behaupten?",
            "type": "multi",
            "hint": "Prüfe jede Aussage einzeln gegen die Quellen. Eine plausible Ergänzung ist nicht automatisch ein belegter Schluss.",
            "reveal": "Eva ließ Anton im passenden Zeitraum Siegelrollen holen. Ob sie den Auftrag als Ablenkung nutzte, prüfst du im Zusammenhang mit dem Austausch und den übrigen Belegen.",
            "note": "Lagerauftrag von Eva: erstellt 20:03, Übergabe 20:04, Antons Abgang 20:07. Eva tritt um 20:08 ins Kassenzelt.",
            "kind": "Ermitteln",
            "items": [
              "Passende Durchschrift mit bestätigter Handschrift.",
              "Helferaufnahme der Übergabe vor Antons Abgang.",
              "Zeitliche Folge Lagergang vor Evas Eintritt.",
              "Klemmende Tür als alleiniger Nachweis einer absichtlichen Einsperrung.",
              "Jules Weinverkauf als Beleg für den Auftrag."
            ],
            "correct": [
              0,
              1,
              2
            ]
          }
        ],
        "art": "assets/grasbrunn-6.webp",
        "artAlt": "Gesicherte Kassenunterlagen mit Originalbelegen und Siegelprobe.",
        "guide": "Auftrag und tatsächlicher Transport sind verschiedene Dinge."
      },
      {
        "title": "Der gesonderte Abholweg",
        "icon": "🚐",
        "steps": [
          {
            "title": "Die zweite Abholung",
            "story": "In Evas unterschriebenem Ablaufblatt steht ein zusätzlicher Auftrag: „G-17 nach Ende des Festes gesondert an Fahrzeug F2 übergeben.“ Die normale Spendenübergabe sollte dagegen über den Materialplatz dokumentiert werden. Ein Fahrzeug F2 ist auf der Festliste tatsächlich vorhanden.",
            "question": "Welche zwei Punkte müssen damit weiter geprüft werden?",
            "type": "multi",
            "items": [
              "Die vom normalen Weg abweichende Sonderübergabe von G-17.",
              "Wer über Fahrzeug F2 verfügen konnte und ob die Übergabe tatsächlich stattfand.",
              "Dass F2 ohne weitere Angaben automatisch eine gestohlene Box enthält.",
              "Dass ein unterschriebenes Blatt jede Durchführung beweist."
            ],
            "correct": [
              0,
              1
            ],
            "hint": "Eine Anweisung und ihre tatsächliche Durchführung sind zu unterscheiden.",
            "reveal": "Das Sonderblatt liefert einen konkreten Ansatz für den Verbleib der vollen Box. Du lässt Fahrzeug und Übergabe prüfen.",
            "note": "Sonderauftrag von Eva nennt G-17 und Fahrzeug F2; Durchführung noch zu prüfen.",
            "kind": "Ermitteln"
          },
          {
            "title": "Eine Rechnung erklärt keinen Boxenweg",
            "story": "Eva sagt in ihrer ersten aufgezeichneten Aussage: „Die 1.200 Euro sind doch nur eine Buchungsfrage.“ Die Entnahme könnte eine Buchungsfrage sein. Der Kameraeintritt, der Lagerauftrag und die Sonderübergabe betreffen jedoch andere Vorgänge.",
            "question": "Welche Einordnung berücksichtigt den Unterschied?",
            "type": "choice",
            "options": [
              "Mit dem Wort Buchungsfrage sind alle übrigen Quellen widerlegt.",
              "Eine Entnahme beweist ohne weitere Quellen jede spätere Tat.",
              "Eine Erklärung zur Entnahme beantwortet nicht automatisch die unabhängigen Fragen zum Boxenaustausch."
            ],
            "answer": 2,
            "hint": "Beziehe jede Erklärung auf genau die Quellen, die sie tatsächlich erklärt.",
            "reveal": "Du lässt Eva die Entnahme erklären, hältst aber die dokumentierten Fragen zum Austausch und Sonderweg getrennt fest.",
            "note": "Entnahme, Austausch und Sonderübergabe müssen jeweils an ihren Quellen geprüft werden.",
            "kind": "Ermitteln"
          },
          {
            "title": "Kennung, Siegel und Auftrag",
            "story": "Die geprüften Unterlagen nennen drei getrennte Merkmale: G-17 ist die gravierte Kennung der vollen Box, 614 ist ihr Siegel und F2 ist das Fahrzeug im Sonderauftrag.",
            "question": "Ein separater Kontrollzettel vertauscht die Kategorien: „G-17 ist das Fahrzeug; 614 ist die Box; F2 ist das Siegel.“ Ordne die nötigen Quellen zu, um alle drei Fehler unabhängig zu berichtigen.",
            "type": "match",
            "hint": "Frage bei jeder Zuordnung: Was belegt diese Quelle unmittelbar, und welche stärkere Behauptung bleibt noch offen?",
            "reveal": "Du trennst Gegenstand, Siegel und Transportmittel. Dadurch wird der Bericht für das Team nachvollziehbar.",
            "note": "G-17 Boxkennung; 614 Siegel; F2 Sonderfahrzeug.",
            "kind": "Ermitteln",
            "left": [
              "G-17 richtig einordnen",
              "614 richtig einordnen",
              "F2 richtig einordnen"
            ],
            "right": [
              "Gravur auf der fotografierten ursprünglichen Box.",
              "Fotografiertes Siegel derselben Box.",
              "Festfahrzeugliste zusammen mit dem Sonderauftrag."
            ],
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "title": "Die Belege vor dem Gespräch",
            "story": "Du hast Evas Anwesenheit im Austauschfenster, ihr widerlegtes Stand-Alibi, den Lagerauftrag und den Sonderauftrag. Jule und Benno sind für den unmittelbaren Austausch durch unabhängige Aufnahmen entlastet.",
            "question": "Welche Quellenketten verbinden Person, Gelegenheit und Sonderweg, statt nur auffällige Tätigkeiten zu zählen?",
            "type": "multi",
            "hint": "Prüfe jede Aussage einzeln gegen die Quellen. Eine plausible Ergänzung ist nicht automatisch ein belegter Schluss.",
            "reveal": "Die Belege konzentrieren den Verdacht auf Eva. Der tatsächliche Verbleib von G-17 wird separat verfolgt.",
            "note": "Verdacht auf Eva stützt sich auf Anwesenheit, Alibiwiderspruch und ihre beiden Aufträge.",
            "kind": "Ermitteln",
            "items": [
              "Korrigierte Außenaufnahme → Eva im verengten Fenster.",
              "Lagerauftrag mit Durchschrift → Übergabe vor Antons Abgang.",
              "Unterschriebener Sonderauftrag → benanntes Fahrzeug in der Festliste.",
              "Bennos Materialtransport → damit zwingend Urheberschaft des Sonderauftrags.",
              "Jules Zählhilfe → damit zwingend Austausch der Box."
            ],
            "correct": [
              0,
              1,
              2
            ]
          },
          {
            "type": "decision",
            "decisionKey": "approach",
            "title": "Was erfährt das Fest zuerst?",
            "story": "G-17 ist noch nicht wiedergefunden. Dein Team kann den Sonderweg diskret prüfen. Auf der Wiese drängen Gäste und eine Journalistin auf eine Erklärung. Du entscheidest über dein Vorgehen.",
            "question": "Wie gehst du mit dem Verdacht um?",
            "choices": [
              {
                "id": "quiet",
                "label": "Den Fahrzeughinweis vertraulich an dein Team geben und diskret prüfen lassen",
                "reveal": "Dein Team kann F2 und den Sonderweg kontrollieren, bevor die Information öffentlich wird. Du hältst die Gäste über die Suche und die Sicherung der Kasse auf dem Laufenden, ohne eine Person vorzeitig zu beschuldigen.",
                "note": "Sonderweg vertraulich prüfen lassen; keine vorzeitige öffentliche Beschuldigung."
              },
              {
                "id": "public",
                "label": "Eva und den Fahrzeughinweis sofort öffentlich nennen",
                "reveal": "Der Hinweis verbreitet sich auf der Wiese. Eva beendet das Gespräch. Am Sonderweg kommen nun zahlreiche Helfer und Gäste vorbei; die spätere Zuordnung einzelner Beobachtungen wird schwieriger.",
                "note": "Eva und Fahrzeughinweis öffentlich genannt; Gesprächsabbruch und zusätzliche Unübersichtlichkeit."
              }
            ],
            "kind": "Deine Entscheidung",
            "hint": "Diese Entscheidung hat keine vorgegebene richtige Antwort. Sie verändert den weiteren Weg."
          }
        ],
        "art": "assets/grasbrunn-7.webp",
        "artAlt": "Zwei ähnliche Kassenboxen und ein Transportwagen hinter einem Zelt.",
        "guide": "Ich prüfe den Sonderweg, ohne eine Person vorzeitig vorzuführen."
      },
      {
        "title": "Wenn das Fest verstummt",
        "icon": "🌅",
        "steps": [
          {
            "title": "Ein Verweis auf Benno",
            "story": "In Evas gesicherter erster Aussage steht: „Benno hat die Sonderfahrt angeordnet.“ Das von Eva unterschriebene Sonderblatt nennt jedoch keine entsprechende Beauftragung durch Benno.",
            "question": "Welche zwei Nachfragen prüfen ihre Erklärung anhand von Quellen?",
            "type": "multi",
            "items": [
              "Auf welchen dokumentierten Auftrag von Benno beziehen Sie sich?",
              "Wer kann Bennos behaupteten Auftrag unabhängig bestätigen?",
              "Warum lächeln Sie dabei?",
              "Ist ein Fahrer nicht immer für jeden Inhalt verantwortlich?"
            ],
            "correct": [
              0,
              1
            ],
            "hint": "Frage nach dokumentierten oder unabhängig bestätigten Grundlagen.",
            "reveal": "In der vorliegenden Aussage ist kein solcher Auftrag genannt. Du notierst die Prüffragen; auf dem öffentlichen Weg antwortet Eva vorerst nicht weiter.",
            "note": "Evas Verweis auf Benno hat bisher keine dokumentierte Auftragsgrundlage.",
            "kind": "Ermitteln",
            "variants": [
              {
                "when": {
                  "approach": "public"
                },
                "patch": {
                  "title": "Eine offene Frage nach dem Auftritt",
                  "story": "Eva hat nach der öffentlichen Konfrontation das Gespräch beendet. Du prüfst ihre zuvor gesicherte erste Aussage: „Benno hat die Sonderfahrt angeordnet.“ Im von ihr unterschriebenen Sonderblatt ist kein entsprechender Auftrag von Benno dokumentiert. Du formulierst Fragen für die weitere Ermittlung."
                }
              }
            ]
          },
          {
            "title": "Die Reihenfolge vor dem Austausch",
            "story": "Sechs Ereignisse sind belegt: Antons Nachricht um 19:40, Evas Antwort um 19:43, Erstellung des Lagerauftrags um 20:03, Übergabe um 20:04, Antons Gang zum Lager um 20:07 und Evas Eintritt ins Kassenzelt um 20:08.",
            "question": "Ordne die Ereignisse anhand der Akte ohne Uhrzeiten auf den Karten.",
            "type": "order",
            "hint": "Suche in deiner Fallakte nach den Ausgangszeiten. Gleiche unterschiedliche Uhren ab, bevor du die Karten legst.",
            "reveal": "19:40 → 19:43 → 20:03 → 20:04 → 20:07 → 20:08.",
            "note": "19:40 Nachricht → 19:43 Antwort → 20:03 Auftrag erstellt → 20:04 Auftrag übergeben → 20:07 Anton zum Lager → 20:08 Eva ins Zelt.",
            "kind": "Ermitteln",
            "items": [
              "Anton kündigt die Klärung an.",
              "Eva antwortet auf die Nachricht.",
              "Eva verfasst den Lagerauftrag.",
              "Der Auftrag wird Anton übergeben.",
              "Anton geht zum Lager.",
              "Eva tritt ins Kassenzelt."
            ],
            "correct": [
              0,
              1,
              2,
              3,
              4,
              5
            ]
          },
          {
            "title": "Ein Verdacht aus mehreren Quellen",
            "story": "Jule war durchgehend auf der Verkostungsbühne, Benno im Austauschfenster am Materialplatz. Eva betrat das Kassenzelt in diesem Fenster, nannte ein durch die Aufnahme widerlegtes Stand-Alibi und unterschrieb die relevanten Aufträge.",
            "question": "Welche Angaben belasten Eva im Hinblick auf den unmittelbaren Austausch, welche begründen nur weitere Prüfungen?",
            "type": "match",
            "hint": "Frage bei jeder Zuordnung: Was belegt diese Quelle unmittelbar, und welche stärkere Behauptung bleibt noch offen?",
            "reveal": "Das Gesamtbild konzentriert sich auf Eva. Du gibst deinem Team die Belege und die noch offenen Prüfpunkte zum Verbleib von G-17.",
            "note": "Gesamtbild konzentriert sich auf Eva; Verbleib von G-17 bleibt gesonderter Prüfschritt.",
            "kind": "Ermitteln",
            "left": [
              "Eva im verengten Zeltfenster",
              "Sonderauftrag nennt F2",
              "Unterschriebene private Entnahme",
              "Bennos späterer Transport"
            ],
            "right": [
              "Dokumentierte Gelegenheit am Gegenstand.",
              "Konkreter Ansatz zum Boxenverbleib; Durchführung noch zu prüfen.",
              "Möglicher Konflikthintergrund, kein unmittelbarer Austauschbeleg.",
              "Tatsächlicher Transport der Ersatzbox nach dem Wechsel."
            ],
            "correct": [
              0,
              1,
              2,
              3
            ]
          },
          {
            "title": "Bevor das Dorf ein Urteil fällt",
            "story": "Du bereitest den Abschlussbericht vor. Eine unterschriebene Anweisung, eine tatsächliche Übergabe und ein späteres Geständnis wären unterschiedliche Quellen. Ein Geständnis ist bisher nicht protokolliert.",
            "question": "Ordne den Aussagen den jeweils nötigen zusätzlichen Prüfschritt zu.",
            "type": "match",
            "left": [
              "Ein Sonderauftrag liegt vor.",
              "Ein Fahrzeug wurde gesehen.",
              "Eine Person würde ein Geständnis ablegen."
            ],
            "right": [
              "Die tatsächliche Durchführung anhand weiterer Quellen prüfen.",
              "Die Zuordnung von Fahrzeug, Zeitpunkt und Gegenstand prüfen.",
              "Die Angaben mit unabhängigen Spuren abgleichen."
            ],
            "correct": [
              0,
              1,
              2
            ],
            "hint": "Eine Aussage ersetzt nicht den nächsten unabhängigen Abgleich.",
            "reveal": "Du dokumentierst, welche Fragen beantwortet und welche noch offen sind. Hinweise und Rätselhilfe ändern diese Quellen nicht.",
            "note": "Abschlussprüfung trennt Anweisung, Durchführung, Fahrzeugbeobachtung und möglichen Spurenabgleich.",
            "kind": "Ermitteln"
          },
          {
            "type": "decision",
            "decisionKey": "verdict",
            "title": "Dein Bericht für das Festteam",
            "story": "Anton ist wieder bei seinem Team. Du hast die Wege, Boxenkennungen und Unterlagen geordnet. Du entscheidest, welchen Hauptverdacht dein Bericht benennt – oder ob du zusätzliche Prüfungen anforderst. Eine Festnahme folgt nicht allein aus deiner Auswahl, sondern muss durch die dokumentierten Belege getragen werden.",
            "question": "Wie schließt du deinen Ermittlungsdurchlauf ab?",
            "choices": [
              {
                "id": "eva",
                "label": "Eva als Hauptverdacht benennen und den Sonderweg von G-17 belegen lassen",
                "reveal": "Du legst den Schwerpunkt auf Evas dokumentierten Eintritt und ihre Aufträge; der Verbleib der vollen Box wird anhand des Sonderwegs geprüft.",
                "note": "Bericht: Hauptverdacht Eva; Sonderweg von G-17 weiter prüfen."
              },
              {
                "id": "benno",
                "label": "Benno als Hauptverdacht benennen",
                "reveal": "Dein Team verweist auf seine Aufnahme im Austauschfenster. Die spätere Abholung allein trägt den unmittelbaren Austauschverdacht nicht.",
                "note": "Bericht: Hauptverdacht Benno trotz Entlastung für den unmittelbaren Austausch."
              },
              {
                "id": "jule",
                "label": "Jule als Hauptverdacht benennen",
                "reveal": "Dein Team verweist auf Jules durchgehendes Bühnen-Alibi. Das Helfen beim Zählen ersetzt keinen Tatbeleg.",
                "note": "Bericht: Hauptverdacht Jule trotz unabhängigem Alibi."
              },
              {
                "id": "defer",
                "label": "Noch keinen Hauptverdacht benennen und zusätzliche Prüfung anfordern",
                "reveal": "Du legst eine geordnete Akte mit klar bezeichneten offenen Fragen vor. Dein Team führt die Prüfung weiter.",
                "note": "Bericht: zusätzliche Prüfung angefordert; Akte offen."
              }
            ],
            "kind": "Deine Entscheidung",
            "hint": "Diese Entscheidung hat keine vorgegebene richtige Antwort. Sie verändert den weiteren Weg."
          }
        ],
        "art": "assets/grasbrunn-8.webp",
        "artAlt": "Leere Festwiese im Morgenlicht mit geschlossener Box und Fallakte.",
        "guide": "Ich halte fest, was belegt ist und was weiter geprüft werden muss."
      }
    ],
    "suspects": [
      {
        "name": "Eva Leitner",
        "role": "Fiktive Festkoordinatorin",
        "detail": "Verteilt schriftliche Aufträge und gibt Ausgaben frei."
      },
      {
        "name": "Benno Kranz",
        "role": "Fiktiver Logistikhelfer",
        "detail": "Transportiert Material und bereitgestellte Kassenboxen."
      },
      {
        "name": "Jule Sommer",
        "role": "Fiktive Gastwinzerin",
        "detail": "Betreut einen Stand und half Anton beim Zählen."
      }
    ],
    "ending": "Der Abschluss hängt von deinen festgehaltenen Entscheidungen ab.",
    "epilogue": "Dein Team führt die Akte anhand der dokumentierten Quellen und offenen Prüfpunkte weiter.",
    "endingRules": [
      {
        "when": {
          "verdict": "defer"
        },
        "ending": "open"
      },
      {
        "when": {
          "verdict": [
            "benno",
            "jule"
          ]
        },
        "ending": "wrong"
      },
      {
        "when": {
          "verdict": "eva",
          "interview": "listen",
          "archive": "seal",
          "approach": "quiet"
        },
        "ending": "clear"
      },
      {
        "when": {
          "verdict": "eva"
        },
        "ending": "fractured"
      }
    ],
    "consequenceRules": [
      {
        "when": {
          "interview": "pressure"
        },
        "text": "Rosi beendete unter öffentlichem Druck ihre freiwillige Mitarbeit. Ihr zusätzlicher persönlicher Abgleich des Übergabewegs bleibt aus."
      },
      {
        "when": {
          "archive": "copy"
        },
        "text": "Beim freigegebenen Abbau gingen einzelne Kassenoriginale verloren; die digitale Kopie blieb erhalten."
      },
      {
        "when": {
          "approach": "public"
        },
        "text": "Die öffentliche Nennung des Fahrzeughinweises erschwerte die Zuordnung späterer Beobachtungen."
      }
    ],
    "endings": {
      "clear": {
        "title": "Die Kasse kommt zurück",
        "summary": "Die Spenden werden wiedergefunden, und der Ablauf ist unabhängig nachvollziehbar.",
        "text": "Dein Team prüft den Sonderweg diskret und findet G-17 mit dem dokumentierten Siegel im zugeordneten Fahrzeug F2. Die kontrollierte Öffnung bestätigt die 4.860 Euro. Rosi zeigt den damaligen Übergabeweg; ihre Angaben werden mit den Unterlagen verglichen. Gesicherte Originale, Aufnahmen und Aufträge lassen sich vollständig abgleichen. Im vertraulichen Gespräch gesteht Eva den Austausch: Sie wollte die angekündigte Klärung der Entnahme umgehen und die Festkasse zunächst aus dem normalen Ablauf nehmen. Dein Team gleicht ihre Angaben mit den unabhängigen Quellen ab. Die Entnahme von 1.200 Euro bleibt als eigener Vorgang dokumentiert.",
        "epilogue": "Anton sitzt wieder bei seinen Helfern. Jule und Benno werden nicht wegen ihrer Aufgaben verdächtigt, sondern anhand der Aufnahmen entlastet. Das Festteam sichert die Spenden für den fiktiven Jugendgarten. Du gehst durch den Morgentau, Maus. Heute bleibt nicht nur eine Geschichte zurück, sondern eine geordnete Akte."
      },
      "fractured": {
        "title": "Spuren im Morgentau",
        "summary": "Der Hauptverdacht ist schlüssig, doch Teile der Prüfung oder des Geldwegs bleiben offen.",
        "text": "Dein Bericht benennt Eva anhand ihrer dokumentierten Anwesenheit und Aufträge. Die Quellen tragen den Verdacht weiter, aber eine vollständig abgeglichene Aufklärung und Rückgabe aller Spenden lassen sich in diesem Ende noch nicht melden. Dein Team setzt die Prüfung fort. Die Folgen deiner früheren Entscheidungen werden ausdrücklich in der Akte festgehalten.",
        "epilogue": "Anton ist in Sicherheit. Zwischen den leeren Tischen bleiben Fragen zum Geld und zur weiteren Aufklärung. Du hast einen wichtigen Ansatz gefunden, doch der Abschluss ist noch offen."
      },
      "wrong": {
        "title": "Verdacht im falschen Zelt",
        "summary": "Deine Empfehlung widerspricht einer unabhängigen Entlastung.",
        "text": "Du benennst Jule oder Benno trotz der für den unmittelbaren Austausch entlastenden Aufnahmen als Hauptverdacht. Dein Team übernimmt den Bericht nicht ungeprüft und veranlasst einen erneuten Quellenabgleich. Niemand wird allein wegen deiner Auswahl überführt. Der konkrete Verdacht auf Eva und der Sonderweg von G-17 müssen neu zusammengeführt werden.",
        "epilogue": "Anton ist wieder da, die Akte jedoch noch offen. Du merkst, wie schnell ein Gerücht oder eine auffällige Aufgabe den Blick auf stärkere Belege verstellen kann. Im nächsten Durchlauf kannst du andere Entscheidungen treffen."
      },
      "open": {
        "title": "Ein Fest ohne Schlusswort",
        "summary": "Du übergibst eine geordnete Akte mit klar bezeichneten offenen Fragen.",
        "text": "Du legst noch keinen Hauptverdacht fest. Die gesicherten Quellen, die unabhängigen Alibis und der Hinweis auf Fahrzeug F2 gehen an die weitere Ermittlung. Anton ist gefunden; die Fragen nach Verantwortung und Verbleib aller Spenden werden weiter geprüft. Eine vollständige Aufklärung wird in diesem Ende nicht vorgetäuscht.",
        "epilogue": "Das Festteam packt die letzten Lichterketten ein. Du verabschiedest dich von Anton und notierst die nächsten Prüfpunkte. Dein Durchlauf endet – die Ermittlungen gehen weiter."
      }
    },
    "difficulty": "Anspruchsvoll"
  }
];
