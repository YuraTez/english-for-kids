/*import './style.scss';*/
const starData = {
        star: 'assets/img/star.svg',
        starWin: 'assets/img/star-win.svg',
        success: 'assets/img/success.jpg',
        failure: 'assets/img/failure.jpg',
};
const imgTemplateStar = (item) =>
    `<img class="card-star" src="${starData[item]}" alt="img">`;
const imgTemplateSmile = (item) =>
    `<img class="card-Smile" src="${starData[item]}" alt="img">`;
const cardsData = {
    categories: [{
        name: 'Action (set A)',
        text: 'ActionA',
        src: 'assets/img/action.jpg'
    },
        {
            name: 'Action (set B)',
            text: 'ActionB',
            src: 'assets/img/action2.jpg'
        },
        {
            name: 'Animal (set A)',
            text: 'AnimalA',
            src: 'assets/img/animal.jpg'
        },
        {
            name: 'Animal (set B)',
            text: 'AnimalB',
            src: 'assets/img/animal2.jpg'
        },
        {
            name: 'Clothes',
            text: 'Clothes',
            src: 'assets/img/Clothes.jpg'
        },
        {
            name: 'Emotions',
            text: 'Emotions',
            src: 'assets/img/Emotions.jpg'
        },
        {
            name: 'Fruit',
            text: 'Fruit',
            src: 'assets/img/Fruit.jpg'
        },
        {
            name: 'Food',
            text: 'Food',
            src: 'assets/img/Food.jpg'
        }],
    ActionA: [{
        name: 'cry',
        translate: 'плакать',
        src: 'assets/img/cry.jpg',
        audioSrc: 'assets/audio/cry.mp3'
    },
        {
            name: 'dance',
            translate: 'танцевать',
            src: 'assets/img/dance.jpg',
            audioSrc: 'assets/audio/dance.mp3'
        },
        {
            name: 'dive',
            translate: 'нырять',
            src: 'assets/img/dive.jpg',
            audioSrc: 'assets/audio/dive.mp3'
        },
        {
            name: 'draw',
            translate: 'рисовать',
            src: 'assets/img/draw.jpg',
            audioSrc: 'assets/audio/draw.mp3'
        },
        {
            name: 'fish',
            translate: 'ловить рыбу',
            src: 'assets/img/fish.jpg',
            audioSrc: 'assets/audio/fish.mp3'
        },
        {
            name: 'fly',
            translate: 'летать',
            src: 'assets/img/fly.jpg',
            audioSrc: 'assets/audio/fly.mp3'
        },
        {
            name: 'hug',
            translate: 'обнимать',
            src: 'assets/img/hug.jpg',
            audioSrc: 'assets/audio/hug.mp3'
        },
        {
            name: 'jump',
            translate: 'прыгать',
            src: 'assets/img/jump.jpg',
            audioSrc: 'assets/audio/jump.mp3'
        }],
    ActionB: [{
        name: 'open',
        translate: 'открывать',
        src: 'assets/img/open.jpg',
        audioSrc: 'assets/audio/open.mp3'
    },
        {
            name: 'play',
            translate: 'играть',
            src: 'assets/img/play.jpg',
            audioSrc: 'assets/audio/play.mp3'
        },
        {
            name: 'point',
            translate: 'указывать',
            src: 'assets/img/point.jpg',
            audioSrc: 'assets/audio/point.mp3'
        },
        {
            name: 'ride',
            translate: 'уздить',
            src: 'assets/img/ride.jpg',
            audioSrc: 'assets/audio/ride.mp3'
        },
        {
            name: 'run',
            translate: 'бегать',
            src: 'assets/img/run.jpg',
            audioSrc: 'assets/audio/jump.mp3'
        },
        {
            name: 'sing',
            translate: 'петь',
            src: 'assets/img/sing.jpg',
            audioSrc: 'assets/audio/sing.mp3'
        },
        {
            name: 'skip',
            translate: 'пропускать,прыгать',
            src: 'assets/img/skip.jpg',
            audioSrc: 'assets/audio/skip.mp3'
        },
        {
            name: 'swim',
            translate: 'плавать',
            src: 'assets/img/swim.jpg',
            audioSrc: 'assets/audio/swim.mp3'
        }],
    AnimalA: [{
        name: 'cat',
        translate: 'кот',
        src: 'assets/img/cat.jpg',
        audioSrc: 'assets/audio/cat.mp3'
    },
        {
            name: 'chick',
            translate: 'цыпленок',
            src: 'assets/img/chick.jpg',
            audioSrc: 'assets/audio/chick.mp3'
        },
        {
            name: 'chicken',
            translate: 'курица',
            src: 'assets/img/chicken.jpg',
            audioSrc: 'assets/audio/chicken.mp3'
        },
        {
            name: 'dog',
            translate: 'собака',
            src: 'assets/img/dog.jpg',
            audioSrc: 'assets/audio/dog.mp3'
        },
        {
            name: 'horse',
            translate: 'лошадь',
            src: 'assets/img/horse.jpg',
            audioSrc: 'assets/audio/horse.mp3'
        },
        {
            name: 'pig',
            translate: 'свинья',
            src: 'assets/img/pig.jpg',
            audioSrc: 'assets/audio/pig.mp3'
        },
        {
            name: 'rabbit',
            translate: 'кролик',
            src: 'assets/img/rabbit.jpg',
            audioSrc: 'assets/audio/rabbit.mp3'
        },
        {
            name: 'sheep',
            translate: 'овца',
            src: 'assets/img/sheep.jpg',
            audioSrc: 'assets/audio/sheep.mp3'
        }],
    AnimalB: [{
        name: 'bird)',
        translate: 'птица',
        src: 'assets/img/bird.jpg',
        audioSrc: 'assets/audio/bird.mp3'
    },
        {
            name: 'fish',
            translate: 'рыба',
            src: 'assets/img/fish.jpg',
            audioSrc: 'assets/audio/fish.mp3'
        },
        {
            name: 'frog',
            translate: 'лягушка',
            src: 'assets/img/frog.jpg',
            audioSrc: 'assets/audio/frog.mp3'
        },
        {
            name: 'giraffe',
            translate: 'жираф',
            src: 'assets/img/giraffe.jpg',
            audioSrc: 'assets/audio/giraffe.mp3'
        },
        {
            name: 'lion',
            translate: 'лев',
            src: 'assets/img/lion.jpg',
            audioSrc: 'assets/audio/lion.mp3'
        },
        {
            name: 'mouse',
            translate: 'мышь',
            src: 'assets/img/mouse.jpg',
            audioSrc: 'assets/audio/mouse.mp3'
        },
        {
            name: 'turtle',
            translate: 'черепаха',
            src: 'assets/img/turtle.jpg',
            audioSrc: 'assets/audio/turtle.mp3'
        },
        {
            name: 'dolphin',
            translate: 'дельфин',
            src: 'assets/img/dolphin.jpg',
            audioSrc: 'assets/audio/dolphin.mp3'
        }],
    Clothes: [{
        name: 'skirt',
        translate: 'юбка',
        src: 'assets/img/skirt.jpg',
        audioSrc: 'assets/audio/skirt.mp3'
    },
        {
            name: 'pants',
            translate: 'брюки',
            src: 'assets/img/pants.jpg',
            audioSrc: 'assets/audio/pants.mp3'
        },
        {
            name: 'blouse',
            translate: 'блузка',
            src: 'assets/img/blouse.jpg',
            audioSrc: 'assets/audio/blouse.mp3'
        },
        {
            name: 'dress',
            translate: 'платье',
            src: 'assets/img/dress.jpg',
            audioSrc: 'assets/audio/dress.mp3'
        },
        {
            name: 'boot',
            translate: 'ботинки',
            src: 'assets/img/boot.jpg',
            audioSrc: 'assets/audio/boot.mp3'
        },
        {
            name: 'shirt',
            translate: 'рубашка',
            src: 'assets/img/shirt.jpg',
            audioSrc: 'assets/audio/shirt.mp3'
        },
        {
            name: 'coat',
            translate: 'пальто',
            src: 'assets/img/coat.jpg',
            audioSrc: 'assets/audio/coat.mp3'
        },
        {
            name: 'shoe',
            translate: 'туфли',
            src: 'assets/img/shoe.jpg',
            audioSrc: 'assets/audio/shoe.mp3'
        }],
    Emotions: [{
        name: 'sad',
        translate: 'грустный',
        src: 'assets/img/sad.jpg',
        audioSrc: 'assets/audio/sad.mp3'
    },
        {
            name: 'angry',
            translate: 'сердитый',
            src: 'assets/img/angry.jpg',
            audioSrc: 'assets/audio/angry.mp3'
        },
        {
            name: 'happy',
            translate: 'счастливый',
            src: 'assets/img/happy.jpg',
            audioSrc: 'assets/audio/happy.mp3'
        },
        {
            name: 'tired',
            translate: 'уставший',
            src: 'assets/img/tired.jpg',
            audioSrc: 'assets/audio/tired.mp3'
        },
        {
            name: 'surprised',
            translate: 'удивленный',
            src: 'assets/img/surprised.jpg',
            audioSrc: 'assets/audio/surprised.mp3'
        },
        {
            name: 'scared',
            translate: 'испуганный',
            src: 'assets/img/scared.jpg',
            audioSrc: 'assets/audio/scared.mp3'
        },
        {
            name: 'smile',
            translate: 'улыбка',
            src: 'assets/img/smile.jpg',
            audioSrc: 'assets/audio/smile.mp3'
        },
        {
            name: 'laugh',
            translate: 'смех',
            src: 'assets/img/laugh.jpg',
            audioSrc: 'assets/audio/laugh.mp3'
        }],
    Fruit: [{
        name: 'an apple',
        translate: 'яблоко',
        src: 'assets/img/an apple.jpg',
        audioSrc: 'assets/audio/apple.mp3'
    },
        {
            name: 'banana',
            translate: 'бананы',
            src: 'assets/img/banana.jpg',
            audioSrc: 'assets/audio/banana.mp3'
        },
        {
            name: 'grapefruit',
            translate: 'грейпфрут',
            src: 'assets/img/grapefruit.jpg',
            audioSrc: 'assets/audio/grapefruit.mp3'
        },
        {
            name: 'kiwi',
            translate: 'киви',
            src: 'assets/img/kiwi.jpg',
            audioSrc: 'assets/audio/kiwi.mp3'
        },
        {
            name: 'lemon',
            translate: 'лемон',
            src: 'assets/img/lemon.jpg',
            audioSrc: 'assets/audio/lemon.mp3'
        },
        {
            name: 'orange',
            translate: 'апельсин',
            src: 'assets/img/orange.jpg',
            audioSrc: 'assets/audio/orange.mp3'
        },
        {
            name: 'peach',
            translate: 'персик',
            src: 'assets/img/peach.jpg',
            audioSrc: 'assets/audio/peach.mp3'
        },
        {
            name: 'avocado',
            translate: 'авокадо',
            src: 'assets/img/avocado.jpg',
            audioSrc: 'assets/audio/avocado.mp3'
        }],
    Food: [{
        name: 'bread',
        translate: 'хлеб',
        src: 'assets/img/bread.jpg',
        audioSrc: 'assets/audio/bread.mp3'
    },
        {
            name: 'cake',
            translate: 'кекс',
            src: 'assets/img/cake.jpg',
            audioSrc: 'assets/audio/cake.mp3'
        },
        {
            name: 'cheese',
            translate: 'сыр',
            src: 'assets/img/cheese.jpg',
            audioSrc: 'assets/audio/cheese.mp3'
        },
        {
            name: 'coffee',
            translate: 'кофу',
            src: 'assets/img/coffee.jpg',
            audioSrc: 'assets/audio/coffee.mp3'
        },
        {
            name: 'milk',
            translate: 'молоко',
            src: 'assets/img/milk.jpg',
            audioSrc: 'assets/audio/milk.mp3'
        },
        {
            name: 'rice',
            translate: 'рис',
            src: 'assets/img/rise.jpg',
            audioSrc: 'assets/audio/rice.mp3'
        },
        {
            name: 'tea',
            translate: 'чай',
            src: 'assets/img/tea.jpg',
            audioSrc: 'assets/audio/tea.mp3'
        },
        {
            name: 'yogurt',
            translate: 'йогурт',
            src: 'assets/img/yogurt.jpg',
            audioSrc: 'assets/audio/yogurt.mp3'
        }],
};
//burger menu active and not active
let gameSounds = [];
let audioRandom = [];
let correctAnswers = 0;
let wrongAnswers = 0;
const inputStars = document.getElementById('result_game');
const red = "linear-gradient(180deg,#fd6a63,#feb46b 40%)";
const blue = "linear-gradient(40deg,#00bf82,#0099ae)";
const activePlayGame = document.getElementById("active-play-game");
const HandleHamburger = document.getElementById("hamburger");
const HandleMenu = document.getElementById("menu_list");
const HandleBody = document.getElementById("card_container");
const activeLink = document.querySelectorAll('a');
const playAttribute = document.querySelector('.play');
const trainAttribute = document.querySelector('.train');
const btnStartGame = document.getElementById('btn_start_game');
const btnReplayGame = document.getElementById('btn_replay_game');
const audioError = document.getElementById('audio_error');
const audioCorrect = document.getElementById('audio-correct');
let isGameStarted = false;
//монипуляции с бургер меню,нужен рефактори
HandleHamburger.onclick = function () {
    HandleHamburger.classList.toggle('active_burger');
    HandleMenu.classList.toggle('active_burger');
};
HandleMenu.onclick = function (event) {
    if (event.target.tagName !== 'A') {
        HandleHamburger.classList.remove('active_burger');
        HandleMenu.classList.remove('active_burger');
    } else {
        activeLink.forEach(el => el.classList.remove('active'));
        event.target.classList.add('active');
        HandleHamburger.classList.remove('active_burger');
        HandleMenu.classList.remove('active_burger');
    }
};
HandleBody.onclick = function () {
    HandleHamburger.classList.remove('active_burger');
    HandleMenu.classList.remove('active_burger');
};

