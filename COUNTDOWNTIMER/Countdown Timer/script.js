const targetDate = new Date(prompt("Enter your Date and time in this format 'yyyy-mm-ddThh:mm:ss' ")).getTime();

const interval = setInterval(() => {
        
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        const days_remaining = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours_remaining = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes_remaining = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds_remaining = Math.floor((distance % (1000 * 60)) / 1000);
   
        document.getElementById('count').innerHTML = `${days_remaining}d ${hours_remaining}h ${minutes_remaining}m ${seconds_remaining}s`;

   
        if (distance < 0) {
            clearInterval(interval);
            document.getElementById('count').innerHTML = 'Countdown expired!';
            alert('Countdown expired!')
        }
    }, 1000);