# Berufswahl-App für Umsteiger – Wissensfundament

Stand: 30.09.2026 · Recherchetiefe: **gründlich in der Breite** (rund 95 Suchanfragen, fünf Themenfelder), **aber mit einer Einschränkung:** Der direkte Abruf war für fast alle Fachdomänen von der Netzrichtlinie gesperrt (onetcenter.org, dol.gov, esco.ec.europa.eu, eur-lex, gesetze-im-internet.de, zis.gesis.org, osf.io, Hogrefe, Frontiers, PubMed Central). Offen war nur GitHub. Die Belege unten stützen sich deshalb auf die **Suchauszüge der Primärseiten** – die richtigen Adressen, aber nicht selbst im Volltext gelesen. **Jede Lizenzaussage muss vor dem Bau einmal am Volltext gegengelesen werden.** Das ist Pflicht, keine Formalie.

---

## Auf einer Seite

**Der Kern:** Die Tests sind lösbar. Der Engpass liegt woanders – bei **deutschen Berufsprofilen**, gegen die man abgleichen kann, und bei der Frage, **was die App versprechen darf**. Interessen-Passung sagt Zufriedenheit nur schwach voraus (ρ ≈ .19, Hoff et al. 2020), Werkzeuge ohne menschliche Beratung wirken schwächer (Whiston et al. 2003) – und die Bundesagentur hat mit **New Plan** schon ein kostenloses Werkzeug für genau diese Zielgruppe, das kaum jemand kennt.

### (a) Testsatz – drei Vorschläge

| | **A „Offen"** | **B „Güte zuerst"** | **C „Deutsch-original"** |
|---|---|---|---|
| Interessen | Deutsche O*NET-Interest-Profiler-Kurzform, 60 Items (Roemer et al. 2023) | wie A | Verb-Interessentest VIT, 45 Items (Hell et al. 2013) |
| Persönlichkeit | IPIP-Big-Five, deutsch (z. B. IPIP40, Hartig et al. 2003) | BFI-2-S, 30 Items, deutsch (Rammstedt et al. 2020) | wie A |
| Werte | O*NET Work Importance Profiler, **selbst übersetzt** | CWVS (Schneider et al. 2024) plus WIP für den Abgleich | CWVS |
| Fähigkeiten | Erfahrungs-Checkliste statt Selbstnote (siehe Punkt 1.4) | wie A | wie A |
| **Lizenz** | alles **auch kommerziell** nutzbar: O*NET nur mit Nennung und Änderungshinweis, IPIP gemeinfrei | BFI-2 **nur nicht-kommerziell**, sonst Erlaubnis von Soto und John nötig | VIT-Lizenz unklar (Testarchiv: je Test verschieden), CWVS CC BY |
| **Was man verliert** | Keine deutschen Normen. IPIP-Übersetzungen älter und an kleineren Stichproben geprüft. Werte-Teil auf Deutsch **ungeprüft** – eigene Pilotstudie nötig | Rechtsrisiko, sobald die App Max' Geschäft dient. Dafür beste Messgüte und Facetten | Keine direkte Brücke zu O*NET-Berufsprofilen, Lizenz offen |

**Meine Empfehlung: A.** Das BFI-2-S aus B nur dann, wenn eine schriftliche Erlaubnis vorliegt.

### (b) Berufsverzeichnis – drei Vorschläge

| | **A „O*NET-Kern, ESCO-Etikett"** | **B „ESCO pur"** | **C „Hybrid mit deutschem Arbeitsmarkt"** |
|---|---|---|---|
| Was es liefert | Je Beruf RIASEC-Profil, 41 Basic Interests (neu seit O*NET 31.0, 08/2026), Arbeitswerte, Arbeitsstile, Fähigkeiten, Skills. Deutsche Bezeichnungen über den **offiziellen ESCO-O*NET-Crosswalk** (2022) | Rund dreimal so viele Berufe wie O*NET, deutsch, API, Kernkompetenzen und optionale Kompetenzen je Beruf | A plus B, dazu BERUFENET (Zugänge, Weiterbildung), Entgeltatlas, mein NOW |
| **Lizenz** | O*NET CC BY 4.0, ESCO frei nach Kommissionsbeschluss 2011/833/EU | frei, Namensnennung | BERUFENET: **keine Lizenz auffindbar**, die API ist nur von Dritten dokumentiert |
| **Was man verliert** | US-Arbeitsmarkt: kein duales System, US-Löhne und -Zugänge. Crosswalk ist n:m und unscharf. Neue O*NET-Profile teils mit KI-Hilfe erzeugt | **Keine** Interessen-, Werte- oder Fähigkeitsprofile – psychologischer Abgleich unmöglich, nur Skill-Überlappung | Aufwand, und die Rechtslage muss vorher schriftlich mit der BA geklärt werden |

**Meine Empfehlung: A jetzt, C als Ausbaustufe** – nach Klärung mit der BA.

### Drei Befunde, die den Plan berühren

1. **New Plan (BA) gibt es schon:** kostenlos, ohne Anmeldung, für Berufstätige, mit **echten** Leistungstests und mit Berufsvorschlägen aus der eigenen Berufserfahrung. Kennen tun es aber **rund 2 %** der Vollzeitbeschäftigten, genutzt haben es **0,3 %** (IAB 2024). Die Lücke liegt weniger im Produkt als in **Reichweite, Tiefe und Erklärung**.
2. **„Bleibt auf dem Gerät" und „KI-Gespräch" widersprechen sich**, sobald das Gespräch über einen Cloud-Anbieter läuft. Dann greifen Auftragsverarbeitung, Drittlandtransfer und sehr wahrscheinlich eine **Datenschutz-Folgenabschätzung** (DSK-Muss-Liste: KI zur Bewertung persönlicher Aspekte).
3. **Selbsteingeschätzte Fähigkeiten sind der schwächste Baustein.** Sie korrelieren nur mit r ≈ .29 mit der tatsächlichen Leistung und spiegeln eher Persönlichkeit als Können. Ein „Stärken-Schwächen-Profil" aus Selbstauskunft trägt weniger, als das Wort verspricht.

---

## 0 · Die Begriffe

| Begriff | heißt | nicht zu verwechseln mit |
|---|---|---|
| **Interesse** | Vorliebe für Tätigkeiten und Umwelten (bei Holland die sechs RIASEC-Bereiche) | **Fähigkeit** – was man kann. Beides korreliert nur mäßig. Eine App, die aus Interessen „Eignung" ableitet, verwechselt die beiden |
| **Fähigkeit** (ability) | relativ stabile Grundleistung, etwa räumliches Denken, verbales Verständnis | **Fertigkeit, Skill** – erlernt und trainierbar. Für Umsteiger der wichtigere Begriff, weil er sich mitnehmen und nachholen lässt |
| **Kompetenz** | in ESCO und im deutschen Bildungsrecht: Wissen und Können, angewandt in einer Situation | Umgangssprachlich wird „Kompetenz" für alles benutzt. Fachlich trennt ESCO zwischen *knowledge*, *skill/competence* und *transversal skills* |
| **Passung / Kongruenz** | Übereinstimmung von Personprofil und Berufsprofil | **direkte Passung** (die Person schätzt selbst, wie gut es passt) gegenüber **indirekter Passung** (die App rechnet Profile gegeneinander). Die App liefert die indirekte – und die hängt in der Forschung schwächer mit Ergebnissen zusammen (Kristof-Brown et al. 2005) |
| **Validiert** | psychometrisch: Belege, dass der Test misst, was er messen soll – immer **für eine Gruppe und einen Zweck** | **Validierungsverfahren nach BVaDiG** (seit 01.01.2025): amtliche Feststellung beruflicher Handlungsfähigkeit ohne Abschluss. Gleiches Wort, völlig anderer Gegenstand – für Umsteiger aber hochrelevant |
| **Normiert** | Rohwert wird mit einer Vergleichsgruppe verglichen („besser als 70 % der …") | **ipsativ**: Vergleich innerhalb der Person („Ihr stärkstes Interesse ist …"). Ohne deutsche Normen geht nur das – und das reicht für RIASEC-Abgleiche, weil O*NET mit der Profilform arbeitet |
| **Berufsberatung** | Rechtsbegriff, § 30 SGB III: Auskunft und Rat zu Berufswahl, Entwicklung **und Berufswechsel** | **Berufsorientierung** – Umgangssprache ohne Rechtsfolgen. Die App bewegt sich nahe am Rechtsbegriff (Punkt 5) |
| **Beruf** (KldB) / **occupation** (ESCO, O*NET) | drei verschiedene Zuschnitte. KldB 2010 ordnet deutsche Berufe, ESCO europäisch mit rund dreimal so vielen Einträgen wie O*NET, O*NET-SOC US-amerikanisch | Ein „Beruf" in der App ist immer die Einheit **einer** dieser Systematiken. Welche, muss man entscheiden |
| **Harte Grenze** | Ausschluss, der nicht verhandelbar ist: reglementierter Zugang, Gesundheitsvoraussetzung, Zulassung | **Schwäche** – verschlechtert die Passung, schließt nicht aus. Max' Regel entspricht fachlich dem PIC-Modell von Gati (Punkt 3.4) |

**Wo es regelmäßig schiefgeht:** „Eignungstest" für etwas, das Interessen misst. „Wissenschaftlich validiert" für einen übersetzten Test, der nur im Original geprüft wurde. „Public domain" für Skalen, die nur so heißen (Punkt 1.1).

---

## 1 · Die Testinstrumente

### 1.1 Interessen (Holland, RIASEC)

