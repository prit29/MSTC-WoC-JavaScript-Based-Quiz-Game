//form-validation

var a;
var b;
var IID=0;
var sec=60;
var min=9;
var sec3=0;
var min3=0;
function change()
{
	a = document.getElementById("check1").value;
	b = document.getElementById("check2").value;
	var c = document.getElementById("check3").value;
var regx = /^[6-9]\d{9}$/;
var regx2 = /^([a-zA-z0-9\.-]+)@([a-zA-Z0-9]+).([a-z]{2,8})(.[a-z]{2,8})$/;
	var count=0;
	var count2=0;
	
	for(var i=0;i<a.length;i++)
	{
		if(a[i]<"A" || a[i]>"z")
			{
				count++;
			}
		if(a[i]==" ")
			count--;
	}
	for(var i=0;i<b.length;i++)
	{
		if(b[i]<"0" || b[i]>"9")
			{
				count2++;
			}
	}

	if(count>0 || count2>0 || b.length!=10 || c.length<=10 || a.length==0 || regx.test(b)==false || regx2.test(c)==false)
	{
		if(count>0 || a.length==0)
		{
			//alert("Enter valid name");
			check1.style.border ="solid 1px red";
			document.getElementById("check4").style.visibility="visible";
			//return false;
		}
		else
		{
			//alert("Enter valid name");
			check1.style.border ="solid 1px #ccc";
			document.getElementById("check4").style.visibility="hidden";
			//return false;
		}
		/*if(a.length==0)
		{
			//alert("Enter valid name");
			check1.style.border ="solid 1px red";
			document.getElementById("check4").style.visibility="visible";
			//return false;
		}
		else
		{
			//alert("Enter valid name");
			check1.style.border ="solid 1px #ccc";
			document.getElementById("check4").style.visibility="hidden";
			//return false;
		}*/

		if(b.length!=10)
		{
			//alert("Enter valid mobile number111");
			check2.style.border ="solid 1px red";
			document.getElementById("check6").style.visibility="visible";
			//return false;
		}
		else
		{
			//alert("Enter valid mobile number111");
			check2.style.border ="solid 1px #ccc";
			document.getElementById("check6").style.visibility="hidden";
			//return false;
		}

		if(c.length<=10)
		{
			//alert("Enter valid E-mail id");
			check3.style.border ="solid 1px red";
			document.getElementById("check5").style.visibility="visible";
			//return false;
		}
		else
		{
			//alert("Enter valid E-mail id");
			check3.style.border ="solid 1px #ccc";
			document.getElementById("check5").style.visibility="hidden";
			//return false;
		}

		if(regx2.test(c)==false)
		{
			//alert("Enter valid E-mail id");
			check3.style.border ="solid 1px red";
			document.getElementById("check5").style.visibility="visible";
			//return false;
		}
		else
		{
			//alert("Enter valid E-mail id");
			check3.style.border ="solid 1px #ccc";
			document.getElementById("check5").style.visibility="hidden";
			//return false;
		}

		if(count2>0)
		{
			check2.style.border ="solid 1px red";
			document.getElementById("check6").style.visibility="visible";
			//return false;
		}
		else
		{
			check2.style.border ="solid 1px #ccc";
			document.getElementById("check6").style.visibility="hidden";
			//return false;
		}

		if(regx.test(b)==false)
		{
			check2.style.border ="solid 1px red";
			document.getElementById("check6").style.visibility="visible";
			//return false;
		}
		else
		{
			check2.style.border ="solid 1px #ccc";
			document.getElementById("check6").style.visibility="hidden";
			//return false;
		}
		
	}
	else
	{
		document.getElementById("pg1").style.display ="none";
		document.getElementById("pg2").style.display="block";
		document.getElementById("you").style.visibility="visible";
		document.getElementById("que").style.visibility="visible";
		document.getElementById("1").style.visibility="visible";
		document.getElementById("timerr").style.display="block";
		document.getElementById("prev").style.visibility="hidden";
		document.getElementById("next").style.visibility="visible";
		start();
	}
}

//timer

