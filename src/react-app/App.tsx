import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';

// About Us Pages (lazy loaded for performance)
import AboutTayiSadhanaYoga from './pages/about/AboutTayiSadhanaYoga';
import SadhanaYogi from './pages/about/SadhanaYogi';
import GurujiMessage from './pages/about/GurujiMessage';
import VisionMission from './pages/about/VisionMission';
import SadhanaYogaCulture from './pages/about/SadhanaYogaCulture';

// Divine Project Pages
import DivineProject from './pages/divine-project/DivineProject';
import BirthOfMother from './pages/divine-project/BirthOfMother';
import EducationSupport from './pages/divine-project/EducationSupport';
import Donation from './pages/divine-project/Donation';

// System Pages
import TayiCulture from './pages/system/TayiCulture';
import TayiSadhanaYogaSystem from './pages/system/TayiSadhanaYogaSystem';
import NatureCure from './pages/system/NatureCure';

// Education Pages
import CoursesOverview from './pages/education/CoursesOverview';
import YogaTTC from './pages/education/YogaTTC';
import NatureCureTTC from './pages/education/NatureCureTTC';
import TayiYoga12Years from './pages/education/TayiYoga12Years';

// Other Pages
import Disciples from './pages/Disciples';
import TeacherCertification from './pages/certification/TeacherCertification';
import CodeOfDiscipline from './pages/certification/CodeOfDiscipline';
import Gallery from './pages/media/Gallery';
import Videos from './pages/media/Videos';
import NewsEvents from './pages/media/NewsEvents';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          {/* About Us Routes */}
          <Route path="about">
            <Route path="tayi-sadhana-yoga" element={<AboutTayiSadhanaYoga />} />
            <Route path="sadhana-yogi" element={<SadhanaYogi />} />
            <Route path="guruji-message" element={<GurujiMessage />} />
            <Route path="vision-mission" element={<VisionMission />} />
          </Route>

          {/* Divine Project Routes */}
          <Route path="divine-project">
            <Route index element={<DivineProject />} />
            <Route path="birth-of-mother" element={<BirthOfMother />} />
            <Route path="education-support" element={<EducationSupport />} />
            <Route path="donation" element={<Donation />} />
          </Route>

          {/* Sadhana Yoga Culture */}
          <Route path="sadhana-yoga-culture" element={<SadhanaYogaCulture />} />

          {/* System Routes */}
          <Route path="system">
            <Route path="tayi-culture" element={<TayiCulture />} />
            <Route path="tayi-sadhana-yoga" element={<TayiSadhanaYogaSystem />} />
            <Route path="nature-cure" element={<NatureCure />} />
          </Route>

          {/* Education Routes */}
          <Route path="education">
            <Route path="overview" element={<CoursesOverview />} />
            <Route path="12-years" element={<TayiYoga12Years />} />
            <Route path="yoga-ttc" element={<YogaTTC />} />
            <Route path="nature-cure-ttc" element={<NatureCureTTC />} />
          </Route>

          {/* Other Routes */}
          <Route path="disciples" element={<Disciples />} />

          <Route path="certification">
            <Route path="teacher-certification" element={<TeacherCertification />} />
            <Route path="code-of-discipline" element={<CodeOfDiscipline />} />
          </Route>

          <Route path="media">
            <Route path="gallery" element={<Gallery />} />
            <Route path="videos" element={<Videos />} />
            <Route path="news-events" element={<NewsEvents />} />
          </Route>

          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
