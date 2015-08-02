# katstorm

This where we'll publish any relevant materials used in providing the <a href="https://katstorm.party">katstorm.party</a> KickAssTorrents tracker proxy, provided by cryptostorm because that's how we roll.

Also we're publishing <a href="https://github.com/cryptostorm/katstorm/tree/master/certstuff" target="_blank">ssl certificate materials</a> here, including (in process) a properly KeyChained alternative ssl cert that's cleaned of any CA-based cruft & associated security failures.

We're currently using a <a href="https://github.com/cryptostorm/katstorm/blob/master/certstuff/sslcert_turing.pem" target="_blank">cheapskate Comodo ssl certificate</a> as cryptographic verifier. We've upped it's keysize to 4096 bits and made sure the DH entropy seed isn't bunko'd... but it's still a shit certificate tbh and not really something we'd want to trust in a security-intensive context. Just being honest.

However, the one thing we can say for this particular certificate is it's got... a message to share, for <a href="https://github.com/cryptostorm/katstorm/blob/master/certstuff/sslcert_turing.pem" target="_blank">readers of the PEM</a>. Generously respectful hat-tip to cstorm core team member <a href="https://twitter.com/df_cryptostorm" target="_blank">Dee Eff</a> for this particular flourish, and to <a href ="https://rya.nc/cert-tricks.html" target="_blank">Ryan Castellucci</a> (twitter: <a href="https://twitter.com/ryancdotorg" target="_blank">@ryancdotorg</a>) for the inspiration & write-up that got us into the game, as well :-)

We've a stable of fallback TLDs provisioned and ready to promote to primary status, if needed in order to assist in circumvention of censorship efforts. Currently we're not publishing that list, as it could make certain attacks of this sort slightly less bothersome to undertake... but we may have a few too many beers and change our mind on this, as some of the one's we've got are really cool. Speaking in technical terms, of course.

Additional tasks in queue (partial listing, will update as time allows) - note that we're welcoming of folks who'd like to help chip away this list by contributing to the project. It's a great way to learn some of the gritty details of the 'cryptostorm approach' to things like x509 certificates, KeyChain CA-free ssl validation mechanisms, decentralsed private-CDN site resourcing, and so on. Also: fun... which matters.

<u>Anyway here's our current to-do list in no particular order</u>: 


Publish logging & privacy policy

Update footer citations of cstorm

Update url on proxy listing websites

Update url in cstorm.org/goodies

Include fallback TLDs in DNS alternative name field (also onion version?)

Publish cert as issued, & public key, on github & keybase 

Reference cert verify links in footer 

Redirects from cs.is & cs.org/kat to new url 

Keybase verify domain control from main cstorm account 

Backup ssl private key someplace (done)

Publish full src of proxy trickery in use, on github 

Link to github repository from footer 

Redirect from main URLs/github to github repository 

Lock in cipher suites w ECC (25519?) & no rc4

Point all dead tracker proxies & URLs to this one

redirect baystorm.org to katstorm.party (for now)

Include links to our torrent tester tool(s?) in new footer text

Google analytics property setup




Couple quick reference notes for future exploration:

1. we've got google analytics running on the proxy, at least initially, to help us manage capacity & make sense of where folks are finding it from, problems with loads, etc. Yes we can do all that in-house in theory, except we keep exactly zero logs of proxy activity and to do any sort of analytics we'd need to change that... which would seem foolish if the intent is to protect privacy of proxy visitors. That said, if someone has a recommendation on an alternative to Analytics - something more in line with what the stand-up team at <a href="https://ind.ie" target=_"blank">ind.ie</a> are creating - we'd love to hear it. And, no, we're not fans of piwick (fairly or not) - although perhaps it's time we reevaluated our distaste in light of objective realities.
2. There's no logs kept, for the katstorm proxy, for any visitor activity: they all write directly to /dev/null. We maintain rolling syslogs of the underling grsec'd RHEL kernel, but there's nothing in those logs relating to proxy traffic, or visitors, or sessions. We'll write up something more formal, as time allows, but that's the brass tacks.
3. Currently we're passing through whatever comes along from the underlying tracker's feed of requested pages, a "hands-off" policy that dates back through years of our provisioning various TPB proxies as circumstances allowed. That means ads served by the underling tracker will show on the proxy. Those aren't cryptostorm's ads. We don't sell ads or publish ads for anyone... hell we can barely remember to mention ourselves most of the time, to be blunt about it. However, there's been reports of nasty scripties coming up from the tracker, and seving out through katstorm. It's not yet clear if those are being pushed by KAT itself, or if perhaps there's injects or redirects or other CIN-style injected fuckery afoot. We're going to capture some of the ones we see that seem worth taking a second look, and publish here for review - that doesn't mean they're evil, it's just easiest to have a working sample in one place. We greatly appreciate if others can help to document any questionable resources that might show up as push-thrus when visiting katstorm. We've some experience with these issues, because <a href="https://torstorm.org" target="_blank">torstorm</a>. If the scripties end up being (or mutating into) nasties, we're able to filter then out before they transit the katstorm proxy - this is self-evidently worth considering, in our experience, rather than passing along evil vectors with a "not our problem" shrug. Anyhow, that process works best when approached collaboratively... so if you see weirdness in the katstorm proxied elements, or have ideas on how to manage that entire process, we're hoping you'll share your knowledge & help nurture a process that handles them appropriately for everyone using the proxy.


Ok, that's enough - too many words. 

Tally ho,

~ pj, on behalf of the crypstorm community

<u>ps</u>: this readme is ugly and badly organised - feel free to make it better, or prune it, or otherwise turn its frown upside-down, if the spirit moves you.
