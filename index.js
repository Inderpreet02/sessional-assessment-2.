function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // document.getElementById("demo").src = JSON.parse(this.responseccText);
            // localStorage.setItem('data', JSON.parse(this.responseText));
            // console.log(this.responseText);
            const users = [];
            const data = JSON.parse(this.responseText);

            data.forEach(element => {
                if(!users.includes(element.albumId)){
                    users.push(element.albumId);
                }
                // console.log(element);
            });

            console.log(users);
        }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09", true);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send();
}


loadDoc();