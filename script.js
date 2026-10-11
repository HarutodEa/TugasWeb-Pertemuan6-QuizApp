// 1. Data Soal High School DxD (Tingkat Sulit - 50 Soal)
const quizData = [
    { question: 'Siapakah pencipta sistem Bidak Catur Iblis (Evil Pieces)?', options: ['Sirzechs Lucifer', 'Ajuka Beelzebub', 'Serafall Leviathan', 'Falbium Asmodeus'], correct: 1 },
    { question: 'Apa nama asli dari Welsh Dragon, Ddraig?', options: ['Y Ddraig Goch', 'Albion Gwiber', 'Crom Cruach', 'Tannin'], correct: 0 },
    { question: 'Berasal dari mitologi manakah dewa Balor yang menjadi inti dari Sacred Gear Gasper Vladi?', options: ['Yunani', 'Nordik', 'Celtic', 'Mesir'], correct: 2 },
    { question: 'Berapa jumlah awal Longinus (Sacred Gear terkuat) sebelum daftar tersebut diperbarui?', options: ['13', '18', '7', '12'], correct: 0 },
    { question: 'Ibu dari Vali Lucifer adalah keturunan dari ras...', options: ['Malaikat Jatuh', 'Iblis', 'Manusia', 'Yokai'], correct: 2 },
    { question: 'Pemegang peringkat 1 dalam turnamen Rating Game profesional adalah...', options: ['Roygun Belphegor', 'Sairaorg Bael', 'Diehauser Belial', 'Riser Phenex'], correct: 2 },
    { question: 'Karena tidak mewarisi Power of Destruction, Sairaorg Bael bertarung menggunakan teknik energi kehidupan yang disebut...', options: ['Senjutsu', 'Touki', 'Youjutsu', 'Haki'], correct: 1 },
    { question: 'Sacred Gear milik Saji Genshirou mengandung jiwa dari Raja Naga...', options: ['Tiamat', 'Midgardsormr', 'Yu-Long', 'Vritra'], correct: 3 },
    { question: 'Siapakah pemimpin asli dari kelompok teroris Khaos Brigade pada awal pembentukannya?', options: ['Rizevim Livan Lucifer', 'Ophis', 'Cao Cao', 'Shalba Beelzebub'], correct: 1 },
    { question: 'Sword of Betrayal milik Kiba Yuuto merupakan pedang iblis yang menggabungkan atribut...', options: ['Api dan Es', 'Suci dan Iblis', 'Cahaya dan Bayangan', 'Racun dan Angin'], correct: 1 },
    { question: 'Berapa jumlah pecahan pedang suci Excalibur sebelum disatukan kembali?', options: ['5', '7', '9', '12'], correct: 1 },
    { question: 'Teknik pamungkas Rias Gremory yang memadatkan Power of Destruction menjadi bola energi raksasa disebut...', options: ['Crimson Annihilation', 'Extinguished Star', 'Ruin Princess', 'Demonic Burst'], correct: 1 },
    { question: 'Siapakah Malaikat Tertinggi (Seraph) yang memimpin Surga dan Sistem Suci menggantikan Dewa dari Alkitab?', options: ['Gabriel', 'Metatron', 'Michael', 'Uriel'], correct: 2 },
    { question: 'Siapa nama kepala keluarga Klan Phenex yang menjodohkan Rias dengan putranya, Riser?', options: ['Lord Phenex', 'Zeoticus Phenex', 'Runeas Phenex', 'Layla Phenex'], correct: 0 },
    { question: 'Di antara 72 Pilar Iblis, Klan Gremory menempati peringkat ke berapa?', options: ['33', '56', '72', '12'], correct: 1 },
    { question: 'Karakter reinkarnasi Malaikat yang memegang gelar "Joker" milik Surga sekaligus pengguna Longinus Zenith Tempest adalah...', options: ['Irina Shidou', 'Griselda Quarta', 'Dulio Gesualdo', 'Vasco Strada'], correct: 2 },
    { question: 'Julukan naga legendaris Great Red yang tinggal di Dimensional Gap adalah...', options: ['True Dragon', 'Apocalyptic Beast', 'Heavenly Dragon', 'Ouroboros'], correct: 0 },
    { question: 'Apa bayaran mutlak untuk melepaskan segel kekuatan "Juggernaut Drive" yang tidak sempurna?', options: ['Kehilangan ingatan', 'Mengorbankan umur pengguna', 'Menghancurkan Sacred Gear', 'Koma selama setahun'], correct: 1 },
    { question: 'Longinus "Annihilation Maker", yang mampu menciptakan monster dari bayangan, dipegang oleh...', options: ['Leonardo', 'Georg', 'Siegfried', 'Arthur Pendragon'], correct: 0 },
    { question: 'Siapakah Raja Naga (Dragon King) termutasi yang melatih Issei bertahan hidup dan terbang di Underworld?', options: ['Tiamat', 'Tannin', 'Midgardsormr', 'Fafnir'], correct: 1 },
    { question: 'Dewa Nordik jahat yang memicu perang di dunia manusia pada akhir volume 7 adalah...', options: ['Odin', 'Thor', 'Loki', 'Fenrir'], correct: 2 },
    { question: 'Sebelum berevolusi, Sacred Gear milik Asia Argento dikenal dengan nama...', options: ['Twilight Healing', 'Night Reflection', 'Sephiroth Graal', 'Holy Ray'], correct: 0 },
    { question: 'Siapa nama asli dari Koneko Toujou dan kakaknya Kuroka?', options: ['Shirone', 'Suzune', 'Akane', 'Kikyou'], correct: 0 },
    { question: 'Kemampuan "Half Dimension" milik Albion berfungsi untuk...', options: ['Membelah dimensi', 'Mengurangi ukuran target dan kekuatannya menjadi setengah', 'Menciptakan zona kedap udara', 'Berteleportasi antar dua titik'], correct: 1 },
    { question: 'Fraksi Malaikat Jatuh yang didirikan dan dipimpin oleh Azazel bernama...', options: ['Khaos Brigade', 'Grigori', 'Megiddo', 'Nephilim'], correct: 1 },
    { question: 'Iblis muda penerus Klan Astaroth yang menculik Asia Argento adalah...', options: ['Sairaorg Bael', 'Diodora Astaroth', 'Seekvaira Agares', 'Zephyrador Glasya-Labolas'], correct: 1 },
    { question: 'Di masa lalu kuno, siapa yang menghentikan pertarungan abadi antara Ddraig dan Albion?', options: ['Aliansi Dewa Alkitab, Malaikat, dan Iblis', 'Great Red', 'Ophis', 'Raja Iblis Lucifer Pertama'], correct: 0 },
    { question: 'Pedang suci legendaris yang ditarik oleh Arthur Pendragon dan merupakan pedang suci terkuat di dunia adalah...', options: ['Durandal', 'Excalibur', 'Caliburn', 'Ascalon'], correct: 2 },
    { question: 'Anggota Fraksi Pahlawan yang menggunakan Longinus "Dimension Lost" adalah...', options: ['Cao Cao', 'Georg', 'Leonardo', 'Connla'], correct: 1 },
    { question: 'Nama ibu kandung Rias Gremory sebelum menikah adalah...', options: ['Venelana Bael', 'Misla Bael', 'Cleria Belial', 'Shuri Himejima'], correct: 0 },
    { question: 'Bidak (Evil Piece) jenis apa yang digunakan Riser untuk mereinkarnasi adiknya, Ravel Phenex?', options: ['Knight', 'Rook', 'Bishop', 'Pawn'], correct: 2 },
    { question: 'Siapakah dewa kera sakti yang merupakan generasi pertama dari Sun Wukong dan sekutu faksi pimpinan Azazel?', options: ['Biksu Tong', 'Kuroka', 'Sun Wukong', 'Yu-Long'], correct: 2 },
    { question: 'Ratu (Queen) dari tim Rating Game Sairaorg Bael adalah...', options: ['Kuisha Abaddon', 'Coriana Andrealphus', 'Seekvaira Agares', 'Ladora Bune'], correct: 0 },
    { question: 'Sacred Gear milik Gasper Vladi, Forbidden Balor View, memiliki kemampuan utama untuk...', options: ['Menghentikan waktu di sekitarnya', 'Membaca pikiran', 'Menyerap energi kehidupan', 'Menciptakan ilusi absolut'], correct: 0 },
    { question: 'Berapa pasang sayap hitam yang dimiliki oleh Gubernur Jenderal Azazel?', options: ['6 pasang (12 sayap)', '4 pasang (8 sayap)', '8 pasang (16 sayap)', '3 pasang (6 sayap)'], correct: 0 },
    { question: 'Mantra "I, who am about to awaken..." digunakan Issei untuk mengaktifkan mode...', options: ['Balance Breaker', 'Juggernaut Drive', 'Diabolos Dragon', 'Illegal Move Triaina'], correct: 1 },
    { question: 'Kakek buyut dari Vali Lucifer adalah...', options: ['Rizevim Livan Lucifer', 'Azazel', 'Raja Iblis Lucifer Asli', 'Samael'], correct: 2 },
    { question: 'Wujud asli Ophis sang Dewa Naga melambangkan simbol kosmik apa?', options: ['Ouroboros (Naga memakan ekornya)', 'Yggdrasil', 'Leviathan', 'Pentagram'], correct: 0 },
    { question: 'Sebelum menjadi reinkarnasi Malaikat, Irina Shidou bertarung menggunakan senjata...', options: ['Excalibur Mimic', 'Excalibur Destruction', 'Durandal', 'Caliburn'], correct: 0 },
    { question: 'Naga Jahat (Evil Dragon) terkuat yang dijuluki Crescent Circle Dragon adalah...', options: ['Grendel', 'Ladon', 'Nidhogg', 'Crom Cruach'], correct: 3 },
    { question: 'Pada tahap awal, Boosted Gear milik Issei menggandakan kekuatannya setiap...', options: ['5 detik', '10 detik', '30 detik', '1 menit'], correct: 1 },
    { question: 'Spesialisasi dari klan Sitri (klan Sona) dalam pertempuran adalah sihir berbasis...', options: ['Air', 'Api', 'Petir', 'Angin'], correct: 0 },
    { question: 'Karakter naga yang obsesif dan membantu Vali membunuh Rizevim Livan Lucifer demi membalas dendam untuk Asia adalah...', options: ['Fafnir', 'Midgardsormr', 'Tiamat', 'Tannin'], correct: 0 },
    { question: 'Gasper Vladi menempati posisi Bidak Catur (Evil Piece) Rias Gremory sebagai...', options: ['Mutated Rook', 'Mutated Pawn', 'Mutated Bishop', 'Knight'], correct: 2 },
    { question: 'Mitologi asal Ddraig sang "Welsh Dragon" di dunia nyata berasal dari negara...', options: ['Inggris', 'Wales', 'Irlandia', 'Skotlandia'], correct: 1 },
    { question: 'Apa nama kemampuan Issei yang memungkinkannya menembus berbagai sihir pertahanan lawan dan barrier?', options: ['Dress Break', 'Solid Impact', 'Penetrate', 'Divide'], correct: 2 },
    { question: 'Gelar pahlawan resmi yang diberikan Underworld kepada Issei Hyoudou setelah ia mencapai kelas Ultimate adalah...', options: ['Red Dragon Emperor', 'Oppai Dragon', 'Hero of Gremory', 'The Harem King'], correct: 1 },
    { question: 'Longinus yang digunakan oleh Valerie Tepes, yang dapat membangkitkan atau mengendalikan jiwa adalah...', options: ['Sephiroth Graal', 'Incinerate Anthem', 'Absolute Demise', 'Innovate Clear'], correct: 0 },
    { question: 'Nama pedang yang diberikan Archangel Michael kepada Issei Hyoudou untuk mengalahkan naga adalah...', options: ['Caladbolg', 'Ascalon', 'Arondight', 'Clarent'], correct: 1 },
    { question: 'Siapa nama lengkap pemegang Longinus True Longinus yang merupakan keturunan jenderal militer legendaris Tiongkok?', options: ['Sun Jian', 'Lu Bu', 'Cao Cao', 'Guan Yu'], correct: 2 }
];