| Instrument | misst | Items | Deutsch? | Lizenz und Bedingungen | Güte |
|---|---|---|---|---|---|
| **O*NET Interest Profiler Short Form** (IP-SF) | RIASEC | 60 | **ja**: Roemer, Lewis & Rounds 2023, Psychological Test Adaptation and Development 4(1), 156–167. Artikel CC BY 4.0, Übersetzung auf OSF (osf.io/xhk93) | O*NET Career Exploration Tools: **wörtlich** unter CC BY-ND 4.0, **verändert oder übersetzt** unter der **O*NET Tools Developer License**. Pflicht ist die Nennung von O*NET und USDOL/ETA sowie ein Hinweis an alle Nutzer, dass verändert wurde und USDOL/ETA die Änderung nicht geprüft hat [1][2] | Deutsch: ω ≥ .80, RIASEC-Struktur bestätigt, Trefferquoten für ausgeübte und Wunschberufe 17–69 % (Stichproben N = 276 altersgemischt und N = 672 Oberstufe) [6]. In der Rehabilitationspädagogik (N = 173): ω = .80–.90, Kriteriumsvalidität aber **schwach** [7]. **Keine deutsche Normierung** |
| **O*NET Mini-IP** | RIASEC | 30 (5 je Bereich) | **keine validierte deutsche Fassung gefunden** – ableitbar aus der deutschen IP-SF, dann aber ungeprüft | wie IP-SF | Englisch, 2016 für Mobilgeräte entwickelt. Nur **73 %** erhalten denselben ersten Code-Buchstaben wie mit der 60-Item-Fassung [5] – die Kürzung verschiebt also bei gut einem Viertel das Ergebnis |
| **RIASEC Markers** (Armstrong, Allison & Rounds 2008) | RIASEC | 8 je Bereich (ungeprüft) | nein | **Trotz „public domain" im Titel urheberrechtlich geschützt**: frei nur für nicht-kommerzielle Zwecke [8] | gut belegt, englisch |
| **ORVIS** (Pozzebon et al. 2010, aus IPIP) | 8 Interessensbereiche, **nicht RIASEC** | IPIP-Items | nein | gemeinfrei (IPIP) [9][18] | englisch; passt nicht direkt zu O*NET-Profilen |
| **VIT – Verb-Interessentest** (Hell, Wetzel & Pässler 2013) | RIASEC, geschlechtergerecht konstruiert | 45 | **ja, deutsches Original** | Open Test Archive (ZPID). Standard dort CC BY-SA 4.0, aber **je Test verschieden** – für den VIT nicht bestätigt [10] | α = .83–.91 (klassische Fassung); drei Varianten. Entstanden im BMBF-Projekt Genderfairness – ein Pluspunkt, siehe 3.5 |
| **Open RIASEC** (opentests.de, PSYMETRIX) | RIASEC | ? | ja | „Creative Commons" laut Anbieter, Variante nicht ermittelt. Konto nötig | Norm N = 2.988 (eigene Online-Stichprobe). Keine begutachtete Veröffentlichung gefunden – **Stufe 4** [13] |
| **AIST-3** (Bergmann & Eder 2018, Hogrefe) | RIASEC | – | ja | **kommerziell**, Kauf nur mit Qualifikationsnachweis. **Nicht nutzbar – bestätigt.** AIST-R ist überholt, der Verlag empfiehlt AIST-3 [11] | – |
| **EXPLORIX** (Jörin Fux et al., Hogrefe) | RIASEC nach Hollands SDS | – | ja, mit deutschem Berufsregister (über 1.000 Berufe) | **kommerziell – nicht nutzbar, bestätigt** [12] | – |

**Befund:** Die deutsche IP-SF ist die einzige Kombination aus drei Dingen: deutsch, frei nutzbar und **direkt anschlussfähig** an die RIASEC-Profile von rund 900 Berufen in O*NET. Das ist ihr eigentlicher Wert.

### 1.2 Persönlichkeit (Big Five)

| Instrument | Items | Deutsch? | Lizenz | Güte |
|---|---|---|---|---|
| **BFI-2** (Soto & John; deutsch Danner et al. 2016) | 60, 5 Bereiche × 3 Facetten | ja, ZIS (doi 10.6102/zis247) | **Nur nicht-kommerziell.** Rechteinhaber sind Soto und John, für kommerzielle Nutzung ist eine Anfrage nötig [14]. Die ZIS-Dokumentation steht unter einer NC-Lizenz [15][17] | quotierte Bevölkerungsstichprobe N = 1.224, gute Reliabilität der Bereiche, ausreichende der Facetten [15] |
| **BFI-2-S / BFI-2-XS** (deutsch: Rammstedt, Danner, Soto & John 2020, EJPA 36(1), 149–161) | 30 / 15 | ja, ZIS 1662 | wie BFI-2 | Eigenschaften wie das Original, **hohe Retest-Stabilität** [16] |
| **IPIP** (Goldberg) | beliebig, z. B. 50 oder 100 Markeritems | mehrere Übersetzungen: IPIP40 (Hartig, Jude & Rauch 2003), 50/100 Markeritems (Streib), 300 Items NEO-ähnlich | **Gemeinfrei, auch kommerziell**, Übersetzen ohne Erlaubnis erlaubt [18]. **Ob die fremden deutschen Übersetzungen ebenfalls gemeinfrei sind, steht nirgends ausdrücklich** – sicher ist eine eigene Übersetzung | IPIP40: N = 733 (online), α = .72–.90, Retest nach 6 Monaten .71–.88 [19]. Keine repräsentative deutsche Norm |
| **B5T** (Satow) | Big Five + 3 Motive | ja | CC BY-NC-ND: **nicht-kommerziell, keine Änderung** [20] | – |
| **Open BIG-5** (opentests.de) | ? | ja, IPIP-basiert | Anbieter sagt „lizenzfrei", Variante unklar | Norm N = 1.719 (2012–2023, eigene Plattform). **Stufe 4** |

### 1.3 Arbeitswerte

| Instrument | misst | Deutsch? | Lizenz | Anschluss an Berufsdaten |
|---|---|---|---|---|
| **O*NET Work Importance Profiler / Locator** | 20 Arbeitsbedürfnisse → 6 Werte: Leistung, Unabhängigkeit, Anerkennung, Beziehungen, Unterstützung, Arbeitsbedingungen. Grundlage ist die Theory of Work Adjustment [21] | **keine deutsche Fassung gefunden** | Career Exploration Tools: Übersetzen erlaubt unter der Developer License [2] | **direkt**: O*NET führt je Beruf ein Werteprofil mit denselben sechs Werten |
| **CWVS – Circular Work Value Scale** (Schneider, Striebing, Hochfeld & Lorenz 2024, Frontiers in Psychology 15) | 4 übergeordnete Bereiche nach Schwartz: sozial, Prestige, intrinsisch, extrinsisch | **ja, deutsch entwickelt**, N = 1.049 Beschäftigte mit über 20 Wochenstunden | Artikel CC BY [22]. Itemzahl und Reliabilitäten habe ich nicht einsehen können | **kein** Berufsprofil – nur für das Gespräch und die Selbstklärung |
| **ESS Human Values Scale** (Schwartz, Breyer & Danner, ZIS 234) | 10 allgemeine Lebenswerte, 21 Items | ja | ZIS, Lizenz nicht ermittelt [23] | nein, und **keine Arbeitswerte** |

**Befund:** Einen deutschen Arbeitswerte-Fragebogen mit Berufsprofilen dazu gibt es **nicht**. Wer Werte abgleichen will, muss den WIP übersetzen und nach den ITC-Richtlinien zur Testadaptation prüfen [60].

### 1.4 Fähigkeiten und mitnehmbare Kompetenzen

**Was die Forschung sagt:**

- Selbsteinschätzung gegen gemessene Leistung, über viele Fähigkeiten gemittelt: **r = .29** mit großer Streuung (SD = .25; Mabe & West 1982, Journal of Applied Psychology) [24]
- Die Metasynthese über 22 Metaanalysen bestätigt das: **M = .29**, Spanne .09 bis .63 (Zell & Krizan 2014, Perspectives on Psychological Science) [24]
- Für Intelligenz liegt der Wert bei **r = .33** (Freund & Kasten 2012, Psychological Bulletin, 41 Studien) [24]
- **Genauer** wird die Selbsteinschätzung, wenn sie **bereichsspezifisch** ist und sich auf **vertraute, konkrete, wenig komplexe** Aufgaben bezieht (Zell & Krizan 2014)
- Selbsteinschätzungen spiegeln **mehr die Persönlichkeit als das Können**, und sie hängen enger mit den Interessen zusammen als gemessene Fähigkeiten (Personality and Individual Differences, 2020) [24]. Wer Interessen **und** selbsteingeschätzte Fähigkeiten abfragt, misst also teilweise zweimal dasselbe

**Was valide machbar ist:** eine **erfahrungsbasierte Tätigkeitsabfrage** statt Selbstnoten. Also nicht „Wie gut sind Sie im Organisieren? 1–5", sondern „Haben Sie in den letzten Jahren ein Budget verantwortet – nie / gelegentlich / regelmäßig?". Die Tätigkeiten liefern O*NET (Aufgaben) oder ESCO (Kompetenzen). Das ist genau der Bereich, in dem Selbstauskünfte am besten stimmen.

**Denkvorlage aus Deutschland:** Der **ProfilPASS** (Deutsches Institut für Erwachsenenbildung und ies Hannover) bilanziert formal, non-formal und informell erworbene Kompetenzen biografisch – über Tätigkeiten aus Beruf, Familie, Ehrenamt – und endet mit konkreten nächsten Schritten. Er ist ein begleitetes Verfahren, kein Test, taugt aber als Gliederung für die Erfahrungsabfrage [64].

