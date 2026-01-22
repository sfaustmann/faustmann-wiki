![Image: image_001](./Profi-Tipps%20für%20besseres%20Diktieren%20mit%20Spracherkennung_images/image_001.png)

Profi-Tipps für besseres Diktieren mit Spracherkennung

Thax Software GmbH · Halberstädter Str. 6 · 10711 Berlin

**Inhaltsverzeichnis**

import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} />


# Hintergrundwissen Spracherkennung: Von der Sprache zum Text

Spracherkennungssoftware wandelt zunächst Audiodaten mithilfe eines akustischen Modells in Phoneme, d. h. eine Lautschrift, um. Im zweiten Schritt schaut die Spracherkennungssoftware, welche Wörter aus dem zugrundeliegenden Lexikon zu den Phonemen passen. Bei mehreren in Betracht kommenden Wörtern wird anhand des Sprachmodells entschieden, welches Wort am wahrscheinlichsten ist. Am Ende werden die Wörter zusammen als Phrase, also als Text, ausgegeben.

## Komponenten der Spracherkennung – Der Weg von der Sprache zum Text

![Image: image_002](./Profi-Tipps%20für%20besseres%20Diktieren%20mit%20Spracherkennung_images/image_002.png)

Mit diesem Wissen lassen sich Optimierungen an verschiedenen Stellen der Spracherkennung finden. Damit Spracherkennungssoftware mit möglichst wenig Zeit- und Rechenaufwand aus den Audiodaten die Phoneme produziert, sind die folgenden Hinweise zum richtigen Diktieren vorteilhaft.

# Generelle Hinweise zum richtigen Diktieren

**Damit die Spracherkennung gut funktioniert und Sie bessere Ergebnisse erhalten, beachten Sie während der Aufnahme bitte Folgendes:**

1. Die Audioaufnahme sollte möglichst nur Ihre Stimme beinhalten, d. h. je weniger Hintergrundgeräusche, desto besser.
2. Die Aufnahmequalität hängt auch von der verwendeten Diktiertechnik bzw. dem Mikrofon ab. Hier lohnt es sich, auf Qualität zu setzen. Einige Headsets oder speziell für die Spracherkennung entwickelte Diktiermikrofone können teilweise Hintergrundgeräusche wegfiltern.
3. Bei kabellosen Geräten (Bluetooth oder DECT) könnte je nach Modell und Funkstandard durch eine komprimierte drahtlose Datenübertragung die Qualität etwas leiden.
4. Des Weiteren produzieren hochwertige Mikrofone Audiodaten in einer von der Spracherkennungssoftware geforderten Abtastrate und Bittiefe. Beispielsweise verlangt die Dragon-Spracherkennungssoftware eine Abtastrate (Samplingrate) von mindestens 16 kHz.
5. Ergänzend zur Aufnahmequalität zählt auch die Qualität Ihrer Aussprache. Vermeiden Sie es zu Nuscheln und Wörter undeutlich auszusprechen, Silben zu verschlucken und starke Dialekte zu verwenden.

**Hinweise und Tipps zum besseren Diktieren bei Nutzung von Spracherkennung**

## Die richtige Aufnahmeumgebung

- Nehmen Sie Ihr Diktat in einer ruhigen Umgebung auf.
- Geräusche wie Stimmen anderer Personen, Telefonklingeln, Straßenlärm oder Hall aufgrund der Räumlichkeiten verschlechtern die Spracherkennung.

## Die richtige Position des Aufnahmegeräts

- Bringen Sie das Mikrofon des Aufnahmegeräts (Diktiermikrofon, Diktiergerät, Headset oder Smartphone) mit gleichbleibendem Abstand möglichst nah an Ihren Mund und sprechen Sie in Richtung des Mikrofons.
- Ein gleichbleibend dichter Abstand zum Mikrofon ist generell für eine gute Sprachaufnahme vorteilhaft.
- Vermeiden Sie jedoch mit Ihrem Mund unmittelbar und zu dicht am Mikrofon zu sein, da so starke Pustgeräusche entstehen, welche die Spracherkennung erschweren.

## Die richtige Handhabung während der Aufnahme

- Wenn Sie längere Pausen machen oder Sie sich räuspern müssen, unterbrechen Sie die Aufnahme.
- Bei Nutzung der Front-End Spracherkennung drücken Sie dazu auf das Mikrofon-Symbol der Dragon-Leiste, drücken die entsprechend konfigurierte Taste (meistens Num+) oder sagen Sie den Befehl: „Geh schlafen“.