function timing()
{
	var min2;
	var sec2;
	var min4;
	var sec4;
	sec--;
	if(sec==-1)
	{
		sec=59;
		min--;
	}
	
		min2="0"+min;

	if(sec<10)
	{
		sec2="0"+sec;
	}
	else
	{
		sec2=sec;
	}

	if(min<1)
		{document.getElementById("timerr").style.color="red";
		document.getElementById("timerr").style.background="#E6E6FA";}

	if(min==0 && sec==0)
		mymarks();
	else
		document.getElementById("timerr").innerHTML="TIMER "+min2 +":"+ sec2;

	sec3++;
	if(sec3==60)
	{
		sec3=0;
		min3++;
	}
	if(min3<10)
	{
		min4="0"+min3;
	}
	else
	{
		min4=min3;
	}

	if(sec3<10)
	{
		sec4="0"+sec3;
	}
	else
	{
		sec4=sec3;
	}
		document.getElementById("timer1").innerHTML=min4 +":"+ sec4;
}
function start()
{
	IID=window.setInterval(timing,1000);
}
function stop()
{
	sec=0;
	min=0;
	window.clearInterval(IID);
}

//changing-question

var data=[
		{
			"que":" What does D represent in Roman numeral system?",
			"a":" 100",
			"b":" 500",
			"c":" 1000",
			"d":" 50"
		},
		{
			"que":" If 5 = V, How does 5,000 written in roman numeral system?",
			"a":" V",
			"b":" MMMMM",
			"c":" MX",
			"d":" M"
		},
		{
			"que":" What number, a one followed by 100 zeros, was first used by 9 year old Mitton Sirotta in 1940?",
			"a":" Googel",
			"b":" Googol",
			"c":" Golden",
			"d":" Round"
		},
		{
			"que":" 3*2/2+4-7*5+4*8+3-1-9*0+1=....?",
			"a":" 5",
			"b":" 7",
			"c":" 13",
			"d":" 3"
		},
		{
			"que":" What is the value of Golden ratio which is made popular recently by the book the Da Vinci Code?",
			"a":" 1.414",
			"b":" 1.618",
			"c":" 3.142",
			"d":" 1.732"
		},
		{
			"que":" A baby blue whale drinks this many liters of milk per day?",
			"a":" 100",
			"b":" 500",
			"c":" 900",
			"d":" 190"
		},
		{
			"que":" Which of the following technological developments came first?",
			"a":" Telephone",
			"b":" Telescope",
			"c":" Telegraph",
			"d":" Teletype"
		},
		{
			"que":" Which kind of waves are used to make and receive cellphone calls?",
			"a":" Radio waves",
			"b":" Visible light waves",
			"c":" Sound waves",
			"d":" Gravity waves"
		},
		{
			"que":" What's the meaning of this phobia? 'DENDROPHOBIA'",
			"a":" Fear of birds",
			"b":" Fear of colors",
			"c":" Fear of computers",
			"d":" Fear of trees"
		},
		{
			"que":" Which person invented 'Magnifying glass'?",
			"a":" Samuel Colt",
			"b":" Peter Carl Goldmark",
			"c":" Douglas Engelbart",
			"d":" Roger Bacon"
		},
		{
			"que":" The battel at Waihind in 1008-09 A.D was fought between?",
			"a":" Muhammad Ghori and Prithiraj",
			"b":" Muhammad Ghori and Jaichandra",
			"c":" Muhammad Ghori and Jaypala",
			"d":" Muhammad Ghori and Anandapala"
		},
		{
			"que":" The earliest example of a land grant is provided by an inscription of?",
			"a":" The Guptas",
			"b":" The Satavahanas",
			"c":" The Mauryas",
			"d":" The Mughals"
		},
		{
			"que":" The propagate his Dhamma,Asoka used the services of?",
			"a":" Yuktas",
			"b":" Pradeshikas",
			"c":" Rajukas",
			"d":" All of these"
		},
		{
			"que":" Who was the first Indian to be elected to the British Parliament?",
			"a":" Dadabhai Naoroji",
			"b":" Gopal Krishna Gokhale",
			"c":" Bipin Chandra Pal",
			"d":" Lala Lajpat Rai"
		},
		{
			"que":" Who wrote the book Ashtadhyayi?",
			"a":" Panini",
			"b":" Katyayana",
			"c":" Jayadeva",
			"d":" Harsha"
		},
		{
			"que":" 'INDUS' flows into which body of water?",
			"a":" Gulf of Thailand",
			"b":" Arabian Sea",
			"c":" Bay of Bangal",
			"d":" Andaman Sea"
		},
		{
			"que":" 'The Dead Heart of Africa' nickname refers to which country?",
			"a":" Zambia",
			"b":" Algeria",
			"c":" Namibia",
			"d":" Chad"
		},
		{
			"que":" Where can we find 'East Indies' old region nowdays?",
			"a":" Indonesia",
			"b":" Philippines",
			"c":" India",
			"d":" Cuba"
		},
		{
			"que":" How many countries border touch Malaysia by land?",
			"a":" 1",
			"b":" 2",
			"c":" 3",
			"d":" 4"
		},
		{
			"que":" What is the capital of Iran?",
			"a":" Tehran",
			"b":" Kabul",
			"c":" Damascus",
			"d":" Baghdad"
		},
		{
			"que":" In which country might you attend a 'KABUKI' perfomance?",
			"a":" Japan",
			"b":" China",
			"c":" Pakistan",
			"d":" Thailand"
		},
		{
			"que":" How many chapter are in the Qur'an?",
			"a":" 114",
			"b":" 99",
			"c":" 12",
			"d":" 5"
		},
		{
			"que":" Which of these is not part of the VEDAS?",
			"a":" Upanishads",
			"b":" Aranyakas",
			"c":" Brahmanas",
			"d":" Dhammapada"
		},
		{
			"que":" Which hisrorical event does Charles Dickens's novel A Tale of Two Cities concern?",
			"a":" The French Revolution",
			"b":" The American Revolution",
			"c":" The British Revolution",
			"d":" The Indian Revolution"
		},
		{
			"que":" Which century did science fiction become a major type of writing?",
			"a":" 17th",
			"b":" 19th",
			"c":" 20th",
			"d":" 21th"
		},
		//{
			//"que":"your score is:"
		//}
	];
	var indx = 0;
	var score=0;
	var score2=0;
	var flag=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var flag2=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var index=[1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5];

	function nextpg(){
		indx++;

		var q=data[indx];
		if(indx<25){
		document.getElementById("que").innerHTML= q.que;
		document.getElementById("op1").innerHTML= q.a;
		document.getElementById("op2").innerHTML= q.b;
		document.getElementById("op3").innerHTML= q.c;
		document.getElementById("op4").innerHTML= q.d;}
		else
		{
			mymarks();
			/*if(document.getElementById("opt3").checked==true)
				score2++;
			//document.getElementById("que").innerHTML=q.que+score2;
			//document.getElementById("you").style.visibility="hidden";
			//document.getElementById("next").style.visibility="hidden";
			//document.getElementById("prev").style.visibility="hidden";	
			//document.getElementById("head").innerHTML="SCORE";
			var min4;
			var sec4;
			document.getElementById("timerr").style.display="none";
			document.getElementById("pg3").style.display="block";
			document.getElementById("pg2").style.display="none";
			document.getElementById("names1").innerHTML=a;
			document.getElementById("call1").innerHTML=b;
			document.getElementById("marks1").innerHTML=score;
			if(sec3==60)
			{
				sec3=0;
				min3++;
			}

			if(min3<10)
			{
				min4="0"+min3;
			}
			else
			{
				min4=min3;
			}

			if(sec3<10)
			{
				sec3++;
				sec4="0"+sec3;
			}
			else
			{
				sec4=sec3;
			}
				document.getElementById("timer1").innerHTML=min4 +":"+ sec4;
			stop();*/
		}
		if(indx>4 && indx<10)
		{
			document.getElementById("head").innerHTML="SCIENCE";
		}
		if(indx>9 && indx<15)
		{
			document.getElementById("head").innerHTML="HISTORY";
		}
		if(indx>14 && indx<20)
		{
			document.getElementById("head").innerHTML="GEOGRAPHY";
		}
		if(indx>19 && indx<25)
		{
			document.getElementById("head").innerHTML="LITERATURE";
		}
		var opt1=document.getElementById("opt1");
		var opt2=document.getElementById("opt2");
		var opt3=document.getElementById("opt3");
		var opt4=document.getElementById("opt4");

		if(opt1.checked==true)
			flag2[indx]=1;
		if(opt2.checked==true)
			flag2[indx]=2;
		if(opt3.checked==true)
			flag2[indx]=3;
		if(opt4.checked==true)
			flag2[indx]=4;

		if(indx==1 || indx==3 || indx==4 || indx==5 || indx==7 || indx==12 || indx==16)
		{
			if(opt2.checked==true)
				{
					score++;
					flag[indx]=1;
				}
			opt1.checked=false;
			opt2.checked=false;
			opt3.checked=false;
			opt4.checked=false;
		}
		if(indx==2 || indx==8 || indx==14 || indx==15 || indx==18 || indx==20 || indx==21 || indx==22 || indx==24)
		{
			if(opt1.checked==true)
				{
					score++;
					flag[indx]=1;
				}
			opt1.checked=false;
			opt2.checked=false;
			opt3.checked=false;
			opt4.checked=false;
		}
		if(indx==19 || indx==25)
		{
			if(opt3.checked==true)
				{
					score++;
					flag[indx]=1;
				}
			opt1.checked=false;
			opt2.checked=false;
			opt3.checked=false;
			opt4.checked=false;
		}
		if(indx==6 || indx==9 || indx==10 || indx==11 || indx==13 || indx==17 || indx==23)
		{
			if(opt4.checked==true)
				{
					score++;
					flag[indx]=1;
				}
			opt1.checked=false;
			opt2.checked=false;
			opt3.checked=false;
			opt4.checked=false;
		}

		if(flag2[indx+1]==1)
			opt1.checked=true;
		else if(flag2[indx+1]==2)
			opt2.checked=true;
		else if(flag2[indx+1]==3)
			opt3.checked=true;
		else if(flag2[indx+1]==4)
			opt4.checked=true;
		else
		{
			opt1.checked=false;
			opt2.checked=false;
			opt3.checked=false;
			opt4.checked=false;
		}
	
score2=score;

		document.getElementById(1).style.visibility="hidden";
		document.getElementById(2).style.visibility="hidden";
		document.getElementById(3).style.visibility="hidden";
		document.getElementById(4).style.visibility="hidden";
		document.getElementById(5).style.visibility="hidden";
		document.getElementById(index[indx]).style.visibility="visible";		

		if(indx==24)
			document.getElementById("next").style.visibility="hidden";
		else
			document.getElementById("next").style.visibility="visible";

		if(indx==0)
			document.getElementById("prev").style.visibility="hidden";
		else
			document.getElementById("prev").style.visibility="visible";
	}
	function prevpg(){
		if(indx>0)
		{
			indx--;
		}
		if(score>0 && flag[indx+1]==1)
		{
			score--;
		}

		var opt1=document.getElementById("opt1");
		var opt2=document.getElementById("opt2");
		var opt3=document.getElementById("opt3");
		var opt4=document.getElementById("opt4");

		if(flag2[indx+1]==1)
			opt1.checked=true;
		else if(flag2[indx+1]==2)
			opt2.checked=true;
		else if(flag2[indx+1]==3)
			opt3.checked=true;
		else if(flag2[indx+1]==4)
			opt4.checked=true;
		else
		{
			opt1.checked=false;
			opt2.checked=false;
			opt3.checked=false;
			opt4.checked=false;
		}

		if(indx==0)
			document.getElementById("prev").style.visibility="hidden";
		else
			document.getElementById("prev").style.visibility="visible";

		if(indx==24)
			document.getElementById("next").style.visibility="hidden";
		else
			document.getElementById("next").style.visibility="visible";

		var q=data[indx];
		if(indx<25){
		document.getElementById("que").innerHTML= q.que;
		document.getElementById("op1").innerHTML= q.a;
		document.getElementById("op2").innerHTML= q.b;
		document.getElementById("op3").innerHTML= q.c;
		document.getElementById("op4").innerHTML= q.d;}
		else
		{
			if(document.getElementById("opt2").checked==true)
				score2++;
			document.getElementById("que").innerHTML=q.que+score2;
			document.getElementById("you").style.visibility="hidden";
			document.getElementById("next").style.visibility="hidden";
			document.getElementById("prev").style.visibility="hidden";	
			document.getElementById("head").innerHTML="SCORE";
		}
		if(indx<5)
		{
			document.getElementById("head").innerHTML="MATHS";
		}
		if(indx>4 && indx<10)
		{
			document.getElementById("head").innerHTML="SCIENCE";
		}
		if(indx>9 && indx<15)
		{
			document.getElementById("head").innerHTML="HISTORY";
		}
		if(indx>14 && indx<20)
		{
			document.getElementById("head").innerHTML="GEOGRAPHY";
		}
		if(indx>19 && indx<25)
		{
			document.getElementById("head").innerHTML="LITERATURE";
		}

		score2=score;
		//document.getElementById("marks").innerHTML="your score:"+score;

		document.getElementById(1).style.visibility="hidden";
		document.getElementById(2).style.visibility="hidden";
		document.getElementById(3).style.visibility="hidden";
		document.getElementById(4).style.visibility="hidden";
		document.getElementById(5).style.visibility="hidden";
		document.getElementById(index[indx]).style.visibility="visible";	
	}
