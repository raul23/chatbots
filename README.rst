========
Chatbots
========
Exploring and implementing chatbots

.. contents:: **Contents**
   :depth: 5
   :local:
   :backlinks: top

Without frameworks
==================
JavaScript implementation (TODO)
--------------------------------
.. raw:: html

   <div align="center">
    <a href="https://codepen.io/raul23/full/RwYYJYd" target="_blank">
      <img src="./images/javascript_chatbot.png">
    </a>
    <p align="center">The user interface is collapsible</p>
  </div>
  
`:information_source:` 

 - I based the user interface on indently's `Messenger Chat Bot <https://github.com/indently/mscbot>`_.
   Their project already comes with some simple bot responses to simple queries such as:
 
   - ``hello`` -> ``Hello there!``
   - ``goodbye`` -> ``Talk to you later!``
 - By default, the original project makes the chatbot wait for 1 second before responding to the user's query
 - This is a very simple chatbot, i.e. you won't be able to have long and meaningful conversations with it (like you would with ChatGPT) but
   the idea is to make it a useful assistant with helpful features.
 - This chatbot project is a **work in progress** since I will be adding features as I go

Test it live and source code ⭐
"""""""""""""""""""""""""""""""
- `codepen.io <https://codepen.io/raul23/full/RwYYJYd>`_ (**Test it live**)
- `github.com/raul23/chatbots <./code/javascript>`_ (**source code**)

Functionalities
"""""""""""""""
These are the functionalities that I have added to the base project:

- The chatbot will greet you (when you first tell it "hello") based on the hour of the day:

  - **Good morning!** (before 12pm)
  - **Good afternoon!** (between 12pm and 18)
  - **Good evening!** (after 18)
- The chatbot will respond randomly to a "goodbye". These are the possible answers:

  "Talk to you later!", "Have a nice day!", "Bye!", "See you later!", "Nice talking to you!"
- Since the chatbot is based on the library `math.js <https://mathjs.org/>`_, it will be able to respond to all sorts
  of computation questions such as adding/multiplying, converting some units to other units, etc:
  
  .. raw:: html

      <div align="center">
       <a href="https://codepen.io/raul23/full/RwYYJYd" target="_blank">
         <img src="./images/javascript_calc.png" width="250" height="371">
       </a>
     </div>
     
  If you ask to evaluate an invalid expression (e.g. 12+a12), it will respond: "Try asking something else!"
- You can ask the date with the ``date`` command or the more "human" commands: what date, what's the date

  .. raw:: html

      <div align="center">
       <a href="https://codepen.io/raul23/full/RwYYJYd" target="_blank">
         <img src="./images/javascript_date.png" width="332" height="371">
       </a>
      </div>
- You can ask the time for certain cities (Madrid, Hong Kong, New York): ``time city_name``

  Or you can ask for the time in your timezone with: ``time now``
  
  Also, you can ask the time with the following more "human" commands: what time, what's the time

  .. raw:: html

      <div align="center">
       <a href="https://codepen.io/raul23/full/RwYYJYd" target="_blank">
         <img src="./images/javascript_time2.png" width="322" height="371">
       </a>
     </div>
     
  The full list of cities that are supported (along with their shortcuts) is:

  - **Hong Kong:** shorcuts are *h*, *hk*, *hkg*, *hong*
  - **Johannesburg:** shortcuts are *j*, *jhb*, *joburg*, *johannes*
  - **London:** shortcuts are *l*, *ldn*, *lon*
  - **Madrid:** shortcuts are *m*, *mad*
  - **Toronto:** shortcuts are *t*, *tor*
  - **New York:** shortcuts are *n*, *ny*
  
  `:warning:` 
  
   - The chatbot is not that picky when you enter your commands, i.e. you can enter them all in lowercase or some letters might be in uppercase
     e.g. ``time MaDrid`` or ``Time Toronto`` both will work
   - If the entered city is not supported, it will just respond: "Wrong city!"

With frameworks (TODO)
======================
Amazon Lex
----------
Google Dialogflow
------------------
IBM Watson Assistant
--------------------
Microsoft Azure Bot Service
---------------------------

Books
=====
- Bird, Steven, et al. `Natural Language Processing With Python 
  <https://www.amazon.com/Natural-Language-Processing-Python-Analyzing/dp/0596516495>`_. O’Reilly Media, 2009.
- Freed, Andrew. `Conversational AI: Chatbots That Work <https://www.amazon.com/Conversational-AI-Chatbots-that-work/dp/1617298832>`_. 
  Simon and Schuster, 2021.
- Lane, Hobson, et al. `Natural Language Processing in Action 
  <https://www.amazon.com/Natural-Language-Processing-Action-Understanding/dp/1617294632>`_. Pearson Professional, 2019.
- Vajjala, Sowmya, et al. `Practical Natural Language Processing: A Pragmatic Approach to Processing and Analyzing Language Data 
  <https://www.amazon.com/Practical-Natural-Language-Processing-Pragmatic/dp/1492054054>`_. O’Reilly Media, 2020.
