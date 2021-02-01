const App = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h1 className="mt-4 text-center">Browser Language Detection</h1>
        <hr />
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Source</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>navigator.language</code>
              </td>
              <td>{navigator.language}</td>
            </tr>
            <tr>
              <td>
                <code>navigator.languages</code>
              </td>
              <td>{JSON.stringify(navigator.languages)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default App;
