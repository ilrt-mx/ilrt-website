ilrt-website
============

ILRT is a movement (refer to the ilrt.md or ilrt_en.md), and with this collaborative project we want to empower it. We are looking for more community members that would be happy to contribute to this incredible cause by making one or two wonderful pull requests :D

Documentation and coding in English
-----------------------------------

Even though ILRT is a mexican centralized movement, we chose English for the documentation and coding because we want to let any person in the world to be able to contribute to this movement and specially to this very technical part of the project. We have translation in the Todo list.

Installation
------------

** This project needs node.js to run, visit www.nodejs.org for an easy install in your system.

** You will need to setup a MySQL database for this, check the database section of this document for more information.

**1** Download the zip.

**2** Unzip in the wished path.

**3** Install the dependancies. Run this command inside the ilrt_website directory (npm comes with nodejs):

```bash
npm install
```

**4** Open the config.json file and setup de server and database information.

The Database
------------

MySQL is needed as the dbms, we wont explain how to setup one but you can find many tutorials and guides in the internet :P.

Inside the sql directory there is an sql file with all the needed tables and the web page data updated up to the specified date in last-update.txt

To Import it using phpMyAdmin just name a new database "ilrt", select it and choose "import" in the top menu, then upload the .sql file.

Start the webpage
-----------------

To start the webpage just type this command… obviously changing the path to the path where you placed the webpage directory xD.

```bash
node /path/to/ilrt_website
```

Todo List
---------

* Translate the documentation to Spanish.
* Create a search form to the videos.
* Create admin tools to add videos.
* Create an extern tool to have the videos downloaded from youtube and backed up locally automatically.
* Your idea goes here! :D.

License
-------

(The MIT License)

Copyright (c) 2012 Anonymous <ilrt.mx@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
