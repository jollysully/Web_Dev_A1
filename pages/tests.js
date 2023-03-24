import { handleSubmit } from './pages/index.js';


QUnit.test('handleSubmit', async function(assert) {
  const done = assert.async();
  const username = 'testuser';
  const password = 'testpassword';
  const endpoint = '/api/login';

  // Mock response from the server
  const responseBody = { success: true };
  const responseInit = { status: 200 };
  const response = new Response(JSON.stringify(responseBody), responseInit);
  const fetchStub = sinon.stub(window, 'fetch').resolves(response);

  // Mock form submit event
  const form = document.createElement('form');
  const usernameInput = document.createElement('input');
  const passwordInput = document.createElement('input');
  usernameInput.setAttribute('id', 'username');
  usernameInput.setAttribute('value', username);
  passwordInput.setAttribute('id', 'password');
  passwordInput.setAttribute('value', password);
  form.appendChild(usernameInput);
  form.appendChild(passwordInput);
  const event = { preventDefault: sinon.spy(), target: form };

  // Call handleSubmit and wait for it to finish
  await handleSubmit(event);

  // Verify that fetch was called with the expected arguments
  assert.equal(fetchStub.callCount, 1, 'fetch was called once');
  const [actualEndpoint, actualOptions] = fetchStub.getCall(0).args;
  assert.equal(actualEndpoint, endpoint, 'fetch was called with the expected endpoint');
  assert.deepEqual(actualOptions, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  }, 'fetch was called with the expected options');

  // Verify that the form submit event was prevented
  assert.ok(event.preventDefault.called, 'form submit event was prevented');

  // Verify that the router was called with the expected argument
  assert.equal(routerStub.callCount, 1, 'router.push was called once');
  assert.equal(routerStub.getCall(0).args[0], './listAllCourses', 'router.push was called with the expected argument');

  // Clean up
  fetchStub.restore();
  done();
});