window.addEventListener("load", (e) => {
  console.log("DOM loaded, Yay!");


// add even Listeners for 'click' to our nav links (a.tab)

var navButtons = document.getElementsByClassName('tab');
// var navButtons = document.querySelectorAll('.tab');

for (navButton of navButtons) {
  navButton.addEventListener('click', navClickHandler);

  function navClickHandler(event) {
    // make all buttons inactive (remove class active)
    for(navButton of navButtons) {
      navButton.classList.remove('active');
    }

    // make the clicked button inactive
    this.classList.add('active');
  }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

});

// navButtons.addEventListener('click', e => console.log(e));
//
// myButton.addEventListener('click', someFunction);