**Was nicht machbar ist:** echte Leistungstests. Sie verlangen Zeitmessung, Normen, Schutz vor Übung und eine Itembank. Die BA hat sie – in **New Plan** stecken Aufgaben zu logischem Denken, Textverständnis und Rechnen [43]. **Verweisen statt nachbauen.**

### 1.5 Die GESIS-Sammlung ZIS

- Mehrere Lizenzen stehen zur Wahl (CC BY, CC BY-SA, CC BY-NC, CC BY-NC-SA); **empfohlen werden die NC-Varianten**, weil ZIS der nicht-kommerziellen Forschung dient [17]. Die Lizenz muss also **je Instrument** geprüft werden
- Gefunden habe ich dort: BFI-2, BFI-2-S/-XS, BFI-10, Human Values Scale, Arbeitszufriedenheitsskalen. **Keine RIASEC-Skala, keine Arbeitswerte-Skala mit Berufsbezug**
- Die Suche lief nur über Suchmaschinenauszüge, weil zis.gesis.org gesperrt war. **Eine direkte Suche in ZIS nach „Interesse", „Beruf" und „Werte" steht noch aus**

---

## 2 · Das Berufsverzeichnis

### 2.1 O*NET (USA)

- **Stand:** O*NET **31.0**, veröffentlicht **Ende August 2026**, nächste Aktualisierung für November 2026 angekündigt [4]
- **Lizenz:** CC BY 4.0. Die Pflichtnennung lautet sinngemäß: „enthält Informationen aus der O*NET 31.0 Database der USDOL/ETA, genutzt unter CC BY 4.0, O*NET® ist eine Marke der USDOL/ETA, [Name] hat verändert" [3]. **„O*NET" ist eine eingetragene Marke** – für den App-Namen tabu
- **Was es je Beruf liefert:** RIASEC-Profil und Hochpunkt-Code; **neu seit 31.0: 41 Basic Interests** (nach CABIN, Su et al. 2019); Arbeitswerte (6); Arbeitsstile, **2025 neu geordnet** (7 übergeordnete Bereiche, abgeleitet aus der Persönlichkeitsforschung); Fähigkeiten, Skills und Wissen mit Wichtigkeit und Niveau; Job Zones (Vorbildung) [4][62]
- **Kritisch:** Die RIASEC-Profile für 923 Berufe wurden 2023 mit **maschinellem Lernen** neu erzeugt und von einem Experten nachkorrigiert. Basic Interests und die neuen Arbeitsstile stammen aus einem **hybriden KI-Experten-Verfahren** [62]. Das ist dokumentiert und begründet – aber es sind **Schätzungen über Berufe**, keine Messungen an Beschäftigten
- **Geltungsbereich:** US-Arbeitsmarkt. Ein Suchauszug zu einer deutschen Studie über Berufswechsel in der Berufsausbildung berichtet, dass die Autoren O*NET-Klassifikationen bewusst **nicht** genutzt haben, weil sie nicht zum dualen System passen. **Welche Studie das genau ist, ließ sich nicht sauber zuordnen – als Hinweis nehmen, nicht als Beleg**

### 2.2 ESCO (EU)

- **Stand:** v1.2 seit 21.05.2024, danach die Nebenversion **v1.2.1** (Übersetzungskorrekturen; genaues Datum nicht ermittelt) [25]
- **Lizenz:** frei für jeden Zweck und jede Partei, nach Kommissionsbeschluss **2011/833/EU**. Das entspricht CC BY 4.0: Nennung und Kennzeichnung von Änderungen [25]
- **Liefert:** Berufe und Kompetenzen in 28 Sprachen **einschließlich Deutsch**, Download und API. Je Beruf **Kernkompetenzen und optionale Kompetenzen**, dazu eine eigene Hierarchie **transversaler Kompetenzen** (seit v1.1, 2022). Laut Crosswalk-Bericht rund **dreimal so viele Berufe** wie O*NET [26]
- **Liefert nicht:** Interessen, Werte, Fähigkeitsniveaus, Arbeitsstile. **Ein psychologischer Abgleich ist mit ESCO allein unmöglich** – nur Skill-Überlappung

### 2.3 Die offizielle Überleitung ESCO ↔ O*NET

- **Ja, es gibt sie:** „The crosswalk between ESCO and O*NET", Europäische Kommission, **Dezember 2022**, in Abstimmung mit dem US-Arbeitsministerium. Datei auf dem O*NET Resource Center, abfragbar auch über O*NET Web Services [26]
- **Verfahren:** KI-Vorschläge mit menschlicher Prüfung. Match-Typen: exact, broad, narrow, close. Das beste Modell traf 85 % der exakten Matches beim ersten Vorschlag [26]
- **Heißt für die App:** O*NET-Profile lassen sich auf ESCO-Berufe mit deutschem Namen übertragen – aber **n:m** (ein O*NET-Beruf auf mehrere ESCO-Berufe) und bei „broad" oder „close" **mit Unschärfe**. Die Übertragung ist eine **Annahme**, keine Messung
- **Vorlage:** Nesta hat 2021 mit „Mapping Career Causeways" genau diesen Brückenschlag gebaut – Übergangsempfehlungen zwischen ESCO-Berufen aus Skill-Ähnlichkeit, mit eigenem O*NET-ESCO-Crosswalk. Code unter **MIT-Lizenz**, Repository seit 12.10.2022 archiviert [30]

### 2.4 Die deutsche Seite: KldB 2010, ISCO-08, BERUFENET

- **KldB 2010** (überarbeitete Fassung 2020, gilt seit Berichtsjahr 2021) ist die amtliche deutsche Systematik. Die BA-Statistik stellt **Umsteigeschlüssel KldB 2010 → ISCO-08** bereit [29]. ESCO-Berufe hängen an ISCO-08. Damit ist die Kette geschlossen: O*NET → ESCO → ISCO → KldB – mit Unschärfe an jedem Glied
- Die EU veröffentlicht **Zuordnungstabellen der EURES-Länder**, für Deutschland Berufe und Kompetenzen – allerdings auf dem Stand **ESCO v1.0.3** [27]
- **BERUFENET (BA):** laut Dokumentation rund **3.569 Berufe**, davon 830 Ausbildungsberufe, 725 Studiengänge, 748 Weiterbildungsberufe (Stand nicht angegeben). Felder unter anderem KldB-Code, Tätigkeitsfelder, Aufstiegs- und Anpassungsweiterbildungen [28]
- **Die Schnittstelle ist nicht offiziell freigegeben.** Dokumentiert ist sie auf bund.dev bzw. GitHub von Dritten. Den Zugangsschlüssel liest man aus der öffentlichen Webseite aus, **eine Lizenz oder Nutzungsbedingung ist nirgends genannt** [28]. Für eine öffentliche App ist das ein Risiko: technisch erreichbar heißt nicht erlaubt
- **Deutsche RIASEC-Codes je Beruf** gibt es praktisch nur in **kommerziellen** Produkten (EXPLORIX-Berufsregister) und verstreut bei einzelnen Arbeitsagenturen. **Ein freier Datensatz „RIASEC je KldB-Beruf" ließ sich nicht finden**

### 2.5 Was für deutsche Umsteiger jeweils fehlt

| fehlt | wo es liegt |
|---|---|
| Quereinstieg und Umschulungswege | BERUFENET (Zugangsberufe), mein NOW (Weiterbildungssuche, seit Anfang 2025 Nachfolger von KURSNET) [65] |
| Anerkennung von Berufserfahrung ohne Abschluss | **Validierungsverfahren nach BVaDiG**, seit 01.01.2025 bei IHK und HWK. Voraussetzungen: ab 25 Jahren, einschlägige Erfahrung vom 1,5-Fachen der Ausbildungsdauer (bei dreijähriger Ausbildung 4,5 Jahre), gebührenpflichtig [58] |
| Löhne in Deutschland | Entgeltatlas der BA (API ebenfalls nur von Dritten dokumentiert) |
| reglementierte Berufe (harte Grenzen) | nicht systematisch in O*NET. Die Liste muss man selbst pflegen – aus BERUFENET oder der EU-Datenbank reglementierter Berufe (**noch nicht geprüft**) |
| **Distanz zum bisherigen Beruf** | nirgends fertig. Berechenbar aus Tätigkeits- und Skill-Überlappung (Nesta-Ansatz) |

---

## 3 · Was die Forschung zum Abgleich sagt

### 3.1 Interessen-Passung

- **Zufriedenheit:** Interessen-Passung sagt Arbeitszufriedenheit voraus, aber **schwach, ρ ≈ .19**. Grundlage sind 105 Studien mit N = 39.602 aus den Jahren 1949–2016. Am stärksten ist der Zusammenhang mit der Zufriedenheit über die **Berufswahl** selbst (Hoff, Song, Wee, Phan & Rounds 2020, Journal of Vocational Behavior 123) [32]
- **Leistung:** Hier ist Passung wichtiger, **ρ ≈ .32** – so berichtet bei Hoff et al. 2020 mit Verweis auf Nye et al. 2012. **Passungsindizes sagen mehr voraus als Interessenwerte allein** (Nye, Su, Rounds & Drasgow 2012, Perspectives on Psychological Science 7(4)) [31][32]
- **Stabilität:** Interessen sind ab dem Studienalter über zwei Jahrzehnte stabil, im Rangvergleich stabiler als Persönlichkeitsmerkmale (Low et al. 2005, Psychological Bulletin 131(5)) [38]. **Für die Zielgruppe Erwachsene spricht das für Interessen als Fundament**

### 3.2 Persönlichkeit

