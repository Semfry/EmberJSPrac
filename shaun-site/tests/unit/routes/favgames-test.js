import { module, test } from 'qunit';
import { setupTest } from 'shaun-site/tests/helpers';

module('Unit | Route | favgames', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:favgames');
    assert.ok(route);
  });
});
