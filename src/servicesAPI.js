export const getCharacters = async (dispatch) => {
    const response = await fetch('https://thesimpsonsapi.com/api/characters')
    const data = await response.json()
    console.log(data);
    dispatch({ type: 'set_results', payload: data.results })
}