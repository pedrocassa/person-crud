import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CreatePerson, ListPeople, UpdatePerson } from 'pages'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/people" element={<ListPeople />} />
        <Route path="/new-person" element={<CreatePerson />} />
        <Route path="/update-person/:id" element={<UpdatePerson />} />
      </Routes>
    </BrowserRouter>
  )
}
