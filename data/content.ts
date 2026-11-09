// Site içeriği: kavinmetal.com'dan bireyin çekilen ürün/hizmet/proje verileri
// Görseller: public/assets/img altında yerelleştirildi (kaynak: kayrametal.com/wp-content/uploads)
// PDF'ler: public/assets/pdf altında indirildi (kaynak: kayrametal.com/wp-content/uploads/2023/04-05)
// Yeni ürün/hizmet/proje eklemek için sadece bu dosyayı genişletmek yeterli.

export type Product = {
  title: string[];
  image: string;
  icon: string;
  alt: string;
  href: string;
  description: string;
  pdf: string;
  parentTitle?: string;
};

export type ProductSubGroup = {
  parentHref: string;
  parentTitle: string;
  title: string;
  image: string;
  alt: string;
};

export type Service = {
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
};

// Hero slaytları: her slaytın kendi videosu ve metni var
export type HeroSlide = {
  index: string;
  videoId: string;
  eyebrow: string;
  title: string[];
  lead: string;
};

export type Project = {
  title: string;
  image: string;
  alt: string;
  href: string;
  description: string;
};

export const heroSlides: HeroSlide[] = [
  {
    index: "01",
    videoId: "CMRQUQnm4BE",
    eyebrow: "Kavin System Solutions",
    title: ["dış mekandan iç mekana BÜTÜNLEŞİK PROJE ÇÖZÜMLERİ"],
    lead:
      "Değişen müşteri ihtiyaçlarına fonksiyonel ve kaliteli ürünlerle güvenilir çözüm ortağı olmaya devam ediyoruz.",
  },
  {
    index: "02",
    videoId: "oxN8jv3oUow",
    eyebrow: "Kavin System Solutions",
    title: ["FARK YARATAN HİZMETLER"],
    lead:
      "Yüzey işlemleri, mekanik işlemler ve size özel imalat çözümleriyle güçlü projeler oluşturuyoruz.",
  },
  {
    index: "03",
    videoId: "CMRQUQnm4BE",
    eyebrow: "Kavin System Solutions",
    title: ["SICAKTA SERİN SOĞUTA SERİN"],
    lead:
      "Kaliteli ürünler ve hizmetlerle müşterilerinin farklı talepleri karşında esnek ve çözüm odaklı bir yaklaşım sergileyebilmektedir.",
  },
];

// Slayt otomatik geçiş süresi (ms)
export const HERO_AUTOPLAY_MS = 12000;

// Ürün grupları (Çözümler): kavinmetal.com ana sayfa + alt sayfalarından birebin
export const products: Product[] = [
  {
    title: ["Aluminyum Profiller"],
    image: "/assets/img/products/banner-aluminyum.png",
    icon: "/assets/img/icons/aluminyum-profiller.svg",
    alt: "Aluminyum profiller - standart, doğrama, dekorasyon",
    href: "/cozumler/aluminyum-profiller",
    description:
      "Standart profiller, doğrama profiller, dekorasyon ve tamamlayıcı profiller ile geniş ürün valosu sunuyoruz.",
    pdf: "standart-profiller.pdf",
  },
  {
    title: ["Küpeşte Sistemleri"],
    image: "/assets/img/products/banner-kupeste.jpg",
    icon: "/assets/img/icons/kupeste-profilleri.svg",
    alt: "Küpeşte sistemleri - yuvarlak, dikdörtgen, cam kanal",
    href: "/cozumler/kupeste-profilleri",
    description:
      "Yuvarlak sistem, kare ve dikdörtgen profiller, cam kanal küpeşte profilleriyle partiyalayabilir ve camlı çözümler sunuyoruz.",
    pdf: "aluminyum-yuvarlak-sistem-kupeste-profilleri.pdf",
  },
  {
    title: ["Kompozit Paneller"],
    image: "/assets/img/products/banner-kompozit.jpg",
    icon: "/assets/img/icons/kompozit-paneller.svg",
    alt: "Kompozit paneller - 3000, 4000, 5000 serisi",
    href: "/cozumler/kompozit-paneller",
    description:
      "3000 serisi, 4000 serisi ve 5000 serisi kompozit panellerle retractable cam tanav sistemi sunuyoruz.",
    pdf: "3000-serisi.pdf",
  },
  {
    title: ["Aksesuarlar"],
    image: "/assets/img/products/banner-aksesuar.jpg",
    icon: "/assets/img/icons/aksesuarlar.svg",
    alt: "Aksesuarlar - profilAccessories ve donanım grupları",
    href: "/cozumler/aksesuarlar",
    description:
      "Projeye özel donanım grupları, çelik destek sistemleri ve tamamlayıcı aksesuarlar ile çözüm tamamlıyoruz.",
    pdf: "aksesuar.pdf",
  },
];

