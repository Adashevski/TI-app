export const cheatCheck = () => {
  return (
    <div>
      <h4 className="cheatCheck">
        Skrypt został uruchomiony {runCount} razy w ciągu ostatnich 5 minut.
      </h4>
      <p>Ostatnie losowanie:</p>
      <ul>
        {lastGameResult.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};
