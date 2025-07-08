(function() {
    // Self-contained widget code
    const css = `/* Widget styles */`;
    const html = `/* Widget HTML */`;
    
    // Inject styles and HTML
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
    
    const container = document.createElement('div');
    container.innerHTML = html;
    document.body.appendChild(container);
    
    // Initialize widget
    new RaffleWidget();
})();