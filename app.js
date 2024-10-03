// Получаем доступ к Telegram API
const tg = window.Telegram.WebApp;

// Функция для отправки PDF-файла
async function sendPDF(filePath) {
    const chatId = tg.initDataUnsafe.user.id; // Получаем ID пользователя
    const token = '6520991949:AAFlFvJ-MFi3bDl5ecJQa-qnaIg35V7XKx0'; // Замените на ваш токен бота

    const url = https://api.telegram.org/bot${token}/sendDocument;
    
    const formData = new FormData();
    formData.append('chat_id', chatId);
    formData.append('document', filePath);

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            alert('PDF файл успешно отправлен!');
        } else {
            alert('Ошибка при отправке PDF: ' + response.statusText);
        }
    } catch (error) {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при отправке PDF.');
    }
}

// Обработчики событий для кнопок
document.getElementById('Kp').onclick = () => sendPDF('Б1.В.01 Конституционное право зарубежных стран (РПД) (1).pdf');
document.getElementById('Mp1').onclick = () => sendPDF('Б1.В.10 Муниципальное право (РПД) (1).pdf');
document.getElementById('Ps1').onclick = () => sendPDF('Б1.В.11 Психология проф. деятельности юриста (РПД) (1).pdf');
document.getElementById('Рим1').onclick = () => sendPDF('Б1.В.15 Римское право (РПД) (1).pdf');
document.getElementById('Konst1').onclick = () => sendPDF('Б1.О.08 Конституционное право (РПД) (1).pdf');
document.getElementById('Ad1').onclick = () => sendPDF('Б1.О.09 Административное право (РПД) (1).pdf');
document.getElementById('Gp1').onclick = () => sendPDF('Б1.О.10.01 Гражданское право (общая часть) (РПД) (1).pdf');
document.getElementById('Gpo1').onclick = () => sendPDF('Б1.О.10.02 Гражданское право (особенная часть) (РПД) (1).pdf');
document.getElementById('Gpp1').onclick = () => sendPDF('Б1.О.11 Гражданский процесс (РПД) (1).pdf');
document.getElementById('Tp1').onclick = () => sendPDF('Б1.О.13 Трудовое право (РПД).pdf');
document.getElementById('Yp1').onclick = () => sendPDF('Б1.О.14.01 Уголовное право (общая часть) (РПД) (1).pdf');
document.getElementById('Ypp1').onclick = () => sendPDF('Б1.О.15 Уголовный процесс (РПД) (1).pdf');
document.getElementById('Pso1').onclick = () => sendPDF('Б1.О.25 Право социального обеспечения (РПД) (1).pdf');
document.getElementById('Sp1').onclick = () => sendPDF('Б1.О.26 Семейное право (РПД) (1).pdf');
document.getElementById('Infa1').onclick = () => sendPDF('Б1.О.27 Информационные технологии в юридической деятельности (РПД) (1).pdf');
document.getElementById('Log1').onclick = () => sendPDF('Б1.О.30 Логика (РПД).pdf');
document.getElementById('Yd1').onclick = () => sendPDF('Б1.О.31 Юридическое документоведение (РПД) (1).pdf');
