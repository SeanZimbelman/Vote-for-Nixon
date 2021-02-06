let candidate = ["Nixon", "GodZilla", "Discord"];
let Votes = [];
for (i = 0; i < candidate.length; i++) {
    let voteBox = document.createElement("div");
    voteBox.id = `${candidate[i]}`;
    voteBox.classList.add(`candidate`);
    voteBox.addEventListener("mouseout", lessrigged);
    voteBox.addEventListener("contextmenu", pop);
    votingBox.appendChild(voteBox);

    let img = document.createElement("img");
    img.src = `${candidate[i]}.png`;
    img.id = `${candidate[i]}`;
    img.addEventListener("mousemove", superrigged);
    img.addEventListener("click", remove);
    voteBox.appendChild(img);

    let name = document.createElement("div");
    name.textContent = `${candidate[i]}`;
    name.classList.add(`name`);
    img.addEventListener("load", slowlyrigged);
    voteBox.appendChild(name);

    let vote = document.createElement("div");
    vote.id = `${i}`;
    vote.classList.add(`vote${i % 2}`);
    vote.textContent = `Vote`;
    vote.addEventListener("click", notveryrigged);
    vote.addEventListener("mouseover", rigged);
    voteBox.appendChild(vote);
    Votes.push(0);

    let number = document.createElement("div");
    number.id = `${candidate[i]}vote`;
    number.classList.add(`display`);
    number.textContent = `0`;
    voteBox.appendChild(number);

    if (i != 3) {
        continue;
    }
}

function displayVotes() {
    for (let i = 0; i < candidate.length; i++) {
        let temp = `${candidate[i]}vote`;
        document.getElementById(temp).textContent = `${candidate[i]}: ${Votes[i]}`;
    }
}

displayVotes();

function remove () {
    this.removeEventListener("mousemove", superrigged);
}

function pop() {
    if (this.id != candidate[0]) {
        this.remove();
        let place = 0;
        for (let i = 0; i <= candidate.length; i++) {
            if (candidate[i] == this.id) {
                place = i;
            }
        }
        candidate.splice(place, 1);
    }
}

function rigged() {
    for (let i = 1; i < candidate.length; i++) {
        Votes[i]--;
    }
    displayVotes();
}

function lessrigged() {
    Votes[0]++;
    displayVotes();
}

function notveryrigged() {
    if (this.id != 0) {
        Votes[this.id]++;
    }
    Votes[0]++;
    displayVotes();
}

function superrigged() {
    for (let i = 0; i < candidate.length; i++) {
        Votes[0] += Math.abs(Votes[i]);
    }
    displayVotes();
}

function slowlyrigged() {
    setInterval(lessrigged, 10000);
}

worthless.onmousemove = function (event) {
    //find the field cordnates
    let worthlessCords = this.getBoundingClientRect();

    let nopeCords = {
        top: event.clientY - worthlessCords.top - worthless.clientTop - nope.clientHeight / 2,
        left: event.clientX - worthlessCords.left - worthless.clientLeft - nope.clientWidth / 2
    }

    //prevent ball from going out of bounds
    if (nopeCords.top < 0) nopeCords.top = 0;
    if (nopeCords.left < 0) nopeCords.left = 0;
    if (nopeCords.left + nope.clientWidth > worthless.clientWidth) nopeCords.left = worthless.clientWidth - nope.clientWidth;
    if (nopeCords.top + nope.clientHeight > worthless.clientHeight) nopeCords.left = worthless.clientHeight - nope.clientHeight;

    nope.style.left = nopeCords.left + 'px';
    nope.style.top = nopeCords.top + 'px';
}