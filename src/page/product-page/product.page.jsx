import React from 'react';
import './product.page.scss';
import Directory from '../../directory-item/directory-item';
import { Outlet } from 'react-router-dom';

const ProductPage = () => (
    <div className="product-page">
        <Directory></Directory>
    </div>
);

export default ProductPage;