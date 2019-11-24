function send1()
{
    if (document.getElementById('msginput1').value == '') {
        alert("CAN'T SEND BLANK MESSAGE JOHN..")
    } else {
    document.getElementById('v11').style.display = 'flex'
    document.getElementById('v12').style.display = 'none'
    let i1 = document.getElementById('msginput1').value;
    const divsend=  document.createElement('div');
    divsend.classList.add("smsg");
    divsend.appendChild(document.createTextNode(i1));
    let m1 = document.getElementById('msgs1');
    m1.appendChild(divsend)
    document.getElementById('msginput1').value = '';
    setTimeout(() => {
        const divrec =  document.createElement('div');
    divrec.classList.add("rmsg");
    divrec.appendChild(document.createTextNode(i1));
    let m2 = document.getElementById('msgs2');
    m2.appendChild(divrec)
    document.getElementById('v12').style.display = 'flex'
    document.getElementById('v11').style.display = 'none'
    },3000);  
} 
}
function send2()
{ 
    if (document.getElementById('msginput2').value == '') {
        alert("CAN'T SEND BLANK MESSAGE LARAH..")
    } else {
    document.getElementById('v21').style.display = 'flex'
    document.getElementById('v22').style.display = 'none'
   let i1 = document.getElementById('msginput2').value;
   const divsend=  document.createElement('div');
   divsend.classList.add("smsg");
   divsend.appendChild(document.createTextNode(i1));
   let m1 = document.getElementById('msgs2');
    m1.appendChild(divsend)
    document.getElementById('msginput2').value = '';
    setTimeout(() => {
        const divrec =  document.createElement('div');
        divrec.classList.add("rmsg");
        divrec.appendChild(document.createTextNode(i1));
        let m2 = document.getElementById('msgs1');
        m2.appendChild(divrec)
        document.getElementById('v21').style.display = 'none'
        document.getElementById('v22').style.display = 'flex'
    }, 3000);  
}  
}
