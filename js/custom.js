document.addEventListener("DOMContentLoaded", function () {
    // Carrega o HEADER
    fetch("header.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("header-placeholder").innerHTML = data;

        // Reexecuta animações no header
        if (typeof $.fn.appear === "function") {
          $('[data-appear-animation]').appear(function () {
            const $el = $(this);
            if (!$el.hasClass('appear-animation-visible')) {
              const delay = $el.data('appear-animation-delay') || 0;
              setTimeout(() => {
                $el.addClass('appear-animation-visible');
              }, delay);
            }
          }, { accX: 0, accY: -50 });
        }
      })
      .catch(error => console.error("Erro ao carregar o header:", error));

    // Carrega o FOOTER
    fetch("footer.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("footer-placeholder").innerHTML = data;

        // Reexecuta animações no footer
        if (typeof $.fn.appear === "function") {
          $('[data-appear-animation]').appear(function () {
            const $el = $(this);
            if (!$el.hasClass('appear-animation-visible')) {
              const delay = $el.data('appear-animation-delay') || 0;
              setTimeout(() => {
                $el.addClass('appear-animation-visible');
              }, delay);
            }
          }, { accX: 0, accY: -50 });
        }
      })
      .catch(error => console.error("Erro ao carregar o footer:", error));
  });

