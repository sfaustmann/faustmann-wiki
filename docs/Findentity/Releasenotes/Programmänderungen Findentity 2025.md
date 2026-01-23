---
title: Findentity 2025
sidebar_position: 2
---

**Programmänderungen in den verschiedenen Versionen / Neuheiten Findentity**

## 2025-01-22

### Allgemein

- Findentity Administration:
- Kommunikation über Datenbank kann durch optionale Angabe einer Tabelle in Gruppen u. a. segmentiert werden.
- Option für weniger Netzwerkverkehr Dadurch wird beim Programmstart die Ermittlung anderer laufender Findentity-Instanzen im Netzwerk ausgelassen.
- AD-Synchronisation erweitert:
- Für neuen Benutzer wird erste Gruppe als Standardschreibkraft übernommen
- Mehrere Gruppen können aus Zwischenablage eingefügt werden
- Option "Nur Benutzer aus eigenen Gruppen anzeigen" geändert in "Nur eigene Gruppen und Benutzer aus eigenen Gruppen anzeigen"
- Wenn Option "Nur eigene Gruppen und Benutzer aus eigenen Gruppen anzeigen" aktiviert ist, sieht auch ein Diktat-Supervisor nur Diktate in eigenen Gruppen
- In Benutzerverwaltung (Gruppen) kann die individuelle Diktatakte direkt gewählt werden
- Optimierungen für große Anzahl an Benutzern
- Bei “Nur folgende Werte zulassen” für ein Datenbankfeld konnten einzelne zugelassene, durch Semikolon getrennte Werte angegeben werden. Nun können zulässige Werte auch durch einen regulären Ausdruck definiert werden. Dazu ist in das Feld „regex:“ gefolgt vom regulären Ausdruck einzugeben.
- In Findentity Arbeitsplatz neue Option „‘Nachricht an Platz‘ deaktivieren“, um den entsprechenden Button in der Funktionsleiste zu deaktivieren.

### Dictate

- Findentity Back-End Spracherkennung: Es gibt Optionen zum automatischen Herunterfahren oder Neustarten des Rechners
- Erweiterung von fdUSB (Diktiergeräte – Datenträger) zum Import von Diktaten vom „Findentity Web Dictate“.
- Text “Schreibkraft” nun überall durch “Bearbeiter” ersetzt
- Diktatimport
- Passwort verwenden-Fenster verbessert, wenn es ein Standardpasswort gibt
- Erfolgreicher Import wird durch grünen Punkt am Diktat angezeigt (wichtig, wenn Diktat nicht von Quelle gelöscht wird)
- Sichere Entfernung des Datenträgers wird jetzt auch geprüft, wenn Diktat aufgrund der entsprechenden Option nicht von Quelle gelöscht wird. Dadurch erscheint auch bei Einstellung am Ende die Meldung „Sie können das Diktiergerät jetzt entfernen“. Verhindern lässt sich dies durch die (schon früher vorhandene) Option „Sichere Entfernung nicht berücksichtigen“.
- Wenn Diktat nach Diktatübertragung oder durch Löschen-Button oder DEL-Taste nicht gelöscht werden kann, kommt eine Fehlermeldung, welche nach kurzer Zeit von selbst verschwindet, sodass ggf. die weitere Diktatübertragung nicht blockiert wird.
- Button “Akte alt” heißt jetzt in Findentity Dictate mur “Akte”, da es bei Findentity Dictate noch nicht die neue Akte gibt
- Neue Optionen:
- “Datenbank-Profil von Mobile Dictate als Sprachprofil interpretieren”
- „Nur Gruppen als Bearbeiter erlauben“ Dadurch werden in der Auswahl der Bearbeiter keine einzelnen Benutzer, sondern nur noch Gruppen angezeigt
- Keine Dokumentvorschau für TXE (Bisher wurde für verschlüsselte Diktate keine Dokumentvorschau gezeigt. Jetzt wird sie standardmäßig gezeigt, kann aber mit der neuen Option abgeschaltet werden.)
- Kein ‚Löschen‘ Button (gilt für Registerkarte „Diktatimport“)
- Kein ‚Zu Liste‘ Button (gilt für Registerkarte „Diktatimport“)
- Kein ‚Dauermodus‘ Button (gilt für Registerkarte „Diktatimport“)
- Fehler beseitigt
- In Diktat-Parameterfenster wurden einige Werte (z. B. Verfasser) nicht angezeigt
- Fehler: Beim Verschieben von TXE-Diktaten zwischen Akten ging die originale Dateiendung, z. B. „DSS“, verloren.
- Bei erledigten Diktaten konnte nicht Filter für gelöschte Einträge gesetzt werden.