const cardContainer = document.getElementById('card_container');
const cardTemplate = (item) =>
    `
    <div class="card flip-card" data-key="${item.text}">
      <div class="flip-card-inner">
        <div class="flip-card-front">
            <div class="view overlay" >
              <img class="card-img-front" src="${item.src}" alt="img">
              <audio class="card-audio" data-audio="${item.audioSrc}" src="${item.audioSrc}" ><audio>
            </div>
            <div class="card-body">
               <h2>${item.name}</h2>
              <button class="flip_btn"></button>
           </div>
        </div>
        <div class="flip-card-back" ">
               <img class="card-img-top"  src="${item.src}" alt="img">
               <h2>${item.translate}</h2>
        </div>
      </div>   
    </div>
    `;
const cardTemplateFront = (item) =>
    `
    <div class="card " data-key="${item.text}">
            <div class="view overlay" >
              <img class="card-img-top" src="${item.src}" alt="img">
            </div>
            <div class="card-body">
               <h2>${item.name}</h2>
           </div>
    </div>
    `;
// add new card ,flip card , play audio
const addNewCard = (key) => {
    inputStars.innerHTML = "";
    let html = '';
    if (key === 'categories') {
        cardsData[key].forEach(item => {
            html += cardTemplateFront(item);
        });
    } else if(key !== 'categories' && activePlayGame.checked){
        btnReplayGame.style.display = "none";
        btnStartGame.style.display = "block";
        cardsData[key].forEach(item => {
            html += cardTemplate(item)
        });
        activeLink.forEach(el => el.classList.remove('active'));
        activeLink.forEach(el => {
            if (el.getAttribute('data-key') === key) {
                el.classList.add('active')
            }
        });
    } else {
        cardsData[key].forEach(item => {
            html += cardTemplate(item)
        });
        activeLink.forEach(el => el.classList.remove('active'));
        activeLink.forEach(el => {
            if (el.getAttribute('data-key') === key) {
                el.classList.add('active')
            }
        })
    }
    cardContainer.innerHTML = html;
    const cardActive = document.querySelectorAll('.card');
    activePlayGame.addEventListener('click', () => {
        inputStars.innerHTML = "";
        const imgFrontChecked = document.querySelectorAll('.card-img-front');
        if (!activePlayGame.checked) {
            isGameStarted = false;
            btnReplayGame.style.display = "none";
            btnStartGame.style.display = "none";
            playAttribute.style.display = "none";
            trainAttribute.style.display = "block";
            imgFrontChecked.forEach(item => {
                item.classList.remove("active-switch")
            });
            HandleMenu.style.background = blue;
            cardActive.forEach(item => {
                item.style.background = blue;
            });
        }
        else if(activePlayGame.checked && key !== 'categories'){
            btnStartGame.style.display = "block";
            trainAttribute.style.display = "none";
            playAttribute.style.display = "block";

        }
        else {
            trainAttribute.style.display = "none";
            playAttribute.style.display = "block";
            imgFrontChecked.forEach(item => {
                item.classList.add("active-switch")
            });
            HandleMenu.style.background = red;
            cardActive.forEach(item => {
                item.style.background = red;
            });
        }
    });

    cardActive.forEach(item => {
        item.addEventListener('click', (event) => {
            const cardAudio = item.querySelector('.card-audio');
            const btnFlip = item.querySelector('.flip_btn');
            const flipCardInner = item.querySelector('.flip-card-inner');
            if (cardAudio === null) {
                addNewCard(item.getAttribute('data-key'));

            } else if (event.target === btnFlip) {
                flipCardInner.style.transform = 'rotateY(' + 180 + 'deg)';
                btnFlip.style.display = 'none';
                item.addEventListener('mouseleave', () => {
                    flipCardInner.style.transform = 'rotateY(' + 0 + 'deg)';
                    btnFlip.style.display = 'block';
                })
            } else if (isGameStarted === true) {
            //  if(gameSounds.length > 1){
                if (cardAudio.getAttribute('data-audio') === audioRandom[audioRandom.length - 1]) {
                    correctAnswers ++;
                    audioCorrect.play();
                    audioRandom.pop();
                    gameSounds.pop();
                    addStars('starWin');
                    //console.log('2',audioRandom);
                    setTimeout(() => {
                        gameSounds[gameSounds.length - 1] && gameSounds[gameSounds.length - 1].play();
                    }, 1000)
                } else {
                    addStars('star');
                    audioError.play();
                    wrongAnswers++;
                }
         //   }
          /*  else {
                  console.log(gameSounds.length);
                  addImgSmile('success');
              }*/
            }
            else if (activePlayGame.checked) {
                return;
            } else {
                cardAudio.play()
            }
        });
    });
    playGameStart(cardActive);

    colorActive(cardActive);
};
// Работа с сылками в бургер панели
document.querySelectorAll('.menu_list a').forEach(item => {
    item.addEventListener('click', () => {
        if(item.getAttribute('data-key') === 'categories'){
            btnReplayGame.style.display = "none";
            btnStartGame.style.display = "none";

        }else if(item.getAttribute('data-key') !== 'categories' && activePlayGame.checked){
            btnReplayGame.style.display = "none";
            btnStartGame.style.display = "block";
        }
        else{
            btnReplayGame.style.display = "none";
        }
        gameSounds = [];
        addNewCard(item.getAttribute('data-key'));
    })
});
addNewCard('categories');
// click link and add new card


