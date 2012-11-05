I don't like to push my markdown files to github every time i make a change, just to realize 
I forgot a space or something tiny like that.. and my 'git log' is cluttered with 'readme' commits.    
enter [GFMS](https://github.com/ypocat/gfms) - Github Flavored Markdown Server.

it's a small node server that let's you preview your markdown files locally.

    npm install gfms -g
    cd <a folder with markdown files>
    gfms -p 1234
    http://localhost:1234/

just make a change to your md file and watch the rendered html on the browser. 
no need to hit refresh! (thanks to WebSocket)

[![gfms](http://i.imgur.com/uJxaM.png)](http://i.imgur.com/uJxaM.png)



