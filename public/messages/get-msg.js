(async () => {
    const response = await fetch('/get_msg');
    const data = await response.json();
    data.sort((a, b) => ( a.time < b.time ) ? 1 : ( a.time > b.time ) ? -1 : 0 );
    for ( let i = 0; i < data.length; i++ ) {
        const container = document.createElement('div');
        container.id = `container${i}`;
        const nameEl = document.createElement('h5');
        nameEl.innerText = data[i].name;
        nameEl.id = 'name';
        container.append(nameEl);
        const timeEl = document.createElement('h6');
        timeEl.id = 'time';
        const date = new Date(data[i].time);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        timeEl.innerText = ` - ${hours}:${minutes}`;
        container.append(timeEl);
        const content = document.createElement('p');
        content.id = 'content';
        content.innerText = data[i].content;
        container.append(content);
        document.body.append(container);
    }
})();