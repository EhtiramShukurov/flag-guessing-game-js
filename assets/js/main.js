const main_array = [];
var copy_array = main_array;

var timer;
var timer_el = document.getElementById("timer");
var sec;
var score = document.getElementById("score")
var scoree = 0;
var main = document.getElementById('main');
var random_index;
var check;

fetch('https://restcountries.com/v3.1/all')
    .then(res => { return res.json() })
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            main_array.push([data[i].name.common, data[i].flags.svg]);
        }
    });

function Start() {
    scoree = 0;
    main.innerHTML = []
    var random_index = Math.floor(Math.random() * copy_array.length)
    score.innerHTML = `score:0`
    main.innerHTML = `
    <div style="margin-top:50px;" class="container">
    <img style ="width:450px!important; height 500px!important;" src="${copy_array[random_index][1]}"
        class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image"
        loading="lazy">
</div>
<div class="font-1 d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
<input style=" border-radius:10px;border-color:red; width:300px;" id="myin" type="text">
<button type="button" onclick="Check()" class="btn btn-outline-primary btn-lg px-4">Check</button>

</div>
`
    check = copy_array[random_index][0]
    copy_array.splice(random_index, 1)
    Timer()
}

function newFlag() {
    main.innerHTML = []
    var random_index = Math.floor(Math.random() * copy_array.length)
    main.innerHTML = `
    
    <div style="margin-top:50px;" class="container">
    <img style ="width:450px!important; height 500px!important;"  src="${copy_array[random_index][1]}"
        class=" border rounded-3 shadow-lg mb-4" alt="Example image" 
        loading="lazy">
</div>
<div class="font-1 d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
<input style="border-radius:10px;border-color:red; width:300px;" id="myin" type="text">
<button type="button" onclick="Check()" class=" btn btn-outline-primary btn-lg px-4">Check</button>

</div>
`
    check = copy_array[random_index][0]
    copy_array.splice(random_index, 1)
}
function Timer() {
    var sec = 59;
    timer = setInterval(() => {
        timer_el.innerHTML = "Time: 00:" + sec;
        sec--;
        if(sec<= 10)
        {
            timer_el.innerHTML = "Time: 00:0" + sec;
        }
        if (sec < 0) {
            clearInterval(timer);
            timer_el.innerHTML = [];
            score.innerHTML=[];
            main.innerHTML = `<div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <div style= "font-size:40px;" class="font-1 text-center" id="score">
            <div class="mt-5">Your score:${scoree}
            </div> 
            <p style="margin-left:-10px;" class="mt-3 mb-2 lead">Time up!</p>
            <br>
            <button type="button" onclick="Start()" class="btn btn-primary btn-lg px-4 me-sm-3">Retry</button> 
            </div>

        </div>`
        }
    }, 1000)
}





function Check() {
    var myin = document.getElementById("myin").value.toLowerCase();
    if (myin == check.toLowerCase()) {
        scoree++;
        score.innerHTML = "Score:" + scoree;
    }
    newFlag();
}