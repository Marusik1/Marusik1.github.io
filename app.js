document.getElementById('Рим1').addEventListener('click', function() {
    // Укажите URL вашего файла
    const fileUrl = 'https://1drv.ms/b/c/8ed842faa38240eb/EUJ9pujqBPhPjrHucvMesXYBUBOd9HltQtC-tI60s9HBDA?e=jgLTRu'; // Замените на ваш файл

    // Используем sendData для отправки файла
    Telegram.WebApp.sendData(JSON.stringify({ action: 'sendFile', url: fileUrl }));
});