function attach_events() 
{
	is_username_valid_listener();
	is_firstname_valid_listener();
	is_lastname_valid_listener();
	is_password_valid_listener();
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
					var json = JSON.parse(xhr.responseText)
					if(json[value] == "available" && value.length > 3)
					{
						x.style.backgroundColor = "green";
						x.style.fontcolor = "black"
					}
					else
					{
						x.style.backgroundColor = "red";
						x.style.fontcolor = "black"
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
			x.style.backgroundColor = "green";
			x.style.fontcolor = "black"
		}
		else
		{
			x.style.backgroundColor = "red";
			x.style.fontcolor = "black"
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
			x.style.backgroundColor = "green";
			x.style.fontcolor = "black"
		}
		else
		{
			x.style.backgroundColor = "red";
			x.style.fontcolor = "black"
		}
	});
}

function is_password_valid_listener()
{
	var passwd = document.getElementById("pass");
	var passwd2 = document.getElementById("pass2");
	passwd.addEventListener("change", pass_listener)
	passwd2.addEventListener("change", pass2_listener)
	
	function pass_listener()
	{
		var pass = document.getElementById("pass")
		var pass2 = document.getElementById("pass2")
		var text_pass = pass.value
		var text_pass2 = pass2.value
		if(text_pass2 == "")
		{
			if(text_pass.length >= 8)
			{
				pass.style.backgroundColor = "green";
				pass.style.fontcolor = "black"
			}
			else
			{
				pass.style.backgroundColor = "red";
				pass.style.fontcolor = "black"
			}
		}
		else
		{
			if(text_pass == text_pass2 && text_pass.length >= 8)
			{
				pass.style.backgroundColor = "green";
				pass.style.fontcolor = "black"
				pass2.style.backgroundColor = "green";
				pass2.style.fontcolor = "black"
			}
			else
			{
				pass.style.backgroundColor = "red";
				pass.style.fontcolor = "black"
				pass2.style.backgroundColor = "red";
				pass2.style.fontcolor = "black"
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
			pass.style.backgroundColor = "green";
			pass.style.fontcolor = "black"
			pass2.style.backgroundColor = "green";
			pass2.style.fontcolor = "black"
		}
		else
		{
			pass.style.backgroundColor = "red";
			pass.style.fontcolor = "black"
			pass2.style.backgroundColor = "red";
			pass2.style.fontcolor = "black"
		}
	}
}


attach_events();
	
	
	