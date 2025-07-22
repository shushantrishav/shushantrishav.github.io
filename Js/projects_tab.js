document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.projects-tabs .tab');
  const panels = document.querySelectorAll('.projects-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      // Remove active class from all tabs and panels
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(panel => panel.classList.remove('active'));

      // Add active class to clicked tab and corresponding panel
      tab.classList.add('active');
      const targetPanel = document.getElementById(`${target}-panel`);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
});
