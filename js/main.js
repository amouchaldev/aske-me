// first page
let inputNum = document.querySelector('.input-num')
let btnNum = document.querySelector('.btn-num')
// second page
let inputNext = document.querySelector('.input-next')  // button 
let playersContainer = document.querySelector('.players')
// third page
let playersName = document.getElementById('playersName')
let playersChild = document.getElementById('playersName').children
let nextbtn = document.querySelector('#nextbtn') // button

// question
let questions = document.querySelectorAll('.questions li')
// 
let reg = new RegExp('^[0-9]$');
function getPlayers(callback) {
    btnNum.addEventListener('click', () => {
        if(inputNum.value == '' || reg.test(inputNum.value) !== true) {alert('please write a number')}
        else {
            localStorage.clear();
            // hide first page
            inputNum.classList.remove('d-block')
            btnNum.classList.remove('d-block')
            inputNum.style.display = 'none'
            btnNum.style.display = 'none'
            // show second button
            inputNext.classList.remove('d-none')
            inputNext.classList.add('d-block', 'mx-auto')
            inputNext.style.width = '44%'
            playersContainer.classList.remove('d-none')
            // create input of players depending inputNum.value 
                for (let i = 0; i < inputNum.value; i++) {
                    input = document.createElement('input')
                    input.setAttribute('class', 'player-' + i)
                    input.setAttribute('placeholder', 'player '+ (i + 1))
                    document.querySelector('.players').append(input)
                }
                // return players input in callback bcs getPlayers() shoud not work before exicute all function
                return callback(document.querySelectorAll('.players input'))
        }

      
    })
}
getPlayers((players) => {

    let i = 0
    // add players to local storage
   inputNext.addEventListener('click', () => {
       players.forEach(player => {
        localStorage.setItem('player-' + (i), player.value)
        i++
      });
    //   hide second page
    document.querySelector('#game-container').style.display = 'none'

      let keys = Object.keys(localStorage).length
   
        while(keys--) {
            playersName.appendChild(document.createElement('span'))
                        }
                            for (let i = 0; i < playersChild.length; i++) {
                            playersChild[i].append(localStorage.getItem('player-' + (i))) 
                            playersChild[i].style.display = 'none'
                               }
                            
                // generate random number AND DISPLAY BLOCK random player
        let randomNum = Math.floor(Math.random() * playersChild.length)
        playersChild[randomNum].style.display = 'block'              

        //    show third page
        document.querySelector('#playersName').parentElement.classList.remove('d-none')
        nextbtn.classList.remove('d-none')
        // generate random questions
        generateQ()  
   })
   
   nextbtn.addEventListener('click', () => {
    let r = Math.floor(Math.random() * questions.length)
    questions.forEach(q => {
        q.style.display = "none"
    })
    questions[r].style.display = 'block'
    questions[r].classList.add('active')

         // generate random number AND DISPLAY BLOCK random player
         let randomNum = Math.floor(Math.random() * playersChild.length)
        // make all player display none
        for (let i = 0; i < playersChild.length; i++) {
            playersChild[i].style.display = "none"
        }
        playersChild[randomNum].style.display = 'block'
}) 
})


    function generateQ() {
        let randomNum = Math.floor(Math.random() * questions.length)
        questions.forEach(q => {
            q.style.display = 'none'
        })
        questions[randomNum].style.display = 'block'
    }
    function generatePlayers() {
        playersChild.forEach(span => {
            span.style.display = 'none'
        })
        playersSpan[randomNum].style.display = 'block'
    }


    
let t = 6
let counter = setInterval(() => {
t--
document.querySelector('.counter').innerHTML = t + 's' + '<br>' + 'Wait for the game :)'
if (t == 0) {
    document.querySelector('.cover').style.display = "none"
    document.querySelector('.counter').style.display = "none"
    clearInterval(counter)
}
},1000)




































// getPlayers((a, playerName) => {
//     if (Object.keys(localStorage).length == playerName) {
//          console.log(['ahmed', 'jamal'])
    
//     }
// })

// getPlayersName()

// getPlayersName(playerName => {
//     console.log(playerName)
// })
   
// getPlayers(players => console.log(players.length))
// if (getPlayers(inputNV => inputNV) == 4) console.log(yesss)



// let obj1 = {
//     a: '4',
//     b: '4',
//     c: '4',
//     d: '4',
//     e: '4',
// }
// console.log(Object.keys(obj1))














// ########################################################
// getPlayers(players => {
//     players.forEach(player => console.log(player))
// })
// let playerName = new Array()
// firstClick(btnNum, inputs => {
//     inputs.forEach(element => {
//        playerName.push(element) 
//     });
// })

// function getUser(callback) {
//     setTimeout(() => {
//     return callback({very: "very"})
//     }, 5000)
// }
// getUser(very => console.log(very))
// inputNext.add('click', () => {

// })
// firstClick(btnNum, inputs => {
//     inputs
// // })
// btnNum.onclick = function () {
//     inputNum.classList.remove('d-inline-block')
//     btnNum.classList.remove('d-inline-block')
//     inputNext.classList.remove('d-none')
//     inputNum.style.display = 'none'
//     btnNum.style.display = 'none'
//     inputNext.classList.add('d-block', 'mx-auto')
//     inputNext.style.width = '44%'
//     for (let i = 0; i < inputNum.value; i++) {
//         input = document.createElement('input')
//         input.setAttribute('class', 'player-' + i)
//         input.setAttribute('placeholder', 'player '+ (i + 1))
//         document.querySelector('.players').append(input)
//     }
// }
// setTimeout(() => {
//     let players =  document.querySelectorAll('.players input')

//     console.log(players)}, 5000)
// let generateInput = setInterval(() => {
//     let players =  document.querySelectorAll('.players input')
//    if(players.length != 0) clearInterval(generateInput)
//    inputNext.addEventListener('click', function () {
//       for (let index = 0; index < players.length; index++) {
//           localStorage.setItem('player-' + index, players[index].innerHTML)
//       }
//    })
// }, 4000)
// let generateStorage = setInterval(() => {
//     console.log(localStorage.getItem('player-1'))
// },9000)


//###########################################################################################
// a l' institut
// let questions = document.querySelectorAll('.questions li')

// // console.log(r)
// // console.log(questions.length)
// let nextbtn = document.querySelector('#nextbtn')
// nextbtn.addEventListener('click', () => {
//     let r = Math.floor(Math.random() * questions.length + 1)
//     questions.forEach(q => {
//         q.style.display = "none"
//     })
//     questions[r].style.display = 'block'
//     questions[r].classList.add('active')
// })

