$(function () {
    // Multi Level dropdowns
    $("ul.dropdown-menu [data-toggle='dropdown']").on("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        $(this).toggleClass("show");
        $(this).siblings().toggleClass("show");


        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
            $('.dropdown-submenu .show').removeClass("show");
        });

    });
});

// $("ul.dropdown-menu [data-toggle='dropdown']").on("mouseenter", function(e) {
//     var submenu = $(this);
//     $('.multi-level-dropdown .dropdown-submenu .dropdown-menu').removeClass('show');
//     submenu.next('.dropdown-menu').addClass('show');
//     e.stopPropagation();
//   });
// $('.multi-level-dropdown .dropdown').on("hidden.bs.dropdown", function() {
//   // hide any open menus when parent closes
//   $('.multi-level-dropdown .dropdown-menu.show').removeClass('show');
// });
