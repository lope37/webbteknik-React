import React, { Component } from 'react';
import '../styles/styles.css';

class ProductsPage extends Component {
    render() {
        return (
            <>
                <header className="header">
                    <div className="wrapper header-grid">
                        <div className="header-left">
                            <button className="menu-toggle" aria-label="Öppna meny"><img src="assets/menu.svg" alt="" width="32" height="32" /></button>
                            <a href="index.html" className="logo">Guitarnet</a>
                        </div>
                        <nav className="nav" aria-label="Huvudmeny">
                            <ul className="nav-list">
                                <li><a href="produktgrid.html" className="nav-link active-link">Gitarrer</a></li>
                                <li><a href="produktgrid.html" className="nav-link">Basar</a></li>
                                <li><a href="produktgrid.html" className="nav-link">Akustiskt</a></li>
                                <li><a href="produktgrid.html" className="nav-link">Amps &amp; Effekter</a></li>
                                <li><a href="produktgrid.html" className="nav-link">Tillbehör &amp; Övrigt</a></li>
                            </ul>
                        </nav>
                        <div className="header-icons">
                            <a href="under-konstruktion.html" className="icon-link" aria-label="Sök"><img src="assets/search.svg" alt="" width="32" height="32" /></a>
                            <a href="under-konstruktion.html" className="icon-link" aria-label="Kundvagn"><img src="assets/cart.svg" alt="" width="32" height="32" /></a>
                        </div>
                    </div>
                </header>

                <main>

                    {/* PRODUKT SEKTION */}
                    <section className="product-page" aria-labelledby="product-title">
                        <div className="wrapper">

                            {/* Breadcrumb */}
                            <nav className="breadcrumb" aria-label="Brödsmulor">
                                <p><a href="index.html">Startsida</a>/<a href="produktgrid.html">Gitarrer</a>/<a href="produktgrid.html">Stratocaster</a>/<span>Green ST Classic</span></p>
                            </nav>

                            {/* Produkt top: gallery, VÄNSTER: beskrivning, HÖGER: sticky info */}
                            <div className="product-top">

                                {/* Vänster kolumn: galleri, beskrivning */}
                                <div className="product-left">
                                    <div className="product-gallery">
                                        <div className="product-main-image">
                                            <img src="assets/image10.png" alt="Green ST Classic elgitarr, framsida" />
                                        </div>
                                        <div className="product-thumbnails">
                                            <div className="product-thumbnail">
                                                <img src="assets/image10.png" alt="Green ST Classic vy 1" />
                                            </div>
                                            <div className="product-thumbnail">
                                                <img src="assets/image11.png" alt="Green ST Classic vy 2" />
                                            </div>
                                            <div className="product-thumbnail">
                                                <img src="assets/image10.png" alt="Green ST Classic vy 3" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Product beskrivning */}
                                    <div className="product-description">
                                        <h2 className="section-label" id="desc-heading">Produktbeskrivning</h2>
                                        <p>Green ST Classic är en klassisk strata med alla attribut på plats. 3 singel coil mickar, stall med svajarm, skönt utformad kropp och 5-läges pickupväljare. Få gitarrer är så sköna och mångsidiga som en strata. Variationen i ljud är stor.</p>
                                        <p>Det är bra trä i den här gitarren, resonant och samtidigt snyggt. Kroppen är gjord av al från USA och därifrån kommer även lönnen till halsen. Den har en väldigt snygg och påkostad lack med ett härligt djup som oftast bara finns på dyrare gitarrer. Vi är väldigt nöjda med hur snyggt man fått till sunbursten, både 2 och 3 tons sunburst. Det är ovanligt på den här prisnivån.</p>
                                        <p>Komponenterna håller lika hög klass. Som övriga Green Guitars Comfort Series är den lättspelad och skön med en smal och tunn hals. Finns i färgerna 2- eller 3- tons sunburst med lönn eller "rosewood" greppbräda.</p>
                                        <p>I Green ST Classic sitter våra egna Green High Output Pickuper - låter riktigt bra. Mickarna har samma konstruktion som P90. Det blir en lite varrmare, fetare ton än med traditionella stratamickar. Mer botten, mer mid och något avskalad diskant. De svarar ännu bättre på dist. Det går att få till riktigt sköna solo- och kompljud.</p>
                                        <p>Vill man ha ett riktigt klassljud väljer man med svenska handvirade Lundgren 60s Vintage pickuper. Grymt ljud. 60-tals inspirerat - mer mottagliga för dist än 50 -tals pickuper.</p>
                                        <p><a href="under-konstruktion.html">Läs mer om Green Guitars →</a></p>
                                    </div>
                                </div>

                                {/* Produkt info sidebar höger */}
                                <aside className="product-sidebar">
                                    <div className="product-sidebar-inner">
                                        <div className="product-heading">
                                            <h2 id="product-title" className="product-title">Green ST Classic</h2>
                                            <p className="product-page-price">18995 SEK</p>
                                        </div>

                                        <div className="product-stars" role="img" aria-label="Betyg: 5 av 5 stjärnor">
                                            <img src="assets/star.svg" alt="" width="26" height="26" />
                                            <img src="assets/star.svg" alt="" width="26" height="26" />
                                            <img src="assets/star.svg" alt="" width="26" height="26" />
                                            <img src="assets/star.svg" alt="" width="26" height="26" />
                                            <img src="assets/star.svg" alt="" width="26" height="26" />
                                        </div>

                                        <div className="product-short-desc">
                                            <p>Green ST Classic är en klassisk strata med alla attribut på plats. 3 singel coil mickar, stall med svajarm och 5-läges pickupväljare. Bra trä – kropp i amerikansk al, hals i lönn. <a href="#desc-heading"><br /><br />Se fullständig produktbeskrivning →</a></p>
                                        </div>

                                        <div className="product-colors-row">
                                            <p className="product-card-colors">5 färger <img src="assets/color-dots.svg" alt="Tillgängliga färger" width="84" height="12" className="color-dots" /></p>
                                            <img src="assets/color-dots.svg" alt="Tillgängliga färger" width="84" height="12" />
                                        </div>

                                        <div className="product-actions">
                                            <a href="under-konstruktion.html" className="btn-outline-product">Lägg till i varukorg</a>
                                        </div>
                                    </div>
                                </aside>

                            </div>

                        </div>
                    </section>

                    {/* PRODUKTSPECS*/}
                    <section className="product-specs-section product-page-section" aria-labelledby="specs-heading">
                        <div className="wrapper">
                            <h2 className="section-label" id="specs-heading">Specifikationer</h2>
                            <div className="table-responsive">
                                <table className="price-table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Komponent</th>
                                            <th scope="col">Beskrivning</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Body</td>
                                            <td>American Alder</td>
                                        </tr>
                                        <tr>
                                            <td>Neck</td>
                                            <td>C-shape American hard maple</td>
                                        </tr>
                                        <tr>
                                            <td>Thickness/Width</td>
                                            <td>At nut 42,5 mm. 1:st fret 20 mm/ 43,5 mm 12:th fret 22 mm/52,5 mm</td>
                                        </tr>
                                        <tr>
                                            <td>Fingerboard</td>
                                            <td>Rose Maplewood (3-tone) alt Maple (2-tone)</td>
                                        </tr>
                                        <tr>
                                            <td>Radius</td>
                                            <td>12"</td>
                                        </tr>
                                        <tr>
                                            <td>Scale</td>
                                            <td>25.5"</td>
                                        </tr>
                                        <tr>
                                            <td>Frets</td>
                                            <td>22 medium jumbo</td>
                                        </tr>
                                        <tr>
                                            <td>Bridge</td>
                                            <td>Tremolo</td>
                                        </tr>
                                        <tr>
                                            <td>Pickups</td>
                                            <td>3 x Green High Output Pickups alt. Lundgren Pickups 60s Vintage</td>
                                        </tr>
                                        <tr>
                                            <td>Controls</td>
                                            <td>1 volume 2 tone, 5-ways pickupswitch</td>
                                        </tr>
                                        <tr>
                                            <td>Hardware</td>
                                            <td>Chrome</td>
                                        </tr>
                                        <tr>
                                            <td>Weight</td>
                                            <td>approx 3,7 kg</td>
                                        </tr>
                                        <tr>
                                            <td>Color</td>
                                            <td>2-tone or 3-tone Sunburst</td>
                                        </tr>
                                        <tr>
                                            <td>Strings</td>
                                            <td>D'Addario 9-42</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* LIKNANDE PRODUKTER */}
                    <section className="similar-products product-page-section" aria-labelledby="similar-heading">
                        <div className="wrapper">
                            <div className="similar-products-header">
                                <h2 className="section-label" id="similar-heading">Liknande produkter</h2>
                                <div className="arrows" role="group" aria-label="Bläddra produkter">
                                    <button className="arrow-btn arrow-left" aria-label="Föregående"><img src="assets/arrow-left.svg" alt="" width="42" height="42" /></button>
                                    <button className="arrow-btn arrow-right" aria-label="Nästa"><img src="assets/arrow-right.svg" alt="" width="42" height="42" /></button>
                                </div>
                            </div>
                            <div className="products-grid">
                                <a href="produkt.html" className="product-card-link">
                                    <article className="product-card">
                                        <div className="product-card-image">
                                            <img src="assets/image10.png" alt="Green ST Classic elgitarr" className="card-img-front" />
                                            <img src="assets/image11.png" alt="Green ST Classic baksida" className="card-img-back" />
                                        </div>
                                        <div className="product-card-info">
                                            <h3 className="product-card-name">Green ST Classic</h3>
                                            <p className="product-card-price">4 590 SEK</p>
                                            <p className="product-card-colors">5 färger <img src="assets/color-dots.svg" alt="Tillgängliga färger" width="84" height="12" className="color-dots" /></p>
                                        </div>
                                    </article>
                                </a>
                                <a href="produkt.html" className="product-card-link">
                                    <article className="product-card">
                                        <div className="product-card-image">
                                            <img src="assets/image10.png" alt="Green ST Classic elgitarr" className="card-img-front" />
                                            <img src="assets/image11.png" alt="Green ST Classic baksida" className="card-img-back" />
                                        </div>
                                        <div className="product-card-info">
                                            <h3 className="product-card-name">Green ST Classic</h3>
                                            <p className="product-card-price">4 590 SEK</p>
                                            <p className="product-card-colors">5 färger <img src="assets/color-dots.svg" alt="Tillgängliga färger" width="84" height="12" className="color-dots" /></p>
                                        </div>
                                    </article>
                                </a>
                                <a href="produkt.html" className="product-card-link">
                                    <article className="product-card">
                                        <div className="product-card-image">
                                            <img src="assets/image10.png" alt="Green ST Classic elgitarr" className="card-img-front" />
                                            <img src="assets/image11.png" alt="Green ST Classic baksida" className="card-img-back" />
                                        </div>
                                        <div className="product-card-info">
                                            <h3 className="product-card-name">Green ST Classic</h3>
                                            <p className="product-card-price">4 590 SEK</p>
                                            <p className="product-card-colors">5 färger <img src="assets/color-dots.svg" alt="Tillgängliga färger" width="84" height="12" className="color-dots" /></p>
                                        </div>
                                    </article>
                                </a>
                                <a href="produkt.html" className="product-card-link">
                                    <article className="product-card">
                                        <div className="product-card-image">
                                            <img src="assets/image10.png" alt="Green ST Classic elgitarr" className="card-img-front" />
                                            <img src="assets/image11.png" alt="Green ST Classic baksida" className="card-img-back" />
                                        </div>
                                        <div className="product-card-info">
                                            <h3 className="product-card-name">Green ST Classic</h3>
                                            <p className="product-card-price">4 590 SEK</p>
                                            <p className="product-card-colors">5 färger <img src="assets/color-dots.svg" alt="Tillgängliga färger" width="84" height="12" className="color-dots" /></p>
                                        </div>
                                    </article>
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* RECENSIONER */}
                    <section className="reviews-section product-page-section" aria-labelledby="reviews-heading">
                        <div className="wrapper">
                            <h2 className="section-label" id="reviews-heading">Recensioner</h2>
                            <div className="reviews-content">
                                <div className="review">
                                    <div className="review-stars" role="img" aria-label="5 av 5 stjärnor">
                                        <img src="assets/star.svg" alt="" width="18" height="18" />
                                        <img src="assets/star.svg" alt="" width="18" height="18" />
                                        <img src="assets/star.svg" alt="" width="18" height="18" />
                                        <img src="assets/star.svg" alt="" width="18" height="18" />
                                        <img src="assets/star.svg" alt="" width="18" height="18" />
                                    </div>
                                    <p className="review-author">Anders L. – <time dateTime="2025-12-10">10 december 2025</time></p>
                                    <p className="review-text">Fantastisk gitarr för pengarna! Tonen är varm och klar, och halsen känns perfekt i handen. Har spelat strat i 20 år och denna överraskar mig verkligen. Rekommenderas starkt till alla som vill ha en kvalitetsgitarr utan att ruinera sig.</p>
                                </div>
                                <div className="review">
                                    <div className="review-stars" role="img" aria-label="5 av 5 stjärnor">
                                        <img src="assets/star.svg" alt="" width="18" height="18" />
                                        <img src="assets/star.svg" alt="" width="18" height="18" />
                                        <img src="assets/star.svg" alt="" width="18" height="18" />
                                        <img src="assets/star.svg" alt="" width="18" height="18" />
                                        <img src="assets/star.svg" alt="" width="18" height="18" />
                                    </div>
                                    <p className="review-author">Maria S. – <time dateTime="2025-11-22">22 november 2025</time></p>
                                    <p className="review-text">Köpte denna som min första elgitarr och är jättenöjd. Lätt att spela, fin finish och bra ljud direkt ur lådan. Leveransen från Guitarnet var snabb och gitarren var perfekt förpackad.</p>
                                </div>
                                <div className="review">
                                    <div className="review-stars" role="img" aria-label="4 av 5 stjärnor">
                                        <img src="assets/star.svg" alt="" width="18" height="18" />
                                        <img src="assets/star.svg" alt="" width="18" height="18" />
                                        <img src="assets/star.svg" alt="" width="18" height="18" />
                                        <img src="assets/star.svg" alt="" width="18" height="18" />
                                    </div>
                                    <p className="review-author">Erik K. – <time dateTime="2025-10-05">5 oktober 2025</time></p>
                                    <p className="review-text">Riktigt bra gitarr. Bra sustain och fin clean-ton. Enda anledningen till 4 stjärnor istället för 5 är att jag hade önskat lite fetare halsposition-mikrofon, men det är en smaksak. Överlag mycket nöjd med köpet.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                </main>

