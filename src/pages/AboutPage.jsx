import React, { Component } from 'react';

class AboutPage extends Component {
    render() {
        return (
            <>
                { }
                <header class="header">
                    <div class="wrapper header-grid">
                        <div class="header-left">
                            <button class="menu-toggle" aria-label="Öppna meny"><img src="assets/menu.svg" alt="" width="32" height="32" /></button>
                            <a href="index.html" class="logo">Guitarnet</a>
                        </div>
                        <nav class="nav" aria-label="Huvudmeny">
                            <ul class="nav-list">
                                <li><a href="produktgrid.html" class="nav-link">Gitarrer</a></li>
                                <li><a href="produktgrid.html" class="nav-link">Basar</a></li>
                                <li><a href="produktgrid.html" class="nav-link">Akustiskt</a></li>
                                <li><a href="produktgrid.html" class="nav-link">Amps &amp; Effekter</a></li>
                                <li><a href="produktgrid.html" class="nav-link">Tillbehör &amp; Övrigt</a></li>
                            </ul>
                        </nav>
                        <div class="header-icons">
                            <a href="under-konstruktion.html" class="icon-link" aria-label="Sök"><img src="assets/search.svg" alt="" width="32" height="32" /></a>
                            <a href="under-konstruktion.html" class="icon-link" aria-label="Kundvagn"><img src="assets/cart.svg" alt="" width="32"
                                height="32" /></a>
                        </div>
                    </div>
                </header>

                <main>


                    <section class="about-section" aria-labelledby="about-heading">
                        <div class="wrapper">
                            <nav class="breadcrumb" aria-label="Brödsmulor">
                                <p><a href="index.html">Startsida</a>/<span>Om oss</span></p>
                            </nav>
                            <div class="about-grid">
                                <div class="about-text">
                                    <h2 class="produktgrid-title" id="about-heading">Vår historia</h2>
                                    <p>Vi som startat Guitarnet är två som har ett passionerat intresse för musik i alla former. Och i centrum
                                        står elgitarren.
                                        Det allra bästa är att få spela själv. För oss är det viktigt att alla som vill ska ha råd att köpa en
                                        elgitarr
                                        som låter bra och är skön att spela på. Då hålls intresset vid liv, vi blir fler gitarrister och världen
                                        blir ännu bättre.
                                        Därför håller vi låga priser.</p>

                                    <p>Det ska vara ett sant nöje att äga och använda våra produkter. Något annat kommer vi inte att leverera.
                                        Våra gitarrer beställer vi direkt från fabrik, undantaget är Jay Turser och Oscar Schmidt som vi köper
                                        från generalagenten i Sverige.
                                        Dessutom har vi små omkostnader. Vårt mål är att du ska få något alldeles extra, mer än du betalar för.
                                        Vi har också bestämt oss för att ett köp inte ska göra något avtryck i klimatet.
                                        Därför klimatkompenserar vi för utvinning av råvaror till transporten hem till dig.
                                        Hör gärna av dig om du har synpunkter på vår hemsida eller våra gitarrer. </p>

                                    <p>Rock On!</p>

                                    <h2 class="section-title" id="about-values">Vad vi står för</h2>
                                    <ul class="about-list">
                                        <li>Handplockade märken med kvalitet i fokus</li>
                                        <li>Konkurrenskraftiga priser utan att kompromissa</li>
                                        <li>Personlig service och rådgivning</li>
                                        <li>Snabb leverans inom Sverige</li>
                                        <li>Garanti och support på alla produkter</li>
                                    </ul>

                                    <h2 class="section-title" id="about-showroom">Vårt showroom</h2>
                                    <p>Besök gärna vårt showroom i Göteborg där du kan provspela alla våra gitarrer. Vi bokar gärna in en tid så
                                        att du får den uppmärksamhet du förtjänar.
                                        <br />
                                        <a href="kontakt.html">Kontakta oss för att boka tid →</a>
                                    </p>
                                </div>
                                <aside class="about-sidebar">
                                    <div class="about-image-box">
                                        <img src="assets/gitarr.png" alt="Gitarrer i vårt showroom" />
                                    </div>
                                    <div class="about-fact-box">
                                        <h3>Guitarnet i siffror</h3>
                                        <dl class="fact-list">
                                            <dt>Grundat</dt>
                                            <dd>2002</dd>
                                            <dt>Antal märken</dt>
                                            <dd>6+</dd>
                                            <dt>Modeller i lager</dt>
                                            <dd>100+</dd>
                                            <dt>Nöjda kunder</dt>
                                            <dd>100 000+</dd>
                                        </dl>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </section>

                    <section class="video-section" aria-labelledby="video-heading">
                        <div class="wrapper">
                            <h2 class="section-title" id="video-heading">Se en rundtur i vårt showroom</h2>
                            <p class="section-intro">Kom in och känn atmosfären i vår butik.</p>
                            <div class="video-container">
                                <video controls poster="assets/gitarr.png" style="width:100%">
                                    <source src="assets/showroom.mp4" type="video/mp4" />
                                    <p>Din webbläsare stöder inte videouppspelning. <a href="assets/showroom.mp4">Ladda ner videon istället</a>.
                                    </p>
                                </video>
                            </div>
                        </div>
                    </section>

                </main>

                <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
                <script src="randomizer.js"></script>
                <script src="main.js"></script>

                <footer class="footer">
                    <div class="wrapper footer-grid">
                        <div class="footer-col">
                            <h2 class="footer-heading">Information</h2>
                            <ul class="footer-links">
                                <li><a href="om-oss.html">Om oss</a></li>
                                <li><a href="kontakt.html">Showroom</a></li>
                                <li><a href="under-konstruktion.html">Återförsäljare</a></li>
                                <li><a href="under-konstruktion.html">Köpvillkor</a></li>
                                <li><a href="under-konstruktion.html">CITES - Handelsregler</a></li>
                                <li><a href="under-konstruktion.html">Om tillverkare →</a></li>
                                <li><a href="under-konstruktion.html">Klimatet &amp; gitarrer</a></li>
                                <li><a href="under-konstruktion.html">Artister &amp; band</a></li>
                                <li><a href="under-konstruktion.html">Önskemål</a></li>
                                <li><a href="under-konstruktion.html">FAQ</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h2 class="footer-heading">Tips &amp; Tricks</h2>
                            <ul class="footer-links">
                                <li><a href="under-konstruktion.html">Gitarrens delar →</a></li>
                                <li><a href="under-konstruktion.html">Så skapas tonen →</a></li>
                                <li><a href="under-konstruktion.html">Gitarrteori</a></li>
                                <li><a href="under-konstruktion.html">Underhåll &amp; justering →</a></li>
                                <li><a href="under-konstruktion.html">Uppgradering →</a></li>
                                <li><a href="under-konstruktion.html">Problemlösning →</a></li>
                                <li><a href="under-konstruktion.html">Skapa rätt sound →</a></li>
                                <li><a href="under-konstruktion.html">Spelövningar</a></li>
                                <li><a href="under-konstruktion.html">Test av instrument →</a></li>
                                <li><a href="https://www.youtube.com/results?search_query=best+guitarists+of+all+time" target="_blank"
                                    rel="noopener noreferrer">Världens främsta gitarrister ↗</a></li>
                                <li><a href="under-konstruktion.html">Sköna band &amp; artister</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h2 class="footer-heading"><a href="kontakt.html" class="footer-contact-link">Kontakta oss →</a></h2>
                        </div>
                    </div>
                </footer>

            </>
        );
    }
}

export default AboutPage;