// Ürün alt kırılımları: her ürün grubunun detay sayfasındaki alt kategoriler
export const productSubGroups: ProductSubGroup[] = [
  // Aluminyum Profiller alt grupları
  {
    parentHref: "/cozumler/aluminyum-profiller",
    parentTitle: "ALUMINYUM PROFILLER",
    title: "Standart Profiller",
    image: "/assets/img/products/standart-profil.jpg",
    alt: "Standart alüminyum profiller",
  },
  {
    parentHref: "/cozumler/aluminyum-profiller",
    parentTitle: "ALUMINYUM PROFILLER",
    title: "Doğrama Profilleri",
    image: "/assets/img/products/dograma-profil.jpg",
    alt: "Doğrama alüminyum profiller",
  },
  {
    parentHref: "/cozumler/aluminyum-profiller",
    parentTitle: "ALUMINYUM PROFILLER",
    title: "Dekorasyon ve Tamamlayıcı Profiller",
    image: "/assets/img/products/dekorasyon-profil.jpg",
    alt: "Dekorasyon ve tamamlayıcı profiller",
  },

  // Küpeşte Sistemleri alt grupları
  {
    parentHref: "/cozumler/kupeste-profilleri",
    parentTitle: "KÜPEŞTE SİSTEMLERİ",
    title: "Yuvarlak Sistem",
    image: "/assets/img/products/yuvarlak-kupeste.jpg",
    alt: "Alüminyum yuvarlak Küpeşte sistemi",
  },
  {
    parentHref: "/cozumler/kupeste-profilleri",
    parentTitle: "KÜPEŞTE SİSTEMLERİ",
    title: "Kare ve Dikdörtgen",
    image: "/assets/img/products/kare-kupeste.jpg",
    alt: "Alüminyum kare ve dikdörtgen Küpeşte",
  },
  {
    parentHref: "/cozumler/kupeste-profilleri",
    parentTitle: "KÜPEŞTE SİSTEMLERİ",
    title: "Cam Kanal Küpeşte",
    image: "/assets/img/products/cam-kupeste.jpg",
    alt: "Alüminyum cam kanal Küpeşte",
  },

  // Kompozit Paneller alt grupları
  {
    parentHref: "/cozumler/kompozit-paneller",
    parentTitle: "KOMPOZIT PANELLER",
    title: "3000 Serisi",
    image: "/assets/img/products/kompozit-renk.jpg",
    alt: "Kompozit panel 3000 serisi renk kataloğu",
  },
  {
    parentHref: "/cozumler/kompozit-paneller",
    parentTitle: "KOMPOZIT PANELLER",
    title: "4000 Serisi",
    image: "/assets/img/products/kompozit-renk.jpg",
    alt: "Kompozit panel 4000 serisi renk kataloğu",
  },
  {
    parentHref: "/cozumler/kompozit-paneller",
    parentTitle: "KOMPOZIT PANELLER",
    title: "5000 Serisi",
    image: "/assets/img/products/kompozit-renk.jpg",
    alt: "Kompozit panel 5000 serisi renk kataloğu",
  },

  // Aksesuarlar alt grupları
  {
    parentHref: "/cozumler/aksesuarlar",
    parentTitle: "AKSESÜLAR",
    title: "Standart Profiller",
    image: "/assets/img/products/standart-profil.jpg",
    alt: "Standart alüminyum profiller",
  },
  {
    parentHref: "/cozumler/aksesuarlar",
    parentTitle: "AKSESÜLAR",
    title: "Doğrama Profilleri",
    image: "/assets/img/products/dograma-profil.jpg",
    alt: "Doğrama alüminyum profiller",
  },
  {
    parentHref: "/cozumler/aksesuarlar",
    parentTitle: "AKSESÜLAR",
    title: "Projeye Özel",
    image: "/assets/img/products/projeye-ozel.jpg",
    alt: "Projeye özel aksesuarlar",
  },
];

