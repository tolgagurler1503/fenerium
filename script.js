// ================================================
//    GEMINI AI ASİSTANI - FENERIUM (FLOATING)
// ================================================

const GEMINI_API_KEY = "AIzaSyCsLqPq9dPN6mPQmDFI3pRrN8yUQt6VkUQ";

// Ürün Veritabanı (Expanded)
const FENERIUM_PRODUCTS = [
    { id: "ic-saha-24", ad: "İç Saha Forması 2024", fiyat: 599.90, kategori: "forma", resim: "https://media.fenerium.com/Fenerium/media/images/urunler/AT013EFS014SR.jpg" },
    { id: "deplasman-24", ad: "Deplasman Forması", fiyat: 599.90, kategori: "forma", resim: "https://media.fenerium.com/Fenerium/media/images/urunler/AT013EFS03400.jpg" },
    { id: "atki", ad: "Taraftar Atkısı", fiyat: 149.90, kategori: "aksesuar", resim: "https://media.fenerium.com/Fenerium/media/images/urunler/TA145UFY02407.jpg" },
    { id: "sapka", ad: "FB Şapka", fiyat: 199.90, kategori: "aksesuar", resim: "https://media.fenerium.com/Fenerium/media/images/urunler/TA019CEY08407-03.jpg" },
    { id: "spor-ayakkabi", ad: "FB Spor Ayakkabı", fiyat: 899.90, kategori: "ayakkabi", resim: "https://media.fenerium.com/Fenerium/media/images/urunler/AY039CFY13001.jpg" },
    { id: "kero-ayakkabi", ad: "Fenerbahçe Kero Spor Ayakkabı 36-40", fiyat: 899.90, kategori: "ayakkabi", resim: "https://media.fenerium.com/Fenerium/media/images/urunler/AY039GFY02400.jpg" },
    { id: "cena-ayakkabi", ad: "Fenerbahçe Cena Pu Spor Ayakkabı", fiyat: 899.90, kategori: "ayakkabi", resim: "https://media.fenerium.com/Fenerium/media/images/urunler/AY039CEY02001.jpg" },
    { id: "q-saat-1", ad: "Fenerbahçe Quantum 25/D2 Kol Saati", fiyat: 399.90, kategori: "aksesuar", resim: "https://media.fenerium.com/Fenerium/media/images/urunler/HA036UFS05000.jpg" },
    { id: "terlik", ad: "Fenerbahçe Dakota Sarı Lacivert Terlik", fiyat: 199.90, kategori: "ayakkabi", resim: "https://media.fenerium.com/Fenerium/media/images/urunler/AY058GBY025LA.jpg" },
    { id: "q-saat-2", ad: "Fenerbahçe Lacivert Quantum Kol Saati SLL-6/25", fiyat: 399.90, kategori: "aksesuar", resim: "https://media.fenerium.com/Fenerium/media/images/urunler/HA036UFS12400.jpg" },
    { id: "q-saat-3", ad: "Fenerbahçe Koyu Yeşil Quantum Kol Saati SY-4/25", fiyat: 399.90, kategori: "aksesuar", resim: "https://media.fenerium.com/Fenerium/media/images/urunler/HA036UFS10609.jpg" },
    { id: "q-saat-4", ad: "Fenerbahçe Kahverengi Quantum Kol Saati DK-1", fiyat: 399.90, kategori: "aksesuar", resim: "https://media.fenerium.com/Fenerium/media/images/urunler/HA036UFS13605.jpg" },
    { id: "anahtarlik", ad: "Fenerbahçe Çubuklu Anahtarlık", fiyat: 199.90, kategori: "aksesuar", resim: "https://media.fenerium.com/Fenerium/media/images/urunler/HA023TES09000.jpg" },
    { id: "bere", ad: "Fenerbahçe Gri Melanj Unisex Bere", fiyat: 199.90, kategori: "aksesuar", resim: "https://media.fenerium.com/Fenerium/media/images/urunler/TA045UGK07301.jpg" },
    { id: "hediye-kutusu", ad: "Fenerbahçe BizeEmanet Hediye Kutusu", fiyat: 200.07, kategori: "aksesuar", resim: "https://media.fenerium.com/Fenerium/media/images/urunler/HA108UFS01000.jpg" },
    { id: "kravat", ad: "Fenerbahçe Lacivert Sarı Kravat", fiyat: 99.07, kategori: "aksesuar", resim: "https://media.fenerium.com/Fenerium/media/images/urunler/TA031UES014SR.jpg" },
    { id: "bayrak-1", ad: "Fenerbahçe 19x25 Logo Püsküllü Üçgen Bayrak", fiyat: 60.07, kategori: "aksesuar", resim: "https://media.fenerium.com/Fenerium/media/images/urunler/HA422TES015LC.jpg" },
    { id: "bayrak-2", ad: "30X45 5 Yıldız FB Logo Sallama Bayrak", fiyat: 70.07, kategori: "aksesuar", resim: "https://media.fenerium.com/Fenerium/media/images/urunler/HA400UCS015LC.jpg" },
    { id: "beyaz-forma", ad: "Fenerbahçe Beko 2025/26 Adidas Erkek Beyaz Forma", fiyat: 599.90, kategori: "forma", resim: "https://media.fenerium.com/Fenerium/media/images/urunler/TK414EFS08001.jpg" },
    { id: "retro-forma", ad: "Fenerbahçe Retro Çubuklu Forma 02/03", fiyat: 599.90, kategori: "forma", resim: "https://media.fenerium.com/Fenerium/media/images/urunler/TK414EES095LC.jpg" },
    { id: "sari-forma", ad: "Fenerbahçe 2025/26 Chobani Sarı Forma", fiyat: 599.90, kategori: "forma", resim: "https://media.fenerium.com/Fenerium/media/images/urunler/AT013EFS02500.jpg" },
    { id: "basket-lacivert", ad: "Fenerbahçe 24/25 Adidas Basketbol Erkek Lacivert Forma", fiyat: 599.90, kategori: "forma", resim: "https://media.fenerium.com/Fenerium/media/images/urunler/TK414EES12400.jpg" },
    { id: "basket-cubuklu", ad: "Fenerbahçe 24/25 Adidas Basketbol Erkek Çubuklu Forma", fiyat: 599.90, kategori: "forma", resim: "https://media.fenerium.com/Fenerium/media/images/urunler/TK414EES104SR.jpg" },
    { id: "sort", ad: "Taraftar Şort", fiyat: 249.90, kategori: "forma", resim: "https://media.fenerium.com/Fenerium/media/images/urunler/AT514EFS04400.jpg" },
    { id: "canta", ad: "Spor Çantası", fiyat: 399.90, kategori: "aksesuar", resim: "https://media.fenerium.com/Fenerium/media/images/urunler/CN313TFS01400-02.jpg" }
];

