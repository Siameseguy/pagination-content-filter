const students = $('.student-item');
const studentPages = getPages();
const pageButtons = '<div class="pagination"><ul></ul></div>';


function getPages() {
  newStudentList = [];
  while(students.length){
    newStudentList.push(students.splice(0,10));
  }
  return newStudentList;
}

function showPages(pageNumber, studentList) {
  $('.student-list li').css('display', 'none');
  $.each(studentList, function(index, value){
    if(pageNumber === index) {
      $.each(value, function(innerIndex, innerValue){
        $(innerValue).css('display', 'block');
      })
    }
  });
}

function appendPageLinks(studentPages){
  $('.page').append(pageButtons);
  let pages = studentPages.length;
  // loop through pages & make sure to start var at 1 or the list will start at 0.
  // use <= to show last page
  for(var i = 1; i <= pages; i++){
    let buttons = '<li><a href="#">' + i + '</a></li>';
    $('.pagination ul').append(buttons);
  }
  $('.pagination ul li a').first().addClass('active');

  $('.pagination ul li a').on('click', function(){
    // add -1 to 
    var pageSelection = parseInt($(this)[0].text) - 1;
    console.log(pageSelection);
    showPages(pageSelection, studentPages); 
    $('.pagination ul li a').removeClass();
    $(this).addClass('active');
  });
}



appendPageLinks(studentPages);
showPages(0, studentPages);