// Hizmetler: kavinmetal.com hizmet sayfalarından birebin metinler (marka: Kavin Metal)
export const services: Service[] = [
  {
    title: "YÜZEY İŞLEMLERİ",
    description:
      "Elektrostatik toz boya uygulaması ile yüksek kalite ve dayanıklı floor sonrası floor hizmetleri sunuyoruz. Alüminyum yüzeylerindeki imperfeksiyonları kaldırarak brillanti finish ve korozif dirim sağlayalım.",
    image: "/assets/img/services/toz-boya-2.jpg",
    alt: "Yüzey işlemleri - toz boya uygulaması",
    href: "/hizmetler/yuzey-islemleri",
  },
  {
    title: "MEKANİK İŞLEMLER",
    description:
      "CNC işleme, frais ve drilling işlemleri ile hassap ve alüminyum parçalarının hassas işlenmesi. Proje ihtiyaçlarınızı hızlı ve doğru bir şekilde çözüyoruz.",
    image: "/assets/img/services/mekanik-islemler.jpg",
    alt: "Mekanik işlemler - CNC işleme ve fres",
    href: "/hizmetler/mekanik-islemler",
  },
  {
    title: "İZOMAT",
    description:
      "Izomat makinesi ile profil kesme ve işleme hizmetleri sunarak proje ihtiyaçlarınızı hızlı bir şekilde çözüyoruz. Präzis kesimlerle specifikasyonlara uygun üretim sağlıyoruz.",
    image: "/assets/img/services/izomat-1.jpg",
    alt: "Izomat - profil kesme ve işleme",
    href: "/hizmetler/izomat",
  },
  {
    title: "PROJE HİZMETLERİ",
    description:
      "Proje konseptinden yürütüme ve teslimata kadar kapsamdestek, müşteri gereksinimlerine özel çözümler. Proje yönetimi, timedelivery ve kalite kontrol ile projenizi sonuca getiriyoruz.",
    image: "/assets/img/services/proje-hizmet-1.png",
    alt: "Proje hizmetleri - konseptten teslimat",
    href: "/hizmetler/proje-hizmetleri",
  },
];

