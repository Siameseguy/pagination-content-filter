// grab students list as an array
const students = $('.student-item');
const studentPages = getPages();
const pageButtons = '<div class="pagination"><ul></ul></div>';




function getPages() {
  // dynamically create new array to contain student list
  const newStudentsArray = [];
  // splice the old students array into associative arrays of 10 and push them into a new students array
  while(students.length) {
    newStudentsArray.push(students.splice(0,10));
  }
  return newStudentsArray
}

const showPages = (pageNumber, studentList) => {
  // hide student list
  $('.student-list li').css('display', 'none');
  // iterate through outter array
  $.each(studentList, function(index, value) {
    // determine if the page number is equal to the index of the array
    if(pageNumber === index) {
      // iterate through the inner arrays
      $.each(value, function(innerIndex, printValue) {
        // print the result into the index page
        $(printValue).css('display', 'block');
      });
    }
  });
}

const appendPageLinks = (studentPages) => {
  $('.page').append(pageButtons);
  let pages = studentPages.length;
  // loop through pages & make sure to start var at 1 or the list will start at 0.
  for(var i = 1; i <= pages; i++){
    // dynamically create buttons
    const buttons = '<li><a href="#">' + i + '</a></li>';
    // append button to ul
    $('.pagination ul').append(buttons);
  }
  // add active class on intial load of page
  $('.pagination ul li a').first().addClass('active');
  // add click event to buttons
  $('.pagination ul li a').on('click', function(){
    // get the index number
    const pageSelection = $(this)[0].text - 1;
    // place index number as a parameter for the showPages function
    showPages(pageSelection, studentPages); 
      // remove the active class the previously selected button and add it to the new one
      $('.pagination ul li a').removeClass();
      $(this).addClass('active');
  });
}

// initialize functions
appendPageLinks(studentPages);
showPages(0, studentPages);
