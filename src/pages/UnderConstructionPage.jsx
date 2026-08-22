import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

class UnderConstructionPage extends Component {
  render() {
    return (
      <>
        <Header />

        <main>
          <section className="contact-section" aria-labelledby="construction-heading">
            <div className="wrapper">
              <nav className="breadcrumb" aria-label="Brödsmulor">
                <p><Link to="/">Startsida</Link> / <span>Under konstruktion</span></p>
              </nav>

              <div style={{ textAlign: 'center', padding: '110px 0' }}>
                <h1 className="produktgrid-title" id="construction-heading" style={{ marginBottom: '42px' }}>
                  Under konstruktion
                </h1>
                <Link to="/" className="btn-primary" style={{ maxWidth: '480px', margin: '0 auto' }}>
                  Tillbaka till startsidan →
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </>
    );
  }
}

export default UnderConstructionPage;