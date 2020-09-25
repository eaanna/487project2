

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
