function darkMode() {
    document.documentElement.style.setProperty('--ecriture', 'whitesmoke');
    document.documentElement.style.setProperty('--background', '#212121')  ;
    document.documentElement.style.setProperty('--fond', 'url(../image/imagefond.jpg)');
    
    var element = document.body;
    var element1 = document.getElementById("nav-dark-mode");
    var element2 = document.getElementById("couleurtexte");
    var card1 = document.getElementById("couleur-card1");
    var card2 = document.getElementById("couleur-card2");
    var card3 = document.getElementById("couleur-card3");
    var card4 = document.getElementById("couleur-card4");
    var card5 = document.getElementById("couleur-card5");
    var card6 = document.getElementById("couleur-card6");
    var card7 = document.getElementById("couleur-card7");
    var card8 = document.getElementById("couleur-card8");
    var card9 = document.getElementById("couleur-card9");
    var colorpurple1 = document.getElementById("couleurviolette");
    var colorgray1 = document.getElementById("couleurgrise1");
    var colorgray2 = document.getElementById("couleurgrise2");
    var colorgray3 = document.getElementById("couleurgrise3");
    var colorgray4 = document.getElementById("couleurgrise4");
    var colorgray5 = document.getElementById("couleurgrise5");
    var colorgray6 = document.getElementById("couleurgrise6");
    var colorgray7 = document.getElementById("couleurgrise7");
    var colorgray8 = document.getElementById("couleurgrise8");
    var colorgray9 = document.getElementById("couleurgrise9");
    var colornavbar1 = document.getElementById("textenavbar1");
    var colornavbar2 = document.getElementById("textenavbar2");
    var colornavbar3 = document.getElementById("textenavbar3");
    var colornavbar4 = document.getElementById("textenavbar4");
    var colornavbar5 = document.getElementById("textenavbar5");
    var colornavbar6 = document.getElementById("textenavbar6");
    var colornavbar7 = document.getElementById("textenavbar7");
    var colornavbar8 = document.getElementById("textenavbar8");
    var content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    element1.className = "nav-dark-mode";
    element2.className ="couleurblanche";
    card1.className="card-dark-mode";
    card2.className="card-dark-mode";
    card3.className="card-dark-mode";
    card4.className="card-dark-mode";
    card5.className="card-dark-mode";
    card6.className="card-dark-mode";
    card7.className="card-dark-mode";
    card8.className="card-dark-mode";
    card9.className="card-dark-mode";
    colorpurple1.className = "colorpurple1-2";
    colorgray1.className = "colorgray1-2";
    colorgray2.className = "colorgray1-2";
    colorgray3.className = "colorgray1-2";
    colorgray4.className = "colorgray1-2";
    colorgray5.className = "colorgray1-2";
    colorgray6.className = "colorgray1-2";
    colorgray7.className = "colorgray1-2";
    colorgray8.className = "colorgray1-2";
    colorgray9.className = "colorgray1-2";
    content.innerText = "Dark Mode is ON";
    colornavbar1.className= "colorblack";
    colornavbar2.className= "colorblack";
    colornavbar3.className= "colorblack";
    colornavbar4.className= "colorblack";
    colornavbar5.className= "colorblack";
    colornavbar6.className= "colorblack";
    colornavbar7.className= "colorblack";
    colornavbar8.className= "colorblack";
  }

  function lightMode() {
    document.documentElement.style.setProperty('--ecriture', 'black');
    document.documentElement.style.setProperty('--background', 'whitesmoke');
    document.documentElement.style.setProperty('--fond', 'url(../image/imagetexturecubique-modified.jpg)');
    var element = document.body;
    var element1 = document.getElementById("nav-dark-mode");
    var element2 = document.getElementById("couleurtexte");
    var card1 = document.getElementById("couleur-card1");
    var card2 = document.getElementById("couleur-card2");
    var card3 = document.getElementById("couleur-card3");
    var card4 = document.getElementById("couleur-card4");
    var card5 = document.getElementById("couleur-card5");
    var card6 = document.getElementById("couleur-card6");
    var card7 = document.getElementById("couleur-card7");
    var card8 = document.getElementById("couleur-card8");
    var card9 = document.getElementById("couleur-card9");
    var colorpurple1 = document.getElementById("couleurviolette");
    var colorgray1 = document.getElementById("couleurgrise1");
    var colorgray2 = document.getElementById("couleurgrise2");
    var colorgray3 = document.getElementById("couleurgrise3");
    var colorgray4 = document.getElementById("couleurgrise4");
    var colorgray5 = document.getElementById("couleurgrise5");
    var colorgray6 = document.getElementById("couleurgrise6");
    var colorgray7 = document.getElementById("couleurgrise7");
    var colorgray8 = document.getElementById("couleurgrise8");
    var colorgray9 = document.getElementById("couleurgrise9");
    var colornavbar1 = document.getElementById("textenavbar1");
    var colornavbar2 = document.getElementById("textenavbar2");
    var colornavbar3 = document.getElementById("textenavbar3");
    var colornavbar4 = document.getElementById("textenavbar4");
    var colornavbar5 = document.getElementById("textenavbar5");
    var colornavbar6 = document.getElementById("textenavbar6");
    var colornavbar7 = document.getElementById("textenavbar7");
    var colornavbar8 = document.getElementById("textenavbar8");
    var content = document.getElementById("DarkModetext");
    element.className = "light-mode";
    element1.className ="nav-light-mode";
    element2.className ="couleurnoir";
    card1.className = "card-light-mode";
    card2.className = "card-light-mode";
    card3.className = "card-light-mode";
    card4.className = "card-light-mode";
    card5.className = "card-light-mode";
    card6.className = "card-light-mode";
    card7.className = "card-light-mode";
    card8.className = "card-light-mode";
    card9.className = "card-light-mode";
    colorpurple1.className = "colorpurple1-1";
    colorgray1.className = "colorgray1-1";
    colorgray2.className = "colorgray1-1";
    colorgray3.className = "colorgray1-1";
    colorgray4.className = "colorgray1-1";
    colorgray5.className = "colorgray1-1";
    colorgray6.className = "colorgray1-1";
    colorgray7.className = "colorgray1-1";
    colorgray8.className = "colorgray1-1";
    colorgray9.className = "colorgray1-1";
    colornavbar1.className = "colorwhite";
    colornavbar2.className = "colorwhite";
    colornavbar3.className = "colorwhite";
    colornavbar4.className = "colorwhite";
    colornavbar5.className = "colorwhite";
    colornavbar6.className = "colorwhite";
    colornavbar7.className = "colorwhite";
    colornavbar8.className = "colorwhite";

    content.innerText = "Dark Mode is OFF";
  }


  function themejour(){
    const date= new Date();
    const hour = date.getHours();

    if(hour > 5 || hour < 20)
    {
        lightMode();
        document.documentElement.style.setProperty('--ecriture', 'black');
        document.documentElement.style.setProperty('--background', 'whitesmoke');
        document.documentElement.style.setProperty('--fond', 'url(../image/imagetexturecubique-modified.jpg)');
    }
    else
    {
        darkMode();
        document.documentElement.style.setProperty('--ecriture', 'whitesmoke');
        document.documentElement.style.setProperty('--background', '#212121')  ;
        document.documentElement.style.setProperty('--fond', 'url(../image/imagefond.jpg)');
    }
  }


themejour()

function darkOrlight(){
    var cb = document.querySelector('#darkorlight')

    if(cb.checked == false)
    {
        lightMode();
    }
    else
    {
        darkMode();
    }
}

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}