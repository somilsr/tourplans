// assets/js/main.js - Shared functionality
function toggleDay(dayId) {
    const dayContent = document.getElementById(dayId);
    const expandIcon = dayContent.previousElementSibling.querySelector('.expand-icon');
    
    dayContent.classList.toggle('active');
    
    if (dayContent.classList.contains('active')) {
        expandIcon.textContent = '−';
        expandIcon.style.transform = 'rotate(180deg)';
    } else {
        expandIcon.textContent = '+';
        expandIcon.style.transform = 'rotate(0deg)';
    }
}

// Initialize first day as expanded
document.addEventListener('DOMContentLoaded', function() {
    // Expand first day by default
    const firstDay = document.querySelector('.day-content');
    if (firstDay) {
        firstDay.classList.add('active');
        const firstExpandIcon = firstDay.previousElementSibling.querySelector('.expand-icon');
        if (firstExpandIcon) {
            firstExpandIcon.textContent = '−';
        }
    }
});