//leaderboard

var ind=5;
var temp;
var leader=[
		{
			naam:"Prit Patel",
			mo:"9173049484",
			tym:"04:36",
			sco:20
		},
		{
			naam:"Raj Patel",
			mo:"6354216969",
			tym:"07:48",
			sco:7
		},
		{
			naam:"Vivek Shah",
			mo:"7291578645",
			tym:"06:11",
			sco:1
		},
		{
			naam:"Deven Vachhani",
			mo:"9172369548",
			tym:"05:06",
			sco:17
		},
		{
			naam:"Extra",
			mo:"9999999999",
			tym:"00:00",
			sco:0
		}
	];

//result-page

function mymarks()
{
	var min4;
	var sec4;
	document.getElementById("timerr").style.display="none";
	document.getElementById("pg3").style.display="block";
	document.getElementById("pg2").style.display="none";
	document.getElementById("pg4").style.visibility="visible";
	
		indx++;
		var opt1=document.getElementById("opt1");
		var opt2=document.getElementById("opt2");
		var opt3=document.getElementById("opt3");
		var opt4=document.getElementById("opt4");
		if(indx==1 || indx==3 || indx==4 || indx==5 || indx==7 || indx==12 || indx==16)
		{
			if(opt2.checked==true)
				{
					score++;
				}
		}
		if(indx==2 || indx==8 || indx==14 || indx==15 || indx==18 || indx==20 || indx==21 || indx==22 || indx==24)
		{
			if(opt1.checked==true)
				{
					score++;
				}
		}
		if(indx==19 || indx==25)
		{
			if(opt3.checked==true)
				{
					score++;
				}
		}
		if(indx==6 || indx==9 || indx==10 || indx==11 || indx==13 || indx==17 || indx==23)
		{
			if(opt4.checked==true)
				{
					score++;
				}
		}

	if(sec3==60)
	{
		sec3=0;
		min3++;
	}
	if(min3<10)
	{
		min4="0"+min3;
	}
	else
	{
		min4=min3;
	}

	if(sec3<10)
	{
		sec3++;
		sec4="0"+sec3;
	}
	else
	{
		sec4=sec3;
	}

		leader[4].naam=a;
		leader[4].mo=b;
		leader[4].tym=min4 +":"+ sec4;
		leader[4].sco=score;

	leader.sort(function(a,b){return b.sco - a.sco});

	document.getElementById("names1").innerHTML=leader[0].naam;
	document.getElementById("names2").innerHTML=leader[1].naam;
	document.getElementById("names3").innerHTML=leader[2].naam;
	document.getElementById("names4").innerHTML=leader[3].naam;
	document.getElementById("names5").innerHTML=leader[4].naam;

	document.getElementById("call1").innerHTML=leader[0].mo;
	document.getElementById("call2").innerHTML=leader[1].mo;
	document.getElementById("call3").innerHTML=leader[2].mo;
	document.getElementById("call4").innerHTML=leader[3].mo;
	document.getElementById("call5").innerHTML=leader[4].mo;

	document.getElementById("timer1").innerHTML=leader[0].tym;
	document.getElementById("timer2").innerHTML=leader[1].tym;
	document.getElementById("timer3").innerHTML=leader[2].tym;
	document.getElementById("timer4").innerHTML=leader[3].tym;
	document.getElementById("timer5").innerHTML=leader[4].tym;

	document.getElementById("marks1").innerHTML=leader[0].sco;
	document.getElementById("marks2").innerHTML=leader[1].sco;
	document.getElementById("marks3").innerHTML=leader[2].sco;
	document.getElementById("marks4").innerHTML=leader[3].sco;
	document.getElementById("marks5").innerHTML=leader[4].sco;
	stop();
}