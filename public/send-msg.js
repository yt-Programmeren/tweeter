const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const contentInput = document.querySelector('#content');

form.addEventListener('submit', async e => {
    e.preventDefault();
    if ( contentInput.value && nameInput.value ) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content: contentInput.value, name: nameInput.value, time: new Date().getTime() })
        };
        contentInput.value = '';
        nameInput.value = '';
        await fetch('/send_msg', options);

    } else {
        if ( !contentInput.value ) alert('Add content into content field!');
        if ( !nameInput.value ) alert('Add a name into name field!');
    }
})