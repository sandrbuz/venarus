$(element).Cloud9Carousel(option)

$(function() {
    var showcase = $("#showcase")
    showcase.Cloud9Carousel({
        yOrigin: 30,
        yRadius: 30,
        itemClass: "card",
        buttonLeft: $(".snav-left"),
        buttonRight: $(".snav-right"),
        bringToFront: true,
        onLoaded: function() {
            showcase.css('visibility', 'visible')
            showcase.fadeIn( 100 )
        }
    })
})