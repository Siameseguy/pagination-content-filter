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
  $('.student-list li').hide();
  $.each(studentList, function(index, value){
    if(pageNumber === index) {
      $.each(value, function(i, list){
        $(list).fadeIn('fast');
      })
    }
  });
}

function appendPageLinks(studentPages){
  $('.page').append(pageButtons);
  let pages = studentPages.length;
  for(var i = 0; i < pages; i++){
    let buttons = '<li><a href="#">' + i + '</a></li>';
    $('.pagination ul').append(buttons);
  }
}



appendPageLinks(studentPages);
showPages(0, studentPages);