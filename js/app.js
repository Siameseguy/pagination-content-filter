$('.student-item').css('display', 'none');

$('.student-item').slice(0,10).each(function(){
  $(this).css('display', 'block');
});