### Office

- Chronologie geht auch in neuer Akte
- Serienbriefe gehen auch in neuer Datensätze-Form

## 2025-02-04

### Allgemein

- Button „Akte für automatische Zuordnung“ in der Benutzerverwaltung bezog sich auf alte Installationen und wurde nur aus Kompatibilitätsgründen angezeigt, sollte aber nicht mehr verwendet werden. Jetzt wird der Button ausgeblendet.
- Fehler beseitigt beim Setzen einer individuellen Diktatakte in der Benutzerverwaltung: Evtl. wurde das falsche Profil angeboten.

### Dictate

- Neues Philips-SDK 4.7.471.12 integriert
- Die optionale Diktatverschlüsselung wurde bisher nur für importierte Diktate (z. B. vom Handdiktiergerät) angewendet. Jetzt werden auch stationär aufgenommene Diktate sofort verschlüsselt.
- Für Diktatarten lassen sich Favoriten festlegen, welche in der Liste im Fenster „Diktatparameter“ oben erscheinen

#### Findentity Back-End Spracherkennung

- Problem i. V. mit Dragon Legal 16 Roaming User Profilen beseitigt: Die Lernfunktion konnte fehlschlagen mit dem im Log ausgegeben Fehler „DgnVocTools: Error -2147218470: Der Sprecher ‚…‘ mit der installierten Version von NaturallySpeaking nicht kompatibel.“

## 2025-02-19

### Allgemein

- Checkbox „Alle“ zum Wählen aller Gruppen in der AD-Verwaltung

### Dictate

- Neue Optionen:
- Nur Diktate in Datenbank anzeigen
- Sicherungskopien verschlüsseln
- Bei Diktatexport Verschlüsselung erlauben
- Diktatlänge-Fehler bei Import mit Drag & Drop i. V. m. Verschlüsselung korrigiert
- Bearbeiter für mehrere Diktate gleichzeitig änderbar
- Fenster für Diktatexport mit Auswahl verschiedener Optionen – hierüber auch Export mit automatischer Diktat-Entschlüsselung möglich
- Bei Diktatwiederherstellung wird ggf. Diktat wieder verschlüsselt
- Diktatübertragung mittels SDK jetzt auch für Olympus / OM

### Office

- In neuer Akte jetzt möglich, mehrere Aufgaben/Aktivitäten mit einem Mal zu kopieren, verschieben oder zu löschen

## 2025-04-25

### Allgemein

- Neuer Datentyp “Trenner”
- Buttongröße in neuer Oberfläche einstellbar
- Kompatibilität mit Microsoft Windows Server 2025
- Problem mit blockierter neuer Akte (extern) beseitigt
- Verknüpfungsfelder in “Profil ändern”-Fenster in blauer Farbe
- Weitere Spalten (Tags) zu Verknüpfungen
- Reihenfolge der Profile in neuer Datensätze-Form soll änderbar
- Mehrere Stabilitätsverbesserungen
- Neue Option “Befehlszeilenparameter ignorieren”

### Dictate

- Diktatlänge bei Import mit Drag & Drop i. V. m. Verschlüsselung korrigiert
- Neue Optionen:
- Nur Diktate in Datenbank anzeigen
- Sicherungskopien verschlüsseln
- Bei Diktatexport Verschlüsselung erlauben
- Fehler beseitigt bei Funktion “Diktat als Mail-Anhang" (wenn Diktat in Akte ohne E-Mail-Adresse lag)
- Diktatliste öffnet schneller
- Diktat-Verschlüsselung und -Entschlüsselung beschleunigt

### Office

