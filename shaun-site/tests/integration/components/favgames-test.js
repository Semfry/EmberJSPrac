import { module, test } from 'qunit';
import { setupRenderingTest } from 'shaun-site/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | favgames', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Favgames />`);

    assert.dom(this.element).hasText('Game Name: Start Year:');

    // Template block usage:
    await render(hbs`
      <Favgames>
      Game Name: Start Year:
      </Favgames>
    `);

    assert.dom(this.element).hasText('Game Name: Start Year:');
  });
});
