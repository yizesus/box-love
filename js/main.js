$(document).ready(function() {
    $('#titleWeb').text(CONFIG.titleWeb)
    $('body').css('background-image', 'url(./images/' + CONFIG.background + ')')

    for (let i = 1; i <= 6; i++)
        $('#min' + i).css('background-image', 'url(./images/' + CONFIG['min' + i] + ')')

    for (let i = 1; i <= 6; i++)
        $('#max' + i).css('background-image', 'url(./images/' + CONFIG['max' + i] + ')')
    $('body').one('click', function () {
        const player = document.getElementById('player');
        if (player) {
            player.play().catch(error => {
                console.log('Autoplay blocked or error playing audio:', error);
            });
        }
    });
})

function updateTimeTogether() {
    const startDate = new Date('2025-02-01T00:00:00'); // Start date: Feb 1, 2025
    const now = new Date();
    const diff = now - startDate;

    if (diff < 0) {
        $('#timeTogether').text('Chúng ta vẫn chưa bắt đầu hành trình từ 1 tháng 2.');
        return;
    }

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    const displayDays = days;
    const displayHours = hours % 24;
    const displayMinutes = minutes % 60;
    const displaySeconds = seconds % 60;

    $('#timeTogether').text(
        `mq iu mia được: ${displayDays} ngày, ${displayHours} giờ, ${displayMinutes} phút, ${displaySeconds} giây ❤️`
    );
}

// Update every second
setInterval(updateTimeTogether, 1000);
updateTimeTogether(); // Initial call
