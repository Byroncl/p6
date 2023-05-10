$(document).ready(function(){
    //primera clase activa
    $('.category-list .categoryItem[category="all"]').addClass('ct_item-active');

    //función de click
    $('.categoryItem').click(function(){
        //crear variable al dar click
        var products = $(this).attr('category'); 

        //agregar una clase al enlace seleccionado
        $('.categoryItem').removeClass('ct_item-active');
        $(this).addClass('ct_item-active');

        //ocultar producos
        $('.product-item').css('transform', 'scale(0)');
        function hideProduct(){
            $('.product-item').hide();
        } setTimeout(hideProduct,400);
        
        //Mostrar productos
        function showProduct(){
            $('.product-item[category="'+products+'"]').show();
            $('.product-item[category="'+products+'"]').css('transform', 'scale(1)');
        } setTimeout(showProduct,400);
    });

    //Mostrar todo
    $('.categoryItem[category="all"]').click(function(){
        function showAll(){
            $('.product-item').show();
            $('.product-item').css('transform', 'scale(1)');
        } setTimeout(showAll,400);
    });
});