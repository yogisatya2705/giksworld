let works = [
  {
    id: 1,
    title: "ETIKA",
    date: "2020-03-10",
    img: "./img/works/pemira.png",
    content: "./works/pemira.html",
    tag: "PHP,CI",
  },
  {
    id: 2,
    title: "Klasifikasi Penerima Kredit ID3",
    date: "2020-03-15",
    img: "./img/works/id3.png",
    content: "./works/id3.html",
    tag: "PHP,CI",
  },
];

$(document).ready(function () {
  _renderWorks();

  function _renderWorks() {
    var str = "";
    var str_modal = "";

    works.forEach((element) => {
      str +=
        // '<div class="item" onclick="pop_up(\''+element.id+'\', \''+element.title+'\', \''+element.date+'\', \''+element.tag+'\', \''+element.content+'\');">' +
        "<div class=\"item\" onclick=\"document.getElementById('"+element.id+"').style.display='block'\">" +
        '<div class="pad15">' +
        '<div style="' +
        "background: url('" +
        element.img +
        "');" +
        "background-repeat: no-repeat;" +
        "height: 100%" +
        '">' +
        '<div class="content">' +
        '  <div class="lead">' +
        element.title +
        "</div>" +
        "  <div>" +
        element.date +
        "</div>" +
        "  <div class='item_tag'>" +
        element.tag +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>";

      str_modal += 
        '<div id="'+element.id+'" class="w3-modal">' +
        '    <div' +
        '    class="w3-modal-content"' +
        '    style="border: 2px solid black !important;"' +
        '    >' +
        '    <div class="w3-container">' +
        '        <span' +
        '        onclick="document.getElementById(\''+element.id+'\').style.display=\'none\'"' +
        '        class="w3-button w3-display-topright"' +
        '        >&times;</span' +
        '        >' +
        '        <div style="padding: 20px 10px 20px 10px;">' +
        '        <div class="mb-3" style="height: 16pt; position: relative;">' +
        '            <div' +
        '            class="font_header font_underline font_size_16"' +
        '            style="float: left;"' +
        '            >' +
        '            ' + element.title +
        '            </div>' +
        '            <div' +
        '            class="font_header font_size_16 w3-hide-medium"' +
        '            style="position: absolute; right: 0px;"' +
        '            >' +
        '            '+element.date+' | '+element.tag+'' +
        '            </div>' +
        '        </div>' +
        '        <div>' +
        '            <iframe' +
        '            src="'+element.content+'"' +
        '            frameborder="0"' +
        '            style="width: 100%;"' +
        '            ></iframe>' +
        '        </div>' +
        '        </div>' +
        '    </div>' +
        '    </div>' +
        '</div>';
    });

    document.getElementById("content_works").innerHTML = str;
    document.getElementById("sec_modal").innerHTML = str_modal;
  }

  ResFooterSize();

  function ResFooterSize() {
    var bodyWidth = $("body").width();

    var element = document.getElementById("foot_sec_2");
    var element_contact = document.getElementById("contact");
    var element_contact_val = document.getElementById("contact_val");
    if (bodyWidth < 768) {
      element.classList.remove("text-right");
      element.classList.add("border-top");
      element.classList.add("border-dark");
      element.classList.add("mt-2");
      element.classList.add("pt-2");

      element_contact.classList.remove("font_size_16");
      element_contact.classList.add("font_size_14");
      element_contact_val.classList.remove("font_size_14");
      element_contact_val.classList.add("font_size_12");
    } else {
      element.classList.add("text-right");
      element.classList.remove("border-top");
      element.classList.remove("border-dark");
      element.classList.remove("mt-2");
      element.classList.remove("pt-2");

      element_contact.classList.remove("font_size_14");
      element_contact.classList.add("font_size_16");
      element_contact_val.classList.remove("font_size_12");
      element_contact_val.classList.add("font_size_14");
    }
  }

  var itemsMainDiv = ".MultiCarousel";
  var itemsDiv = ".MultiCarousel-inner";
  var itemWidth = "";

  $(".leftLst, .rightLst").click(function () {
    var condition = $(this).hasClass("leftLst");
    if (condition) click(0, this);
    else click(1, this);
  });

  ResCarouselSize();

  $(window).resize(function () {
    ResCarouselSize();
    ResFooterSize();
  });

  //this function define the size of the items
  function ResCarouselSize() {
    var incno = 0;
    var dataItems = "data-items";
    var itemClass = ".item";
    var id = 0;
    var btnParentSb = "";
    var itemsSplit = "";
    var sampwidth = $(itemsMainDiv).width();
    var bodyWidth = $("body").width();
    $(itemsDiv).each(function () {
      id = id + 1;
      var itemNumbers = $(this).find(itemClass).length;
      btnParentSb = $(this).parent().attr(dataItems);
      itemsSplit = btnParentSb.split(",");
      $(this)
        .parent()
        .attr("id", "MultiCarousel" + id);

      itemWidth = 500;

      if (bodyWidth >= 530) {
        itemWidth = 500;
      } else {
        itemWidth = bodyWidth - 30;
      }

      // if (bodyWidth >= 1200) {
      //     incno = itemsSplit[3];
      //     itemWidth = sampwidth / incno;
      // }
      // else if (bodyWidth >= 992) {
      //     incno = itemsSplit[2];
      //     itemWidth = sampwidth / incno;
      // }
      // else if (bodyWidth >= 768) {
      //     incno = itemsSplit[1];
      //     itemWidth = sampwidth / incno;
      // }
      // else {
      //     incno = itemsSplit[0];
      //     itemWidth = sampwidth / incno;
      // }
      $(this).css({
        transform: "translateX(0px)",
        width: itemWidth * itemNumbers,
      });
      $(this)
        .find(itemClass)
        .each(function () {
          $(this).outerWidth(itemWidth);
        });

      $(".leftLst").addClass("over");
      $(".rightLst").removeClass("over");
    });
  }

  //this function used to move the items
  function ResCarousel(e, el, s) {
    var leftBtn = ".leftLst";
    var rightBtn = ".rightLst";
    var translateXval = "";
    var divStyle = $(el + " " + itemsDiv).css("transform");
    var values = divStyle.match(/-?[\d\.]+/g);
    var xds = Math.abs(values[4]);
    if (e == 0) {
      translateXval = parseInt(xds) - parseInt(itemWidth * s);
      $(el + " " + rightBtn).removeClass("over");

      if (translateXval <= itemWidth / 2) {
        translateXval = 0;
        $(el + " " + leftBtn).addClass("over");
      }
    } else if (e == 1) {
      var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
      translateXval = parseInt(xds) + parseInt(itemWidth * s);
      $(el + " " + leftBtn).removeClass("over");

      if (translateXval >= itemsCondition - itemWidth / 2) {
        translateXval = itemsCondition;
        $(el + " " + rightBtn).addClass("over");
      }
    }
    $(el + " " + itemsDiv).css(
      "transform",
      "translateX(" + -translateXval + "px)"
    );
  }

  //It is used to get some elements from btn
  function click(ell, ee) {
    var Parent = "#" + $(ee).parent().attr("id");
    var slide = $(Parent).attr("data-slide");
    ResCarousel(ell, Parent, slide);
  }
});
