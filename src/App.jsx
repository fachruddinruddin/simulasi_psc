import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Admin/Dashboard';
import InventoryList from './pages/Admin/InventoryList';
import ItemDetail from './pages/Admin/ItemDetail';
import AddItem from './pages/Admin/AddItem';
import { InventoryProvider } from './context/InventoryContext';
import { MahasiswaProvider } from './context/MahasiswaContext';
import Mahasiswa from './pages/Admin/Mahasiswa';

function App() {
  return (
    <InventoryProvider>
      <MahasiswaProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/mahasiswa" element={<Mahasiswa />} />
              <Route path="/inventory" element={<InventoryList />} />
              <Route path="/inventory/:id" element={<ItemDetail />} />
              <Route path="/add" element={<AddItem />} />
            </Routes>
          </Layout>
        </Router>
      </MahasiswaProvider>
    </InventoryProvider>
  );
}

export default App;