- In Verwaltung der Aktivität-/Aufgabenarten wird Anzahl der Verwendungen angezeigt, um unbenutzte Aktivität-/Aufgabenarten feststellen zu können
- In neuer Aktivitätenliste weitere Suchfelder Akten, Telefon und ID
- Bei Wechsel zwischen Akten bleibt Suchbegriff in Aktivitätenliste-Spalte erhalten
- Anzeige der Anzahl markierter Aktivitäten
- In neuer Aktivitätenliste Button “Zurücksetzen” zum Löschen von Eingaben und Filter
- In Postausgangsliste neue Spalte “Versandt”, dort steht der Benutzer drin, der verschickt hat
- Fehler korrigiert: Akte öffnen aus Dokumentsuche geht wieder
- Fehler bei Folgeaufgabe korrigiert: Richtiger Ausführer wird gewählt
- Komplette Anzeige von Aufgaben-/Aktivitäten-/Workflow-Gruppen sowohl unter Aufgaben als auch Aktivitäten
- Bug beseitigt, dass beim Senden einer Findentity-Mail kein Fenster erscheint
- Datumsformat für Stempel definierbar

## 2025-06-24

### Allgemein

- Verbesserung bei Überwachung von CUL-Lizenzen, Auflistung der Arbeitsplätze nur noch für Admins
- Mehrere Einstellungen-Fenster enthalten ein Suchfeld zum Suchen von Einstellungen. Weitere Fenster werden noch folgen.
- Mehrere Einstellungen-Fenster sind übersichtlicher gestaltet worden.
- Für den Zugriff auf Dateien kann explizit ein Benutzerkonto (Benutzer, Domäne, Passwort) angegeben werden, welches Findentity nutzen soll. Damit kann die Sicherheit wesentlich erhöht werden, da, wenn entsprechend in den Ordnerberichtigungen konfiguriert, der Benutzer nur noch mit Findentity, aber nicht mehr in Windows, einen Zugriff auf die Ablageordner bekommt. Funktioniert derzeit nur im Dictate-Modul (für Diktate und verbundene Dokumente).

### Dictate

- Im Fenster „Einstellungen“ für einen Benutzer (über Diktatliste)
- den Begriff „Schreibkraft“ durch „Bearbeiter“ ersetzt
- Spracherkennungsprofil wird hier richtig jetzt ohne eckige Klammern angezeigt, außerdem kann ein Benutzer auch hier (wie in der Benutzerverwaltung) mehrere Sprachprofile wählen.
- Beim Diktatimport werden weitere Diktatparameter wie Verfasser, Bearbeiter und Priorität protokolliert.
- Problem beseitigt: War beim automatischen Löschen erledigter Diktate kein Zugriff auf die Diktatdatei möglich, so blieb diese verwaist übrig, da dennoch der Datenbankeintrag dazu gelöscht worden ist. Jetzt bleibt der Datenbankeintrag bestehen, bis die Datei gelöscht werden kann.
- Neue Optionen:
- “Diktatliste schnell öffnen”. Wenn aktiviert, werden beim Öffnen der Diktatliste und Einlesen der Diktate weniger Dinge geprüft, was für eine Beschleunigung sorgt.
- „Verfasser (nicht Diktat-Supervisor) darf erledigte Diktate sehen“ Kann deaktiviert werden, damit nur Diktat-Supervisors erledigte Diktate auflisten können.
- „Bearbeiter (nicht Diktat-Supervisor) darf erledigte Diktate sehen“ Kann deaktiviert werden, damit nur Diktat-Supervisors erledigte Diktate auflisten können.
- „Verfasser ist erforderlich“: Wenn aktiviert, dann darf kein Diktat ohne Angabe eines Verfassers angelegt werden.
- „Bearbeiter ist erforderlich“: Wenn aktiviert, dann darf kein Diktat ohne Angabe eines Bearbeiters angelegt werden.
- „Bei Diktatexport Entschlüsselung erlauben“
- „Bei Diktatexport Wave-Konvertierung erlauben“
- Meldung für neue Diktat kann abgeschaltet werden (dazu trägt man in der Option „Meldung für neue Diktat wird verzögert … Sekunden“ den Wert -1 ein)
- Back-End Spracherkennung:
- Kann jetzt als Dienst installiert werden.

