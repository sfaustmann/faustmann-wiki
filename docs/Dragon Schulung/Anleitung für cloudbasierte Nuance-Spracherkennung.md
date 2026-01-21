# Anleitung für cloudbasierte Nuance-Spracherkennung

Stand: 06.01.2026

Diese Anleitung bezieht sich auf folgende Produkte:

- Dragon Medical One (DMO)
- Dragon Professional Anywhere (DPA)
- Dragon Legal Anywhere (DLA)

## 1. Installation

### 1.1 Voraussetzungen

- Voraussetzung für die Installation und Ausführung der Software ist ein Microsoft Windows Betriebssystem mit installiertem Microsoft .NET Framework 4.7.2 oder höher.
- Zur korrekten Anzeige einiger Fenster der Anwendung ist die Installation von „Microsoft Edge WebView2“ zu empfohlen. Das Installationsprogramm bekommen Sie direkt von https://go.microsoft.com/fwlink/p/?LinkId=2124703. Weitere Informationen auf der Webseite von Microsoft unter https://developer.microsoft.com/de-de/microsoft-edge/webview2/.

### 1.2 Hinweise zu Standalone-Clients

- Keine Installation notwendig, Client wird nur entpackt und kann direkt gestartet werden
- Für Terminalserver-Umgebungen geeignet, siehe unten „Installation in einer Terminalserver-Umgebung“
- Desktopverknüpfung muss selbst erstellt werden
- Portable Version: Kann z.B. auf USB-Sticks gespeichert werden
- Keine automatischen Updates

### 1.3 Installation des Standalone-Clients am PC

1. Laden Sie die von Ihnen benötigte Variante (DMO, DPA, DLA) des Clients hier herunter: https://download.thax.de/s/NX7gZN8FWD78ieP  
Download-Kennwort: **ThaxSoftware**

**Bitte beim Download beachten:** Dragon Anywhere (DPA / DLA) gibt es in den Varianten „gehostet in der Telekom Cloud“ (Dragon Anywhere Client bis Version 2023.4) oder „gehostet in der Microsoft Azure Cloud“ (Dragon Anywhere Client ab Version 2025.3). Wählen Sie den für Sie passenden Client zum Download aus. Sollten Sie unsicher sein, welche Variante Sie verwenden, erfragen Sie dies bitte beim Thax Support.

2. Machen nach dem Download einen Rechtsklick auf die heruntergeladene ZIP-Datei und wählen Sie „Eigenschaften”. Setzen Sie rechts unten einen Haken vor „Zulassen”.
3. Entpacken Sie die heruntergeladene zip-Datei an einen Ort Ihrer Wahl.
4. Suchen Sie im entpackten Verzeichnis nach der Datei SoD.exe, machen Sie einen Rechtsklick auf die Datei und wählen Sie „Senden an Desktop (Verknüpfung erstellen)”.

### 1.4 Installation in einer Terminalserver-Umgebung

1. Der Standalone-Client wird auf dem Terminalserver bzw. Citrix-Server installiert, s.o. Unterstützt werden Windows Server 2016, 2019, 2022. Die Extensions für den Nuance-eigenen Audiokanal bzw. für die Tastenumleitungen von Diktiermikrofonen sind in dem Standalone-Client enthalten, somit muss auf dem Server keine extra Software installiert werden.
2. Wir empfehlen, die Nuance Virtual Extensions für RDS-, Citrix- oder VMWare-Clients auf dem Rechner zu installieren, an dem Sie Ihr Mikrofon angeschlossen haben, damit die Software diesen bandbreitenoptimierten eigenen Audiokanal anstelle vom herkömmlichen Remoteaudio verwenden kann. Die Installationspakete stehen unter https://dragonmedicalone.nuance.de/StandAlone/dragonmedicalone#pills-virtual zur Verfügung und können bei Bedarf als Silent-Installation ausgeführt werden. Details finden Sie in den „Nuance…Config\_DE.pdf“ Dokumenten, die den Paketen beigelegt sind.
3. Sofern Sie ein Diktiermikrofon von NUANCE, GRUNDIG oder PHILIPS verwenden, welches nicht für den Tastaturmodus konfiguriert ist, sollten Sie zusätzlich noch die entsprechenden Gerätetreiber der Hersteller installieren. Sie bekommen diese ebenfalls unter dem unter Nr. 2 genannten Link. Es werden die Client-Betriebssysteme Windows 10 und Windows 11 unterstützt (Stand November 2023).
4. Nutzen Sie nicht den Nuance-eigenen Audiokanal, müssen Sie die Remoteaudioeinstellungen konfigurieren. Folgende Einstellungen sind bei der Microsoft-Remotedesktopverbindung vorzunehmen - für Citrix müssen die Einstellungen von Ihrem Admin vorgenommen werden:

