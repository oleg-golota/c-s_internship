# c-s_internship

see documentation in DB_structure.pdf in current folder.

additionally:
-- it would be much better to implement the project on TypeScript. I used to it and had inconveniencies 
at the beginning. Particularly, data models look strange in ES. I don't exactly know if you expected 
such kind of data models or another.
-- i first tried to apply dependency injection approach in application concerning internal components.
Initially I realized the role of controllers more like business services without dependencies 
on http/express artefacts. And dependency injection looked more elegent with such design. 
-- but later I learned what controller and routes should mean. And this dependency injections have become
more boilerplate. But still they bring their usual advantages.
-- Unfortunately I couldn't yet understand what should be the sense of index.js route in this simple
application, which doesn't return any resources and only provide apis for data access.