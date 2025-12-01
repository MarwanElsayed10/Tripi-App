"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface Reviews{
  rating: number;
  review: string;
  user: string;
  date: string;
}
interface DataItem {
  // Define the structure of your data items here
  id: number;
  key: string;
  city: string;
  name: string;
  country: string;
  image_url: string;
  description: string;
  continent: string;  
  annual_visitors: number; 
  activities:[number];
  reviews:[Reviews];
  trip_prices:{
    average_price_usd: number;
    min_price_usd: number;
    max_price_usd: number;
  };
  extra_info:{
    best_time_to_visit: string;
    recommended_visit_duration_hours: number;
    height_meters: number;
    established: number;
  };
  rating:number;
  review_count:number;
}

interface DataTourData{
  id: number;
  image: string;
  title: string;
  location: string;
  time: string;
  type: string;
  rating: number;
  reviews: string;
  price: string;
}

interface DataHotels{
  id: number;
  image: string;
  name: string;
  location: string;
  rating: number;
  reviews: string;
  price: string;
}

interface DataContextType {
  place: Array<DataItem>;
  tourData: Array<DataTourData>;
  hotelData: Array<DataHotels>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
    const [place, setPlace] = useState<Array<DataItem>>([]);
    const [tourData , setTourData] = useState<Array<DataTourData>>([])
    const [hotelData , setHotelData] = useState<Array<DataHotels>>([])
    
    
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/MarwanElsayed10/Tripi-App/refs/heads/main/public/data/tourism_dataset_100_realistic%20(2).json")
        .then(res => res.json())
        .then(data => {
            setPlace(data.places)
            setTourData(data.tourData)
            setHotelData(data.hotels)
            console.log(data)
        });
}, []);
  return (
    <DataContext.Provider value={{ place , tourData , hotelData }}>
      {children}
    </DataContext.Provider>
  );
};

        export const useData = () => {
          const context = useContext(DataContext);
          if (context === undefined) {
            throw new Error('useData must be used within a DataProvider');
          }
          return context;
        };