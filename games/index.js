
let cardsArray = [
        {
            'name': 'CSS',
            'img': 'images/kisspng-css3-cascading-style-sheets-computer-icons-html-emblem-5ac245f107ae31.3014101515226813290315.png',
        },
        {
            'name': 'HTML',
            'img': 'images/kisspng-html-web-design-scalable-vector-graphics-world-wid-html5-icon-hd-5ab0c85c377aa0.0639325615215350682273.png',
        },
        {
            'name': 'redux',
            'img': 'images/kisspng-redux-react-javascript-vue-js-single-page-applicat-5af5cde424ee15.8061979615260584681513.png',
        },
        {
            'name': 'JS',
            'img': 'images/kisspng-javascript-logo-html-comment-blog-5ae63c23139110.5436874015250381150802.png',
        },
        {
            'name': 'Node',
            'img': 'images/kisspng-node-js-javascript-web-application-express-js-comp-5ae0f84e5e7537.0464945815246930703869.png',
        },
        {
            'name': 'Python',
            'img': 'images/kisspng-angle-text-symbol-brand-other-python-5ab0c09b9ea1a7.3286927515215330836498.png',
        },
        {
            'name': 'React',
            'img': 'images/kisspng-react-javascript-angularjs-ionic-atom-5b154be6947457.3471941815281223426081.png',
        },
        {
            'name': 'Jquery',
            'img': 'images/kisspng-jquery-ui-javascript-web-browser-pasargad-5b3d093861de42.8633010915307267124009.png',
        }
    ];

 // 🔴 Step - 2. Duplicating the cards
const gameArray = cardsArray.concat(cardsArray);
 console.log(gameArray)


// 🔴 Step - 3. Fisher-Yates Shuffle algorithm 

// const shuffleAlgo = (array)=>{

// for (let i = array.length-1; i>0; i--){
//     let j = Math.floor(Math.random()*(i+1))
//     let numm = array[i]
//     array[i]= array[j]
//     array[j] = numm
   
// }
// return array
// }
// const shuffledCards = shuffleAlgo(gameArray)

let shuffledCards = Array.from(gameArray).sort(()=> 0.5 - Math.random());


//🔴 Step - 4. Selected card appearance 




// 🔴 Step - 1. 
const parentDiv = document.querySelector('#card-sec');

for (let i=0; i<shuffledCards.length; i++){
    const childDiv = document.createElement('div')
     childDiv.classList.add('card')
    childDiv.dataset.name = shuffledCards[i].name;
    childDiv.style.backgroundImage = `url(${shuffledCards[i].img})`;
    parentDiv.appendChild(childDiv)
}


