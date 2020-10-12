import { json } from 'body-parser';
import { useState } from 'react';
const axios = require('../utils/axiosInstance');

export default function Home() {
  const [country, setCountry] = useState();
  const [city, setCity] = useState();
  const [data, setData] = useState();

  const onSearch = async e => {
    e.preventDefault();
    try {
      const result = await axios.get(`api/search?city=${city}?country=?${country}`);
      console.log(result);
      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form style={styles.form} onSubmit={onSearch}>
      <input
        style={styles.searchBox}
        type="text"
        placeholder="Fill your country.."
        value={country}
        onChange={e => setCountry(e.target.value)}
      />
      <input
        style={styles.searchBox}
        type="text"
        placeholder="Fill your city.."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <button type="submit">Search</button>
      <div>{data && JSON.stringify(data)}</div>
    </form>
  );
}

const styles = {
  form: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '60vw'
  },
  searchBox: { alignSelf: 'center' }
};
