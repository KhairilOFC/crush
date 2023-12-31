
// run kembang api


    var audio1 = document.getElementById("myAudio1");
    var audio2 = document.getElementById("myAudio2");

    function playAudio(a) {
    	if (a == 1) {
    		audio1.play();
    	}else{
    		audio2.play();
    	}
    }

    function playOnLoad() {
        playAudio(audio1);
    }



function changeTextEverySecond() {
        var textElement = document.getElementById("textId");
          var texts = [
        	"Yo Hi My Crush"
        ]
        var currentIndex = 0;

        function changeText() {
            if (currentIndex < texts.length) {
                var currentTextElement = textElement.querySelector("h2");

                // Tambahkan class "fadeOut" untuk animasi fade-out
                currentTextElement.classList.add("fadeOut");

                // Hapus class "fadeIn" untuk menghindari efek fade-in pada teks yang sama
                currentTextElement.classList.remove("fadeIn");

                setTimeout(function () {
                    currentTextElement.textContent = texts[currentIndex];

                    // Hapus class "fadeOut" untuk menghindari efek fade-out pada teks yang sama
                    currentTextElement.classList.remove("fadeOut");

                    // Tambahkan class "fadeIn" untuk animasi fade-in
                    currentTextElement.classList.add("fadeIn");

                    currentIndex++;
                    setTimeout(changeText, 3900);

                    if (currentIndex === texts.length) {
						    tampilkantombol_happynewyear();
						}


                }, 1000);
            }
        }

        // Panggil fungsi changeText untuk pertama kali
        changeText();
    }


 function tampilkantombol_happynewyear() {


 	//alert('tess')
 	document.getElementById("tombol").style.display = 'inline-block';
 	 document.getElementById("tombol").classList.add("bounce");


 }


 // ketika tombol di klik

 function open_finish(){
 	playAudio(2)
 	 var video = document.getElementById("video-background");
  video.play();
 	document.getElementById("tombol").style.display = 'none';



 	document.getElementById("typing_text").style.display = 'block';



  const text = `lemme tell you my secret, actually i have crush on you but i know you don't like me, but it's ok i will try my best to get your heart hehehe`;

    const typingTextElement = document.getElementById('typing_text');
    
	    
	 
	     typeWriter(text, typingTextElement);
 	
 }


 function typeWriter(text, element) {
        let i = 0;
        const speed = 50; // Kecepatan penulisan (ms)

        function type() {
            if (i < text.length) {
                 element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }

        type();
    }



function openvideobg(){
    alert('asda')
}


