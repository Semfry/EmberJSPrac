'use strict';



;define("shaun-site/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/adapter/json-api"eaimeta@70e063a35619d71f
});
;define("shaun-site/adapters/application", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/adapter/json-api"eaimeta@70e063a35619d71f

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class ApplicationAdapter extends _jsonApi.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "namespace", 'api');
    }

    buildURL() {
      return `${super.buildURL(...arguments)}.json`;
    }

  }

  _exports.default = ApplicationAdapter;
});
;define("shaun-site/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "shaun-site/config/environment"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/application",0,"ember-resolver",0,"ember-load-initializers",0,"shaun-site/config/environment"eaimeta@70e063a35619d71f

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends _application.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("shaun-site/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component/-private/ember-component-manager"eaimeta@70e063a35619d71f
});
;define("shaun-site/components/favgame", ["exports", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component/template-only"eaimeta@70e063a35619d71f

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{#each @model.favgames as |favgame|}}
  <div id="favgames">
      <br>
      <li>Game Name: {{favgame.gamename}}</li>
      <br>
      <li>Release year: {{favgame.startyear}}</li>
  </div>
        
  {{/each}}
  */
  {
    "id": "kpZERXdp",
    "block": "[[[42,[28,[37,1],[[28,[37,1],[[30,1,[\"favgames\"]]],null]],null],null,[[[10,0],[14,1,\"favgames\"],[12],[1,\"\\n    \"],[10,\"br\"],[12],[13],[1,\"\\n    \"],[10,\"li\"],[12],[1,\"Game Name: \"],[1,[30,2,[\"gamename\"]]],[13],[1,\"\\n    \"],[10,\"br\"],[12],[13],[1,\"\\n    \"],[10,\"li\"],[12],[1,\"Release year: \"],[1,[30,2,[\"startyear\"]]],[13],[1,\"\\n\"],[13],[1,\"\\n      \\n\"]],[2]],null]],[\"@model\",\"favgame\"],false,[\"each\",\"-track-array\"]]",
    "moduleName": "shaun-site/components/favgame.hbs",
    "isStrictMode": false
  });

  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());

  _exports.default = _default;
});
;define("shaun-site/components/header", ["exports", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component/template-only"eaimeta@70e063a35619d71f

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="title">
      <h2>-----------------------</h2>
      <h1>Shaun's Site</h1>
      <h2>-----------------------</h2>
  </div>
  */
  {
    "id": "jXVeM9R/",
    "block": "[[[10,0],[14,0,\"title\"],[12],[1,\"\\n    \"],[10,\"h2\"],[12],[1,\"-----------------------\"],[13],[1,\"\\n    \"],[10,\"h1\"],[12],[1,\"Shaun's Site\"],[13],[1,\"\\n    \"],[10,\"h2\"],[12],[1,\"-----------------------\"],[13],[1,\"\\n\"],[13]],[],false,[]]",
    "moduleName": "shaun-site/components/header.hbs",
    "isStrictMode": false
  });

  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());

  _exports.default = _default;
});
;define("shaun-site/components/imagehandler", ["exports", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component/template-only"eaimeta@70e063a35619d71f

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="image">
    <img ...attributes>
  </div>
  */
  {
    "id": "F9uxMHw5",
    "block": "[[[10,0],[14,0,\"image\"],[12],[1,\"\\n  \"],[11,\"img\"],[17,1],[12],[13],[1,\"\\n\"],[13]],[\"&attrs\"],false,[]]",
    "moduleName": "shaun-site/components/imagehandler.hbs",
    "isStrictMode": false
  });

  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());

  _exports.default = _default;
});
;define("shaun-site/components/modlist", ["exports", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component/template-only"eaimeta@70e063a35619d71f

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{#each @model.modlists as |modlist|}}
      <div id="modlists">
          <br>
          <Imagehandler
          src={{@modlist.imagelink}}
          alt="A picture of {{@modlist.modname}}"
          />
          <br>
          <li>Mod Name: {{modlist.modname}}</li>
          <br>
          <li>Release Year: {{modlist.releaseyear}}</li>
          <br>
          <li>Game: {{modlist.game}}</li>
          <br>
          <a href="{{modlist.link}}">Download {{modlist.modname}}</a>
      </div>
        
  {{/each}}
  */
  {
    "id": "fTTLqrwA",
    "block": "[[[42,[28,[37,1],[[28,[37,1],[[30,1,[\"modlists\"]]],null]],null],null,[[[1,\"    \"],[10,0],[14,1,\"modlists\"],[12],[1,\"\\n        \"],[10,\"br\"],[12],[13],[1,\"\\n        \"],[8,[39,2],[[16,\"src\",[30,3,[\"imagelink\"]]],[16,\"alt\",[29,[\"A picture of \",[30,3,[\"modname\"]]]]]],null,null],[1,\"\\n        \"],[10,\"br\"],[12],[13],[1,\"\\n        \"],[10,\"li\"],[12],[1,\"Mod Name: \"],[1,[30,2,[\"modname\"]]],[13],[1,\"\\n        \"],[10,\"br\"],[12],[13],[1,\"\\n        \"],[10,\"li\"],[12],[1,\"Release Year: \"],[1,[30,2,[\"releaseyear\"]]],[13],[1,\"\\n        \"],[10,\"br\"],[12],[13],[1,\"\\n        \"],[10,\"li\"],[12],[1,\"Game: \"],[1,[30,2,[\"game\"]]],[13],[1,\"\\n        \"],[10,\"br\"],[12],[13],[1,\"\\n        \"],[10,3],[15,6,[29,[[30,2,[\"link\"]]]]],[12],[1,\"Download \"],[1,[30,2,[\"modname\"]]],[13],[1,\"\\n    \"],[13],[1,\"\\n      \\n\"]],[2]],null]],[\"@model\",\"modlist\",\"@modlist\"],false,[\"each\",\"-track-array\",\"imagehandler\"]]",
    "moduleName": "shaun-site/components/modlist.hbs",
    "isStrictMode": false
  });

  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());

  _exports.default = _default;
});
;define("shaun-site/components/navbar", ["exports", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component/template-only"eaimeta@70e063a35619d71f

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <nav class="menu">
    <LinkTo @route="index" class="menu-index">
      <h1>Main Page</h1>
    </LinkTo>
    <div class="links">
      <LinkTo @route="favgame" class="menu-favgames">
        Favourite Games
      </LinkTo>
      <LinkTo @route="modlist" class="menu-modlists">
        My Mods
      </LinkTo>
    </div>
  </nav>
  */
  {
    "id": "8i+X6HO/",
    "block": "[[[10,\"nav\"],[14,0,\"menu\"],[12],[1,\"\\n  \"],[8,[39,0],[[24,0,\"menu-index\"]],[[\"@route\"],[\"index\"]],[[\"default\"],[[[[1,\"\\n    \"],[10,\"h1\"],[12],[1,\"Main Page\"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n  \"],[10,0],[14,0,\"links\"],[12],[1,\"\\n    \"],[8,[39,0],[[24,0,\"menu-favgames\"]],[[\"@route\"],[\"favgame\"]],[[\"default\"],[[[[1,\"\\n      Favourite Games\\n    \"]],[]]]]],[1,\"\\n    \"],[8,[39,0],[[24,0,\"menu-modlists\"]],[[\"@route\"],[\"modlist\"]],[[\"default\"],[[[[1,\"\\n      My Mods\\n    \"]],[]]]]],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],false,[\"link-to\"]]",
    "moduleName": "shaun-site/components/navbar.hbs",
    "isStrictMode": false
  });

  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());

  _exports.default = _default;
});
;define("shaun-site/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page.js"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-welcome-page/components/welcome-page.js"eaimeta@70e063a35619d71f
});
;define("shaun-site/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug"eaimeta@70e063a35619d71f
});
;define("shaun-site/helpers/app-version", ["exports", "@ember/component/helper", "shaun-site/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper",0,"shaun-site/config/environment",0,"ember-cli-app-version/utils/regexp"eaimeta@70e063a35619d71f

  function appVersion(_) {
    let hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = (0, _helper.helper)(appVersion);

  _exports.default = _default;
});
;define("shaun-site/helpers/ensure-safe-component", ["exports", "@embroider/util"], function (_exports, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _util.EnsureSafeComponentHelper;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@embroider/util"eaimeta@70e063a35619d71f
});
;define("shaun-site/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/helpers/page-title"eaimeta@70e063a35619d71f

  var _default = _pageTitle.default;
  _exports.default = _default;
});
;define("shaun-site/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/pluralize"eaimeta@70e063a35619d71f

  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("shaun-site/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/singularize"eaimeta@70e063a35619d71f

  var _default = _singularize.default;
  _exports.default = _default;
});
;define("shaun-site/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "shaun-site/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-app-version/initializer-factory",0,"shaun-site/config/environment"eaimeta@70e063a35619d71f

  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("shaun-site/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-resolver/resolvers/classic/container-debug-adapter"eaimeta@70e063a35619d71f

  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
    }

  };
  _exports.default = _default;
});
;define("shaun-site/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug/setup"eaimeta@70e063a35619d71f
});
;define("shaun-site/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-data",0,"ember-data/setup-container"eaimeta@70e063a35619d71f

  /*
    This code initializes EmberData in an Ember application.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("shaun-site/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f

  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',

    initialize() {}

  };
  _exports.default = _default;
});
;define("shaun-site/models/favgame", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor, _descriptor2;

  0; //eaimeta@70e063a35619d71f0,"@ember-data/model"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let FavgameModel = (_class = class FavgameModel extends _model.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "gamename", _descriptor, this);

      _initializerDefineProperty(this, "startyear", _descriptor2, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "gamename", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "startyear", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = FavgameModel;
});
;define("shaun-site/models/modlist", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

  0; //eaimeta@70e063a35619d71f0,"@ember-data/model"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let ModlistModel = (_class = class ModlistModel extends _model.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "modname", _descriptor, this);

      _initializerDefineProperty(this, "releaseyear", _descriptor2, this);

      _initializerDefineProperty(this, "game", _descriptor3, this);

      _initializerDefineProperty(this, "imagelink", _descriptor4, this);

      _initializerDefineProperty(this, "link", _descriptor5, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "modname", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "releaseyear", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "game", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "imagelink", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "link", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = ModlistModel;
});
;define("shaun-site/router", ["exports", "@ember/routing/router", "shaun-site/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/router",0,"shaun-site/config/environment"eaimeta@70e063a35619d71f

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends _router.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {
    this.route('favgame');
    this.route('modlist');
  });
});
;define("shaun-site/routes/favgame", ["exports", "@ember/routing/route", "@ember/service", "rsvp"], function (_exports, _route, _service, _rsvp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor;

  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service",0,"rsvp"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let FavgameRoute = (_class = class FavgameRoute extends _route.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "store", _descriptor, this);
    }

    async model() {
      return _rsvp.default.hash({
        favgames: this.store.findAll('favgame'),
        modlists: this.store.findAll('modlist')
      });
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = FavgameRoute;
});
;define("shaun-site/routes/modlist", ["exports", "@ember/routing/route", "@ember/service", "rsvp"], function (_exports, _route, _service, _rsvp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor;

  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service",0,"rsvp"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let ModlistRoute = (_class = class ModlistRoute extends _route.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "store", _descriptor, this);
    }

    async model() {
      return _rsvp.default.hash({
        favgames: this.store.findAll('favgame'),
        modlists: this.store.findAll('modlist')
      });
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = ModlistRoute;
});
;define("shaun-site/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json"eaimeta@70e063a35619d71f
});
;define("shaun-site/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json-api"eaimeta@70e063a35619d71f
});
;define("shaun-site/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/rest"eaimeta@70e063a35619d71f
});
;define("shaun-site/serializers/application", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json-api"eaimeta@70e063a35619d71f

  class ApplicationSerializer extends _jsonApi.default {}

  _exports.default = ApplicationSerializer;
});
;define("shaun-site/services/-ensure-registered", ["exports", "@embroider/util/services/ensure-registered"], function (_exports, _ensureRegistered) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ensureRegistered.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@embroider/util/services/ensure-registered"eaimeta@70e063a35619d71f
});
;define("shaun-site/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title-list"eaimeta@70e063a35619d71f
});
;define("shaun-site/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title"eaimeta@70e063a35619d71f
});
;define("shaun-site/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-data/store"eaimeta@70e063a35619d71f
});
;define("shaun-site/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="container">
    <Navbar />
    <div class="body">
      <Header />
      {{outlet}}
    </div>
  </div>
  */
  {
    "id": "hTT54TPK",
    "block": "[[[10,0],[14,0,\"container\"],[12],[1,\"\\n  \"],[8,[39,0],null,null,null],[1,\"\\n  \"],[10,0],[14,0,\"body\"],[12],[1,\"\\n    \"],[8,[39,1],null,null,null],[1,\"\\n    \"],[46,[28,[37,3],null,null],null,null,null],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],false,[\"navbar\",\"header\",\"component\",\"-outlet\"]]",
    "moduleName": "shaun-site/templates/application.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("shaun-site/templates/favgame", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <h1>My Favourite Games</h1>
  
  {{#each @model.favgames as |favgame|}}
      <div id="favgames">
          <br>
          <h3>Game Name: {{favgame.gamename}}</h3>
          <br>
          <h3>Release year: {{favgame.startyear}}</h3>
      </div>
        
  {{/each}}
  */
  {
    "id": "48msHD1h",
    "block": "[[[10,\"h1\"],[12],[1,\"My Favourite Games\"],[13],[1,\"\\n\\n\"],[42,[28,[37,1],[[28,[37,1],[[30,1,[\"favgames\"]]],null]],null],null,[[[1,\"    \"],[10,0],[14,1,\"favgames\"],[12],[1,\"\\n        \"],[10,\"br\"],[12],[13],[1,\"\\n        \"],[10,\"h3\"],[12],[1,\"Game Name: \"],[1,[30,2,[\"gamename\"]]],[13],[1,\"\\n        \"],[10,\"br\"],[12],[13],[1,\"\\n        \"],[10,\"h3\"],[12],[1,\"Release year: \"],[1,[30,2,[\"startyear\"]]],[13],[1,\"\\n    \"],[13],[1,\"\\n      \\n\"]],[2]],null]],[\"@model\",\"favgame\"],false,[\"each\",\"-track-array\"]]",
    "moduleName": "shaun-site/templates/favgame.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("shaun-site/templates/index", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <h1>Main Page</h1>
  
  */
  {
    "id": "pg5OYyv8",
    "block": "[[[10,\"h1\"],[12],[1,\"Main Page\"],[13],[1,\"\\n\"]],[],false,[]]",
    "moduleName": "shaun-site/templates/index.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("shaun-site/templates/modlist", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <h1>My Mods</h1>
  
  {{#each @model.modlists as |modlist|}}
      <div id="modlists">
          <br>
          <h3>---------------------------------------------------------------------------------------------------------</h3>
          <Imagehandler
          src={{modlist.imagelink}}
          alt="A picture of {{modlist.modname}}"
          />
          <br>
          <h1>Mod Name: {{modlist.modname}}</h1>
          <br>
          <h3>Release Year: {{modlist.releaseyear}}</h3>
          <br>
          <h3>Game: {{modlist.game}}</h3>
          <br>
          <a href="{{modlist.link}}">Download {{modlist.modname}}</a>
      </div>
        
  {{/each}}
  */
  {
    "id": "h/0g+t5/",
    "block": "[[[10,\"h1\"],[12],[1,\"My Mods\"],[13],[1,\"\\n\\n\"],[42,[28,[37,1],[[28,[37,1],[[30,1,[\"modlists\"]]],null]],null],null,[[[1,\"    \"],[10,0],[14,1,\"modlists\"],[12],[1,\"\\n        \"],[10,\"br\"],[12],[13],[1,\"\\n        \"],[10,\"h3\"],[12],[1,\"---------------------------------------------------------------------------------------------------------\"],[13],[1,\"\\n        \"],[8,[39,2],[[16,\"src\",[30,2,[\"imagelink\"]]],[16,\"alt\",[29,[\"A picture of \",[30,2,[\"modname\"]]]]]],null,null],[1,\"\\n        \"],[10,\"br\"],[12],[13],[1,\"\\n        \"],[10,\"h1\"],[12],[1,\"Mod Name: \"],[1,[30,2,[\"modname\"]]],[13],[1,\"\\n        \"],[10,\"br\"],[12],[13],[1,\"\\n        \"],[10,\"h3\"],[12],[1,\"Release Year: \"],[1,[30,2,[\"releaseyear\"]]],[13],[1,\"\\n        \"],[10,\"br\"],[12],[13],[1,\"\\n        \"],[10,\"h3\"],[12],[1,\"Game: \"],[1,[30,2,[\"game\"]]],[13],[1,\"\\n        \"],[10,\"br\"],[12],[13],[1,\"\\n        \"],[10,3],[15,6,[29,[[30,2,[\"link\"]]]]],[12],[1,\"Download \"],[1,[30,2,[\"modname\"]]],[13],[1,\"\\n    \"],[13],[1,\"\\n      \\n\"]],[2]],null]],[\"@model\",\"modlist\"],false,[\"each\",\"-track-array\",\"imagehandler\"]]",
    "moduleName": "shaun-site/templates/modlist.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("shaun-site/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("shaun-site/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("shaun-site/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("shaun-site/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;

;define('shaun-site/config/environment', [], function() {
  var prefix = 'shaun-site';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("shaun-site/app")["default"].create({"name":"shaun-site","version":"0.0.0+f34e4999"});
          }
        
//# sourceMappingURL=shaun-site.map
