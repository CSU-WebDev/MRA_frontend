import Card from 'react-bootstrap/Card';

function Display(props) {
  const weatherData = props.weatherData;

  let cards = []
  if(weatherData && weatherData.current){
    cards.push(
      <Card
          // bg={variant.toLowerCase()}
          // key={variant}
          // text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>{weatherData.location.name} {weatherData.location.region}</Card.Header>
          <Card.Body>
            <Card.Title> Wheather Information </Card.Title>
            <Card.Text>
              The wheater condition for this city is
            </Card.Text>
          </Card.Body>
        </Card>
    )
  }
  // if weatherdata and WD.forecast
  // wd.forecast.forecastday.foreach((var, ind) => {
  //   cards.push(
  //     <><h1>{var.date} </h1>..... card info html</>
  //   )
  // })
  console.log(weatherData)

  return cards
}

export default Display;