function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      {/* 1. Skip Navigation Link (Erişilebilirlik için kritik) [cite: 994, 1011] */}
      <a href="#main-content" style={{ position: 'absolute', left: '-10000px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}>
        Ana içeriğe atla
      </a>

      {/* 2. Header ve Navigasyon Yapısı [cite: 685, 741, 744] */}
      <header>
        <nav aria-label="Ana navigasyon">
          <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', padding: 0 }}>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      {/* 3. Main İçerik ve Doğru Heading Hiyerarşisi (H1 -> H2 -> H3) [cite: 747, 856, 861] */}
      <main id="main-content">
        <section id="hakkimda">
          <h1>Web Tasarımı ve Programlama Portfolyosu</h1>
          <h2>Hakkımda</h2>
          
          {/* Görsel Kullanımı ve Alt Metin [cite: 761, 906, 917] */}
          <figure>
            <img 
              src="https://via.placeholder.com/150" 
              alt="İrem Sıla Boyraz'ın profil fotoğrafı" 
              style={{ borderRadius: '50%' }}
            />
            <figcaption>İrem Sıla Boyraz - Yazılım Mühendisi Adayı</figcaption>
          </figure>

          <p><strong>Ad Soyad:</strong> İrem Sıla Boyraz</p>
          <p><strong>Öğrenci No:</strong> 235541030</p>
          <p>Modern web geliştirme araçlarını (Vite, React, TypeScript) kullanarak hazırladığım ilk projem. [cite: 277, 278]</p>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <article>
            <h3>LAB-1: Ortam Kurulumu</h3>
            <p>Node.js, Git ve Vite kullanılarak bir geliştirme ortamı oluşturuldu. [cite: 14]</p>
          </article>
          <article>
            <h3>LAB-2: Semantik ve Erişilebilirlik</h3>
            <p>HTML5 semantik etiketleri ve erişilebilirlik (ARIA) kuralları uygulandı. [cite: 682, 686]</p>
          </article>
        </section>

        {/* 4. Erişilebilir İletişim Formu ve Label İlişkisi [cite: 683, 1050, 1058] */}
        <section id="iletisim">
          <h2>İletişim</h2>
          <form action="#" method="POST" noValidate>
            <fieldset style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
              <legend>Bana Ulaşın</legend>
              
              <div style={{ marginBottom: '15px' }}>
                <label htmlFor="name">Ad Soyad: </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  minLength={2} 
                  aria-describedby="name-error"
                />
                <small id="name-error" role="alert" style={{ color: 'red', display: 'block' }}></small>
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label htmlFor="email">E-posta: </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  aria-describedby="email-error"
                />
                <small id="email-error" role="alert" style={{ color: 'red', display: 'block' }}></small>
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label htmlFor="message">Mesajınız: </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  required 
                  minLength={10}
                  aria-describedby="message-error"
                  style={{ width: '100%', display: 'block' }}
                />
                <small id="message-error" role="alert" style={{ color: 'red', display: 'block' }}></small>
              </div>

              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      {/* 5. Footer Alanı [cite: 759, 814] */}
      <footer style={{ marginTop: '40px', borderTop: '1px solid #eee', paddingTop: '10px' }}>
        <p>&copy; 2026 İrem Sıla Boyraz. Tüm hakları saklıdır. [cite: 814]</p>
      </footer>
    </div>
  )
}

export default App