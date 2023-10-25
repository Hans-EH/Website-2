import React, { useState, useEffect } from 'react';
function Natascha() {
    const [count, setCount] = useState(0);
    const [newPhoto, setNewPhoto] = useState("https://onedrive.live.com/embed?resid=69516195C20B206F%2158932&authkey=%21ABanBI76WCZ07lw")
    const [photo, setPhoto] = useState("https://onedrive.live.com/embed?resid=69516195C20B206F%2158932&authkey=%21ABanBI76WCZ07lw")
    const [sliderValue, setSliderValue] = useState(0); // Initial value

    const handleSliderChange = (event) => {
        setSliderValue(event.target.value);
    };
    const [imageURL, setImageURL] = useState('');
    const [timeKeeper, setTimeKeeper] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeKeeper(timeKeeper + 1)
            setCount(count + 1);
            const min = 2157934;
            const max = min + 3000;
            const img = new Image();
            const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
            setImageURL("https://onedrive.live.com/embed?resid=69516195C20B206F%" + String(randomNum) + "&authkey=%21ABanBI76WCZ07lw")
            img.src = imageURL;
            img.onload = () => {
                // If the image loads successfully, set it as the image URL.
                setNewPhoto(imageURL);
            };

            img.onerror = () => {
                // If the image does not exist, handle it here.
                // You could try generating another random image URL or display a placeholder image.
            };
            if (timeKeeper % 50 === 0) {
                setPhoto(newPhoto)
            }


        }, 250);
        // Clean up the interval when the component unmounts
        return () => {
            clearInterval(interval);
        };
    });

    const backgroundStyle = {
        filter: "saturate(50%) blur(30px) drop-shadow(0px 0px 10px hsl(" + sliderValue + ", 100%, 50%))", width: "100%", height: "100vh", position: "absolute", display: "block"
    }
    const imageStyle = {
        filter: "drop-shadow(0px 0px 100px hsl(" + sliderValue + ", 100%, 50%))", zIndex: "1", width: "auto", display: "flex", height: "100vh", position: "relative"
    }

    return (
        <div>
            <img style={backgroundStyle} src={photo} alt="" />
            <img style={imageStyle} src={photo} alt="" />
            <h1 style={{ backgroundColor: "transparent", zIndex: "1", width: "auto", color: "white", position: "absolute", top: "90vh", left: "2vh" }}>
                Kærester i {(((new Date()) - Date.parse('25 July 2023 00:00:00 GMT')) / (24 * 60 * 60 * 1000)).toFixed(0)} dage
            </h1>
            <h1 style={{ backgroundColor: "transparent", zIndex: "1", width: "auto", color: "white", position: "absolute", top: "90vh", right: "2vh" }}>
                {String((new Date()).toLocaleDateString("en-GB") + " " + (new Date()).toLocaleTimeString("en-GB"))}
            </h1>

            <div>
                <input
                    type="range"
                    min="0"
                    max="360"
                    value={sliderValue}
                    onChange={handleSliderChange}
                    style={{ width: "100%", background: 'red' }}
                />
            </div>
        </div>
    );
}

export default Natascha;
