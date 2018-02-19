let currentTime;
function tick(){
    currentTime = new Date();
	let output1 = document.getElementById('output1');
    setTimeout(tick, 1000);
	function cleanUpDate() {
		let currentTimeStr = currentTime.toString();
		let justTheTime = currentTimeStr.slice(16, 21);
		console.log(justTheTime);
		document.getElementById('clockLeftSide1').innerHTML = justTheTime[0];
		document.getElementById('clockLeftSide2').innerHTML = justTheTime[1];
		document.getElementById('clockRightSide1').innerHTML = justTheTime[3];
		document.getElementById('clockRightSide2').innerHTML = justTheTime[4];
	}
	cleanUpDate();
}
tick();