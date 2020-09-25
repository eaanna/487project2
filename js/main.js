// SLIDER
// init
$(".carousel").carousel({
    interval: false,
    pause: true,
    touch: true
  });
  
  // enable prev/next navigation
  $(".carousel .carousel-control-prev").on("click", function () {
    $(".carousel").carousel("prev");
  });
  
  $(".carousel .carousel-control-next").on("click", function () {
    $(".carousel").carousel("next");
  });

  $(".carousel .carousel-inner").swipe({
    swipeLeft: function (event, direction, distance, duration, fingerCount) {
      this.parent().carousel("next");
    },
    swipeRight: function () {
      this.parent().carousel("prev");
    },
    threshold: 0,
    tap: function (event, target) {
      window.location = $(this).find(".carousel-item.active a").attr("href");
    },
    excludedElements: "label, button, input, select, textarea, .noSwipe"
  });
  

  // MODAL WINDOWS FOR BEARS
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 


//PIE CHART


  // PIE CHART 

  $('#static').listtopie({
    // options
  });

  // JSON data
  var data = [
    {
      "name": "Slice 1",
      "value": "20",
      "color": "blue"
    },
    {
      "name": "Slice 2",
      "value": "50",
      "color": "blue"
    },{
      "name": "Slice 3",
      "value": "50",
      "color": "yellow"
    }
]

$('#element').listtopie({
    dataJson: data
  });

  
  $('#static').listtopie({

    // chart size
    size: 'auto',
  
    // start angle
    startAngle: 0,
  
    // 'simple', 'fade', or 'round'
    drawType: 'round',
  
    // true = all slices have the same size
  
    // stroke color
    strokeColor: '#cccccc',
  
    // background color
    backColor: '#ffffff',
  
    // font family
    fontFamily: 'Arial',
  
    // font weight
    fontWeight: '400',
  
    // opaticy level of background color
    backColorOpacity: '0.5',
  
    // highlights slice on hover
    hoverEvent: true,
  
    // border color
    hoverBorderColor: 'gray',
  
     // border width
    hoverWidth: 1,
  
    // slice color
    hoverSectorColor: false,
  
    // enables animation on hover
    hoverAnimate: true,
  
    // animation speed (draw)
    speedDraw: 500,
  
    // animation speed (rotate)
    speedRotate: 200,
  
    // displays percent sign at the end
    usePercent: false,
  
    // easing function
    easingType: mina.linear,
  
    // stroke width
    strokeWidth: 2,
  
    // indent from center
    marginCenter: 0,
  
    // displays values in the slices
    setValues: true,
  
    // text color
    textColor: '#000000',
  
    // text size
    textSize: '12',
  
    // list data 
    listVal: false,
    listValClick: false,
    listValMouseOver: false,
    listValClass: 'listtopie-list',
    listValInsertClass: '',
    valList: function( elem, i, val ) {
      return $('<span rel=' + i + ' class="listtopie-link"/>').text(val);
    },
  
    // rotates the selected slice
    sectorRotate: false,
    
    // shows information on hover
    infoText: false,
  
    // opacity of tooltip
    infoTextBlockOpacity: '0.8',
  
    // uses JSON data
    dataJson: null,
  
    // where to append the list
    appendList: $(element),
  
    // set initial slice
    initialChangeSector: 0,
    initialHoverSector: 0
    
  });

  
// API

// goto a specific slice
$('.element').listtopie('hoverGoTo', 2);
$('.element').listtopie('changeGoTo', 2);

// up<a href="https://www.jqueryscript.net/time-clock/">date</a> an option
$('.element').listtopie('listtopieSetOption', optionName, optionValue, true);

// get the option value
$('.element').listtopie('listtopieGetOption','useMenu');

// get the current slice
$('.element').listtopie('getCurrentHoverSector', 2);
$('.element').listtopie('getCurrentChangeSector', 2);

// get the slice attribute
$('.element').listtopie('getSectorAttr', 2, sliceName);

// refresh the chart
$('.element').listtopie('refresh');

// destroy the instance
$('.element').listtopie('destroy');

//events 

$('.element').on('afterChange', function(event, listtopie){
    // console.log(listtopie.currentChangeSector);
  });
  
  $('.element').on('afterHover', function(event, listtopie){
    // console.log(listtopie.currentHoverSector);
  });
  
  $('.element').on('init', function(event, listtopie){
    // console.log('Initialized');
  });
  
  $('.element').on('uninit', function(event, listtopie){
    // console.log('Destroyed');
  });




//QUIZ
$('#quiz').quiz({
    //resultsScreen: '#results-screen',
    //counter: false,
    //homeButton: '#custom-home',
    counterFormat: 'Question %current of %total',
    questions: [
      {
        'q': 'Is jQuery required for this plugin?',
        'options': [
          'Yes',
          'No'
        ],
        'correctIndex': 0,
        'correctResponse': 'Good job, that was obvious.',
        'incorrectResponse': 'Well, if you don\'t include it, your quiz won\'t work'
      },
      {
        'q': 'How do you use it?',
        'options': [
          'Include jQuery, that\'s it!',
          'Include jQuery and the plugin javascript.',
          'Include jQuery, the plugin javascript, the optional plugin css, required markup, and the javascript configuration.'
        ],
        'correctIndex': 2,
        'correctResponse': 'Correct! Sounds more complicated than it really is.',
        'incorrectResponse': 'Come on, it\'s not that easy!'
      },
      {
        'q': 'The plugin can be configured to require a perfect score.',
        'options': [
          'True',
          'False'
        ],
        'correctIndex': 0,
        'correctResponse': 'You\'re a genius! You just set allowIncorrect to true.',
        'incorrectResponse': 'Why you have no faith!? Just set allowIncorrect to true.'
      },
      {
        'q': 'How do you specify the questions and answers?',
        'options': [
          'MySQL database',
          'In the HTML',
          'In the javascript configuration'
        ],
        'correctIndex': 2,
        'correctResponse': 'Correct! Refer to the documentation for the structure.',
        'incorrectResponse': 'Wrong! Do it in the javascript configuration. You might need to read the documentation.'
      }
    ]
  });
