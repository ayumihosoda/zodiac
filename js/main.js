var signs = [
{
	sign: "Aries",
	trait: "Thoughtful"
},
{
	sign: "Taurus",
	trait: "Patience"
},
{
	sign: "Gemini",
	trait: "Intelligent"
},
{
	sign: "Cancer",
	trait: "Thoughtful"
},
{
	sign: "Leo",
	trait: "Thoughtful"
},
{
	sign: "Virgo",
	trait: "Thoughtful"
},
{
	sign: "Libra",
	trait: "Thoughtful"
},
{
	sign: "Scorpio",
	trait: "Thoughtful"
},
{
	sign: "Sagittarius",
	trait: "Thoughtful"
},
{
	sign: "Capricorn",
	trait: "Thoughtful"
},
{
	sign: "Aquarius",
	trait: "Thoughtful"
},
{
	sign: "Pisces",
	trait: "Thoughtful"
}
]

function getInfo() {
	var horoscope = document.getElementById("horoscope").value
	for (i=0; i < signs.length; i++) {
		if (signs[i].sign == horoscope) {
			document.getElementById("sign").innerHTML = "<h2>" + signs[i].sign + "!" + "</h2>"
			document.getElementById("trait").innerHTML = "<p>" + signs[i].trait + "</p>"
			return
		}
	}
	document.getElementById("sign").innerHTML = "<h2>" + "Try Again!" + "</h2>"
}