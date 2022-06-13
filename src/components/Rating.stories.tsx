import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Rating, ValueType} from "./Rating";

export default {
  title: 'Stories rating',
  component: Rating,
}
export const EmptyRating = () => <Rating value={0} callBack = {x=>x}/>
export const Rating1 = () => <Rating value={1} callBack = {x=>x}/>
export const Rating2 = () => <Rating value={2} callBack = {x=>x}/>
export const Rating3 = () => <Rating value={3} callBack = {x=>x}/>
export const Rating4 = () => <Rating value={4} callBack = {x=>x}/>
export const Rating5 = () => <Rating value={5} callBack = {x=>x}/>
export const RatingChanging = () => {
    let [rating,setRating] = useState<ValueType>(3)
  return <Rating value={rating} callBack= {setRating}/>
}
