# c-s_internship

see documentation in DB_structure.pdf in current folder.

additionally:

-- you should run initDatabase.js script before launching main app.js. As name suggests, this script creates 
db schema and fills it with some test data from ShopData.js file. I turned off linting for ShopData.js 
to make it more compact. Every further runs of initDatabase.js will drop exisitng schema with all stored 
data and recreate schema from scratch.

-- it would be much better to implement the project on TypeScript. I am used to it and had inconveniencies 
at the beginning. Particularly, data models look strange in ES. I don't exactly know if you expected 
such kind of data models or another.

-- I tried to apply dependency injection approach in application concerning internal components.
Initially I realized the role of controllers more like business services without dependencies 
on http/express artefacts. And dependency injection looked more elegent with such design. 

-- but later I learned what controller and routes should mean. And this dependency injections have become
more boilerplate. But still they bring their usual advantages.

-- Unfortunately I couldn't yet understand what should be the sense of index.js route in this simple
application, which doesn't return any resources and only provide apis for data access. So in current design
there are only dedicated routes for particular parts of data model.