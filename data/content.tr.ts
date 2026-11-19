// Type imports from types.ts (has 'key' property)
import type { HeroSlide, Product, ProductSubGroup, Service, Project, PressArticle } from './types';
import type { CorporateFact, CorporateTimelineEntry, VisionMission, CorporateAccordionItem, ContactInfo, NavLink } from './types';

// Turkish version of content data with stable key and locale-specific slug fields
export const heroSlides: HeroSlide[] = [
  {
    index: "01",
    image: "/assets/img/hero/hero-kemerburgaz-dusk.webp",
    eyebrow: "Kavin System Solutions",
    title: ["BÜTÜNLEŞİK PROJE ÇÖZÜMLERİ"],
    lead:
      "Değişen müşteri ihtiyaçlarına fonksiyonel ve kaliteli ürünlerle güvenilir çözüm ortağı olmaya devam ediyoruz.",
    alt: "Kemerburgaz Evleri - Kavin alüminyum cephe ve doğrama uygulamaları",
  },
  {
    index: "02",
    image: "/assets/img/hero/hero-safiport-commercial.webp",
    eyebrow: "Kavin System Solutions",
    title: ["FARK YARATAN HİZMETLER"],
    lead:
      "Yüzey işlemleri, mekanik işlemler ve size özel imalat çözümleriyle güçlü projeler oluşturuyoruz.",
    alt: "Safiport ticari yapı - Kavin WA55 cephe sistemleri",
  },
  {
    index: "03",
    image: "/assets/img/hero/hero-gokturk-corner.webp",
    eyebrow: "Kavin System Solutions",
    title: ["SICAKTA SERİN SOĞUTA SERİN"],
    lead:
      "Kaliteli ürünler ve hizmetlerle müşterilerinin farklı talepleri karşında esnek ve çözüm odaklı bir yaklaşım sergileyebilmektedir.",
    alt: "Kavin System İstanbul konut referansı",
  },
];

export const products: Product[] = [
  {
    key: "aluminium-profiles",
    slug: "/cozumler/aluminyum-profiller",
    title: ["Aluminyum Profiller"],
    image: "/assets/img/products/banner-aluminyum.png",
    icon: "/assets/img/icons/aluminyum-profiller.svg",
    alt: "Aluminyum profiller - standart, doğrama, dekorasyon",
    href: "/cozumler/aluminyum-profiller",
    description:
      "Standart profiller, doğrama profilleri, dekorasyon ve tamamlayıcı profillerle geniş bir ürün yelpazesi sunuyoruz.",
    pdf: "standart-profiller.pdf",
  },
  {
    key: "suspension-systems",
    slug: "/cozumler/kupeste-profilleri",
    title: ["Küpeşte Sistemleri"],
    image: "/assets/img/products/banner-kupeste.jpg",
    icon: "/assets/img/icons/kupeste-profilleri.svg",
    alt: "Küpeşte sistemleri - yuvarlak, dikdörtgen, cam kanal",
    href: "/cozumler/kupeste-profilleri",
    description:
      "Yuvarlak sistem, kare ve dikdörtgen profiller ile cam kanal küpeşte profilleriyle bölme ve camlı çözüm alternatifleri sunuyoruz.",
    pdf: "aluminyum-yuvarlak-sistem-kupeste-profilleri.pdf",
  },
  {
    key: "composite-panels",
    slug: "/cozumler/kompozit-paneller",
    title: ["Kompozit Paneller"],
    image: "/assets/img/products/banner-kompozit.jpg",
    icon: "/assets/img/icons/kompozit-paneller.svg",
    alt: "Kompozit paneller - 3000, 4000, 5000 serisi",
    href: "/cozumler/kompozit-paneller",
    description:
      "3000, 4000 ve 5000 serisi kompozit panellerle estetik ve dayanıklı çözümler sunuyoruz.",
    pdf: "3000-serisi.pdf",
  },
  {
    key: "accessories",
    slug: "/cozumler/aksesuarlar",
    title: ["Aksesuarlar"],
    image: "/assets/img/products/banner-aksesuar.jpg",
    icon: "/assets/img/icons/aksesuarlar.svg",
    alt: "Aksesuarlar - donanım ve tamamlayıcı parçalar",
    href: "/cozumler/aksesuarlar",
    description:
      "Projeye özel donanım grupları, çelik destek sistemleri ve tamamlayıcı aksesuarlarla çözüm sunuyoruz.",
    pdf: "aksesuar.pdf",
  },
];