let currentQuestion = 0;
let score = 0;
let timerInterval;
let timeLeft = 15;

// DOM Selection
const views = { home: document.querySelector('#home-view'), quiz: document.querySelector('#quiz-view'), result: document.querySelector('#result-view'), history: document.querySelector('#history-view') };
const elements = { question: document.querySelector('#question'), options: document.querySelector('#options'), nextBtn: document.querySelector('#nextBtn'), progress: document.querySelector('#progress'), historyList: document.querySelector('#historyList'), timeDisplay: document.querySelector('#time'), timerContainer: document.querySelector('#timer-display') };

// Fungsi Navigasi
function switchView(viewName) {
    Object.values(views).forEach(view => view.classList.add('hidden'));
    views[viewName].classList.remove('hidden');
}

// Algoritma Fisher-Yates untuk mengacak urutan soal
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Mulai Kuis
document.querySelector('#startBtn').addEventListener('click', () => {
    shuffleArray(quizData); // ACAK SOAL SETIAP MULAI KUIS
    currentQuestion = 0;
    score = 0;
    switchView('quiz');
    renderQuestion();
});

// Render Soal & Start Timer
function renderQuestion() {
    const q = quizData[currentQuestion];
    elements.progress.textContent = `Soal ${currentQuestion + 1}/${quizData.length}`;
    elements.question.textContent = q.question; 
    elements.options.innerHTML = ''; 
    elements.nextBtn.classList.add('hidden');
    
    // Render opsi
    q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.classList.add('option-btn');
        btn.dataset.index = index;
        elements.options.append(btn);
    });

    // Reset & Mulai Timer
    clearInterval(timerInterval);
    timeLeft = 15;
    elements.timeDisplay.textContent = timeLeft;
    elements.timeDisplay.style.color = '#e74c3c';

    timerInterval = setInterval(() => {
        timeLeft--;
        elements.timeDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeout();
        }
    }, 1000);
}

