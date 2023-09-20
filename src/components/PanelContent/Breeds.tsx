import { useEffect } from "react";
import { useState } from 'react';
import { apiRoute, apiHeaders } from '@/utils/apiRoutes';
import BreedList from "../BreedList/BreedList";
import { usePathname } from "next/navigation";

export default function Breeds () {
  const [breeds, setBreeds] = useState([]);
  const [, tabName] = usePathname().split('/');

  useEffect(() => {
    if (tabName === 'breeds' && !breeds.length) {
      try {
        (async function () {
          const fetchedImages = await fetch(`${apiRoute}/breeds?sub_id=${window.localStorage.getItem('sub_id')}`, {
            method: 'GET',
            headers: apiHeaders
          })
          const parsedBreeds = await fetchedImages.json()
          setBreeds(parsedBreeds)
        }())
      } catch (error) {
        console.log(error);
      }
    }
  }, [tabName, breeds.length])

  return (
    <BreedList breeds={breeds} />
  )
}