## Die wichtigsten Aspekte während der Aufnahme

- Die Spracherkennung schreibt nur das, was Sie diktieren. D. h. Sie müssen Satzzeichen wie Punkt, Komma, Anführungszeichen und Absätze etc. mitdiktieren. Dazu gibt es bestimmte Diktierbefehle für die Dragon Spracherkennung. Beachten Sie dazu unser separates Handbuch „Die 200 besten Befehle der Dragon Spracherkennung: Tipps zum besseren Diktieren mit Sprachbefehlen“.
- Vorteilhaft für gute Spracherkennung ist es, wenn Sie deutlich, aber dennoch natürlich sprechen.
- Da der KI-Algorithmus der Dragon Spracherkennung stark auf Satzzusammenhänge setzt, ist es wichtig, dass Sie komplette – und sinnvolle – Sätze oder Satzteile mit einem Mal flüssig diktieren.
- Möchten Sie die Funktions- oder Leistungsfähigkeit Ihrer Dragon-Software oder des Mikrofons testen, werden Sie eventuell ein unerwartet schlechtes Ergebnis der Spracherkennung erzielen, wenn Sie beispielsweise „Test, Test, A, B, C, 1, 2, 3“ diktieren. Diktieren Sie stattdessen einen Satz wie „Das ist ein Test Punkt“, bekommen Sie ein repräsentativeres Ergebnis für die Funktionsfähigkeit der Spracherkennungssoftware und Ihres Mikrofons.
- Vermeiden Sie Füllsilben wie „ähm“, denn auch diese wird die Spracherkennung eventuell versuchen, in Text umzusetzen.

# Technische Aspekte bei Nutzung mobiler Diktat-Aufnahmegeräte

- Wenn Sie zwecks Korrektur zurückspulen und überschreiben/übersprechen möchten: Achten Sie darauf, nach einem zuvor aufgenommenen, abgeschlossenen Wort oder Satz fortzusetzen. Bleibt durch das Überschreiben eine Silbe übrig, wird die Spracherkennung versuchen, diese in Text zu übersetzen, wodurch Sie ein schlechteres Ergebnis erhalten. Schlecht ist auch, wenn durch das Übersprechen das abschließende Satzzeichen des letzten Satzes verloren geht, da Dragon Satzzeichen nicht selber einsetzt, sondern diese mitdiktiert werden müssen.
- Wenn Sie sich korrigieren müssen, spulen Sie zurück und übersprechen Sie den zu korrigierenden Teil. Lassen Sie dagegen einen Versprecher stehen und diktieren einfach danach das Richtige, wird die Spracherkennung versuchen, beides in Text zu übersetzen, wodurch Sie nicht das gewünschte Ergebnis erhalten.
- Diktat stoppen: Schieben Sie den Schiebeschalter des Diktiergeräts erst auf STOP bzw. drücken Sie erst auf STOP, wenn Sie zu Ende gesprochen haben. Halb aufgenommene Wörter werden von der Spracherkennung nicht verstanden!
- Möchten Sie Zusatzinformationen – zum Beispiel für Ihre Assistenzkraft – mitgeben, bieten einige Diktiergeräte, wie GRUNDIG Digta 7, OM SYSTEM / OLYMPUS DS-9000 Serie, PHILIPS DPM 8000 Serie, den Wechsel in eine Infospur (auch Anweisung oder Kommentar genannt) an. In Verbindung mit einer professionellen Diktat-Workflowsoftware wie Findentity Dictate von Thax Software werden diese Infospuren vor Übergabe an die Spracherkennungssoftware erkannt bzw. herausgefiltert, sodass die diesbezüglichen Texte entweder farblich unterlegt im Word-Dokument ausgegeben werden oder dort gar nicht erscheinen.

# Kontakt

Sehr gerne stehen wir Ihnen bei weiteren Fragen zur Spracherkennung mit Nuance Dragon
und Findentity Dictate zur Verfügung.

|  |  |
| --- | --- |
| ![Image: image_003_raw](./Profi-Tipps%20für%20besseres%20Diktieren%20mit%20Spracherkennung_images/image_003_raw.svg) | Thax Software GmbH Halberstädter Str. 6 10711 Berlin Fon: +49 30 89064140 info@thax.de [www.thax.de](http://www.thax.de/) |