var conumber = Math.floor(Math.random()*20+1);
var nGuess = 20;
let guessNumber = [];
let high = 0;
let viewNum = "?";
function guess(){
    var result = ""; //결과메시지
    //사용자가 입력한 값을 받아서 변수 number에 대입
    var number = parseInt(document.getElementById("user").value);
    if(number == conumber) {
        result = "Correct number!";
        if(high<nGuess){
            high = nGuess;
        }
        //스코어가 하이스코어보다 높을경우 하이스코어에 삽입
        viewNum = conumber;
    }
    else if(number > 20 || number < 1) result ="Not in 1~20";
    else if(number > conumber){ result ="High number"
    nGuess--;
    if(nGuess<0) nGuess = 0;
    if(!guessNumber.includes(number)) guessNumber.push(number);}
    else if(number < conumber) {result ="Low number"
    nGuess--;
    if(nGuess<0) nGuess = 0;
    if(!guessNumber.includes(number)) guessNumber.push(number);}
    //게스넘이 넘을 포함하고 있지 않으면 넘을 게스넘에 추가한다.
    document.getElementById("result").innerHTML = result;
    document.getElementById("view").innerHTML = viewNum;
    document.getElementById("guesses").innerHTML = "🎯Score : "+nGuess;
    document.getElementById("highScore").innerHTML = "👍highScore : " + high;
    document.getElementById('wrong').innerHTML = '❌틀린숫자 : ' + guessNumber ;
    return true;
}
/*Again 버튼 눌렀을 때 */
function againt() {
    conumber = Math.floor(Math.random()*20+1);
    nGuess = 20;
    document.getElementById("result").innerHTML = "Go Try";
    document.getElementById("guesses").innerHTML ="🎯Score : "+ nGuess;
    document.getElementById("user").value = "";
    guessNumber = [];
    document.getElementById('wrong').innerHTML = '❌틀린숫자 : ' + guessNumber ;
    viewNum = "?";
    document.getElementById("view").innerHTML = viewNum;
}