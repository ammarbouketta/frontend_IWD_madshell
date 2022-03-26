import React, { Component } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom';

import IntroPage from '../pages/IntroPage';
import ChoicePage from '../pages/ChoicePage';
import CategoriesPage from '../pages/CategoriesPage';
import InterestsPage from '../pages/InterestsPage'
import LetGetStarted from "../pages/LetGetStarted"
import FieldChoice from '../pages/FieldChoice'
<<<<<<< HEAD
import QuickPage from '../pages/QuizPage'
=======
import QuizPage from '../pages/QuizPage';
>>>>>>> 6226759b887084cc54006c424a932b78e7420cb4

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
                <Route path="/quizes" element={<QuickPage />} />
                <Route
                    path="*"
                    element={<Navigate to="/portal" />}
                />
            </Routes>
        )
    }
}