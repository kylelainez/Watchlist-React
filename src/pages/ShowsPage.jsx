import React from 'react';
import showService from '../utils/showService';

export default function ShowsPage() {
    showService.fetchData('test');
    return <div></div>;
}
