import { getBrowserLanguageCode, getBrowserLanguageName } from "./utils";

const App = () => {
  const browserLanguageCode = getBrowserLanguageCode();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="mt-4 text-center">Browser Language Detection</h1>
          <br />
          <table className="table table-bordered table-sm">
            <thead>
              <tr>
                <th>Source</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>navigator.languages</code>
                </td>
                <td>{JSON.stringify(navigator.languages)}</td>
              </tr>
              <tr>
                <td>
                  <code>navigator.language</code>
                </td>
                <td>{JSON.stringify(navigator.language)}</td>
              </tr>
              <tr>
                <td>
                  <code>getBrowserLanguageCode</code>
                </td>
                <td>{JSON.stringify(browserLanguageCode)}</td>
              </tr>
              <tr>
                <td>
                  <code>getBrowserLanguageName</code>
                </td>
                <td>
                  {JSON.stringify(getBrowserLanguageName(browserLanguageCode))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default App;
