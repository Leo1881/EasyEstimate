      function calculateScore(choice1, choice2, choice3) {
  switch (choice1) {
    case 1:
      return calculateSmall(choice1, choice2, choice3);
    case 2:
      return calculateMedium(choice1, choice2, choice3);
    case 3:
      return calculateLarge(choice1, choice2, choice3);
    case 4:
      return calculateExtraLarge(choice1, choice2, choice3);
    default:
      return 0;
  }
}

function calculateSmall(choice1, choice2, choice3) {
  if (choice2 == 1) {
    if (choice3 == 1) return 1;
    else if (choice3 == 2) return 2;
    else if (choice3 == 3) return 3;
    else return 5;
  } else if (choice2 == 2) {
    if (choice3 == 1) return 2;
    else if (choice3 == 2) return 3;
    else if (choice3 == 3) return 5;
    else return 8;
  } else if (choice2 == 3) {
    if (choice3 == 1) return 3;
    else if (choice3 == 2) return 5;
    else if (choice3 == 3) return 8;
    else return 13;
  } else if (choice2 == 4) {
    if (choice3 == 1) return 8;
    else if (choice3 == 2) return 8;
    else if (choice3 == 3) return 13;
    else return 20;
  } else return 0;
}
function calculateMedium(choice1, choice2, choice3) {
  if (choice2 == 1) {
    if (choice3 == 1) return 2;
    else if (choice3 == 2) return 3;
    else if (choice3 == 3) return 5;
    else return 8;
  } else if (choice2 == 2) {
    if (choice3 == 1) return 3;
    else if (choice3 == 2) return 5;
    else if (choice3 == 3) return 8;
    else return 13;
  } else if (choice2 == 3) {
    if (choice3 == 1) return 5;
    else if (choice3 == 2) return 8;
    else if (choice3 == 3) return 13;
    else return 20;
  } else if (choice2 == 4) {
    if (choice3 == 1) return 8;
    else if (choice3 == 2) return 13;
    else if (choice3 == 3) return 20;
    else return 40;
  } else return 0;
}
function calculateLarge(choice1, choice2, choice3) {
  if (choice2 == 1) {
    if (choice3 == 1) return 3;
    else if (choice3 == 2) return 5;
    else if (choice3 == 3) return 8;
    else return 13;
  } else if (choice2 == 2) {
    if (choice3 == 1) return 5;
    else if (choice3 == 2) return 8;
    else if (choice3 == 3) return 13;
    else return 20;
  } else if (choice2 == 3) {
    if (choice3 == 1) return 8;
    else if (choice3 == 2) return 13;
    else if (choice3 == 3) return 20;
    else return 40;
  } else if (choice2 == 4) {
    if (choice3 == 1) return 13;
    else if (choice3 == 2) return 20;
    else if (choice3 == 3) return 40;
    else return 40;
  } else return 0;
}
function calculateExtraLarge(choice1, choice2, choice3) {
  if (choice2 == 1) {
    if (choice3 == 1) return 5;
    else if (choice3 == 2) return 8;
    else if (choice3 == 3) return 13;
    else return 20;
  } else if (choice2 == 2) {
    if (choice3 == 1) return 8;
    else if (choice3 == 2) return 13;
    else if (choice3 == 3) return 20;
    else return 40;
  } else if (choice2 == 3) {
    if (choice3 == 1) return 13;
    else if (choice3 == 2) return 20;
    else if (choice3 == 3) return 40;
    else return 40;
  } else if (choice2 == 4) {
    if (choice3 == 1) return 20;
    else if (choice3 == 2) return 40;
    else if (choice3 == 3) return 40;
    else return 100;
  } else return 0;
} 

function calculateEstimate(){
    const val1 = parseInt($('#uncertainty').val());
    const val2 = parseInt($('#complexity').val());
    const val3 = parseInt($('#amount').val());
 
 $("#result").text(calculateScore(val1, val2, val3));
 // label here .text = calculateScore(val1, val2, val3);
}

function reset() {
    $('#uncertainty').val('None');
    $('#complexity').val('None');
    $('#amount').val('None');

    $("#result").text('0');
}