![Image: image_001](./Anleitung%20für%20cloudbasierte%20Nuance-Spracherkennung_images/image_001.png)

### 1.5 Mikrofon-Datenschutzeinstellungen

Unter Windows 10/11 und ggf. auch auf dem Server ist es ggf. notwendig, den Zugriff auf das Mikrofon zu erlauben. Dazu muss in den *Windows-Einstellungen* 🡪 *Datenschutz* 🡪 *Mikrofon* die Option *'Zugriff auf das Mikrofon auf diesem Gerät zulassen'* aktiviert sein.

#### 1.5.1 Windows 10

![Image: image_002](./Anleitung%20für%20cloudbasierte%20Nuance-Spracherkennung_images/image_002.png)

#### 1.5.2 Windows 11

![Image: image_003](./Anleitung%20für%20cloudbasierte%20Nuance-Spracherkennung_images/image_003.png)

## 2. Programmstart

Starten Sie Dragon Medical One (DMO), Dragon Professional Anywhere (DPA) oder Dragon Legal Anywhere (DLA) durch das entsprechende Icon auf Ihrem Windows-Desktop.

### 2.1 Anmeldung

Sie müssen sich mit Ihren Zugangsdaten einloggen, die Sie von uns erhalten haben. Benutzername ist i.d.R. Ihre E-Mail-Adresse:

![Image: image_004](./Anleitung%20für%20cloudbasierte%20Nuance-Spracherkennung_images/image_004.png)

Nach der Anmeldung haben Sie im zweiten Schritt die Möglichkeit, Ihr zu verwendendes Mikrofon und ggf. das Vokabular zu wählen:

![Image: image_005](./Anleitung%20für%20cloudbasierte%20Nuance-Spracherkennung_images/image_005.png)

## Android und iOS Apps

### PowerMic Mobile (nur für DMO)

PowerMic Mobile (PMM) ist eine App für Android und iOS, mit welcher man das Smartphone als Mikrofon nutzen kann, um in DMO hineinzudiktieren. Dafür wird eine zusätzliche Lizenz benötigt. Wenn Sie PMM lizenziert haben und nutzen möchten, gehen Sie folgendermaßen vor:

1. Starten Sie zuerst DMO auf dem PC und loggen Sie sich mit Ihren Zugangsdaten ein. Wählen Sie als Diktierquelle „PowerMic Mobile“ aus.
2. Installieren Sie auf Ihrem Smartphone PMM über Google Play bzw. den Apple App Store. Sie dürfen die App dann zunächst nicht öffnen, sondern müssen zuerst folgenden QR-Code auf dem Mobilgerät scannen und den dann angezeigten Link mit der PMM-App öffnen:

|  |  |
| --- | --- |
| **Android** | **iOS** |
| ![Image: image_006](./Anleitung%20für%20cloudbasierte%20Nuance-Spracherkennung_images/image_006.png) | ![Image: image_007](./Anleitung%20für%20cloudbasierte%20Nuance-Spracherkennung_images/image_007.png) |

Alternativ können Sie den jeweiligen Konfigurationslink auf Ihrem Mobilgerät öffnen:

- Android:
    http://config\_/?NmsToken=ODNjZjU3MDQtYjIxNy00NmI4LThlYzAtMWRiZDI3OGFmN2Qw&NmsBaseUrl=nms-de.nuancehdp.com
