function alternateTitles() {
    const currentTitle = document.title;
    if (currentTitle === 'GUILHERME') {
        document.title = 'GETTING YOU VIEWS';
    } else if (currentTitle === 'GETTING YOU VIEWS') {
        document.title = 'GUILHERME';
    }
};
setInterval(alternateTitles, 1500);