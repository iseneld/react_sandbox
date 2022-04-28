let entries = 
  { 2021: [
      7489,
      13735,
      64232,
      89573,
      90717,
      125190,
      127369,
      129639,
      138778,
      144113,
      157738,
    ],
    2022: [
      167849,
      153312,
      171568,
      183588,
      182515
    ]
  }

export const Budget = () => {
  let currentVale = 0;
  let previousValue = 0;

  return (
    <main>
      <section>
        <table>
          <tr>
            <th>2021</th>
            {entries[2021].map((entry) => {
              return <td> {entry} </td>
            })}
            {/* <td>
              <strong>
                {entries[2021].reduce((acc, curr) => {
                  return acc + curr;
                })}
              </strong>
            </td> */}
          </tr>
          <tr>
            <th>Profit</th>
            {entries[2021].map((entry) => {
              previousValue = currentVale;
              currentVale = entry;
              let print = currentVale - previousValue;
              return <td className={print > 10000 ? "green" : ""}> {print} </td>
            })}
          </tr>
        </table>
      </section>
    </main>
  );
};