export const productSubGroups: ProductSubGroup[] = [
  // Aluminyum Profiller alt grupları
  {
    key: "aluminium-profiles",
    slug: "/cozumler/aluminyum-profiller",
    parentKey: "aluminium-profiles",
    parentSlug: "/cozumler/aluminyum-profiller",
    title: "Standart Profiller",
    image: "/assets/img/products/standart-profil.jpg",
    alt: "Standart alüminyum profiller",
    pdf: "standart-profiller.pdf",
  },
  {
    key: "aluminium-profiles-standart",
    slug: "/cozumler/aluminyum-profiller",
    parentKey: "aluminium-profiles",
    parentSlug: "/cozumler/aluminyum-profiller",
    title: "Doğrama Profilleri",
    image: "/assets/img/products/dograma-profil.jpg",
    alt: "Doğrama alüminyum profiller",
    pdf: "dograma-ve-cephe-profilleri.pdf",
  },
  {
    key: "aluminium-profiles-standard",
    slug: "/cozumler/aluminyum-profiller",
    parentKey: "aluminium-profiles",
    parentSlug: "/cozumler/aluminyum-profiller",
    title: "Dekorasyon ve Tamamlayıcı Profiller",
    image: "/assets/img/products/dekorasyon-profil.jpg",
    alt: "Dekorasyon ve tamamlayıcı profiller",
    pdf: "dekorasyon-ve-tamamlayici-profiller.pdf",
  },

  // Suspension Systems alt grupları
  {
    key: "suspension-round-system",
    slug: "/cozumler/kupeste-profilleri",
    parentKey: "suspension-systems",
    parentSlug: "/cozumler/kupeste-profilleri",
    title: "Yuvarlak Sistem",
    image: "/assets/img/products/yuvarlak-kupeste.jpg",
    alt: "Alüminyum yuvarlak Küpeşte sistemi",
    pdf: "aluminyum-yuvarlak-sistem-kupeste-profilleri.pdf",
  },
  {
    key: "suspension-square-rectangle",
    slug: "/cozumler/kupeste-profilleri",
    parentKey: "suspension-systems",
    parentSlug: "/cozumler/kupeste-profilleri",
    title: "Kare ve Dikdörtgen",
    image: "/assets/img/products/kare-kupeste.jpg",
    alt: "Alüminyum kare ve dikdörtgen Küpeşte",
    pdf: "aluminyum-kare-ve-dikdortgen-kupeste-profilleri.pdf",
  },
  {
    key: "suspension-glass-channel",
    slug: "/cozumler/kupeste-profilleri",
    parentKey: "suspension-systems",
    parentSlug: "/cozumler/kupeste-profilleri",
    title: "Cam Kanal Küpeşte",
    image: "/assets/img/products/cam-kupeste.jpg",
    alt: "Alüminyum cam kanal Küpeşte",
    pdf: "aluminyum-cam-kanal-kupeste-profilleri.pdf",
  },

  // Kompozit Paneller alt grupları
  {
    key: "composite-3000-series",
    slug: "/cozumler/kompozit-paneller",
    parentKey: "composite-panels",
    parentSlug: "/cozumler/kompozit-paneller",
    title: "3000 Serisi",
    image: "/assets/img/products/kompozit-renk.jpg",
    alt: "Kompozit panel 3000 serisi renk kataloğu",
    pdf: "3000-serisi.pdf",
  },
  {
    key: "composite-4000-series",
    slug: "/cozumler/kompozit-paneller",
    parentKey: "composite-panels",
    parentSlug: "/cozumler/kompozit-paneller",
    title: "4000 Serisi",
    image: "/assets/img/products/kompozit-renk.jpg",
    alt: "Kompozit panel 4000 serisi renk kataloğu",
    pdf: "4000-serisi.pdf",
  },
  {
    key: "composite-5000-series",
    slug: "/cozumler/kompozit-paneller",
    parentKey: "composite-panels",
    parentSlug: "/cozumler/kompozit-paneller",
    title: "5000 Serisi",
    image: "/assets/img/products/kompozit-renk.jpg",
    alt: "Kompozit panel 5000 serisi renk kataloğu",
    pdf: "5000-serisi.pdf",
  },

  // Aksesuarlar alt grupları
  {
    key: "accessories-standard-profiles",
    slug: "/cozumler/aksesuarlar",
    parentKey: "accessories",
    parentSlug: "/cozumler/aksesuarlar",
    title: "Standart Profiller",
    image: "/assets/img/products/standart-profil.jpg",
    alt: "Standart alüminyum profiller",
    pdf: "aksesuar.pdf",
  },
  {
    key: "accessories-construction-profiles",
    slug: "/cozumler/aksesuarlar",
    parentKey: "accessories",
    parentSlug: "/cozumler/aksesuarlar",
    title: "Doğrama Profilleri",
    image: "/assets/img/products/dograma-profil.jpg",
    alt: "Doğrama alüminyum profiller",
    pdf: "aksesuar.pdf",
  },
  {
    key: "accessories-custom-projections",
    slug: "/cozumler/aksesuarlar",
    parentKey: "accessories",
    parentSlug: "/cozumler/aksesuarlar",
    title: "Projeye Özel",
    image: "/assets/img/products/projeye-ozel.jpg",
    alt: "Projeye özel aksesuarlar",
    pdf: "aksesuar.pdf",
  },
];