// Projeler: kavinmetal.com referanslar galerisindeki gerçek projeler
export const projects: Project[] = [
  {
    title: "Göktürk Konutları",
    image:
      "/assets/img/projects/Referanslar_0036_47_0001_Gokturk_KONUTLARI-3_WA55_KHR-2.jpg",
    alt: "Göktürk Konutları - WA55 pencere ve kapı sistemleri",
    href: "/projeler/gokturk-konutlari",
    description:
      "Göktürk Konutları projesinde WA55 pencere ve kapı sistemleri kullanılarak konforlu ve dayanıklı yaşam alanları oluşturuldu.",
  },
  {
    title: "Safiport Ticari Yapı",
    image:
      "/assets/img/projects/Referanslar_0036_47_0003_wa-55-safiport-ticari.jpg",
    alt: "Safiport ticari yapı - WA55 cephe sistemi",
    href: "/projeler/safiport-ticari-yapi",
    description:
      "Safiport ticari yapıda WA55 cephe sistemi ile geniş açıklıklarda modern ve güvenilir bir cephe çözümü uygulandı.",
  },
  {
    title: "Akkuş Tekstil",
    image:
      "/assets/img/projects/Referanslar_0036_47_0011_Akkus-Tekstil_2013_WAT55-1.jpg",
    alt: "Akkuş Tekstil tesisi - WAT55 cephe uygulaması",
    href: "/projeler/akkus-tekstil",
    description:
      "Akkuş Tekstil üretim tesisinde WAT55 sistemleriyle cephe ve doğrama çözümleri uygulanarak ışığı verimli kullanan bir çalışma ortamı sağlandı.",
  },
  {
    title: "Kemerburgaz Evleri",
    image:
      "/assets/img/projects/Referanslar_0036_47_0028_kemerburgaz-evleri-wat-55.jpg",
    alt: "Kemerburgaz Evleri - WAT55 doğrama sistemleri",
    href: "/projeler/kemerburgaz-evleri",
    description:
      "Kemerburgaz Evleri projesinde WAT55 doğrama sistemleri ile cephe estetiğini tamamlayan dayanıklı pencere çözümleri kullanıldı.",
  },
  {
    title: "Bahçeşehir Koleji Halkalı",
    image:
      "/assets/img/projects/Referanslar_0036_47_0032_BahcesehirKoleji_Halkali_wat55-4.jpg",
    alt: "Bahçeşehir Koleji Halkalı kampüsü - WAT55 sistemleri",
    href: "/projeler/bahcesehir-koleji-halkali",
    description:
      "Bahçeşehir Koleji Halkalı kampüsünde WAT55 sistemleriyle geniş açıklıklı, aydınlık eğitim alanları için cephe çözümleri uygulandı.",
  },
  {
    title: "KTAMS Projesi",
    image:
      "/assets/img/projects/Referanslar_0036_47_0006_KTAMS_WA55_SLA60.jpg",
    alt: "KTAMS projesi - WA55 ve SLA60 sistemleri",
    href: "/projeler/ktams-projesi",
    description:
      "KTAMS projesinde WA55 ve SLA60 sistemleri bir arada kullanılarak ofis binası için çağdaş bir cephe hattı oluşturuldu.",
  },
  {
    title: "Kompozit Cephe Uygulaması",
    image:
      "/assets/img/projects/Referanslar_0036_47_0016_WAT55_KOMPOZIT-1-kopyasi.jpg",
    alt: "Kompozit cephe uygulaması - WAT55 kompozit panel",
    href: "/projeler/kompozit-cephe-uygulamasi",
    description:
      "WAT55 taşıyıcı sistem üzerine kompozit panel kaplama ile estetik ve koruyucu bir cephe uygulaması hayata geçirildi.",
  },
  {
    title: "SLAT CWA Cephe Projesi",
    image:
      "/assets/img/projects/Referanslar_0036_47_0025_SLAT64_CWA50_WAT55-5.jpg",
    alt: "SLAT64 CWA50 WAT55 cephe projesi",
    href: "/projeler/slat-cwa-cephe-projesi",
    description:
      "SLAT64, CWA50 ve WAT55 sistemlerinin birlikte kullanıldığı projede güneş kontrolü sağlayan mimari cephe çözümü sunuldu.",
  },
  {
    title: "WAT55 Referans Projesi",
    image: "/assets/img/projects/Referanslar_0036_47_0004_wa55.jpg",
    alt: "WAT55 referans projesi - pencere sistemi",
    href: "/projeler/wat55-referans-projesi",
    description:
      "WAT55 pencere sistemlerinin uygulandığı referans projede yüksek ısı yalıtımı ve geniş cam açıklıkları hedeflendi.",
  },
  {
    title: "GSA130 Cephe Sistemi",
    image: "/assets/img/projects/gsa130.jpg",
    alt: "GSA130 giydirme cephe sistemi uygulaması",
    href: "/projeler/gsa130-cephe-sistemi",
    description:
      "GSA130 giydirme cephe sistemi ile ticari yapıda düz ve kesintisiz bir cephe hattı oluşturuldu.",
  },
];

