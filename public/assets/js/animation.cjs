

/******** Chart pie animation ***********/

//counter 0 to 100
var counter = 15;
//function to increment counter
function incrementCounter() {
    counter++;
    // enumarate all elements with id counter
    document.querySelectorAll("#counter").forEach((element) => {
        element.innerHTML = counter + "%";
    });


    if (counter >= 0) {
        // change class name from all id counter
        //change the color to red

        document.querySelectorAll("#chart-pie").forEach((element) => {

            element.classList.add("red");
        });
    }
    if (counter >= 49) {
        //change the color to orange
        document.querySelectorAll("#chart-pie").forEach((element) => {

            element.classList.add("orange");
        });    }
    if (counter >= 90) {
        //change the color to green
        document.querySelectorAll("#chart-pie").forEach((element) => {

            element.classList.add("green");
        });
    }
}


window.onload = function () {

// check which page is loaded
    if (document.getElementById("counter")) {
        setInterval(() => {
            //check if counter is less than 100
            if (counter < 100) {
                //increment counter
                incrementCounter();
            }
        }, 70, 1000);
    }


}



/******** Shadow image animation ***********/

function triggerAnimation() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-up-animation');
            } else {
                entry.target.classList.remove('slide-up-animation');
            }

        });
    });

    document.querySelectorAll('.image-shadow').forEach(image => {
        observer.observe(image);
    }
    );

}


window.addEventListener('load', function () {
    triggerAnimation();
});

// reduce font size
var text = document.querySelectorAll(".template-subtitle");

// loop through all elements with class template-subtitle
text.forEach((element) => {
    // get font size from element
    var fontSize = parseInt(window.getComputedStyle(element).fontSize);
    // get text height from element
    var textHeight = element.offsetHeight;
// check it text height is greater than 120px
    if (textHeight > 180) {
        // change font size to 30px
        element.style.fontSize = fontSize / 2 + "px";
    }
});