- Big Five und Arbeitszufriedenheit (Judge, Heller & Mount 2002, 163 Stichproben): Neurotizismus −.29, Extraversion .25, Gewissenhaftigkeit .26, Verträglichkeit .17, Offenheit .02; alle fünf zusammen **R = .41** [33]
- **Die Falle:** Das ist ein **Personeffekt, kein Passungseffekt.** Emotional stabile Menschen sind in **fast jedem** Beruf zufriedener. Für die Berufsauswahl taugt Persönlichkeit nur als Abgleich mit **Berufsanforderungen**
- Genau diesen Abgleich stützt eine deutsche Studie: Die Passung zwischen eigener Persönlichkeit und den von Fachleuten eingeschätzten Persönlichkeitsanforderungen des Berufs sagt das **Einkommen** voraus. Wer passt, verdient im Jahr mehr als ein zusätzliches Monatsgehalt (Denissen et al. 2018, Psychological Science, SOEP, N = 8.458) [35]

### 3.3 Werte und die Theorie dahinter

- Die **Theory of Work Adjustment** (Dawis & Lofquist) trennt zwei Ergebnisse. **Zufriedenheit** kommt aus der Passung von Werten und dem, was der Beruf bietet. **Bewährung** (*satisfactoriness*) kommt aus der Passung von Fähigkeiten und Anforderungen [21]
- **Für Max' Modell heißt das:** Schwächen gehören auf die Seite der Bewährung, Werte auf die Seite der Zufriedenheit. Das sind zwei getrennte Achsen, keine gemeinsame Summe
- Metaanalyse zur Passung (Kristof-Brown, Zimmerman & Johnson 2005, 172 Studien, 836 Effekte): **Direkt erfragte Passung hängt stärker mit Ergebnissen zusammen als indirekt errechnete** [34]. Die App rechnet indirekt – also die schwächere Variante

### 3.4 Schwächen fachlich sauber behandeln

- **Max' Regel ist fachlich gedeckt.** Das PIC-Modell (Gati & Asher 2001) arbeitet in drei Stufen. Im **Vorab-Aussieben** fallen Berufe nur an den wichtigsten, **nicht verhandelbaren** Merkmalen heraus (sequenzielle Elimination). Erst in der **Auswahl** werden Vor- und Nachteile **kompensatorisch** gegeneinander gewogen [37]
- **Drei Regeln, die daraus folgen:**
  1. **Eine Schwäche zählt nur, wo der Beruf das Merkmal braucht.** O*NET führt für Fähigkeiten und Skills getrennte Skalen für Wichtigkeit und Niveau. Eine schwache Rechenfähigkeit kostet in einem Beruf mit geringer Wichtigkeit fast nichts
  2. **Lernbar gegen stabil trennen.** Ein Skill-Defizit ist eine **Weiterbildungsfrage**, eine stabile Eigenschaft eine **Passungsfrage**. Für Umsteiger ist das der entscheidende Unterschied
  3. **Die Strafe klein halten, weil die Messung unsicher ist.** Selbsteingeschätzte Schwächen stimmen nur mit r ≈ .29 (1.4). Wer darauf hart abwertet, sortiert Berufe nach einem Messfehler aus

### 3.5 Grenzen – was die App nicht versprechen darf

| nicht versprechen | warum |
|---|---|
| „der richtige Beruf", „Ihre Eignung" | Interessen-Passung erklärt Zufriedenheit nur zu einem kleinen Teil (ρ ≈ .19). Eignung setzt Leistungsdiagnostik voraus. Wer von „Eignung" spricht, wird an DIN 33430 (2016) gemessen, der Norm für berufsbezogene Eignungsdiagnostik – für Selbsterkundung nicht verbindlich, aber die Messlatte der Fachleute [61] |
| „wissenschaftlich validiert" (ohne Zusatz) | Validiert sind einzelne Instrumente für bestimmte Gruppen, **nicht die App und nicht der Abgleich**. Die Übertragung auf deutsche Berufe ist ungeprüft |
| Genauigkeit der Berufsprofile | US-Profile, teils KI-geschätzt, über n:m-Crosswalk übertragen |
| neutrale Empfehlungen | Interessen unterscheiden sich stark nach Geschlecht: Dinge gegen Menschen d = 0.93, Realistic d = 0.84 (Su, Rounds & Armstrong 2009, 47 Inventare, N = 503.188) [39]. Ein reiner Interessenabgleich **reproduziert Geschlechtertrennung**. Sprachmodelle empfehlen nachweislich geschlechterstereotyp [42] |
| dass die Erklärung stimmt, weil sie überzeugt | **Barnum-Effekt:** Allgemeine Beschreibungen werden als treffend erlebt (Übersicht: Furnham & Schofield 1987) [41]. Ein Sprachmodell formuliert besonders überzeugend – das Risiko wächst |
| Ersatz für Beratung | Interventionen **ohne** Beraterkontakt wirken schwächer (Whiston, Brecheisen & Stephens 2003, 57 Studien) [36] |

**Was trägt:** Wirksame Berufswahl-Interventionen enthalten **fünf Zutaten**: schriftliche Übungen, individuelle Deutung und Rückmeldung, Information über die Arbeitswelt, Vorbilder, Aufbau von Unterstützung. Die mittlere Effektstärke steigt mit der Zahl der Zutaten von .22 (keine) auf .99 (drei). Belegt bei Brown & Ryan Krane 2000, nachgerechnet von Brown et al. 2003 [36]. Die Replikation durch Whiston et al. 2017 ergibt insgesamt d = .35, **Unterstützung durch Berater** vergrößert den Effekt [36]. **Das KI-Gespräch kann zwei bis drei dieser Zutaten liefern** – Deutung, Arbeitsweltwissen, schriftliche Reflexion. **Vorbilder und echte Unterstützung** kann es nicht.

---

## 4 · Der Markt

| Angebot | Zielgruppe | Tests | Tiefe | Kosten, Zugang |
|---|---|---|---|---|
| **New Plan** (BA, seit 11/2020; seit Sommer 2024 in **mein NOW**) | **Berufstätige, Neuorientierung** | drei Tests: Entwicklungsmöglichkeiten (Soft Skills, Motive, Arbeitshaltungen), Weiterbildung (**Leistungstests**: logisches Denken, Textverständnis, Rechnen), Tätigkeiten (beides zusammen). Vergleich mit Referenzgruppe | Vorschläge aus der **eigenen Berufserfahrung**, dazu eine „Stöberwelt" mit Tätigkeiten ohne Vorerfahrung. Interessen-Test als solcher nicht erkennbar, keine Big Five, kein Dialog | kostenlos, **ohne Anmeldung möglich** (dann gehen die Ergebnisse beim Verlassen verloren) [43] |
| **Check-U** (BA) | Schülerinnen und Schüler ab Klasse 8 bzw. 13 Jahren | vier Tests: Fähigkeiten, soziale Kompetenzen, berufliche Vorlieben, Interessen. Rund 80 Minuten | Ausbildungsberufe und Studienfelder, Normgruppen nach Schulalter | kostenlos, anonym [45] |
| **wit** (hoch & weit, über mein NOW) | Weiterbildungsinteressierte | Interessentest mit sechs Bereichen | passende Weiterbildungen, PDF | kostenlos, anonym [47] |
| **Berufsberatung im Erwerbsleben** (BA, seit 2020) | alle Erwachsenen | – | **persönliche Beratung** | kostenlos [46] |
| **CareerExplorer** (Sokanu; seit 19.03.2021 bei Penn Foster) | breit, US-lastig | Interessen, Persönlichkeit, Werte, Arbeitsumfeld, fünf Module, ML-Abgleich | über 800 Berufsprofile | kostenlos mit **Konto**. Nach eigener Angabe über 10 Mio. Nutzer im Jahr (Firmenangabe 2021). Englisch [48] |
| **Truity** | breit | Holland-Test kostenlos, TypeFinder (MBTI-artig, 110 Fragen) | Kurzbericht frei, **Vollbericht kostenpflichtig** (in Rezensionen 19–29 US-Dollar, **Stufe 4**) [49] | – |
| **KI-Berufsberater, deutsch** (MIKA, SkillShift, Frag KAI, BO.AI u. a.) | gemischt, oft Schulabgänger | meist ohne validierte Tests | Chat | nur Anbieterseiten gesehen, **nicht bewertet** |
| **ChatGPT und Co.** | alle | keine | beliebig | Die Agentur für Arbeit Kiel lädt 2025 selbst zu Veranstaltungen ein, in denen man sich mit ChatGPT und Co. einen persönlichen KI-Agenten für Bewerbung, Berufsfindung **und Neuorientierung** baut [67] |

### Wo die Lücke ist

