console.log("Helloo");
let data = {};
let time = 0;


const Observer = (
  function () {
    let changeListener = [];

    /*
     * This function puts in the array
     * the functions you want to "make react".
     * @param {Function} callbackfunction 
     */
    const subscribe = function subscribe(callbackfunction) {
      changeListener.push(callbackfunction);
    }

    /**
     * While the data change, the functions "react". 
     * @param {Object} data 
     */
    function publish(data) {
      changeListener.forEach((changeListener) => { changeListener(data); });
    }

    return {
      subscribe,
      publish,
    }
  }
)();


const updateNotificationBar = function(data) {
  const notificationBar = document.querySelector('.col-md-12');
  console.log(data);
  
  notificationBar.innerHTML = `Last Action: ${data.data} - ${data.time} seconds ago`;
} 

Observer.subscribe(updateNotificationBar);

const fire = function(e) {
  Observer.publish(Object.assign({data:e.target.parentElement.tagName}))
};

const hover = function(e) {
  Observer.publish(Object.assign({data:e.target.tagName}));
};

function incrementSeconds() {
  Observer.publish(Object.assign({time: time += 1}));
}

document.addEventListener('click', fire);

document.addEventListener('mouseover', hover);

var cancel = setInterval(incrementSeconds, 1000);




