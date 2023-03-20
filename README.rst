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
 - By default, the project makes the chatbot wait for 1 second before responding to the user's query
 - This is a very simple chatbot, i.e. you won't be able to have long and meaningful conversation with it (like you would with ChatGPT) but
   the idea is to make it a useful assistant with helpful features.

Test it live and source code ⭐
"""""""""""""""""""""""""""""""
- `codepen.io <https://codepen.io/raul23/full/RwYYJYd>`_ (**Test it live** with fullscreen)
- `github.com/raul23/chatbots <./code/javascript>`_ (source code @ GitHub)

Functionalities
"""""""""""""""
These are the functionalities that I have added to the base project:

- Since the chatbot is based on the library `math.js <https://mathjs.org/>`_, it will be able to respond to all sorts
  of computation questions such as adding/multiplying, converting some units to other units, etc:
  
  .. raw:: html

      <div align="center">
       <a href="https://codepen.io/raul23/full/RwYYJYd" target="_blank">
         <img src="./images/javascript_calc.png" width="250" height="371">
       </a>
     </div>
     
  If you ask to evaluate an invalid expression (e.g. 12+a12), it will respond: "Try asking something else!"
- You can ask the time for certain cities (Madrid, Hong Kong, New York): ``time city_name``

  .. raw:: html

      <div align="center">
       <a href="https://codepen.io/raul23/full/RwYYJYd" target="_blank">
         <img src="./images/javascript_time.png" width="250" height="371">
       </a>
     </div>
     
  The full list of cities that are supported is:

  - Hong Kong
  - Johannesburg
  - London
  - Madrid
  - Toronto
  - New York
  
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