### Office

- Umbenennen von Dateien und Ordnern verbessert, u. a. springt Dateieintrag nicht mehr nach oben
- Bei Dokumenten (in Akte) gibt es eine Statusbar für Anzeige der Anzahl sowie des kompletten Pfads der ausgewählten Datei
- Häkchen-Symbol (✓) für erledigte Aufgaben
- Aufgaben-/Aktivitätenliste enthält zusätzlich Angabe der Anzahl der Gruppen und deren Bestandteile
- Verschiedene Projekt-Workflow Verbesserungen
- Es kann Workflow ohne Startaufgabe angelegt werden
- Bei Anlage eines Workflows mit Startaufgabe wird der Kurzinhalt übernommen.
- Aktualisierung der Projekt-Workflow-Liste verbessert

## 2025-07-16

### Allgemein

- Option “Arbeitszustand merken” funktioniert jetzt wieder, auch i. V. m. der Option “Fenster in Prozess öffnen”

### Dictate

- Fehler beseitigt, dass bei stationärem Diktat mit Verschlüsselung das Passwort 2x abgefragt wird
- Fehler beseitigt, dass die Option „Nur eigene Gruppen und Benutzer aus eigenen Gruppen anzeigen“ im Benutzer-Filter der Diktatliste keine Wirkung hatte (es wurden immer alle Benutzer angezeigt).
- Problem beseitigt, dass bei großer Anzahl an Benutzern die Diktatliste sehr lange zum Öffnen brauchte. Zusätzlich kann für noch schnelleres Öffnen die neue Option „Nur Gruppen in Benutzer-Filter anzeigen“ aktiviert werden.
- Neue Optionen:
- Kein Diktat-Ereignis über Netzwerk senden
- Statusfenster beim Diktatöffnen nicht zeigen
- Nur Gruppen in Benutzer-Filter anzeigen

### Office

- Für Aufgaben/Aktivitäten neuer Menüpunkt „Parameter für xx Einträge ändern“ Datum oder Kurzinhalt
- In Aufgaben-/Aktivitätenliste neuer Button „Volltext“, um kompletten Text z. B. aus Bemerkung zu sehen.

## 2025-09-09

### Allgemein

- Datenfelder (in neuer Akte) können verschlüsselt werden. Dazu muss in der Profildefinition, dort beim Feld bei „Weitere Parameter als JSON“ Folgendes eingegeben werden:
- Um Verschlüsselung zu erzwingen: \{"enc":1\}
- Um Verschlüsselung optional anzubieten: \{"enc":2\}
- Verknüpfungen in Verknüpfung-Baum sind automatisch sortiert.
- Angabe einer zu ladenden Ini-Datei für zentrale Einstellungen beim Programmaufruf möglich (mit Parameter ini=...)
- Ergänzung der Option “Befehlszeilenparameter ignorieren”: Es können erlaubte Parameter festgelegt werden, z. B. „ini“
- Bei der Angabe von Benutzer und Domäne zum Zugriff auf das Dateisystem (Neuerung in Version 2025-06-24) können Umgebungsvariablen verwendet werden.
- Wenn beim Start von Findentity Arbeitsplatz der Windows-Benutzer nicht in Findentity existiert und nicht automatisch angelegt wird, wird jetzt schneller abgebrochen, bevor ggf. langwierige, erfolglose Zugriffe auf Netzwerkressourcen erfolgen.

### Dictate

