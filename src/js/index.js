import 'bootstrap';
import '../scss/index.scss';

$('.navbar-nav>li>a').on('click', function () {
  $('.navbar-collapse').collapse('hide');
});

window.onload = function () {
  if (window.innerWidth < 550) {
    const div = document.getElementById('latestContainer');
    div.classList.remove("container");
  }
}
