import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CreatePerson, ListPeople } from 'pages'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListPeople />} />
        <Route path="/new-person" element={<CreatePerson />} />
        <Route path="/update-person/:id" element={<CreatePerson />} />
      </Routes>
    </BrowserRouter>
  )
}
