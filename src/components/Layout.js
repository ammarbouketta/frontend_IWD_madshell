import React, { Component } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom';

import IntroPage from '../pages/IntroPage';
import ChoicePage from '../pages/ChoicePage';
import CategoriesPage from '../pages/CategoriesPage';
import InterestsPage from '../pages/InterestsPage'

export default class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
      }

    render() {
        return (
            <Routes>
                <Route path="/portal" element={<IntroPage />} />
                {/* <Route path="/participantsList/:activityId" element={<ParticipantsListPage />} /> */}
                <Route path="/menu" element={<ChoicePage />} />
                <Route path="/categories" element={<CategoriesPage />}/>
                <Route path="/interests" element={<InterestsPage />}/>
                <Route
                    path="*"
                    element={<Navigate to="/portal" />}
                />
            </Routes>
        )
    }
}