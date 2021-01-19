import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from '../../slice/appSlice';
import NavigationRoutes from "../utils/appRouting";
import Footer from "../utils/appFooter";
import ExternalPlugin from '../external-pugin/external-component';
import styles from "../home/home-component.module.css";

export function HomeComponent() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div className="container">
      <ExternalPlugin />
      <div className="navigation">
        <NavigationRoutes />
      </div>
        <Footer />
    </div>
  );
}
