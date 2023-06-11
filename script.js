const image = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const music = document.querySelector("audio");
const progressContainer = document.getElementById("progress-container");
const progress = document.getElementById("progress");
const currentTimeEle = document.getElementById("current-time");
const durationEle = document.getElementById("duration");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const Library = document.getElementById("Library");
const Recent = document.getElementById("recent");
const PlayList = document.getElementById("playLists");
const addPlayList = document.getElementById("addPlayList");
const search = document.getElementById("search");
const searchRes = document.getElementById("searchres");
// Data structure

// Node class
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
// Linked List class
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Add a node to the end of the list
    add(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    // Remove a node from the list
    remove(data) {
        if (!this.head) {
            return;
        }

        if (this.head.data === data) {
            this.head = this.head.next;

            if (!this.head) {
                this.tail = null;
            }
            return;
        }

        let currentNode = this.head;
        let prevNode = null;

        while (currentNode) {
            if (currentNode.data === data) {
                prevNode.next = currentNode.next;

                if (currentNode === this.tail) {
                    this.tail = prevNode;
                }
                return;
            }

            prevNode = currentNode;
            currentNode = currentNode.next;
        }
    }

    // Print the elements of the list
    print() {
        let currentNode = this.head;
        let output = '';

        while (currentNode) {
            output += currentNode.data + ' ';
            currentNode = currentNode.next;
        }

        console.log(output.trim());
    }
}

class Queue {
    constructor() {
        this.items = [];
    }

    // Add an element to the end of the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Remove and return the first element from the queue
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.shift();
    }

    // Return the first element in the queue without removing it
    front() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[0];
    }

    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Return the number of elements in the queue
    size() {
        return this.items.length;
    }

    // Clear the queue
    clear() {
        this.items = [];
    }

    // Print the elements of the queue
    print() {
        console.log(this.items);
    }
}

class Stack {
    constructor() {
        this.items = [];
    }

    // Add an element to the top of the stack
    push(element) {
        this.items.push(element);
    }

