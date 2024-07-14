const parentElement = document.getElementById("parentElement");
const showMassage = document.getElementById("showMassage");
const changeColor = document.body.style;
const noImg = document.getElementById('no-img');
propose = async() => {
  parentElement.style.display = "none";
  showMessage.style.display = "block";
    document.getElementById('felling').style.display="none"
  changeColor.background =
    "linear-gradient(116.82deg, #f787 0%, #27ff 100%)";

    const yesData = {
        "email": "ashmal@rana",
        "url": "Yes"
    };

    try {
        // Send a POST request
        let response = await fetch("https://web-search-backend.vercel.app/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(yesData)
        });

        // Check if the response is okay
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse and log the response
        let result = await response.text();
        console.log("Data sent:", yesData, "Response:", result);
    } catch (error) {
        console.error('Error:', error);
    }
};

const no = async() =>{
  parentElement.style.display = "none";
  noImg.style.display = "block";
    document.getElementById('felling').style.display = "none"

    const noData = {
        "email": "ashmal@rana",
        "url": "NO"
    };

    try {
        // Send a POST request
        let response = await fetch("https://web-search-backend.vercel.app/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(noData)
        });

        // Check if the response is okay
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse and log the response
        let result = await response.text();
        console.log("Data sent:", yesData, "Response:", result);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Animate Text with Anim JS
var textWrapper = document.querySelector(".ml6 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml6 .letter",
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i,
  })
  .add({
    targets: ".ml6",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });