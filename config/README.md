This is the nginx config that katstorm.party uses.

Works like most other KA proxies, except I've never seen another one that also proxies kastatic.com and torcache.net.
kastatic.com mostly hosts some KA .js/.css/image files, but torcache.net is where the actual .torrent file is hosted.

So if an ISP/country wants to kill KA and all KA proxies, all they would have to do is block torcache.net...
katstorm.party would still work though :-P

Also, most KA proxies don't bother trying to do anything like inserting ads or removing KA's ads because KA forces gzip encoding, which breaks alot of methods used to modify content coming in from a reverse proxy. 
In nginx.conf you can see an example of how you can use LUA + zlib to decompress the content received from proxy_pass, which you can then modify.
