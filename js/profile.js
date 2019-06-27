function showMenu(div) {
	document.getElementById(div).style = "display : block";
}

function hiddenMenu(div) {
	document.getElementById(div).style = "display : none";
}

function changeMainPage() {
	document.getElementById('mainPage').src = 'img/mainPage2.png';
}

function hiddenMainPage() {
	document.getElementById('mainPage').src = 'img/mainPage.png';
}

function openMenu() {
	$('#asideLeft_small').css('display', 'none');
	$('#asideLeft_big').css('display', 'block');
	$('#article').css('width', '86%');
}

function closeMenu() {
	$('#asideLeft_small').css('display', 'block');
	$('#asideLeft_big').css('display', 'none');
	$('#article').css('width', '96.4%');
}

function clickperson() {
	$('.personDatabtn').click(function() {
		closeperson();
		$('.personData').css('display', 'block');
	})
	$('.personDeterminebtn').click(function() {
		closeperson();
		$('.personDetermine').css('display', 'block');
	})
	$('.personSafebtn').click(function() {
		closeperson();
		$('.personSafe').css('display', 'block');
	})
	$('.vipMemberbtn').click(function() {
		closeperson();
		$('.vipMember').css('display', 'block');
	})
	$('.personFriendbtn').click(function() {
		closeperson();
		$('.personFriend').css('display', 'block');
	})
}

function closeperson() {
	$('.personData').css('display', 'none');
	$('.personDetermine').css('display', 'none');
	$('.personSafe').css('display', 'none');
	$('.vipMember').css('display', 'none');
	$('.personFriend').css('display', 'none');
}

function mdPsw() {
	var newPsw = $('#repassWord').val();
	newPswInput();
}

function exitPsw(){
	$('#modifyPassword input').val("");
	$('#modifyPassword').css('display', 'none');
}

function passwordcheck() {
	var checkpassword = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]\w{7,15}$/;
	var reg = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");
	var profilePsw = document.getElementById("profilePsw").value;
	if (!checkpassword.test(profilePsw)) {
		if (profilePsw.length < 6) {
			console.log('密码为6到16位');
			$("#sureButton").attr("disabled",true);
		} else if (/^[0-9]+$/.test(profilePsw)) {
			console.log('密码强度低');
			$("#sureButton").attr("disabled",true);
		} else if (/^[a-zA-Z]+$/.test(profilePsw)) {
			console.log('密码强度低');
			$("#sureButton").attr("disabled",true);
		} else if (/^[0-9a-zA-Z]+$/.test(profilePsw) || /^[A-Za-z0-9]+$/.test(profilePsw)) {
			console.log('密码强度中');
			$("#sureButton").attr("disabled",true);
		} else if (reg.test(profilePsw)) {
			console.log('密码强度高');
			$("#sureButton").attr("disabled",true);
		} else {
			console.log('密码可以')
			$("#sureButton").attr("disabled",false);
			return;
		}
	}
}

function repassworkcheck(){
	var profilePsw = document.getElementById("profilePsw").value;
	var repassWord = document.getElementById("repassWord").value;
	if (profilePsw === repassWord) {
		$("#sureButton").attr("disabled",false);
	} else {
		$("#sureButton").attr("disabled",true);
	}
}

function showModifyPassword(){
	$('#modifyPassword').css('display','block');
}


function showModifyButton(id) {
	$(id).css('display', 'block');
}

function hiddenModifyButton(id) {
	$(id).css('display', 'none');
}

function profileValue(json) {
	console.log("profileValue");
	console.log(json.statusCode);
}

function showAll(json) {
	$('.userNick').text(json.data.information.nickname);
	$('.nickName').text(json.data.information.nickname);
	if (json.data.information.gender == 0) {
		$('.gender').text("保密");
	} else if (json.data.information.gender == 1) {
		$('.gender').text("男");
	} else if (json.data.information.gender == 2) {
		$('.gender').text("女");
	} else if (json.data.information.gender == 3) {
		$('.gender').text("其他");
	}
	var date = new Date(parseInt(json.data.information.birthday));
	$('.birthday').text(date.getFullYear() + "-" + parseInt(date.getMonth() + 1) + "-" + date.getDate());
	$('.address').text(json.data.information.place);
	$('.occupation').text(json.data.information.industry);
	$('.phone').text(json.data.information.phone);
	$('.email').text(json.data.information.email);
	$('.profile').text(json.data.information.profile);
}


var nickname;
var gender;
var address;
var occupation;
var born;
var profile;

function nickNameShow() {
	nickname = $('.nickName').text();
	$('#nickName').css('display', 'none');
	$('#nameConfirm').css('display', 'block');
	$('.nickName').html("<input/> ");
	$('.nickName input').css({
		"width": "200px",
		"height": "26px",
		"outline": "none",
		"font-size": "16px",
		"padding-left": "10px"
	});
	$('.nickName input').val(nickname);
}