- Diktatlänge zeigt jetzt nicht nur Minuten und Sekunden, sondern auch Stunden an.
- Ein eingerichtetes Fremdsystem ist jetzt auch als Button im Diktatplayer aufrufbar. So kann beispielsweise eine Patientenverwaltungssoftware oder ein Equalizer einer Soundkarte aus dem Diktatplayer heraus geöffnet werden.
- Verbesserte Diktatübertragung mit Olympus/OM SYSTEM-SDK und Philips-SDK. Dazu gibt es folgende Änderungen in den Einstellungen zu den Diktiergeräten:
- Datenträger: Diktatquelle „SDKs“ wurde wieder entfernt
- Olympus / OM SYSTEM: Neue Registerkarte „Laufwerk“ zum Konfigurieren des Diktatimports
- Philips: Neue Registerkarte „Laufwerk“ zum Konfigurieren des Diktatimports
- Diktiergeräteverwaltung:
- Eintrag kann einer Benutzergruppe zugeordnet werden. Wenn die Option “Nur eigene Gruppen und Benutzer aus eigenen Gruppen anzeigen” aktiviert ist, sieht ein Benutzer nur zur Gruppe passenden Einträge.
- Diktatpasswort kann für OLYMPUS/OM- sowie PHILIPS-Diktiergeräte konfiguriert werden. GRUNDIG geht noch nicht.
- Automatische Sortierung des Baums sowie der Liste der Untereinträge
- Back-End Spracherkennung: Die Option “Word ohne Add-Ins benutzen” deaktiviert auch Word-Makros.

### Finder

- Weitere Möglichkeiten, eine Barcode-ID zu generieren (kann u. a. mit Tastatur eingegeben werden)

### Office

- bea.expert ist nun auch zum Versenden in Findentity eingebunden.
- Ordner kann mit Textwert eines Profilfelds erstellt werden. Dazu Rechtklick auf das Datenfeld.
- Dateien in neuer Akte können verschlüsselt werden. Dazu Rechtklick auf eine Datei und im Menü „Verschlüsseln“ wählen.
- Drag & Drop mehrerer Aktivitäten/Aufgaben, um diese in eine Gruppe einzusortieren
- Drag & Drop von Dateien einer Aufgabe (z. B. Posteingang) in Dateiliste ist nun möglich, vorher nur in Explorer.
- 'Nur Text' CheckBox ist angekreuzt, wenn man eine Aufgabe dupliziert.
- Anzahl der sichtbaren Aufgaben in Aufgabenliste bleibt, wenn man auf 'Aktualisieren' klickt.
- Fenster zum Speichern von Outlook E-Mail ist nun größenänderbar.

## 2025-10-22

### Allgemein

- Benutzerverwaltung: Bei Option für leere Liste wird trotzdem immer der angemeldete Benutzer angezeigt. Suche nach Gruppen geht schneller.

### Dictate

- Öffnen der Diktatliste geht schneller.
- Verfasser- und Bearbeiter-Auswahl in Diktatliste werden jetzt auch gemerkt.
- Option zum Deaktivieren des Einstellungen-Fenster in der Diktatliste.
- Problem mit Datum erledigter Diktate aus Akte gelöst.
- Die Entf-Taste konnte bereits immer zum Erledigen von Diktaten genutzt werden (löst das Gleiche aus wie der Häkchen-Button). Gleiches galt auch für eine Kombination von Umsch+Entf, Strg+Entf und Alt+Entf. Um versehentliches Erledigen zu vermeiden, wenn ein Benutzer mit Strg+Alt+Entf den Rechner sperren möchte und dabei eine der Tasten nicht richtig drückt, reagiert Findentity jetzt nur noch auf Entf allein und keine Kombination mit einer Steuerungstaste mehr.
- Neuheiten im Diktatplayer/-rekorder:
- Setzen von Indexen auch beim stationären Diktieren. Bereiche zwischen Indexen können beschriftet werden.
- Der Einstellungen-Bereich in der erweiterten Ansicht wurde ausgegliedert und ist jetzt über einen eigenen Menüpunkt zu erreichen.
- Im Diktat-Arbeitsbereich-Fenster greift jetzt auch die Einstellung “Nur eigene Gruppen und Benutzer aus eigenen Gruppen anzeigen”.
- Kommt nach stationärer Aufnahme eines Diktats das Parameterfenster (wenn eingestellt), kann man dieses anstelle mit dem OK-Button im Fenster auch der NEW- bzw. EOL-Taste eines Diktiermikrofons schließen. Dies funktionierte bisher nur mit OLYMPUS/OM und PHILIPS. Jetzt geht es auch mit GRUNDIG.

### Office

- Registerkarte für Aktivität-Arten definierbar
- Frage beim Löschen von Dokumenten, die mit Aufgaben/Aktivitäten verbunden sind, kommt nur noch 1x (früher kamen 2 Fragen).
- Im Aufgabe-/Aktivität-Fenster wird für das Bemerkungsfeld statt des TX-TextControls das Microsoft-RTF-Control eingesetzt, welches stabiler laufen soll.