// UI Enjeksiyonu
function injectFloatingChat() {
    if (document.getElementById('ai-chat-container')) return;

    const chatHtml = `
        <div id="ai-chat-container">
            <div id="ai-chat-bubble" onclick="toggleChat()">
                <!-- AI Yazısı (Sarı Lacivert) -->
                <span style="font-size: 24px; font-weight: 900; color: #ffcc00; text-shadow: 2px 2px 0px #003366; font-family: 'Arial Black', sans-serif;">AI</span>
                <span class="badge">!</span>
            </div>
            <div id="ai-chat-window" style="display: none;">
                <div id="ai-chat-header">
                    <div style="display:flex; align-items:center; gap:10px;">
                        <img src="https://media.fenerium.com/Fenerium/media/images/fenerium-logo.png?ext=.png" alt="Logo" style="height: 20px;">
                        <span>Fenerium Asistan</span>
                    </div>
                    <button onclick="toggleChat()" style="font-size:20px;">&times;</button>
                </div>
                <div id="ai-chat-messages">
                    <div class="message ai-message">
                        Merhaba Büyük Fenerbahçe Taraftarı! 💛💙<br>
                        Ben senin kişisel asistanınım. Sana nasıl yardımcı olabilirim?
                        <br><br>
                        Örn: "Forma öner", "İndirim var mı?"
                    </div>
                </div>
                <div id="ai-chat-input-area">
                    <button onclick="clearChat()" style="background:#666; font-size:12px; border-radius:10px; width:auto; padding:0 10px;" title="Sohbeti Temizle">🧹</button>
                    <input type="text" id="aiChatInput" placeholder="Mesajınızı yazın..." onkeypress="handleChatKey(event)">
                    <button onclick="getAIRecommendation()">➤</button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', chatHtml);
}

function toggleChat() {
    const chatWindow = document.getElementById('ai-chat-window');
    const badge = document.querySelector('#ai-chat-bubble .badge');

    if (chatWindow.style.display === 'none' || chatWindow.style.display === '') {
        chatWindow.style.display = 'flex';
        badge.style.display = 'none';
    } else {
        chatWindow.style.display = 'none';
    }
}

function handleChatKey(event) {
    if (event.key === 'Enter') {
        getAIRecommendation();
    }
}

// ------------------------------------------
// GOOGLE GEMINI ENTEGRASYONU (Direct API Call)
// ------------------------------------------

// ================================================
//    YARDIMCI FONKSİYONLAR & API WRAPPER
// ================================================

async function getGeminiResponse(userMessage) {
    // 2026 Model Listesi (Browser ile doğrulandı)
    const configs = [
        { ver: 'v1beta', model: 'gemini-flash-latest' },
        { ver: 'v1beta', model: 'gemini-2.0-flash' },
        { ver: 'v1beta', model: 'gemini-2.5-flash' },
        { ver: 'v1beta', model: 'gemini-3-flash-preview' }
    ];

    const promptContext = `
    Sen Fenerium'un fanatik AI asistanısın (12 Numara). 💛💙
    Taraftarla samimi sohbet et (merhaba, selam vb. cevapla).
    Sadece Fenerbahçe ve Fenerium ürünlerinden bahset.
    Mevcut Ürünler: ${FENERIUM_PRODUCTS.map(p => p.ad).join(", ")}
    `;

    for (let cfg of configs) {
        try {
            const URL = `https://generativelanguage.googleapis.com/${cfg.ver}/models/${cfg.model}:generateContent?key=${GEMINI_API_KEY}`;
            const response = await fetch(URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: promptContext + "\n\nKullanıcı: " + userMessage }] }]
                })
            });

            const data = await response.json();

            if (data.candidates && data.candidates[0].content) {
                return data.candidates[0].content.parts[0].text;
            }
            console.warn(`Model ${cfg.model} denemesi başarısız.`, data.error?.message);
        } catch (err) {
            console.error(`Critial API Error (${cfg.model}):`, err);
        }
    }

    // Nihai Fallback (Eğer hiçbir API çalışmazsa - %100 Güvenli)
    const lower = userMessage.toLowerCase();
    if (lower.includes("selam") || lower.includes("merhaba") || lower.includes("nbr") || lower.includes("nasıl")) {
        return "Selam büyük Fenerbahçe taraftarı! 💛💙 Ben 12 Numara. Maç heyecanından stadyumda internet biraz yavaş ama ben buradayım! Sana nasıl yardımcı olabilirim kral?";
    }
    return "Şu an stadyumdan büyük bir gürültü yükseliyor (+3 puan!), tam duyamadım ama kalbimiz seninle! 🏟️💛💙 İstediğin ürünlere hemen aşağıdan ulaşabilirsin.";
}