export const services: Service[] = [
  {
    key: "surface-treatment",
    slug: "yuzey-islemleri",
    title: "Yüzey İşlemeleri",
    description:
      "Elektrostatik toz boya uygulaması ile yüksek kalite ve dayanıklı floor sonrası floor hizmetleri sunuyoruz. Alüminyum yüzeylerindeki imperfeksiyonları kaldırarak brillanti finish ve korozif dirim sağlayalım.",
    heroLead: "Alüminyum yüzey hazırlama ve toz boya",
    image: "/assets/img/services/toz-boya-2.jpg",
    alt: "Yüzey işlemleri - toz boya uygulaması",
    href: "/hizmetler/yuzey-islemleri",
    intro: [
      "Yüzey işlemi, alüminyum profilin ömrünü ve görsel kalitesini belirleyen en kritik aşamadır. Kavin System Solutions olarak elektrostatik toz boya uygulamasını, ön yüzey hazırlığından son kontrole kadar kendi tesisimizde tek elden yürütüyoruz.",
      "Yağ alma ve kimyasal ön işlemin ardından uygulanan toz boya, yüksek sıcaklıklı fırında polimerleştirilir. Sonuç; darbeye, çizilmeye ve korozyona dayanıklı, akma izi taşımayan tek ton bir yüzeydir. İç ve dış mekân kullanımı için mat, parlak ve metalik dokularda geniş renk yelpazesi sunuyoruz.",
    ],
    gallery: [
      { src: "/assets/img/services/toz-boya-1.jpg", alt: "Elektrostatik toz boya hattı" },
      { src: "/assets/img/services/toz-boya-3.jpg", alt: "Toz boya tesisinden uygulama görünümü" },
    ],
    steps: [
      { title: "Yüzey Hazırlığı", text: "Profiller yağ ve tozdan arındırılır; kimyasal ön işlemle boya tutunması ve korozyon direnci için hazır hâle getirilir." },
      { title: "Elektrostatik Uygulama", text: "Toz boya, elektrostatik yüklenmiş tabancalarla uygulanır; köşe ve kanallar dâhil homojen kaplama sağlanır." },
      { title: "Fırınlama", text: "Boya, yüksek sıcaklıklı fırında polimerleştirilir; yüzey sertliğine ve kimyasal dayanıma ulaşır." },
      { title: "Kalite Kontrol", text: "Film kalınlığı, parlaklık ve RAL uygunluğu ölçülür; profiller paketlenerek sevkiyata hazır hâle getirilir." },
    ],
    features: [
      { title: "Geniş RAL Yelpazesi", text: "Standart RAL renkleri ve projeye özel tonlar; mat, parlak ve metalik doku seçenekleri." },
      { title: "Uzun Ömürlü Dayanıklılık", text: "UV, nem ve korozyona dirençli boya filmiyle dış cephede solmayan renk." },
      { title: "Homojen Yüzey Kalitesi", text: "Ön işlem ve elektrostatik uygulamanın birleştiği, akma izi taşımayan tek ton görünüm." },
      { title: "Çevre Dostu Teknoloji", text: "Solvent içermeyen toz boya; uygulama hattında atık boya büyük oranda geri kazanılır." },
    ],
  },
  {
    key: "mechanical-processing",
    slug: "mekanik-islemler",
    title: "Mekanik İşlemler",
    description:
      "CNC işleme, frais ve drilling işlemleri ile hassap ve alüminyum parçalarının hassas işlenmesi. Proje ihtiyaçlarınızı hızlı ve doğru bir şekilde çözüyoruz.",
    heroLead: "CNC ile hassas profil işleme",
    image: "/assets/img/services/mekanik-islemler.jpg",
    alt: "Mekanik işlemler - CNC işleme ve fres",
    href: "/hizmetler/mekanik-islemler",
    intro: [
      "Doğrama ve cephe sistemlerinde milimetrik işleme hatası, montaj sahasında telafi edilemez. Mekanik işlemleri kendi CNC hattımızda yürüterek profil işlemeyi hassas, seri üretimi ise tekrarlanabilir kılıyoruz.",
      "Proje verisinin programlanmasından ilk parça onayına, işlemden burun temizliği ve ölçüm doğrulamaya kadar tüm süreç tek çatı altında takip edilir. Malzeme şantiyeye ulaştığında uyumsuzluk riski en aza iner.",
    ],
    gallery: [
      { src: "/assets/img/services/mekanik-genel.jpg", alt: "CNC mekanik işleme hattından genel görünüm" },
      { src: "/assets/img/services/profil-ebatlama.jpg", alt: "Profil ebatlama ve işleme operasyonu" },
    ],
    steps: [
      { title: "Program Hazırlığı", text: "Proje çizimleri ve kesim listeleri CNC'ye aktarılır; işleme programı ve aparat planı oluşturulur." },
      { title: "İlk Parça Onayı", text: "Seri öncesi ilk profil ölçümlenir; delik konumları ve toleranslar onaylanınca seri işleme başlar." },
      { title: "CNC İşleme", text: "Freze, delme ve kanal işlemleri yüksek devirli kesicilerle tek fikstür kurulumunda tamamlanır." },
      { title: "Burun Temizliği ve Etiketleme", text: "Keskin kenarlar giderilir; işlenen profiller proje bazlı etiketlenip paketlenir." },
    ],
    features: [
      { title: "Yüksek Hassasiyet", text: "Delik aralığı ve kanal ölçüsünde tolerans kontrolüyle hatasız montaj." },
      { title: "Tekrarlanabilir Seri Üretim", text: "Program bazlı işleme sayesinde yüzlerce parçada birebir aynı sonuç." },
      { title: "Projeye Özel Aparat", text: "Sistem ve detay farklarına göre tasarlanan fikstürlerle geniş işleme kapasitesi." },
      { title: "Ölçüm Doğrulama", text: "İşlem sonrası ölçüm ve görsel kontrollle sevkiyat öncesi tam teyit." },
    ],
  },
  {
    key: "izomat-service",
    slug: "izomat",
    title: "İzomat",
    description:
      "Izomat hattında çift testere ile hassas açı ve boyda profil kesimi; seri üretimde zaman ve malzeme tasarrufu sağlıyoruz.",
    heroLead: "Çift testere ile otomatik profil kesimi",
    image: "/assets/img/services/izomat-1.jpg",
    alt: "Izomat - profil kesme ve işleme",
    href: "/hizmetler/izomat",
    intro: [
      "İzomat, alüminyum profillerin otomatik çift testere hattında hassas ve hızlı boy kesiminin yapıldığı üretim teknolojimizdir. Doğrama ve cephe projelerinde yüzlerces parçanın aynı toleransla kesilmesini mümkün kılar.",
      "Açı, boy ve adet bilgisinin programlandığı hatta operatör müdahalesi en minüsta tutulur; 45 ve 90 derece kesimler hatasız tekrarlanır. Temiz kesilmiş yüzeyler, sonraki işlemlerde ve montajda fireyi azaltır.",
    ],
    gallery: [
      { src: "/assets/img/services/izomat-2.jpg", alt: "İzomat kesim hattından görünüm" },
      { src: "/assets/img/services/izomat-3.jpg", alt: "Çift testere ile profil kesimi" },
    ],
    steps: [
      { title: "Kesim Planı", text: "Kesim listesi hatta yüklenir; profil boyu, açı ve adet parametreleri programlandırılır." },
      { title: "Profil Besleme", text: "Profil otomatik olarak ölçülüp sıkıştırılır; kayma ve titreşim engellenir." },
      { title: "Çift Testere Kesimi", text: "İki uç senkron testereyle aynı anda kesilir; ölçü zincirinde birikme hatası oluşmaz." },
      { title: "Açı ve Boy Kontrolü", text: "Kesilen parçalar açı ve boy kontrolünden geçer; temiz kesim yüzeyiyle sonraki aşamaya alınır." },
    ],
    features: [
      { title: "Hassas Açı Kesimi", text: "45° ve 90° başta olmak üzere proje gerektirdiği açılarda doğru ve temiz kesim yüzeyi." },
      { title: "Zaman Tasarrufu", text: "Tek kurulumda iki uç kesimi; seri partılarda çevrim süresi ve işçilikavantajı." },
      { title: "Optimize Malzeme Kullanımı", text: "Nesting uyumlu kesim planıyla profil kullanım oranının yükseltilmesi." },
      { title: "Seri Tutarlılığı", text: "Program tekrarlı çalıştığından yüzlerce parçada ölçü sapması birikmez." },
    ],
  },
  {
    key: "project-service",
    slug: "proje-hizmetleri",
    title: "Proje Hizmetleri",
    description:
      "Keşften teslime tek elden proje desteği; sistem seçimi, üretim planlama ve lojistik süreçlerini birlikte yönetiyoruz.",
    heroLead: "Mimari proje tek elden yönetimi",
    image: "/assets/img/services/proje-hizmet-1.png",
    alt: "Proje hizmetleri - konseptten teslimat",
    href: "/hizmetler/proje-hizmetleri",
    intro: [
      "Proje hizmetleri, ürün tedarikinin ötesinde bir iş modeli gerektirir. Kavin System Solutions olarak mimari projelerde ihtiyaç analizinden saha teslimine kadar tüm süreci tek elden yönetir, müşteriye tek muhatap kolaylığını sunarız.",
      "Sistem seçimi, metraj ve kesim planlaması, üretim programı ve sevkiyat takvimi tek planda buluşur. Birbirini bekleyen aşamalar yerine paralel ilerleyen bir süreç kurulur; termin sürpriz olmaz.",
    ],
    gallery: [
      { src: "/assets/img/projects/gsa130.jpg", alt: "GSA130 giydirme cephe uygulaması" },
      { src: "/assets/img/projects/Referanslar_0036_47_0003_wa-55-safiport-ticari.jpg", alt: "Safiport ticari yapı WA55 cephe uygulaması" },
    ],
    steps: [
      { title: "Keşif ve Analiz", text: "Projenin konumu, detayları ve termin gereksinimleri birlikte belirlenir; teknik ihtiyaç listesi çıkarılır." },
      { title: "Sistem ve Çözüm Önerisi", text: "Doğrama, cephe ve aksesuar alternatifleri performans beklentilerine göre şekillendirilir; teklif hazırlanır." },
      { title: "Üretim ve İşleme Planı", text: "Onaylı metraj ve kesim listeleri hatta aktarılır; izomat, CNC ve yüzey işlemler terminine göre sıralanır." },
      { title: "Lojistik ve Saha Desteği", text: "Proje bazlı paketleme ve sevkiyat takvimiyle malzeme eksiksiz teslim edilir; uygulama aşamasında teknik destek verilir." },
    ],
    features: [
      { title: "Tek Elden Çözüm", text: "Profil, aksesuar, yüzey ve mekanik işlem tek tedarikçi planlamasıyla ilerler." },
      { title: "Termin Güvencesi", text: "Yüksek stok hacmimiz ve iç içe geçmiş üretim programımızla teslim tarihinde öngörülebilirlik." },
      { title: "Teknik Destek", text: "Detay çözümlemelerinde ve uygulama aşamasında deneyimli ekiple yol arkadaşlığı." },
      { title: "Eksiksiz Sevkiyat", text: "Proje bazlı etiketleme ve kontrol listesiyle her partin doğru adrese tam ulaşması." },
    ],
  },
];