## 2025-12-17

### Allgemein

- Die Verbindung zur SQL-Datenbank wird jetzt nur noch bei Bedarf aufgebaut und danach sofort wieder beendet. Dies sorgt für mehr Stabilität im Falle von Netzwerkproblemen und entlastet bei großer Anzahl an Arbeitsplätzen auch den SQL-Server.

### Dictate

- An Diktiermikrofonen Verbesserung der LED-Steuerung im Einfügemodus
- Bei der Diktatwiedergabe mit DirectShow konnte die Wiedergabegeschwindigkeit nur noch von -10 bis +10 reguliert werden. Jetzt ist es von -25 bis +25 möglich.
- In der Diktatliste war der Exportieren-Button nur sichtbar, wenn Diktiersystem „Datenträger“ aktiv war. Da jetzt der Export auch in einen beliebigen Ordner und nicht nur zum Handdiktiergerät möglich ist, wird der Button jetzt immer gezeigt, auch wenn Diktiersystem „Datenträger“ nicht aktiv ist.
- Neue Option „Arbeitszeit nicht erfassen“: Wenn diese gesetzt wird, werden keine Arbeitszeiten zu Diktaten mehr festgehalten und die Spalte „Arbeitszeit“ verschwindet aus der Liste der erledigten Diktate. Falls bereits Arbeitszeiten in der Datenbank stehen, gibt es beim Setzen der Option eine Frage, ob diese gelöscht werden sollen. Die Einstellung wird in der Datenbank gespeichert, es muss also nicht die Ini-Datei aktualisiert werden.
- Existiert beim Übertragen eines Diktats in eine Akte die Akte nicht mehr, kommt jetzt eine Fehlermeldung und die Übertragung wird abgebrochen. Existiert zwar die Akte, aber der dazugehörige Ordner im Dateisystem nicht, so wird versucht, den Ordner anzulegen, und dann wird ggf. das Diktat übertragen.
- Im Fenster „Fußschalter-Tasten“ gibt es folgende Erweiterungen:
- Neben den bisherigen Tasten PLAY, FFWD und REW gibt es die vierte Taste EOL, welche konfiguriert werden kann.
- Tasten können deaktiviert werden.
- Es gibt einen Button „Einstellungen für alle Benutzer übernehmen“
- Gelegentlich setzte sich der Diktatplayer trotz gesetzter Option „Fenster immer sichtbar“ nicht in den Vordergrund. Dies soll jetzt zuverlässig funktionieren.
- Das Diktatstatus-Icon (z. B. blaues Dreieck beim Abspielen) wird jetzt nicht nur an fremden, sondern auch am eigenen Arbeitsplatz in der Diktatliste gezeigt.
- Diktiergeräteverwaltung: Es gibt für Einträge, die als Ordner genutzt werden, die neue Einstellung „Als Speicherort für neue Geräte benutzen“. Wenn gesetzt, dann wird für ein neues Diktiergerät, für welches beim erstmaligen Anschluss automatisch Eintrag erstellt wird, dieser wie folgt einsortiert:
  1. [replace-12-1]1. Gehört der angemeldete Benutzer zu mindestens einer Gruppe, dann wird nach einem Eintrag (Ordner) gesucht, bei welchem die angegebene Gruppe zu einer Gruppe des angemeldeten Benutzers passt und bei welchem die Option „Als Speicherort für neue Geräte benutzen“ gesetzt ist. Hierunter wird das neue Gerät angelegt.
  2. [replace-12-1]2. Wird kein zur Gruppe passender Eintrag (Ordner) gefunden, dann wird nach einem Eintrag mit aktivierter Option „Als Speicherort für neue Geräte benutzen“ gesucht, welcher keiner Gruppe zugewiesen ist. Hierunter wird das neue Gerät angelegt.
  3. [replace-12-1]3. Wurde bisher kein passender Eintrag (Ordner) gefunden, dann wird das neue Diktiergerät wie bisher im Hauptordner angelegt.