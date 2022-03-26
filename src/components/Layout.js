import React, { Component } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom';

import IntroPage from '../pages/IntroPage';
import ChoicePage from '../pages/ChoicePage';
import CategoriesPage from '../pages/CategoriesPage';
import InterestsPage from '../pages/InterestsPage'
import LetGetStarted from "../pages/LetGetStarted"
import FieldChoice from '../pages/FieldChoice'
import QuizPage from '../pages/QuizPage';
import ValuesPage from '../pages/ValuesPage';
import Subs from '../pages/Subs';
import SubsIntro from '../pages/SubsIntro';
import Payment from '../pages/Payment';
import ArcadesPage from '../pages/ArcadesPage';
import ArcadesDetailsPage from '../pages/ArcadeDetailsPage';

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
                <Route path="/letsGetStarted" element={<LetGetStarted/>} />
                <Route path="/fields" element={<FieldChoice/>} />
                <Route path="/quizes" element={<QuizPage />} />
                <Route path="/proServicesIntro" element={<ValuesPage/> } />
                <Route path="/activeSubs" element={<Subs/>} />
                <Route path="/buy" element={<SubsIntro/>} />
                <Route path="/offers" element={<Payment/>} />
                <Route path="/arcades" element={<ArcadesPage />} />
                <Route path="/arcadesDetails" element={<ArcadesDetailsPage />} />
                <Route
                    path="*"
                    element={<Navigate to="/portal" />}
                />
            </Routes>
        )
    }
}