- iOS:
    dmic://config\_/?NmsToken=ODNjZjU3MDQtYjIxNy00NmI4LThlYzAtMWRiZDI3OGFmN2Qw&NmsBaseUrl=nms-de.nuancehdp.com

### 3. Melden Sie sich dann im PMM mit Ihrem Benutzernamen an. Die Verbindung zu DMO auf Ihrem PC wird hergestellt.

## Dragon Anywhere Mobile (nur für DPA / DLA)

Dragon Anywhere Mobile (DAM) ist eine App für Android und iOS, mit welcher man die Spracherkennung direkt auf dem Smartphone nutzen kann. Die Lizenz ist i.d.R. in DPA und DLA enthalten.

Dragon Anywhere (DPA / DLA) gibt es in den Varianten „gehostet in der Telekom Cloud“ (Dragon Anywhere Client bis Version 2023.4) oder „gehostet in der Microsoft Azure Cloud“ (Dragon Anywhere Client ab Version 2025.3).

Je nach verwendeter Variante finden Sie nachfolgend unter den Punkten 3.2.1 (Telekom Cloud) oder 3.2.2 (Microsoft Azure Cloud) eine Anleitung zur Einrichtung der Dragon Anywhere Mobile App.

### Einrichtung für Dragon Anywhere Mobile bei Verwendung der Telekom Cloud

Zur Installation folgen Sie den Anweisungen für Ihr Betriebssystem unter

- Android: https://spracherkennungscloud.de/quickstart/android/
- iOS: https://spracherkennungscloud.de/quickstart/ios/

Verwenden Sie denselben Login wie für DPA / DLA.

### Einrichtung für Dragon Anywhere Mobile bei Verwendung der Microsoft Azure Cloud

- Im App Store „Dragon Anywhere Mobile“ suchen und installieren. NICHT ÖFFNEN!
- Unterscheiden Sie folgend je nach eingesetzter Edition, welchen QR-Code Sie scannen müssen:

|  |  |
| --- | --- |
| **Professional** | **Legal** |
| ![Image: image_008](./Anleitung%20für%20cloudbasierte%20Nuance-Spracherkennung_images/image_008.png)  Alternativ können Sie folgenden Konfigurationslink auf dem Mobilgerät öffnen:  [Dragon Professional Anywhere Mobile](https://www.nuance.com/dragonany/setup?organizationtoken=YmMyZGUyMzEtNGE3Ny00NWZjLWFkZmQtZjYxMmEzMGY3YTI5&partnerguid=NDBCOEZERjUtQzI0Qi00MjM3LUJDMjctOEFERjBGRUUyMDk2&nmsserverforqa=nms-de.nuancehdp.com&sasserverforqa=sas-de.nuancehdp.com&dictationsetting=en-gb-gen;de-de-gen;de-at-gen;de-ch-gen;fr-fr-gen;nl-nl-gen;sv-SE-gen;nn-no-gen;nb-no-gen) | ![Image: image_009](./Anleitung%20für%20cloudbasierte%20Nuance-Spracherkennung_images/image_009.png)  Alternativ können Sie folgenden Konfigurationslink auf dem Mobilgerät öffnen:  [Dragon Legal Anywhere Mobile](https://www.nuance.com/dragonany/setup?organizationtoken=YmMyZGUyMzEtNGE3Ny00NWZjLWFkZmQtZjYxMmEzMGY3YTI5&partnerguid=NDBCOEZERjUtQzI0Qi00MjM3LUJDMjctOEFERjBGRUUyMDk2&nmsserverforqa=nms-de.nuancehdp.com&sasserverforqa=sas-de.nuancehdp.com&dictationsetting=en-gb-lgl;en-gb-gen;de-de-lgl;de-de-gen;de-at-lgl;de-at-gen;de-ch-gen;de-ch-lgl;fr-fr-gen;nl-nl-gen;sv-SE-gen;nn-no-gen;nb-no-gen) |

- die App sollte sich jetzt öffnen
- für die Anmeldung verwenden Sie dieselben Anmeldedaten wie für DPA / DLA
- geben Sie der App ggf. die Berechtigung auf das Mikrofon zuzugreifen

# Kurzanleitung zur Bedienung

## Dragon-Leiste

![Image: image_010](./Anleitung%20für%20cloudbasierte%20Nuance-Spracherkennung_images/image_010.png)

Die Erkennung können Sie mit Mausklick auf das Mikrofonsymbol ![Image: image_011](./Anleitung%20für%20cloudbasierte%20Nuance-Spracherkennung_images/image_011.png), Tastendruck (i.d.R. numerische Plustaste) oder mit einer entsprechend konfigurierten Taste Ihres Diktiermikrofons starten.

Das 3 Balken-Menü rechts ![Image: image_012](./Anleitung%20für%20cloudbasierte%20Nuance-Spracherkennung_images/image_012.png) zeigt ein Menü für diverse Einstellungen.

## Tipps für das Diktieren

Diktieren Sie in normalem Sprechtempo und sprechen Sie die Satzzeichen mit. Das Gesagte wird sofort in Text umgesetzt, entweder direkt in die Anwendung oder in ein Diktierfenster. Machen Sie vor und nach einem Sprachbefehl eine kurze Pause. Diktieren Sie Befehle wie „Neue Zeile“, „Neuer Absatz“ und Satzzeichen wie normalen Text. Es ist keine Pause erforderlich. Dragon schreibt das erste Wort nach einem Punkt oder neuem Absatz automatisch groß.

## Befehle

|  |  |
| --- | --- |
| **Befehl** | **Aktion** |
| Was kann ich sagen | Öffnet das Dialogfeld „Was kann ich sagen“ mit den verfügbaren Navigations-/Korrektur-/Formatier-/Interpunktionsbefehlen. Bitte schauen Sie sich diese Liste einmal an! |
| Groß \<XYZ\> | Schreibt den ersten Buchstaben des diktierten Texts groß [„Groß guten Morgen“ 🡪 „Guten Morgen“], auch zum Buchstabieren geeignet, z.B. „Groß A“ 🡪 „A“. |
| Klein \<XYZ\> | Schreibt den ersten Buchstaben des diktierten Texts klein, auch zum Buchstabieren geeignet, z.B. „klein A“ 🡪 „a“. |
| Korrigier \<XYZ\> | Öffnet das Korrekturmenü für den genannten Text |
| Streich das | Macht die letzte Äußerung weg |
| Lösch das | Löscht den markierten Teil |
| Rückgängig machen | Macht die letzte Aktion rückgängig |
| Markier \<XYZ bis XYZ\> | Markiert einen Textabschnitt und öffnet das Korrekturmenü |
| Unterstreich das | Unterstreicht den markierten Text |
| Mach das "fett/kursiv/normal" | Formatiert die markierten Worte entsprechend |
| Neue Zeile | Macht einen Zeilenwechsel und schreibt dann klein weiter (es sei denn, es folgt auf einen Punkt) |
| Neuer Absatz | Macht einen Absatzwechsel und schreibt dann groß weiter (das erste Wort wird ungeachtet des vorherigen Texts großgeschrieben) |
| *Zum Dokumentanfang/-ende* | *Nur DPA/DLA: Der Cursor springt zum Anfang oder Ende der aktuellen Seite.* |
| *Zum Zeilenanfang/-ende* | *Nur DPA/DLA: Der Cursor springt zum Anfang oder Ende der aktuellen Zeile* |
| *Zum Absatzanfang/-ende* | *Nur DPA/DLA: Der Cursor springt zum Anfang oder Ende des Absatzes* |
| Cursor vor/hinter \<XYZ\> | Setzt den Cursor vor oder hinter das gesagte Wort |
| Wort hinzufügen | Öffnet den Vokabular-Editor zum Hinzufügen des Wortes und der Sprechweise |
| Dieses Wort nicht erkennen | Löscht das markierte Wort aus dem aktiven Wortschatz |
| Mach das zum Autotext | Öffnet den Assistenten zum Verwalten von Autotexten |

## Tastenkürzel

Einige wichtige Funktionen können Sie über das Drücken von Tastenkombinationen auslösen. Über Optionen 🡪 Tastenkürzel können Sie diese ggf. anpassen. Wenn Sie ein Diktiermikrofon verwenden, lassen sich die Funktionen außerdem über die Tasten des Diktiermikrofons aufrufen.

**Tastenbelegung Olympus/OM System RecMic**

![Image: image_013](./Anleitung%20für%20cloudbasierte%20Nuance-Spracherkennung_images/image_013.png)


|  |  |  |
| --- | --- | --- |
| Taste am Olympus RecMic | Funktion in DMO | Tastenkürzel |
| REC | Mikro ein/aus | Numpad+ |
| NEW | Diktierfenster ein-/ausblenden | F11 |
| INSERT/OVER | Text übertragen | Numpad- |
| FF | nächste Variable | Numpad\* |
| REW | vorherige Variable | Numpad/ |
| Index |  | TAB |
| Trackball |  | "Linke Maustaste" |
| F1 |  | F1 |
| F2 |  | F2 |
| F3 |  | F3 |
| F4 |  | F4 |

## Diktierfenster

Falls Sie in eine von DMO nicht unterstützte Anwendung hineindiktieren, öffnet sich automatisch das sog. Diktierfenster. In diesem können Sie mit vollem Funktionsumfang diktieren und korrigieren.

![Image: image_014](./Anleitung%20für%20cloudbasierte%20Nuance-Spracherkennung_images/image_014.png)

Nach Abschluss des Diktats müssen Sie den Text in die Zielanwendung übertragen. Dazu gibt es diese Möglichkeiten zur Auswahl:

### 1. Sagen Sie „Text übertragen“.
### 2. Drücken Sie die in den Optionen unter „Tastenkürzel“ festgelegte Tastenkombination, standardmäßig Strg + Umsch + T.
### 3. Verwenden Sie ein Diktiermikrofon, können Sie dort die entsprechend konfigurierte Taste drücken. Beim SpeechMike ist dies standardmäßig die EOL-Taste.

Die Methode der Textübertragung bestimmen Sie in den Optionen unter „Texteingabe“. Welche mit Ihrer Anwendung funktioniert, müssen Sie ausprobieren. Wir empfehlen, die Option „Text nach der Übertragung in der Zwischenablage speichern“ zu aktivieren, damit Sie den Text notfalls nochmals manuell einfügen können, sollte die Übertragung einmal nicht geklappt haben.

Um Zugriff auf frühere Inhalte der Zwischenablage zu haben – beispielsweise auf einen früher diktierten Text, der inzwischen in der Zwischenablage überschrieben worden ist – können Sie in Windows den Zwischenablageverlauf wie folgt aktivieren:

Systemsteuerung 🡪 System 🡪 Zwischenablage, dort „Zwischenablageverlauf“ aktivieren:

![Image: image_015](./Anleitung%20für%20cloudbasierte%20Nuance-Spracherkennung_images/image_015.png)

Indem Sie Windowstaste + V drücken, werden Ihnen nun auch frühere Inhalte der Zwischenablage angezeigt.

## Korrigieren von Fehlern

Hat Dragon Sie falsch verstanden, sagen Sie den Befehl „Korrigier [Text]“. Es öffnet sich ein Menü mit verschiedenen Vorschlägen.

### Beispiel zum Korrigieren

Sie diktieren z.B. „Basaltemperatur“, aber DMO gibt „Basal Temperatur“ aus:

![Image: image_016](./Anleitung%20für%20cloudbasierte%20Nuance-Spracherkennung_images/image_016.png)

Sagen Sie „Korrigier Basal Temperatur“ oder – wenn der Cursor noch genau hinter der zu korrigierenden Äußerung steht „Korrigier das“. Es öffnet sich ein Menü mit verschiedenen Vorschlägen:

![Image: image_017](./Anleitung%20für%20cloudbasierte%20Nuance-Spracherkennung_images/image_017.png)

Ist das richtige Wort dabei, sagen Sie „nimm eins“, „nimm zwei“ etc. je nach Auswahl.

Ist das richtige Wort nicht unter den Vorschlägen, sagen Sie den Befehl „dem Vokabular hinzufügen“ oder „Wort hinzufügen“. Es öffnet sich ein Fenster, um ein neues Wort hinzuzufügen:

![Image: image_018](./Anleitung%20für%20cloudbasierte%20Nuance-Spracherkennung_images/image_018.png)

Tippen Sie das richtig geschriebene Wort in die obere Zeile. Klicken Sie „Standardaussprache verwenden“, um das Wort hinzuzufügen, wenn das Wort so geschrieben wird, wie es gesprochen wird. Um die Aussprache des Wortes zu trainieren, klicken sie auf das rote Mikrofonsymbol und sprechen Sie das Wort aus:

![Image: image_019](./Anleitung%20für%20cloudbasierte%20Nuance-Spracherkennung_images/image_019.png)

Wird ein Wort ganz anders ausgesprochen als geschrieben (zum Beispiel Abkürzungen, Fremdwörter, feststehende Ausdrücke mit Bindestrichen usw.), wählen Sie „Geben Sie das Wort ein, wie Sie es aussprechen würden“ und tragen Sie ein, wie Sie das Wort aussprechen. Alternativ können Sie das Mikrofon-Symbol drücken, um das Wort zu sprechen.

Wenn Sie fertig sind, schließen Sie das Korrekturfenster durch Klick auf X. Diktieren Sie dann in Ihrem Text das neu hinzugefügte Wort.

## Vokabular bearbeiten

Über den Menübutton Menüpunkt ![Image: image_020](./Anleitung%20für%20cloudbasierte%20Nuance-Spracherkennung_images/image_020.png) 🡪 „Vokabular verwalten“ (können Sie so auch diktieren) kommen Sie zu Ihren benutzerdefinierten Wörtern und können diese bearbeiten und trainieren sowie dort auch manuell neue Wörter hinzufügen (über das „+“ Symbol):

![Image: image_021](./Anleitung%20für%20cloudbasierte%20Nuance-Spracherkennung_images/image_021.png)

In DPA/DLA gibt es unter ![Image: image_022](./Anleitung%20für%20cloudbasierte%20Nuance-Spracherkennung_images/image_022.png) zudem den Menüpunkt „Wörter importieren“, um eine Wortliste – z.B. aus der herkömmlichen Dragon-Desktopanwendung – zu importieren. Für DMO steht dieser Menüpunkt noch nicht zur Verfügung. Einen Import von Wörtern können wir jedoch für Sie übernehmen.

## Formatierungen verwalten (nur für DMO)

In DMO haben Sie über „Vokabular verwalten“ 🡪 dann links im Menü „Formatierung verwalten“ die Möglichkeit, automatische Formatierungen anzupassen. Für das Fachvokabular „Klinische Administration“ sowie für die Dragon Anywhere Varianten DPA / DLA steht diese Funktion nicht zur Verfügung.

![Image: image_023](./Anleitung%20für%20cloudbasierte%20Nuance-Spracherkennung_images/image_023.png)

# Hilfreiche Links

## Erklärvideos

[](https://www.nuance.com/de-de/dragon/feature-demos.html)

## Administrator-Ressourcen

Auf der Webseite [](https://dragonmedicalone.nuance.de/StandAlone/) erhalten Administratoren weitere Hinweise und Installationspakete insbesondere für virtuelle Umgebungen, z.B. Nuance-eigene Audiokanäle.

# Bei Fragen...

wenden Sie sich bitte an uns:

|  |  |
| --- | --- |
| ![Image: image_024](./Anleitung%20für%20cloudbasierte%20Nuance-Spracherkennung_images/image_024.png) | Thax Software GmbH Halberstädter Str. 6 10711 Berlin Fon: +49 30 89064140 info@thax.de [](https://www.thax.de) |
| **Bei technischen Fragen wenden Sie sich bitte direkt an unsere Support-Hotline:**  **Fon: +49 30 89064140 E-Mail:** **support@thax.de** | |