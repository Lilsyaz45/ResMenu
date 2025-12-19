document.addEventListener('DOMContentLoaded', function() {
    const missionCard = document.querySelector('.mission-card');
    
    if (missionCard) {
        missionCard.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12)';
            this.style.transition = 'all 0.3s ease';
        });
        
        missionCard.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.08)';
        });
    }
    
    const missionTitle = document.querySelector('.mission-title');
    const missionText = document.querySelector('.mission-text');
    
    if (missionText) {
        const originalText = missionText.textContent;
        missionText.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                missionText.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 30);
            }
        };
        setTimeout(typeWriter, 1500);
    }
});