- **Nicht bei „kostenlos, ohne Konto, für Berufstätige"** – das hat New Plan
- **Reichweite:** In der IAB-Befragung (N = 4.417) kannten ohne Anschreiben nur **rund 2 %** der Vollzeitbeschäftigten New Plan, genutzt hatten es **0,3 %**. Ein Informationsschreiben hob die Bekanntheit um rund 14 und die Nutzung um rund 10 Prozentpunkte (IAB-Forschungsbericht 1/2024) [44]. **Die Zielgruppe wird schlicht nicht erreicht**
- **Tiefe, die New Plan nicht hat:** Interessenprofil nach RIASEC, Arbeitswerte, Persönlichkeit, **Erklärung im Dialog** („warum dieser Beruf, was spricht dagegen, was müsste ich lernen")
- **Die Brücke von der Erfahrung zum fremden Beruf:** Distanz, Überlappung, Lernweg. Das kann niemand im deutschen Markt erkennbar gut
- **Neutralität:** Viele Angebote hängen an Weiterbildungsanbietern. Ein Werkzeug ohne Verkaufsinteresse wäre ein Unterschied – solange es eins bleibt (siehe 5.3)

---

## 5 · Recht, kurz

### 5.1 EU-KI-Verordnung

- **Anhang III, Nr. 3** (Bildung) erfasst KI, die über **Zugang, Zulassung oder Zuweisung** zu Bildungseinrichtungen entscheidet, Lernergebnisse bewertet, das angemessene Bildungsniveau **innerhalb** von Einrichtungen einstuft oder Prüfungen überwacht. **Nr. 4** (Beschäftigung) erfasst Personalauswahl sowie Entscheidungen über Beförderung, Kündigung, Aufgabenzuteilung und Leistungsbewertung [50]
- **Einschätzung:** Ein Werkzeug zur **Selbsterkundung**, das niemandem Zugang gewährt oder verwehrt, fällt **nicht** unter diese Tatbestände – **meine Lesart, keine behördliche Aussage**. Entscheidend ist die **Zweckbestimmung**: Die Kommission betont in ihrem Leitlinienentwurf vom 19.05.2026 (Konsultation bis 23.07.2026), dass der beschriebene Zweck den Ausschlag gibt und ein Widerspruch zwischen Beschreibung und tatsächlicher Nutzung nicht schützt [52]
- **Kippen kann es,** sobald Jobcenter, Bildungsträger oder Arbeitgeber die App zum **Steuern** einsetzen – etwa für interne Versetzung oder Maßnahmezuweisung
- **Zeitplan nach dem KI-Omnibus** (VO (EU) 2026/1744, Amtsblatt 24.07.2026, in Kraft seit 27.07.2026): Die Hochrisiko-Pflichten aus Anhang III gelten erst ab **02.12.2027** [51]
- **Was schon gilt:** **Art. 50 Abs. 1 seit 02.08.2026** – ein System, das direkt mit Menschen spricht, muss sie informieren, dass sie mit einer KI sprechen, sofern das nicht offensichtlich ist [51]. **Art. 4 (KI-Kompetenz)** ist durch den Omnibus zur Bemühenspflicht abgeschwächt worden [51]

### 5.2 Datenschutz

**Solange alles auf dem Gerät bleibt:**

- Speichern im Browser (localStorage, IndexedDB) fällt unter **§ 25 TDDDG**. Einwilligungsfrei ist es nur, wenn es für den **ausdrücklich gewünschten Dienst unbedingt erforderlich** ist – das Speichern der eigenen Testergebnisse dürfte darunter fallen. Beschrieben werden muss es trotzdem [54]
- **Ob Max überhaupt Verantwortlicher im Sinne der DSGVO ist**, wenn er die Daten nie sieht, ist **strittig**. Die Praxisliteratur behandelt App-Anbieter regelmäßig als Verantwortliche. Eine behördliche Aussage zu rein lokaler Verarbeitung habe ich nicht gefunden
- **Reichweiten-Messung, Schriften oder Fehlermeldungen,** die an Dritte gehen, heben das „bleibt auf dem Gerät" still auf

**Sobald Antworten an einen KI-Anbieter gehen, ändert sich viel:**

1. Max wird **Verantwortlicher**, der Anbieter **Auftragsverarbeiter**. Nötig sind ein Vertrag nach Art. 28 DSGVO und der Ausschluss der Nutzung für Training
2. **Besondere Kategorien (Art. 9):** Big Five allein sind keine Gesundheitsdaten. Aber der EuGH legt Art. 9 weit aus: Auch Daten, aus denen sich sensible Informationen **mittelbar ableiten** lassen, fallen darunter (Urteil vom 01.08.2022, C-184/20) [55]. Im Gespräch über „Zweifel" kommen Burnout, Krankheit, Behinderung zur Sprache – dann braucht es eine **ausdrückliche Einwilligung** nach Art. 9 Abs. 2 lit. a
3. **Datenschutz-Folgenabschätzung:** Die Muss-Liste der DSK nennt den Einsatz von KI zur **Steuerung der Interaktion** mit Betroffenen oder zur **Bewertung persönlicher Aspekte**. Das beschreibt ein KI-Berufsgespräch ziemlich genau [53]
4. **USA:** Das EU-US Data Privacy Framework hat das Gericht der EU am 03.09.2025 bestätigt. Das Rechtsmittel beim EuGH (C-703/25 P) ist anhängig, eine Entscheidung wird frühestens Ende 2026 erwartet [56]. **Ein Anbieter mit EU-Verarbeitung nimmt dieses Risiko heraus**

### 5.3 Ein blinder Fleck: das SGB III

- **§ 30 SGB III** bestimmt Berufsberatung als Auskunft und Rat zu Berufswahl, beruflicher Entwicklung **und Berufswechsel** [57]
- **§ 288a:** Die Agentur für Arbeit **hat** Berufsberatenden die Tätigkeit zu untersagen, wenn das zum Schutz der Ratsuchenden erforderlich ist [57]
- **§ 289:** Wer Interessen eines Arbeitgebers oder einer Einrichtung vertritt, muss das **offenlegen**. Das gilt auch bei Verbindungen, deren Kenntnis für die Ratsuchenden wichtig ist [57]
- **§ 290:** Vergütung darf nur verlangt werden, wenn nicht zugleich Arbeitsvermittlung betrieben wird [57]
- **Ob eine automatisierte App „Berufsberatung betreibt", habe ich nicht klären können** – dazu weder Rechtsprechung noch Kommentarstelle gefunden. **Praktisch relevant ist § 289:** Verweist die App auf Max' Workshops, auf Coaching oder auf Weiterbildungsanbieter mit Provision, gehört das offen auf den Tisch

---

## Gegen dein Vorwissen gehalten

**Bestätigt**

- AIST und EXPLORIX sind Hogrefe-Produkte und für eine freie App nicht nutzbar [11][12]
- Die GESIS-Sammlung ZIS enthält offene deutsche Skalen, teils unter CC BY [17]
- Es gibt eine offizielle Überleitung ESCO ↔ O*NET (2022) [26]
- Die BFI-2-Kurzformen (-S und -XS) sind auf Deutsch geprüft (Rammstedt et al. 2020) [16]

**Ergänzt**

- Auch der O*NET Interest Profiler ist auf Deutsch geprüft – die 60-Item-Kurzform, frei zugänglich (Roemer et al. 2023) [6]
- O*NET 31.0 (08/2026) liefert erstmals **41 Basic Interests je Beruf** – feiner als die sechs RIASEC-Bereiche [4]
- Die Bundesagentur ist mit **New Plan** schon in Max' Zielgruppe unterwegs [43]

**Korrigiert**

| bisher angenommen | tatsächlich | seit wann |
|---|---|---|
| „IPIP-RIASEC-Skalen sind public domain" | Die RIASEC Markers (Armstrong et al. 2008) sind trotz Titel **urheberrechtlich geschützt und nur nicht-kommerziell frei**. Gemeinfrei sind die IPIP-**Persönlichkeitsitems** und ORVIS (kein RIASEC) | seit Veröffentlichung 2008 [8] |
| „ZIS-Skalen sind CC BY" | ZIS bietet **vier** Lizenzen an und **empfiehlt die nicht-kommerziellen**. Das BFI-2 ist nur nicht-kommerziell frei | Lizenzmodell der ZIS [17] |
| „AIST-R" | AIST-R ist abgelöst durch **AIST-3** (2018) | 2018 [11] |
| „kostenlos, ohne Konto" als Alleinstellung | New Plan bietet beides bereits | seit Sommer 2024 in mein NOW [43] |
| „Ergebnisse bleiben auf dem Gerät" | gilt nur, solange **kein** Cloud-Sprachmodell im Spiel ist | – |
| „Hochrisiko nach KI-VO" als offene Frage | Für Selbsterkundung wahrscheinlich nein. Und selbst wenn: Anhang-III-Pflichten erst ab 02.12.2027. **Jetzt** gilt Art. 50 | Omnibus in Kraft seit 27.07.2026 [51] |

---

## Deine blinden Flecken

1. **Rechtlich – SGB III.** Berufsberatung ist ein Rechtsbegriff mit Untersagungsbefugnis der BA und Offenlegungspflicht (§§ 30, 288a, 289). Er wird übersehen, weil man ihn bei einer App nicht vermutet
2. **Die Gegenposition.** Die Passungsforschung selbst liefert sie: Interessen-Passung erklärt Zufriedenheit nur schwach, errechnete Passung schwächer als erlebte, Werkzeuge ohne Mensch schwächer als mit. Wer „tiefgründig" verspricht, muss das aushalten
3. **Die Praxis – der Engpass sind die Berufsdaten, nicht die Tests.** Deutsche Berufsprofile mit RIASEC, Werten und Anforderungen gibt es frei nicht. Alles läuft über US-Daten und Überleitungen
4. **Die Betroffenenperspektive.** Umsteiger haben andere Fragen als Schulabgänger: Was kostet mich der Wechsel (Lohn, Zeit, Status)? Was davon kann ich mitnehmen? Wer bezahlt die Umschulung? Wie weit ist der Weg? Forschung dazu: Wer in **tätigkeitsähnliche** Berufe wechselt, nimmt mehr mit; tätigkeitsspezifisches Humankapital erklärt bis zu **52 %** des Lohnwachstums (Gathmann & Schönberg 2010, Journal of Labor Economics 28(1)) [40]. Und die Mobilität steigt: Laut IAB wechseln seit 2013 deutlich mehr Beschäftigte binnen eines Jahres den Beruf (Buhmann & Fitzenberger, IAB-Forum 27.07.2026; Zahlen vor Verwendung am Volltext prüfen, die Definitionen weichen zwischen Studien ab) [59]
5. **Geschlecht und Stereotyp.** Ein Interessenabgleich schreibt Geschlechtermuster fort, ein Sprachmodell verstärkt sie. Der VIT wurde genau deshalb gebaut [10][39][42]
6. **Die Formalisierung von Erfahrung.** Das Validierungsverfahren nach BVaDiG ist für Umsteiger ohne Abschluss vielleicht wertvoller als jede Berufsempfehlung [58]

---

## Richtungen

- **A · Die Distanz zum jetzigen Beruf als eigene Achse.** Nicht nur „was passt zu Ihnen", sondern „wie weit ist es von dort, wo Sie stehen". Nesta hat das für ESCO offen vorgemacht [30]. Das wäre der eigentliche Umsteiger-Kern und im deutschen Markt nicht besetzt
- **B · Das KI-Gespräch als Beratungszutat, nicht als Orakel.** Es liefert Deutung, Arbeitsweltwissen und Reflexion (drei der fünf Wirkzutaten) und verweist für den Rest ausdrücklich auf die kostenlose Berufsberatung im Erwerbsleben. Das wäre fachlich die stärkste Position – und rechtlich die ruhigste
- **C · Basic Interests statt nur RIASEC.** Mit O*NET 31.0 gibt es 41 feinere Interessenbereiche je Beruf. Dazu passt das neue CABIN-NET (60 Items, 20 Basic Interests; Chu et al. 2026) [66]. Eine deutsche Fassung existiert nicht, **Lizenz ungeklärt** – eher Stufe 2 als Stufe 1
- **D · Zukunftsfestigkeit als Zusatzspalte.** Wer mit 40 umsteigt, fragt, ob es den Zielberuf in zehn Jahren noch gibt. Ein Preprint vom Juli 2026 mittelt fünf Schätzungen der KI-Exposition von Berufen und legt sie auf O*NET-Interessenbereiche und Job Zones (Steele & Cruz 2026) [63]. **Preprint, nicht begutachtet** – als Anstoß, nicht als Datenquelle
- **E · Offene Zusammenarbeit statt Nachbau.** Die BA hat Leistungstests, Normen, Berufsdaten und das Reichweitenproblem. Max hat Redaktion und Reichweite. Eine Anfrage, ob BERUFENET-Daten nutzbar sind, ist ohnehin fällig

---

## Der Praxistransfer

**Am Montagmorgen, bevor eine Zeile Code entsteht:**

1. **Eine Lizenzakte anlegen.** Je Instrument die Lizenzseite als PDF mit Abrufdatum sichern: O*NET Tools Developer License, O*NET Database License, ZIS-Eintrag, IPIP-Permission, ESCO-FAQ. Heute konnte ich keine davon im Volltext öffnen
2. **Zwei Anfragen verschicken:** an Soto und John (BFI-2-S für eine kostenlose, öffentliche App mit oder ohne Geschäftsbezug) und an die BA (Nutzung von BERUFENET-Daten)
3. **Den Testsatz auf Zeit prüfen.** IP-SF 60 Items plus BFI-2-S 30 oder IPIP 40 plus WIP 20 Bedürfnisse plus Erfahrungsabfrage ergeben geschätzt 30–40 Minuten (**eigene Schätzung**). Zum Vergleich: Check-U etwa 80 Minuten, CareerExplorer laut Anbieter 30, laut Rezensenten 60–90 Minuten

**Der Abgleich als Arbeitsprobe, in Stufen nach Gati:**

| Stufe | was passiert | Beispiel |
|---|---|---|
| 1 · Aussieben | nur harte Grenzen: reglementierter Zugang, gesundheitliche Voraussetzungen, von der Person gesetzte Ausschlüsse | „keine Schichtarbeit", „keine Ausbildung über 2 Jahre" |
| 2 · Passung Zufriedenheit | RIASEC-Profilähnlichkeit zu O*NET plus Wertepassung | Profilkorrelation, nicht nur der Hochpunkt-Code – der verschiebt sich schon zwischen Kurz- und Minifassung |
| 3 · Passung Bewährung | Anforderungen gegen Erfahrung. Schwächen zählen **nur, wo der Beruf das Merkmal braucht**, und nur mit kleinem Gewicht | „Budgetverantwortung: regelmäßig" gegen einen Beruf mit hoher Wichtigkeit von Finanzplanung |
| 4 · Distanz | Überlappung mit dem heutigen Beruf, geschätzter Lernweg | „nah – 60 % Ihrer Tätigkeiten kommen dort vor" gegen „weit – Umschulung nötig" |
| 5 · Ausgabe | Rangliste mit Begründung **je Achse**, dazu zwei bis drei bewusst überraschende Treffer | „passt zu Ihren Interessen, passt weniger zu Ihrem Wunsch nach Unabhängigkeit, Weg: mittel" |

Die Beispiele in der rechten Spalte zeigen, wie die Logik aussieht – sie sind keine Formulierungen für die App.

**Worauf die Ausgabe achtet:**

- „Passt zu Ihren Interessen" statt „Sie sind geeignet" – die Aussage bleibt bei dem, was gemessen wurde
- Die Sicherheit sichtbar machen: Die Einschätzung beruht auf US-Berufsdaten
- **Immer** der Hinweis auf New Plan (für echte Leistungstests) und die kostenlose Berufsberatung im Erwerbsleben

**Das KI-Gespräch:**

- Es bekommt nur **zusammengefasste Werte**, keine Rohantworten
- Hinweis nach Art. 50 KI-VO vor dem ersten Satz
- **Keine Diagnosen**, keine Aussagen zu Gesundheit. Bei Burnout- oder Krankheitsthemen: Verweis statt Vertiefung
- Freitexte werden nicht dauerhaft gespeichert

**Validierung klein anfangen:**

- 30–50 Umsteigerinnen und Umsteiger als Pilot
- Prüfstein wie bei Roemer et al.: **Landet der heutige Beruf der Person in ihrer eigenen Rangliste weit oben?** Wenn nicht, stimmt der Abgleich nicht
- Dazu ein Retest nach zwei Wochen

---

## Was noch fehlt

- **Volltexte der Lizenzen** – O*NET Tools Developer License, O*NET Database License, ZIS-Eintrag zum BFI-2, IPIP-Seite zu Übersetzungen, Testarchiv-Eintrag zum VIT. Heute alle gesperrt
- **Die Lizenz des VIT** und die **Itemzahl und Reliabilität der CWVS**
- **Direkte Suche in ZIS** nach Interessen- und Arbeitswerte-Skalen
- **Eine deutsche WIP-Fassung** – nicht gefunden. Wenn es keine gibt: eigene Übersetzung nach ITC-Richtlinien plus Pilot
- **Die Güte der Übertragung O*NET → deutsche Berufe.** Keine Studie gefunden, die das für RIASEC-Profile prüft
- **Rechtliche Einordnung SGB III** für automatisierte Werkzeuge: Fachanwalt oder Nachfrage bei der BA
- **Rechtsstatus der BERUFENET-Daten**
- **Liste reglementierter Berufe** als Datenquelle für harte Grenzen – nicht recherchiert
- **Das Primärdokument der DSK-Muss-Liste** – bisher nur über eine Sekundärquelle belegt

---

## Strittig

- **Ist ein Anbieter ohne Datenzugriff Verantwortlicher nach DSGVO?** Die Praxis sagt meist ja, weil der Anbieter Zweck und Mittel bestimmt. Eine klare Aufsichtsaussage zu rein lokaler Verarbeitung fehlt. **Besser steht die vorsichtige Lesart:** so bauen, als wäre man verantwortlich
- **Sind Big-Five-Werte Art.-9-Daten?** Für sich genommen eher nicht. Nach EuGH C-184/20 reicht aber die mittelbare Ableitbarkeit. Neurotizismus liegt nah an psychischer Gesundheit. **Besser steht:** Ergebnisse nie klinisch formulieren, Gesprächsinhalte als potenziell sensibel behandeln
- **Wie viel trägt Persönlichkeit zum Berufsabgleich bei?** Stark für Zufriedenheit **allgemein** (R = .41), aber das ist kein Passungseffekt. Die Passung zu Berufsanforderungen ist für Einkommen belegt (Denissen 2018), für Zufriedenheit weniger klar. **Besser steht:** Persönlichkeit mit kleinem Gewicht und vor allem im Gespräch

---

## Ungeprüft

- Dass die IP-SF (60) und der Mini-IP (30) unter dieselbe Tools-Lizenz fallen. Sehr wahrscheinlich, aber nicht am Lizenztext gesehen
- Dass die deutschen IPIP-Übersetzungen (Hartig et al., Streib) gemeinfrei sind
- Die Itemzahl der RIASEC Markers
- Die Lizenzvariante von Open RIASEC und Open BIG-5
- ESCO v1.2: Zahl der Berufe und Kompetenzen (aus dem Gedächtnis rund 3.000 Berufe und rund 13.900 Kompetenzen; belegt ist nur „rund dreimal so viele wie O*NET")
- Dass BERUFENET intern RIASEC-Codes führt (einmal in einem Suchauszug behauptet, nicht belegt)
- Preise von Truity und CareerExplorer (nur Rezensionen, Stufe 4)
- Die genauen IAB-Zahlen zur Berufsmobilität 2013–2024 – die Auszüge waren widersprüchlich
- Welche deutsche Studie O*NET-Klassifikationen als unpassend für das duale System verworfen hat (2.1)

---

## Material für Konrad

- Interessen-Passung und Zufriedenheit: ρ ≈ .19 – 105 Studien, N = 39.602, 1949–2016 (Hoff et al. 2020)
- Interessen-Passung und Leistung: ρ ≈ .32 (berichtet bei Hoff et al. 2020, nach Nye et al. 2012)
- Selbsteinschätzung und tatsächliche Fähigkeit: r ≈ .29 (Zell & Krizan 2014, 22 Metaanalysen)
- Wirkzutaten der Berufsberatung: Effekt von .22 ohne Zutat bis .99 mit drei (Brown & Ryan Krane 2000)
- New Plan: bekannt bei rund 2 % der Vollzeitbeschäftigten, genutzt von 0,3 % (IAB-Forschungsbericht 1/2024)
- Persönlichkeitspassung: mehr als ein zusätzliches Monatsgehalt im Jahr (Denissen et al. 2018, deutsche SOEP-Daten)
- Tätigkeitsnähe beim Wechsel: bis zu 52 % des Lohnwachstums aus tätigkeitsspezifischem Können (Gathmann & Schönberg 2010)
- Begriffspaare, die tragen: Neigung gegen Eignung · Schwäche gegen Grenze · lernbar gegen stabil · nah gegen weit
- **Nicht verwenden:** „Eignungstest", „validiert" ohne Zusatz, „der richtige Beruf"

---

## ► Meine Fragen an dich

**1 · Kommerziell oder nicht?**
Soll die App auch Max' Geschäft dienen, etwa durch Verweise auf Workshops oder Coaching? Davon hängen das BFI-2 (nur nicht-kommerziell) und die Offenlegung nach § 289 SGB III ab.
**Meine Empfehlung:** so planen, als wäre sie kommerziell – also Testsatz A – **deine Entscheidung?**

**2 · Das KI-Gespräch: Cloud oder Gerät?**
Ein Cloud-Modell hebt das Versprechen „bleibt auf dem Gerät" auf und zieht Auftragsverarbeitung, Einwilligung und Datenschutz-Folgenabschätzung nach sich. Ein Modell im Browser ist datenschutzfreundlich, aber deutlich schwächer.
**Meine Empfehlung:** Tests lokal, Gespräch als ausdrücklich zugeschaltete zweite Stufe mit EU-Verarbeitung und nur zusammengefassten Werten – **deine Entscheidung?**

**3 · Verhältnis zu New Plan**
Die BA deckt Leistungstests und erfahrungsbasierte Vorschläge schon ab, erreicht die Zielgruppe aber kaum.
**Meine Empfehlung:** ergänzen statt konkurrieren – Interessen, Werte, Distanz und Erklärung selbst liefern, für Leistungstests auf New Plan verweisen – **deine Entscheidung?**

---

## Quellen

Stufe 1 = Primärquelle, 2 = fachliche Auswertung, 3 = seriöse Sekundärberichterstattung, 4 = alles andere. **Alle Primärseiten nur über Suchauszüge eingesehen**, außer den GitHub-Seiten [28][30].

1. O*NET Career Exploration Tools Content License – O*NET Resource Center, USDOL/ETA, o. D. (eingesehen 09/2026) – https://www.onetcenter.org/license_tools.html – Stufe 1
2. O*NET Tools Developer License – O*NET Resource Center, USDOL/ETA, o. D. – https://www.onetcenter.org/license_toolsdev.html – Stufe 1
3. O*NET 31.0 Database Content License – O*NET Resource Center, 2026 – https://www.onetcenter.org/license_db.html – Stufe 1
4. What's New (O*NET 31.0, Basic Interests) – O*NET Resource Center, 08/2026 – https://www.onetcenter.org/whatsnew.html – Stufe 1
5. Rounds et al.: Development of an O*NET Mini Interest Profiler (Mini-IP) for Mobile Devices – National Center for O*NET Development, 2016 – https://www.onetcenter.org/reports/Mini-IP.html – Stufe 1
6. Roemer, Lewis & Rounds: The German O*NET Interest Profiler Short Form – Psychological Test Adaptation and Development 4(1), 2023, CC BY 4.0 – https://econtent.hogrefe.com/doi/10.1027/2698-1866/a000048 · Materialien: https://osf.io/xhk93/ – Stufe 1
7. Wild & Möhring: A preliminary analysis of the psychometric properties of the German O*NET interest profiler short form in rehabilitation education – Frontiers in Rehabilitation Sciences, 2026 – https://www.frontiersin.org/journals/rehabilitation-sciences/articles/10.3389/fresc.2026.1789335/full – Stufe 1
8. RIASEC Markers, Nutzungsbedingungen – Interest Item Pool (Rounds), o. D.; Armstrong, Allison & Rounds, Journal of Vocational Behavior 73, 2008 – https://jrounds.weebly.com/riasec-markers-scalesitems.html – Stufe 1
9. Pozzebon et al.: Psychometric characteristics of a public-domain self-report measure of vocational interests (ORVIS) – Journal of Personality Assessment 92(2), 2010 – https://pubmed.ncbi.nlm.nih.gov/20155566/ – Stufe 1
10. Hell, Wetzel & Pässler: VIT – Verb-Interessentest – Open Test Archive (ZPID), 2013 – https://www.testarchiv.eu/de/test/9006654 · Nutzungsbedingungen: https://www.testarchiv.eu/de/nutzungsbedingungen – Stufe 1
11. AIST-3 – Testzentrale/Hogrefe, 2018 – https://www.testzentrale.de/shop/allgemeiner-interessen-struktur-test-mit-umwelt-struktur-test-ust-3-version-3-89156.html – Stufe 2 (Verlag)
12. EXPLORIX – Hogrefe Consulting, o. D. – https://www.hogrefe-consulting.com/de/explorix – Stufe 2 (Verlag)
13. Open RIASEC – opentests.de (PSYMETRIX), o. D. – https://opentests.de/open-riasec/ – Stufe 4
14. The Big Five Inventory–2 – Colby Personality Lab (Soto), o. D. – https://www.colby.edu/academics/departments-and-programs/psychology/research-opportunities/personality-lab/the-bfi-2/ – Stufe 1
15. Danner et al.: Die deutsche Version des Big Five Inventory 2 (BFI-2) – ZIS/GESIS, 2016 – https://doi.org/10.6102/zis247 · https://access.gesis.org/zis/551 – Stufe 1
16. Rammstedt, Danner, Soto & John: Validation of the Short and Extra-Short Forms of the BFI-2 and Their German Adaptations – European Journal of Psychological Assessment 36(1), 2020 – https://econtent.hogrefe.com/doi/10.1027/1015-5759/a000481 · ZIS: https://access.gesis.org/zis/1662 – Stufe 1
17. ZIS: Lizensierung – GESIS, o. D. – https://zis.gesis.org/licensing?lang=de – Stufe 1
18. IPIP: Permission / Translating IPIP Items – Oregon Research Institute, o. D. – https://ipip.ori.org/newPermission.htm · https://ipip.ori.org/newItemTranslations.htm – Stufe 1
19. Hartig, Jude & Rauch: Entwicklung und Erprobung eines deutschen Big-Five-Fragebogens auf Basis des IPIP (IPIP40) – Goethe-Universität Frankfurt, 2003 – https://user.uni-frankfurt.de/~johartig/abstracts/hetal2003b.htm – Stufe 1
20. Satow: B5T Big-Five-Persönlichkeitstest – drsatow.de, 2020 – https://www.drsatow.de/tests/persoenlichkeitstest/ – Stufe 2
21. Development of the O*NET Computerized Work Importance Profiler – National Center for O*NET Development, o. D. – https://www.onetcenter.org/dl_files/DevCWIP.pdf – Stufe 1
22. Schneider, Striebing, Hochfeld & Lorenz: Establishing circularity – development and validation of the Circular Work Value Scale (CWVS) – Frontiers in Psychology 15, 05.04.2024, CC BY – https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2024.1296282 – Stufe 1
23. Schwartz, Breyer & Danner: Human Values Scale (ESS) – ZIS/GESIS, 2015 – https://access.gesis.org/zis/524 – Stufe 1
24. Selbsteinschätzung: Mabe & West, Journal of Applied Psychology 67(3), 1982 – https://asu.elsevierpure.com/en/publications/validity-of-self-evaluation-of-ability-a-review-and-meta-analysis/ · Zell & Krizan, Perspectives on Psychological Science, 2014 – https://journals.sagepub.com/doi/abs/10.1177/1745691613518075 · Freund & Kasten, Psychological Bulletin 138(2), 2012 – https://eric.ed.gov/?id=EJ977509 · Personality and Individual Differences, 2020 – https://www.sciencedirect.com/science/article/pii/S0191886920300404 – Stufe 1
25. ESCO FAQ (Lizenz) und ESCO v1.2.1 – Europäische Kommission, 2024/2025 – https://esco.ec.europa.eu/en/about-esco/faq · https://esco.ec.europa.eu/en/news/esco-v121-live – Stufe 1
26. The crosswalk between ESCO and O*NET (Technical Report) – Europäische Kommission, 12/2022 – https://esco.ec.europa.eu/system/files/2022-12/ONET%20ESCO%20Technical%20Report.pdf · Dateien: https://www.onetcenter.org/crosswalks.html – Stufe 1
27. EURES Countries Mapping Tables – Europäische Kommission, o. D. – https://esco.ec.europa.eu/en/use-esco/eures-countries-mapping-tables – Stufe 1
28. BERUFENET-API (Community-Dokumentation) – bundesAPI / A. Fischer auf GitHub, o. D. – https://github.com/bundesAPI/berufenet-api · https://github.com/AndreasFischer1985/berufenet-api – Stufe 3
29. Tabellarische Umsteigeschlüssel zur KldB 2010 – Statistik der Bundesagentur für Arbeit, o. D. – https://statistik.arbeitsagentur.de/DE/Statischer-Content/Grundlagen/Klassifikationen/Klassifikation-der-Berufe/KldB2010-Fassung2020/Arbeitsmittel/Umschluesselungstabellen.html – Stufe 1
30. Mapping Career Causeways – Nesta, 2021 (Repository archiviert 12.10.2022, MIT-Lizenz) – https://github.com/nestauk/mapping-career-causeways – Stufe 2
31. Nye, Su, Rounds & Drasgow: Vocational Interests and Performance – Perspectives on Psychological Science 7(4), 2012 – https://journals.sagepub.com/doi/abs/10.1177/1745691612449021 – Stufe 1
32. Hoff, Song, Wee, Phan & Rounds: Interest fit and job satisfaction – Journal of Vocational Behavior 123, 2020 – https://www.sciencedirect.com/science/article/abs/pii/S0001879120301287 · Pressemitteilung University of Houston, 11.11.2020 – https://www.uh.edu/news-events/stories/2020/november-2020/11112020-kevin-hoff-interest-job-satisfaction.php – Stufe 1/3
33. Judge, Heller & Mount: Five-factor model of personality and job satisfaction – Journal of Applied Psychology 87(3), 2002 – https://pubmed.ncbi.nlm.nih.gov/12090610/ – Stufe 1
34. Kristof-Brown, Zimmerman & Johnson: Consequences of individuals' fit at work – Personnel Psychology 58, 2005 – https://onlinelibrary.wiley.com/doi/10.1111/j.1744-6570.2005.00672.x – Stufe 1
35. Denissen et al.: Uncovering the Power of Personality to Shape Income – Psychological Science, 2018 – https://journals.sagepub.com/doi/10.1177/0956797617724435 – Stufe 1
36. Wirksamkeit von Berufsberatung: Whiston, Brecheisen & Stephens, Journal of Vocational Behavior, 2003 – https://www.sciencedirect.com/science/article/abs/pii/S0001879102000507 · Brown et al., Journal of Vocational Behavior, 2003 – https://www.sciencedirect.com/science/article/abs/pii/S0001879102000520 · Whiston et al., Journal of Vocational Behavior 100, 2017 – https://www.sciencedirect.com/science/article/abs/pii/S0001879117300283 – Stufe 1
37. Gati & Asher: Prescreening, In-Depth Exploration, and Choice – The Career Development Quarterly, 2001 – https://onlinelibrary.wiley.com/doi/abs/10.1002/j.2161-0045.2001.tb00979.x – Stufe 1
38. Low, Yoon, Roberts & Rounds: The stability of vocational interests from early adolescence to middle adulthood – Psychological Bulletin 131(5), 2005 – https://experts.illinois.edu/en/publications/the-stability-of-vocational-interests-from-early-adolescence-to-m/ – Stufe 1
39. Su, Rounds & Armstrong: Men and things, women and people – Psychological Bulletin 135, 2009 – https://pubmed.ncbi.nlm.nih.gov/19883140/ – Stufe 1
40. Gathmann & Schönberg: How General Is Human Capital? A Task-Based Approach – Journal of Labor Economics 28(1), 2010 – https://www.journals.uchicago.edu/doi/10.1086/649786 – Stufe 1
41. Furnham & Schofield: Accepting personality test feedback – a review of the Barnum effect – Current Psychology, 1987 – https://link.springer.com/article/10.1007/BF02686623 – Stufe 1
42. The Unequal Opportunities of Large Language Models: Demographic Biases in Job Recommendations by ChatGPT and LLaMA – ACM EAAMO, 2023 – https://dl.acm.org/doi/fullHtml/10.1145/3617694.3623257 – Stufe 1
43. New Plan – Bundesagentur für Arbeit / mein NOW, o. D. – https://www.arbeitsagentur.de/karriere-und-weiterbildung/erkundungstool-weiterbildung-new-plan · https://mein-now.de/new-plan/hilfebereich/registrierung-und-daten · https://mein-now.de/new-plan/hilfebereich/moeglichkeiten-testen – Stufe 1
44. „New Plan", berufliche Weiterentwicklung und die Rolle von Informationen – IAB-Forschungsbericht 1/2024 – https://doku.iab.de/forschungsbericht/2024/fb0124.pdf – Stufe 1
45. Check-U: Häufige Fragen – Bundesagentur für Arbeit, o. D. – https://www.arbeitsagentur.de/bildung/welche-ausbildung-welches-studium-passt/check-u-faq – Stufe 1
46. Berufsberatung im Erwerbsleben – Bundesagentur für Arbeit, o. D. – https://www.arbeitsagentur.de/karriere-und-weiterbildung/berufsberatung-im-erwerbsleben – Stufe 1
47. Online-Test „wit" – mein NOW, o. D. – https://mein-now.de/privatpersonen/online-tests/wit – Stufe 1
48. CareerExplorer Career Test FAQ – CareerExplorer, o. D. – https://www.careerexplorer.com/faqs/careerexplorer-career-test/ · Penn Foster Acquires Pioneering Career Discovery Platform – PR Newswire, 19.03.2021 – https://www.prnewswire.com/news-releases/penn-foster-acquires-pioneering-career-discovery-platform-301250853.html – Stufe 2/3 (Anbieter)
49. TypeFinder for Careers – Truity, o. D. – https://www.truity.com/test/type-finder-careers – Stufe 2 (Anbieter)
50. AI Act, Annex III – AI Act Service Desk, Europäische Kommission – https://ai-act-service-desk.ec.europa.eu/en/ai-act/annex-3 – Stufe 1
51. EU AI Omnibus enters into force – White & Case, 2026 – https://www.whitecase.com/insight-alert/eu-ai-omnibus-enters-force-amending-ai-act · Gibson Dunn, 2026 – https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/ – Stufe 2 (VO (EU) 2026/1744 selbst nicht geöffnet)
52. Draft Commission guidelines on the classification of high-risk AI systems – Europäische Kommission, 19.05.2026 – https://digital-strategy.ec.europa.eu/en/library/draft-commission-guidelines-classification-high-risk-ai-systems – Stufe 1
53. DSK-Muss-Liste zur DSFA, Wortlaut über Sekundärquelle – fokus-datenschutz.de, o. D. – https://www.fokus-datenschutz.de/liste-der-verarbeitungstatigkeiten-fur-die-eine-datenschutz-folgenabschatzung-durchzufuhren-ist – Stufe 3 (**Primärdokument der DSK noch beschaffen**)
54. § 25 TDDDG – gesetze-im-internet.de – https://www.gesetze-im-internet.de/ttdsg/__25.html – Stufe 1
55. EuGH, Urteil vom 01.08.2022, C-184/20 – dejure.org – https://dejure.org/dienste/vernetzung/rechtsprechung?Gericht=EuGH&Datum=01.08.2022&Aktenzeichen=C-184%2F20 – Stufe 1
56. European General Court dismisses Latombe challenge – IAPP, 09/2025 – https://iapp.org/news/a/european-general-court-dismisses-latombe-challenge-upholds-eu-us-data-privacy-framework – Stufe 3
57. SGB III §§ 30, 288a, 289, 290 – gesetze-im-internet.de / dejure.org – https://www.gesetze-im-internet.de/sgb_3/__30.html · https://dejure.org/gesetze/SGB_III/288a.html · https://dejure.org/gesetze/SGB_III/289.html · https://dejure.org/gesetze/SGB_III/290.html – Stufe 1
58. Feststellungsverfahren nach BVaDiG – IHK Rhein-Neckar, o. D. – https://www.ihk.de/rhein-neckar/ausbildung-weiterbildung/ausbildung/quereinstieg-ausbildung/zertifizierung-von-beruflichen-kompetenzen/validierungsverfahren-4294324 – Stufe 2
59. Buhmann & Fitzenberger: Überraschender Anstieg der beruflichen Mobilität – IAB-Forum, 27.07.2026 – https://iab-forum.de/ueberraschender-anstieg-der-beruflichen-mobilitaet/ – Stufe 1
60. ITC Guidelines for Translating and Adapting Tests, 2nd ed. – International Test Commission, 2017 – https://www.intestcom.org/files/guideline_test_adaptation_2ed.pdf – Stufe 1
61. DIN 33430 – Qualität in der Eignungsdiagnostik – BDP, o. D. – https://www.bdp-verband.de/profession/qualitaet-in-der-diagnostik/diagnostik-und-testkuratorium-dtk/din-33430-qualitaet-in-der-eignungsdiagnostik – Stufe 2
62. Revisiting the Work Styles Domain (2024) und Using Machine Learning to Develop Occupational Interest Profiles (2023) – National Center for O*NET Development – https://www.onetcenter.org/reports/Work_Styles_New.html · https://www.onetcenter.org/reports/ML_OIPs.html – Stufe 1
63. Steele & Cruz: Helping People Choose Careers in the Age of AI – arXiv 2607.15506, 07/2026 (Preprint) – https://arxiv.org/abs/2607.15506 – Stufe 3
64. ProfilPASS – Deutsches Institut für Erwachsenenbildung / wbv, o. D. – https://www.profilpass.de/ · https://wb-web.de/wissen/beratung/profilpass.html – Stufe 2
65. mein NOW, Start 01.01.2024 – BMAS, o. D. – https://www.bmas.de/DE/Arbeit/Aus-und-Weiterbildung/Berufliche-Weiterbildung/Nationales-Onlineportal-fuer-berufliche-Weiterbildung/nationales-onlineportal-fuer-berufliche-weiterbildung.html – Stufe 1
66. Chu et al.: Interest Fit Beyond the RIASEC – the CABIN-NET – Journal of Career Assessment 34(2), 2026 – https://journals.sagepub.com/doi/abs/10.1177/10690727251322520 – Stufe 1
67. Ihr persönlicher KI-Agent: So unterstützen Sie ChatGPT & Co im Bewerbungsprozess – Agentur für Arbeit Kiel, Pressemitteilung 2025 – https://www.arbeitsagentur.de/vor-ort/kiel/presse/2025-50-ihr-personlicher-ki-agent-so-unterstutzen-sie-chatgpt-co-im-bewerbungsprozess – Stufe 1
