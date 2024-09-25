---
title: 'Magic 8 Ball'
heroImage: '/magic8ball.png'
---

<h1 class=" text-center">Magic 8 Ball</h1>

  <div class="font-bold text-black flex flex-col items-center justify-center font-mono sm:min-h-px">
      <!-- <p> -->
        <p>Ask me a question...</p>
        <input type="text" id="text" class="bg-slate-200 text-black p-2">
        <button id="roll-btn">Ready For My Answer</button>
        <button id="reset">Ask Another Quesion</button>
        <div id="fortune">
          <div id="fortune-text" class=" text-purple-700 mt-6"></div>
        </div>
  </div>
    <script src="../../../scripts/8ball.js"></script>