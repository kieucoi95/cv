 $(function(){
  $("a[href='#home']").click(function() {
    // $(this).addClass('menu');
    // $("a[href='#about'], a[href='#skills], a[href='#contacts']").removeClass('menu');
    $("html, body").animate({ scrollTop:$(".home").offset().top}, "slow");
    return false;
  });
  $("a[href='#about']").click(function() {
    // $(this).addClass('menu');
    // $("a[href='#home'], a[href='#skills], a[href='#contacts']").removeClass('menu');
    $("html, body").animate({ scrollTop:$(".about").offset().top}, "slow");
    return false;
  });
  $("a[href='#skills']").click(function() {
    // $(this).addClass('menu');
    // $("a[href='#about'], a[href='#home], a[href='#contacts']").removeClass('menu');
    $("html, body").animate({ scrollTop:$(".skills").offset().top }, "slow");
    return false;
  });
  $("a[href='#contacts']").click(function() {
    // $(this).addClass('menu');
    // $("a[href='#about'], a[href='#skills], a[href='#home']").removeClass('menu');
    $("html, body").animate({ scrollTop:$(".contacts").offset().top }, "slow");
    return false;
  });
  $("a[href='#home']").click(function() {
    $(this).addClass('menu');
    $("a[href='#about'], a[href='#skills'], a[href='#contacts']").removeClass('menu');
  });
  $("a[href='#about']").click(function() {
    $(this).addClass('menu');
    $("a[href='#home'], a[href='#skills'], a[href='#contacts']").removeClass('menu');
  });
  $("a[href='#skills']").click(function() {
    $(this).addClass('menu');
    $("a[href='#about'], a[href='#home'], a[href='#contacts']").removeClass('menu');
  });
     
  $("a[href='#contacts']").click(function() {
    $(this).addClass('menu');
    $("a[href='#about'], a[href='#skills'], a[href='#home']").removeClass('menu');
  });




  
  
})  

 