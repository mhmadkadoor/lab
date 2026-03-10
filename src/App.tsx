import './App.css'

function App() {
  return (
    <>
      <header>
        <a className="site-title" href="#anasayfa">
          MHD Portfolio
        </a>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li>
              <a href="#anasayfa">Anasayfa</a>
            </li>
            <li>
              <a href="#hakkimda">Hakkimda</a>
            </li>
            <li>
              <a href="#projeler">Projeler</a>
            </li>
            <li>
              <a href="#iletisim">Iletisim</a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="anasayfa">
        <section className="hero" aria-labelledby="hero-title">
          <p className="eyebrow">Web Tasarimi ve Programlama - LAB 3</p>
          <h1 id="hero-title">Modern CSS ile Responsive Portfoy</h1>
          <p>
            Bu sayfa mobile-first yaklasim, design tokens, Flexbox ve Grid kullanilarak
            hazirlandi.
          </p>
        </section>

        <section id="hakkimda" aria-labelledby="about-title">
          <h2 id="about-title">Hakkimda</h2>
          <div className="about-content">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=600&q=80"
                alt="Profil fotografi"
                loading="lazy"
              />
            </figure>
            <div>
              <p>
                Yazilim Muhendisligi ogrencisiyim. Kullanici odakli, erisilebilir ve farkli
                ekranlarda guclu calisan arayuzler gelistirmeyi seviyorum.
              </p>
              <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projeler" aria-labelledby="projects-title">
          <h2 id="projects-title">Projelerim</h2>
          <div className="project-grid">
            <article className="project-card">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80"
                alt="E-ticaret sitesi arayuzu"
                loading="lazy"
              />
              <h3>E-Ticaret Sitesi</h3>
              <p>React tabanli urun listeleme, sepet yonetimi ve odeme akisina sahip proje.</p>
              <ul className="skill-tags" role="list" aria-label="E-ticaret teknolojileri">
                <li>React</li>
                <li>Node.js</li>
                <li>MongoDB</li>
              </ul>
            </article>

            <article className="project-card">
              <img
                src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1200&q=80"
                alt="Blog uygulamasi liste ekrani"
                loading="lazy"
              />
              <h3>Blog Uygulamasi</h3>
              <p>Markdown editor, kategori filtreleme ve yorum akisi iceren kisisel blog.</p>
              <ul className="skill-tags" role="list" aria-label="Blog teknolojileri">
                <li>TypeScript</li>
                <li>Next.js</li>
                <li>Prisma</li>
              </ul>
            </article>

            <article className="project-card">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
                alt="Hava durumu uygulamasi"
                loading="lazy"
              />
              <h3>Hava Durumu</h3>
              <p>Sehir bazli anlik hava, saatlik tahmin ve favori lokasyon kaydetme ozelligi.</p>
              <ul className="skill-tags" role="list" aria-label="Hava durumu teknolojileri">
                <li>JavaScript</li>
                <li>REST API</li>
                <li>Chart.js</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="iletisim" aria-labelledby="contact-title">
          <h2 id="contact-title">Iletisim</h2>
          <form className="contact-form" action="#" method="post">
            <div className="form-group">
              <label htmlFor="ad">Ad Soyad</label>
              <input id="ad" name="ad" type="text" required />
            </div>
            <div className="form-group">
              <label htmlFor="eposta">E-posta</label>
              <input id="eposta" name="eposta" type="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="konu">Konu</label>
              <select id="konu" name="konu" required>
                <option value="">Seciniz</option>
                <option value="isbirligi">Is birligi</option>
                <option value="staj">Staj</option>
                <option value="diger">Diger</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="mesaj">Mesaj</label>
              <textarea id="mesaj" name="mesaj" rows={5} required />
            </div>
            <button type="submit">Mesaj Gonder</button>
          </form>
        </section>
      </main>

      <footer>
        <p>2026 MHD Hadi Said Alkaddour - LAB 3 Responsive Portfolio</p>
      </footer>
    </>
  )
}

export default App



