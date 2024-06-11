import { Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { About } from './pages/Aboutpage';
import { Blogpage } from './pages/Blogpage';
import { Notfoundpage } from './pages/Notfoundpage';
import { Layout } from './components/Layout'
import './styles/App.css';
import { SinglePage } from './pages/SinglePage';
import BookList from './components/BookList';
function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="posts" element={<Blogpage />} />
          <Route path="books/:id" element={<SinglePage />} />
          <Route path="books" element={<BookList />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
