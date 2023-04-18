console.log(bootstrap);

// $("#submit").on("click", function () {
//   const textValue = encodeURIComponent($("#userInput").val());
//   $.get({
//     url: `https://api.tvmaze.com/search/shows?q=${textValue}`,
//     success: parseData,
//     error: function (err) {
//       console.log("something bad happenned");
//     },
//   });
// });
// $("#submit").on("click", function () {
//   const textValue = encodeURIComponent($("#userInput").val());
//   $.get({
//     url: `https://api.tvmaze.com/search/shows?q=${textValue}`,
//     success: parseData,
//     error: function (err) {
//       console.log("something bad happenned");
//     },
//   });
// });

$(document).ready(function () {
  $(".promo-title").mouseover(function () {
    $(this).addClass("animate__animated animate__tada");
  });
});
