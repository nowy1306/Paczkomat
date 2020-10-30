
var prevent = false;
var info = document.createElement("p");
info.classList.add("invalid_info");
//var form = document.forms[0];
var form = document.getElementById("form_list")

function attach_events() 
{
	is_username_valid_listener();
	is_firstname_valid_listener();
	is_lastname_valid_listener();
	is_password_valid_listener();
	
	
	var submit = document.getElementById("submit").addEventListener("click", (ev) => {
		var firstname = document.getElementById("fname").value;
		var lastname = document.getElementById("lname").value;
		var username = document.getElementById("uname").value;
		var passwd = document.getElementById("pass").value;
		var passwd2 = document.getElementById("pass2").value;
		var sex = document.getElementById("")
		if (prevent || 
			firstname == "" || 
			lastname == "" || 
			username == "" || 
			passwd == ""|| 
			passwd2 == "")
		{
			ev.preventDefault();
		}
	});
}

function is_username_valid_listener()
{
	var username = document.getElementById("uname");
	username.addEventListener("change", function(ev)
	{
		var x = document.getElementById("uname");
		var value = x.value;
		var endpoint = "https://infinite-hamlet-29399.herokuapp.com/check/" + value;
		var xhr = new XMLHttpRequest();
		xhr.open('GET', endpoint);
		xhr.onreadystatechange = function() 
		{
			var DONE = 4;
			var OK = 200;
			if (xhr.readyState == DONE) 
			{
				if (xhr.status == OK) 
				{
					var json = JSON.parse(xhr.responseText);
					var regex = RegExp('^[a-z]{3,12}$');
					if(json[value] == "available" && regex.test(value))
					{
						//x.style.backgroundColor = "green";
						//x.style.fontcolor = "black";
						x.className = "valid_form";
						prevent = false;
						if(form.contains(info))
						{
							form.removeChild(info)
						}
						
						
					}
					else
					{
						//x.style.backgroundColor = "red";
						//x.style.fontcolor = "black";
						x.className = "invalid_form";
						prevent = true;
						info.innerText = "Podana nazwa uzytkownika juz istnieje lub jest nieprawidlowa";
						form.appendChild(info)
					}
				} else 
				{
					console.log('Error: ' + xhr.status);
				}
			 }
		}
		xhr.send(null);
	});
}

function is_firstname_valid_listener()
{
	var firstname = document.getElementById("fname");
	firstname.addEventListener("change", function(ev)
	{
		var x = document.getElementById("fname")
		var text = x.value
		var regex = RegExp('^[A-Z][a-z]*$');
		if(regex.test(text) && text.length >= 2)
		{
			//x.style.backgroundColor = "green";
			//x.style.fontcolor = "black";
			x.className = "valid_form";
			prevent = false;
			if(form.contains(info))
			{
				form.removeChild(info)
			}
		}
		else
		{
			//x.style.backgroundColor = "red";
			//x.style.fontcolor = "black";
			x.className = "invalid_form";
			prevent = true;
			info.innerText = "Podane imie jest nieprawidlowe";
			form.appendChild(info)
		}
	});
}

function is_lastname_valid_listener()
{
	var lastname = document.getElementById("lname");
	lastname.addEventListener("change", function(ev)
	{
		var x = document.getElementById("lname")
		var text = x.value
		var regex = RegExp('^[A-Z][a-z]*$');
		if(regex.test(text) && text.length >= 2)
		{
			//x.style.backgroundColor = "green";
			//x.style.fontcolor = "black";
			x.className = "valid_form";
			prevent = false;
			if(form.contains(info))
			{
				form.removeChild(info)
			}
		}
		else
		{
			//x.style.backgroundColor = "red";
			//x.style.fontcolor = "black";
			x.className = "invalid_form";
			prevent = true;
			info.innerText = "Podane nazwisko jest nieprawidlowe";
			form.appendChild(info)
		}
	});
}

function is_password_valid_listener()
{
	var passwd = document.getElementById("pass");
	var passwd2 = document.getElementById("pass2");
	passwd.addEventListener("change", pass_listener)
	passwd2.addEventListener("change", pass2_listener)
	
	function pass_listener(ev)
	{
		var pass = document.getElementById("pass")
		var pass2 = document.getElementById("pass2")
		var text_pass = pass.value;
		var text_pass2 = pass2.value
		if(text_pass2 == "")
		{
			if(text_pass.length >= 8)
			{
				//pass.style.backgroundColor = "green";
				//pass.style.fontcolor = "black";
				pass.className = "valid_form";
				prevent = false;
				if(form.contains(info))
				{
					form.removeChild(info)
				}
			}
			else
			{
				//pass.style.backgroundColor = "red";
				//pass.style.fontcolor = "black";
				pass.className = "invalid_form";
				prevent = true;
				info.innerText = "Haslo musi zawierac min 8 znakow";
				form.appendChild(info)
			}
		}
		else
		{
			if(text_pass == text_pass2 && text_pass.length >= 8)
			{
				//pass.style.backgroundColor = "green";
				//pass.style.fontcolor = "black";
				//pass2.style.backgroundColor = "green";
				//pass2.style.fontcolor = "black";
				pass.className = "valid_form";
				pass2.className = "valid_form";
				prevent = false;
				if(form.contains(info))
				{
					form.removeChild(info)
				}
			}
			else
			{
				//pass.style.backgroundColor = "red";
				//pass.style.fontcolor = "black";
				//pass2.style.backgroundColor = "red";
				//pass2.style.fontcolor = "black";
				pass.className = "invalid_form";
				pass2.className = "invalid_form";
				prevent = true;
				info.innerText = "Hasla musza byc rowne i zawierac min 8 znakow";
				form.appendChild(info)
			}
		}
	}
	
	function pass2_listener()
	{
		var pass = document.getElementById("pass")
		var pass2 = document.getElementById("pass2")
		var text_pass = pass.value
		var text_pass2 = pass2.value
		if(text_pass == text_pass2 && text_pass2.length >= 8)
		{
			//pass.style.backgroundColor = "green";
			//pass.style.fontcolor = "black";
			//pass2.style.backgroundColor = "green";
			//pass2.style.fontcolor = "black";
			pass.className = "valid_form";
			pass2.className = "valid_form";
			prevent = false;
			if(form.contains(info))
			{
				form.removeChild(info)
			}
		}
		else
		{
			//pass.style.backgroundColor = "red";
			//pass.style.fontcolor = "black";
			//pass2.style.backgroundColor = "red";
			//pass2.style.fontcolor = "black";
			pass.className = "invalid_form";
			pass2.className = "invalid_form";
			prevent = true;
			info.innerText = "Hasla musza byc rowne i zawierac min 8 znakow";
			form.appendChild(info)
		}
	}
}


attach_events();
	
	
	