// Kurumsal istatistikler: kavinmetal.com/hakkimizda sayfasından gerçek rakamlar
export const corporateFacts = [
  { value: "18", label: "Yıllık deneyim" },
  { value: "49", label: "Ülkeye ihracat kapasitesi" },
  { value: "8950", label: "Farklı müşteri ve tedarikçi" },
  { value: "23K+", label: "Ton ürün sevkiyatı" },
];

// Kurumsal tarihçe: kavinmetal.com/hakkimizda kilometre taşları birebin
export const corporateTimeline = [
  {
    year: "2006",
    text: "Çağlayan'da 200 m2 alanda kurulduk. Kavin System Solutions olarak sectorumuzda hizmet başlamış oluyoruz.",
  },
  {
    year: "2007",
    text: "Boyahanemizin açılışını gerçekleştirdik. Küçükyalı'da mağaza açılışımızı yaptık.",
  },
  {
    year: "2010",
    text: "Yenibosna'da 5.500 m2 yeni merkezimize taşındık. Amanos sistemleri için AR-GE çalışmalarına başladık, İzomat makinesi yatırımımızı yaptık.",
  },
  {
    year: "2012",
    text: "Amanos System markamızın tanıtımı için ilk fuar katılımını yaptık.",
  },
  {
    year: "2015",
    text: "Amanos GmbH şirketimizin açılışını gerçekleştirdik. Proje yönetimine başladık.",
  },
  {
    year: "2017",
    text: "BAU fuarına ilk katılımı sağladık.",
  },
  {
    year: "2022",
    text: "49 ülkeye ihracat yapabilme kapasitesine ulaştık. Yurt içi ve yurt dışında 25'in üzerinde fuara katıldık.",
  },
  {
    year: "2023",
    text: "Lüleburgaz'da 11.000 m2'lik fabrika yatırımımızı yaptık.",
  },
];

// Vizyon & Misyon: kavinmetal.com/hakkimizda birebin
export const visionMission = {
  vision:
    "Güven ilkesinden ayrılmadan alüminyum sektörünün tercih edilen çözüm ortağı olmak.",
  mission:
    "Paydaşlarımızla iş birliği içerinde, değişen müşteri ihtiyaçlarına fonksiyonel ve kaliteli çözümler sunmak.",
};

// Hakkımızda ana metni: kavinmetal.com/hakkimizda birebin
export const aboutText = [
  "Kavin System Solutions, sektörinde öncü konumda olmak için kaliteli ürünler ve hizmetler sunarak müşterilerinin ihtiyaçlarını öndüğü bir ortağı olma hedefine ulaşmıştır.",
  "Günümüze kadar olan bu süreçte kendini kanıtlamış birçok projeyi başarılı bir şekilde hayata entegre ederek bugün yüzlerce yeni projelere imza atmıştır.",
  "Yüksek hacimli stok ve hızlı tedarik gücüyle, bir yandan müşterilerine kaliteli ürün ve hizmet sunarken, diğer yandan da değişime ve yeniliğe açıklığı sayesinde müşterilerin farklı talepleri karşısında esnek ve çözüm odaklı bir yaklaşım sergileyebilmektedir.",
  "Amaçlarının en başında müşteri talepleri doğrultusunda yeni projeler geliştirmek, rekabetçi fiyat ve yüksek kalite anlayışı ile AR-GE çalışmaları ile hayallerini hayata geçirmek yer almaktadır.",
  "Yapmış olduğu Ar-Ge ve Ür-Ge çalışmalarının sonucunda Amanos System marka ile mimari sistemler alanında faaliyetlerine devam etmiştir.",
  "Bu anlayışla Kavin System Solutions, sadece ürün satışıyla yetinmemiş ve katma değer yaratacak yatırımları da gerçekleştirmiştir. Bugün, yüksek teknoloji ekipmanları ile donatmış üretim tesisleri ve uzman kadrosyla sektöründe ilklerin öncüsü olma vizyonu ile emin adımlarla yoluna devam etmektedir.",
];

