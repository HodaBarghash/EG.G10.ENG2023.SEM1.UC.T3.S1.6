function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6jYzszIA0KT":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbwZ4NmrAy0MlR1xTKgxToLQPbmghN4LEhkXRocU-6pACTJAHVkgDPK_HZWTFWxscg9W/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v11q1attempts:player.GetVar("v12q1attempts"),v12q1answeredcorrect:player.GetVar("v12q1answeredcorrect")})
	}
	)
}