    // Remove and return the top element from the stack
    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.pop();
    }

    // Return the top element of the stack without removing it
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Return the number of elements in the stack
    size() {
        return this.items.length;
    }

    // Clear the stack
    clear() {
        this.items = [];
    }

    // Print the elements of the stack
    print() {
        console.log(this.items);
    }
}
// bst
class Node2 {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Insert a value into the binary search tree
    insert(value) {
        const newNode = new Node2(value);

        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // Search for a value in the binary search tree
    search(value) {
        return this.searchNode(this.root, value);
    }

    searchNode(node, value) {
        if (!node) {
            return false;
        }

        if (value === node.value) {
            return true;
        } else if (value < node.value) {
            return this.searchNode(node.left, value);
        } else {
            return this.searchNode(node.right, value);
        }
    }

    // Remove a value from the binary search tree
    remove(value) {
        this.root = this.removeNode(this.root, value);
    }

    removeNode(node, value) {
        if (!node) {
            return null;
        }

        if (value === node.value) {
            if (!node.left && !node.right) {
                return null;
            } else if (!node.left) {
                return node.right;
            } else if (!node.right) {
                return node.left;
            } else {
                const minRight = this.findMin(node.right);
                node.value = minRight.value;
                node.right = this.removeNode(node.right, minRight.value);
                return node;
            }
        } else if (value < node.value) {
            node.left = this.removeNode(node.left, value);
            return node;
        } else {
            node.right = this.removeNode(node.right, value);
            return node;
        }
    }

    // Find the minimum value in the binary search tree
    findMin(node) {
        if (!node.left) {
            return node;
        }
        return this.findMin(node.left);
    }

    // In-order traversal of the binary search tree
    inOrderTraversal(callback) {
        this.inOrderTraversalNode(this.root, callback);
    }

    inOrderTraversalNode(node, callback) {
        if (node) {
            this.inOrderTraversalNode(node.left, callback);
            callback(node.value);
            this.inOrderTraversalNode(node.right, callback);
        }
    }
}

// ds 
let recentds = new Stack();
let queue = new Queue();
let bst = new BinarySearchTree();

let Mode = "Lib";

// Music
const objsongs = {

    "Electric Chill Machine":
    {
        name: "jacinto-1",
        displayName: "Electric Chill Machine",
        artist: "Jacinto Design",
    },
    "Seven Nation Army (Remix)":
    {
        name: "jacinto-2",
        displayName: "Seven Nation Army (Remix)",
        artist: "Jacinto Design",
    },
    "Goodnight, Disco Queen":
    {
        name: "jacinto-3",
        displayName: "Goodnight, Disco Queen",
        artist: "Jacinto Design",
    },
    "Front Row (Remix)":
    {
        name: "metric-1",
        displayName: "Front Row (Remix)",
        artist: "Metric/Jacinto Design",
    },
};
let songs = [
    {
        name: "jacinto-1",
        displayName: "Electric Chill Machine",
        artist: "Jacinto Design",
    },
    {
        name: "jacinto-2",
        displayName: "Seven Nation Army (Remix)",
        artist: "Jacinto Design",
    },
    {
        name: "jacinto-3",
        displayName: "Goodnight, Disco Queen",
        artist: "Jacinto Design",
    },
    {
        name: "metric-1",
        displayName: "Front Row (Remix)",
        artist: "Metric/Jacinto Design",
    },
];

// Check if playing
let isPlaying = false;
// Update DOM
function loadSong(song) {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;
    musicDetail(song, Recent);
    // add to stack reccent
    recentds.push(song)
    myPlst[1].push(song);
}
let myPlst = [songs, []];

for (let song of songs) {
    musicDetail(song, Library);
    bst.insert(song.displayName);
}
// On load: Select first song randomly


let songIndex = Math.floor(Math.random() * songs.length);
loadSong(songs[songIndex]);

// Set Song Duration when it's possible to play a song
function setSongDuration(e) {
    const totalSeconds = Math.floor(e.target.duration);
    const durationMinutes = Math.floor(totalSeconds / 60);
    let durationSeconds = totalSeconds % 60;
    if (durationSeconds < 10) {
        durationSeconds = `0${durationSeconds}`;
    }
    durationEle.textContent = `${durationMinutes}:${durationSeconds}`;
}
// Play
function playSong() {
    isPlaying = true;
    playBtn.classList.replace("fa-play", "fa-pause");
    playBtn.setAttribute("title", "Pause");
    music.play();

}
// Pause
function pauseSong() {
    isPlaying = false;
    playBtn.classList.replace("fa-pause", "fa-play");
    playBtn.setAttribute("title", "Play");
    music.pause();
}
// Previous Song
function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    progress.style.width = `0%`;
    playSong();
}
// Next Song
function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    progress.style.width = `0%`;
    playSong();
}
// Display progress bar width and calculate display for current time function
function barWidthAndCurrentTime() {
    const { duration, currentTime } = music;
    // Update progress bar width
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    // Calculate display for current time
    const currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    if (currentSeconds < 10) {
        currentSeconds = `0${currentSeconds}`;
    }
    currentTimeEle.textContent = `${currentMinutes}:${currentSeconds}`;
}
// Update Progress Bar & Time while playing
function updateProgressBar() {
    if (isPlaying) {
        barWidthAndCurrentTime();
    }
}
// Set Progress Bar and current time if and if not playing when user clicks on progress bar
function setProgressBar(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const { duration } = music;
    music.currentTime = (clickX / width) * duration;
    if (!isPlaying) {
        barWidthAndCurrentTime();
    }
}
function musicDetail(song, target) {
    //  Music Display Icon
    let div = document.createElement("div");
    var span = document.createElement("SPAN");
    let img = document.createElement("img");
    img.setAttribute("src", "img/" + song.name + ".jpg");
    img.classList.add("list_detail_img");
    div.classList.add("music_detail");
    div.addEventListener("click", (e) => { e.target.children[2].style.display = "block"; });
    div.addEventListener("mouseleave", (e) => { e.target.children[2].style.display = "none"; });
    div.setAttribute("name", song.displayName);
    span.innerHTML = song.displayName;
    div.appendChild(span);
    div.appendChild(img);

    // Music  DropDown
    let divHover = document.createElement("div");
    let listname = ["Play", "Add To PlayList", "Remove"];
    for (i = 0; i < 3; i++) {
        let d = document.createElement("div");
        d.classList.add("musicHoverel");
        d.innerHTML = listname[i];
        if (d.innerHTML == "Play" && !target.parentElement.getAttribute("class", "playList")) {
            d.addEventListener("click", playBtn_OnMusic);
            divHover.appendChild(d);

        }

        if (listname[i] == "Add To PlayList" && !target.parentElement.getAttribute("class", "playList")) {
            d.classList.add("add");

            d.addEventListener("click", (e) => { 
                if(myPlst.length<3){
                    window.alert("first make a play list");
                }
                e.target.children[0].style.display = "block"; 

            });
            let dp = document.createElement("div");
            d.addEventListener("mouseleave", (e) => { e.target.children[0].style.display = "none"; });
            dp.classList.add("hoverElParent");
            d.appendChild(dp);
            divHover.appendChild(d);

        }

        if (target.parentElement.getAttribute("class", "playList") && listname[i] == "Remove") {
            d.addEventListener("click", remove_from_PlayList);
            divHover.appendChild(d);

        }
    }

    divHover.classList.add("hoverElParent");
    div.appendChild(divHover);
    target.appendChild(div);
    playList_indrpdn();
}
const PlayLists = [];
function createPlayList() {

    let p = new LinkedList();
    PlayLists.push(p);

    var div = document.createElement("div");
    div.classList.add("playList");
    div.innerHTML = "<h4> Play List " + PlayLists.length + "</h4>";
    div.setAttribute("name", PlayLists.length);
    div.setAttribute("id", "p" + PlayLists.length);
    let PlayListPartDropdown = document.createElement("div");
    PlayListPartDropdown.classList.add("hoverElParent");
    let RemovePlayList = document.createElement("div");
    RemovePlayList.innerHTML = "Remove PlayList";
    RemovePlayList.classList.add("musicHoverel");
    RemovePlayList.addEventListener("click", remove_PlayList);
    let showMusic = document.createElement("div");
    showMusic.innerHTML = "Music List";
    showMusic.classList.add("musicHoverel");
    showMusic.addEventListener("click", (e) => { e.target.children[0].style.display = "block"; });
    showMusic.addEventListener("mouseleave", (e) => { e.target.children[0].style.display = "none"; });
    showMusic.appendChild(PlayListPartDropdown);
    let playbtn = document.createElement("div");
    playbtn.innerHTML = "Play";
    playbtn.classList.add("musicHoverel");
    playbtn.addEventListener("click", play_PlayList);
    let dropdownBox = document.createElement("div");
    dropdownBox.classList.add("hoverElParent");
    dropdownBox.appendChild(playbtn);
    dropdownBox.appendChild(showMusic);
    dropdownBox.appendChild(RemovePlayList);
    div.appendChild(dropdownBox);
    div.addEventListener("click", (e) => { e.target.children[1].style.display = "block"; });
    div.addEventListener("mouseleave", (e) => { e.target.children[1].style.display = "none"; });
    PlayList.insertBefore(div, PlayList.children[1]);
    myPlst.push([]);
    playList_indrpdn();

}
function findMusicIndex(name) {
    let i = 0;
    for (el of songs) {
        if (el.displayName == name) {
            return i;
        }
        i++;
    }
}
function playBtn_OnMusic(e) {
    let tag = e.target.parentElement.parentElement
    let origintList = tag.parentElement.getAttribute("id");
    let name = tag.getAttribute("name");
    if (origintList == "recent") {
        songs = myPlst[1];
        songIndex = findMusicIndex(name);
    }
    else if (origintList == "Library") {
        songs = myPlst[0];
        songIndex = findMusicIndex(name);
    }
    for (let i = 0; i < songs.length; i++) {
        if (songs[i].displayName == name) {
            songIndex = i;
        }
    }
    loadSong(objsongs[name]);
}
function remove_from_PlayList(e) {
    let playlistNumber = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.getAttribute("name");
    let musicDisplayName = e.target.parentElement.parentElement.getAttribute("name");
    let i = 0;
    for (let song of myPlst[playlistNumber]) {
        if (musicDisplayName == song.displayName) {
            console.log(song.displayName);
            myPlst[playlistNumber].splice(i, 1);
        }
        i++;
    }
    e.target.parentElement.parentElement.remove();
}
function remove_PlayList(e) {
    let allAddBtn = document.getElementsByClassName("addplstdp");
    let targetname = e.target.parentElement.parentElement.getAttribute("name");
    for (el of allAddBtn) {
        if (targetname == el.getAttribute("name")) {
            el.remove();
        }
    }
    e.target.parentElement.parentElement.remove();

}
function playList_indrpdn() {
    let allAddBtn = document.getElementsByClassName("add");
    for (let el of allAddBtn) {
        for (let i = el.children[0].childElementCount; i < myPlst.length - 2; i++) {
            let dpel = document.createElement("div");
            dpel.classList.add("addplstdp");
            dpel.innerHTML = "Play List " + (i+1);
            dpel.setAttribute("name", i+1 );
            dpel.addEventListener("click", (e) => Onclick_add_playList(e));
            el.children[0].appendChild(dpel);
        }
    }
}
function Onclick_add_playList(e) {

    let number = e.target.getAttribute("name");
    let songName = e.target.parentElement.parentElement.parentElement.parentElement.getAttribute("name");
    e.target.parentElement.parentElement.parentElement.style.display = "none";
    let destiny = document.getElementById("p" + number).children[1].children[1].children[0];
    musicDetail(objsongs[songName], destiny);
    myPlst[parseInt(number) + 1].push(objsongs[songName]);
}
function play_PlayList(e) {
    let index = e.target.parentElement.parentElement.getAttribute("name");
    index = parseInt(index);
    songs = myPlst[index + 1];
    songIndex = 0;
    console.log(songs[songIndex]);
    loadSong(songs[songIndex]);
}
function Search() {
    let name = search.value;
    if (bst.search(name)) {
        musicDetail(objsongs[name], searchRes);
        searchRes.style.display = "block";
    }
    else{
        window.alert("Not Found");
    }
}

// Event Listeners
music.addEventListener("canplay", setSongDuration);
playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
music.addEventListener("timeupdate", updateProgressBar);
music.addEventListener("ended", nextSong);
progressContainer.addEventListener("click", setProgressBar);
addPlayList.addEventListener("click", createPlayList);
document.getElementById("submit").addEventListener("click", Search);
searchRes.addEventListener("mouseleave", () => {
    searchRes.style.display = "none";
    for(tag of searchRes.children){
        tag.remove();
    }
});