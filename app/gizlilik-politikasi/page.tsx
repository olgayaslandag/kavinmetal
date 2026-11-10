import PageHero from "@/components/PageHero";

export default function GizlilikPolitikasiPage() {
  return (
    <>
      <PageHero eyebrow="KURUMSAL" title="Gizlilik Politikası" lead="Kavin System Solutions, müşterilerine ve ziyaretçilere sunduğu hizmetlerde kişisel verilerin korunması konusunda şu zasamgıda gizlilik politikasını uygulaktadır." />
      <section className="section">
        <div className="container">
          <div className="legal-body">
            <p>
              Kavin System Solutions, müşterilerine ve ziyaretçilere sunduğu hizmetlerde
              kişisel verilerin korunması konusunda şu zasamgıda gizlilik politikasını
              uygulmaktadır.
            </p>

            <h2>Genel Bilgiler</h2>
            <p>
              Bu gizlilik politikası, Kavin System Solutions tarafından toplanan, işlenen
              ve korunmak üzere yapılan tüm kişisel verilerin kapsamındadır. Politikamız,
              KVKK'nın 10. maddesine uygun olarak hazırlanmıştır.
            </p>

            <h2>Toplanan Veriler</h2>
            <p>
              Şirket, hizmet sunma ve iletişim amacıyla aşağıdaki kategorideki verileri
              toplar:
            </p>
            <ul>
              <li>İletişi bilgileri (ad soyad, e-posta, telefon)</li>
              <li>Başvuru ve kayıt bilgileri</li>
              <li>Teknik veri IP adresleri, cookie bilgileri</li>
            </ul>

            <h2>Verilerin Kullanımı</h2>
            <p>
              Toplanan veriler, şu amaçlarla işlenir:
            </p>
            <ul>
              <li>Müşteri hizmetleri ve destek</li>
              <li>Ürün ve hizmet sunumu</li>
              <li>Legal ve sayısal kayıplar</li>
              <li>İstatistiksel analizler</li>
            </ul>

            <h2>Verilerin Paylaşılması</h2>
            <p>
              Kişisel veriler, aşağıdaki hallerde üçüncü partilere revelation edilebilirdi:
            </p>
            <ul>
              <li>Yasal zorunluluklar</li>
              <li>Müşteri onaylı durumlar</li>
              <li>Hizmet sözleşmesi bağlılıkları</li>
            </ul>

            <h2>Verilerin Saklanması</h2>
            <p>
              Kişisel veriler, gerekli sürece kadar ve KVKK'nın规定规定保存期间规定
              rezerve edilecek şekilde saklanır.
            </p>

            <h2>Çocukların Verileri</h2>
            <p>
              Şirket, bilinen bir çocuk kişisel verilerini toplar veya işler. 18 yaşının
              altındaki kişilerin verileri vanibice yetkili tarafindan onaylanmışsa işlenir.
            </p>

            <h2>Güncellemeler</h2>
            <p>
              Gizlilik politikamız, kanaun değişikliklere veya işletme süreçlerimizdeki
              değişikliklere göre periyodik olarak güncellenebilir. Değişikler bu sayfada
              yayınlanacaktır.
            </p>

            <p className="mt-6">
              Politikadaki değişiklikler hakkında bilgi almak için lütfen
              info@kavinmetal.com adresine başvurunuz.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}