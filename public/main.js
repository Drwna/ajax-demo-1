getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/style.css');
    request.onload = () => {
        console.log(request.response)
        const style = document.createElement('style')
        style.innerHTML = request.response
        document.head.appendChild(style)
    }
    request.onerror = () => {}
    request.send()
}

getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/2.js');
    request.onload = () => {
        console.log(request.response)
        const script = document.createElement('script');
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = () => {}
    request.send()
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '3.html');
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                console.log(request.status)
                console.log(request.response);
                const div = document.createElement('div');
                div.innerHTML = request.response;
                document.body.appendChild(div);
            } else {
                alert('false');
            }
        }
    }
    request.send();
}

getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '4.xml');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            // console.log(request.responseXML)
            // console.log(request.response)
            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent;
            console.log(text.trim());
        }
    }
    request.send();
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/5.json');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response)
            const object = JSON.parse(request.response);
            console.log(object);
            myName.textContent = object.name;
        }
    }
    request.send()
}

let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', `/page${n + 1}`);
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response);
            array.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item.id;
                xxx.appendChild(li)[n];
            });
            n += 1;
        }
    }
    request.send()
}