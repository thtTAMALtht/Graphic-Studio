// top2bottom code start

//Get the button
var mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// top2bottom code end............................................................


// counterup code start

// $(document).ready(function () {
//   $('.counter').counterUp({
//     delay: 10,
//     time: 500
//   });
// });

jQuery(document).ready(function ($) {
  $('.counter').counterUp({
    delay: 10,
    time: 1200
  });
});

// counterup code end................................................................


//mixitup code start.................................................................

$(document).ready(function () {
  var mixer = mixitup('.box-list');
});

//mixitup code end....................................................................




// circle progress bar code start......................................................

 $(document).ready(function () {
            $('.chart').easyPieChart({
                barColor: '#289CCB',
                trackColor: '#fff',
                scaleColor: '#ef1e25',
                scaleLength: false,
                // lineCap: 'round',
                lineCap: 'square',
                lineWidth: 7,
                size: 150,
                animate: 1000
            });
        });

// circle progress bar code end..........................................................