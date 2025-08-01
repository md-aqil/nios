var nodes = new Array("authorities", "administrative", "documents");

function shw(x) {
    if (document.getElementById(x).style.display == "none") {
        for (var i = 0; i < nodes.length; i++) {
            document.getElementById(nodes[i]).style.display = "none";

            if (x == "authorities") {
                var imgbtn = document.getElementById("list1");
                imgbtn.src = "http://220.156.188.229/images/arrow-right3a.png";
                imgbtn.alt = 'Open List';
                imgbtn.title = 'Open List';
            }
            else if (x == "administrative") {
                var imgbtn = document.getElementById("list2");
                imgbtn.src = "http://220.156.188.229/images/arrow-right3a.png";
                imgbtn.alt = 'Open List';
                imgbtn.title = 'Open List';
            }
            else {
                var imgbtn = document.getElementById("list3");
                imgbtn.src = "http://220.156.188.229/images/arrow-right3a.png";
                imgbtn.alt = 'Open List';
                imgbtn.title = 'Open List';
            }            
        }
        document.getElementById(x).style.display = "";

        if (x == "authorities") {
            var imgbtn = document.getElementById("list1");
            imgbtn.src = "http://220.156.188.229/images/arrow-right3a.png"; 
            imgbtn.alt = 'Close List';
            imgbtn.title = 'Close List';

            var imgbtn = document.getElementById("list2");
            imgbtn.src = "http://220.156.188.229/images/arrow-down3.png";
            imgbtn.alt = 'Open List';
            imgbtn.title = 'Open List';

            var imgbtn = document.getElementById("list3");
            imgbtn.src = "http://220.156.188.229/images/arrow-down3.png";
            imgbtn.alt = 'Open List';
            imgbtn.title = 'Open List';


        }
        else if (x == "administrative") {
            var imgbtn = document.getElementById("list2");
            imgbtn.src = "http://220.156.188.229/images/arrow-right3a.png"; 
            imgbtn.alt = 'Close List';
            imgbtn.title = 'Close List';

            var imgbtn = document.getElementById("list1");
            imgbtn.src = "http://220.156.188.229/images/arrow-down3.png";
            imgbtn.alt = 'Open List';
            imgbtn.title = 'Open List';

            var imgbtn = document.getElementById("list3");
            imgbtn.src = "http://220.156.188.229/images/arrow-down3.png";
            imgbtn.alt = 'Open List';
            imgbtn.title = 'Open List';
        }
        else {
            var imgbtn = document.getElementById("list3");
            imgbtn.src = "http://220.156.188.229/images/arrow-right3a.png";
            imgbtn.alt = 'Close List';
            imgbtn.title = 'Close List';

            var imgbtn = document.getElementById("list1");
            imgbtn.src = "http://220.156.188.229/images/arrow-down3.png";
            imgbtn.alt = 'Open List';
            imgbtn.title = 'Open List';

            var imgbtn = document.getElementById("list2");
            imgbtn.src = "http://220.156.188.229/images/arrow-down3.png";
            imgbtn.alt = 'Open List';
            imgbtn.title = 'Open List';
        }
        
    }
    else {
        document.getElementById(x).style.display = "none";

        if (x == "authorities") {
            var imgbtn = document.getElementById("list1");
            imgbtn.src = "http://220.156.188.229/images/arrow-down3.png";
            imgbtn.alt = 'Open List';
            imgbtn.title = 'Open List';

        }
        else if (x == "administrative") {
            var imgbtn = document.getElementById("list2");
            imgbtn.src = "http://220.156.188.229/images/arrow-down3.png";
            imgbtn.alt = 'Open List';
            imgbtn.title = 'Open List';


        }
        else {
            var imgbtn = document.getElementById("list3");
            imgbtn.src = "http://220.156.188.229/images/arrow-down3.png";
            imgbtn.alt = 'Open List';
            imgbtn.title = 'Open List';

        }

    }
}
	