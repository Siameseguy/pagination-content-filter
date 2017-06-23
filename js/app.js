const students = $('.student-item');


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
        console.log(list);
        $(list).fadeIn('fast');
      })
    }
  });
}

showPages(0, getPages());