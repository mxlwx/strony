function updateDate() {
    const currentDate = new Date();
    
    document.getElementById('rok').textContent = currentDate.getFullYear();
    
    const miesiace = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];
    document.getElementById('msc').textContent = miesiace[currentDate.getMonth()];
    
    document.getElementById('dzien').textContent = currentDate.getDate();
    
    const daysOfWeek = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
    document.getElementById('tyg').textContent = daysOfWeek[currentDate.getDay()];
    
    document.getElementById('godz').textContent = currentDate.toLocaleTimeString();
}

setInterval(updateDate, 1000);

updateDate();