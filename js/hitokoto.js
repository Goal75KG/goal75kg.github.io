fetch('https://v1.hitokoto.cn/?c=k')
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        var hitokoto = document.getElementById('quote')
        hitokoto.innerText = data.hitokoto;
    })
    .catch(function (err) {
        console.error(err);
    })