export const corporateAccordion = [
  {
    title: "18 Yıllık Deneyim",
    body: "2006 yılında sektöre girildikten sonra, yüksek hacimli stok ve hızlı tedarik gücüyle bugün 49 ülkeye ihracat kapasitesine ulaştık; yılda ortalama %18 büyüme kaydediyor.",
  },
  {
    title: "Vizyon & Misyon",
    body: `Vizyon: ${visionMission.vision} Misyon: ${visionMission.mission}`,
  },
];

// İletişim: kavinmetal.com/iletisim sayfasından birebin
export const contactInfo = {
  headquarters:
    "Bahçeşehir 2. Kısım Mh. Mercedes Blv. 30 E/11 Başakşehir / İstanbul",
  factory:
    "Fabrika: Sarıcaali Küme Evler No: 311/1, 39750 Lüleburgaz / Kırklareli",
  email: "info@kavinmetal.com",
  phone: "0(212) 451 25 00",
  phoneHref: "tel:+902124512500",
  whatsapp: "https://wa.link/fwl04l",
  mapsUrl:
    "https://goo.gl/maps/4soxC8Uzgxr7dhu97",
  socials: {
    facebook: "https://www.facebook.com/KavinMetal/?locale=tr_TR",
    instagram: "https://instagram.com/kavinmetal",
    linkedin:
      "https://www.linkedin.com/company/kavin-metal-san-tic-ltd-ti/mycompany/?viewAsMember=true",
    whatsapp: "https://wa.link/fwl04l",
  },
};

// Nav link'ler: TÜRKÇE, broken /our-values ve /tr removed
export const navLinks = [
  { label: "Anasayfa", href: "/" },
  { label: "Çözümler", href: "/cozumler" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Kurumsal", href: "/hakkimizda" },
  { label: "Basinda Biz", href: "/basinda-biz" },
  { label: "Referanslar", href: "/projeler" },
  { label: "İletişim", href: "/iletisim" },
];

// Our Values: kavinmetal.com sayfasından birebin
export const ourValues = [
  "Customer Focus: We always focus on our customers' needs and expectations, ensuring they receive the best solutions. Customer satisfaction is our top priority in every project.",
  "Quality: We continuously improve to meet the highest standards without compromising the quality of our products. By offering reliable and durable solutions, we create long-lasting and aesthetically pleasing products.",
  "Innovation: We keep up with technological advancements and differentiate ourselves in the industry with innovative ideas. Through continuous R&D efforts, we aim to provide the latest and most efficient solutions.",
  "Sustainability: We adopt an environmentally conscious approach, efficiently utilizing resources and promoting recycling to prevent environmental harm.",
  "Teamwork and Collaboration: We believe in strong teamwork and collaboration on the path to success. Every individual's contribution helps us achieve our shared goals.",
  "Trust and Transparency: We always uphold honesty and transparency in our business processes. We establish long-term relationships based on trust with our customers and business partners.",
];

// Team: kavinmetal.com/team sayfasından birebin (demo veriler kaldırıldı, Kavin info korunuyor)
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

// Blog: kavinmetal.com/blog sayfasından birebin
export const blogPosts = [
  {
    title: "Hello world!",
    date: "January 22, 2025",
    author: "Olgay Aslandağ",
    excerpt: "Welcome to WordPress. This is your first post. Edit or delete it, then start writing!",
    href: "/blog/hello-world",
  },
];