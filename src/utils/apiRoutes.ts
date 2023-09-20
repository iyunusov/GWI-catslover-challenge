export const apiRoute = 'https://api.thecatapi.com/v1';
export const apiHeaders = { 
  'content-type': "application/json",
  'x-api-key': 'live_BUDsVCSFwkUjtxQ3PU4FFnJ1eHUEl87XNH3uAaPfpSh4B5sLlenYusZ1qt97aV1Q'
};

export async function getWithQuery (query: string) {
  let result;
    try {
      const fetchedImages = await fetch(`${apiRoute}${query}`, {
        method: 'GET',
        headers: apiHeaders
      })
      result = await fetchedImages.json()
    } catch (error) {
      console.log(error);
    }
  return result;
}

export async function fetchImageById (image_id: string) {
  return getWithQuery(`/images/${image_id}`);
}

export async function fetchRandomImages (limit: number) {
  return getWithQuery(`/images/search?limit=${limit}&sub_id=
    ${window?.localStorage?.getItem('sub_id')}`)
}


export async function fetchBreedImages (breed_ids: string) {
  return getWithQuery(`/images/search?limit=10&sub_id=${window?.localStorage?.getItem('sub_id')}
    ${breed_ids ? '&breed_ids=' + breed_ids: ''}
  `);
}

export function fetchFavourites () {
  return getWithQuery(`/favourites?sub_id=${window.localStorage.getItem('sub_id')}`);
}
