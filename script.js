function filterChannels() {
    const searchValue = document.getElementById('searchBar').value.toLowerCase();
    const cards = document.querySelectorAll('.card');
  
    cards.forEach(card => {
      const channelName = card.getAttribute('data-channel').toLowerCase();
      if (channelName.includes(searchValue)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }