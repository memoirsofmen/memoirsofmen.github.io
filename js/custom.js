    $(document).ready(function() {


        var userFeed = new Instafeed({





            get: 'user',
            userId: '6935940613',
            limit: 15,
            resolution: 'standard_resolution',
            accessToken: '6935940613.1677ed0.9496fd5d8d4a48ed9a282332e2b7909b',
            sortBy: 'most-commented',
              template: '<div class="col-lg-4 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
       
        




        });


        var feed = new Instafeed({
      // other options...
      filter: function(image) {
        var newCaption = [];
        var captionParts;

        if (image.caption && image.caption.text && image.caption.text.length > 0) {
          captionParts = image.caption.text.split(' ');
          for (var i=0; i < captionParts.length ; i++) {
            if (captionParts[i].charAt(0) !== '#') {
              newCaption.push(captionParts[i]);
            }
          }
        }

        image.caption_without_tags = newCaption.join(' ');

        return true; // so we don't exclude any images
      }
    });

        userFeed.run();

        
        // This will create a single gallery from all elements that have class "gallery-item"
        $('.gallery').magnificPopup({
            type: 'image',
            delegate: 'a',
            gallery: {
                enabled: true
            }
        });


    });
