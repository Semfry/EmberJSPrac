import { module, test } from 'qunit';
import { setupTest } from 'shaun-site/tests/helpers';

module('Unit | Model | modlists', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('modlists', {});
    assert.ok(model);
  });
});
