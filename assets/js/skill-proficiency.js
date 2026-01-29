document.addEventListener('DOMContentLoaded', () => {
  const skillCards = document.querySelectorAll('.skill .card');
  
  const getProficiencyLabel = (percentage) => {
    if (percentage >= 90) return 'Expert';
    if (percentage >= 80) return 'Advanced';
    if (percentage >= 65) return 'Intermediate';
    return 'Beginner';
  };
  
  skillCards.forEach(card => {
    const proficiency = parseInt(card.getAttribute('data-proficiency'));
    const progressBar = card.querySelector('.progress-bar');
    const label = card.querySelector('.proficiency-label');
    
    // Set CSS variable for progress bar width
    progressBar.style.setProperty('--proficiency', proficiency + '%');
    
    // Update label if not already set
    if (label && !label.textContent.trim()) {
      label.textContent = getProficiencyLabel(proficiency);
    }
  });
});