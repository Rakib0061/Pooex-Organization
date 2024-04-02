/* eslint-disable no-unused-vars */

// ❗❗Alert : you can't use tooltip and offcanvas simultaneously.

// import Alert from 'bootstrap/js/dist/alert';
import Button from 'bootstrap/js/dist/button';
import Carousel from 'bootstrap/js/dist/carousel';
import Collapse from 'bootstrap/js/dist/collapse';
// import Dropdown from 'bootstrap/js/dist/dropdown';
// import Modal from 'bootstrap/js/dist/modal';
import Offcanvas from 'bootstrap/js/dist/offcanvas';
// import Popover from 'bootstrap/js/dist/popover';
// import ScrollSpy from 'bootstrap/js/dist/scrollspy';
import Tab from 'bootstrap/js/dist/tab';
// import Toast from 'bootstrap/js/dist/toast';
import Tooltip from 'bootstrap/js/dist/tooltip';

// 🔴tooltip functionality start
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]',
);
Array.from(tooltipTriggerList).map(
  (tooltipTriggerEl) => new Tooltip(tooltipTriggerEl),
);
// 🔴tooltip functionality end

// 🔴form validation functionality start
(() => {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      'submit',
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      },
      false,
    );
  });
})();
// 🔴form validation functionality end