function nickNameHidden() {
	$('#nameConfirm').css('display', 'none');
	$('.nickName input').remove();
	$('.nickName').text(nickname);
	$('#nickprofile').mousemove(function() {
		$("#nickName").css("display", "block");
	}).mouseleave(function() {
		$("#nickName").css("display", "none");
	})
}

function nickNameInput() {
	$('#nameConfirm').css('display', 'none');
	var modifyname = $('.nickName input').val();
	$('.nickName input').remove();
	$('.nickName').text(modifyname);
	$('#nickprofile').mousemove(function() {
		$("#nickName").css("display", "block");
	}).mouseleave(function() {
		$("#nickName").css("display", "none");
	})
	changeName(modifyname);
}

// 修改性别
function genderShow() {
	gender = $('.gender').text();
	$('#gender').css('display', 'none');
	$('#genderConfirm').css('display', 'block');
	$('.gender').html("<select></select>");
	$(".gender select").append("<option value='" + 0 + "'>保密</option>");
	$(".gender select").append("<option value='" + 1 + "'>男</option>");
	$(".gender select").append("<option value='" + 2 + "'>女</option>");
	$(".gender select").append("<option value='" + 3 + "'>其他</option>");
	$('.gender select').css({
		"width": "200px",
		"height": "26px",
		"outline": "none",
		"font-size": "16px",
		"padding-left": "10px"
	});
	if (gender == '保密') {
		$('.gender select').val(0);
	} else if (gender == '男') {
		$('.gender select').val(1);
	} else if (gender == '女') {
		$('.gender select').val(2);
	} else if (gender == '其他') {
		$('.gender select').val(3);
	}
}

function genderHidden() {
	$('#genderConfirm').css('display', 'none');
	$('.gender select').remove();
	$('.gender').text(gender);
	$('#genderprofile').mousemove(function() {
		$("#gender").css("display", "block");
	}).mouseleave(function() {
		$("#gender").css("display", "none");
	})
}

function genderInput() {
	$('#genderConfirm').css('display', 'none');
	var modifygender = $('.gender select').val();
	if (modifygender == 0) {
		$('.gender').text("保密");
	} else if (modifygender == 1) {
		$('.gender').text("男");
	} else if (modifygender == 2) {
		$('.gender').text("女");
	} else if (modifygender == 3) {
		$('.gender').text("其他");
	}
	$('.gender select').remove();
	$('#genderprofile').mousemove(function() {
		$("#gender").css("display", "block");
	}).mouseleave(function() {
		$("#gender").css("display", "none");
	})
	changeGender(modifygender);
}


//生日
function birthdayShow() {
	nickname = $('.birthday').text();
	$('#birthday').css('display', 'none');
	$('#birthdayConfirm').css('display', 'block');
	$('.birthday').html("<input type='date'/> ");
	$('.birthday input').css({
		"width": "200px",
		"height": "26px",
		"outline": "none",
		"font-size": "16px",
		"padding-left": "10px"
	});
	$('.birthday input').val(nickname);
}


function birthdayHidden() {
	$('#birthdayConfirm').css('display', 'none');
	born = 	$('.birthday input').val();
	$('.birthday input').remove();
	$('.birthday').text("先随便");
	$('#birthdayprofile').mousemove(function() {
		$("#birthday").css("display", "block");
	}).mouseleave(function() {
		$("#birthday").css("display", "none");
	})
}

function birthdayInput() {
	$('#birthdayConfirm').css('display', 'none');
	var modifybirthday = $('.birthday input').val();
	$('.birthday input').remove();
	$('.birthday').text(modifybirthday);
	$('#birthdayprofile').mousemove(function() {
		$("#birthday").css("display", "block");
	}).mouseleave(function() {
		$("#birthday").css("display", "none");
	})
	changeBirthday(modifybirthday);
}

// 地址
function addressShow() {
	address = $('.address').text();
	$('#address').css('display', 'none');
	$('#addressConfirm').css('display', 'block');
	$('.address').html("<input/> ");
	$('.address input').css({
		"width": "200px",
		"height": "26px",
		"outline": "none",
		"font-size": "16px",
		"padding-left": "10px"
	});
	$('.address input').val(address);
}

function addressHidden() {
	$('#addressConfirm').css('display', 'none');
	$('.address input').remove();
	$('.address').text(address);
	$('#addressprofile').mousemove(function() {
		$("#address").css("display", "block");
	}).mouseleave(function() {
		$("#address").css("display", "none");
	})
}

function addressInput() {
	$('#addressConfirm').css('display', 'none');
	var modifyaddress = $('.address input').val();
	$('.address input').remove();
	$('.address').text(modifyaddress);
	$('#addressprofile').mousemove(function() {
		$("#address").css("display", "block");
	}).mouseleave(function() {
		$("#address").css("display", "none");
	})
	changeAddress(modifyaddress);
}

