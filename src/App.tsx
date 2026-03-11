import { useState } from 'react'
import Alert from './components/Alert'
import Button from './components/Button'
import Card from './components/Card'
import Input from './components/Input'

const projectCards = [
  {
    title: 'E-Ticaret Sitesi',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'E-ticaret dashboard ekrani',
    summary: 'React, Node.js ve MongoDB ile gelistirilmis tam kapsamli alisveris deneyimi.',
  },
  {
    title: 'Blog Platformu',
    image:
      'https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Blog icerik yonetim arayuzu',
    summary: 'Markdown editoru, kategori filtreleme ve yorum sistemi ile icerik odakli proje.',
  },
  {
    title: 'Hava Durumu Uygulamasi',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Hava durumu kartlari ve grafikler',
    summary: 'Canli API verisi, saatlik tahmin ve favori sehir kaydi ozelliklerine sahip.',
  },
]

function App() {
  const [dark, setDark] = useState(false)
  const [showDismissibleAlert, setShowDismissibleAlert] = useState(true)

  return (
    <div className={dark ? 'dark' : ''}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-white"
      >
        Ana icerige atla
      </a>

      <button
        type="button"
        onClick={() => setDark((prev) => !prev)}
        className="fixed right-4 top-4 z-50 rounded-full border border-slate-200 bg-white p-2 text-xl shadow-md transition hover:scale-110 dark:border-slate-700 dark:bg-slate-900"
        aria-label="Tema degistir"
      >
        <span className="dark:hidden" aria-hidden="true">
          Moon
        </span>
        <span className="hidden dark:inline" aria-hidden="true">
          Sun
        </span>
      </button>

      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur dark:border-slate-700 dark:bg-slate-900/90">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-4 py-3 sm:flex-row">
          <p className="font-display text-xl font-bold text-primary">MHD Portfolio</p>
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap gap-2 text-sm font-medium">
              {['hakkimda', 'projeler', 'iletisim', 'ui-kit'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="rounded-md px-3 py-1 text-slate-700 transition hover:bg-primary/10 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary dark:text-slate-300 dark:hover:bg-slate-800"
                  >
                    {item.replace('-', ' ').toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content" className="mx-auto w-full max-w-6xl px-4 py-12 sm:py-16">


        <section id="hakkimda" className="py-12">
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=600&q=80"
              alt="Profil fotografi"
              className="h-40 w-40 rounded-full object-cover shadow-xl ring-4 ring-white dark:ring-slate-800"
            />
            <div>
              <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white">Hakkimda</h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-slate-600 dark:text-slate-300">
                Yazilim muhendisligi ogrencisiyim. Erisilebilir, hizli ve farkli ekranlarda guclu
                deneyimler olusturmayi hedefliyorum. LAB-4 kapsaminda component tabanli bir UI kit
                gelistirerek tekrar kullanilabilir bir arayuz altyapisi kurdum.
              </p>
              <ul className="mt-5 flex flex-wrap gap-2 text-sm font-medium text-white">
                {['React', 'TypeScript', 'Tailwind', 'A11y'].map((tag) => (
                  <li key={tag} className="rounded-full bg-primary px-3 py-1">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="projeler" className="rounded-2xl bg-slate-50 p-6 py-12 dark:bg-slate-900">
          <h2 className="mb-8 text-center font-display text-3xl font-bold text-slate-900 dark:text-white">
            Projelerim
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projectCards.map((project, index) => (
              <Card key={project.title} title={project.title} image={project.image} imageAlt={project.imageAlt}>
                <p>{project.summary}</p>
                <div className="mt-4">
                  <Button variant={index === 1 ? 'secondary' : 'primary'} size="sm">
                    Detay
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="iletisim" className="py-14">
          <div className="mx-auto max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <h2 className="mb-6 text-center font-display text-3xl font-bold text-slate-900 dark:text-white">
              Iletisim
            </h2>
            <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
              <Input id="ad" label="Ad Soyad" placeholder="Ahmet Yilmaz" required />
              <Input id="eposta" label="E-posta" type="email" helpText="Ornek: ad@mail.com" required />
              <Input id="sifre" label="Sifre" type="password" error="En az 8 karakter olmali" />
              <div className="space-y-1">
                <label
                  htmlFor="mesaj"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Mesajiniz
                </label>
                <textarea
                  id="mesaj"
                  rows={5}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-primary dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Gonder
              </Button>
            </form>
          </div>
        </section>

        <section id="ui-kit" className="space-y-8 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
          <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white">UI Kit</h2>

          <section className="space-y-3">
            <h3 className="border-b border-slate-200 pb-2 text-xl font-semibold dark:border-slate-700">Buttons</h3>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
            <div className="flex flex-wrap items-end gap-3">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
              <Button disabled>Disabled</Button>
            </div>
          </section>

          <section className="space-y-3 max-w-md">
            <h3 className="border-b border-slate-200 pb-2 text-xl font-semibold dark:border-slate-700">Inputs</h3>
            <Input id="ui-normal" label="Normal Input" placeholder="Bir sey yazin..." />
            <Input id="ui-help" label="Help Text" type="email" helpText="E-posta adresinizi girin" />
            <Input id="ui-error" label="Hatali Input" error="Bu alan zorunludur" />
            <Input id="ui-disabled" label="Disabled" disabled value="Duzenlenemez" />
          </section>

          <section className="space-y-3">
            <h3 className="border-b border-slate-200 pb-2 text-xl font-semibold dark:border-slate-700">Cards</h3>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              <Card title="Elevated Card" variant="elevated">
                Golge ile yukseltilmis kart.
              </Card>
              <Card title="Outlined Card" variant="outlined">
                Cerceveli kart stili.
              </Card>
              <Card
                title="Filled Card"
                variant="filled"
                footer={
                  <Button size="sm" variant="secondary">
                    Detay
                  </Button>
                }
              >
                Dolgulu arka planli kart.
              </Card>
            </div>
          </section>

          <section className="space-y-3 max-w-xl">
            <h3 className="border-b border-slate-200 pb-2 text-xl font-semibold dark:border-slate-700">Alerts</h3>
            <Alert variant="info" title="Bilgi">
              Bilgilendirme mesaji.
            </Alert>
            <Alert variant="success" title="Basarili">
              Islem tamamlandi.
            </Alert>
            <Alert variant="warning" title="Uyari">
              Dikkat edilmesi gereken durum.
            </Alert>
            {showDismissibleAlert && (
              <Alert
                variant="error"
                title="Hata"
                dismissible
                onDismiss={() => setShowDismissibleAlert(false)}
              >
                Bir hata olustu.
              </Alert>
            )}
          </section>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-100 px-4 py-6 text-center text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">
        <p>&copy; 2026 MHD - LAB 4 Tailwind UI Kit</p>
      </footer>
    </div>
  )
}

export default App



