(function () {
  function readState() {
    return {
      username: localStorage.getItem('username') || 'Мандрівник',
      origin: localStorage.getItem('origin') || 'Невідомі землі',
      progress: Number(localStorage.getItem('progress') || 0),
      items: JSON.parse(localStorage.getItem('items') || '[]')
    };
  }

  function saveProgress(progress) {
    const safeProgress = Math.max(0, Math.min(100, Number(progress) || 0));
    localStorage.setItem('progress', safeProgress);
    return safeProgress;
  }

  function addItem(itemName) {
    const state = readState();
    if (!state.items.includes(itemName)) {
      state.items.push(itemName);
      localStorage.setItem('items', JSON.stringify(state.items));
    }
  }

  function renderHUD() {
    const hud = document.getElementById('game-hud');
    if (!hud) {
      return;
    }

    const state = readState();
    hud.innerHTML = `
      <div class="hud-top">
        <strong>${state.username}</strong> з краю <strong>${state.origin}</strong>
      </div>
      <div class="hud-progress-wrap">
        <div class="hud-progress-bar" style="width:${state.progress}%"></div>
      </div>
      <div class="hud-bottom">
        Прогрес: ${state.progress}% • Артефакти: ${state.items.length ? state.items.join(', ') : 'немає'}
      </div>
    `;
  }

  function resetAdventure() {
    localStorage.removeItem('progress');
    localStorage.removeItem('items');
  }

  window.GameState = {
    readState,
    saveProgress,
    addItem,
    renderHUD,
    resetAdventure
  };
})();
