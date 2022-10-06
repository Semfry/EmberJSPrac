'use strict';

define("shaun-site/tests/acceptance/shaun-site-test", ["qunit", "@ember/test-helpers", "shaun-site/tests/helpers"], function (_qunit, _testHelpers, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"@ember/test-helpers",0,"shaun-site/tests/helpers"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Acceptance | shaun site', function (hooks) {
    (0, _helpers.setupApplicationTest)(hooks);
    (0, _qunit.test)('visiting /', async function (assert) {
      await (0, _testHelpers.visit)('/');
      assert.dom('Pageheader').exists;
      assert.strictEqual((0, _testHelpers.currentURL)(), '/');
    });
  });
});
define("shaun-site/tests/helpers/index", ["exports", "ember-qunit"], function (_exports, _emberQunit) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setupApplicationTest = setupApplicationTest;
  _exports.setupRenderingTest = setupRenderingTest;
  _exports.setupTest = setupTest;
  0; //eaimeta@70e063a35619d71f0,"ember-qunit"eaimeta@70e063a35619d71f

  // This file exists to provide wrappers around ember-qunit's / ember-mocha's
  // test setup functions. This way, you can easily extend the setup that is
  // needed per test type.
  function setupApplicationTest(hooks, options) {
    (0, _emberQunit.setupApplicationTest)(hooks, options); // Additional setup for application tests can be done here.
    //
    // For example, if you need an authenticated session for each
    // application test, you could do:
    //
    // hooks.beforeEach(async function () {
    //   await authenticateSession(); // ember-simple-auth
    // });
    //
    // This is also a good place to call test setup functions coming
    // from other addons:
    //
    // setupIntl(hooks); // ember-intl
    // setupMirage(hooks); // ember-cli-mirage
  }

  function setupRenderingTest(hooks, options) {
    (0, _emberQunit.setupRenderingTest)(hooks, options); // Additional setup for rendering tests can be done here.
  }

  function setupTest(hooks, options) {
    (0, _emberQunit.setupTest)(hooks, options); // Additional setup for unit tests can be done here.
  }
});
define("shaun-site/tests/integration/components/favgames-test", ["@ember/template-factory", "qunit", "shaun-site/tests/helpers", "@ember/test-helpers"], function (_templateFactory, _qunit, _helpers, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"shaun-site/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | favgames', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Favgame />
      */
      {
        "id": "T+3EgH5o",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"favgame\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Favgame>
            Game Name: Start Year:
            </Favgame>
          
      */
      {
        "id": "BZ6OoBb8",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n      Game Name: Start Year:\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"favgame\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('');
    });
  });
});
define("shaun-site/tests/integration/components/graphs-test", ["@ember/template-factory", "qunit", "shaun-site/tests/helpers", "@ember/test-helpers"], function (_templateFactory, _qunit, _helpers, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"shaun-site/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | graphs', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Graphs />
      */
      {
        "id": "gBQOF7Qd",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"graphs\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Graphs>
            </Graphs>
          
      */
      {
        "id": "Ic7lYQm5",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"graphs\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('');
    });
  });
});
define("shaun-site/tests/integration/components/header-test", ["@ember/template-factory", "qunit", "shaun-site/tests/helpers", "@ember/test-helpers"], function (_templateFactory, _qunit, _helpers, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"shaun-site/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | header', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Header />
      */
      {
        "id": "pPFAosp3",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"header\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText("Shaun's Site"); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Header>
              Shaun's Site
            </Header>
          
      */
      {
        "id": "XENvOVQW",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        Shaun's Site\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"header\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText("Shaun's Site");
    });
  });
});
define("shaun-site/tests/integration/components/imagehandler-test", ["@ember/template-factory", "qunit", "shaun-site/tests/helpers", "@ember/test-helpers"], function (_templateFactory, _qunit, _helpers, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"shaun-site/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | imagehandler', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Imagehandler />
      */
      {
        "id": "YmuY4NxN",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"imagehandler\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Imagehandler>
              template block text
            </Imagehandler>
          
      */
      {
        "id": "oBg8Za0b",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"imagehandler\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('');
    });
  });
});
define("shaun-site/tests/integration/components/modslist-test", ["@ember/template-factory", "qunit", "shaun-site/tests/helpers", "@ember/test-helpers"], function (_templateFactory, _qunit, _helpers, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"shaun-site/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | modlists', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <modlists />
      */
      {
        "id": "3ZSw9do+",
        "block": "[[[10,\"modlists\"],[12],[13]],[],false,[]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <modlists>
            Mod Name: Release Year: Game Name: Download Link:"
            </modlists>
          
      */
      {
        "id": "s+MnpekI",
        "block": "[[[1,\"\\n      \"],[10,\"modlists\"],[12],[1,\"\\n      Mod Name: Release Year: Game Name: Download Link:\\\"\\n      \"],[13],[1,\"\\n    \"]],[],false,[]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText("Mod Name: Release Year: Game Name: Download Link:\"");
    });
  });
});
define("shaun-site/tests/integration/components/navbar-test", ["@ember/template-factory", "qunit", "shaun-site/tests/helpers", "@ember/test-helpers"], function (_templateFactory, _qunit, _helpers, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"shaun-site/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | navbar', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Navbar />
      */
      {
        "id": "Fxy8E5qS",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"navbar\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('Main Page Favourite Games My Mods'); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Navbar>
              template block text
            </Navbar>
          
      */
      {
        "id": "kiRmRujy",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"navbar\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('Main Page Favourite Games My Mods');
    });
  });
});
define("shaun-site/tests/test-helper", ["shaun-site/app", "shaun-site/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"shaun-site/app",0,"shaun-site/config/environment",0,"qunit",0,"@ember/test-helpers",0,"qunit-dom",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.start)();
});
define("shaun-site/tests/unit/adapters/application-test", ["qunit", "shaun-site/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"shaun-site/tests/helpers"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Adapter | application', function (hooks) {
    (0, _helpers.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:application');
      assert.ok(adapter);
    });
  });
});
define("shaun-site/tests/unit/models/favgame-test", ["qunit", "shaun-site/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"shaun-site/tests/helpers"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Model | favgame', function (hooks) {
    (0, _helpers.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('favgame', {});
      assert.ok(model);
    });
  });
});
define("shaun-site/tests/unit/models/modslist-test", ["qunit", "shaun-site/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"shaun-site/tests/helpers"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Model | modlist', function (hooks) {
    (0, _helpers.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('modlist', {});
      assert.ok(model);
    });
  });
});
define("shaun-site/tests/unit/routes/favgames-test", ["qunit", "shaun-site/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"shaun-site/tests/helpers"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | favgame', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:favgame');
      assert.ok(route);
    });
  });
});
define("shaun-site/tests/unit/routes/modlist-test", ["qunit", "shaun-site/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"shaun-site/tests/helpers"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | modlist', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:modlist');
      assert.ok(route);
    });
  });
});
define("shaun-site/tests/unit/serializers/application-test", ["qunit", "shaun-site/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"shaun-site/tests/helpers"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Serializer | application', function (hooks) {
    (0, _helpers.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let serializer = store.serializerFor('application');
      assert.ok(serializer);
    });
    (0, _qunit.test)('it serializes records', function (assert) {
      let store = this.owner.lookup('service:store');
      let record = store.createRecord('favgame', 'modlist', {});
      let serializedRecord = record.serialize();
      assert.ok(serializedRecord);
    });
  });
});
define('shaun-site/config/environment', [], function() {
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

require('shaun-site/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
