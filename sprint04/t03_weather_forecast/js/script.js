fetch('https://api.openweathermap.org/data/2.5/onecall?lat=50.45&lon=30.51&appid=a8a1eca3b763f93886863210b1bb4f57')
    .then(function (resp) {return resp.json()})
    .then(function (data) {
        console.log(data);
        document.querySelector('.city-name').textContent = data.timezone;
        let wrapper = document.querySelector('.wrapper');
        for (i = 0; i < data.daily.length - 1; i++) {
            wrapper.innerHTML += `
            <div class="content">
            <h3 class="date">${dateNow(data.daily[i].dt)}</h3>
            <br>
            <img src="https://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}@2x.png" alt="#">
            <p>${(Math.round(data.daily[i].temp.day) - 273)}\&deg;</p>
            <p>${data.daily[i].weather[0]['main']}</p>
            </div>`;
            
        }
    })
    .catch((err) => {
        console.log(err);
    });

    function dateNow (item) {
        let date = new Date(+item * 1000);
        let options = {
            month: 'numeric',
            day: 'numeric'
        };
        return date.toLocaleString('ru', options);
    }
