---
title: Findentity 2026
sidebar_position: 1
---

**Programmänderungen in den verschiedenen Versionen / Neuheiten Findentity**

## 2026-01-19

### Allgemein

- Eine zu ladende Ini-Datei für zentrale Einstellungen kann beim Programmaufruf bereits mit dem Parameter „ini=...“ angegeben werden. Wird zusätzlich „setini“ angegeben, so wird der Pfad zur Ini-Datei auch in die Registry geschrieben, damit beim nächsten Abspeichern der zentralen Einstellungen die neue Ini-Datei genommen wird.
- AD-Synchronisation zeigt in einem Fenster Fortschrittsmeldungen an, sodass man, sieht ob etwas und was gerade passiert.

### Dictate

- Problem beseitigt, dass beim Diktatimport u. U. falsche Voreinstellungen zum Diktat angezeigt worden sind.
- Die Option „Ordner verstecken“ wird jetzt in der Datenbank abgelegt und ist außerdem standardmäßig aktiviert.
- Bisher war in der Diktatliste standardmäßig der Filter Erledigt = Nein gesetzt. Dieser wurde geändert zu Erledigt = Alle.
- Fehler beseitigt: Wenn ein Diktat einem Profil zugeordnet werden sollte, in welchem noch kein Datensatz existierte, wurde u. U. ein leerer Datensatz angelegt.
- Diktiergeräteverwaltung:
- Beim Verschieben von Einträgen mit Drag & Drop kann jetzt auch in der Liste gescrollt werden.
- Unter dem Menü „Allgemein“ gibt es die Option „Auswahl-Checkbox anzeigen“. Wenn gesetzt, bekommen die Einträge Checkboxen, sodass man mehrere Einträge mit einem Mal zum Verschieben kennzeichnen kann.
- Man kann auch nach Gruppe suchen
- Gruppe-Feld kann von Obereintrag geerbt werden.
- Wird ein neues Diktiergerät automatisch unter einen Obereintrag zu einer Gruppe einsortiert, wird die Gruppe jetzt automatisch vom Obereintrag geerbt.