document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.skills-tabs .tab');
    const panels = document.querySelectorAll('.skills-panel');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.tab;

        tabs.forEach(t => t.classList.remove('active'));
        panels.forEach(panel => panel.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(`${target}-panel`).classList.add('active');
      });
    });
  });