// 工作
function occupationShow() {
	occupation = $('.occupation').text();
	$('#occupation').css('display', 'none');
	$('#occupationConfirm').css('display', 'block');
	$('.occupation').html("<select></select>");
	$(".occupation select").append("<option value='" + 0 + "'>学生</option>");
	$(".occupation select").append("<option value='" + 1 + "'>电子商务</option>");
	$(".occupation select").append("<option value='" + 2 + "'>金融</option>");
	$(".occupation select").append("<option value='" + 3 + "'>企业服务</option>");
	$(".occupation select").append("<option value='" + 4 + "'>教育</option>");
	$(".occupation select").append("<option value='" + 5 + "'>文化娱乐</option>");
	$(".occupation select").append("<option value='" + 6 + "'>游戏</option>");
	$(".occupation select").append("<option value='" + 7 + "'>O2O</option>");
	$(".occupation select").append("<option value='" + 8 + "'>硬件</option>");
	$(".occupation select").append("<option value='" + 9 + "'>社交网络</option>");
	$(".occupation select").append("<option value='" + 10 + "'>旅游</option>");
	$(".occupation select").append("<option value='" + 11 + "'>医疗健康</option>");
	$(".occupation select").append("<option value='" + 12 + "'>生活服务</option>");
	$(".occupation select").append("<option value='" + 13 + "'>安全</option>");
	$(".occupation select").append("<option value='" + 14 + "'>数据服务</option>");
	$(".occupation select").append("<option value='" + 15 + "'>广告</option>");
	$(".occupation select").append("<option value='" + 16 + "'>分类信息</option>");
	$(".occupation select").append("<option value='" + 17 + "'>人工智能</option>");
	$(".occupation select").append("<option value='" + 17 + "'>招聘</option>");
	$(".occupation select").append("<option value='" + 19 + "'>移动互联网</option>");
	$(".occupation select").append("<option value='" + 20 + "'>其他</option>");	
	$('.occupation select').css({
		"width": "200px",
		"height": "26px",
		"outline": "none",
		"font-size": "16px",
		"padding-left": "10px"
	});
}

function occupationHidden() {
	$('#occupationConfirm').css('display', 'none');
	$('.occupation select').remove();
	$('.occupation').text(occupation);
	$('#occupationprofile').mousemove(function() {
		$("#occupation").css("display", "block");
	}).mouseleave(function() {
		$("#occupation").css("display", "none");
	})
}

function occupationInput() {
	$('#occupationConfirm').css('display', 'none');
	var modifyoccupation = $('.occupation select').val();
	var selectText = $(".occupation select").find("option:selected").text();
	$('.occupation').text(selectText);
	$('.occupation select').remove();
	$('#occupationprofile').mousemove(function() {
		$("#occupation").css("display", "block");
	}).mouseleave(function() {
		$("#occupation").css("display", "none");
	})
	changeOccupation(modifyoccupation);
}

// 修改个人简介
function profileShow() {
	profile = $('.profile').text();
	$('#profile').css('display', 'none');
	$('#profileConfirm').css('display', 'block');
	$('.profile').html("<textarea maxlength='300' id='profileTextarea' placeholder='还可以输入300字'></textarea> ");
	$('.profile textarea').css({
		"width": "420px",
		"height": "160px",
		"outline": "none",
		"font-size": "16px",
		"padding-left": "10px"
	});
	$('.profile textarea').val(profile);
}

function profileHidden() {
	$('#profileConfirm').css('display', 'none');
	$('.profile textarea').remove();
	$('.profile').text(profile);
	$('#profileprofile').mousemove(function() {
		$("#profile").css("display", "block");
	}).mouseleave(function() {
		$("#profile").css("display", "none");
	})
}

function profileInput() {
	$('#profileConfirm').css('display', 'none');
	var modifyprofile = $('.profile textarea').val();
	$('.profile textarea').remove();
	$('.profile').text(modifyprofile);
	$('#profileprofile').mousemove(function() {
		$("#profile").css("display", "block");
	}).mouseleave(function() {
		$("#profile").css("display", "none");
	})
	changeProfile(modifyprofile);
}



// 修改用户名
function modifyName(name) {
	$('.nickName').text(name);
}

function modifyGender(gender) {
		if (gender == 0) {
		$('.gender').text("保密");
	} else if (gender == 1) {
		$('.gender').text("男");
	} else if (gender == 2) {
		$('.gender').text("女");
	} else if (gender == 3) {
		$('.gender').text("其他");
	}
}

function modifyAddressr(address) {
	$('.address').text(address);
}

function modifyOccupation(occupation) {
	$('.occupation').text(occupation);
}

function modifyProfile(profile) {
	$('.profile').text(profile);
}