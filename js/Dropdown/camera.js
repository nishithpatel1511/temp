$(function () {
  var r = 0; var l = 1; var n = 0;
  $.getJSON("https://nishithpatel1511.github.io/GadgetsGalaxy/js/Dropdown/json/camera.json",function (data) {
      $.each(data, function (key, value) {
        n++;
      });
      temp = n;

      $.each(data, function (key, value) {

        //four cols
        if (window.innerWidth < 992) {
          if ((l % 4) == 1) {
            r++;
            $('#megamenu-camera').append('<div class="row megamenu-row" id="camera-row-' + r + '"></div>');
            l = 1;
          }

          if ((temp % 4 == 2) & (n == 2)) {
            row = '#camera-row-' + r;
            $(row).append('<div class="megamenu-col-4" id="' + r + '-camera-col-0 "></div>');
            $(row).append('<div class="megamenu-col-4" id="' + r + '-camera-col-' + l + '"></div>');
            col = '#' + r + '-camera-col-' + l;
            $(col).append('<h5 id="megamenu-title">' + key + '</h5><ul class="list-unstyled megamenu-list" id="' + r + '-camera-list-' + l + '"></ul>');
            list = '#' + r + '-camera-list-' + l;
            $.each(value, function (k, v) {
              $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
            });
            n--;
          }
          else {
            row = '#camera-row-' + r;
            $(row).append('<div class="megamenu-col-4" id="' + r + '-camera-col-' + l + '"></div>');
            col = '#' + r + '-camera-col-' + l;
            $(col).append('<h5 id="megamenu-title">' + key + '</h5><ul class="list-unstyled megamenu-list" id="' + r + '-camera-list-' + l + '"></ul>');
            list = '#' + r + '-camera-list-' + l;
            $.each(value, function (k, v) {
              $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
            });
            n--;
          }
        }

        //five cols
        else if (window.innerWidth < 1200 & window.innerWidth >= 992) {
          if (l % 5 == 1) {
            r++;
            $('#megamenu-camera').append('<div class="row megamenu-row" id="camera-row-' + r + '"></div>');
            l = 1;
          }

          if((temp%5==2)&(n==2)){
            row = '#camera-row-' + r;
            $(row).append('<div class="megamenu-col-5" id="' + r + '-camera-col-0"></div>');
            $(row).append('<div class="megamenu-col-5" id="' + r + '-camera-col-' + l + '"></div>');
            col = '#' + r + '-camera-col-' + l;
            $(col).append('<h5 id="megamenu-title">' + key + '</h5><ul class="list-unstyled megamenu-list" id="' + r + '-camera-list-' + l + '"></ul>');
            list = '#' + r + '-camera-list-' + l;
            $.each(value, function (k, v) {
              $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
            });
            $(row).append('<div class="megamenu-col-5" id="' + r + '-camera-col-00"></div>');
            n--;
          }
          else if ((temp % 5 == 3) & (n == 3)) {
            row = '#camera-row-' + r;
            $(row).append('<div class="megamenu-col-5" id="' + r + '-camera-col-0 "></div>');
            $(row).append('<div class="megamenu-col-5" id="' + r + '-camera-col-' + l + '"></div>');
            col = '#' + r + '-camera-col-' + l;
            $(col).append('<h5 id="megamenu-title">' + key + '</h5><ul class="list-unstyled megamenu-list" id="' + r + '-camera-list-' + l + '"></ul>');
            list = '#' + r + '-camera-list-' + l;
            $.each(value, function (k, v) {
              $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
            });
            n--;
          }
          else {
            row = '#camera-row-' + r;
            $(row).append('<div class="megamenu-col-5" id="' + r + '-camera-col-' + l + '"></div>');
            col = '#' + r + '-camera-col-' + l;
            $(col).append('<h5 id="megamenu-title">' + key + '</h5><ul class="list-unstyled megamenu-list" id="' + r + '-camera-list-' + l + '"></ul>');
            list = '#' + r + '-camera-list-' + l;
            $.each(value, function (k, v) {
              $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
            });
            n--;
          }
        }

        //six cols
        else if (window.innerWidth >= 1200) {
          if ((l % 6) == 1) {
            r++;
            $('#megamenu-camera').append('<div class="row megamenu-row" id="camera-row-' + r + '"></div>');
            l = 1;
          }

          if ((temp % 6 == 2) & (n == 2)) {
            row = '#camera-row-' + r;
            $(row).append('<div class="megamenu-col-3" id="' + r + '-camera-col-0 "></div>');
            $(row).append('<div class="megamenu-col-6" id="' + r + '-camera-col-' + l + '"></div>');
            col = '#' + r + '-camera-col-' + l;
            $(col).append('<h5 id="megamenu-title">' + key + '</h5><ul class="list-unstyled megamenu-list" id="' + r + '-camera-list-' + l + '"></ul>');
            list = '#' + r + '-camera-list-' + l;
            $.each(value, function (k, v) {
              $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
            });
            n--;
          }
          else if ((temp % 6 == 4) & (n == 4)) {
            row = '#camera-row-' + r;
            $(row).append('<div class="megamenu-col-6" id="' + r + '-camera-col-0 "></div>');
            $(row).append('<div class="megamenu-col-6" id="' + r + '-camera-col-' + l + '"></div>');
            col = '#' + r + '-camera-col-' + l;
            $(col).append('<h5 id="megamenu-title">' + key + '</h5><ul class="list-unstyled megamenu-list" id="' + r + '-camera-list-' + l + '"></ul>');
            list = '#' + r + '-camera-list-' + l;
            $.each(value, function (k, v) {
              $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
            });
            n--;
          }
          else {
            row = '#camera-row-' + r;
            $(row).append('<div class="megamenu-col-6" id="' + r + '-camera-col-' + l + '"></div>');
            col = '#' + r + '-camera-col-' + l;
            $(col).append('<h5 id="megamenu-title">' + key + '</h5><ul class="list-unstyled megamenu-list" id="' + r + '-camera-list-' + l + '"></ul>');
            list = '#' + r + '-camera-list-' + l;
            $.each(value, function (k, v) {
              $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
            });
            n--;
          }
        }

        l++;
      });
  });
});