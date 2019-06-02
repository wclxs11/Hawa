  function PageUIEvent() {
      this.handlers = [];
  }

  PageUIEvent.prototype = {
      addHandler: function(fn) {
          this.handlers.push(fn);
      },

      removeHandler: function(fn) {
          var handlers = this.handlers;
          for (var i = handlers.length - 1; i >= 0; i--) {
              if (handlers[i] === fn) {
                  handlers.splice(i, 1);
              }
          }
      },

      raise: function(e) {
          var handlers = this.handlers;
          for (var i = 0; i < handlers.length; i++) {
              handlers[i].call(this, e);
          }
      }
  };


  function PageUI(dom, initStatus) {
      var self = this;
      if (typeof dom === 'string') {
          dom = document.querySelector(dom);
      }
      if (dom instanceof HTMLElement) {
          self.container = dom;
      }
      self.initUI_();

      self.firstBtn_ = document.getElementById('firstBtn');
      self.nextBtn_ = document.getElementById('nextBtn');
      self.previousBtn_ = document.getElementById('previousBtn');
      self.lastBtn_ = document.getElementById('lastBtn');
      self.currentPageInput_ = document.getElementById('currentPage-input');
      self.updateStatus(initStatus);

      self.goToFirstEvent = new PageUIEvent();
      self.goToPreviousEvent = new PageUIEvent();
      self.goToNextEvent = new PageUIEvent();
      self.goToLastEvent = new PageUIEvent();
      self.goToPageEvent = new PageUIEvent();


      self.registEvent_();
  }


  PageUI.prototype = {
      registEvent_: function() {
          var self = this;
          self.firstBtn_.addEventListener('click', function() {
              self.goToFirstEvent.raise();
          });
          self.previousBtn_.addEventListener('click', function() {
              self.goToPreviousEvent.raise();
          });
          self.nextBtn_.addEventListener('click', function() {
              self.goToNextEvent.raise();
          });
          self.lastBtn_.addEventListener('click', function() {
              self.goToLastEvent.raise();
          });
          self.currentPageInput_.addEventListener('change', function() {
              var newPage = self.currentPageInput_.value - 1;
              if (newPage >= 0 && newPage < self.status.maxPages) {
                  self.goToPageEvent.raise({ newPage: newPage });
              }
          });
      },
      updateStatus: function(newStatus) {
          var self = this;
          self.status = newStatus;
          self.refresh();
      },

      refresh: function() {
          var self = this;
          var status = self.status;
          var container = self.container;
          var currentPageIndex = status.pageIndex;
          if (currentPageIndex === 0) {
              self.addClass_(self.firstBtn_, 'intangible');
              self.addClass_(self.previousBtn_, 'intangible');
          } else {
              self.removeClass_(self.firstBtn_, 'intangible');
              self.removeClass_(self.previousBtn_, 'intangible');
          }

          if (currentPageIndex >= status.maxPages - 1) {
              self.addClass_(self.lastBtn_, 'intangible');
              self.addClass_(self.nextBtn_, 'intangible');
          } else {
              self.removeClass_(self.lastBtn_, 'intangible');
              self.removeClass_(self.nextBtn_, 'intangible');
          }

          self.currentPageInput_.value = currentPageIndex + 1;
          document.getElementById('totalPages').textContent = status.maxPages;

          var endIndex = Math.min((currentPageIndex + 1) * status.pageSize, status.maxItems);
          var startIndex = Math.min(currentPageIndex * status.pageSize + 1, endIndex);
          document.getElementById('startIndex').textContent = startIndex;
          document.getElementById('endIndex').textContent = endIndex;
          document.getElementById('totalItems').textContent = status.maxItems;
      },

      destroy: function() {
          var self = this;
          if (self.container) {
              self.container.innerHTML = '';
              self.container = null;
          }
      },

      initUI_: function() {
          var previousPart = '<div id="firstBtn" class="page-part-left button"><span class="fa fa-step-backward"></span></div>' +
              '<div id="previousBtn" class="page-part-left button"><span class="fa fa-chevron-left"></span></div>';
          var pagePart1 = '<div class="page-part-left content">page <input id="currentPage-input" /> of <span id="totalPages"></span></div>';
          var nextPart = '<div id="nextBtn" class="page-part-left button"><span class="fa fa-chevron-right"></span></div>' +
              '<div id="lastBtn" class="page-part-left button"><span class="fa fa-step-forward"></span></div>';
          var itemPart = '<div class="page-part-right content">Rows <span id="startIndex"></span> - <span id="endIndex"></span> of <span id="totalItems"></span></div>';
          var dividerPart = '<div class="page-part-left divider"></div>';

          this.container.innerHTML = previousPart + dividerPart + pagePart1 + dividerPart + nextPart + itemPart;
      },
      hasClass_: function(e, className) {
          if (e && e.getAttribute) {
              var name = ' ' + className + ' ';
              return (' ' + e.getAttribute('class') + ' ').replace(/[\t\r\n\f]/g, ' ').indexOf(name) >= 0;
          }
          return false;
      },
      removeClass_: function(e, className) {
          if (e && e.setAttribute && this.hasClass_(e, className)) {
              var rx = new RegExp('\\s?\\b' + className + '\\b', 'g');
              var cn = e.getAttribute('class');
              e.setAttribute('class', cn.replace(rx, ''));
          }
      },

      addClass_: function(e, className) {
          if (e && e.setAttribute && !this.hasClass_(e, className)) {
              var cn = e.getAttribute('class');
              e.setAttribute('class', cn ? cn + ' ' + className : className);
          }
      }
  };
