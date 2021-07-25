const AlgoSorting = () => {
  const numberArr = [];
  numberArr.push(
    1,
    2,
    654,
    4564,
    75678,
    34,
    123,
    234,
    5234,
    526,
    234,
    634,
    564,
    5,
    75,
    685,
    67,
    3645,
    7,
    56,
    36
  );

  const sorting = (arr) => {
    for (let a = 0; a < arr.length; a++) {
      for (let b = 0; b < arr.length; b++) {
        if (arr[b] > arr[b + 1]) {
          let flag = arr[b];
          arr[b] = arr[b + 1];
          arr[b + 1] = flag;
        }
      }
    }
    console.log('arr');
    console.log(arr);
  };

  sorting(numberArr);

  return (
    <>
      <div>numberArr:</div>
      <ul style={{ listStyle: 'none' }}>
        {numberArr.map((number) => (
          <li>{number}</li>
        ))}
      </ul>
      <div>{numberArr.length}</div>

      <hr></hr>
      <div>Ordenado .sort():</div>
      <ul style={{ listStyle: 'none' }}>
        {numberArr.sort().map((number) => (
          <li>{number}</li>
        ))}
      </ul>

      <hr></hr>
      {/* <div>Ordenado Personalizado:</div> */}
      {/* <ul style={{ listStyle: 'none' }}>
        {newOrdArr.map((number) => (
          <li>{number}</li>
        ))}
      </ul> */}

      <hr></hr>
      <div>Ordenado .sort(function):</div>
      <ul style={{ listStyle: 'none' }}>
        {numberArr
          .sort(function (a, b) {
            return a - b;
          })
          .map((number) => (
            <li>{number}</li>
          ))}
      </ul>
    </>
  );
};
export default AlgoSorting;