//test active checked and add class active-switch
function colorActive(arr) {
    if (!activePlayGame.checked) {
        document.querySelectorAll('.card-img-front').forEach(item => {
            item.classList.remove("active-switch")
        });
        arr.forEach(item => {
            item.style.background = blue;
        });
    } else {
        document.querySelectorAll('.card-img-front').forEach(item => {
            item.classList.add("active-switch")
        });
        arr.forEach(item => {
            item.style.background = red;
        });
    }
}
function reBuildArray() {
    const newArray = gameSounds.sort(function(){
        return Math.random() - 0.5;
    });
    return newArray
}
function playGameStart(cardActive){
    btnStartGame.addEventListener('click', () => {
        console.log('click');
        gameSounds = [];
        audioRandom = [];
        let audioPlay = document.querySelectorAll('.card-audio');
        isGameStarted = true;

        audioPlay.forEach(item => {
            gameSounds.push(item)
        });
        reBuildArray(gameSounds);
        gameSounds.forEach(index =>{
            audioRandom.push(index.getAttribute('data-audio'));
        });

        btnStartGame.style.display = "none";
        btnReplayGame.style.display = "block";
        setTimeout(() => {
            gameSounds[gameSounds.length - 1] && gameSounds[gameSounds.length - 1].play();
        },500);
        btnReplayGame.addEventListener("click", ()=>{
            gameSounds[gameSounds.length - 1] && gameSounds[gameSounds.length - 1].play();
        });
    });}
function addStars(item) {

    inputStars.insertAdjacentHTML('afterbegin', imgTemplateStar(item))
}
/*
function addImgSmile(item) {
    /!*let  html = '';
    html += imgTemplateSmile(item);
   document.querySelector('body').innerHTML += html;*!/
   // document.querySelector('body').classList.add('game_winer')
}*/
