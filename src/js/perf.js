function perf() {
    window.onload = function() {
      window.performance = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {};


      var timing = window.performance.timing,
        now = new Date().getTime(),
        output, loadTime;

      if (!timing) {
        //fail silently
        return;
      }
      const budget = 1000;
      var start = timing.navigationStart;

      var results = document.createElement('div');
      results.setAttribute('id', 'results');
      loadTime = now - start;
      results.innerHTML = (now - start) + "ms";
      results.className = "budget";
      if (loadTime > budget) {
        results.className += ' overBudget';
      } else {
        results.className += ' underBudget';
      }
      document.body.appendChild(results);
    }
}

module.exports = perf;

