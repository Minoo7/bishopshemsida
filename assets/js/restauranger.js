$(document).ready(function(){
  $('div.places').click(function(){
    
    var child = $(this).children();
    var tsec = $(child).children('section');
    var tard = $(child).children('.arrowdown');
    var ttel = $(child).children('.tel');

    function showOne() {
      $('div.places section').not(tsec).hide();
      $('div.places .arrowdown').not(tard).attr("class","arrow");
      $('div.places .tel').not(ttel).removeClass('newline');
    }
    showOne(tsec);

    $(child).children('section').toggle();

    $(child).children('.arrow').toggleClass('arrowdown');
    $(child).children('.tel').toggleClass('newline');

    $("a").click(function() { try {return false;}
      finally {
        $('<form method="get" action="' + $(this).attr("href") + '"></form>').appendTo("body").submit();
      }
    });
  });

  $(".places aside p").click(function() { try {return false;}
    finally {
      $('.places aside .miniarrow').toggleClass('miniarrowdown');
      $('.places aside ul').toggle();
    }
  });
  
});

document.addEventListener('mousedown', function (event) { //prevent double click selection
    if (event.detail > 1) {
      event.preventDefault();
    }
}, false);

function showtimes() {
  $(".places aside p").click(function() { try {
    return false;
  }
  finally {
    $('.places aside ul').toggle();
  }
  });
}

function search() {
  var input, filter, ul, li, div, h2, places, a, i, txtValueA, txtValueB;
  input = document.getElementsByTagName("input")[0];
  filter = input.value.toUpperCase();
  places = document.getElementsByClassName("places");
  for (i = 0; i < places.length; i++) {
      a = places[i].getElementsByTagName("a")[0];
      h2 = places[i].getElementsByTagName("h2")[0];
      txtValueA = a.innerText;
      txtValueB = h2.textContent;
      if ((txtValueA.toUpperCase().indexOf(filter) > -1) || (txtValueB.toUpperCase().indexOf(filter) > -1)) {
          places[i].style.display = "";
      } else {
          places[i].style.display = "none";
      }
  }
}