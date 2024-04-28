const zmiana1 = () => {
  document.getElementById("zmien").src = "./kaczki/kaczkabuzi2.jpg"
}

const zmiana2 = () => {
  document.getElementById("zmien").src = "./kaczki/kaczkabuzi.jpg"
}

const zmiana3 = () => {
  document.getElementById("zmien").src = "./kaczki/kaczkaemo2.jpg"
}

const zmiana4 = () => {
  document.getElementById("zmien").src = "./kaczki/kaczkaemo.jpg"
}

const zmiana5 = () => {
  document.getElementById("zmien").src = "./kaczki/kaczkafrancuz.jpg"
}

const zmiana6 = () => {
  document.getElementById("zmien").src = "./kaczki/kaczkaniemiec.jpg"
}

const zmiana7 = () => {
  document.getElementById("zmien").src = "./kaczki/kaczkamotor2.jpg"
}

const zmiana8 = () => {
  document.getElementById("zmien").src = "./kaczki/kaczkamotor.jpg"
}

const zmiana9 = () => {
  document.getElementById("zmien").src = "./kaczki/kaczkaswinia.jpg"
}

const zmiana10 = () => {
  document.getElementById("zmien").src = "./kaczki/kaczkamarczyk.jpg"
}

const zmiana11 = () => {
  document.getElementById("zmien").src = "./kaczki/kaczkauczen.jpg"
}

const zmiana12 = () => {
  document.getElementById("zmien").src = "./kaczki/kaczkakafelkarz.jpg"
}

const zmiana13 = () => {
  document.getElementById("zmien").src = "./kaczki/kaczkalong2.jpg"
}

const zmiana14 = () => {
  document.getElementById("zmien").src = "./kaczki/kaczkalong.jpg"
}

const zmiana15 = () => {
  document.getElementById("zmien").src = "./kaczki/kaczkarozowa2.jpg"
}

const zmiana16 = () => {
  document.getElementById("zmien").src = "./kaczki/kaczkarozowa.jpg"
}

const zmiana17 = () => {
  document.getElementById("zmien").src = "./kaczki/kaczkazyd.jpg"
}

const zmiana18 = () => {
  document.getElementById("zmien").src = "./kaczki/kaczkamafia.jpg"
}





var imgs = new Array( 'kaczkabuzi.jpg', 'kaczkaemo.jpg', 'kaczkalong.jpg', 'kaczkamarczyk.jpg', 'kaczkaniemiec.jpg', 'kaczkakafelkarz.jpg', 'kaczkamotor.jpg', 'kaczkarozowa.jpg');
var pos = 0;

function chImg() {
  var i = document.getElementById('imgField');

  i.src = './kaczki/' + imgs[pos++];

  if (pos >= 8) {
    pos = 0;
  }

  window.setTimeout('chImg()', 1000);
}