async function getAIRecommendation() {
    const inputField = document.getElementById('aiChatInput');
    const sendBtn = document.querySelector('#ai-chat-input-area button');
    const userMessage = inputField.value.trim();
    if (!userMessage) return;

    // Arayüzü kilitle
    inputField.disabled = true;
    if (sendBtn) sendBtn.disabled = true;

    // Mesajı Ekle
    addMessageToChat(userMessage, 'user-message');
    inputField.value = '';

    // "Yazıyor..." göstergesi
    const loadingId = addMessageToChat("12 Numara yazıyor... ✍️", 'ai-message');

    // Gemini API Çağrısı
    const aiResponse = await getGeminiResponse(userMessage);

    // Loading mesajını kaldır
    const loadingElement = document.getElementById(loadingId);
    if (loadingElement) loadingElement.remove();

    // Kilidi aç
    inputField.disabled = false;
    if (sendBtn) sendBtn.disabled = false;
    inputField.focus();

    // Cevabı Ekle
    if (aiResponse) {
        addMessageToChat(aiResponse, 'ai-message');

        // Ürün Eşleştirme ve Kart Gösterme (Zeki Tarama)
        const lowerResp = aiResponse.toLowerCase();
        const lowerUser = userMessage.toLowerCase();

        const matchedProducts = FENERIUM_PRODUCTS.filter(p => {
            const name = p.ad.toLowerCase();
            return lowerResp.includes(name) || (lowerUser.includes(p.kategori) && lowerResp.includes(name.split(' ')[0]));
        }).slice(0, 3);

        if (matchedProducts.length > 0) {
            const messagesContainer = document.getElementById('ai-chat-messages');
            matchedProducts.forEach(product => {
                const productCardHtml = `
                    <div class="ai-product-card-small">
                        <img src="${product.resim}" alt="${product.ad}">
                        <div class="info" style="flex:1;">
                            <h5 style="margin:0; font-size:14px;">${product.ad}</h5>
                            <div style="color:#FFCC00; font-weight:bold; margin:5px 0;">${product.fiyat} TL</div>
                            <a href="urunler.html" style="font-size:12px; color:#aaa; text-decoration:none; border:1px solid #444; padding:2px 8px; border-radius:5px;">İncele ➡️</a>
                        </div>
                    </div>
                `;
                messagesContainer.insertAdjacentHTML('beforeend', productCardHtml);
            });
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
    } else {
        addMessageToChat("Bağlantıda bir sorun oldu renktaş, ama Fenerium her zaman burada! Merak ettiğini tekrar sorabilirsin. 💛💙", 'ai-message');
    }
}

function addMessageToChat(text, className) {
    const messagesContainer = document.getElementById('ai-chat-messages');
    const messageId = 'msg-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
    const messageDiv = document.createElement('div');
    messageDiv.id = messageId;
    messageDiv.className = `message ${className}`;
    messageDiv.innerHTML = text; // HTML desteği için innerHTML
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    return messageId;
}

function clearChat() {
    const messagesContainer = document.getElementById('ai-chat-messages');
    if (!messagesContainer) return;
    messagesContainer.innerHTML = `
        <div class="message ai-message">
            Sohbet temizlendi kral! 🧹 <br>
            Sana nasıl yardımcı olabilirim? 💛💙
        </div>
    `;
}

// ------------------------------------------
// CANLI DİNAMİK SAAT (YENİ)
// ------------------------------------------
function injectLiveClock() {
    const headerContainer = document.querySelector('.header .container');
    if (!headerContainer || document.getElementById('liveClock')) return;

    const clockHtml = `
        <div id="liveClock" class="live-clock">
            <span id="clockTime">00:00:00</span>
        </div>
    `;

    // Logodan sonraya ekle (Yer değiştirmek için)
    const logo = headerContainer.querySelector('.logo');
    if (logo) {
        logo.insertAdjacentHTML('afterend', clockHtml);
    } else {
        headerContainer.insertAdjacentHTML('afterbegin', clockHtml);
    }

    // Saati her saniye güncelle
    updateClock();
    setInterval(updateClock, 1000);
}

function updateClock() {
    const clockElement = document.getElementById('clockTime');
    if (!clockElement) return;

    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

function injectSearchBar() {
    const nav = document.querySelector('.nav');
    if (!nav || document.getElementById('siteSearchContainer')) return;

    const searchHtml = `
        <div id="siteSearchContainer" class="search-container">
            <div class="search-wrapper">
                <input type="text" id="siteSearchInput" placeholder="Ürün ara..." onkeyup="handleSiteSearch(event)">
                <button class="search-btn"><span class="search-icon">🔍</span></button>
            </div>
            <div id="searchResults" class="search-results-dropdown"></div>
        </div>
    `;

    // Gece/Gündüz butonundan sonraya ekle (eğer varsa) yoksa en sona ekle
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.insertAdjacentHTML('afterend', searchHtml);
    } else {
        nav.insertAdjacentHTML('beforeend', searchHtml);
    }
}

function handleSiteSearch(event) {
    const query = event.target.value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');

    if (query.length < 2) {
        resultsContainer.innerHTML = '';
        resultsContainer.style.display = 'none';
        return;
    }

    const results = FENERIUM_PRODUCTS.filter(p => p.ad.toLowerCase().includes(query) || p.kategori.includes(query));

    displaySearchResults(results);
}

function displaySearchResults(results) {
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.style.display = 'none';
        return;
    }

    results.forEach(product => {
        const div = document.createElement('div');
        div.className = 'search-result-item';
        div.innerHTML = `
            <img src="${product.resim}" alt="${product.ad}">
            <div>
                <div class="name">${product.ad}</div>
                <div class="price">${product.fiyat} TL</div>
            </div>
        `;
        div.onclick = () => {
            window.location.href = `urunler.html#${product.id}`;
            // Eğer zaten urunler sayfasındaysak scroll tetiklemeli (hash change handles it mostly, but let's be safe)
            if (window.location.pathname.includes('urunler.html')) {
                scrollToProduct(product.id);
            }
        };
        resultsContainer.appendChild(div);
    });

    resultsContainer.style.display = 'block';
}

