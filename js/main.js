var signs = [
{
	sign: "Aries",
	image: "images/1.png",
	trait: "Courageous, determined, confident, enthusiastic, optimistic, honest, passionate"
},
{
	sign: "Taurus",
	image: "images/2.png",
	trait: "Reliable, patient, practical, devoted, responsible, stable"
},
{
	sign: "Gemini",
	image: "images/3.png",
	trait: "Gentle, affectionate, curious, adaptable, ability to learn quickly and exchange ideas"
},
{
	sign: "Cancer",
	image: "images/4.png",
	trait: "Tenacious, highly imaginative, loyal, emotional, sympathetic, persuasive"
},
{
	sign: "Leo",
	image: "images/5.png",
	trait: "Creative, passionate, generous, warm-hearted, cheerful, humorous"
},
{
	sign: "Virgo",
	image: "images/6.png",
	trait: "Loyal, analytical, kind, hardworking, practical"
},
{
	sign: "Libra",
	image: "images/7.png",
	trait: "Cooperative,diplomatic, gracious, fair-minded, social"
},
{
	sign: "Scorpio",
	image: "images/8.png",
	trait: "Resourceful, brave, passionate, stubborn, a true friend"
},
{
	sign: "Sagittarius",
	image: "images/9.png",
	trait: "Generous, idealistic, great sense of humor"
},
{
	sign: "Capricorn",
	image: "images/10.png",
	trait: "Responsible, disciplined, self-control, good managers"
},
{
	sign: "Aquarius",
	image: "images/11.png",
	trait: "Progressive, original, independent, humanitarian"
},
{
	sign: "Pisces",
	image: "images/12.png",
	trait: "Compassionate, artistic, intuitive, gentle, wise, musical"
}
]

function getInfo() {
	var horoscope = document.getElementById("horoscope").value
	for (i=0; i < signs.length; i++) {
		if (signs[i].sign == horoscope) {
			document.getElementById("sign").innerHTML = "<h2>" + signs[i].sign + "</h2>"
			document.getElementById("image").src = signs[i].image
			document.getElementById("trait").innerHTML = "<p>" + signs[i].trait + "</p>"
			return
		}
	}
	document.getElementById("sign").innerHTML = "<h2>" + "Try Again!" + "</h2>"
}