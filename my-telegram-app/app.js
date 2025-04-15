document.getElementById('btn').addEventListener('click', () => {
    const output = document.getElementById('output');
    
    // Проверяем, запущено ли в Telegram
    if (window.Telegram.WebApp) {
        const user = Telegram.WebApp.initDataUnsafe.user;
        output.innerHTML = `Привет, ${user.first_name}! <br> Твой ID: ${user.id}`;
        
        // Закрыть приложение (если нужно)
        // Telegram.WebApp.close();
    } else {
        output.innerHTML = "Запусти меня в Telegram!";
    }
});