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
  return (
    <main>
      <section>
        <ol>
          {entries[2021].map((entry) => {
          return <li> {entry} </li>
        })}
        </ol>
      </section>
    </main>
  );
};