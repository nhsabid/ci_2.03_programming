//= require reveal/lib/js/head.min.js
//= require reveal/js/reveal.js

//= require highlight/highlight.pack.js

Reveal.initialize({
  controlsTutorial: false,
  history: true,
  progress: true,
  fragmentsInURL: true,
  hideAddressbar: true,
  overview: true,
  slideNumber: 'c/t',
  center: false,
  dependencies: [
    { src: '/assets/reveal/lib/js/classList.js', condition: function() {
        return !document.body.classList;
      }
    },
    { src: '/assets/reveal/plugin/markdown/marked.js', condition: function() {
        return !!document.querySelector('[data-markdown]');
      }
    },
    { src: '/assets/reveal/plugin/markdown/markdown.js', condition: function() {
        return !!document.querySelector('[data-markdown]');
      }
    },
    // Speaker notes
    { src: '/assets/reveal/plugin/notes/notes.js', async: true },
    // MathJax
    { src: '/assets/reveal/plugin/math/math.js', async: true }
  ],
  keyboard: {
    27: function() {
      location = "/index.html";
    },
  }
});

// Change j and k binding for changing slide direction for Colemak
Reveal.removeKeyBinding( 74 );
Reveal.addKeyBinding(74, function () { Reveal.up(); });
Reveal.removeKeyBinding( 75 );
Reveal.addKeyBinding(75, function () { Reveal.down(); });

document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block)
  })
});

//hjls.initHighlightingOnLoad();

