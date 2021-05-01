import { AppHeader } from './app-header';
import { AppContent } from './app-content';
import './style.scss';


export const MainApp = () => {
    return (
        <div className="main-app">
            <AppHeader />
            <AppContent />
        </div>
    )
}