function scrollToProduct(id) {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.style.border = "4px solid #FFCC00";
        setTimeout(() => el.style.border = "none", 2000);
    }
}


function executeSearch() {
    // Button click logic (optional, mainly handled by keyup/click on result)
}

// Global click to close search results
document.addEventListener('click', function (e) {
    const results = document.getElementById('searchResults');
    const input = document.getElementById('siteSearchInput');
    if (results && e.target !== input && !results.contains(e.target)) {
        results.style.display = 'none';
    }
});


// ------------------------------------------
// GENEL SAYFA FONKSİYONLARI
// ------------------------------------------

// Sayfa göster fonksiyonu
function showSection(section, event) {
    if (event) event.preventDefault();

    if (section === 'contact') {
        const modal = document.getElementById('contact-modal');
        if (modal) {
            modal.style.display = 'flex';
        }
    }
}

// Modal Kapatma
function closeContactModal() {
    document.getElementById('contact-modal').style.display = 'none';
}

// Modal dışına tıklanınca kapat
window.onclick = function (event) {
    const modal = document.getElementById('contact-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// ================================================
//    GECE / GÜNDÜZ MODU SİSTEMİ
// ================================================

function initThemeSystem() {
    // 1. Butonu Ekle
    const nav = document.querySelector('.nav');
    if (nav && !document.getElementById('theme-toggle')) {
        const btn = document.createElement('button');
        btn.id = 'theme-toggle';
        btn.innerHTML = '☀️🌙'; // Güneş/Ay ikonu
        btn.title = "Gece/Gündüz Modu";
        btn.onclick = toggleTheme;
        nav.appendChild(btn);
    }

    // 2. Saat Kontrolü (18:00 - 06:00 arası Gece Modu)
    const saat = new Date().getHours();
    if (saat >= 18 || saat < 6) {
        document.body.classList.add('dark-mode');
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

// Sayfa Yüklendiğinde Başlat
document.addEventListener('DOMContentLoaded', () => {
    initThemeSystem();
    injectFloatingChat();
    injectLiveClock(); // Saati ekle
    injectSearchBar(); // Arama çubuğunu ekle
    injectToastContainer(); // Bildirim kabını ekle
    sepetiGoster();
    sepetSayisiniGuncelle();

    // Slider varsa başlat
    if (document.querySelector('.hero-slider')) {
        startAutoSlide();
    }

    // Hash kontrolü (Urünler sayfasında ID ile gelindiyse)
    if (window.location.hash) {
        const id = window.location.hash.substring(1);
        setTimeout(() => scrollToProduct(id), 500); // Wait for render
    }
});

// ------------------------------------------
// MODERN BİLDİRİM SİSTEMİ (TOAST)
// ------------------------------------------
function injectToastContainer() {
    if (document.getElementById('toast-container')) return;
    const container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
}

function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <span>🛒</span>
        <span>${message}</span>
    `;

    container.appendChild(toast);

    // Animasyonla göster
    setTimeout(() => toast.classList.add('show'), 100);

    // Sepet ikonunu zıplat (varsa)
    const cartIcon = document.querySelector('.cart-link');
    if (cartIcon) {
        cartIcon.classList.add('cart-bounce');
        setTimeout(() => cartIcon.classList.remove('cart-bounce'), 500);
    }

    // 3 saniye sonra kaldır
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

// ------------------------------------------
// SEPET FONKSİYONLARI
// ------------------------------------------

let sepet = JSON.parse(localStorage.getItem('sepet')) || [];

function sepeteEkle(urunId) {
    // Ürünü veritabanından bul
    const urun = FENERIUM_PRODUCTS.find(p => p.id === urunId);
    if (!urun) {
        console.error("Ürün bulunamadı:", urunId);
        return;
    }

    const varMi = sepet.find(item => item.id === urunId);
    if (varMi) {
        varMi.adet++;
    } else {
        sepet.push({ ...urun, adet: 1 });
    }

    localStorage.setItem('sepet', JSON.stringify(sepet));
    sepetSayisiniGuncelle();

    // Modern Bildirim
    showToast(`${urun.ad} sepete eklendi! 💛💙`);
}

function sepetSayisiniGuncelle() {
    const count = sepet.reduce((acc, item) => acc + item.adet, 0);
    const badges = document.querySelectorAll('#cart-count-header, #sepet-toplam-adet');
    badges.forEach(b => { if (b) b.innerText = count; });
}

function sepetiGoster() {
    const container = document.getElementById('sepetUrunler');
    if (!container) return; // Sepet sayfasında değiliz

    if (sepet.length === 0) {
        container.innerHTML = `
            <div class="sepet-bos">
                <h3>Sepetinizde ürün bulunmamaktadır.</h3>
                <a href="urunler.html">Alışverişe Başla</a>
            </div>
        `;
        document.querySelector('.sepet-ozet').style.display = 'none';
        return;
    }

    document.querySelector('.sepet-ozet').style.display = 'block';

    let html = '';
    let toplamTutar = 0;

    sepet.forEach(item => {
        const itemToplam = item.fiyat * item.adet;
        toplamTutar += itemToplam;

        html += `
            <div class="sepet-urun">
                <img src="${item.resim}" alt="${item.ad}" class="sepet-urun-resim">
                <div class="sepet-urun-bilgi">
                    <h4>${item.ad}</h4>
                    <p>${item.kategori}</p>
                </div>
                <div class="sepet-adet-kontrol">
                    <button class="adet-btn" onclick="adetDegistir('${item.id}', -1)">-</button>
                    <span class="adet-goster">${item.adet}</span>
                    <button class="adet-btn" onclick="adetDegistir('${item.id}', 1)">+</button>
                </div>
                <div class="sepet-urun-fiyat">${itemToplam.toFixed(2)} TL</div>
                <button class="sepet-sil-btn" onclick="urunuSil('${item.id}')">🗑️</button>
            </div>
        `;
    });

    container.innerHTML = html;

    // Özeti Güncelle
    const ozetEl = document.getElementById('urun-toplami');
    if (ozetEl) ozetEl.innerText = toplamTutar.toFixed(2) + " TL";

    // İndirim Hesapla
    const indirimOrani = parseFloat(localStorage.getItem('aktifIndirimOrani')) || 0;
    const indirimTutari = (toplamTutar * indirimOrani) / 100;
    const indirimBolumu = document.getElementById('indirimBolumu');
    const indirimTutarEl = document.getElementById('indirimTutari');

    if (indirimOrani > 0 && indirimBolumu && indirimTutarEl) {
        indirimBolumu.style.display = 'flex';
        indirimTutarEl.innerText = `-${indirimTutari.toFixed(2)} ₺`;
        toplamTutar -= indirimTutari;
    } else if (indirimBolumu) {
        indirimBolumu.style.display = 'none';
    }

    const sepetTutarEl = document.getElementById('sepet-tutari');
    if (sepetTutarEl) sepetTutarEl.innerText = toplamTutar.toFixed(2) + " ₺";
}

// İndirim Uygulama
function indirimUygula() {
    const input = document.getElementById('indirimKodu');
    const mesajEl = document.getElementById('indirimMesaj');
    if (!input || !mesajEl) return;

    const kod = input.value.trim().toUpperCase();
    if (!kod) {
        mesajEl.innerText = "Lütfen bir kod giriniz.";
        mesajEl.className = "indirim-mesaj hata";
        return;
    }

    // Kodlar ve oranları
    const gecerliKodlar = {
        'FB10': 10, 'KANARYA15': 15, 'SAMPIYON20': 20, 'FENER25': 25, 'DESTEK5': 5, 'EFESUNE50': 50, 'KADIKOY30': 30, 'FB2024': 20
    };

    if (gecerliKodlar[kod]) {
        localStorage.setItem('aktifIndirimOrani', gecerliKodlar[kod]);
        mesajEl.innerText = `Tebrikler! %${gecerliKodlar[kod]} indirim uygulandı.`;
        mesajEl.className = "indirim-mesaj basarili";
        sepetiGoster(); // Yeniden hesapla
    } else {
        mesajEl.innerText = "Geçersiz indirim kodu.";
        mesajEl.className = "indirim-mesaj hata";
    }
}

function adetDegistir(id, miktar) {
    const item = sepet.find(i => i.id === id);
    if (!item) return;

    item.adet += miktar;
    if (item.adet < 1) {
        urunuSil(id);
        return;
    }

    localStorage.setItem('sepet', JSON.stringify(sepet));
    sepetiGoster();
    sepetSayisiniGuncelle();
}

function urunuSil(id) {
    sepet = sepet.filter(i => i.id !== id);
    localStorage.setItem('sepet', JSON.stringify(sepet));
    sepetiGoster();
    sepetSayisiniGuncelle();
}

// Filtreleme (Ürünler sayfası için)
function filterProducts(category) {
    const cards = document.querySelectorAll('.product-card');
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(btn => btn.classList.remove('active'));
    // Basitçe: event target bulma (parametre ile çağrıldığı için buton referansı yok, manuel class eklemiyorum şimdilik)

    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// ------------------------------------------
// HERO SLIDER LOGIC (RE-IMPLEMENTED)
// ------------------------------------------
let currentSlideIndex = 0;
let autoSlideInterval;

function degistirSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    if (!slides.length) return;

    currentSlideIndex += n;

    if (currentSlideIndex >= slides.length) currentSlideIndex = 0;
    if (currentSlideIndex < 0) currentSlideIndex = slides.length - 1;

    // Aktif Slide Güncelle
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    if (slides[currentSlideIndex]) slides[currentSlideIndex].classList.add('active');
    if (dots[currentSlideIndex]) dots[currentSlideIndex].classList.add('active');
}

function sonrakiSlide() {
    degistirSlide(1);
    resetAutoSlide();
}

function oncekiSlide() {
    degistirSlide(-1);
    resetAutoSlide();
}

function slideGit(n) {
    currentSlideIndex = n;
    degistirSlide(0);
    resetAutoSlide();
}

function startAutoSlide() {
    if (autoSlideInterval) clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
        degistirSlide(1);
    }, 5000); // 5 saniyede bir
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

// ------------------------------------------
// MODERN İNDİRİM ÇARKI LOGIC
// ------------------------------------------
const slices = [
    { label: "%10 İndirim", color: "#003366", text: "#FFCC00", code: "FB10" },
    { label: "%15 İndirim", color: "#FFCC00", text: "#003366", code: "KANARYA15" },
    { label: "%20 İndirim", color: "#003366", text: "#FFCC00", code: "SAMPIYON20" },
    { label: "%25 İndirim", color: "#FFCC00", text: "#003366", code: "FENER25" },
    { label: "%5 İndirim", color: "#003366", text: "#FFCC00", code: "DESTEK5" },
    { label: "Pas", color: "#FFCC00", text: "#003366", code: null },
    { label: "%50 İndirim", color: "#003366", text: "#FFCC00", code: "EFESUNE50" },
    { label: "%30 İndirim", color: "#FFCC00", text: "#003366", code: "KADIKOY30" }
];

let wheelRotation = 0;
let isSpinning = false;

function drawWheel() {
    const canvas = document.getElementById('wheelCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = width / 2 - 10;
    const sliceAngle = (2 * Math.PI) / slices.length;

    ctx.clearRect(0, 0, width, height);

    slices.forEach((slice, i) => {
        const startAngle = i * sliceAngle + wheelRotation;
        const endAngle = startAngle + sliceAngle;

        // Draw Slice
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.fillStyle = slice.color;
        ctx.fill();
        ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw Text
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(startAngle + sliceAngle / 2);
        ctx.textAlign = "right";
        ctx.fillStyle = slice.text;
        ctx.font = "bold 18px Arial";
        ctx.fillText(slice.label, radius - 30, 10);
        ctx.restore();
    });

    // Draw Outer Frame
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = "#FFCC00";
    ctx.lineWidth = 8;
    ctx.stroke();

    // Draw Center Cap
    ctx.beginPath();
    ctx.arc(centerX, centerY, 40, 0, 2 * Math.PI);
    ctx.fillStyle = "#FFCC00";
    ctx.fill();
    ctx.strokeStyle = "#003366";
    ctx.lineWidth = 4;
    ctx.stroke();

    // Logo in center (Simple text for now)
    ctx.fillStyle = "#003366";
    ctx.font = "bold 20px Arial";
    ctx.textAlign = "center";
    ctx.fillText("FB", centerX, centerY + 8);
}

function spinWheel() {
    if (isSpinning) return;
    isSpinning = true;

    const spinBtn = document.getElementById('spinBtn');
    if (spinBtn) spinBtn.disabled = true;

    const extraRounds = 5 + Math.random() * 5;
    const totalRotation = extraRounds * 2 * Math.PI;
    const duration = 5000; // 5 seconds
    const start = performance.now();
    const initialRotation = wheelRotation;

    function animate(time) {
        let elapsed = time - start;
        let progress = Math.min(elapsed / duration, 1);

        // Easing function: easeOutQuart
        let easeProgress = 1 - Math.pow(1 - progress, 4);

        wheelRotation = initialRotation + easeProgress * totalRotation;
        drawWheel();

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            finalizeSpin();
        }
    }

    requestAnimationFrame(animate);
}

function finalizeSpin() {
    isSpinning = false;
    const spinBtn = document.getElementById('spinBtn');
    if (spinBtn) spinBtn.disabled = false;

    // Calculate Winning Slice
    const normalizedRotation = wheelRotation % (2 * Math.PI);
    const sliceAngle = (2 * Math.PI) / slices.length;
    // The pointer is at Math.PI * 1.5 (top), so we adjust
    // Canvas arc starts at 0 (right), rotations go clockwise.
    // Index 0 starts at StartAngle = 0 + wheelRotation.
    // Winning angle at top is 3π/2. 
    // WinningIndex = floor(((3π/2 - wheelRotation) % 2π) / sliceAngle)
    let winningIndex = Math.floor(((1.5 * Math.PI - (wheelRotation % (2 * Math.PI))) + 2 * Math.PI) % (2 * Math.PI) / sliceAngle);
    const win = slices[winningIndex];

    const resultText = document.getElementById('resultText');
    const modal = document.getElementById('resultModal');

    if (resultText && modal) {
        if (win.code) {
            resultText.innerHTML = `Tebrikler Kral! Kazandığın ödül: <strong>${win.label}</strong><br><br>İndirim Kodun: <span style="font-size: 24px; color: #FFCC00; font-weight: bold; display: block; margin: 10px 0;">${win.code}</span><small>(Sepette kullanmayı unutma!)</small>`;
            // Kodu kaydet
            localStorage.setItem('kazanilanKod', win.code);
            localStorage.setItem('indirimOrani', win.label.replace(/[^0-9]/g, ''));
        } else {
            resultText.innerText = "Maalesef bu sefer olmadı renktaş! Tekrar dene. 💛💙";
        }
        modal.style.display = 'flex';
    }
}

function closeModal() {
    const modal = document.getElementById('resultModal');
    if (modal) modal.style.display = 'none';
}

// Sayfa yüklendiğinde çarkı çiz (Eğer çark sayfasındaysak)
window.addEventListener('load', () => {
    if (document.getElementById('wheelCanvas')) {
        drawWheel();
    }
});