export const projects: Project[] = [
  {
    key: "gokturk-konutlari",
    slug: "/projeler/gokturk-konutlari",
    title: "Göktürk Konutları",
    image:
      "/assets/img/projects/Referanslar_0036_47_0001_Gokturk_KONUTLARI-3_WA55_KHR-2.jpg",
    alt: "Göktürk Konutları - WA55 pencere ve kapı sistemleri",
    href: "/projeler/gokturk-konutlari",
    description:
      "Göktürk Konutları projesinde WA55 pencere ve kapı sistemleri kullanılarak konforlu ve dayanıklı yaşam alanları oluşturuldu.",
  },
  {
    key: "safiport-ticari-yapi",
    slug: "/projeler/safiport-ticari-yapi",
    title: "Safiport Ticari Yapı",
    image:
      "/assets/img/projects/Referanslar_0036_47_0003_wa-55-safiport-ticari.jpg",
    alt: "Safiport ticari yapı - WA55 cephe sistemi",
    href: "/projeler/safiport-ticari-yapi",
    description:
      "Safiport ticari yapıda WA55 cephe sistemi ile geniş açıklıklarda modern ve güvenilir bir cephe çözümü uygulandı.",
  },
  {
    key: "akkus-tekstil",
    slug: "/projeler/akkus-tekstil",
    title: "Akkuş Tekstil",
    image:
      "/assets/img/projects/Referanslar_0036_47_0011_Akkus-Tekstil_2013_WAT55-1.jpg",
    alt: "Akkuş Tekstil tesisi - WAT55 cephe uygulaması",
    href: "/projeler/akkus-tekstil",
    description:
      "Akkuş Tekstil üretim tesisinde WAT55 sistemleriyle cephe ve doğrama çözümleri uygulanarak ışığı verimli kullanan bir çalışma ortamı sağlandı.",
  },
  {
    key: "kemerburgaz-evleri",
    slug: "/projeler/kemerburgaz-evleri",
    title: "Kemerburgaz Evleri",
    image:
      "/assets/img/projects/Referanslar_0036_47_0028_kemerburgaz-evleri-wat-55.jpg",
    alt: "Kemerburgaz Evleri - WAT55 doğrama sistemleri",
    href: "/projeler/kemerburgaz-evleri",
    description:
      "Kemerburgaz Evleri projesinde WAT55 doğrama sistemleri ile cephe estetiğini tamamlayan dayanıklı pencere çözümleri kullanıldı.",
  },
  {
    key: "bahcesehir-koleji-halkali",
    slug: "/projeler/bahcesehir-koleji-halkali",
    title: "Bahçeşehir Koleji Halkalı",
    image:
      "/assets/img/projects/Referanslar_0036_47_0032_BahcesehirKoleji_Halkali_wat55-4.jpg",
    alt: "Bahçeşehir Koleji Halkalı kampüsü - WAT55 sistemleri",
    href: "/projeler/bahcesehir-koleji-halkali",
    description:
      "Bahçeşehir Koleji Halkalı kampüsünde WAT55 sistemleriyle geniş açıklıklı, aydınlık eğitim alanları için cephe çözümleri uygulandı.",
  },
  {
    key: "ktams-projesi",
    slug: "/projeler/ktams-projesi",
    title: "KTAMS Projesi",
    image:
      "/assets/img/projects/Referanslar_0036_47_0006_KTAMS_WA55_SLA60.jpg",
    alt: "KTAMS projesi - WA55 ve SLA60 sistemleri",
    href: "/projeler/ktams-projesi",
    description:
      "KTAMS projesinde WA55 ve SLA60 sistemleri bir arada kullanılarak ofis binası için çağdaş bir cephe hattı oluşturuldu.",
  },
  {
    key: "kompozit-cephe-uygulamasi",
    slug: "/projeler/kompozit-cephe-uygulamasi",
    title: "Kompozit Cephe Uygulaması",
    image:
      "/assets/img/projects/Referanslar_0036_47_0016_WAT55_KOMPOZIT-1-kopyasi.jpg",
    alt: "Kompozit cephe uygulaması - WAT55 kompozit panel",
    href: "/projeler/kompozit-cephe-uygulamasi",
    description:
      "WAT55 taşıyıcı sistem üzerine kompozit panel kaplama ile estetik ve koruyucu bir cephe uygulaması hayata geçirildi.",
  },
  {
    key: "slat-cwa-cephe-projesi",
    slug: "/projeler/slat-cwa-cephe-projesi",
    title: "SLAT CWA Cephe Projesi",
    image:
      "/assets/img/projects/Referanslar_0036_47_0025_SLAT64_CWA50_WAT55-5.jpg",
    alt: "SLAT64 CWA50 WAT55 cephe projesi",
    href: "/projeler/slat-cwa-cephe-projesi",
    description:
      "SLAT64, CWA50 ve WAT55 sistemlerinin birlikte kullanıldığı projede güneş kontrolü sağlayan mimari cephe çözümü sunuldu.",
  },
  {
    key: "wat55-referans-projesi",
    slug: "/projeler/wat55-referans-projesi",
    title: "WAT55 Referans Projesi",
    image:
      "/assets/img/projects/Referanslar_0036_47_0004_wa55.jpg",
    alt: "WAT55 referans projesi - pencere sistemi",
    href: "/projeler/wat55-referans-projesi",
    description:
      "WAT55 pencere sistemlerinin uygulandığı referans projede yüksek ısı yalıtımı ve geniş cam açıklıkları hedeflendi.",
  },
  {
    key: "gsa130-cephe-sistemi",
    slug: "/projeler/gsa130-cephe-sistemi",
    title: "GSA130 Cephe Sistemi",
    image: "/assets/img/projects/gsa130.jpg",
    alt: "GSA130 giydirme cephe sistemi uygulaması",
    href: "/projeler/gsa130-cephe-sistemi",
    description:
      "GSA130 giydirme cephe sistemi ile ticari yapıda düz ve kesintisiz bir cephe hattı oluşturuldu.",
  },
];

