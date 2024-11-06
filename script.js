// script.js

// Toggle play/pause for the music card
function togglePlayPause() {
    const button = document.getElementById('playPauseButton');
    if (button.innerText === 'Play') {
      button.innerText = 'Pause';
    } else {
      button.innerText = 'Play';
    }
  }
  
  // Rating system
  function rate(stars) {
    const ratingOutput = document.getElementById('ratingOutput');
    ratingOutput.innerText = `You rated us ${stars} stars!`;
  }
  
  // Adjust volume control on slider click
  function adjustVolume(event) {
    const slider = document.querySelector('.slider');
    const progress = document.getElementById('volumeProgress');
    const sliderWidth = slider.offsetWidth;
    const clickX = event.offsetX;
    const newWidth = (clickX / sliderWidth) * 100;
    progress.style.width = `${newWidth}%`;
  }
  