// Fungsi Jika Waktu Habis
function handleTimeout() {
    const correctIndex = quizData[currentQuestion].correct;
    elements.options.querySelector(`[data-index="${correctIndex}"]`).classList.add('correct');
    
    const allBtns = elements.options.querySelectorAll('.option-btn');
    allBtns.forEach(btn => btn.style.pointerEvents = 'none');
    
    elements.nextBtn.classList.remove('hidden');
}

// Event Delegation untuk Jawaban
elements.options.addEventListener('click', (e) => {
    const btn = e.target.closest('.option-btn');
    if (!btn || elements.options.querySelector('.correct')) return; 

    clearInterval(timerInterval); // Hentikan timer

    const selectedIndex = parseInt(btn.dataset.index);
    const correctIndex = quizData[currentQuestion].correct;

    if (selectedIndex === correctIndex) {
        btn.classList.add('correct');
        score++;
    } else {
        btn.classList.add('wrong');
        elements.options.querySelector(`[data-index="${correctIndex}"]`).classList.add('correct');
    }

    const allBtns = elements.options.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.style.pointerEvents = 'none');

    elements.nextBtn.classList.remove('hidden');
});

// Navigasi Next Soal
elements.nextBtn.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) renderQuestion();
    else showResult();
});

// Tampilkan Hasil & Simpan Skor
function showResult() {
    switchView('result');
    const total = quizData.length;
    const percentage = Math.round((score / total) * 100);
    
    document.querySelector('#score').textContent = `${score} / ${total}`;
    document.querySelector('#accuracy').textContent = percentage;

    const historyData = JSON.parse(localStorage.getItem('animangaQuizHistory')) || [];
    const dateObj = new Date();
    const dateStr = `${dateObj.getDate()}/${dateObj.getMonth()+1}/${dateObj.getFullYear()} ${dateObj.getHours()}:${String(dateObj.getMinutes()).padStart(2, '0')}`;

    historyData.push({ date: dateStr, score: score, percentage: percentage });
    localStorage.setItem('animangaQuizHistory', JSON.stringify(historyData));
}

// Tombol Navigasi Home & History
document.querySelector('#backHomeBtn').addEventListener('click', () => switchView('home'));
document.querySelector('#historyBtn').addEventListener('click', () => {
    switchView('history');
    const historyData = JSON.parse(localStorage.getItem('animangaQuizHistory')) || [];
    elements.historyList.innerHTML = historyData.length === 0 ? '<li>Belum ada riwayat permainan.</li>' : '';
    historyData.slice().reverse().forEach((game) => {
        const li = document.createElement('li');
        li.innerHTML = `<div><div class="history-score">Skor: ${game.score}/${quizData.length} (${game.percentage}%)</div><div class="history-date">${game.date}</div></div>`;
        elements.historyList.append(li);
    });
});
document.querySelector('#closeHistoryBtn').addEventListener('click', () => switchView('home'));