export const corporateFacts: CorporateFact[] = [
  { value: "18", label: "Yıllık deneyim" },
  { value: "49", label: "Ülke sayısı" },
  { value: "8.950", label: "Müşteri ve tedarikçi" },
  { value: "23K+", label: "Ton ürün stoku" },
];

export const corporateTimeline: CorporateTimelineEntry[] = [
  {
    year: "2006",
    text: "Çağlayan'da 200 m2 alanda kurulduk. Kavin System Solutions olarak sectorumuzda hizmet başlamış oluyoruz.",
  },
  {
    year: "2010",
    text: "Yenibosna'da 5.500 m2 yeni merkezimize taşındık. Kavin sistemleri için AR-GE çalışmalarına başladık, İzomat makinesi yatırımımızı yaptık.",
  },
  {
    year: "2022",
    text: "49 ülkeye ihracat kapasitesine ulaştık.",
  },
  {
    year: "2023",
    text: "Lüleburgaz'da 11.000 m2'lik fabrika yatırımımızı yaptık.",
  },
];

export const visionMission: VisionMission = {
  vision:
    "Güven ilkesinden ayrılmadan alüminyum sektörünün tercih edilen çözüm ortağı olmak.",
  mission:
    "Paydaşlarımızla iş birliği içerinde, değişen müşteri ihtiyaçlarına fonksiyonel ve kaliteli çözümler sunmak.",
};

