// вывода приветсвенного уведомления.
var hidden = false
function showStartNotification() {
    iziToast.show({
        title: 'Привет! Это общий чат, присоединяйся к общению!',
        position: 'bottomRight',
        backgroundColor: '#333',
        titleColor: '#D4F0F4',
        titleSize: '12px',
        messageColor: '#D4F0F4',
        progressBarColor: '#FF91A4',
        balloon: true,
        closeOnClick: false,
        timeout: false,
        transitionIn: 'bounceInLeft',
        messageLineHeight: '10px',
        messageTextAlign: 'justify',
        messageTextIndent: '0',
        messageWordSpacing: '30px',
        buttons: [
            [
                '<button>Cкрывать/Показывать</button>',
                function (instance, toast) {
                    if (hidden){
                        hidden = false
                    }
                    else {
                        hidden = true
                    }
                }
            ],
        ]
    });
}

const fakeUserNames = [
    "USER_24012312",
    "derevop",
    "USER_64345954",
    "xX_ProZombieSlayer2007_Xx",
    "Одинокие женщины в 300м от вас",
    "Aedilay",
    "Мама",
    "STIV YIS",
    "фанат горохового супа",
    "Роман Макаревич",
    "我正在寻找建",
    "你们有",
    "Настя вуз"
];

const fakeMessages = ["Привет, ребята! Кто-то сегодня строит что-то крутое?",
    "Хай! Подскажите а зачем нужен блок земли...? 🤔",
    "Ищу напарника для игры на хардкоре. Кто в деле?",
    "Привет, друзья! У кого какие стройки сейчас? 🏠",
    "продам гараж 8929227677",
    "Здесь есть кто из России? Давайте играть",
    "А ты красавчик! познакомимся?",
    "го вирт",
    "Создали сервер для креативных строителей! Заходите, мы ждем!",
    "Как вам новый апдейт? Лично я в восторге от новых возможностей",
    "Ищу компанию для дружеской гонки на лодках.",
    "Hey everyone! What's your favorite biome? 🌳",
    "大家好！我正在寻找建筑灵感。你们有什么建议吗？🏰",
    "Привет, я еще новичок в мире майна, как быстро развиться в игре? 🚀",
    "Всем добра! Кто-нибудь тут занимается косплеем по Minecraft? 🎭",
    "Есть кто из питера? Го гулять!",
    "Эй, кто-то хочет создать базу?💥",
    "Покажи свою базу!",
    "Здесь кто-нибудь играет с шейдерами? Поделитесь красивыми! ✨",
    "Oh no, I fell in lava😭💔",
    "Ты просто полный нуб",
];


function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// показ случайного уведомления (имитация чата либо спам-рекламы)
function showRandomNotification() {
    const randomUserName = getRandomElement(fakeUserNames);
    const randomMessage = getRandomElement(fakeMessages);

    if (!hidden) {
        iziToast.show({
            title: `Сообщение от: ${randomUserName}`,
            message: randomMessage,
            position: 'bottomRight',
            backgroundColor: '#333',
            titleColor: '#4CAF50',
            titleSize: '12px',
            messageColor: '#D4F0F4',
            progressBarColor: '#FF91A4',
            balloon: true,
            closeOnClick: true,
            timeout: 6000,
            transitionIn: 'bounceInLeft',
            messageLineHeight: '10px',
            messageTextAlign: 'justify',
            messageTextIndent: '0',
            messageWordSpacing: '30px'
        });
    }

    const randomTimeout = Math.random() * 1000 + 500;
    setTimeout(showRandomNotification, randomTimeout);
}

document.addEventListener("DOMContentLoaded", function(event) {
    showStartNotification(); // кидаем стартовую нотификацию
    showRandomNotification(); // запускаем поток случайных
});
