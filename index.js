url = "https://www.themealdb.com/api.php?ref=apilist.fun";

// var data = document.getElementById("data").value;

async function getData() {
    data = document.getElementById("data").value;

    var data2 = await fetch(`https: //www.themealdb.com/api.php?ref=apilist.fun`);
}

function appendData(res) {
    var res = res.json();

    data = data.append();
}