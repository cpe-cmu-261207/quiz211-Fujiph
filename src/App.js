function App() {
  const persons = [
    {
      name: "Bob",
      gender: "male",
      age: "50"
    },
    {
      name: "Alice",
      gender: "male",
      age: "20"
    },
    {
      name: "Aueboon Ruanekamfu 620612170",
      gender: "male",
      age: "19"
    }
  ];
  return (
    <div class="ml-2">
      <h3 class="title is-3">Person List</h3>

      {/* Convert me to a component! */}
      <table class="table is-bordered mb-3">
        <div>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Age</th>
            </tr>
            <tr>
              <td>Bob</td>
              <td>male</td>
              <td>50</td>
            </tr>
          </tbody>
        </div>
        <div>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Age</th>
            </tr>
            <tr>
              <td>Alice</td>
              <td>male</td>
              <td>50</td>
            </tr>
          </tbody>
        </div>
        <div>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Age</th>
            </tr>
            <tr>
              <td>Aueboon Ruanekamfu 620612170</td>
              <td>male</td>
              <td>19</td>
            </tr>
          </tbody>
        </div>
      </table>

      {/* Code me please! */}
      <h3 class="title is-3">ID Counter</h3>
      <p>YOUR ID HERE</p>
      <button>-</button>
      <button>reset</button>
      <button>+</button>
    </div>
  );
}

export default App;
