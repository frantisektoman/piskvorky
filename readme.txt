Ke spuštění ukázky je potřeba nainstalovat Node.js, který je ke stažení na http://nodejs.org/#download pod licencí MIT.

Spuštění hry:
1. Server se spustí z příkazové řádky zápisem "node app.js".
2. Standardně běží na portu 3000. Port lze změnit ve skriptu app.js jako první parametr funkce app.listen().
3. Ve webovém prohlížeči otevřete alespoň ve dvou oknech stránku http://localhost:<číslo-portu>/
4. První připojený uživatel(tzn. první otevřené okno) dostane kolečko, druhý křížek, všichni ostatní jsou diváci.
5. Klikejte na hrací pole a sledujte realtime aktualizování informací v ostatních oknech.

Po odpojení jednoho z hráčů je potřeba nejdříve odpojit všechny další uživatele (hráče i diváky) a poté restartovat server.

Aplikace byla vyvinuta a testována na Node.js v0.6.14
a prohlížečích Google Chrome 18, Opera 11, Mozilla Firefox 8, Internet Explorer 9 a mobilních Opera Mobile 12, Android Browser 2.3, Amazon Kindle 4