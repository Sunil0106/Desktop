//JavaScript Cookies
//-are data stored in small text files on your computer;
function setcookie(cname, cvalue, exdays){
  const d = new Date();
  d.setTime(d.getTime()+ (exdays*24*69*60*1000))

  let expires ="expires ="+d.toUTCString();
  document.cookie = cname + '=' + cvalue + ',' expires + "; path"
}