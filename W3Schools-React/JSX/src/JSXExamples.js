const x = 5;
let text = "Goodbye";
if (x < 10) {
  text = "Hello";
}

function JSXExamples() {
  return (
    <>
      <h1>I Love JSX!</h1>

      <ul>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Cherries</li>
      </ul>

      <label>Test Input</label>
      <input type="text" name="test-input" />

      <h3 className="myclass">className == class</h3>

      <p>Conditions - if statements: {text}</p>
    </>
  );
}

export default JSXExamples;
