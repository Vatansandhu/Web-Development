Slider
        $(document).ready(function() {
            $('.dot').on('click', function() {
                var index = $(this).data('index');
                $('.service-item').hide().eq(index).fadeIn();
                $('.dot').removeClass('active').eq(index).addClass('active');
            });
        });
 


        Project


        $(document).ready(function(){
            $('.content-option').click(function(){
              var newImage = $(this).data('image');
              $('#projectImage').attr('src', newImage);
            });
          });
  
          
          growth

          $(document).ready(function() {
            $('.growth-card').hover(
                function() {
                    $(this).addClass('highlighted');
                },
                function() {
                    $(this).removeClass('highlighted');
                }
            );
        });