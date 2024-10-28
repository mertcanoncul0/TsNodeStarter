# 🌟 TypeScript ile Hızlı ve Verimli Bir Başlangıç: `ts-node-starter` Uygulaması

## 📌 Proje Tanımı

`ts-node-starter`: TypeScript ve Express kullanan basit ve yapılandırılmış bir uygulama şablonu olarak tasarlandı. Proje; modüler yapı, kolayca özelleştirilebilen bir router sistemi ve TypeScript yapılandırmasıyla öne çıkıyor. Express API projelerine hızlıca başlamanıza olanak tanıyan bu proje, özellikle TypeScript’in güçlü ve güvenli yapısından faydalanmak isteyen geliştiriciler için ideal.

## 🚀 Özellikler ve Kullanılan Teknolojiler

- **🛠 TypeScript**: TypeScript: Güçlü tür desteğiyle daha güvenli ve anlaşılır bir kod yapısı sağlıyor. Bu sayede kodun bakımı ve hata takibi çok daha kolay hale geliyor.

- **⚡️ ts-node-dev**: Anlık kod değişikliklerini yeniden başlatarak hızlı bir geliştirme ortamı sunuyor. Derleme olmadan TypeScript kodlarını doğrudan çalıştırarak zaman kazandırıyor.

- **🗂 tsc-alias & tsconfig-paths** Projedeki karmaşık import yollarını @alias kullanımıyla daha temiz ve modüler hale getiriyor. Kodda düzen sağlarken, büyük projelerde yapıyı daha yönetilebilir kılıyor.

- **🌐 Express**: Hızlı ve hafif bir web framework olan Express, API geliştirme sürecini kolaylaştırıyor. Bu projede Express’le birlikte basit bir router yapısı tanımlandı.

- **🔑 dotenv**: Ortam değişkenlerini yönetmek için `dotenv` kullanıldı. Bu, uygulamayı farklı ortamlar (development, production) için yapılandırmayı kolaylaştırıyor.

## 🚀 Projeyi Çalıştırma

Projeyi bilgisayarınıza klonlamak ve çalıştırmak için aşağıdaki adımları izleyebilirsiniz:

### 1. Projeyi Klonlayın

Terminal veya komut satırında aşağıdaki komutu çalıştırarak projeyi klonlayın:

```bash
git clone https://github.com/mertcanoncul0/TsNodeStarter.git
```

### 2. Proje Dizinine Girin

Projeyi klonladıktan sonra proje dizinine geçiş yapın:

```bash
cd TsNodeStarter
```

### 3. Gerekli Paketleri Yükleyin

Proje bağımlılıklarını yüklemek için aşağıdaki komutu çalıştırın:

```bash
bun install
```

### 4. Geliştirme Ortamında Çalıştırın

Projeyi geliştirme ortamında çalıştırmak için şu komutu kullanabilirsiniz:

```bash
bun run dev
```

### 5. Yapıyı Üretim Ortamı için Derleyin

Projeyi derlemek ve üretim ortamında çalıştırmak için sırasıyla aşağıdaki komutları çalıştırın:

```bash
bun run build
bun run start
```
