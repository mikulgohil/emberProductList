define('ember-product-list/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('ember-product-list/tests/components/add-product.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/add-product.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/add-product.js should pass jshint.');
  });
});
define('ember-product-list/tests/components/file-input.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/file-input.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/file-input.js should pass jshint.');
  });
});
define('ember-product-list/tests/components/products-list.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/products-list.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/products-list.js should pass jshint.');
  });
});
define('ember-product-list/tests/controllers/add.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/add.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/add.js should pass jshint.');
  });
});
define('ember-product-list/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('ember-product-list/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('ember-product-list/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember-product-list/tests/helpers/start-app', 'ember-product-list/tests/helpers/destroy-app'], function (exports, _qunit, _emberProductListTestsHelpersStartApp, _emberProductListTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _emberProductListTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _emberProductListTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});
define('ember-product-list/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('ember-product-list/tests/helpers/resolver', ['exports', 'ember-product-list/resolver', 'ember-product-list/config/environment'], function (exports, _emberProductListResolver, _emberProductListConfigEnvironment) {

  var resolver = _emberProductListResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _emberProductListConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberProductListConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('ember-product-list/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('ember-product-list/tests/helpers/start-app', ['exports', 'ember', 'ember-product-list/app', 'ember-product-list/config/environment'], function (exports, _ember, _emberProductListApp, _emberProductListConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _emberProductListConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _emberProductListApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('ember-product-list/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('ember-product-list/tests/initializers/init.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | initializers/init.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/init.js should pass jshint.');
  });
});
define('ember-product-list/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('ember-product-list/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('ember-product-list/tests/routes/add.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/add.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/add.js should pass jshint.');
  });
});
define('ember-product-list/tests/routes/edit.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/edit.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/edit.js should pass jshint.');
  });
});
define('ember-product-list/tests/routes/product.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/product.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/product.js should pass jshint.');
  });
});
define('ember-product-list/tests/services/product-list-service.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | services/product-list-service.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/product-list-service.js should pass jshint.\nservices/product-list-service.js: line 36, col 26, Expected \'===\' and instead saw \'==\'.\n\n1 error');
  });
});
define('ember-product-list/tests/test-helper', ['exports', 'ember-product-list/tests/helpers/resolver', 'ember-qunit'], function (exports, _emberProductListTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_emberProductListTestsHelpersResolver['default']);
});
define('ember-product-list/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('ember-product-list/tests/unit/initializers/init-test', ['exports', 'ember', 'ember-product-list/initializers/init', 'qunit'], function (exports, _ember, _emberProductListInitializersInit, _qunit) {

  var application = undefined;

  (0, _qunit.module)('Unit | Initializer | init', {
    beforeEach: function beforeEach() {
      _ember['default'].run(function () {
        application = _ember['default'].Application.create();
        application.deferReadiness();
      });
    }
  });

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    _emberProductListInitializersInit['default'].initialize(application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });
});
define('ember-product-list/tests/unit/initializers/init-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/initializers/init-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/initializers/init-test.js should pass jshint.');
  });
});
define('ember-product-list/tests/unit/routes/add-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:add', 'Unit | Route | add', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-product-list/tests/unit/routes/add-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/add-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/add-test.js should pass jshint.');
  });
});
define('ember-product-list/tests/unit/routes/edit-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:edit', 'Unit | Route | edit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-product-list/tests/unit/routes/edit-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/edit-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/edit-test.js should pass jshint.');
  });
});
define('ember-product-list/tests/unit/routes/product-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:product', 'Unit | Route | product', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-product-list/tests/unit/routes/product-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/product-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/product-test.js should pass jshint.');
  });
});
define('ember-product-list/tests/unit/services/product-data-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:product-data', 'Unit | Service | product data', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('ember-product-list/tests/unit/services/product-data-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/services/product-data-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/product-data-test.js should pass jshint.');
  });
});
define('ember-product-list/tests/unit/services/product-list-service-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:product-list-service', 'Unit | Service | product list service', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('ember-product-list/tests/unit/services/product-list-service-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/services/product-list-service-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/product-list-service-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('ember-product-list/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map