$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const person1Input = $("input#person1").val();
    const foodInput = $("input#food").val();
    const musicInput = $("input#music").val();
    const flavor = $("input:radio[name=flavor]:checked").val();
    const dob = $("#born").val();
    const favoriteColor = $("#color").val();

    $(".person1").text(person1Input);
    $(".food").text(foodInput);
    $(".music").text(musicInput);

    $("#survey").show();

    event.preventDefault();
  });
});
