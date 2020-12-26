// First let's set the colors of our sliders
const settings={
    fill: '#1abc9c',
    background: '#d7dcdf'
  }
  
    const sliders = document.querySelector('.range-slider__range');
    applyFill(sliders);
   // Array.prototype.forEach.call(sliders,(slider)=>{
    sliders.addEventListener('input', (event)=>{
        document.querySelector(".range-slider__value").innerHTML = event.target.value;
        applyFill(event.target);
        });
        
    //});

    function applyFill(slider) {
        const percentage = 100*(slider.value-slider.min)/(slider.max-slider.min);
        const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage+0.1}%)`;
        sliders.style.background = bg;
    }




  //Code to set values 
    var myRange = document.querySelector('#slider-input');
    var myValue = document.querySelector('#slider-value');
    var off = myRange.offsetWidth / (parseInt(myRange.max) - parseInt(myRange.min));
    var px = 40 + ((myRange.valueAsNumber - parseInt(myRange.min)) * off) - (myValue.offsetParent.offsetWidth / 2);

    myValue.parentElement.style.left = px + 'px';
    myValue.parentElement.style.top = '30px';
    myValue.innerHTML = myRange.value ;

    myRange.oninput =function(){
    let px = ((myRange.valueAsNumber - parseInt(myRange.min)) * off) - (myValue.offsetWidth / 2);
    myValue.innerHTML = myRange.value;
    myValue.parentElement.style.left = px + 'px';
    };

    

  