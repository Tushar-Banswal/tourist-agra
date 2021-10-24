let clock = setInterval(function()
        {
            let now = new Date();
            let hr = now.getHours();
            let min = now.getMinutes();
            let sec = now.getSeconds();
            let per = 'AM';
            let day = now.getDay();
            let date = now.getDate();
            let mon = now.getMonth();
            let year = now.getFullYear();

            let dayname = ["Sunday","Monay","Tuesday","Wednesday","Thursday","Friday","Saturday"]
            let monname = ["January","February","March","April","May","June","July","August","September","October","November","December"]
            
            let dayN , monN;
            dayN = dayname[day];
            monN = monname[mon];
           
            
            
            if (hr > 12)
            {
                hr = hr - 12;
                per = 'PM';
            }
            if(hr === 0)
            {
                hr = 12;
            }
            if(min < 10)
            {
                min = '0' + min;

            }
            if(hr < 10)
            {
                hr = '0' + hr;

            }
            if(sec < 10)
            {
                sec = '0' + sec;

            }
            document.querySelector(".clock").innerHTML = hr + ':' + min + ':' + sec + ' ' + per;
            document.querySelector(".date").innerHTML = dayN + ',' + date + ' ' + monN + ',' + year;


        })

       

        