export const aboutText: string[] = [
  "Kavin System Solutions, sektörinde öncü konumda olmak için kaliteli ürünler ve hizmetler sunarak müşterilerinin ihtiyaçlarını öndüğü bir ortağı olma hedefine ulaşmıştır.",
  "Günümüze kadar olan bu süreçte birçok başarılı projeyle hizmet vererek bugün 49ülkeye ihracat kapasitesine ulaştık.",
  "Yüksek hacimli stok ve hızlı tedarik gücüyle, bir yandan müşterilerine kaliteli ürün ve hizmet sunarken, diğer yandan da değişime ve yeniliğe açıklığı sayesinde müşterilerin farklı talepleri karşısında esnek ve çözüm odaklı bir yaklaşım sergileyebilmektedir.",
  "Müşteri talepleri doğrultusunda yeni projeler geliştirme, rekabetçi fiyat ve yüksek kalite anlayışı ile AR-GE çalışmaları ile hayallerini hayata geçirme our main goals.",
  "Ar-Ge ve Ür-Ge çalışmalarının sonucunda Kavin System Solutions marka ile mimari sistemler alanında faaliyetlerine devam etmiştir.",
  "Yüksek teknoloji ekipmanları ile donatmış üretim tesisleri ve uzman kadrosyla sektöründe ilklerin öncüsü olma vizyonu ile emin adımlarla yoluna devam etmektedir.",
];

export const corporateAccordion: CorporateAccordionItem[] = [
  {
    title: "Kurumsal Değerlerimiz ve Yaklaşımımız",
    body: "Müşteri odaklılık, kalite standartları, yenilikçi ve sürdürülebilir alüminyum çözümleri.",
  },
  {
    title: "Üretim ve AR-GE Gücümüz",
    body: "Yüksek teknolojiye sahip tesislerimiz, mühendislik yetkinliklerimiz ve katma değerli üretim süreçlerimiz.",
  },
  {
    title: "Vizyon & Misyon",
    body: `Vizyon: ${visionMission.vision} Misyon: ${visionMission.mission}`,
  },
];

