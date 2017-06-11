 /*tooltip*/
 $(function(){
  $('[data-toogle="tooltip"]').tooltip();
});

/*modal*/
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})