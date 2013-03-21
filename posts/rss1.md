![reader](http://4.bp.blogspot.com/-utB1KPeLN7Q/UQb-ZoECSLI/AAAAAAAADnw/nheaXiyD6ok/s1600/blog.png)

Every rss publisher should do this - return Last-Modified in the return header and add some simple logic in their server to return 304 instead of the whole xml file if nothing was changed since the last call.  
It will save a lot of bandwidth and cpu cycles from rss readers. The reader will pass the Last-Modified value on every future request and the if there is nothing new to fetch he will get 304 with empty body and there is no need to download huge xml file and parse it.  
Here is an example for a site, the BBC, that is doing it right:

    curl http://feeds.bbci.co.uk/news/technology/rss.xml -v >  xml-file

=>

    HTTP/1.1 200 OK
    Last-Modified: Thu, 21 Mar 2013 15:35:31 GMT

(and the body, xml-file, contain the feeds)


copy paste the Last-Modified into the second http call:

    curl -v -H "If-Modified-Since: Thu, 21 Mar 2013 15:35:31 GMT" http://feeds.bbci.co.uk/news/technology/rss.xml > xml-file
=>

    HTTP/1.1 304 Not Modified

(and the body is empty)

