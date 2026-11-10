import PageHero from "@/components/PageHero";

export default function KvkkPage() {
  return (
    <>
      <PageHero eyebrow="KVKK" title="KVKK Uyum Metni" lead="Kavin System Solutions, kişisel verilerin korunmasızasamında 6698 sayılı Kişisel Verilerin Korunma Kanunu (KVKK) ve ilgili yürürlükteki düzenlemeler uyarınca işlem yapmaktadır." />
      <section className="section">
        <div className="container">
          <div className="legal-body">
            <p>
              Kavin System Solutions ("Şirket"), kişisel verilerin korunmasızasamında
              6698 sayılı Kişisel Verilerin Korunma Kanunu ("KVKK") ve ilgili yürürlükteki
              yönetmelikler, koyulan düzenlemeler uyarınca işlem yapmaktadır.
            </p>
            <p>
              Kişisel verilerinizin nasıl toplanacağını, kullanacağınım ve koruyacağını
              belirten aşağıdaki bildirge gerekli bilgileri içermektedir.
            </p>

            <h2>Kişisel Verilerin Toplanması</h2>
            <p>
              Şirket, aşağıdaki kanallar üzerinden kişisel verileri toplar:
            </p>
            <ul>
              <li>İletişim formu üzerinden yapılan başvurular</li>
              <li>E-posta correspondance</li>
              <li>Telefon görüşmeleri</li>
              <li>Ziyaret kayıtları</li>
            </ul>

            <h2>Kişisel Verilerin Kullanımı</h2>
            <p>
              Toplanan kişisel veriler, aşağıdaki amaçlarla işlenmektedir:
            </p>
            <ul>
              <li>İletişi ve sorgu yanıtları vermek</li>
              <li>Müşteri ilişkilerini yönetmek</li>
              <li>Ürün ve hizmet bilgileri sunmak</li>
              <li>Legal gerekliliklere uyum sağlamak</li>
            </ul>

            <h2>Kişisel Verilerin Paylaşılması</h2>
            <p>
              Kişisel veriler, şartlar kanunen zorunlu olduğu veya müşterinin onayı ile
              üçüncü partilere paylaşılabilir:
            </p>
            <ul>
              <li>Yasal zorunluluklar</li>
              <li>Müşteri onayı</li>
              <li>Hizmet sağlayıcılarla agreements</li>
            </ul>

            <h2>Kişisel Verilerin Korunması</h2>
            <p>
              Şirket, kişisel verilerin yetkisiz erişim, revelation, değiştirme veya
              yok edilmesine karşı gerekli teknik ve idari önlemleri alır.
            </p>

            <h2>Haklar</h2>
            <p>
              Kişisel verileriniz konusunda aşağıdaki haklara sahip olursunuz:
            </p>
            <ul>
              <li>Kişisel verilerinizin sorgulanması ve bironeltilmesi</li>
              <li>Kişisel verilerinizin güncellenmesi ve tamamlanması</li>
              <li>Kişisel verilerin silinmesi veya yok edilmesi</li>
              <li>Kişisel verilerin işlenmesinin durması</li>
              <li>Karar automatedlerine karşı itiraz etme hakkı</li>
            </ul>

            <p className="mt-6">
              Daha fazla bilgi için lütfen info@kavinmetal.com adresine başvurunuz.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}