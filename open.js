document.addEventListener('DOMContentLoaded', function() {
/**开场动画**/
    const imageTimer = document.getElementById("img-time");
    setTimeout(function() {
        imageTimer.src = 'none';
    }, 3000); // 3000 毫秒 = 3 秒
    document.querySelector('.initial-screen').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
    window.addEventListener('resize', function() {
        var images = document.getElementsByTagName('img0');
        for (var i = 0; i < images.length; i++) {
            var width = images[i].style.width; var height = images[i].style.height;
            images[i].style.width = (images[i].style.width || 100) + '%';
            images[i].style.height = (images[i].style.height || 100) + '%';
        }
    });
        var image = document.getElementById('img0');
        var text = document.getElementById('text_F75726_2');
        function updatePosition() {
            var imageWidth = image.offsetWidth;
            var imageHeight = image.offsetHeight;
            text.style.left = (imageWidth / 2) + 'px';
            text.style.top = (imageHeight / 2) + 'px';
        }
        updatePosition();
        });