                {/* FOOTER */}
                <footer className="footer">
                    <div className="wrapper footer-grid">
                        <div className="footer-col">
                            <h2 className="footer-heading">Information</h2>
                            <ul className="footer-links">
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
                        <div className="footer-col">
                            <h2 className="footer-heading">Tips &amp; Tricks</h2>
                            <ul className="footer-links">
                                <li><a href="under-konstruktion.html">Gitarrens delar →</a></li>
                                <li><a href="under-konstruktion.html">Så skapas tonen →</a></li>
                                <li><a href="under-konstruktion.html">Gitarrteori</a></li>
                                <li><a href="under-konstruktion.html">Underhåll &amp; justering →</a></li>
                                <li><a href="under-konstruktion.html">Uppgradering →</a></li>
                                <li><a href="under-konstruktion.html">Problemlösning →</a></li>
                                <li><a href="under-konstruktion.html">Skapa rätt sound →</a></li>
                                <li><a href="under-konstruktion.html">Spelövningar</a></li>
                                <li><a href="under-konstruktion.html">Test av instrument →</a></li>
                                <li><a href="https://www.youtube.com/results?search_query=best+guitarists+of+all+time" target="_blank" rel="noopener noreferrer">Världens främsta gitarrister ↗</a></li>
                                <li><a href="under-konstruktion.html">Sköna band &amp; artister</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h2 className="footer-heading"><a href="kontakt.html" className="footer-contact-link">Kontakta oss →</a></h2>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default ProductsPage;