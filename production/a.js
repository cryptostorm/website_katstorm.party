function cca() {
 var tA = [
  '<a href="https://cryptostorm.is" style="color:#594C2D;" target="_blank">keep safe & secure on the cryptostorm private network</a>... & keep your Rule 34-transcending pr0n viewing habits private. Please, seriously, because... table pr0n?  ;-)',
  'does your mother know you just did a search for that torrent? <a href="https://cryptostorm.is" style="color:#594C2D;" target="_blank">snuggle up cosy & secure inside the çrÿþtøstörmðårkŋêt</a> and make sure she need not, you cheeky monkey you!  ;)',
  '<a href="https://cryptostorm.is" style="color:#594C2D;" target="_blank">ÇℜϒΡΤΘŠΤΘℜΜ  - because the  internet is  full of mean people who hate filesharing and will send evil mojo your way if you dare share files, so eeek do not be that guy who gets stalked by creepy media monopolists, phew!</a>
  'brought to you by <a href="https://cryptostorm.is" style="color:#594C2D;" target="_blank">cryptostorm, a team delivering legit network security, and none of the usual useless "VPN service" bullshit... also no malware hiding in "VPN" software, which happens alot</a>.
 ];
 var rN = Math.floor(Math.random()*tA.length);
 document.getElementById("cA").innerHTML='<div style="width:100%;height:32px;line-height:32px;background:#594C2D;color:black;vertical-align:middle;text-align:center;">' + tA[rN] + '</div><div style="height:8px">&nbsp;</div>';
}



...also totally fucking up the flow here, but let's put a second line of text underneath the rotating stuff that includes the following actually useful info:

<a href="https://cryptostorm.is/map" style="color:#594C2D;" target="_blank">torrent tools & other cryptostorm goodies</a> | <a href="https://github.com/cryptostorm/katstorm" style="color:#594C2D;" target="_blank">repository w/ proxy code & related info</a> | <a href="https://github.com/cryptostorm/katstorm/blob/master/certstuff/sslcert_turing.pem" style="color:#594C2D;" target="_blank">current legit ssl certificate of this site</a>




el cheapo fix for the floaty header:

<style type="text/css">
    header{position:absolute !important;}
</style>
