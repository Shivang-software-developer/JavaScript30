let parentNode = document.getElementsByClassName('keys');
document.addEventListener('keydown', function (event) {

    // find audio elements which match with event-keyCode  
    let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`); // uses ES-6 to grab event.keyCode variable for attribute selector statement

    // find corresponding keys
    let key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

    // if audio DOM-Node is found then add transition class, with seeking its current time to 0 and start playing
    if (audio) {
        key.classList.add('playing');
        audio.currentTime = 0;
        audio.play();

        // find all keys
        let keys = document.querySelectorAll('.key');

        // removeTransition function will remove the css-class
        function removetransition(e) {
            if (e.propertyName != 'transform') {
                return;
            } else {
                this.classList.remove('playing');
            }
        };

        // add Event listener on all keys inside .keys parent Node.
        keys.forEach(key => key.addEventListener('transitionend', removetransition));
    } else {
        // return for the elements not corresponding to its audio elements.
        return;
    }



});