export const contactInfo: ContactInfo = {
  headquarters:
    "Bahçeşehir 2. Kısım Mh. Mercedes Blv. 30 E/11 Başakşehir / İstanbul",
  email: "info@kavinmetal.com",
  phone: "0(212) 451 25 00",
  phoneHref: "tel:+902124512500",
  whatsapp: "https://wa.link/fwl04l",
  mapsUrl:
    "https://maps.app.goo.gl/mfVgm2rMPvzogNaa9",
  socials: {
    facebook: "https://www.facebook.com/KavinMetal/?locale=tr_TR",
    instagram: "https://instagram.com/kavinmetal",
    linkedin:
      "https://www.linkedin.com/company/kavin-metal-san-tic-ltd-ti/mycompany/?viewAsMember=true",
    whatsapp: "https://wa.link/fwl04l",
  },
};

export const navLinks: NavLink[] = [
  { label: "Çözümler", href: "/cozumler" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Kurumsal", href: "/hakkimizda" },
  { label: "Haberler", href: "/haberler" },
  { label: "Referanslar", href: "/projeler" },
  { label: "İletişim", href: "/iletisim" },
];

export const ourValues: string[] = [
  "Customer Focus: We always focus on our customers' needs and expectations, ensuring they receive the best solutions. Customer satisfaction is our top priority in every project.",
  "Quality: We continuously improve to meet the highest standards without compromising the quality of our products. By offering reliable and durable solutions, we create long-lasting and aesthetically pleasing products.",
  "Innovation: We keep up with technological advancements and differentiate ourselves in the industry with innovative ideas. Through continuous R&D efforts, we aim to provide the latest and most efficient solutions.",
  "Sustainability: We adopt an environmentally conscious approach, efficiently utilizing resources and promoting recycling to prevent environmental harm.",
  "Teamwork and Collaboration: We believe in strong teamwork and collaboration on the path to success. Every individual's contribution helps us achieve our shared goals.",
  "Trust and Transparency: We always uphold honesty and transparency in our business processes. We establish long-term relationships based on trust with our customers and business partners.",
];

export const team = [
  {
    name: "Kerem Yılmaz",
    position: "CEO & Founder",
    image: "/assets/img/team/kerem-yilmaz.jpg",
    alt: "Kerem Yılmaz - CEO & Founder",
    socials: {
      facebook: "/tr",
      linkedin: "/tr",
      instagram: "/tr",
    },
  },
  {
    name: "Ayşe Demir",
    position: "Project Manager",
    image: "/assets/img/team/ayse-demir.jpg",
    alt: "Ayşe Demir - Project Manager",
    socials: {
      facebook: "/tr",
      linkedin: "/tr",
      instagram: "/tr",
    },
  },
];

export interface PressBlock { kind: "p" | "question"; text: string; }

export const pukabBaskaniArticle: PressArticle = {
  key: "pukab-baskani",
  slug: "/basinda-biz/pukab-baskani",
  title: "Kavin System Solutions Yönetim Kurulu Başkanı Kerem Yılmaz, PÜKAB'ın Yeni Başkanı Oldu",
  category: "Basın",
  dateLabel: "28 Nisan 2023",
  excerpt:
    "'Temsil edilemeyen tüm sektör paydaşlarını temsil edilebilir hâle getirmek başlıca amacımızdır' diyen PÜKAB Başkanı Kerem Yılmaz ile Röportaj.",
  image: "/assets/img/press/taycan.jpg",
  imageAlt: "Kerem Yılmaz röportaj görseli (taycan resmi)",
  images: [],
  blocks: [
    { kind: "p", text: "Kavin System Solutions'le başarı hâline gelirken, ana sektörlerimizdeki temsil edilemeyen grupları deşifretmek ve onları includable bir hâle getirmek amacımızdır." },
    { kind: "question", text: "Sektörün representatif olmadığı grupları nasıl tanımlıyorsunuz?" },
    { kind: "p", text: "Sektörümüzde hâlâ temsil edilemeyen gruplar var ve bu durumu değiştirmek için çabalamamız devam etmektedir." },
    { kind: "question", text: "Konfederasyon üyeliğinin sektör üzerindeki etkisi nedir?" },
    { kind: "p", text: "Konfederasyon üyeliliği, sektör genelinde daha geniş bir etkisi sağlar." },
    { kind: "question", text: "Yeni başkanlık döneminde öncelikli hedefleriniz nelerdir?" },
    { kind: "p", text: "Yeni başladığımız dönemde, sektör içindeki yenilikleri ve sürdürülebilir pratikleri öncelikli yapma hedefimiz var." },
  ],
};

export const sahaExpoSolarCarportArticle: PressArticle = {
  key: "saha-expo-solar-carport",
  slug: "/basinda-biz/saha-expo-solar-carport",
  title: "Kavin System Solutions, SAHA EXPO 2022'de Yenilikçi Ürünü Solar Carport'u Tanıttı",
  category: "Basın",
  dateLabel: "23 Mart 2023",
  excerpt:
    "25-28 Ekim'de gerçekleşen SAHA EXPO'da Kavin markalı Solar Carport büyük ilgi gördü.",
  image: "/assets/img/press/gsa130.jpg",
  imageAlt: "Solar Carport demonstration at SAHA EXPO",
  sourceLabel: "TeknoTalk",
  sourceUrl: "",
  blocks: [
    { kind: "p", text: "25-28 Ekim 2022 tarihleri arasında İstanbul'da gerçekleşen SAHA EXPO 2022 Savunma Havacılık ve Uzay Sanayi Fuarı'ndan, Kavin System Solutions standında Kavin markalı Solar Carport tanıtılmıştır." },
    { kind: "p", text: "Fuar boyunca ziyaretçilerine solar carport çözümünün teknik özellikleri ve faydaları hakkında detaylı bilgiler sunulmuştur. Kavin marka altındaki bu yenilikçi ürün, yeşil enerji ve alüminyum çatı sistemlerinin birleşimiyle dikkat çekmiştir." },
  ],
};

export const luleburgazFabrikaArticle: PressArticle = {
  key: "luleburgaz-fabrikasi",
  slug: "/basinda-biz/luleburgaz-fabrikasi",
  title: "Lüleburgaz Fabrikamız Üretime Başladı",
  category: "Duyuru",
  dateLabel: "2023",
  excerpt:
    "Saricaali'nde 20.000 m² kapalı ve 50.000 m² toplam alanlı üretim tesisimiz artık üretime hazır.",
  image: "/assets/img/press/toz-boya-1.jpg",
  imageAlt: "Fabrika dış görünümü",
  images: undefined,
    blocks: [
    { kind: "p", text: "Saricaali ilçesi içinde 20.000 m² kapalı ve 50.000 m² toplam alanlı modern üretim tesisimiz, alüminyum profiller üretim sürecini desteklemek için birleştirilmiştir." },
    { kind: "p", text: "Tesisimizde yatay ve özel ekstrüzyon hatları, yüzey işlem hatları ile tam üretim kapasitemiz bulunmaktadır. 20.000 m²'lık kapalı alan, hava koşullarından korunmuş üretim ortamı sunarken, 50.000 m²'lik toplam alan ile geniş bir üretim spektrumuna izin vermektedir." },
    { kind: "p", text: "Yatay ekstrüzyon ve yüzey işlem hatlarımız, alüminyum profillerin kalitesini artırmak ve çeşitli flooring çözümler sunmak için tasarlanmıştır. Tesisimiz, yüksek sıcaklıklı fırınlama ve elektrostatik boya uygulamalarını tek entegrated bir çözüm içinde gerçekleştirebilme kapasitesine sahiptir." },
  ],
};

export const fortyNineUlkeArticle: PressArticle = {
  key: "49-ulkeye-ihracat",
  slug: "/basinda-biz/49-ulkeye-ihracat",
  title: "Profillerimiz 49 Ülkede",
  category: "Duyuru",
  dateLabel: "2022",
  excerpt:
    "Doğrudan ihracat modeliyle Almanya merkezli Kavin yapılanması ile 49 ülkeye ulaşmış oluyoruz.",
  image: "/assets/img/press/Referanslar_0036_47_0003_wa-55-safiport-ticari.jpg",
  imageAlt: "Safiport ticari yapı İTHALAT documentación",
    blocks: [
    { kind: "p", text: "Kavin System Solutions, doğrudan ihracat modeliyle üretilen alüminyum profilleriyle 49 ülkeye ulaşıp, uluslararası pazarında dayanıklı bir müşteri bazına sahip oluyoruz." },
    { kind: "p", text: "Almanya merkezli Kavin yapılanmamız ile küresel standartlara uygun çözümler sunarak, dış pazarlarda nuestro marka tanınmaya başlanmıştır. İhracat süreçlerimiz, protokol adherence ve kalite kontrolleriyle desteklenmektedir." },
  ],
};

export const bauMuenihArticle: PressArticle = {
  key: "bau-muenih-2017",
  slug: "/basinda-biz/bau-muenih-2017",
  title: "BAU Münih'te İlk Kez",
  category: "Etkinlik",
  dateLabel: "2017",
  excerpt:
    "BAU Mühendislik ve Inşaat Fuarı'nda ilk kez katıldık, Kavin çatı/cephe sistemlerinin uluslararası tanıtımı.",
  image: "",
  imageAlt: "BAU Mühendislik ve Inşaat Fuarı",
  blocks: [
    { kind: "p", text: "2017 yılında Munich, Almanya'da gerçekleşen BAU Mühendislik ve Inşaat Fuarı'nda, Kavin System Solutions standında Kavin System Solutions marka çatı ve cephe sistemlerinin tanıtımı yapılmıştır." },
    { kind: "p", text: "Fuar standımız, uluslararası ziyaretçiler için Kavin çatı sistemlerinin estetik ve teknik özelliklerini gösterirken, sektör profesyonelleriyle iş birliği fırsatları yaratmıştır. Bu katılım, tüm marks'imiz uluslararası vizyonunun ilk adımı olmustur." },
  ],
};

export const pressArticles: PressArticle[] = [
  pukabBaskaniArticle,
  sahaExpoSolarCarportArticle,
  luleburgazFabrikaArticle,
  fortyNineUlkeArticle,
  bauMuenihArticle,
];
